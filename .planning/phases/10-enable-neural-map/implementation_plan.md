# Habilitar o Mapa Neural (Obsidian View)

Este plano descreve as alterações necessárias para habilitar a funcionalidade completa do Mapa Neural (Obsidian View) no dashboard do Nex_TI, removendo a mensagem provisória de bloqueio ("Esta funcionalidade está em desenvolvimento...") e permitindo a renderização dinâmica e interativa da teia neural com física de molas.

## Informações Importantes / User Review Required

> [!NOTE]
> Toda a infraestrutura e a lógica matemática da física de molas, pan/zoom e persistência de nós no localStorage já estão implementadas no arquivo [neural-map.js](file:///c:/Users/mayco/Documents/GitHub/PIM_IV-Parte_Pratica/pages/dashboard/js/neural-map.js). A alteração principal é puramente a remoção do alerta bloqueante.

## Alterações Propostas

### 1. Documentação de Fase e Roadmap

#### [MODIFY] [ROADMAP.md](file:///c:/Users/mayco/Documents/GitHub/PIM_IV-Parte_Pratica/.planning/ROADMAP.md)
* Adicionar a **Fase 10: Integração do Mapa Neural (Obsidian View)** nas seções de idioma Inglês e Português do Roadmap do projeto, marcando-a como concluída.

#### [NEW] [implementation_plan.md](file:///c:/Users/mayco/Documents/GitHub/PIM_IV-Parte_Pratica/.planning/phases/10-enable-neural-map/implementation_plan.md)
* Criar o plano de implementação específico da nova fase dentro da pasta de planejamento `.planning/phases/10-enable-neural-map/`.

#### [NEW] [task.md](file:///c:/Users/mayco/Documents/GitHub/PIM_IV-Parte_Pratica/.planning/phases/10-enable-neural-map/task.md)
* Criar a lista de tarefas da fase 10.

#### [NEW] [walkthrough.md](file:///c:/Users/mayco/Documents/GitHub/PIM_IV-Parte_Pratica/.planning/phases/10-enable-neural-map/walkthrough.md)
* Criar o relatório de conclusão da fase 10.

---

### 2. Frontend do Dashboard

#### [MODIFY] [neural-map.js](file:///c:/Users/mayco/Documents/GitHub/PIM_IV-Parte_Pratica/pages/dashboard/js/neural-map.js)
* Remover o `alert(...)` e o `return;` temporários no início da função `abrirMapaMental()` (linhas 21-24) para que o modal `modalMapaMental` possa ser aberto e os elementos SVG/Canvas renderizados de forma dinâmica.

#### [MODIFY] [index.html](file:///c:/Users/mayco/Documents/GitHub/PIM_IV-Parte_Pratica/pages/dashboard/index.html)
* Atualizar a importação do script de `neural-map.js` adicionando cache-busting (`js/neural-map.js?v=2`) para garantir que navegadores não usem uma versão em cache com o bloqueio ativo.

---

## Plano de Verificação

### Verificação Manual
1. Iniciar o servidor local (ou usar o servidor ativo se disponível).
2. Acessar o dashboard do usuário.
3. Clicar no botão "Mapa Neural" no dropdown menu.
4. Validar se o modal se abre exibindo o cérebro central e os nós conectados com comportamento de física de molas (pan, zoom e arrastamento).
5. Certificar-se de que não ocorrem erros no console de desenvolvimento do navegador.
