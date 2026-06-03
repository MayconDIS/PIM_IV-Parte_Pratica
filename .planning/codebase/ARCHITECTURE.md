---
mapped_date: "2026-05-02"
---
*Read in: [English](#english-version) | [Português](#versao-em-portugues)*

---
## English Version

# Architecture & Integrations

### Design Patterns
- **Object-Oriented Programming (OOP)**: The C# backend is modeled with inheritance (e.g., `Admin`, `Tutor`, `Aluno` deriving from `Usuario`) and composition (e.g., `Aluno` has `XP`, `Moedas`, `Simulado`).
- **Relational Database**: Modeled via Entity-Relationship Diagram with SQL Server.
- **Neural Map Engine**: A graph visualization engine (`neural-map.js`) using spring physics simulation (`requestAnimationFrame`), orbital node positioning, and CSS-based glow/pulse animations. Follows Separation of Concerns as an independent module consuming global state from `app.js`.

### Data Flow
- Users interact via the responsive web interface (Vanilla JS/HTML5).
- The Frontend `api.js` service performs HTTP GET/POST requests using the `Fetch API`.
- The Backend (C# .NET 10 Minimal APIs) processes requests, interacting with the SQL Server via Entity Framework Core.
- Data (XP, Flashcards, Progress) is retrieved, updated, and returned to the UI as JSON.
- The Neural Map reads `meusDecks`, `srsData`, and `fasesDesbloqueadas` from the global scope and persists camera/node state to LocalStorage (`map_state` key).

### Integrations
- **SM-2 Algorithm (Active Study)**: Implemented in the C# Backend (`/api/progresso/atualizar` endpoint) for secure interval calculations, ease factor updates, and persistence. The Frontend consumes this endpoint to schedule reviews, fallback-persisting locally where appropriate.
- **Neural Map & LocalStorage**: Camera pan/zoom and node coordinate offsets are persisted locally in the browser to preserve user zoom preference.
- **External Services**: No external APIs are actively integrated in the current codebase. Future milestone outlines integration with AI models for generating flashcard summaries.

---
## Versão em Português

# Arquitetura e Integrações

### Padrões de Projeto (Design Patterns)
- **Programação Orientada a Objetos (POO)**: O backend em C# é modelado com herança (ex: `Admin`, `Tutor`, `Aluno` derivando de `Usuario`) e composição (ex: `Aluno` possui `XP`, `Moedas`, `Simulado`).
- **Banco de Dados Relacional**: Modelado via Diagrama Entidade-Relacionamento (DER) para SQL Server.
- **Motor do Mapa Neural**: Motor de visualização de grafos (`neural-map.js`) utilizando simulação de física de molas (`requestAnimationFrame`), posicionamento orbital de nós e animações CSS de brilho/pulso. Segue Separação de Responsabilidades como módulo independente que consome o estado global do `app.js`.

### Fluxo de Dados
- Os usuários interagem através da interface web responsiva (Vanilla JS/HTML5).
- O serviço `api.js` do Frontend realiza requisições HTTP GET/POST usando a `Fetch API`.
- O Backend (C# .NET 10 Minimal APIs) processa as requisições e interage com o SQL Server via Entity Framework Core.
- Os dados (XP, Flashcards, Progresso) são recuperados, atualizados e retornados para a UI em formato JSON.
- O Mapa Neural lê `meusDecks`, `srsData` e `fasesDesbloqueadas` do escopo global e persiste o estado da câmera/nós no LocalStorage (chave `map_state`).

### Integrações
- **Algoritmo SM-2 (Estudo Ativo)**: Implementado no Backend C# (rota `/api/progresso/atualizar`) para cálculo seguro de intervalos, ajuste do fator de facilidade e persistência de dados. O Frontend consome este endpoint para agendar revisões.
- **Mapa Neural e LocalStorage**: Posições de câmera (zoom/pan) e posições de nós são persistidas no LocalStorage do navegador para preservar as preferências de visualização do usuário.
- **Serviços Externos**: Nenhuma API externa está integrada. O roadmap prevê integração futura com modelos de linguagem (IA) para geração de resumos de flashcards.
