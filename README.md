<div align="center">
  <img src="assets/img/Logo%20UNIP.png" alt="Logo UNIP" width="150" onerror="this.src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/UNIP_Logo.svg/1200px-UNIP_Logo.svg.png'"/>
  <h1>Nex_TI – EdTech Learning Platform</h1>
  <p><strong>Projeto Integrado Multidisciplinar (PIM IV) - Análise e Desenvolvimento de Sistemas</strong></p>

  <!-- Badges -->
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
  <img src="https://img.shields.io/badge/C%23-239120?style=for-the-badge&logo=c-sharp&logoColor=white" />
  <img src="https://img.shields.io/badge/.NET_10-512BD4?style=for-the-badge&logo=dotnet&logoColor=white" />
  <img src="https://img.shields.io/badge/SQL_Server-CC2927?style=for-the-badge&logo=microsoft-sql-server&logoColor=white" />
</div>

<br>

*Read in: [English](#english-version) | [Português](#versao-em-portugues) | [Español](#version-en-espanol)*

---

## 🔗 Ecossistema do Projeto (PIM IV) / Project Ecosystem / Ecosistema del Proyecto

<details open>
  <summary>🇧🇷 <b>Português</b></summary>

  O ecossistema do projeto **Nex_TI** desenvolvido para o PIM IV (UNIP) é estruturado em três repositórios complementares:
  1. 📄 **[PIM_IV-Parte_Teorica](file:///C:/Users/mayco/Documents/GitHub/PIM_IV-Parte_Teorica)**: Contém a monografia acadêmica e o Relatório ABNT interativo (HTML/CSS), protótipos de interface, cronogramas e atas teóricas.
  2. 📐 **[PIM_IV-Documentacao_UML](file:///C:/Users/mayco/Documents/GitHub/PIM_IV-Documentacao_UML)**: Abriga a modelagem UML completa e fonte no Astah (`.asta`), os diagramas globais exportados (Classes, Sequência, Casos de Uso) e a documentação detalhada em Markdown do Backlog do Produto e Sprints.
  3. 💻 **[PIM_IV-Parte_Pratica](file:///C:/Users/mayco/Documents/GitHub/PIM_IV-Parte_Pratica)**: A implementação funcional em código, englobando o Frontend (HTML/CSS/JS com modo de acessibilidade e o mapa neural interativo), a API do Backend em C# (.NET 10 Minimal APIs) e os scripts do banco de dados (Microsoft SQL Server).
</details>

<details>
  <summary>🇺🇸 <b>English</b></summary>

  The **Nex_TI** project ecosystem for PIM IV (UNIP) is structured into three complementary repositories:
  1. 📄 **[PIM_IV-Parte_Teorica](file:///C:/Users/mayco/Documents/GitHub/PIM_IV-Parte_Teorica)**: Contains the academic monograph and the interactive ABNT Report (HTML/CSS), interface prototypes, schedules, and theoretical minutes.
  2. 📐 **[PIM_IV-Documentacao_UML](file:///C:/Users/mayco/Documents/GitHub/PIM_IV-Documentacao_UML)**: Hosts the complete UML modeling and Astah source (`.asta`), global exported diagrams (Class, Sequence, Use Case), and detailed Markdown documentation of Product and Sprint Backlogs.
  3. 💻 **[PIM_IV-Parte_Pratica](file:///C:/Users/mayco/Documents/GitHub/PIM_IV-Parte_Pratica)**: The functional code implementation, encompassing the Frontend (HTML/CSS/JS with accessibility mode and interactive neural map), the Backend C# API (.NET 10 Minimal APIs), and database scripts (Microsoft SQL Server).
</details>

<details>
  <summary>🇪🇸 <b>Español</b></summary>

  El ecosistema del proyecto **Nex_TI** para PIM IV (UNIP) está estructurado en tres repositórios complementarios:
  1. 📄 **[PIM_IV-Parte_Teorica](file:///C:/Users/mayco/Documents/GitHub/PIM_IV-Parte_Teorica)**: Contiene la monografía académica y el Informe ABNT interactivo (HTML/CSS), prototipos de interfaz, cronogramas y actas teóricas.
  2. 📐 **[PIM_IV-Documentacao_UML](file:///C:/Users/mayco/Documents/GitHub/PIM_IV-Documentacao_UML)**: Alberga el modelado UML completo y la fuente en Astah (`.asta`), los diagramas globales exportados (Clases, Secuencia, Casos de Uso) y la documentación detallada en Markdown del Backlog del Producto y Sprints.
  3. 💻 **[PIM_IV-Parte_Pratica](file:///C:/Users/mayco/Documents/GitHub/PIM_IV-Parte_Pratica)**: La implementación funcional en código, que abarca el Frontend (HTML/CSS/JS con modo de accesibilidad y mapa neuronal interactivo), la API del Backend en C# (.NET 10 Minimal APIs) y los scripts de la base de datos (Microsoft SQL Server).
</details>

---

## 🇧🇷 Versão em Português


### 📖 Sobre o Projeto
A **Nex_TI** é a implementação prática de uma plataforma web focada em avaliação e apoio à aprendizagem. O projeto foi desenvolvido para resolver a "curva de esquecimento" em treinamentos acadêmicos e corporativos.
Para isso, a plataforma integra:
- **Estudo Ativo & Repetição Espaçada:** Implementação algorítmica do SM-2 para calcular os intervalos ideais de revisão (Motor Anki).
- **Gamificação:** Distribuição de Pontos de Experiência (XP) e Moedas Virtuais com níveis de progressão.
- **Acessibilidade Universal:** Foco total em semântica W3C, modo de alto contraste nativo e controles de zoom.
- **Mapa Neural (Obsidian View):** Visualização interativa do progresso acadêmico com física de molas, drag-and-drop e persistência de estado.

Este repositório abriga o sistema Fullstack completo (PIM IV), focado em uma arquitetura limpa (Separation of Concerns), integrando Frontend, API RESTful e Banco de Dados Relacional.

### 📐 Estado do Escopo e Integrações (Versão Final - PIM IV)

Toda a infraestrutura planejada para o ecossistema Nex_TI foi completamente integrada no PIM IV (4º Semestre), eliminando quaisquer emulações de dados locais (bypasses) e ativando a persistência em tempo real no banco de dados Microsoft SQL Server.

| Funcionalidade / Módulo | Estado Atual (PIM IV) | Mecanismo de Persistência / Integração |
|---|---|---|
| **Cadastro, Login & Acessibilidade** | 100% Funcional e Sincronizado | JWT Token / API C# e SQL Server |
| **Motor SM-2 e Flashcards** | 100% Funcional e Sincronizado | Agendamento via API (C#) e SQL Server |
| **Mapa Neural (Obsidian View)** | 100% Funcional e Sincronizado | Armazenamento de estados via API e SQL Server |
| **Simulado ENADE (Questões)** | 100% Funcional e Sincronizado | Banco de dados via `GET /api/simulados/questoes` e `tb_questoes` |
| **Loja de Moedas & Customização** | 100% Funcional e Sincronizado | Transações debitadas e persistidas via `PUT /api/usuarios/stats` |


### 🚀 Tecnologias e Arquitetura

O projeto foi construído seguindo as melhores práticas do mercado:

* **Frontend:** Desenvolvido em HTML5 semântico, responsivo via CSS Puro (Design System Global) e lógicas isoladas in Vanilla JS, consumindo a API via `fetch`.
* **Backend:** API RESTful desenvolvida em `C# (.NET 10)` utilizando **Minimal APIs** e **Entity Framework Core**, com políticas de CORS e mitigação de vulnerabilidades (OWASP).
* **Banco de Dados:** SGBD `SQL Server` estruturado (`NexTI_DB.sql`) garantindo restrições de gamificação no nível do banco.

### 📂 Estrutura do Repositório

```text
📦 PIM_IV-Parte_Pratica
 ┣ 📂 .planning/      # Inteligência do projeto, roadmap e arquitetura
 ┣ 📂 assets/         # Recursos globais e Design System
 ┃ ┣ 📂 css/          # global.css, splash.css
 ┃ ┗ 📂 js/           # api.js, auth.js, splash.js
 ┣ 📂 backend/        # API C# .NET 10 (Controllers, Models, DbContext)
 ┣ 📂 database/       # Script SQL do banco de dados (NexTI_DB.sql)
 ┣ 📂 pages/          # Telas e módulos do Frontend
 ┃ ┣ 📂 dashboard/    # Interface principal, Motor SM-2 e Mapa Neural
 ┃ ┣ 📂 login/        # Autenticação do usuário
 ┃ ┗ 📂 sobre/        # Página informativa da plataforma
 ┣ 📜 index.html      # Ponto de entrada / Splash Screen
 ┣ 📜 MANUAL_DE_EXECUCAO.md  # Guia para a banca rodar o projeto
 ┣ 📜 MANUAL_PRATICO.md      # Guia do Usuário final (Extensão Universitária)
 ┗ 📜 MANUAL_TECNICO.md      # Guia de Arquitetura e Engenharia de Software
```

### 👥 Equipe de Desenvolvimento
Projeto acadêmico desenvolvido pelos alunos da UNIP - São José dos Campos (Turma 2026 / Diurno):
- **Gabriel Alves Moreira** (H67HJI4)
- **Maciel Costa da Silva** (R280985)
- **Maycon Douglas Inácio Silva** (H719CD3)
- **Miguel Angel Fernandez Ortiz** (H7858F9)
- **Rafael Mesquita** (H6722I0)

---

## 🇺🇸 English Version

### 📖 About the Project
**Nex_TI** is the practical implementation of a web-based assessment and learning support platform. The project was designed to solve the "forgetting curve" in academic and corporate training. 
To achieve this, the platform integrates:
- **Active Study & Spaced Repetition:** Algorithmic implementation of SM-2 to calculate optimal review intervals (Anki Engine).
- **Gamification:** Distribution of Experience Points (XP) and Virtual Coins with progression levels.
- **Universal Accessibility:** Strict adherence to W3C semantics, native high-contrast mode, and zoom controls.
- **Neural Map (Obsidian View):** Interactive academic progress visualization with spring physics, drag-and-drop, and state persistence.

This repository hosts the complete Fullstack system (PIM IV), focused on a clean architecture (Separation of Concerns), integrating Frontend, RESTful API, and Relational Database.

### 🚀 Technologies and Architecture

The project was built adhering to industry best practices:

* **Frontend:** Developed in semantic HTML5, responsive via Vanilla CSS (Global Design System), and business logic isolated in Vanilla JS, consuming the API via `fetch`.
* **Backend:** RESTful API developed in `C# (.NET 10)` using **Minimal APIs** and **Entity Framework Core**, including CORS policies and vulnerability mitigations (OWASP).
* **Database:** `SQL Server` RDBMS structured (`NexTI_DB.sql`) ensuring gamification constraints at the database level.

### 📂 Repository Structure

```text
📦 PIM_IV-Parte_Pratica
 ┣ 📂 .planning/      # Project intelligence, roadmap, and architecture
 ┣ 📂 assets/         # Global resources and Design System
 ┃ ┣ 📂 css/          # global.css, splash.css
 ┃ ┗ 📂 js/           # api.js, auth.js, splash.js
 ┣ 📂 backend/        # C# .NET 10 API (Controllers, Models, DbContext)
 ┣ 📂 database/       # Database SQL script (NexTI_DB.sql)
 ┣ 📂 pages/          # Frontend screens and modules
 ┃ ┣ 📂 dashboard/    # Main interface, SM-2 Engine, and Neural Map
 ┃ ┣ 📂 login/        # User authentication
 ┃ ┗ 📂 sobre/        # Platform informational page
 ┣ 📜 index.html      # Entry point / Splash Screen
 ┣ 📜 MANUAL_DE_EXECUCAO.md  # Guide for evaluators to run the project
 ┣ 📜 MANUAL_PRATICO.md      # End-User Guide (University Extension)
 ┗ 📜 MANUAL_TECNICO.md      # Architecture and Software Engineering Guide
```

### 👥 Development Team
Academic project developed by students from UNIP - São José dos Campos (Class of 2026 / Daytime):
- **Gabriel Alves Moreira** (H67HJI4)
- **Maciel Costa da Silva** (R280985)
- **Maycon Douglas Inácio Silva** (H719CD3)
- **Miguel Angel Fernandez Ortiz** (H7858F9)
- **Rafael Mesquita** (H6722I0)

---

## 🇪🇸 Versión en Español

### 📖 Sobre el Proyecto
**Nex_TI** es la implementación práctica de una plataforma web centrada en la evaluación y el apoyo al aprendizaje. El proyecto fue desarrollado para resolver la "curva del olvido" en capacitaciones académicas y corporativas.

Para lograr esto, la plataforma integra:
- **Estudio Activo y Repetición Espaciada:** Implementación algorítmica de SM-2 para calcular los intervalos óptimos de revisión (Motor Anki).
- **Gamificación:** Distribución de Puntos de Experiencia (XP) y Monedas Virtuales con niveles de progresión.
- **Accesibilidad Universal:** Enfoque total en semántica W3C, modo de alto contraste nativo y controles de zoom.
- **Mapa Neural (Obsidian View):** Visualización interactiva del progreso académico con física de resortes (physics springs), drag-and-drop y persistencia de estado.

Este repositorio alberga el sistema Fullstack completo (PIM IV), centrado en una arquitectura limpia (Separation of Concerns), integrando Frontend, API RESTful y base de datos relacional.

### 🚀 Tecnologías y Arquitectura

El proyecto fue construido siguiendo las mejores prácticas del mercado:

* **Frontend:** Desarrollado en HTML5 semántico, adaptable mediante CSS Puro (Design System Global) y lógicas aisladas en Vanilla JS, consumiendo la API mediante `fetch`.
* **Backend:** API RESTful desarrollada en `C# (.NET 10)` utilizando **Minimal APIs** y **Entity Framework Core**, con políticas de CORS y mitigación de vulnerabilidades (OWASP).
* **Base de Datos:** SGBD `SQL Server` estructurado (`NexTI_DB.sql`) garantizando restricciones de gamificación en el nivel de base de datos.

### 📂 Estructura del Repositorio

```text
📦 PIM_IV-Parte_Pratica
 ┣ 📂 .planning/      # Inteligencia del proyecto, hoja de ruta y arquitectura
 ┣ 📂 assets/         # Recursos globales y Design System
 ┃ ┣ 📂 css/          # global.css, splash.css
 ┃ ┗ 📂 js/           # api.js, auth.js, splash.js
 ┣ 📂 backend/        # API C# .NET 10 (Controllers, Models, DbContext)
 ┣ 📂 database/       # Script SQL de la base de datos (NexTI_DB.sql)
 ┣ 📂 pages/          # Páginas y módulos del Frontend
 ┃ ┣ 📂 dashboard/    # Interfaz principal, Motor SM-2 y Mapa Neural
 ┃ ┣ 📂 login/        # Autenticación del usuario
 ┃ ┗ 📂 sobre/        # Página informativa de la plataforma
 ┣ 📜 index.html      # Punto de entrada / Splash Screen
 ┣ 📜 MANUAL_DE_EXECUCAO.md  # Guia para que los evaluadores ejecuten el proyecto
 ┣ 📜 MANUAL_PRATICO.md      # Guía del Usuario Final (Extensión Universitaria)
 ┗ 📜 MANUAL_TECNICO.md      # Guía de Arquitectura e Ingeniería de Software
```

### 👥 Equipo de Desarrollo
Proyecto académico desarrollado por los estudiantes de la UNIP - São José dos Campos (Clase de 2026 / Diurno):
- **Gabriel Alves Moreira** (H67HJI4)
- **Maciel Costa da Silva** (R280985)
- **Maycon Douglas Inácio Silva** (H719CD3)
- **Miguel Angel Fernandez Ortiz** (H7858F9)
- **Rafael Mesquita** (H6722I0)
