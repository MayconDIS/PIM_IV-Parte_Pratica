---
name: "testing-strategy"
description: "Estratégia de testes automatizados para o projeto Nex_TI. Cobre pirâmide de testes, TDD, padrões AAA, xUnit/.NET e testes de JS Vanilla. Dispare quando o usuário pedir criação de testes, cobertura de código ou validação de funcionalidades."
risk: safe
source: "Criado manualmente para o projeto Nex_TI (PIM IV - UNIP)"
date_added: "2026-06-08"
---

# Habilidade: Estratégia de Testes (Testing Strategy)

Esta habilidade orienta o assistente de IA na criação, organização e execução de testes automatizados para o projeto Nex_TI, cobrindo tanto o backend C# (.NET 10) quanto o frontend JavaScript Vanilla.

---

## 🎯 Filosofia Central
> "Se não tem teste, é funcionalidade temporária." — Anônimo

O objetivo é garantir **confiança no código** através de uma cobertura de testes proporcional ao risco de cada camada:
- **Lógica de negócio** (SM-2 Engine, validações) → Testes Unitários extensivos
- **Endpoints da API** → Testes de Integração com banco in-memory
- **Fluxos de usuário** (Login, Dashboard) → Testes E2E manuais ou automatizados

---

## 📝 Referências Detalhadas Disponíveis

### Fundamentos de Teste
* [test-pyramid.md](file:///c:/Users/mayco/Documents/GitHub/PIM_IV-Parte_Pratica/.agents/testing-strategy/references/test-pyramid.md) - Pirâmide de testes (Unit → Integration → E2E), proporções recomendadas e quando usar cada tipo.
* [naming-and-structure.md](file:///c:/Users/mayco/Documents/GitHub/PIM_IV-Parte_Pratica/.agents/testing-strategy/references/naming-and-structure.md) - Padrão AAA (Arrange-Act-Assert), nomenclatura de métodos de teste e organização de pastas.

### Diretrizes por Linguagem
* [csharp-xunit.md](file:///c:/Users/mayco/Documents/GitHub/PIM_IV-Parte_Pratica/.agents/testing-strategy/languages/csharp-xunit.md) - Testes com xUnit no .NET 10, mocking com Moq, testes de Minimal APIs com `WebApplicationFactory` e cobertura do SM-2 Engine.
* [javascript-vanilla.md](file:///c:/Users/mayco/Documents/GitHub/PIM_IV-Parte_Pratica/.agents/testing-strategy/languages/javascript-vanilla.md) - Testes para JavaScript Vanilla sem dependências pesadas, validação de DOM e fluxos de autenticação.

---

## 🛠️ Checklist de Implementação Geral
- [ ] Toda lógica de negócio (SM-2, validações anti-cheat) possui testes unitários?
- [ ] Os testes seguem o padrão AAA (Arrange → Act → Assert)?
- [ ] A nomenclatura dos testes segue `Método_Cenário_ResultadoEsperado`?
- [ ] Os testes de integração usam banco de dados in-memory (não o banco de produção)?
- [ ] O frontend possui validações manuais documentadas para fluxos críticos (Login, Registro, Flashcards)?
