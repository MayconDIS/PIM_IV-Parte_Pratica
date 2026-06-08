# Reestruturação Modular da Skill Clean Code

Este plano descreve a reestruturação e expansão da habilidade local (skill) `clean-code` de um único arquivo markdown (`SKILL.md`) para uma arquitetura modular baseada em subpastas (`references/` e `languages/`), idêntica às habilidades mais complexas do diretório da Vercel.

## Informações Importantes / User Review Required

> [!NOTE]
> Esta alteração é estritamente documentacional e visa aprimorar a capacidade de consulta local de boas práticas de codificação do projeto pelo desenvolvedor e pela IA.

## Alterações Propostas

### 1. Documentação de Fase e Roadmap

#### [MODIFY] [ROADMAP.md](file:///c:/Users/mayco/Documents/GitHub/PIM_IV-Parte_Pratica/.planning/ROADMAP.md)
* Registrar a **Fase 14: Reestruturação Modular da Skill Clean Code** nas seções em inglês e português do Roadmap, marcando-a como concluída.

#### [NEW] [implementation_plan.md](file:///c:/Users/mayco/Documents/GitHub/PIM_IV-Parte_Pratica/.planning/phases/14-clean-code-modular-structure/implementation_plan.md)
* Criar este plano de implementação no diretório `.planning/phases/14-clean-code-modular-structure/`.

#### [NEW] [task.md](file:///c:/Users/mayco/Documents/GitHub/PIM_IV-Parte_Pratica/.planning/phases/14-clean-code-modular-structure/task.md)
* Criar a checklist de tarefas associada.

#### [NEW] [walkthrough.md](file:///c:/Users/mayco/Documents/GitHub/PIM_IV-Parte_Pratica/.planning/phases/14-clean-code-modular-structure/walkthrough.md)
* Criar o relatório de conclusão da Fase 14.

---

### 2. Expansão da Skill de Código Limpo

#### [MODIFY] [SKILL.md](file:///c:/Users/mayco/Documents/GitHub/PIM_IV-Parte_Pratica/.agents/clean-code/SKILL.md)
* Atualizar o arquivo de entrada para funcionar como índice central para as novas referências.

#### [NEW] [naming-and-formatting.md](file:///c:/Users/mayco/Documents/GitHub/PIM_IV-Parte_Pratica/.agents/clean-code/references/naming-and-formatting.md)
* Criar o manual específico para nomenclatura expressiva e formatação limpa (Metáfora do Jornal).

#### [NEW] [functions-and-classes.md](file:///c:/Users/mayco/Documents/GitHub/PIM_IV-Parte_Pratica/.agents/clean-code/references/functions-and-classes.md)
* Criar o manual de boas práticas para funções curtas e divisão de responsabilidade (SRP).

#### [NEW] [error-handling-and-tests.md](file:///c:/Users/mayco/Documents/GitHub/PIM_IV-Parte_Pratica/.agents/clean-code/references/error-handling-and-tests.md)
* Criar o manual sobre tratamento de exceções, prevenção de retorno nulo e regras F.I.R.S.T. para TDD e testes.

#### [NEW] [javascript.md](file:///c:/Users/mayco/Documents/GitHub/PIM_IV-Parte_Pratica/.agents/clean-code/languages/javascript.md)
* Guia com especificidades de código limpo para JS frontend.

#### [NEW] [csharp.md](file:///c:/Users/mayco/Documents/GitHub/PIM_IV-Parte_Pratica/.agents/clean-code/languages/csharp.md)
* Guia com especificidades de código limpo para C# backend.

---

## Plano de Verificação

### Verificação Manual
1. Validar a legibilidade de cada novo manual na ferramenta markdown do editor.
2. Certificar-se de que os links markdown relativos de cada arquivo funcionam de forma esperada.
