using Microsoft.EntityFrameworkCore;
using NexTI_API.Data;
using NexTI_API.Services;
using NexTI_API.Endpoints;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using System.IO;

var builder = WebApplication.CreateBuilder(args);

// Configuração do CORS
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowFrontend",
        policy => policy.WithOrigins("http://127.0.0.1:5500", "http://localhost:5500", "http://127.0.0.1:5501", "http://localhost:5501")
                        .AllowAnyMethod()
                        .AllowAnyHeader());
});

// Configuração de Autenticação JWT
var jwtKey = builder.Configuration["Jwt:Key"]
    ?? throw new InvalidOperationException("A chave JWT deve ser configurada em appsettings.Development.json (seção Jwt:Key).");
var key = Encoding.ASCII.GetBytes(jwtKey);

builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer(options =>
    {
        options.TokenValidationParameters = new TokenValidationParameters
        {
            ValidateIssuerSigningKey = true,
            IssuerSigningKey = new SymmetricSecurityKey(key),
            ValidateIssuer = true,
            ValidIssuer = "NexTI_API",
            ValidateAudience = true,
            ValidAudience = "NexTI_Frontend"
        };
    });

builder.Services.AddAuthorization();

// Registro das dependências customizadas (SOLID - DIP)
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

if (!app.Environment.IsDevelopment())
{
    app.UseHttpsRedirection();
}

app.UseAuthentication();
app.UseAuthorization();

// Registro Modular de Endpoints (SOLID - SRP)
app.MapNexTiEndpoints(key);

// Criação automática do banco de dados e tabelas caso não existam
using (var scope = app.Services.CreateScope())
{
    var db = scope.ServiceProvider.GetRequiredService<AppDbContext>();
    db.Database.EnsureCreated();

    // Seeding automático inteligente baseado no NexTI_DB.sql
    if (!db.Flashcards.Any() || db.Flashcards.Count() < 400)
    {
        Console.WriteLine("--> Inicializando seeding automático do banco de dados...");
        try
        {
            // Tenta localizar o arquivo NexTI_DB.sql nos caminhos possíveis
            string sqlPath = Path.Combine(AppDomain.CurrentDomain.BaseDirectory, "database", "NexTI_DB.sql");
            if (!File.Exists(sqlPath))
                sqlPath = Path.Combine(Directory.GetCurrentDirectory(), "database", "NexTI_DB.sql");
            if (!File.Exists(sqlPath))
                sqlPath = Path.Combine(Directory.GetCurrentDirectory(), "..", "database", "NexTI_DB.sql");
            if (!File.Exists(sqlPath))
                sqlPath = Path.Combine(Directory.GetParent(Directory.GetCurrentDirectory())?.FullName ?? "", "database", "NexTI_DB.sql");

            if (File.Exists(sqlPath))
            {
                string fullSql = File.ReadAllText(sqlPath, Encoding.UTF8);
                
                // Encontrar o ponto de início das inserções
                int seedStartIndex = fullSql.IndexOf("-- 2. INSERINDO AS FASES NO BANCO");
                if (seedStartIndex != -1)
                {
                    string seedSql = fullSql.Substring(seedStartIndex);
                    
                    Console.WriteLine("--> Limpando dados antigos antes de popular...");
                    db.Database.ExecuteSqlRaw("DELETE FROM tb_prova_questao;");
                    db.Database.ExecuteSqlRaw("DELETE FROM tb_alternativas;");
                    db.Database.ExecuteSqlRaw("DELETE FROM tb_questoes;");
                    db.Database.ExecuteSqlRaw("DELETE FROM tb_provas;");
                    db.Database.ExecuteSqlRaw("DELETE FROM tb_areas_conhecimento;");
                    db.Database.ExecuteSqlRaw("DELETE FROM Progresso_Flashcards;");
                    db.Database.ExecuteSqlRaw("DELETE FROM Flashcards;");
                    db.Database.ExecuteSqlRaw("DELETE FROM Fases;");
                    
                    // Dividir o script por blocos delimitados por "GO" e executar via ADO.NET para evitar erros com chaves literais {}
                    var connection = db.Database.GetDbConnection();
                    db.Database.OpenConnection();

                    var lines = seedSql.Split(new[] { "\r\n", "\r", "\n" }, StringSplitOptions.None);
                    var currentBatch = new StringBuilder();
                    
                    foreach (var line in lines)
                    {
                        string trimmed = line.Trim();
                        if (trimmed.Equals("GO", StringComparison.OrdinalIgnoreCase))
                        {
                            string batchSql = currentBatch.ToString().Trim();
                            if (!string.IsNullOrEmpty(batchSql))
                            {
                                using (var command = connection.CreateCommand())
                                {
                                    command.CommandText = batchSql;
                                    command.ExecuteNonQuery();
                                }
                            }
                            currentBatch.Clear();
                        }
                        else
                        {
                            currentBatch.AppendLine(line);
                        }
                    }
                    
                    // Executar o último lote se sobrar algo
                    string finalBatch = currentBatch.ToString().Trim();
                    if (!string.IsNullOrEmpty(finalBatch))
                    {
                        using (var command = connection.CreateCommand())
                        {
                            command.CommandText = finalBatch;
                            command.ExecuteNonQuery();
                        }
                    }
                    
                    Console.WriteLine("--> Banco de dados populado com sucesso!");
                }
                else
                {
                    Console.WriteLine("--> Erro: Seção de seeding não encontrada no arquivo SQL.");
                }
            }
            else
            {
                Console.WriteLine("--> Erro: Arquivo NexTI_DB.sql não encontrado no caminho.");
            }
        }
        catch (Exception ex)
        {
            Console.WriteLine($"--> Erro durante o seeding: {ex.Message}");
        }
    }
}

app.Run();
