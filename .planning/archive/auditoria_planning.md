# 🔍 Auditoria do `.planning/` vs Código Real
**Data:** 2026-05-02 | **Projeto:** Nex_TI (PIM III)

---

## 📊 Resultado Geral

| Arquivo | Status | Problemas |
|---------|--------|-----------|
| `PROJECT.md` | ✅ OK | — |
| `ROADMAP.md` | ✅ OK | — |
| `ARCHITECTURE.md` | ✅ OK | — |
| `STRUCTURE.md` | ⚠️ Desatualizado | 2 problemas |
| `STACK.md` | ⚠️ Desatualizado | 2 problemas |
| `INTEGRATIONS.md` | ⚠️ Desatualizado | 1 problema |
| `CONVENTIONS.md` | ✅ OK | — |
| `TESTING.md` | ✅ OK | — |
| `CONCERNS.md` | ✅ OK | — |
| `README.md` | ⚠️ Desatualizado | 2 problemas |

---

## ⚠️ Problemas Encontrados

### 1. `STRUCTURE.md` — Faltam 2 itens

**Problema A:** A página `pages/sobre/` existe no código mas **não está documentada** na árvore de diretórios.

```diff
 - `pages/`: 
   - `dashboard/`: Main application interface, SM-2 engine scripts...
   - `login/`: Authentication interface (`login.html`, `login.css`).
+  - `sobre/`: Informational page about the platform (`index.html`).
```

**Problema B:** O arquivo `analise_mapa_neural.md` está solto na raiz do projeto — é um artefato de análise que deveria estar no `.planning/` ou ser removido.

---

### 2. `STACK.md` — Incompleto

**Problema A:** Não menciona o **Backend C# .NET 10** que já existe em `backend/`.

**Problema B:** Não menciona o **Motor do Mapa Neural** (canvas + spring physics).

```diff
 ### Current State
 - **Frontend**: Semantic HTML5, CSS3, Vanilla JavaScript.
+- **Backend**: C# .NET 10 Minimal APIs, Entity Framework Core.
 - **Database**: SQL Server (DDL scripts).
+- **Visualization**: Neural Map engine with spring physics (`neural-map.js`).
```

---

### 3. `INTEGRATIONS.md` — Desatualizado

**Problema:** Diz que o SM-2 é "planejado para o backend", mas ele **já está implementado** no frontend (`app.js`, seção 4).

```diff
 ### Internal Systems
-- **SM-2 Algorithm**: A spaced repetition motor planned to be implemented natively in the backend.
+- **SM-2 Algorithm**: Spaced repetition engine implemented in the frontend (`app.js`) with full interval calculation, ease factors, and LocalStorage persistence. Backend integration planned for future phases.
```

---

### 4. `README.md` — Faltam 2 itens

**Problema A:** A árvore de diretórios do README não menciona a página `pages/sobre/`.

**Problema B:** Não menciona o **Mapa Neural** na lista de features.

```diff
 - **Gamificação:** Distribuição de XP e Moedas Virtuais...
 - **Acessibilidade Universal:** Foco total em semântica W3C...
+- **Mapa Neural (Obsidian View):** Visualização interativa do progresso acadêmico com física de molas e persistência de estado.
```

---

## ✅ Arquivos Corretos (Sem Problemas)

| Arquivo | Verificação |
|---------|-------------|
| `PROJECT.md` | Requisitos batem com o código. Fase do Mapa Neural registrada. |
| `ROADMAP.md` | 5 fases documentadas e todas marcadas como concluídas. Fase 5 (Neural Map) presente. |
| `ARCHITECTURE.md` | Design patterns e fluxo de dados atualizados com o Neural Map Engine. |
| `CONVENTIONS.md` | Convenções de HTML semântico, C# e SQL estão corretas. |
| `TESTING.md` | Corretamente indica que não há testes automatizados configurados. |
| `CONCERNS.md` | Débito técnico (LocalStorage inseguro) continua válido e documentado. |

---

## 🗑️ Limpeza Recomendada

| Item | Ação | Motivo |
|------|------|--------|
| `analise_mapa_neural.md` (raiz) | Mover para `.planning/` ou excluir | Artefato de análise de sessão anterior, não pertence à raiz do projeto |

---

## 📋 Resumo de Ações

1. **Atualizar `STRUCTURE.md`** — Adicionar `pages/sobre/`
2. **Atualizar `STACK.md`** — Adicionar Backend C# e Motor Neural
3. **Atualizar `INTEGRATIONS.md`** — Corrigir status do SM-2
4. **Atualizar `README.md`** — Adicionar Mapa Neural na lista de features e `sobre/` na árvore
5. **Limpar `analise_mapa_neural.md`** — Mover ou excluir da raiz
