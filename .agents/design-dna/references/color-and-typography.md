# Design System Nex_TI: Cores e Tipografia

Este documento detalha os tokens visuais de cores, iluminação e fontes oficiais da identidade visual EdTech do Nex_TI.

---

## 1. Paleta de Cores (Color Palette)

O Nex_TI adota um tema escuro (*Dark Mode*) imersivo de alta tecnologia, utilizando cores frias e acentos vibrantes para feedback e gamificação.

### Cores de Fundo e Contêineres
* **Fundo Principal (`--bg-color`)**: `#0c0c0e` ou `#0b0c10` (cinza-grafite profundo).
* **Fundo de Cards/Modais (`--card-bg`)**: `#1e1e24` ou `#161b22` (cinza-chumbo técnico).
* **Bordas Sutis**: `rgba(255, 255, 255, 0.05)` (borda de 1px para dar profundidade aos cards).

### Acentos Principais (Aesthetic Accents)
* **Ciano Nex_TI (`var(--nexti-cyan)`)**: `#00e6e6` — Utilizado para botões principais, realces e links interativos.
* **Roxo Teia (`var(--nexti-purple)`)**: `#a855f7` — Utilizado no Mapa Neural, títulos e destaques secundários.

### Cores de Status (Gamificação e Algoritmo)
* **Verde Progresso (`var(--nexti-green)`)**: `#00ff88` ou `#a3e635` — Respostas de sucesso, badges de XP e cartões dominados no SM-2.
* **Amarelo Ouro (`#ffd700`)**: Moedas virtiais (Coins), conquistas e realces dourados.
* **Vermelho Alerta (`#f43f5e`)**: Respostas de erro (grau fácil de memorização), cancelamentos ou ações críticas.

---

## 2. Atmosfera e Efeitos de Brilho (Glows)

A profundidade visual é acentuada com luzes difusas no plano de fundo (gradientes radiais):
* **Glow Roxo (Esquerda/Centro)**: `hsla(260, 40%, 30%, 0.15)`
* **Glow Ciano (Direita/Centro)**: `hsla(190, 40%, 30%, 0.15)`
* **Glow de Cards**: Aplicação de box-shadow suave `0 8px 32px rgba(0, 230, 230, 0.05)` ao passar o mouse.

---

## 3. Tipografia Oficial (Typography)

A tipografia combina legibilidade corporativa com visual técnico monoespaçado:

* **Textos Gerais e Interfaces (UI)**: Fonte **Inter** (ou Arial/Sans-serif como fallback). Oferece clareza em resoluções variadas.
* **Títulos e Slogans**: Fonte **Lora** (Serif) em passagens formais do manual ou títulos institucionais.
* **Marca e Métricas Técnicas**: Fontes monoespaçadas como **Fira Code** ou **JetBrains Mono** para a marca `Nex_TI`, indicadores numéricos e badges de XP/Coins.
