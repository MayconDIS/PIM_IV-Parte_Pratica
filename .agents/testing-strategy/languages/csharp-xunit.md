# Testes em C# com xUnit (.NET 10)

Guia prático para criação de testes no backend Nex_TI usando xUnit, Moq e WebApplicationFactory.

---

## 🚀 Setup do Projeto de Testes

### 1. Criar o projeto de testes

```bash
cd backend
dotnet new xunit -o NexTI_API.Tests
dotnet add NexTI_API.Tests/NexTI_API.Tests.csproj reference NexTI_API/NexTI_API.csproj
```

### 2. Pacotes necessários

```bash
cd NexTI_API.Tests
dotnet add package Moq
dotnet add package Microsoft.AspNetCore.Mvc.Testing
dotnet add package Microsoft.EntityFrameworkCore.InMemory
dotnet add package FluentAssertions  # Opcional, melhora legibilidade
```

---

## 🧪 Testes Unitários — SM-2 Engine

O `Sm2Engine` é o candidato perfeito para testes unitários: lógica pura, sem dependências externas.

```csharp
using Xunit;
using NexTI_API.Services;
using NexTI_API.Models;

namespace NexTI_API.Tests.Unit.Services;

public class Sm2EngineTests
{
    private readonly Sm2Engine _engine = new();

    [Theory]
    [InlineData(5)]
    [InlineData(4)]
    [InlineData(3)]
    public void Calcular_QualidadeIgualOuMaiorQue3_DeveIncrementarRepeticoes(int qualidade)
    {
        // Arrange
        var progresso = new ProgressoFlashcard { FatorFacilidade = 2.5 };

        // Act
        _engine.Calcular(progresso, qualidade);

        // Assert
        Assert.Equal(1, progresso.Repeticoes);
    }

    [Fact]
    public void Calcular_PrimeiraRepeticao_DeveDefinirIntervaloComoUm()
    {
        var progresso = new ProgressoFlashcard { FatorFacilidade = 2.5, Repeticoes = 0 };

        _engine.Calcular(progresso, qualidade: 4);

        Assert.Equal(1, progresso.IntervaloDias);
    }

    [Fact]
    public void Calcular_SegundaRepeticao_DeveDefinirIntervaloComoSeis()
    {
        var progresso = new ProgressoFlashcard { FatorFacilidade = 2.5, Repeticoes = 1 };

        _engine.Calcular(progresso, qualidade: 4);

        Assert.Equal(6, progresso.IntervaloDias);
    }

    [Theory]
    [InlineData(0)]
    [InlineData(1)]
    [InlineData(2)]
    public void Calcular_QualidadeMenorQue3_DeveResetarRepeticoes(int qualidade)
    {
        var progresso = new ProgressoFlashcard 
        { 
            FatorFacilidade = 2.5, 
            Repeticoes = 5, 
            IntervaloDias = 30 
        };

        _engine.Calcular(progresso, qualidade);

        Assert.Equal(0, progresso.Repeticoes);
        Assert.Equal(1, progresso.IntervaloDias);
    }

    [Fact]
    public void Calcular_QualidadeBaixa_FatorNuncaMenorQue1Ponto3()
    {
        var progresso = new ProgressoFlashcard { FatorFacilidade = 1.3 };

        _engine.Calcular(progresso, qualidade: 0);

        Assert.True(progresso.FatorFacilidade >= 1.3);
    }

    [Fact]
    public void Calcular_QualidadeMaxima_DeveAtualizarDataProximaRevisao()
    {
        var progresso = new ProgressoFlashcard { FatorFacilidade = 2.5 };

        _engine.Calcular(progresso, qualidade: 5);

        Assert.True(progresso.DataProximaRevisao > DateTime.UtcNow.Date);
    }
}
```

---

## 🔗 Testes de Integração — Minimal APIs

### Fixture: TestWebApplicationFactory

```csharp
using Microsoft.AspNetCore.Mvc.Testing;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using NexTI_API.Data;

namespace NexTI_API.Tests.Integration.Fixtures;

public class TestWebApplicationFactory : WebApplicationFactory<Program>
{
    protected override void ConfigureWebHost(IWebHostBuilder builder)
    {
        builder.ConfigureServices(services =>
        {
            // Remove o DbContext de produção
            var descriptor = services.SingleOrDefault(
                d => d.ServiceType == typeof(DbContextOptions<AppDbContext>));
            if (descriptor != null) services.Remove(descriptor);

            // Adiciona banco de dados in-memory para testes
            services.AddDbContext<AppDbContext>(options =>
                options.UseInMemoryDatabase("TestDb_" + Guid.NewGuid()));
        });
    }
}
```

### Teste de Endpoint de Autenticação

```csharp
using System.Net;
using System.Net.Http.Json;
using NexTI_API.Tests.Integration.Fixtures;

namespace NexTI_API.Tests.Integration.Endpoints;

public class AuthEndpointsTests : IClassFixture<TestWebApplicationFactory>
{
    private readonly HttpClient _client;

    public AuthEndpointsTests(TestWebApplicationFactory factory)
    {
        _client = factory.CreateClient();
    }

    [Fact]
    public async Task Register_NovoUsuario_DeveRetornarOk()
    {
        var response = await _client.PostAsJsonAsync("/api/auth/register", new
        {
            Username = "testuser",
            Email = "test@example.com",
            SenhaHash = "SenhaSegura123!"
        });

        Assert.Equal(HttpStatusCode.OK, response.StatusCode);
    }

    [Fact]
    public async Task Register_UsernameExistente_DeveRetornarBadRequest()
    {
        var userData = new { Username = "duplicado", Email = "dup@test.com", SenhaHash = "123456" };
        await _client.PostAsJsonAsync("/api/auth/register", userData);

        var response = await _client.PostAsJsonAsync("/api/auth/register", new
        {
            Username = "duplicado",
            Email = "outro@test.com",
            SenhaHash = "123456"
        });

        Assert.Equal(HttpStatusCode.BadRequest, response.StatusCode);
    }

    [Fact]
    public async Task Login_CredenciaisInvalidas_DeveRetornarUnauthorized()
    {
        var response = await _client.PostAsJsonAsync("/api/auth/login", new
        {
            Username = "naoexiste",
            Password = "senhaerrada"
        });

        Assert.Equal(HttpStatusCode.Unauthorized, response.StatusCode);
    }
}
```

---

## 🏃 Executando os Testes

```bash
# Rodar todos os testes
dotnet test

# Rodar com verbosidade e cobertura
dotnet test --verbosity normal --collect:"XPlat Code Coverage"

# Rodar apenas testes unitários
dotnet test --filter "FullyQualifiedName~Unit"

# Rodar apenas testes de integração
dotnet test --filter "FullyQualifiedName~Integration"
```
