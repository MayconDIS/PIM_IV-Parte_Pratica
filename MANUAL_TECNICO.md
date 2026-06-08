# ⚙️ Manual Técnico e Arquitetural - Nex_TI

Este documento destina-se a desenvolvedores, mantenedores e professores da coordenação técnica. O Nex_TI foi concebido utilizando o padrão **Separation of Concerns (Separação de Preocupações)**, pronto para ser escalado como uma **Extensão Universitária** open-source.

---

## 🏗️ 1. Arquitetura do Sistema
A arquitetura segue o modelo de 3 Camadas (3-Tier):
- **Front-end:** SPA Vanilla (HTML5, CSS3, JavaScript ES6+).
- **Back-end:** API RESTful (C# 10, ASP.NET Core Web API Minimal APIs).
- **Database:** Microsoft SQL Server Relacional.

### 1.1 Diretórios Principais
- `/assets/`: Contém o **Design System Global** (CSS) e o serviço isolado de consumo de APIs (`api.js`).
- `/pages/`: Componentes visuais fragmentados (Login, Dashboard), semânticos e acessíveis.
- `/backend/`: Contém os Models, o `AppDbContext` do Entity Framework e a API C#.
- `/database/`: Guarda os scripts DDL (T-SQL) para replicação rápida em novos ambientes.

---

## 🔌 2. Integração via API (O Backend C#)
A aplicação .NET responde na porta HTTPS `5001` (com fallback HTTP `5000`). A comunicação com o frontend é feita por meio de chamadas assíncronas `fetch` com requisições e respostas em formato `JSON`.

**Endpoints Principais:**
* `GET /api/status` - Health check.
* `POST /api/auth/login` e `POST /api/auth/register` - Autenticação JWT.
* `GET /api/usuarios/{username}` - Recupera o perfil do estudante (XP, Moedas, Nível).
* `PUT /api/usuarios/stats` - Atualiza estatísticas de gamificação do usuário (XP, Moedas, Nível - Protegido por JWT).
* `GET /api/fases` - Retorna a lista de disciplinas/fases cadastradas.
* `GET /api/fases/{codigo}/flashcards` - Retorna as cartas interligadas a uma fase específica.
* `POST /api/progresso/atualizar` - Atualiza o progresso do flashcard no SM-2 (Protegido por JWT).
* `GET /api/simulados/areas` e `GET /api/simulados/questoes` - Retorna dados estruturados do ENADE.

O **Entity Framework Core** foi empregado como ORM, eliminando a necessidade de redigir instruções ADO.NET brutas, estruturando relacionamentos complexos e garantindo integridade transacional.

---

## ♿ 3. Padrões Web e Acessibilidade (Front-end)
Visando aprovação como projeto de extensão inclusivo, o Front-end cumpre especificações rigorosas:
- **WAI-ARIA:** Tags (`aria-label`, `aria-labelledby`, `role="main"`) mapeadas para leitores de tela em 100% da interface do Dashboard.
- **HTML5 Semântico:** Substituição de `<div>` randômicas por `<nav>`, `<section>`, `<article>` e `<main>`.
- **CSS Compartilhado:** Um único `global.css` garante que botões e fundos usem o mesmo Token de cor (ex: `--nexti-cyan`).

---

## 🧠 4. O Algoritmo SM-2 (Integração Real C#)
A inteligência do projeto reside no serviço [ISm2Engine](file:///C:/Users/mayco/Documents/GitHub/PIM_IV-Parte_Pratica/backend/Services/ISm2Engine.cs) e na persistência da tabela `Progresso_Flashcards`.
A plataforma monitora:
- **IntervaloDias (Float):** Dias de espera antes da próxima revisão.
- **FatorFacilidade (Float >= 1.3):** Multiplicador de facilidade do flashcard para o aluno.
- **Repetições (Int):** Histórico de acertos consecutivos.

A aplicação real no frontend dispara chamadas assíncronas em tempo real ao endpoint `POST /api/progresso/atualizar` repassando o nível de resposta de 0 a 5 dado pelo usuário. O backend processa o algoritmo SM-2 via inversão de dependência (DIP) e agenda a data de revisão futura.

---

## 📐 5. Consistência e Transição UML para Código de Produção
Para fins de rastreabilidade técnica e avaliação acadêmica, a relação entre a especificação teórica (Diagramas UML do repositório [PIM_IV-Documentacao_UML](file:///C:/Users/mayco/Documents/GitHub/PIM_IV-Documentacao_UML)) e a implementação em produção deste repositório foi projetada seguindo regras claras de transição:

1. **Abstração Conceitual vs Persistência Relacional (EF Core):**
   * No modelo de classes abstrato UML, entidades como `Flashcards`, `Modulos` e `Fases` representam a lógica conceitual de domínio. No código de produção C# (`backend/Models/`), elas são mapeadas como entidades de banco relacionais singulares (`Flashcard`, `Fase`) com anotações de persistência e validação do Entity Framework (`[Key]`, `[Required]`, `[ForeignKey]`).
2. **Materialização da Regra SM-2:**
   * A regra de associação conceitual do algoritmo de repetição espaçada SM-2 entre as classes `Aluno` e `Flashcards` é materializada no código real pela entidade de junção relacional [ProgressoFlashcard.cs](file:///C:/Users/mayco/Documents/GitHub/PIM_IV-Parte_Pratica/backend/Models/ProgressoFlashcard.cs). Ela é responsável por registrar de forma independente o histórico de revisões de cada estudante (`Repeticoes`, `IntervaloDias`, `FatorFacilidade`, `DataProximaRevisao`).
3. **Consolidação de Atributos de Gamificação:**
   * A classe `Aluno` herda de `Usuario`. Para simplificar a autenticação de sessão e otimizar as consultas SQL no Entity Framework, os atributos de gamificação (`XP`, `Moedas`, `Nivel`) foram consolidados diretamente na classe base `Usuario`.
4. **Classes de Apoio Lógico:**
   * Lógicas representadas por classes auxiliares conceituais no diagrama UML (como `Gamificacao` e `Motor_SM2`) foram convertidas em lógicas de serviço em JavaScript no Front-end (`auth.js`, `api.js`) e mapeamentos no backend para otimizar a experiência SPA e tempo de resposta da API.

---

## 📐 6. Consolidação e Entrega de Escopo (4º Semestre - PIM IV)
Para a entrega final do **PIM IV**, todas as pendências e emulações locais de dados foram resolvidas:

1. **Integração do Simulado ENADE**: O módulo de simulado com questões de múltiplas alternativas foi completamente integrado. As questões são obtidas da API do backend (`GET /api/simulados/questoes`) a partir de tabelas dedicadas (`tb_questoes`, `tb_alternativas`) e consumidas no frontend.
2. **Loja de Customização e Saldo Real**: O saldo HUD de Moedas Tech e XP do usuário agora é atualizado e persistido de verdade através da API (`PUT /api/usuarios/stats`), refletindo no banco de dados a progressão real do perfil de forma persistente.
3. **Desbloqueio de Módulos Bônus**: Módulos bônus restritos agora exigem moedas reais acumuladas pelo estudante, debitando o valor no banco de dados e persistindo o acesso em `bonus_unlocked`.
4. **Remoção de Bypasses de Login**: O sistema de autenticação local foi inteiramente limpo, deixando a autenticação do frontend dependente estritamente do backend JWT (.NET 10) e banco de dados Microsoft SQL Server.
