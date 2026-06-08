# Design System Nex_TI: Componentes de UI

Especificação visual e estrutural para os componentes interativos do projeto Nex_TI.

---

## 1. Flashcards (Estudo Ativo)
Os flashcards são os blocos principais de repetição espaçada (SM-2):
* **Bordas e Fundo**: Cantos arredondados (`border-radius: 12px`), fundo escuro semitransparente (`background: rgba(30, 30, 36, 0.7)` ou similar) e borda fina de `1px solid rgba(255, 255, 255, 0.05)`.
* **Efeito de Flip (3D Rotation)**: Efeito de rotação suave de 180 graus no eixo Y utilizando transição CSS (`transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)`) ao acionar o flip (por clique ou tecla de espaço).
* **Botões de Feedback**: Botões na base de cada flashcard sinalizando o nível de memorização (Fácil, Médio, Difícil/Erro) utilizando os acentos de cores de status (ciano, amarelo e vermelho).

---

## 2. HUD de Gamificação (Dashboard Header & Sidebar)
Os elementos de status do usuário (experiência, nível e moedas):
* **Badges**: Contêineres compactos com bordas arredondadas e ícones representativos.
* **Barra de XP**: Uma barra de progresso fina com preenchimento em degradê linear ciano-roxo (`background: linear-gradient(90deg, var(--nexti-cyan), var(--nexti-purple))`). Deve possuir animação de pulso ao carregar novos valores de XP.

---

## 3. Teia Neural (Mapa Neural Modal)
A representação das conexões neurais e trilha de conhecimento do aluno:
* **Nós (Nodes)**: Círculos com ícones que se diferenciam pelo status de conclusão da trilha (Concluído em verde com ícone de check, Ativo em ciano, Bloqueado em cinza/cadeado).
* **Conexões (Edges)**: Linhas fluidas desenhadas no canvas ou SVG, simulando conexões sinápticas. Devem possuir efeito de opacidade sutil (0.15) e pulsar ao interagir com nós vizinhos.
* **Fundo Quadriculado**: Contêiner `.modal-body-mapa` renderiza uma grade infinita sutil de `30px` com linhas de opacidade ajustadas para `0.02` para não ofuscar as conexões.
