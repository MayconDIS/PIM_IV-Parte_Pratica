# Plano de Implementação - Correção de Falhas e Robustez do Sistema Nex_TI

Este plano detalha as correções de falhas de segurança/validação no backend, melhoria de robustez de fallback no frontend e a inclusão de dados de seed para simulados acadêmicos (ENADE) no banco de dados SQL Server.

## User Review Required

> [!IMPORTANT]
> A recriação do banco de dados para aplicar os seeds de simulados limpará os usuários criados localmente durante o teste de desenvolvimento. O usuário precisará criar uma nova conta de testes após a execução.

---

## Proposed Changes

### 1. Database Seed (Simulados e Provas)

Adicionaremos a massa de dados (Seed) para o módulo de simulados e provas no script [NexTI_DB.sql](file:///c:/Users/mayco/Documents/GitHub/PIM_IV-Parte_Pratica/database/NexTI_DB.sql). Isso fará com que as tabelas `tb_areas_conhecimento`, `tb_provas`, `tb_questoes`, `tb_alternativas` e `tb_prova_questao` fiquem povoadas com dados reais baseados nas questões do ENADE.

#### [MODIFY] [NexTI_DB.sql](file:///c:/Users/mayco/Documents/GitHub/PIM_IV-Parte_Pratica/database/NexTI_DB.sql)
Adicionar os seguintes comandos SQL no final do arquivo:
```sql
-- =======================================================
-- 5. POPULANDO AS TABELAS DE SIMULADOS E PROVAS (SEED)
-- =======================================================

-- Áreas de Conhecimento
INSERT INTO tb_areas_conhecimento (nome_area) VALUES 
('Engenharia de Software'),
('Cibersegurança e LGPD'),
('UX/UI Design'),
('Algoritmos e Estruturas de Dados'),
('Redes de Computadores');
GO

-- Prova
INSERT INTO tb_provas (ano, tipo) VALUES (2021, 'ENADE');
GO

-- Questões (Mapeadas para as respectivas áreas)
INSERT INTO tb_questoes (id_area, enunciado, origem) VALUES 
(1, N'Uma empresa adotou metodologias ágeis. Durante uma iteração, a equipe percebeu que um dos requisitos estava mal detalhado, gerando atraso. Qual cerimônia do Scrum é o momento IDEAL para a equipe inspecionar esse problema de processo e sugerir melhorias para o próximo ciclo?', 'ENADE 2021'),
(2, N'Uma clínica médica recolhe dados biométricos e histórico de doenças de seus pacientes. Segundo a Lei Geral de Proteção de Dados (LGPD), estes dados são classificados como:', 'ENADE 2021'),
(3, N'Uma equipe está refatorando a interface de um sistema. O sistema atual possui textos com baixo contraste e depende apenas da cor vermelha para indicar erros. Qual das ações abaixo NÃO corresponde a uma boa prática de Acessibilidade (WCAG)?', 'ENADE 2021'),
(4, N'Considere a estrutura de dados ''Fila'' (Queue) sendo usada para gerenciar requisições de impressão em um escritório. Foram inseridos, nesta ordem, os arquivos: A, B e C. Se o comando ''pop()'' ou ''dequeue()'' for executado duas vezes, qual arquivo restará na fila?', 'ENADE 2021'),
(1, N'O padrão de arquitetura MVC divide o sistema em três camadas. Um desenvolvedor inseriu uma regra de negócio complexa de cálculo de juros bancários diretamente no botão da tela HTML (View). Esta prática fere o padrão MVC pois as regras de negócio deveriam estar no:', 'ENADE 2021'),
(5, N'Para garantir a segurança de uma aplicação web, foi solicitado que todo o tráfego fosse criptografado usando SSL/TLS. Qual protocolo e qual porta padrão devem ser habilitados no firewall para essa configuração?', 'ENADE 2021');
GO

-- Alternativas
INSERT INTO tb_alternativas (id_questao, texto, is_correta) VALUES 
(1, 'A) Sprint Planning', 0), (1, 'B) Daily Scrum', 0), (1, 'C) Sprint Review', 0), (1, 'D) Sprint Retrospective', 1),
(2, 'A) Dados Públicos', 0), (2, 'B) Dados Sensíveis', 1), (2, 'C) Dados Anonimizados', 0), (2, 'D) Dados Temporários', 0),
(3, 'A) Adicionar atributos ''alt'' em imagens.', 0), (3, 'B) Depender exclusivamente da cor para mensagens de erro.', 1), (3, 'C) Garantir navegação completa via teclado (Tab).', 0), (3, 'D) Manter alto contraste entre fundo e texto.', 0),
(4, 'A) Arquivo A', 0), (4, 'B) Arquivo B', 0), (4, 'C) Arquivo C', 1), (4, 'D) A fila ficará vazia', 0),
(5, 'A) Controller', 0), (5, 'B) Model', 1), (5, 'C) View', 0), (5, 'D) Banco de Dados', 0),
(6, 'A) HTTP - Porta 80', 0), (6, 'B) FTP - Porta 21', 0), (6, 'C) HTTPS - Porta 443', 1), (6, 'D) SSH - Porta 22', 0);
GO

-- Associação das Questões à Prova 1
INSERT INTO tb_prova_questao (id_prova, id_questao) VALUES 
(1, 1), (1, 2), (1, 3), (1, 4), (1, 5), (1, 6);
GO
```

---

### 2. Backend (Validações Defensivas de Token)

Ajustaremos o parser de identificadores no [EndpointExtensions.cs](file:///c:/Users/mayco/Documents/GitHub/PIM_IV-Parte_Pratica/backend/Endpoints/EndpointExtensions.cs) para usar `int.TryParse` de forma defensiva, evitando que o backend lance exceções HTTP 500 no caso de tokens JWT malformados ou incorretamente interpretados.

#### [MODIFY] [EndpointExtensions.cs](file:///c:/Users/mayco/Documents/GitHub/PIM_IV-Parte_Pratica/backend/Endpoints/EndpointExtensions.cs)
Substituir a linha 105:
```csharp
int currentUserId = int.Parse(userIdClaim);
```
por:
```csharp
if (!int.TryParse(userIdClaim, out int currentUserId)) 
    return Results.BadRequest(new { message = "Identificador de usuário inválido no token." });
```
E na linha 134:
```csharp
int currentUserId = int.Parse(userIdClaim);
```
por:
```csharp
if (!int.TryParse(userIdClaim, out int currentUserId)) 
    return Results.BadRequest(new { message = "Identificador de usuário inválido no token." });
```

---

### 3. Frontend (Melhoria do Fallback Local)

Corrigiremos a inicialização das aulas no [app.js](file:///c:/Users/mayco/Documents/GitHub/PIM_IV-Parte_Pratica/pages/dashboard/js/app.js) para que o sistema utilize os dados locais do deck (`meusDecks`) como fallback caso o backend retorne uma lista vazia ou dê algum erro específico na requisição, garantindo robustez de funcionamento (offline-first).

#### [MODIFY] [app.js](file:///c:/Users/mayco/Documents/GitHub/PIM_IV-Parte_Pratica/pages/dashboard/js/app.js)
Ajustar o carregamento da API (linhas 336-354):
```javascript
    if (apiOnline) {
        try {
            const responseCards = await ApiService.getFlashcardsPorFase(faseId);
            if (responseCards && responseCards.length > 0) {
                cartasDaFase = responseCards.map(c => {
                    let cardObj = {
                        id: c.id,
                        frente: c.frente,
                        verso: c.verso,
                        dica: c.dica
                    };
                    if (c.opcoes) {
                        cardObj.opcoes = c.opcoes.split(';');
                        cardObj.correta = c.correta;
                    }
                    return cardObj;
                });
            } else {
                // Caso a API responda com sucesso mas sem cartas (lista vazia)
                cartasDaFase = [...(meusDecks[faseId] || [])];
            }
        } catch (e) {
            console.error("Erro ao buscar flashcards da API, usando local:", e);
            cartasDaFase = [...(meusDecks[faseId] || [])];
        }
    } else {
        cartasDaFase = [...(meusDecks[faseId] || [])];
    }
```

---

## Verification Plan

### Automated Tests
1. **Verificação de Seed**: Rodar o script SQL de recriação do banco e validar a quantidade de questões cadastradas na tabela de simulados (`tb_questoes`).
2. **Teste dos Endpoints**: Acessar os endpoints `/api/simulados/areas` e `/api/simulados/questoes` usando chamadas API (`Invoke-RestMethod` no Powershell) para atestar que os dados populados são retornados com sucesso.
3. **Teste do Dashboard**: Logar com um novo usuário no frontend e validar que o simulado ENADE ou as fases de estudo carregam sem erro.
