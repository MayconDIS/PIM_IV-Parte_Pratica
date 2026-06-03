# Refatoração SOLID do Backend C#

Este plano descreve as alterações técnicas necessárias para refatorar o backend em C# do projeto Nex_TI, aplicando as diretrizes do **SOLID**, especificamente o **SRP (Single Responsibility Principle)** e o **DIP (Dependency Inversion Principle)**.

Isso isolará a lógica matemática do algoritmo SM-2 e organizará as rotas da API que hoje estão acopladas de forma redundante em `Program.cs`.

## User Review Required

> [!IMPORTANT]
> A refatoração reorganizará a estrutura do backend sem alterar o comportamento ou contrato de nenhuma rota pública da API. O frontend continuará consumindo as rotas exatamente da mesma forma.

## Proposed Changes

Faremos alterações na pasta `backend/` do projeto, criando subpastas para Serviços (`Services/`) e Endpoints (`Endpoints/`) e limpando o arquivo central.

---

### [Component Name] Backend Service Layer & Route Modularization

#### [NEW] [ISm2Engine.cs](file:///C:/Users/mayco/Documents/GitHub/PIM_III-Parte_Pratica/backend/Services/ISm2Engine.cs)
Criação da interface de abstração do motor SM-2 (DIP).
```csharp
using NexTI_API.Models;

namespace NexTI_API.Services
{
    public interface ISm2Engine
    {
        void Calcular(ProgressoFlashcard progresso, int qualidade);
    }
}
```

#### [NEW] [Sm2Engine.cs](file:///C:/Users/mayco/Documents/GitHub/PIM_III-Parte_Pratica/backend/Services/Sm2Engine.cs)
Criação da classe de serviço do SM-2 com a lógica matemática isolada do arquivo HTTP principal (SRP).
```csharp
using System;
using NexTI_API.Models;

namespace NexTI_API.Services
{
    public class Sm2Engine : ISm2Engine
    {
        public void Calcular(ProgressoFlashcard progresso, int qualidade)
        {
            if (qualidade >= 3)
            {
                if (progresso.Repeticoes == 0) progresso.IntervaloDias = 1;
                else if (progresso.Repeticoes == 1) progresso.IntervaloDias = 6;
                else progresso.IntervaloDias = progresso.IntervaloDias * progresso.FatorFacilidade;
                
                progresso.Repeticoes++;
                progresso.FatorFacilidade = progresso.FatorFacilidade + (0.1 - (5 - qualidade) * 0.1);
            }
            else
            {
                progresso.Repeticoes = 0;
                progresso.IntervaloDias = 1;
                progresso.FatorFacilidade = Math.Max(1.3, progresso.FatorFacilidade - 0.2);
            }

            progresso.DataProximaRevisao = DateTime.UtcNow.Date.AddDays((int)progresso.IntervaloDias);
        }
    }
}
```

#### [NEW] [EndpointExtensions.cs](file:///C:/Users/mayco/Documents/GitHub/PIM_III-Parte_Pratica/backend/Endpoints/EndpointExtensions.cs)
Mapeamento modularizado de todas as rotas da API, removendo os endpoints em massa de `Program.cs` e separando responsabilidades (SRP / OCP).
```csharp
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Routing;
using Microsoft.EntityFrameworkCore;
using System.Security.Claims;
using System.Text;
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
            // Status
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
                var user = await db.Usuarios.FirstOrDefaultAsync(u => u.Username == request.Username);
                if (user == null || !BCrypt.Net.BCrypt.Verify(request.Password, user.SenhaHash))
                    return Results.Unauthorized();

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
                var userIdClaim = userClaims.FindFirst(ClaimTypes.NameIdentifier)?.Value;
                if (string.IsNullOrEmpty(userIdClaim)) return Results.Unauthorized();
                
                int currentUserId = int.Parse(userIdClaim);
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

                // Inversão de dependência: Chama a lógica isolada no Engine Service
                sm2Engine.Calcular(progresso, request.Qualidade);

                await db.SaveChangesAsync();
                return Results.Ok(progresso);
            }).RequireAuthorization();
        }
    }
}
```

#### [MODIFY] [Program.cs](file:///C:/Users/mayco/Documents/GitHub/PIM_III-Parte_Pratica/backend/Program.cs)
Limpeza completa do arquivo de ponto de entrada. Registrar o serviço `ISm2Engine` no contêiner de DI e acionar as extensões de endpoints.
```csharp
using Microsoft.EntityFrameworkCore;
using NexTI_API.Data;
using NexTI_API.Services;
using NexTI_API.Endpoints;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using System.Text;

var builder = WebApplication.CreateBuilder(args);

// Configuração do CORS
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowFrontend",
        policy => policy.WithOrigins("http://127.0.0.1:5500", "http://localhost:5500")
                        .AllowAnyMethod()
                        .AllowAnyHeader());
});

// Configuração de Autenticação JWT
var jwtKey = "NexTI_Secret_Key_2026_Super_Secure_Key_123!";
var key = Encoding.ASCII.GetBytes(jwtKey);

builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer(options =>
    {
        options.TokenValidationParameters = new TokenValidationParameters
        {
            ValidateIssuerSigningKey = true,
            IssuerSigningKey = new SymmetricSecurityKey(key),
            ValidateIssuer = false,
            ValidateAudience = false
        };
    });

builder.Services.AddAuthorization();

// Registro das dependências customizadas (DIP)
builder.Services.AddSingleton<ISm2Engine, Sm2Engine>();

// Configuração do Entity Framework
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

builder.Services.AddOpenApi();

var app = builder.Build();

app.UseCors("AllowFrontend");

if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

app.UseHttpsRedirection();
app.UseAuthentication();
app.UseAuthorization();

// Registro Modular de Endpoints
app.MapNexTiEndpoints(key);

app.Run();
```

---

## Verification Plan

### Automated Tests
- Verificação se o projeto compila após as mudanças:
  `dotnet build backend/`
- Testar se os endpoints continuam respondendo corretamente subindo o serviço localmente:
  `dotnet run --project backend/`

### Manual Verification
- Acessar a aplicação no frontend e rodar o fluxo completo de registro, login, carregamento do dashboard e conclusão de uma sessão de flashcards (testando o cálculo e salvamento do progresso via SM-2).
