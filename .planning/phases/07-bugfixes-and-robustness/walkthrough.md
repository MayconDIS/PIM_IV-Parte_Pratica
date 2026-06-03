# Walkthrough - Fase 7 (Correções de Falhas e Robustez)

Concluímos a Fase 7 de correções no ecossistema **Nex_TI**. Abaixo está o resumo das alterações efetuadas, testes executados e os resultados obtidos.

---

## 🛠️ Alterações Realizadas

### 1. Banco de Dados

- **Seed de Simulados e Provas:** Modificamos o script [NexTI_DB.sql](file:///c:/Users/mayco/Documents/GitHub/PIM_IV-Parte_Pratica/database/NexTI_DB.sql) para injetar uma massa de dados estruturada de simulados acadêmicos (questões, alternativas, áreas de conhecimento e provas) baseadas nas provas reais do ENADE de tecnologia.
- **Recriação do Banco:** O banco de dados foi recriado localmente (`NexTI_DB`). A contagem subiu para **116 flashcards** cadastrados nas tabelas principais e as tabelas de simulado (`tb_questoes` etc.) foram preenchidas.

### 2. Backend C# (.NET 10)

- **Validação de Token Defensiva:** Em [EndpointExtensions.cs](file:///c:/Users/mayco/Documents/GitHub/PIM_IV-Parte_Pratica/backend/Endpoints/EndpointExtensions.cs), alteramos as conversões de Claims do Token (`int.Parse` $\rightarrow$ `int.TryParse`) para garantir que o backend trate identificadores inesperados ou tokens corrompidos gerando `BadRequest` em vez de exceções `500 Internal Server Error`.
- **Configuração Segura de JWT:** A chave secreta de assinatura do token JWT foi extraída do código-fonte e realocada nas definições de configuração do ecossistema (`appsettings.json` e `appsettings.Development.json`), sendo consumida dinamicamente via `builder.Configuration` em [Program.cs](file:///c:/Users/mayco/Documents/GitHub/PIM_IV-Parte_Pratica/backend/Program.cs).
- **Lógica Anti-Cheat de Gamificação:** Implementamos verificações de consistência lógica no endpoint `/api/usuarios/stats` em [EndpointExtensions.cs](file:///c:/Users/mayco/Documents/GitHub/PIM_IV-Parte_Pratica/backend/Endpoints/EndpointExtensions.cs). O sistema agora bloqueia decréscimo de XP ou nível e restringe o incremento máximo por chamada a 150, impedindo manipulações e trapaças de progresso por injeção direta de requisições de rede.

### 3. Frontend (HTML/JS)

- **Algoritmo de Fallback Local:** Em [app.js](file:///c:/Users/mayco/Documents/GitHub/PIM_IV-Parte_Pratica/pages/dashboard/js/app.js), implementamos um bloco `else` de contingência. Se a API de flashcards responder com sucesso, porém com uma lista vazia, o frontend automaticamente reverte para os dados estáticos locais (`meusDecks`), prevenindo telas de "revisão em dia" incorretas.

---

## 🧪 Validações Efetuadas

### 1. Testes de Endpoints (API)

Efetuamos requisições GET diretas nas rotas de simulados para checar as tabelas semeadas:

- `/api/simulados/areas` $\rightarrow$ Retornou com sucesso a listagem das 5 áreas (Engenharia de Software, Cibersegurança, etc.).
- `/api/simulados/questoes` $\rightarrow$ Retornou com sucesso as 6 questões reais do ENADE estruturadas com as alternativas corretas correspondentes.

### 2. Fluxo do Frontend

- O dashboard de estudos foi testado e as rotinas agora buscam os dados da API de forma consistente, tendo o deck local como fallback seguro em caso de indisponibilidade de dados da API.
