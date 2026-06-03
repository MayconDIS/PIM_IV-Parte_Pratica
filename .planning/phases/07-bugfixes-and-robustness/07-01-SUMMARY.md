# Summary: Correções e Robustez

**Phase:** 07-bugfixes-and-robustness
**Plan:** 01
**Status:** Completed
**Date:** 2026-06-03

---

## Accomplishments

1. **População de Simulados (SQL Seed)**:
   - Adicionada a massa de dados estruturada de simulados acadêmicos (tabelas `tb_areas_conhecimento`, `tb_provas`, `tb_questoes`, `tb_alternativas` e `tb_prova_questao`) no [NexTI_DB.sql](file:///c:/Users/mayco/Documents/GitHub/PIM_IV-Parte_Pratica/database/NexTI_DB.sql).
   - Recriação e povoamento da base de dados local (`NexTI_DB`) no SQL Server LocalDB, elevando a contagem de flashcards para 116 e integrando as questões.

2. **Segurança de Endpoints (TryParse)**:
   - Implementada a conversão defensiva de identificadores de claims JWT usando `int.TryParse` em [EndpointExtensions.cs](file:///c:/Users/mayco/Documents/GitHub/PIM_IV-Parte_Pratica/backend/Endpoints/EndpointExtensions.cs), evitando a quebra de execução HTTP 500 no console do servidor.

3. **Fallback Resiliente de Interface**:
   - Inserido fallback de dados locais em [app.js](file:///c:/Users/mayco/Documents/GitHub/PIM_IV-Parte_Pratica/pages/dashboard/js/app.js) para assegurar que se a API de flashcards responder com sucesso mas vazia, o dashboard carregue a teia de flashcards offline local, em vez de assumir que o progresso está concluído incorretamente.

4. **Configuração Segura de JWT (Best Practices)**:
   - A chave de assinatura do token JWT foi extraída do código-fonte e realocada para os arquivos de configuração do ecossistema (`appsettings.json` e `appsettings.Development.json`), sendo lida de forma dinâmica via `builder.Configuration` em [Program.cs](file:///c:/Users/mayco/Documents/GitHub/PIM_IV-Parte_Pratica/backend/Program.cs).

5. **Prevenção de Fraudes de Gamificação (Anti-Cheat)**:
   - Adicionada validação de lógica de negócio em [EndpointExtensions.cs](file:///c:/Users/mayco/Documents/GitHub/PIM_IV-Parte_Pratica/backend/Endpoints/EndpointExtensions.cs) na atualização de estatísticas de XP, moedas e nível, rejeitando regressões de status e estabelecendo tetos plausíveis de incremento por ciclo (limite de 150 por chamada) para inviabilizar cheats manuais via injeção de pacotes.

---

## Verification Results

### Compilação do Projeto

- Compilação local executada com sucesso e zero erros.

### Integração e Consumo

- Chamadas HTTP de teste para os endpoints de simulado retornam perfeitamente a lista de áreas e questões do ENADE:

  - `/api/simulados/areas` $\rightarrow$ Retorna as 5 áreas associadas do ENADE.
  - `/api/simulados/questoes` $\rightarrow$ Retorna as 6 questões completas com as alternativas mapeadas e gabaritadas.

