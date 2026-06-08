---
name: "dotnet-best-practices"
description: "Boas práticas de desenvolvimento de software usando C# e .NET 10 (Minimal APIs, SOLID, EF Core, Clean Architecture). Dispare quando o usuário pedir refatoração, injeção de dependência ou criação de APIs C#."
---

# Habilidade de Melhores Práticas em .NET (C#)

Esta habilidade consolida os padrões arquiteturais modernos e diretrizes de desenvolvimento seguro/limpo para o ecossistema .NET Core e C# moderno (C# 12+ / .NET 10).

---

## 1. Princípios SOLID Aplicados ao .NET

* **S (Single Responsibility Principle)**: Mantenha seus controladores/endpoints Minimal API limpos. Delegue a lógica de negócio a serviços ou manipuladores específicos (ex: `ISm2Engine` em `backend/Services/`).
* **O (Open/Closed Principle)**: Use polimorfismo e injeção de dependência. Adicione novas funcionalidades criando novas classes que implementam interfaces existentes, sem alterar o código original.
* **L (Liskov Substitution Principle)**: Garanta que as classes herdadas ou que implementam uma interface possam substituir suas classes base sem quebrar o comportamento do sistema.
* **I (Interface Segregation Principle)**: Crie interfaces pequenas e específicas em vez de interfaces genéricas gigantescas.
* **D (Dependency Inversion Principle)**: Dependa de abstrações (interfaces), não de classes concretas. Injete as dependências no construtor.

---

## 2. Padrões de C# Moderno (C# 12+)

* **File-scoped Namespaces**: Use namespaces em escopo de arquivo para reduzir o nível de indentação horizontal do código.
  ```csharp
  namespace NexTI.Backend.Services; // File-scoped

  public class Sm2Engine : ISm2Engine { ... }
  ```
* **Primary Constructors**: Use construtores primários em classes e records para simplificar a injeção de dependência.
  ```csharp
  public class CardsEndpoints(ISm2Engine sm2Engine)
  {
      // O parâmetro 'sm2Engine' fica disponível em todo o escopo da classe
  }
  ```
* **Pattern Matching**: Prefira o uso de pattern matching moderno para validação e lógica condicional clara.

---

## 3. Boas Práticas com Entity Framework Core

* **AsNoTracking()**: Para consultas que servem puramente para leitura e exibição de dados (sem intenção de modificação e salvamento posterior), utilize `.AsNoTracking()` para desativar o rastreamento de entidades do EF, melhorando significativamente a performance e economizando memória.
  ```csharp
  var cards = await dbContext.Cards
                             .AsNoTracking()
                             .Where(c => c.UsuarioId == userId)
                             .ToListAsync();
  ```
* **Evitar N+1 Queries**: Use `.Include()` para carregar relacionamentos em uma única consulta quando necessário, em vez de carregar entidades filhas em loops separados.
* **Execuções Assíncronas**: Sempre utilize variantes assíncronas para chamadas de banco de dados (ex: `ToListAsync()`, `FirstOrDefaultAsync()`, `SaveChangesAsync()`) para liberar as threads de execução do servidor.

---

## 4. Ciclo de Vida de Serviços (Injeção de Dependência)

Entenda e selecione a injeção correta no container IoC:
* **Transient (`AddTransient`)**: Criado toda vez que é requisitado. Ideal para serviços leves e sem estado.
* **Scoped (`AddScoped`)**: Criado uma vez por requisição HTTP. Ideal para contextos de banco de dados (`DbContext`) e serviços de negócio que mantêm estado durante a mesma chamada.
* **Singleton (`AddSingleton`)**: Criado uma única vez na inicialização da aplicação e compartilhado por todas as requisições. Ideal para serviços de cache em memória ou motores matemáticos sem estado volátil.

---

## 🛠️ Checklist de Implementação (.NET)
- [ ] O arquivo usa file-scoped namespaces?
- [ ] A lógica de banco de dados do EF Core de leitura está usando `.AsNoTracking()`?
- [ ] Métodos de persistência ou busca no banco de dados são assíncronos (`async/await`)?
- [ ] A injeção de dependência está usando o ciclo de vida adequado (Transient, Scoped, Singleton)?
- [ ] A lógica de negócio foi isolada da rota/controller do Minimal API?
