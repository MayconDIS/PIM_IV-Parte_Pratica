# Convenções RESTful

Padrões de nomenclatura de rotas, verbos HTTP, códigos de status e estruturação de endpoints para o projeto Nex_TI.

---

## 🛤️ Nomenclatura de Rotas

### Regras Fundamentais

| Regra | ✅ Correto | ❌ Incorreto |
|---|---|---|
| Usar substantivos no plural | `/api/usuarios` | `/api/usuario` |
| Usar kebab-case (se necessário) | `/api/areas-conhecimento` | `/api/AreasConhecimento` |
| Não usar verbos na URL | `/api/flashcards` | `/api/getFlashcards` |
| Hierarquia com sub-recursos | `/api/fases/{id}/flashcards` | `/api/flashcards?faseId={id}` |
| Prefixo `/api/` consistente | `/api/status` | `/status` |

### Estrutura Atual do Nex_TI (Análise)

| Endpoint Atual | Status | Sugestão |
|---|---|---|
| `GET /api/status` | ✅ OK | — |
| `POST /api/auth/register` | ✅ OK | — |
| `POST /api/auth/login` | ✅ OK | — |
| `GET /api/usuarios/{username}` | ✅ OK | — |
| `GET /api/fases` | ✅ OK | — |
| `GET /api/fases/{codigoFase}/flashcards` | ✅ OK | Sub-recurso correto |
| `POST /api/progresso/atualizar` | ⚠️ Verbo na URL | `PUT /api/progresso` |
| `PUT /api/usuarios/stats` | ⚠️ Rota genérica | `PUT /api/usuarios/me/stats` |
| `GET /api/simulados/areas` | ✅ OK | — |
| `GET /api/simulados/questoes` | ✅ OK | — |
| `GET /api/certificado/pdf` | ⚠️ GET com efeito colateral | `POST /api/certificados` |

---

## 📬 Verbos HTTP

| Verbo | Uso | Idempotente | Exemplo |
|---|---|---|---|
| **GET** | Ler/buscar dados | ✅ Sim | `GET /api/fases` |
| **POST** | Criar novo recurso | ❌ Não | `POST /api/auth/register` |
| **PUT** | Atualizar recurso completo | ✅ Sim | `PUT /api/usuarios/me/stats` |
| **PATCH** | Atualizar parcialmente | ✅ Sim | `PATCH /api/usuarios/me` |
| **DELETE** | Remover recurso | ✅ Sim | `DELETE /api/flashcards/{id}` |

### Regras
1. **GET nunca deve ter efeito colateral** (não deve criar/modificar dados).
2. **POST é para criação** ou operações que não se encaixam em outros verbos.
3. **PUT substitui o recurso inteiro**; **PATCH altera apenas campos específicos**.

---

## 📊 Códigos de Status HTTP

### Códigos de Sucesso (2xx)

| Código | Significado | Quando Usar |
|---|---|---|
| `200 OK` | Operação bem-sucedida | GET, PUT, PATCH com resposta |
| `201 Created` | Recurso criado | POST de criação |
| `204 No Content` | Sucesso sem resposta | DELETE bem-sucedido |

### Códigos de Erro do Cliente (4xx)

| Código | Significado | Quando Usar |
|---|---|---|
| `400 Bad Request` | Dados inválidos | Validação falhou (ex: email inválido) |
| `401 Unauthorized` | Não autenticado | Token JWT ausente ou expirado |
| `403 Forbidden` | Sem permissão | Usuário autenticado mas sem acesso ao recurso |
| `404 Not Found` | Recurso não existe | ID/username não encontrado |
| `409 Conflict` | Conflito de estado | Username/Email já cadastrado |
| `422 Unprocessable Entity` | Dados válidos mas ilógicos | XP delta suspeito (anti-cheat) |

### Códigos de Erro do Servidor (5xx)

| Código | Significado | Quando Usar |
|---|---|---|
| `500 Internal Server Error` | Erro inesperado | Exceções não tratadas |

### Análise do Nex_TI

```csharp
// ⚠️ Atual: retorna 400 para email duplicado
return Results.BadRequest(new { message = "Email já cadastrado" });

// ✅ Melhor: retorna 409 (Conflict)
return Results.Conflict(new { message = "Email já cadastrado" });
```

---

## 📄 Paginação, Filtros e Ordenação

Para endpoints que retornam listas (ex: `/api/flashcards`), implementar:

### Query Parameters Padrão

```
GET /api/simulados/questoes?page=1&pageSize=20&sortBy=id&order=asc&idArea=3
```

| Parâmetro | Tipo | Default | Descrição |
|---|---|---|---|
| `page` | int | 1 | Número da página |
| `pageSize` | int | 20 | Itens por página (máx: 100) |
| `sortBy` | string | `id` | Campo para ordenação |
| `order` | string | `asc` | Direção: `asc` ou `desc` |

### Formato de Resposta Paginada

```json
{
    "data": [ ... ],
    "pagination": {
        "page": 1,
        "pageSize": 20,
        "totalItems": 150,
        "totalPages": 8
    }
}
```

### Implementação em Minimal API

```csharp
app.MapGet("/api/simulados/questoes", async (
    AppDbContext db,
    int page = 1,
    int pageSize = 20,
    int? idArea = null) =>
{
    pageSize = Math.Min(pageSize, 100);
    
    var query = db.Questoes.Include(q => q.Alternativas).AsQueryable();
    
    if (idArea.HasValue)
        query = query.Where(q => q.IdArea == idArea.Value);
    
    var totalItems = await query.CountAsync();
    var items = await query
        .Skip((page - 1) * pageSize)
        .Take(pageSize)
        .ToListAsync();
    
    return Results.Ok(new
    {
        data = items,
        pagination = new { page, pageSize, totalItems, totalPages = (int)Math.Ceiling((double)totalItems / pageSize) }
    });
});
```
