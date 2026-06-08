# Nomenclatura e Estrutura de Testes

Padrões de organização, nomenclatura e estrutura para testes automatizados no projeto Nex_TI.

---

## 📐 Padrão AAA (Arrange-Act-Assert)

Todo teste deve seguir o padrão **AAA** para manter clareza e legibilidade:

```csharp
[Fact]
public void NomeDoMetodo_Cenario_ResultadoEsperado()
{
    // ARRANGE — Preparar os dados e dependências
    var progresso = new ProgressoFlashcard { FatorFacilidade = 2.5 };
    var engine = new Sm2Engine();

    // ACT — Executar a ação que está sendo testada
    engine.Calcular(progresso, qualidade: 5);

    // ASSERT — Verificar o resultado esperado
    Assert.Equal(1, progresso.Repeticoes);
}
```

### Regras do AAA
1. **Arrange**: Configurar o estado inicial. Instanciar objetos, configurar mocks.
2. **Act**: Executar **uma única ação**. Se precisar de múltiplas ações, é sinal de que o teste está testando demais.
3. **Assert**: Verificar **uma única expectativa** (ou um grupo lógico relacionado). Evitar `Assert` múltiplos desconexos.

---

## 🏷️ Nomenclatura de Métodos de Teste

### Padrão: `Método_Cenário_ResultadoEsperado`

| Parte | Descrição | Exemplo |
|---|---|---|
| **Método** | O método ou funcionalidade sendo testada | `Calcular` |
| **Cenário** | A condição ou entrada do teste | `QualidadeMenorQue3` |
| **Resultado** | O que deve acontecer | `DeveResetarRepeticoes` |

### Exemplos Práticos

```csharp
// ✅ BOM — Claro e descritivo
Calcular_QualidadeMenorQue3_DeveResetarRepeticoes()
Login_SenhaIncorreta_DeveRetornarUnauthorized()
AtualizarStats_XpDeltaMaiorQue150_DeveRetornarBadRequest()
Register_EmailDuplicado_DeveRetornarBadRequest()

// ❌ RUIM — Vago e sem contexto
TesteSm2()
TestaLogin()
TesteBanco()
```

---

## 📁 Organização de Pastas de Teste

### Estrutura Recomendada para o Backend .NET

```
backend/
├── NexTI_API/                 ← Projeto principal
│   ├── Services/
│   ├── Endpoints/
│   └── Models/
└── NexTI_API.Tests/           ← Projeto de testes
    ├── NexTI_API.Tests.csproj
    ├── Unit/
    │   ├── Services/
    │   │   └── Sm2EngineTests.cs
    │   └── Validators/
    │       └── UserStatsValidationTests.cs
    ├── Integration/
    │   ├── Endpoints/
    │   │   ├── AuthEndpointsTests.cs
    │   │   ├── ProgressoEndpointsTests.cs
    │   │   └── SimuladoEndpointsTests.cs
    │   └── Fixtures/
    │       └── TestWebApplicationFactory.cs
    └── Helpers/
        └── TestDataBuilder.cs
```

### Regras de Organização
1. **Espelhar a estrutura do projeto principal**: Se `Services/Sm2Engine.cs` existe, o teste fica em `Unit/Services/Sm2EngineTests.cs`.
2. **Separar por tipo de teste**: `Unit/` para unitários, `Integration/` para integração.
3. **Fixtures compartilhadas**: Configurações reutilizáveis (ex: `TestWebApplicationFactory`) ficam em `Fixtures/`.
4. **Helpers de teste**: Builders de dados de teste ficam em `Helpers/`.

---

## 🔄 Padrão Builder para Dados de Teste

Para evitar repetição nos `Arrange`, usar o padrão Builder:

```csharp
public class ProgressoBuilder
{
    private double _fator = 2.5;
    private int _repeticoes = 0;

    public ProgressoBuilder ComFator(double fator) { _fator = fator; return this; }
    public ProgressoBuilder ComRepeticoes(int rep) { _repeticoes = rep; return this; }

    public ProgressoFlashcard Build() => new ProgressoFlashcard
    {
        FatorFacilidade = _fator,
        Repeticoes = _repeticoes
    };
}

// Uso no teste:
var progresso = new ProgressoBuilder().ComFator(1.3).ComRepeticoes(5).Build();
```
