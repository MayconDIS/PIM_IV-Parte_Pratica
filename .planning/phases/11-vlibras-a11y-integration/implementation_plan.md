# Integração com VLibras Widget (Acessibilidade Nacional)

Este plano descreve a integração do widget oficial de acessibilidade em Libras (VLibras) nas páginas principais da plataforma educacional Nex_TI, visando atender aos critérios de inclusão e acessibilidade para pessoas com deficiência auditiva (conforme diretrizes do PIM IV da UNIP).

## Informações Importantes / User Review Required

> [!NOTE]
> O VLibras é o componente oficial do Governo Federal brasileiro para tradução de conteúdos digitais (português) em Língua Brasileira de Sinais (Libras). Ele é integrado via script externo oficial.

## Alterações Propostas

### 1. Documentação de Fase e Roadmap

#### [MODIFY] [ROADMAP.md](file:///c:/Users/mayco/Documents/GitHub/PIM_IV-Parte_Pratica/.planning/ROADMAP.md)
* Adicionar a **Fase 11: Integração com VLibras Widget (Acessibilidade Nacional)** nas seções de idioma Inglês e Português do Roadmap do projeto, marcando-a como concluída.

#### [NEW] [implementation_plan.md](file:///c:/Users/mayco/Documents/GitHub/PIM_IV-Parte_Pratica/.planning/phases/11-vlibras-a11y-integration/implementation_plan.md)
* Criar este plano de implementação no diretório `.planning/phases/11-vlibras-a11y-integration/`.

#### [NEW] [task.md](file:///c:/Users/mayco/Documents/GitHub/PIM_IV-Parte_Pratica/.planning/phases/11-vlibras-a11y-integration/task.md)
* Criar a checklist de tarefas associada.

#### [NEW] [walkthrough.md](file:///c:/Users/mayco/Documents/GitHub/PIM_IV-Parte_Pratica/.planning/phases/11-vlibras-a11y-integration/walkthrough.md)
* Criar o relatório de conclusão da Fase 11.

---

### 2. Integração no Frontend (HTML)

#### [MODIFY] [index.html (raiz)](file:///c:/Users/mayco/Documents/GitHub/PIM_IV-Parte_Pratica/index.html)
* Incluir o script e a estrutura HTML básica do VLibras Widget no final da tag `<body>`.

#### [MODIFY] [login.html](file:///c:/Users/mayco/Documents/GitHub/PIM_IV-Parte_Pratica/pages/login/login.html)
* Adicionar a mesma integração do widget oficial do VLibras.

#### [MODIFY] [index.html (dashboard)](file:///c:/Users/mayco/Documents/GitHub/PIM_IV-Parte_Pratica/pages/dashboard/index.html)
* Adicionar a mesma integração do widget oficial do VLibras, garantindo que não conflite visualmente com outros componentes flutuantes (como o botão de suporte/configuração).

#### [MODIFY] [index.html (sobre)](file:///c:/Users/mayco/Documents/GitHub/PIM_IV-Parte_Pratica/pages/sobre/index.html)
* Incluir o widget oficial do VLibras.

---

## Plano de Verificação

### Verificação Manual
1. Iniciar o servidor local.
2. Acessar cada uma das páginas (`/index.html`, `/pages/login/login.html`, `/pages/dashboard/index.html`, `/pages/sobre/index.html`).
3. Verificar a presença e o carregamento do avatar flutuante de acessibilidade em Libras no lado direito da tela.
4. Validar se o widget responde a cliques, abrindo a interface de tradução e funcionando corretamente em português.
