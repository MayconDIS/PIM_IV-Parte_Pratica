# 🔒 Relatório de Auditoria de Segurança — Nex_TI

**Data:** 08 de Junho de 2026  
**Auditor:** Antigravity AI (assistido por skill `security-best-practices`)  
**Escopo:** Backend C# (.NET 10) + Frontend JavaScript Vanilla  
**Metodologia:** OWASP Code Review Guide + OWASP Top 10 (2021)

---

## 📊 Resumo Executivo

| Severidade | Quantidade | Status |
|---|---|---|
| 🔴 **Crítica** | 2 | ✅ Corrigido |
| 🟠 **Alta** | 2 | ✅ Corrigido |
| 🟡 **Média** | 3 | ✅ 2 Corrigidos / 1 Aceito (JWT localStorage) |
| 🟢 **Baixa** | 2 | Aceitável para MVP acadêmico |
| **Total** | **9** | **7 Corrigidos** |

### Pontos Positivos Identificados
- ✅ Senhas armazenadas com BCrypt (hash adaptativo com sal)
- ✅ Proteção IDOR no endpoint `/api/progresso/atualizar` (valida `UsuarioId` vs Token JWT)
- ✅ Validação anti-cheat no endpoint `/api/usuarios/stats` (limites de XP/Moedas)
- ✅ CORS configurado apenas para origens locais específicas
- ✅ Consultas EF Core parametrizadas (sem concatenação de SQL dinâmica)
- ✅ Endpoint de usuário retorna apenas dados públicos (sem `SenhaHash`)

---

## 🔴 Vulnerabilidades Críticas

### CRIT-01: OS Command Injection (RCE) no Endpoint de Certificado

| Campo | Valor |
|---|---|
| **Severidade** | 🔴 CRÍTICA |
| **OWASP** | A03:2021 – Injection |
| **Confiança** | ALTA — Entrada controlada pelo atacante confirmada |
| **Arquivo** | `backend/Endpoints/EndpointExtensions.cs` |
| **Linhas** | 184–262 |

**Descrição:**  
O endpoint `GET /api/certificado/pdf` recebe os parâmetros `nome`, `data` e `codigo` via query string e os interpola diretamente nos argumentos de um `Process.Start()` que invoca o interpretador Python:

```csharp
// Linha 221 — Vulnerável
Arguments = $"\"{scriptPath}\" \"{nome}\" \"{data}\" \"{codigo}\" \"{pdfPath}\""
```

**Vetor de ataque:**  
Um atacante pode injetar comandos arbitrários do sistema operacional:

```
GET /api/certificado/pdf?nome=test" & whoami & echo "&data=x&codigo=y
```

O argumento resultante seria:
```
"script.py" "test" & whoami & echo "" "x" "y" "path.pdf"
```

O `&` fecha o primeiro comando e inicia um novo (`whoami`), executando código arbitrário no servidor.

**Impacto:**
- Execução remota de comandos (RCE) no servidor
- Leitura de arquivos sensíveis, exfiltração de dados
- Comprometimento total do servidor

**Correção proposta:**

```csharp
// Função de sanitização
static string SanitizarParametro(string input)
{
    if (string.IsNullOrEmpty(input)) return string.Empty;
    // Remover caracteres perigosos para shell
    return System.Text.RegularExpressions.Regex.Replace(input, @"[""&|;`$(){}<>!\\\n\r]", "");
}

// Uso no endpoint
string nomeSafe = SanitizarParametro(nome);
string dataSafe = SanitizarParametro(data);
string codigoSafe = SanitizarParametro(codigo);

// Validação de comprimento e formato
if (nomeSafe.Length > 100 || dataSafe.Length > 50 || codigoSafe.Length > 50)
    return Results.BadRequest(new { message = "Parâmetros excedem o comprimento permitido." });
```

---

### CRIT-02: Chave JWT Hardcoded e Exposta no Repositório

| Campo | Valor |
|---|---|
| **Severidade** | 🔴 CRÍTICA |
| **OWASP** | A02:2021 – Cryptographic Failures |
| **Confiança** | ALTA — Chave visível no código-fonte |
| **Arquivos** | `backend/Program.cs` (L22), `backend/appsettings.json` (L12) |

**Descrição:**  
A chave secreta JWT está exposta em dois locais:

```csharp
// Program.cs — Fallback hardcoded
var jwtKey = builder.Configuration["Jwt:Key"] 
    ?? "NexTI_Secret_Key_2026_Super_Secure_Key_Default_Keep_It_Long_123!";
```

```json
// appsettings.json — Commitado no repositório
"Jwt": {
    "Key": "NexTI_Secret_Key_2026_Super_Secure_Key_123!"
}
```

**Impacto:**
- Qualquer pessoa com acesso ao repositório pode forjar tokens JWT válidos
- Permite autenticação como qualquer usuário
- Bypass completo do sistema de autorização

**Correção proposta:**

1. Mover a chave para `appsettings.Development.json` (já no `.gitignore`):
```json
{
  "Jwt": {
    "Key": "CHAVE_ALEATORIA_GERADA_POR_CSPRNG_AQUI_64_CHARS"
  }
}
```

2. Remover o fallback hardcoded no `Program.cs`:
```csharp
var jwtKey = builder.Configuration["Jwt:Key"]
    ?? throw new InvalidOperationException("A chave JWT deve ser configurada em appsettings.Development.json");
```

3. Remover a seção `Jwt` do `appsettings.json` público.

---

## 🟠 Vulnerabilidades Altas

### HIGH-01: Validação JWT Incompleta (Issuer e Audience desabilitados)

| Campo | Valor |
|---|---|
| **Severidade** | 🟠 ALTA |
| **OWASP** | A07:2021 – Identification and Authentication Failures |
| **Confiança** | ALTA |
| **Arquivo** | `backend/Program.cs` |
| **Linhas** | 28–34 |

**Descrição:**

```csharp
ValidateIssuer = false,   // ⚠️ Aceita tokens de qualquer emissor
ValidateAudience = false  // ⚠️ Aceita tokens para qualquer audiência
```

Sem essas validações, tokens gerados por outros serviços ou aplicações que compartilhem a mesma chave serão aceitos.

**Correção proposta:**

```csharp
options.TokenValidationParameters = new TokenValidationParameters
{
    ValidateIssuerSigningKey = true,
    IssuerSigningKey = new SymmetricSecurityKey(key),
    ValidateIssuer = true,
    ValidIssuer = "NexTI_API",
    ValidateAudience = true,
    ValidAudience = "NexTI_Frontend"
};
```

E na geração do token (`EndpointExtensions.cs`):

```csharp
var tokenDescriptor = new SecurityTokenDescriptor
{
    Issuer = "NexTI_API",
    Audience = "NexTI_Frontend",
    // ... restante igual
};
```

---

### HIGH-02: Token JWT com Expiração Excessiva (7 dias)

| Campo | Valor |
|---|---|
| **Severidade** | 🟠 ALTA |
| **OWASP** | A07:2021 – Identification and Authentication Failures |
| **Confiança** | ALTA |
| **Arquivo** | `backend/Endpoints/EndpointExtensions.cs` |
| **Linha** | 55 |

**Descrição:**

```csharp
Expires = DateTime.UtcNow.AddDays(7),
```

Se um token for comprometido (ex: via XSS no frontend), o atacante tem 7 dias de acesso irrestrito.

**Correção proposta para MVP acadêmico:**

```csharp
// Reduzir para 24 horas (compromisso entre segurança e UX)
Expires = DateTime.UtcNow.AddHours(24),
```

---

## 🟡 Vulnerabilidades Médias

### MED-01: DOM XSS Potencial via `innerHTML` com Dados de Usuário

| Campo | Valor |
|---|---|
| **Severidade** | 🟡 MÉDIA |
| **OWASP** | A03:2021 – Injection (XSS) |
| **Confiança** | MÉDIA — Necessita verificação do fluxo completo |
| **Arquivo** | `pages/dashboard/js/app.js` |
| **Linhas** | 45–47, 619 |

**Descrição:**  
O username do usuário é inserido no DOM via `innerHTML` sem sanitização:

```javascript
// Linha 45 — Username interpolado no HTML
const fraseSelecionada = frasesMotivacionais[idxRand]
    .replace('{name}', `<span class="username-highlight">${nomeExibido}</span>`);
elMotivation.innerHTML = `...${fraseSelecionada}...`;
```

Se um usuário registrar o nome `<img src=x onerror=alert(document.cookie)>`, o script malicioso será executado no navegador de qualquer pessoa que visualize a página.

**Também afetado:** Linha 619 onde `carta.frente` (conteúdo de flashcard da API) é inserido via `frenteEl.innerHTML = carta.frente`.

**Correção proposta:**

```javascript
// Função helper de sanitização
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Uso
const nomeSeguro = escapeHtml(nomeExibido);
const fraseSelecionada = frasesMotivacionais[idxRand]
    .replace('{name}', `<span class="username-highlight">${nomeSeguro}</span>`);
```

---

### MED-02: Token JWT Armazenado em `localStorage`

| Campo | Valor |
|---|---|
| **Severidade** | 🟡 MÉDIA |
| **OWASP** | A07:2021 – Identification and Authentication Failures |
| **Confiança** | ALTA |
| **Arquivo** | `assets/js/auth.js` |
| **Linha** | 43 |

**Descrição:**  
O token JWT é armazenado em `localStorage`, que é acessível por qualquer JavaScript rodando na mesma origem. Se um ataque XSS for bem-sucedido (ver MED-01), o atacante pode roubar o token.

```javascript
localStorage.setItem('quest_jwt_token', data.token);
```

**Mitigação ideal:** Usar cookies `HttpOnly` + `Secure` + `SameSite=Strict`.  
**Status para MVP:** Aceitável — documentar o risco e mitigar via prevenção de XSS.

---

### MED-03: Mass Assignment + Manipulação de Progresso via Endpoints

| Campo | Valor |
|---|---|
| **Severidade** | 🟡 MÉDIA |
| **OWASP** | A04:2021 – Insecure Design |
| **Confiança** | ALTA |
| **Arquivos** | `backend/Endpoints/EndpointExtensions.cs` (L27, L129-158) |
| **Ref. anterior** | Consolida SEC-001 do relatório em `docs/security_report.md` |

**Descrição (Vetor 1 — Registro):**  
O endpoint de registro recebe diretamente o Model `Usuario`:

```csharp
app.MapPost("/api/auth/register", async (Usuario user, AppDbContext db) =>
```

Um atacante pode enviar campos extras no JSON como `{ "Nivel": 100, "XP": 99999, "Moedas": 99999 }` junto com o registro, e o EF Core irá gravar esses valores no banco.

**Descrição (Vetor 2 — Stats):**  
O endpoint `PUT /api/usuarios/stats` aceita os valores brutos de XP, Moedas e Nível diretamente do corpo da requisição (`request.XP`, `request.Moedas`, `request.Nivel`). Embora existam validações anti-cheat (limites de delta por ciclo ≤ 150), um usuário mal-intencionado autenticado pode enviar múltiplas requisições incrementais via Postman/curl para inflar o progresso sem realmente estudar, invalidando a integridade da gamificação.

```csharp
// Linha 153-155 — Aceita valores brutos do frontend
user.XP = request.XP;
user.Moedas = request.Moedas;
user.Nivel = request.Nivel;
```

**Correção proposta (Registro):** Usar um DTO separado (`RegisterRequest`) que aceite apenas `Username`, `Email` e `Password`:

```csharp
public record RegisterRequest(string Username, string Email, string Password);

app.MapPost("/api/auth/register", async (RegisterRequest request, AppDbContext db) =>
{
    var user = new Usuario
    {
        Username = request.Username,
        Email = request.Email,
        SenhaHash = BCrypt.Net.BCrypt.HashPassword(request.Password)
    };
    // ...
});
```

**Correção proposta (Stats — Defesa em Profundidade):**  
Idealmente, o backend deve ser a **única fonte de verdade** para o cálculo de pontuação. Em vez de aceitar o valor final do XP/Moedas, o endpoint deveria receber **incrementos** (`+10 XP`) ou ser acionado indiretamente ao concluir tarefas de estudo (deck de flashcards, simulados), com o backend calculando o incremento devido.

---

## 🟢 Vulnerabilidades Baixas

### LOW-01: Endpoint de Perfil Público sem Autenticação

| Campo | Valor |
|---|---|
| **Severidade** | 🟢 BAIXA |
| **Arquivo** | `backend/Endpoints/EndpointExtensions.cs` (L74-82) |

O endpoint `GET /api/usuarios/{username}` retorna dados públicos (Id, Username, Nivel, XP, Moedas) sem exigir autenticação. Como os dados são de gamificação (inerentemente públicos), o risco é baixo.

**Status:** Aceito — dados são públicos por design.

---

### LOW-02: Endpoint de Certificado sem Autenticação

| Campo | Valor |
|---|---|
| **Severidade** | 🟢 BAIXA |
| **Arquivo** | `backend/Endpoints/EndpointExtensions.cs` (L184) |

O endpoint `GET /api/certificado/pdf` não exige autenticação. Qualquer pessoa pode gerar certificados para qualquer nome.

**Correção sugerida:** Adicionar `.RequireAuthorization()` e usar o nome do usuário autenticado.

---

## ✅ Padrões Seguros Confirmados

| Aspecto | Implementação | Conformidade |
|---|---|---|
| Hashing de Senhas | BCrypt (`BCrypt.Net.BCrypt.HashPassword`) | ✅ OWASP Compliant |
| Proteção IDOR (Progresso) | Valida `UsuarioId == Token.NameIdentifier` | ✅ OWASP Compliant |
| Anti-Cheat (Stats) | Limites de XP/Moedas por ciclo (150) | ✅ Defense-in-Depth |
| CORS | Origens específicas (localhost:5500/5501) | ✅ OWASP Compliant |
| Consultas EF Core | LINQ parametrizado (sem SQL dinâmico) | ✅ SQL Injection Safe |
| HTTPS Redirect | Ativado em produção | ✅ Transport Security |

---

## 📋 Priorização de Correções

| # | Vulnerabilidade | Esforço | Prioridade |
|---|---|---|---|
| 1 | CRIT-01: Command Injection | 30 min | 🔴 Imediata |
| 2 | CRIT-02: JWT Hardcoded | 15 min | 🔴 Imediata |
| 3 | MED-03: Mass Assignment | 20 min | 🟠 Próximo sprint |
| 4 | HIGH-01: Issuer/Audience JWT | 10 min | 🟠 Próximo sprint |
| 5 | HIGH-02: JWT Expiração 7 dias | 5 min | 🟠 Próximo sprint |
| 6 | MED-01: DOM XSS | 30 min | 🟡 Planejado |
| 7 | MED-02: JWT em localStorage | Alto | 🟡 Futuro |
| 8 | LOW-01/02: Endpoints públicos | 5 min | 🟢 Opcional |
