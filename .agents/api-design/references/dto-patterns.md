# Padrões de DTOs (Data Transfer Objects)

Separação entre Modelos de Entidade (EF Core) e DTOs de Request/Response para o backend Nex_TI.

---

## 🎯 Por Que Separar Models de DTOs?

### Problema: Usar a Entidade diretamente no Endpoint

```csharp
// ⚠️ PERIGOSO — A entidade inteira é exposta ao cliente
app.MapPost("/api/auth/register", async (Usuario user, AppDbContext db) =>
{
    // O cliente pode enviar campos como "Id", "Nivel", "XP", "Moedas" no JSON
    // e o EF Core vai gravar esses valores no banco!
    user.SenhaHash = BCrypt.Net.BCrypt.HashPassword(user.SenhaHash);
    db.Usuarios.Add(user);
    await db.SaveChangesAsync();
});
```

**Riscos:**
1. **Mass Assignment**: O cliente pode enviar `{ "XP": 99999, "Nivel": 100 }` no registro
2. **Exposição de dados**: Retornar a entidade inclui `SenhaHash` na resposta
3. **Acoplamento**: Mudanças no Model do banco quebram a API pública

### Solução: DTOs Separados

```
Cliente → [RegisterRequest DTO] → Endpoint → [Usuario Entity] → Banco
Banco → [Usuario Entity] → Endpoint → [UserResponse DTO] → Cliente
```

---

## 📦 Tipos de DTOs

### 1. Request DTOs (Entrada)

Representam os dados que o cliente **envia** para a API.

```csharp
// DTOs/Requests/RegisterRequest.cs
namespace NexTI_API.DTOs.Requests;

public record RegisterRequest(
    [Required, MaxLength(50)] string Username,
    [Required, EmailAddress, MaxLength(100)] string Email,
    [Required, MinLength(6)] string Password
);
```

### 2. Response DTOs (Saída)

Representam os dados que a API **retorna** para o cliente.

```csharp
// DTOs/Responses/UserResponse.cs
namespace NexTI_API.DTOs.Responses;

public record UserResponse(
    int Id,
    string Username,
    int Nivel,
    int XP,
    int Moedas
);

// DTOs/Responses/LoginResponse.cs
public record LoginResponse(
    string Token,
    UserResponse User
);
```

### 3. DTOs Internos (Comandos)

Para operações internas que não devem ser expostas:

```csharp
// DTOs/Responses/ApiErrorResponse.cs
public record ApiErrorResponse(
    string Message,
    int Status,
    DateTime Timestamp = default
)
{
    public DateTime Timestamp { get; init; } = Timestamp == default ? DateTime.UtcNow : Timestamp;
};
```

---

## ✅ Records vs Classes para DTOs

### Recomendação: Usar `record` (C# 10+)

| Aspecto | `record` | `class` |
|---|---|---|
| Imutabilidade | ✅ Imutável por padrão | ❌ Mutável por padrão |
| Comparação | ✅ Compara por valor | ❌ Compara por referência |
| Boilerplate | ✅ Mínimo (positional syntax) | ❌ Requer getters/setters |
| Serialização JSON | ✅ Funciona out-of-the-box | ✅ Funciona out-of-the-box |

```csharp
// ✅ RECOMENDADO — Record com positional syntax
public record LoginRequest(string Username, string Password);

// ❌ DESNECESSÁRIO — Classe com propriedades
public class LoginRequest
{
    public string Username { get; set; }
    public string Password { get; set; }
}
```

> O Nex_TI já usa records para seus DTOs: `LoginRequest`, `ProgressoUpdate`, `UserStatsUpdate`. ✅

---

## 🔒 Validação de Entrada com Data Annotations

### Exemplo Completo de Request com Validação

```csharp
using System.ComponentModel.DataAnnotations;

public record RegisterRequest(
    [Required(ErrorMessage = "Username é obrigatório.")]
    [MaxLength(50, ErrorMessage = "Username deve ter no máximo 50 caracteres.")]
    [RegularExpression(@"^[a-zA-Z0-9_]+$", ErrorMessage = "Username aceita apenas letras, números e '_'.")]
    string Username,

    [Required(ErrorMessage = "Email é obrigatório.")]
    [EmailAddress(ErrorMessage = "Formato de email inválido.")]
    [MaxLength(100)]
    string Email,

    [Required(ErrorMessage = "Senha é obrigatória.")]
    [MinLength(6, ErrorMessage = "Senha deve ter no mínimo 6 caracteres.")]
    string Password
);
```

### Validação Manual no Endpoint (Minimal APIs)

Como Minimal APIs não validam automaticamente as Data Annotations (diferente de Controllers), é necessário validar manualmente:

```csharp
app.MapPost("/api/auth/register", async (RegisterRequest request, AppDbContext db) =>
{
    // Validação manual de Data Annotations
    var context = new ValidationContext(request);
    var results = new List<ValidationResult>();
    if (!Validator.TryValidateObject(request, context, results, validateAllProperties: true))
    {
        var errors = results.Select(r => r.ErrorMessage);
        return Results.BadRequest(new { message = "Dados inválidos.", errors });
    }

    // Lógica de negócio...
});
```

---

## 📁 Estrutura de Pastas Recomendada

```
backend/
├── DTOs/
│   ├── Requests/
│   │   ├── RegisterRequest.cs
│   │   ├── LoginRequest.cs
│   │   ├── ProgressoUpdateRequest.cs
│   │   └── UserStatsUpdateRequest.cs
│   └── Responses/
│       ├── UserResponse.cs
│       ├── LoginResponse.cs
│       ├── FlashcardResponse.cs
│       └── ApiErrorResponse.cs
├── Models/           ← Entidades do EF Core (banco)
├── Endpoints/        ← Rotas e mapeamentos
└── Services/         ← Lógica de negócio
```
