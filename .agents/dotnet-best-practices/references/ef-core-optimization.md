# .NET: Entity Framework Core Optimization

Técnicas de otimização de consultas e persistência com Entity Framework Core (EF Core).

---

## 1. AsNoTracking()
Para consultas de leitura onde os dados não serão modificados (ex: listar os cartões no dashboard, exibir o perfil do usuário ou carregar o Mapa Neural), utilize sempre `.AsNoTracking()`. Isso desativa a gravação de estado das entidades em memória, reduzindo o consumo de recursos e aumentando a velocidade da busca.
```csharp
var cards = await dbContext.Cards
                           .AsNoTracking()
                           .Where(c => c.UsuarioId == userId)
                           .ToListAsync();
```

---

## 2. Prevenção de N+1 Queries
Sempre carregue de forma explícita relacionamentos requeridos usando `.Include()` ou projeções (`.Select()`), evitando que consultas filhas sejam executadas individualmente para cada registro da coleção principal, o que geraria dezenas de conexões extras de banco de dados.

---

## 3. Chamadas Assíncronas (async/await)
Para qualquer operação de E/S de rede (como acesso ao SQL Server), prefira as variantes assíncronas do EF Core (ex: `ToListAsync()`, `FirstOrDefaultAsync()`, `SaveChangesAsync()`). Isso libera a thread de execução do ASP.NET para atender outras requisições concorrentes enquanto o banco processa a consulta.
