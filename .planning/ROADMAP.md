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
