---
name: "dotnet-best-practices"
description: "Boas práticas de desenvolvimento de software usando C# e .NET 10 (Minimal APIs, SOLID, EF Core, Clean Architecture). Dispare quando o usuário pedir refatoração, injeção de dependência ou criação de APIs C#."
---

# Habilidade de Melhores Práticas em .NET (C#)

Esta habilidade consolida as melhores práticas de arquitetura, otimização de consultas e padrões de desenvolvimento utilizando C# moderno e .NET Core (.NET 10).

---

## 📝 Referências Detalhadas Disponíveis

### Diretrizes de Arquitetura e Estruturação
* [solid-and-architecture.md](file:///c:/Users/mayco/Documents/GitHub/PIM_IV-Parte_Pratica/.agents/dotnet-best-practices/references/solid-and-architecture.md) - Princípios SOLID aplicados e Clean Architecture no .NET.
* [dependency-injection.md](file:///c:/Users/mayco/Documents/GitHub/PIM_IV-Parte_Pratica/.agents/dotnet-best-practices/references/dependency-injection.md) - Ciclos de vida de serviços no IoC (Transient, Scoped, Singleton) e injeção via construtor.
* [ef-core-optimization.md](file:///c:/Users/mayco/Documents/GitHub/PIM_IV-Parte_Pratica/.agents/dotnet-best-practices/references/ef-core-optimization.md) - Otimização de acesso a banco de dados com EF Core (`AsNoTracking()`, queries assíncronas e N+1).

### Diretrizes de Sintaxe e Código
* [csharp-modern-patterns.md](file:///c:/Users/mayco/Documents/GitHub/PIM_IV-Parte_Pratica/.agents/dotnet-best-practices/languages/csharp-modern-patterns.md) - Padrões de C# 12+ (Primary Constructors, File-scoped Namespaces, Pattern Matching).

---

## 🛠️ Checklist de Implementação Geral (.NET)
- [ ] O arquivo usa namespaces em nível de arquivo (file-scoped)?
- [ ] A lógica de banco de dados do EF Core de leitura está usando `.AsNoTracking()`?
- [ ] Métodos de persistência ou busca no banco de dados são assíncronos (`async/await`)?
- [ ] A injeção de dependência está usando o ciclo de vida adequado (Transient, Scoped, Singleton)?
- [ ] A lógica de negócio foi isolada da rota/controller do Minimal API?
