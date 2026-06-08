*Read in: [English](#english-version) | [Português](#versao-em-portugues)*

---
## English Version

# ROADMAP

## Phase 1: MVP Frontend Core
**Status: Completed**
- [x] Initial Splash Screen (`index.html`)
- [x] Login and Authentication Screens (`pages/login/`)
- [x] Main Dashboard (`pages/dashboard/`)
- [x] Interactive UI logic (`assets/js/`, `pages/dashboard/js/`)

## Phase 2: Database Architecture
**Status: Completed**
- [x] Initial DDL script (`database/NexTI_DB.sql`)
- [x] Refine tables for SM-2 Algorithm
- [x] Gamification logic constraints (XP, Coins)

## Phase 3: C# Backend & API Integration
**Status: Completed**
- [x] Setup ASP.NET Core API project
- [x] Implement Entity Framework Core
- [x] Connect frontend to backend via fetch API

## Phase 4: Security & Documentation (University Extension)
**Status: Completed**
- [x] Implement API security patches (CORS, IDOR mitigation)
- [x] Create Execution Manual for Evaluators
- [x] Create Practical and Technical Manuals for Extension

## Phase 5: Neural Map (Obsidian View)
**Status: Completed**
- [x] Migrate legacy neural map engine from `OLD/` codebase
- [x] Create modular `js/neural-map.js` (Separation of Concerns)
- [x] Spring physics engine (orbital nodes with 0.15 damping)
- [x] Pan & Zoom camera system with mouse wheel and buttons
- [x] LocalStorage persistence for node positions and camera state
- [x] Synaptic flashcard popups on card node click
- [x] CSS animations: neural pulse, glow effects, mini-flashcard tooltips
- [x] Accessibility widget (Zoom In/Out, High Contrast) inside modal

## Phase 6: SOLID Backend Refactoring
**Status: Completed**
- [x] Isolate SM-2 spaced repetition calculation logic in a dedicated service (SRP/DIP)
- [x] Extract Minimal API route registrations from Program.cs to modular extensions (SRP)
- [x] Clean up and refactor Program.cs entry point
- [x] Verify compilation and end-to-end integration

## Phase 7: Bugfixes and Robustness
**Status: Completed**
- [x] Add seeds for Simulated Exams and ENADE questions to the database schema (`NexTI_DB.sql`)
- [x] Apply defensive claims validation via TryParse in C# endpoints
- [x] Implement robust offline-first fallback for flashcards in frontend (`app.js`)

## Phase 8: Module Tests (ENADE Style)
**Status: Completed**
- [x] Integrate module tests menu block to the dashboard UI
- [x] Build dynamic multiple-choice generator (A, B, C, D) with random distractors
- [x] Implement order locking and validation for 70% approval rate
- [x] Grant +25 XP rewards bypass database SM-2 algorithm

## Phase 9: Custom Header Motivation & Logo Layout
**Status: Completed**
- [x] Add dynamic, localized active learning motivational quotes container in the header
- [x] Migrate generic symbols to clean, terminal-styled square icon
- [x] Crop logo image, clear solid dark background to alpha transparent
- [x] Render dynamic CSS grid lines on logo header box container
- [x] Resolve backdrop-filter Safari compatibility and remove login inline styles

## Phase 10: Neural Map Integration (Obsidian View)
**Status: Completed**
- [x] Enable neural map by removing blocking alert placeholder
- [x] Apply cache-busting version query on neural-map.js script tag

## Phase 11: VLibras Widget Integration (National Accessibility)
**Status: Completed**
- [x] Integrate official VLibras widget script on landing page (`index.html`)
- [x] Add VLibras widget to authentication page (`pages/login/login.html`)
- [x] Add VLibras widget to main dashboard (`pages/dashboard/index.html`)
- [x] Add VLibras widget to about screen (`pages/sobre/index.html`)
- [x] Maintain clean spacing and position alignment on all viewports

## Phase 12: Security Reference Extension (C# and .NET Framework)
**Status: Completed**
- [x] Add csharp.md security reference to agent languages directory
- [x] Document secure coding practices for EF Core and Minimal APIs
- [x] Update agent security-best-practices catalog documentation

---
## Versão em Português

# ROADMAP

## Fase 1: Núcleo do Frontend (MVP)
**Status: Concluído**
- [x] Splash Screen inicial (`index.html`)
- [x] Telas de Login e Autenticação (`pages/login/`)
- [x] Dashboard Principal (`pages/dashboard/`)
- [x] Lógica interativa de UI (`assets/js/`, `pages/dashboard/js/`)

## Fase 2: Arquitetura de Banco de Dados
**Status: Concluído**
- [x] Script DDL inicial (`database/NexTI_DB.sql`)
- [x] Refinamento de tabelas para o Algoritmo SM-2
- [x] Restrições e lógicas de gamificação (XP, Moedas)

## Fase 3: Backend em C# e Integração de API
**Status: Concluído**
- [x] Configurar projeto ASP.NET Core API
- [x] Implementar Entity Framework Core
- [x] Conectar o frontend ao backend via fetch API

## Fase 4: Segurança e Documentação (Extensão Universitária)
**Status: Concluído**
- [x] Implementar patches de segurança da API (CORS, mitigação IDOR)
- [x] Criar Manual de Execução para a Banca Avaliadora
- [x] Criar Manuais Prático e Técnico para Extensão

## Fase 5: Mapa Neural (Obsidian View)
**Status: Concluído**
- [x] Migrar motor do mapa neural do código legado (`OLD/`)
- [x] Criar módulo separado `js/neural-map.js` (Separação de Responsabilidades)
- [x] Motor de física de molas (nós orbitais com amortecimento de 0.15)
- [x] Sistema de câmera com Pan & Zoom (roda do mouse e botões)
- [x] Persistência via LocalStorage para posições dos nós e estado da câmera
- [x] Popups de flashcards sinápticos ao clicar nos nós de cartas
- [x] Animações CSS: pulso neural, efeitos de brilho, tooltips de mini-flashcard
- [x] Widget de acessibilidade (Zoom In/Out, Alto Contraste) dentro do modal

## Fase 6: Refatoração SOLID do Backend
**Status: Concluído**
- [x] Isolar lógica matemática do algoritmo SM-2 em um serviço dedicado (SRP/DIP)
- [x] Extrair rotas de API em mapeamentos de extensão modular para limpar o Program.cs (SRP)
- [x] Limpar e reestruturar o arquivo de entrada Program.cs
- [x] Validar compilação e integração de ponta a ponta

## Fase 7: Correções e Robustez
**Status: Concluído**
- [x] Adicionar sementes de dados (Seed) para Simulados e ENADE no script SQL (`NexTI_DB.sql`)
- [x] Aplicar validação de claims defensiva com TryParse nos endpoints C# do backend
- [x] Implementar fallback local offline-first robusto para flashcards no frontend (`app.js`)

## Fase 8: Testes de Módulo (Estilo ENADE)
**Status: Concluído**
- [x] Integrar blocos de teste de módulo ao menu de navegação do dashboard
- [x] Desenvolver gerador dinâmico de múltipla escolha (A, B, C, D) com distratores aleatórios
- [x] Implementar bloqueio progressivo e validação de 70% de acertos
- [x] Atribuir recompensas de +25 XP sem alterar algoritmo SM-2 das cartas

## Fase 9: Layout de Logotipo e Frases Motivacionais Customizadas
**Status: Concluído**
- [x] Adicionar frases motivacionais dinâmicas e personalizadas no centro do cabeçalho
- [x] Adicionar e estilizar imagem do ícone de terminal quadrado
- [x] Recortar margens do logotipo oficial e aplicar fundo transparente de alta qualidade
- [x] Renderizar linhas de grid quadriculado via CSS no contêiner do logotipo do cabeçalho
- [x] Corrigir compatibilidade do backdrop-filter no Safari e remover estilos inline na tela de login

## Fase 10: Integração do Mapa Neural (Obsidian View)
**Status: Concluído**
- [x] Habilitar o mapa neural removendo o placeholder do alerta de bloqueio
- [x] Aplicar versão de cache-busting no carregamento do script neural-map.js

## Fase 11: Integração com VLibras Widget (Acessibilidade Nacional)
**Status: Concluído**
- [x] Integrar script e widget oficial do VLibras na página inicial (`index.html`)
- [x] Adicionar widget VLibras na tela de autenticação (`pages/login/login.html`)
- [x] Adicionar widget VLibras no dashboard principal (`pages/dashboard/index.html`)
- [x] Adicionar widget VLibras na tela sobre (`pages/sobre/index.html`)
- [x] Garantir espaçamento e alinhamento visual limpo em todas as telas

## Fase 12: Extensão de Referências de Segurança (C# e .NET Framework)
**Status: Concluído**
- [x] Criar guia csharp.md na pasta de linguagens do agente de segurança
- [x] Documentar padrões de prevenção a SQL Injection e IDOR em Minimal APIs
- [x] Atualizar índice de referências da skill security-best-practices do projeto

