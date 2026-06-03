using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Routing;
using Microsoft.EntityFrameworkCore;
using System;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using NexTI_API.Data;
using NexTI_API.Models;
using NexTI_API.Services;

namespace NexTI_API.Endpoints
{
    public static class EndpointExtensions
    {
        public static void MapNexTiEndpoints(this IEndpointRouteBuilder app, byte[] key)
        {
            // Status Route
            app.MapGet("/api/status", () => Results.Ok(new { message = "NexTI API está online e conectada!" }))
               .WithName("GetStatus");

            // --- AUTENTICAÇÃO ---
            app.MapPost("/api/auth/register", async (Usuario user, AppDbContext db) =>
            {
                if (await db.Usuarios.AnyAsync(u => u.Username == user.Username)) 
                    return Results.BadRequest(new { message = "Usuário já existe" });
                if (await db.Usuarios.AnyAsync(u => u.Email == user.Email)) 
                    return Results.BadRequest(new { message = "Email já cadastrado" });

                user.SenhaHash = BCrypt.Net.BCrypt.HashPassword(user.SenhaHash);
                db.Usuarios.Add(user);
                await db.SaveChangesAsync();
                
                return Results.Ok(new { message = "Usuário criado com sucesso!", userId = user.Id });
            });

            app.MapPost("/api/auth/login", async (LoginRequest request, AppDbContext db) =>
            {
                var user = await db.Usuarios.FirstOrDefaultAsync(u => u.Username == request.Username || u.Email == request.Username);
                if (user == null || !BCrypt.Net.BCrypt.Verify(request.Password, user.SenhaHash))
                    return Results.Unauthorized();

                // Geração do Token JWT
                var tokenHandler = new JwtSecurityTokenHandler();
                var tokenDescriptor = new SecurityTokenDescriptor
                {
                    Subject = new ClaimsIdentity(new[] { 
                        new Claim(ClaimTypes.NameIdentifier, user.Id.ToString()),
                        new Claim(ClaimTypes.Name, user.Username)
                    }),
                    Expires = DateTime.UtcNow.AddDays(7),
                    SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
                };
                var token = tokenHandler.CreateToken(tokenDescriptor);
                var tokenString = tokenHandler.WriteToken(token);

                return Results.Ok(new { 
                    token = tokenString,
                    user = new { 
                        id = user.Id, 
                        username = user.Username, 
                        nivel = user.Nivel, 
                        xp = user.XP, 
                        moedas = user.Moedas 
                    }
                });
            });

            // --- USUÁRIOS ---
            app.MapGet("/api/usuarios/{username}", async (string username, AppDbContext db) =>
            {
                var user = await db.Usuarios
                    .Where(u => u.Username == username)
                    .Select(u => new { u.Id, u.Username, u.Nivel, u.XP, u.Moedas })
                    .FirstOrDefaultAsync();
                    
                return user is not null ? Results.Ok(user) : Results.NotFound(new { message = "Usuário não encontrado" });
            });

            // --- FASES ---
            app.MapGet("/api/fases", async (AppDbContext db) =>
            {
                var fases = await db.Fases.ToListAsync();
                return Results.Ok(fases);
            });

            // --- FLASHCARDS ---
            app.MapGet("/api/fases/{codigoFase}/flashcards", async (string codigoFase, AppDbContext db) =>
            {
                var flashcards = await db.Flashcards.Where(f => f.CodigoFase == codigoFase).ToListAsync();
                return flashcards.Any() ? Results.Ok(flashcards) : Results.NotFound(new { message = "Nenhum flashcard encontrado para esta fase" });
            });

            // --- SM-2 PROGRESSO (PROTEGIDO) ---
            app.MapPost("/api/progresso/atualizar", async (ProgressoUpdate request, AppDbContext db, ClaimsPrincipal userClaims, ISm2Engine sm2Engine) =>
            {
                // Validação: O ID do usuário deve vir do Token JWT, não do corpo da requisição
                var userIdClaim = userClaims.FindFirst(ClaimTypes.NameIdentifier)?.Value;
                if (string.IsNullOrEmpty(userIdClaim)) return Results.Unauthorized();
                
                if (!int.TryParse(userIdClaim, out int currentUserId))
                    return Results.BadRequest(new { message = "Identificador de usuário inválido no token." });
                if (currentUserId != request.UsuarioId) return Results.Forbid();

                var progresso = await db.Progresso_Flashcards.FindAsync(currentUserId, request.FlashcardId);
                
                if (progresso == null)
                {
                    progresso = new ProgressoFlashcard { 
                        UsuarioId = currentUserId, 
                        FlashcardId = request.FlashcardId,
                        FatorFacilidade = 2.5
                    };
                    db.Progresso_Flashcards.Add(progresso);
                }

                // Inversão de dependência para aplicar cálculo do SM-2 (DIP)
                sm2Engine.Calcular(progresso, request.Qualidade);

                await db.SaveChangesAsync();

                return Results.Ok(progresso);
            }).RequireAuthorization();

            // --- ATUALIZAR ESTATÍSTICAS DO USUÁRIO (PROTEGIDO) ---
            app.MapPut("/api/usuarios/stats", async (UserStatsUpdate request, AppDbContext db, ClaimsPrincipal userClaims) =>
            {
                var userIdClaim = userClaims.FindFirst(ClaimTypes.NameIdentifier)?.Value;
                if (string.IsNullOrEmpty(userIdClaim)) return Results.Unauthorized();
                
                if (!int.TryParse(userIdClaim, out int currentUserId))
                    return Results.BadRequest(new { message = "Identificador de usuário inválido no token." });
                var user = await db.Usuarios.FindAsync(currentUserId);
                if (user == null) return Results.NotFound(new { message = "Usuário não encontrado" });
                
                // Validações básicas de segurança na atualização de estatísticas (Anti-Cheat)
                if (request.XP < user.XP) return Results.BadRequest(new { message = "O progresso de XP não pode diminuir." });
                if (request.Nivel < user.Nivel) return Results.BadRequest(new { message = "O nível não pode diminuir." });
                
                // Limitar ganho máximo de XP por transição (Máximo em fase final é 30 XP, colocamos margem de segurança de 150 XP)
                int xpDelta = request.XP - user.XP;
                if (xpDelta > 150) return Results.BadRequest(new { message = "Incremento de XP suspeito detectado (máx. permitido por ciclo é 150 XP)." });
                
                // Limitar ganho máximo de Moedas por transição (Fase final concede até 70 Coins, margem de segurança de 150 Coins)
                // Obs: O usuário pode perder moedas ao comprar bônus na loja, então moedasDelta pode ser negativo (permitido).
                int moedasDelta = request.Moedas - user.Moedas;
                if (moedasDelta > 150) return Results.BadRequest(new { message = "Incremento de Moedas suspeito detectado (máx. permitido por ciclo é 150 Coins)." });

                user.XP = request.XP;
                user.Moedas = request.Moedas;
                user.Nivel = request.Nivel;
                
                await db.SaveChangesAsync();
                return Results.Ok(new { message = "Estatísticas atualizadas!", xp = user.XP, moedas = user.Moedas, nivel = user.Nivel });
            }).RequireAuthorization();

            // --- SIMULADOS (UML PIM IV) ---
            app.MapGet("/api/simulados/areas", async (AppDbContext db) =>
            {
                var areas = await db.AreasConhecimento.ToListAsync();
                return Results.Ok(areas);
            });

            app.MapGet("/api/simulados/questoes", async (AppDbContext db) =>
            {
                var questoes = await db.Questoes
                    .Include(q => q.Alternativas)
                    .Select(q => new {
                        q.Id,
                        q.IdArea,
                        q.Enunciado,
                        q.Origem,
                        Alternativas = q.Alternativas.Select(a => new { a.Id, a.Texto, a.IsCorreta })
                    })
                    .ToListAsync();
                return Results.Ok(questoes);
            });
        }
    }

    // DTOs para requests
    public record LoginRequest(string Username, string Password);
    public record ProgressoUpdate(int UsuarioId, int FlashcardId, int Qualidade);
    public record UserStatsUpdate(int XP, int Moedas, int Nivel);
}
