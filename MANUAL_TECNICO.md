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
A aplicação .NET atua na porta HTTP padrão `5001`. A comunicação com a interface ocorre puramente via protocolo `HTTP (GET, POST)` retornando formato `JSON`.

**Endpoints Públicos:**
* `GET /api/status` - Health check.
* `GET /api/usuarios/{username}` - Autentica/recupera estado do player (Moedas, Nível, XP).
* `GET /api/fases` - Retorna mapeamento de módulos do banco.
* `GET /api/fases/{codigo}/flashcards` - Recupera as cartas interligadas pelo ForeignKey.

O **Entity Framework Core** foi empregado em abordagem *Code-First/Database-First* hibrida, eliminando a necessidade de redigir DataReaders (SQLClient) de forma bruta.

---

## ♿ 3. Padrões Web e Acessibilidade (Front-end)
Visando aprovação como projeto de extensão inclusivo, o Front-end cumpre especificações rigorosas:
- **WAI-ARIA:** Tags (`aria-label`, `aria-labelledby`, `role="main"`) mapeadas para leitores de tela em 100% da interface do Dashboard.
- **HTML5 Semântico:** Substituição de `<div>` randômicas por `<nav>`, `<section>`, `<article>` e `<main>`.
- **CSS Compartilhado:** Um único `global.css` garante que botões e fundos usem o mesmo Token de cor (ex: `--alura-cyan`).

---

## 🧠 4. O Algoritmo SM-2 (Banco de Dados)
A inteligência do projeto reside na tabela `Progresso_Flashcards`. 
Para adicionar suporte real ao Algoritmo de SuperMemo, o SQL e o C# monitoram:
- **IntervaloDias (Float):** Quanto tempo a carta deve sumir.
- **FatorFacilidade (Float >= 1.3):** Quão difícil a carta está para o aluno específico.
- **Repetições (Int):** Histórico de constância.

Para estender a aplicação no futuro, basta alterar a lógica nos *Controllers C#* para que os fatores sejam atualizados mediante um request `POST` quando o aluno clicar no botão de "Fácil" ou "Difícil" na tela.

---

## 📐 5. Consistência e Transição UML para Código de Produção
Para fins de rastreabilidade técnica e avaliação acadêmica, a relação entre a especificação teórica (Diagramas UML do repositório [PIM_III-Documentacao_UML](file:///C:/Users/mayco/Documents/GitHub/PIM_III-Documentacao_UML)) e a implementação em produção deste repositório foi projetada seguindo regras claras de transição:

1. **Abstração Conceitual vs Persistência Relacional (EF Core):**
   * No modelo de classes abstrato UML, entidades como `Flashcards`, `Modulos` e `Fases` representam a lógica conceitual de domínio. No código de produção C# (`backend/Models/`), elas são mapeadas como entidades de banco relacionais singulares (`Flashcard`, `Fase`) com anotações de persistência e validação do Entity Framework (`[Key]`, `[Required]`, `[ForeignKey]`).
2. **Materialização da Regra SM-2:**
   * A regra de associação conceitual do algoritmo de repetição espaçada SM-2 entre as classes `Aluno` e `Flashcards` é materializada no código real pela entidade de junção relacional [ProgressoFlashcard.cs](file:///C:/Users/mayco/Documents/GitHub/PIM_III-Parte_Pratica/backend/Models/ProgressoFlashcard.cs). Ela é responsável por registrar de forma independente o histórico de revisões de cada estudante (`Repeticoes`, `IntervaloDias`, `FatorFacilidade`, `DataProximaRevisao`).
3. **Consolidação de Atributos de Gamificação:**
   * A classe [Aluno.cs](file:///C:/Users/mayco/Documents/GitHub/PIM_III-Parte_Pratica/backend/Models/Aluno.cs) herda de [Usuario.cs](file:///C:/Users/mayco/Documents/GitHub/PIM_III-Parte_Pratica/backend/Models/Usuario.cs). Para simplificar a autenticação de sessão e otimizar as consultas SQL no Entity Framework, os atributos de gamificação (`XP`, `Moedas`, `Nivel`) foram consolidados diretamente na classe base `Usuario`.
4. **Classes de Apoio Lógico:**
   * Lógicas representadas por classes auxiliares conceituais no diagrama UML (como `Gamificacao` e `Motor_SM2`) foram convertidas em lógicas de serviço em JavaScript no Front-end (`auth.js`, `api.js`) e mapeamentos no backend para otimizar a experiência SPA e tempo de resposta da API.

---

## 📐 6. Delimitação de Escopo (3º Semestre vs 4º Semestre)
Para a avaliação do PIM III no **3º Semestre**, detalhamos as seguintes diretrizes de escopo aplicadas no código:

1. **Estrutura de Banco de Dados de Simulados (4º Semestre)**: As tabelas relacionadas ao módulo de simulado ENADE (`tb_areas_conhecimento`, `tb_provas`, `tb_questoes`, `tb_alternativas`, `tb_prova_questao`) foram inseridas no script do banco (`NexTI_DB.sql`) para adiantar o próximo semestre e garantir a integridade com a modelagem UML conceitual. A lógica do quiz e as telas de execução correspondentes no front-end estão **em desenvolvimento**, sendo escopo planejado para o 4º Semestre.
2. **Loja de Customização**: O saldo do HUD exibe as moedas acumuladas do usuário, mas a loja de compras de novas trilhas foi omitida no front-end, pois sua lógica de transação completa será finalizada no próximo semestre.
3. **Escopo Entregue (3º Semestre)**: A parte prática funcional foca na gestão de autenticação (Login e Cadastro), acessibilidade (WAI-ARIA e modo de contraste), no motor do algoritmo de repetição espaçada SM-2 (flashcards) e na visualização interativa do progresso acadêmico via Mapa Neural.



