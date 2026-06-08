---
name: "api-design"
description: "Padrões e convenções de design de APIs RESTful para o projeto Nex_TI. Cobre nomenclatura de rotas, verbos HTTP, códigos de status, DTOs, validação e tratamento de erros padronizado (RFC 7807). Dispare quando o usuário pedir criação de endpoints, refatoração de APIs ou padronização de respostas."
risk: safe
source: "Criado manualmente para o projeto Nex_TI (PIM IV - UNIP)"
date_added: "2026-06-08"
---

# Habilidade: Design de APIs RESTful (API Design)

Esta habilidade orienta o assistente de IA na criação e padronização de endpoints RESTful no backend Nex_TI (.NET 10 Minimal APIs), garantindo consistência, segurança e boas práticas.

---

## 🎯 Filosofia Central
> "Uma boa API é aquela que é previsível: se o desenvolvedor entendeu um endpoint, ele sabe usar todos os outros." — Anônimo

---

## 📝 Referências Detalhadas Disponíveis

### Convenções e Padrões
* [rest-conventions.md](file:///c:/Users/mayco/Documents/GitHub/PIM_IV-Parte_Pratica/.agents/api-design/references/rest-conventions.md) - Convenções de nomenclatura de rotas, verbos HTTP corretos, códigos de status semânticos, paginação e filtros.
* [error-handling.md](file:///c:/Users/mayco/Documents/GitHub/PIM_IV-Parte_Pratica/.agents/api-design/references/error-handling.md) - Formato padronizado de respostas de erro (RFC 7807 Problem Details), middleware global de exceções e logging estruturado.
* [dto-patterns.md](file:///c:/Users/mayco/Documents/GitHub/PIM_IV-Parte_Pratica/.agents/api-design/references/dto-patterns.md) - Separação Model vs DTO vs Request/Response, validação de entrada com Data Annotations e FluentValidation, uso de Records imutáveis.

---

## 🛠️ Checklist de Implementação Geral
- [ ] As rotas usam substantivos no plural e kebab-case (`/api/flashcards`, não `/api/GetFlashcard`)?
- [ ] Os verbos HTTP são semânticos (GET para leitura, POST para criação, PUT para atualização completa)?
- [ ] Os códigos de status HTTP são corretos (200, 201, 400, 401, 403, 404, 500)?
- [ ] As respostas de erro seguem um formato padronizado com `message` e contexto?
- [ ] Os DTOs de request são separados dos modelos de entidade do EF Core?
- [ ] Os endpoints que modificam dados estão protegidos por `.RequireAuthorization()`?
