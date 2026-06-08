# Extensão de Referências de Segurança (C# e .NET Framework)

Este plano descreve o enriquecimento do ecossistema de habilidades (skills) locais do projeto com foco em C# e .NET Core (Minimal APIs e Entity Framework Core), fornecendo guias práticos e referências locais de codificação segura.

## Informações Importantes / User Review Required

> [!NOTE]
> Esta fase foca no aprimoramento documentacional de conformidade de segurança e no enriquecimento da skill local `security-best-practices` do agente para dar suporte técnico ao stack C# utilizado no projeto.

## Alterações Propostas

### 1. Documentação de Fase e Roadmap

#### [MODIFY] [ROADMAP.md](file:///c:/Users/mayco/Documents/GitHub/PIM_IV-Parte_Pratica/.planning/ROADMAP.md)
* Adicionar a **Fase 12: Extensão de Referências de Segurança (C# e .NET Framework)** nas seções de idioma Inglês e Português do Roadmap do projeto, marcando-a como concluída.

#### [NEW] [implementation_plan.md](file:///c:/Users/mayco/Documents/GitHub/PIM_IV-Parte_Pratica/.planning/phases/12-security-best-practices/implementation_plan.md)
* Criar este plano de implementação no diretório `.planning/phases/12-security-best-practices/`.

#### [NEW] [task.md](file:///c:/Users/mayco/Documents/GitHub/PIM_IV-Parte_Pratica/.planning/phases/12-security-best-practices/task.md)
* Criar a checklist de tarefas associada.

#### [NEW] [walkthrough.md](file:///c:/Users/mayco/Documents/GitHub/PIM_IV-Parte_Pratica/.planning/phases/12-security-best-practices/walkthrough.md)
* Criar o relatório de conclusão da Fase 12.

---

### 2. Extensão da Skill de Segurança do Agente

#### [NEW] [csharp.md](file:///c:/Users/mayco/Documents/GitHub/PIM_IV-Parte_Pratica/.agents/security-best-practices/languages/csharp.md)
* Criar o novo guia com as melhores práticas de codificação segura específicas de C#/.NET Core (prevenção contra injeções SQL, IDOR, validação de entrada, tratamento global de erros e CORS).

#### [MODIFY] [SKILL.md](file:///c:/Users/mayco/Documents/GitHub/PIM_IV-Parte_Pratica/.agents/security-best-practices/SKILL.md)
* Adicionar o link e descrição do novo guia de segurança C# na listagem de referências disponíveis do repositório.

---

## Plano de Verificação

### Verificação Manual
1. Abrir e validar a legibilidade e renderização de todos os links de documentação adicionados no editor markdown.
2. Garantir que as diretrizes do guia sigam as melhores práticas do OWASP e conformidades técnicas do ASP.NET Core.
