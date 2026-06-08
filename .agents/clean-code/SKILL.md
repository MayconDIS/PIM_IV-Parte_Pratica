---
name: clean-code
description: "Habilidade que incorpora os princípios de \"Código Limpo\" por Robert C. Martin (Uncle Bob). Use-a para guiar refatorações, revisões de código, nomenclatura correta de variáveis, funções e classes pequenas."
risk: safe
source: "ClawForge (https://github.com/jackjin1997/ClawForge) - Modificado localmente"
date_added: "2026-06-08"
---

# Habilidade de Código Limpo (Clean Code)

Esta habilidade incorpora os princípios fundamentais descritos por Robert C. Martin (Uncle Bob) para transformar "código que simplesmente funciona" em "código limpo, legível e de fácil manutenção".

---

## 🎯 Filosofia Central
> "Código é limpo se puder ser lido e aprimorado por um desenvolvedor que não seja seu autor original." — Grady Booch

---

## 📝 Referências Detalhadas Disponíveis

### Diretrizes de Código Limpo
* [naming-and-formatting.md](file:///c:/Users/mayco/Documents/GitHub/PIM_IV-Parte_Pratica/.agents/clean-code/references/naming-and-formatting.md) - Padrões de nomenclatura clara de variáveis/funções e a Metáfora do Jornal para formatação vertical.
* [functions-and-classes.md](file:///c:/Users/mayco/Documents/GitHub/PIM_IV-Parte_Pratica/.agents/clean-code/references/functions-and-classes.md) - Regras para funções curtas com apenas uma responsabilidade (Do One Thing) e classes coesas baseadas no princípio SRP.
* [error-handling-and-tests.md](file:///c:/Users/mayco/Documents/GitHub/PIM_IV-Parte_Pratica/.agents/clean-code/references/error-handling-and-tests.md) - Boas práticas de tratamento de exceções (evitar retorno de `null`), injeções limpas e os princípios F.I.R.S.T. para TDD e testes unitários.

### Diretrizes por Linguagem
* [javascript.md](file:///c:/Users/mayco/Documents/GitHub/PIM_IV-Parte_Pratica/.agents/clean-code/languages/javascript.md) - Clean Code e boas práticas para JavaScript frontend vanilla.
* [csharp.md](file:///c:/Users/mayco/Documents/GitHub/PIM_IV-Parte_Pratica/.agents/clean-code/languages/csharp.md) - Padrões de nomenclatura C#, Primary Constructors e tratamento de exceções limpo no .NET.

---

## 🛠️ Checklist de Implementação Geral
- [ ] Os nomes revelam intenção real e evitam desinformação ou ruídos?
- [ ] As funções fazem exatamente uma única coisa e têm menos de 20 linhas?
- [ ] As classes têm apenas uma única responsabilidade (SRP)?
- [ ] O código evita retornar ou passar referências nulas (`null`)?
- [ ] O tratamento de erros é feito via exceções específicas em vez de códigos de retorno?
