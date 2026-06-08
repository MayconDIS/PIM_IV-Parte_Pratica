using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Routing;
using Microsoft.EntityFrameworkCore;
using System;
using System.Linq;
using System.Text.RegularExpressions;
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
            app.MapPost("/api/auth/register", async (RegisterRequest request, AppDbContext db) =>
            {
                if (await db.Usuarios.AnyAsync(u => u.Username == request.Username)) 
                    return Results.BadRequest(new { message = "Usuário já existe" });
                if (await db.Usuarios.AnyAsync(u => u.Email == request.Email)) 
                    return Results.BadRequest(new { message = "Email já cadastrado" });

                var user = new Usuario
                {
                    Username = request.Username,
                    Email = request.Email,
                    SenhaHash = BCrypt.Net.BCrypt.HashPassword(request.Password)
                };

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
                    Issuer = "NexTI_API",
                    Audience = "NexTI_Frontend",
                    Expires = DateTime.UtcNow.AddHours(24),
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

            // --- GERAÇÃO DE CERTIFICADO EM PDF ---
            app.MapGet("/api/certificado/pdf", async (string nome, string data, string codigo) =>
            {
                if (string.IsNullOrEmpty(nome) || string.IsNullOrEmpty(data) || string.IsNullOrEmpty(codigo))
                {
                    return Results.BadRequest(new { message = "Parâmetros 'nome', 'data' e 'codigo' são obrigatórios." });
                }

                // Sanitização contra OS Command Injection (CRIT-01)
                static string SanitizarParametro(string input)
                {
                    if (string.IsNullOrEmpty(input)) return string.Empty;
                    return Regex.Replace(input, @"[""&|;`$(){}\\<>!\n\r]", "");
                }

                string nomeSafe = SanitizarParametro(nome);
                string dataSafe = SanitizarParametro(data);
                string codigoSafe = SanitizarParametro(codigo);

                // Validação de comprimento máximo
                if (nomeSafe.Length > 100 || dataSafe.Length > 80 || codigoSafe.Length > 50)
                    return Results.BadRequest(new { message = "Parâmetros excedem o comprimento permitido." });

                // Diretório temporário
                string tempDir = Path.Combine(AppDomain.CurrentDomain.BaseDirectory, "temp_certs");
                Directory.CreateDirectory(tempDir);
                
                string uniqueId = Guid.NewGuid().ToString("N");
                string pdfFileName = $"certificado_{uniqueId}.pdf";
                string pdfPath = Path.Combine(tempDir, pdfFileName);

                try
                {
                    // Encontra o caminho do script gerar_certificado.py copiado na pasta de saída da compilação
                    string scriptPath = Path.Combine(AppDomain.CurrentDomain.BaseDirectory, "Certificados", "gerar_certificado.py");

                    // Tenta usar o interpretador Python
                    string pythonExecutable = "python";
                    
                    var processInfo = new System.Diagnostics.ProcessStartInfo
                    {
                        FileName = pythonExecutable,
                        Arguments = $"\"{scriptPath}\" \"{nomeSafe}\" \"{dataSafe}\" \"{codigoSafe}\" \"{pdfPath}\"",
                        RedirectStandardOutput = true,
                        RedirectStandardError = true,
                        UseShellExecute = false,
                        CreateNoWindow = true
                    };

                    using (var process = System.Diagnostics.Process.Start(processInfo))
                    {
                        if (process == null)
                        {
                            return Results.Problem("Não foi possível iniciar o interpretador Python.");
                        }

                        await process.WaitForExitAsync();
                        string output = await process.StandardOutput.ReadToEndAsync();
                        string error = await process.StandardError.ReadToEndAsync();

                        if (process.ExitCode != 0)
                        {
                            Console.WriteLine($"Erro do Python: {error}");
                            return Results.Problem("Ocorreu um erro ao gerar o certificado PDF.");
                        }
                    }

                    if (!File.Exists(pdfPath))
                    {
                        return Results.Problem("O arquivo PDF do certificado não foi gerado pelo script.");
                    }

                    byte[] pdfBytes = await File.ReadAllBytesAsync(pdfPath);
                    
                    // Limpa o arquivo temporário após carregar em memória
                    try { File.Delete(pdfPath); } catch { }

                    return Results.File(pdfBytes, "application/pdf", $"certificado_{nomeSafe.Replace(" ", "_")}.pdf");
                }
                catch (Exception ex)
                {
                    Console.WriteLine($"Erro interno no certificado: {ex.Message}");
                    return Results.Problem("Erro interno do servidor ao gerar o certificado.");
                }
            });
        }
    }

    // DTOs para requests
    public record RegisterRequest(string Username, string Email, string Password);
    public record LoginRequest(string Username, string Password);
    public record ProgressoUpdate(int UsuarioId, int FlashcardId, int Qualidade);
    public record UserStatsUpdate(int XP, int Moedas, int Nivel);
}
