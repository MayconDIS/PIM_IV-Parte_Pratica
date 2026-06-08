# Pirâmide de Testes (Test Pyramid)

A pirâmide de testes é um modelo que define a **proporção ideal** entre os diferentes tipos de teste em um projeto.

---

## 📐 Estrutura da Pirâmide

```
        ╱  E2E   ╲       ← 10% — Poucos, lentos, caros
       ╱──────────╲
      ╱ Integração ╲     ← 20% — Moderados, testam interações
     ╱──────────────╲
    ╱   Unitários    ╲   ← 70% — Muitos, rápidos, baratos
   ╱──────────────────╲
```

---

## 🧪 Tipos de Teste

### 1. Testes Unitários (70%)
Testam uma **única unidade de código** (função, método, classe) de forma isolada.

**Quando usar:**
- Lógica de negócio pura (ex: `Sm2Engine.Calcular()`)
- Validações de entrada (ex: limites de XP, formato de email)
- Transformações de dados (ex: cálculos matemáticos)

**Características:**
- Executam em **milissegundos**
- Não dependem de banco de dados, rede ou filesystem
- Usam mocks/stubs para isolar dependências

**Exemplo no Nex_TI:**
```csharp
[Fact]
public void Calcular_QualidadeAlta_DeveAumentarRepeticoes()
{
    var progresso = new ProgressoFlashcard { FatorFacilidade = 2.5 };
    var engine = new Sm2Engine();
    
    engine.Calcular(progresso, qualidade: 4);
    
    Assert.Equal(1, progresso.Repeticoes);
    Assert.Equal(1, progresso.IntervaloDias);
}
```

### 2. Testes de Integração (20%)
Testam a **interação entre componentes** (ex: endpoint → banco de dados).

**Quando usar:**
- Endpoints da API REST (verificar status codes, responses)
- Operações de persistência no banco de dados (EF Core)
- Fluxos que cruzam múltiplas camadas

**Características:**
- Executam em **segundos**
- Usam banco de dados in-memory (`UseInMemoryDatabase`)
- Testam o pipeline real do ASP.NET (middlewares, autenticação)

**Exemplo no Nex_TI:**
```csharp
[Fact]
public async Task Login_CredenciaisCorretas_DeveRetornarToken()
{
    var client = _factory.CreateClient();
    var response = await client.PostAsJsonAsync("/api/auth/login", 
        new { Username = "testuser", Password = "123456" });
    
    Assert.Equal(HttpStatusCode.OK, response.StatusCode);
    var data = await response.Content.ReadFromJsonAsync<LoginResponse>();
    Assert.NotNull(data.Token);
}
```

### 3. Testes End-to-End / E2E (10%)
Testam o **fluxo completo do usuário** de ponta a ponta.

**Quando usar:**
- Fluxos críticos de negócio (Login → Dashboard → Flashcard → Revisão SM-2)
- Validação visual de componentes (Mapa Neural, HUD de gamificação)

**Características:**
- Executam em **minutos**
- Requerem a aplicação rodando (frontend + backend + banco)
- Podem ser manuais (checklist documentado) ou automatizados (Playwright, Cypress)

---

## 🎯 Priorização para o Projeto Nex_TI

| Prioridade | Componente | Tipo de Teste |
|---|---|---|
| 🔴 Alta | `Sm2Engine.Calcular()` | Unitário |
| 🔴 Alta | Endpoints de Autenticação (`/auth/login`, `/auth/register`) | Integração |
| 🟠 Média | Endpoint de Progresso SM-2 (`/progresso/atualizar`) | Integração |
| 🟠 Média | Validações Anti-Cheat (`/usuarios/stats`) | Unitário + Integração |
| 🟡 Baixa | Fluxo Login → Dashboard | E2E (manual) |
| 🟡 Baixa | Geração de Certificado PDF | Integração |
