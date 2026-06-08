---
name: design-dna
description: >
  Diretrizes visuais e especificações estéticas do Design System da EdTech Nex_TI (UNIP, PIM IV).
  Use esta skill para orientar a criação, edição ou estilização de qualquer interface,
  tela ou componente web do projeto Nex_TI.
---

# Skill: Design System & Identidade Visual (Nex_TI)

Esta skill orienta o assistente de IA na aplicação consistente da identidade visual e do design system premium do projeto Nex_TI.

---

## 🎨 Paleta de Cores e Iluminação

O sistema utiliza um tema essencialmente escuro (*Dark Mode*) com atmosfera imersiva de profundidade digital.

### Cores Principais
*   **Fundo Principal (`--bg-color`)**: `#0c0c0e` ou `#0b0c10` (cinza-grafite escuro).
*   **Fundo dos Cards (`--card-bg`)**: `#1e1e24` ou `#161b22` (cinza-chumbo com bordas de opacidade sutil).
*   **Acento Ciano (`--link-cyan` / `var(--nexti-cyan)`)**: `#00e6e6` — Usado para elements interativos principais, botões de ação e realces de tecnologia.
*   **Acento Roxo (`--glow-purple` / `var(--nexti-purple)`)**: `#a855f7` — Usado para o Mapa Neural (Mapa Neural), elementos de destaque secundário e fluxos específicos.

### Cores de Status e Gamificação
*   **Verde Sucesso (`var(--nexti-green)`)**: `#00ff88` / `#a3e635` — Usado para badges de XP, acertos no SM-2, status ativo e conclusões.
*   **Amarelo/Ouro (`#ffd700`)**: Usado para moedas virtuais (Coins), bônus e ranks altos.
*   **Vermelho Erro (`#f43f5e`)**: Usado para erros no SM-2, botões de cancelamento ou alertas críticos.

### Focos de Luz Radiais (Glows)
A atmosfera imersiva é criada através de duas luzes difusas no fundo da tela via gradiente radial:
*   **Glow Esquerdo (Roxo)**: `hsla(260, 40%, 30%, 0.15)`
*   **Glow Direito (Ciano)**: `hsla(190, 40%, 30%, 0.15)`

---

## 🔤 Tipografia Oficial

A tipografia do projeto combina legibilidade premium de UI com elementos técnicos mono-espaçados:

1.  **Textos Técnicos e Monografias**:
    *   **Arial**: Fonte universal usada para o relatório acadêmico de PIM IV.
    *   **Lora (Serif)**: Usada em slogans e títulos decorativos no Design DNA.
2.  **Interface da Plataforma (UI)**:
    *   **Inter**: Fonte padrão para descrições, labels e textos de leitura na interface.
    *   **Fira Code / JetBrains Mono**: Fonte mono-espaçada usada em métricas do painel, comandos de console, blocos de código e a marca (`Nex_TI`).

---

## 🧱 Componentes de UI Nex_TI

Qualquer novo componente de interface criado deve respeitar as seguintes diretrizes estéticas:

### 1. Flashcards (Estudo Ativo)
*   **Frente/Verso**: Cards com cantos arredondados, borda fina (`1px solid rgba(255, 255, 255, 0.05)`) e fundo escuro.
*   **Interação**: Efeito 3D de rotação no eixo Y ao clicar ou pressionar a barra de espaço.
*   **Status**: Botões de feedback rápidos e coloridos na base (ERRO em ciano/vermelho, SUCESSO em verde/ouro).

### 2. HUD de Gamificação
*   **XP e Coins**: Exibidos em badges compactas com bordas coloridas correspondentes e ícones da biblioteca de símbolos.
*   **Barra de Progresso**: Fina, preenchida de forma responsiva com gradiente ciano-roxo sem quebras órfãs.

### 3. Mapa Neural (Mapa Neural)
*   **Nós (Nodes)**: Círculos com ícones que mudam de cor conforme o progresso da fase (concluído em verde, ativo em ciano, bloqueado em cinza/cadeado).
*   **Conexões (Edges)**: Linhas fluidas e finas com efeitos de opacidade sutil.
*   **Controles**: Widget flutuante no canto inferior para controle de zoom (Zoom In, Zoom Out) e acessibilidade.

---

## ♿ Acessibilidade Universal (WAI-ARIA)
*   Todas as imagens devem possuir tags `alt` descritivas ou `aria-label`.
*   Botões e controles interativos devem possuir tags `aria-label` adequadas para leitores de tela.
*   O sistema deve suportar nativamente **Alto Contraste** (inversão ou simplificação de cores de fundo e aumento de contraste nas bordas) e **Zoom de Texto** (manipulando a raiz `html { font-size: ... }`).
