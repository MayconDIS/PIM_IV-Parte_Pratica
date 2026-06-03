---
mapped_date: "2026-05-02"
---
*Read in: [English](#english-version) | [Português](#versao-em-portugues)*

---
## English Version

# Structure

### Directory Layout
- `.planning/`: Project intelligence, workflow documentation, and architecture mapping.
- `assets/`: Global resources and Design System.
  - `css/`: `global.css` (Design System), `splash.css`.
  - `img/`: Project images, vectors, and logos (`Logo UNIP.png`).
  - `js/`: Shared core logic (`auth.js`, `data.js`, `splash.js`, `api.js`).
- `backend/`: C# .NET 10 RESTful API containing Entity Framework DbContext, Models, and Minimal API routes.
- `database/`: SQL Server initialization scripts (`NexTI_DB.sql`).
- `pages/`: 
  - `dashboard/`: Main application interface, SM-2 engine scripts (`js/app.js`), Neural Map visualization (`js/neural-map.js`), and scoped styles (`style.css`).
  - `login/`: Authentication interface (`login.html`, `login.css`).
  - `sobre/`: Informational page about the platform (`index.html`).
- `index.html`: Entry point / Splash Screen.

---
## Versão em Português

# Estrutura

### Layout do Diretório
- `.planning/`: Inteligência do projeto, documentação de fluxo e mapeamento arquitetural.
- `assets/`: Recursos globais e Design System.
  - `css/`: `global.css` (Design System), `splash.css`.
  - `img/`: Imagens do projeto, vetores e logos (`Logo UNIP.png`).
  - `js/`: Lógica principal compartilhada (`auth.js`, `data.js`, `splash.js`, `api.js`).
- `backend/`: API RESTful em C# .NET 10 contendo DbContext do Entity Framework, Models e rotas Minimal API.
- `database/`: Scripts de inicialização do SQL Server (`NexTI_DB.sql`).
- `pages/`: 
  - `dashboard/`: Interface principal da aplicação, scripts do motor SM-2 (`js/app.js`), visualização do Mapa Neural (`js/neural-map.js`) e estilos com escopo (`style.css`).
  - `login/`: Interface de autenticação (`login.html`, `login.css`).
  - `sobre/`: Página informativa sobre a plataforma (`index.html`).
- `index.html`: Ponto de entrada / Tela de Carregamento (Splash Screen).
