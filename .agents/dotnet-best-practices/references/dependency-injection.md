# .NET: Dependency Injection (DI)

Diretrizes para o uso correto do contêiner de Injeção de Dependências nativo do .NET Core.

---

## 1. Ciclos de Vida do Serviço (Service Lifetimes)

Ao registrar serviços no contêiner IoC em seu `Program.cs`, selecione o ciclo de vida adequado baseado no estado e escopo do componente:

### Transient (`AddTransient`)
* **Comportamento**: Uma nova instância é criada sempre que é solicitada.
* **Uso ideal**: Serviços leves, sem estado (*stateless*), que realizam operações rápidas (ex: conversores de formato, validadores independentes).

### Scoped (`AddScoped`)
* **Comportamento**: Uma única instância é criada por requisição HTTP. Ela é compartilhada entre todos os componentes que a solicitam durante o processamento da mesma requisição.
* **Uso ideal**: Contextos de banco de dados (`DbContext`), repositórios de dados e serviços de regras de negócios que operam sobre o contexto de uma única chamada de usuário.

### Singleton (`AddSingleton`)
* **Comportamento**: Uma única instância é criada na inicialização da aplicação (ou no primeiro acesso) e reutilizada por todas as requisições HTTP subsequentes até que a aplicação pare.
* **Uso ideal**: Serviços de cache centralizado, motores matemáticos sem estado (como a engine matemática do SM-2) ou leitores de configurações globais estáticas.

---

## 2. Injeção de Construtor (Constructor Injection)
Evite resolver dependências manualmente via Service Locator (ex: `app.Services.GetRequiredService<T>()`) dentro de rotas ou métodos. Prefira declarar as dependências como parâmetros nos construtores das classes ou no escopo de assinaturas das rotas Minimal API.
