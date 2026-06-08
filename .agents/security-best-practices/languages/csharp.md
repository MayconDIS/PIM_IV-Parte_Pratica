# C# and .NET Core (Minimal APIs) Security Best Practices

Este guia documenta as melhores práticas de segurança para o desenvolvimento de backends robustos em C# utilizando .NET Core, com foco especial em Minimal APIs e Entity Framework Core (EF Core), stacks utilizadas no projeto Nex_TI.

---

## 1. Prevenção de SQL Injection (EF Core)

Embora o Entity Framework Core gere consultas parametrizadas por padrão ao utilizar LINQ, é essencial ter cuidado ao escrever consultas brutas.

### Padrão Seguro (LINQ e Parameterized Queries)
```csharp
// SEGURO: O EF Core parametriza automaticamente a variável userId
var user = await dbContext.Usuarios.FirstOrDefaultAsync(u => u.Id == userId);

// SEGURO: Utilizando FromSqlInterpolated (o compilador converte em consultas parametrizadas)
var userRaw = await dbContext.Usuarios
    .FromSqlInterpolated($"SELECT * FROM Usuarios WHERE Id = {userId}")
    .FirstOrDefaultAsync();
```

### Padrão Inseguro (Evitar a todo custo)
```csharp
// INSEGURO: Concatenação direta de strings abre brechas para SQL Injection
var userVulnerable = await dbContext.Usuarios
    .FromSqlRaw($"SELECT * FROM Usuarios WHERE Id = " + userId)
    .FirstOrDefaultAsync();
```

---

## 2. Validação Defensiva de Entrada (Minimal APIs)

Sempre valide todas as entradas de dados provenientes do cliente (body, query, route) antes de processá-las ou persisti-las no banco de dados.

* **Validação de Tipos**: Use tipos fortes (ex: `int`, `Guid`, structs dedicadas) nos parâmetros de rota e query em vez de strings genéricas sempre que possível.
* **Validação de Claims**: Em endpoints protegidos por autenticação, certifique-se de validar se o identificador ou claim do usuário autenticado corresponde ao recurso que ele está tentando acessar para mitigar falhas de autorização (IDOR/BOLA).
* **Validação de Modelo**: Utilize validações imperativas ou bibliotecas como FluentValidation para validar restrições de negócio (como tamanhos máximos de campos, formatos de e-mail e regras de intervalo).

```csharp
app.MapPut("/api/cards/{id}", async (int id, CardUpdateDto dto, ClaimsPrincipal user, AppDbContext db) =>
{
    // 1. Validar Claims / Prevenção IDOR
    var userIdClaim = user.FindFirst(ClaimTypes.NameIdentifier)?.Value;
    if (!int.TryParse(userIdClaim, out int loggedUserId))
    {
        return Results.Unauthorized();
    }

    var card = await db.Cards.FindAsync(id);
    if (card == null) return Results.NotFound();

    // Validar se o card pertence ao usuário autenticado
    if (card.UsuarioId != loggedUserId)
    {
        return Results.Forbid();
    }

    // 2. Validar Dados do DTO
    if (string.IsNullOrWhiteSpace(dto.Front) || dto.Front.Length > 500)
    {
        return Results.BadRequest("O conteúdo da frente é obrigatório e não pode exceder 500 caracteres.");
    }

    card.Front = dto.Front;
    await db.SaveChangesAsync();
    return Results.Ok(card);
});
```

---

## 3. Armazenamento Seguro de Credenciais e Hashing

* **Nunca armazene senhas em texto puro.**
* Utilize algoritmos de hash criptográficos adaptativos com sal (Salt) como **BCrypt** ou **Argon2** para computar o hash da senha de forma segura antes da persistência.
* Utilize implementações maduras e testadas da comunidade (ex: pacote NuGet `BCrypt.Net-Next`).

```csharp
// Registrar senha de forma segura
string passwordHash = BCrypt.Net.BCrypt.HashPassword(cadastroDto.Senha);
usuario.SenhaHash = passwordHash;

// Verificar senha no login
bool isValid = BCrypt.Net.BCrypt.Verify(loginDto.Senha, usuario.SenhaHash);
```

---

## 4. Tratamento Global de Exceções

Nunca retorne stack traces de exceções internas diretamente nas respostas HTTP do ambiente de produção. Isso expõe detalhes de infraestrutura a potenciais atacantes (Information Disclosure).

### Configuração Segura do Middleware
```csharp
if (app.Environment.IsDevelopment())
{
    app.UseDeveloperExceptionPage();
}
else
{
    app.UseExceptionHandler(errorApp =>
    {
        errorApp.Run(async context =>
        {
            context.Response.StatusCode = 500;
            context.Response.ContentType = "application/json";
            await context.Response.WriteAsJsonAsync(new { Error = "Ocorreu um erro interno no servidor. Tente novamente mais tarde." });
        });
    });
}
```

---

## 5. Configuração Segura de CORS (Cross-Origin Resource Sharing)

Nunca utilize políticas de CORS excessivamente permissivas (como permitir qualquer origem com credenciais) em produção.

```csharp
// Configuração recomendada para produção
builder.Services.AddCors(options =>
{
    options.AddPolicy("ProductionCorsPolicy", policy =>
    {
        policy.WithOrigins("https://meudominio.com") // Origens permitidas explícitas
              .AllowAnyMethod()
              .AllowAnyHeader()
              .AllowCredentials(); // Apenas se estritamente necessário
    });
});
```
