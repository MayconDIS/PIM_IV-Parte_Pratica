# Habilitação da Skill de Melhores Práticas .NET (C#)

Este plano detalha a criação e habilitação de uma nova habilidade local (skill) de desenvolvimento para C#/.NET 10 moderno, estruturando diretrizes arquiteturais como SOLID, padrões assíncronos do EF Core e injeção de dependência para auxiliar o assistente e desenvolvedores no projeto.

## Informações Importantes / User Review Required

> [!NOTE]
> A nova skill local ficará em `.agents/dotnet-best-practices/SKILL.md` e será registrada no `skills-lock.json` do projeto para carregamento de contexto.

## Alterações Propostas

### 1. Documentação de Fase e Roadmap

#### [MODIFY] [ROADMAP.md](file:///c:/Users/mayco/Documents/GitHub/PIM_IV-Parte_Pratica/.planning/ROADMAP.md)
* Registrar a **Fase 13: Habilitação da Skill de Melhores Práticas .NET (C#)** nas seções em inglês e português do Roadmap, marcando-a como concluída.

#### [NEW] [implementation_plan.md](file:///c:/Users/mayco/Documents/GitHub/PIM_IV-Parte_Pratica/.planning/phases/13-dotnet-best-practices-skill/implementation_plan.md)
* Criar este plano de implementação no diretório `.planning/phases/13-dotnet-best-practices-skill/`.

#### [NEW] [task.md](file:///c:/Users/mayco/Documents/GitHub/PIM_IV-Parte_Pratica/.planning/phases/13-dotnet-best-practices-skill/task.md)
* Criar a checklist de tarefas associada.

#### [NEW] [walkthrough.md](file:///c:/Users/mayco/Documents/GitHub/PIM_IV-Parte_Pratica/.planning/phases/13-dotnet-best-practices-skill/walkthrough.md)
* Criar o relatório de conclusão da Fase 13.

---

### 2. Criação da Habilidade Customizada (.NET)

#### [NEW] [SKILL.md (dotnet)](file:///c:/Users/mayco/Documents/GitHub/PIM_IV-Parte_Pratica/.agents/dotnet-best-practices/SKILL.md)
* Criar a especificação completa contendo conceitos de SOLID no C#, Primary Constructors, injeção de dependência (Scoped, Transient, Singleton) e otimização de queries com EF Core (`AsNoTracking`).

#### [MODIFY] [skills-lock.json](file:///c:/Users/mayco/Documents/GitHub/PIM_IV-Parte_Pratica/skills-lock.json)
* Adicionar a referência local de `dotnet-best-practices` no manifesto de skills do projeto.

---

## Plano de Verificação

### Verificação Manual
1. Certificar-se de que os arquivos markdown da nova skill estão bem formatados e os links e snippets de código C# estão corretos.
2. Validar o mapeamento sintático do arquivo JSON `skills-lock.json` para evitar erros de parser.
