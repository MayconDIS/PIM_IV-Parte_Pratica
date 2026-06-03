# Walkthrough — Testes de Módulo (Estilo ENADE)

Implementamos a funcionalidade de Testes de Módulo que desafia o aluno com 20 questões de múltipla escolha baseadas em flashcards aleatórios do módulo correspondente, gerados de forma inteiramente dinâmica no frontend.

---

## O que Mudou?

### 1. Novo Item de Menu no HTML e Estilos Customizados
Adicionamos os botões para acessar as avaliações no menu lateral em [index.html](file:///c:/Users/mayco/Documents/GitHub/PIM_IV-Parte_Pratica/pages/dashboard/index.html) logo antes de cada fase bônus, e as classes utilitárias no [style.css](file:///c:/Users/mayco/Documents/GitHub/PIM_IV-Parte_Pratica/pages/dashboard/style.css):
* `.teste-xp-badge`: estiliza a badge de XP dos testes com bordas e cor cianas.
* `.aula-title-cyan`: pinta o título do teste de ciano para destacar a importância dele no dashboard.

### 2. Geração Dinâmica de Múltipla Escolha no JavaScript
No arquivo [app.js](file:///c:/Users/mayco/Documents/GitHub/PIM_IV-Parte_Pratica/pages/dashboard/js/app.js):
* **Lógica de Módulo (`carregarAula`):** Ao clicar em um teste (ex: `teste-mod1`), o script identifica o módulo correspondente e une todos os flashcards das fases regulares dele. Sorteia 20 deles de forma aleatória.
* **Geração Dinâmica de Distratores:** Para cada uma das 20 questões, o script recolhe respostas incorretas de outros flashcards do mesmo módulo (distratores), remove duplicatas, escolhe 3 delas, une com a resposta correta, embaralha o array de 4 itens, mapeia para as letras `A), B), C), D)` e define o índice correto.
* **Bypass de Filtro SRS:** A repetição espaçada é pulada especificamente nos testes de módulo para garantir que as 20 questões aleatórias sejam exibidas integralmente, mesmo que os flashcards individuais já tenham sido revisados no dia.
* **Bypass do Histórico SM-2:** Respostas de testes não afetam os parâmetros do algoritmo SM-2 individual das cartas para preservar o fluxo natural de repetições e não bagunçar a agenda de estudos do aluno.
* **Unlock Progressivo e Recompensas:** O fluxo de progressão `ordemFases` foi intercalado com os testes de módulo.
* **Regra dos 70% de Aproveitamento:** O aluno deve acertar pelo menos 70% das questões do teste (14 de 20). 
  - Se passar: Ganha **exclusivamente +25 XP** (0 de Coins) e o próximo módulo é desbloqueado.
  - Se reprovar: O fluxo é bloqueado, o aluno não ganha nenhuma recompensa (XP/Coins) e o teste de módulo recarrega para que ele tente novamente.

---

## Verificação Manual Realizada

1. **Validação do Menu:** Confirmamos que os novos blocos de teste aparecem no menu de navegação e estão integrados à estilização global (sem estilos inline).
2. **Geração das Questões:** Verificamos que o teste de módulo renderiza as 20 questões em formato de múltipla escolha (A, B, C, D) e os distratores têm correlação com o conteúdo ensinado naquele módulo.
3. **Fluxo de Conclusão com Aproveitamento:** O sistema avalia a porcentagem final. Se o usuário atingir >= 70%, o card é marcado como aprovado e concede a recompensa. Caso contrário, exibe repetição e bloqueia a progressão do nível.
