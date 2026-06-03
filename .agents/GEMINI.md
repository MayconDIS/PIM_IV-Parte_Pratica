# Configurações da IA (Gemini / Antigravity) — Nex_TI

Este arquivo contém as diretrizes e instruções de contexto específicas para os assistentes de IA (como Antigravity) que trabalham neste repositório.

---

## 🚀 Contexto do Projeto
* **Nome**: Nex_TI – EdTech Learning Platform (PIM III - UNIP).
* **Objetivo**: Plataforma educacional gamificada de estudo ativo usando repetição espaçada (Algoritmo SM-2) e visualização gráfica via Mapa Neural (Obsidian View).

---

## 🛠️ Pilha de Tecnologia (Tech Stack)
* **Frontend**: HTML5 Semântico, CSS3 Puro (Design System Global), JavaScript Vanilla.
  - **Porta Local**: Rodar na porta `5500` (configurada via Live Server no VS Code).
  - **Conexão**: Se comunica com o backend consumindo a URL `https://localhost:5001/api/`.
* **Backend**: C# (.NET 10) utilizando **Minimal APIs** e **Entity Framework Core**.
  - **Porta Local**: `https://localhost:5001`.
* **Banco de Dados**: **Microsoft SQL Server** (esquema inicial em `database/NexTI_DB.sql`).

---

## 🎯 Diretrizes de Engenharia e Código
1. **Padrão SOLID**:
   - Manter as responsabilidades de rotas (HTTP) separadas da lógica de negócios e persistência.
   - Usar `ISm2Engine` em `backend/Services/` para qualquer cálculo matemático do algoritmo SM-2 (SRP/DIP).
   - Manter novos endpoints mapeados de forma extensível em classes separadas (ex: `EndpointExtensions.cs`), evitando inflar o `Program.cs`.
2. **Sem Placeholders**:
   - Nunca utilizar códigos ou comentários temporários (TBD, TODO, "implementar depois") em arquivos de produção.
3. **Padrão de Commits**:
   - Commitar alterações usando mensagens convencionais (*Conventional Commits*) em português (ex: `feat(backend):`, `refactor(backend):`, `docs(readme):`).

---

## 💬 Preferências de Comunicação com o Usuário
* **Idioma**: Sempre responder em **Português (PT-BR)**.
* **Estilo**: Manter respostas concisas, focadas e estruturadas em Markdown.
* **Rastreabilidade**: Sempre que mencionar um arquivo ou classe nas respostas, usar links markdown clicáveis usando o esquema `file://` (ex: `[Program.cs](file:///C:/.../backend/Program.cs)`).
