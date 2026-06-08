# Reestruturação Modular da Skill Dotnet Best Practices

Este plano descreve a reestruturação e expansão da habilidade local (skill) `dotnet-best-practices` de um único arquivo markdown (`SKILL.md`) para uma arquitetura modular baseada em subpastas (`references/` e `languages/`), idêntica às habilidades mais complexas do diretório do agente.

## Informações Importantes / User Review Required

> [!NOTE]
> Esta alteração é estritamente documentacional e visa aprimorar a capacidade de consulta local dos padrões de desenvolvimento, arquitetura limpa, EF Core e injeção de dependência C# do projeto pelo assistente e pela equipe.

## Alterações Propostas

### 1. Documentação de Fase e Roadmap

#### [MODIFY] [ROADMAP.md](file:///c:/Users/mayco/Documents/GitHub/PIM_IV-Parte_Pratica/.planning/ROADMAP.md)
* Registrar a **Fase 16: Reestruturação Modular da Skill Dotnet Best Practices** nas seções em inglês e português do Roadmap, marcando-a como concluída.

#### [NEW] [implementation_plan.md](file:///c:/Users/mayco/Documents/GitHub/PIM_IV-Parte_Pratica/.planning/phases/16-dotnet-best-practices-modular-structure/implementation_plan.md)
* Criar este plano de implementação no diretório `.planning/phases/16-dotnet-best-practices-modular-structure/`.

#### [NEW] [task.md](file:///c:/Users/mayco/Documents/GitHub/PIM_IV-Parte_Pratica/.planning/phases/16-dotnet-best-practices-modular-structure/task.md)
* Criar a checklist de tarefas associada.

#### [NEW] [walkthrough.md](file:///c:/Users/mayco/Documents/GitHub/PIM_IV-Parte_Pratica/.planning/phases/16-dotnet-best-practices-modular-structure/walkthrough.md)
* Criar o relatório de conclusão da Fase 16.

---

### 2. Expansão da Skill de Melhores Práticas .NET

#### [MODIFY] [SKILL.md](file:///c:/Users/mayco/Documents/GitHub/PIM_IV-Parte_Pratica/.agents/dotnet-best-practices/SKILL.md)
* Atualizar o arquivo de entrada para funcionar como índice central para as novas referências.

#### [NEW] [solid-and-architecture.md](file:///c:/Users/mayco/Documents/GitHub/PIM_IV-Parte_Pratica/.agents/dotnet-best-practices/references/solid-and-architecture.md)
* Criar o manual de especificações de princípios SOLID e arquitetura limpa em .NET.

#### [NEW] [dependency-injection.md](file:///c:/Users/mayco/Documents/GitHub/PIM_IV-Parte_Pratica/.agents/dotnet-best-practices/references/dependency-injection.md)
* Criar o manual sobre injeção de dependência e ciclos de vida de serviço (Transient, Scoped, Singleton).

#### [NEW] [ef-core-optimization.md](file:///c:/Users/mayco/Documents/GitHub/PIM_IV-Parte_Pratica/.agents/dotnet-best-practices/references/ef-core-optimization.md)
* Criar a especificação de otimização de banco de dados e consultas assíncronas com EF Core (`AsNoTracking`).

#### [NEW] [csharp-modern-patterns.md](file:///c:/Users/mayco/Documents/GitHub/PIM_IV-Parte_Pratica/.agents/dotnet-best-practices/languages/csharp-modern-patterns.md)
* Criar o manual sobre padrões de C# moderno (C# 12+), construtores primários e file-scoped namespaces.

---

## Plano de Verificação

### Verificação Manual
1. Validar a legibilidade de cada novo manual na ferramenta markdown do editor.
2. Certificar-se de que os links markdown relativos de cada arquivo funcionam de forma esperada.
