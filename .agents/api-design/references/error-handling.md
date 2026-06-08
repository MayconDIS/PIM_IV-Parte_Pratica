# Tratamento de Erros Padronizado

Padrões de respostas de erro, middleware global de exceções e logging estruturado para o backend Nex_TI.

---

## 📋 Formato Padronizado de Erro (RFC 7807 — Problem Details)

### Estrutura Recomendada

Toda resposta de erro deve seguir um formato **consistente e previsível**:

```json
{
    "type": "https://nexti.dev/errors/validation-error",
    "title": "Erro de Validação",
    "status": 400,
    "detail": "O campo 'email' não está em um formato válido.",
    "instance": "/api/auth/register",
    "timestamp": "2026-06-08T16:00:00Z"
}
```

### Campos

| Campo | Obrigatório | Descrição |
|---|---|---|
| `type` | Opcional | URI identificando o tipo de erro |
| `title` | ✅ Sim | Resumo legível do erro |
| `status` | ✅ Sim | Código HTTP numérico |
| `detail` | ✅ Sim | Descrição detalhada do problema |
| `instance` | Opcional | URI da requisição que causou o erro |
| `timestamp` | Opcional | Data/hora do erro em UTC |

### Implementação Simplificada para o Nex_TI

Como o projeto é acadêmico (MVP), uma versão simplificada é aceitável:

```json
{
    "message": "Email já cadastrado",
    "status": 409
}
```

O importante é **consistência**: todas as respostas de erro devem ter pelo menos `message` e `status`.

---

## 🛡️ Middleware Global de Exceções

### Problema Atual

No Nex_TI, exceções não tratadas podem vazar stack traces para o cliente:

```csharp
// ⚠️ Perigoso — expõe detalhes internos
return Results.Problem($"Erro interno do servidor: {ex.Message}");
```

### Solução: Middleware de Exceção Global

```csharp
// Middleware/ExceptionMiddleware.cs
namespace NexTI_API.Middleware;

public class ExceptionMiddleware
{
    private readonly RequestDelegate _next;
    private readonly ILogger<ExceptionMiddleware> _logger;

    public ExceptionMiddleware(RequestDelegate next, ILogger<ExceptionMiddleware> logger)
    {
        _next = next;
        _logger = logger;
    }

    public async Task InvokeAsync(HttpContext context)
    {
        try
        {
            await _next(context);
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Erro não tratado na requisição {Method} {Path}", 
                context.Request.Method, context.Request.Path);
            
            context.Response.StatusCode = StatusCodes.Status500InternalServerError;
            context.Response.ContentType = "application/json";
            
            var response = new
            {
                message = "Ocorreu um erro interno no servidor.",
                status = 500,
                timestamp = DateTime.UtcNow
            };

            await context.Response.WriteAsJsonAsync(response);
        }
    }
}
```

### Registrar no `Program.cs`

```csharp
// Após app.UseCors()
app.UseMiddleware<ExceptionMiddleware>();
```

---

## 📝 Logging Estruturado

### Regras de Logging

| Nível | Quando Usar | Exemplo |
|---|---|---|
| `LogInformation` | Operações normais importantes | Login bem-sucedido |
| `LogWarning` | Situações suspeitas mas não críticas | XP delta próximo do limite |
| `LogError` | Erros que afetam a funcionalidade | Falha ao acessar banco de dados |
| `LogCritical` | Erros que derrubam o sistema | Falha ao inicializar o servidor |

### Exemplos Práticos

```csharp
// ✅ BOM — Logging estruturado com contexto
_logger.LogWarning(
    "Tentativa de incremento de XP suspeito. UserId={UserId}, XpDelta={XpDelta}", 
    currentUserId, xpDelta);

// ❌ RUIM — String interpolada (não estruturada)
_logger.LogWarning($"XP suspeito para usuário {currentUserId}");
```

### Nunca Logar

- Senhas ou hashes de senha
- Tokens JWT completos
- Connection strings
- Dados pessoais identificáveis (PII) sem mascaramento
