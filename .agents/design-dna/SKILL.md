---
name: design-dna
description: Apply the Design_DNA visual identity and design system to a project. When invoked, this skill automatically creates a design_DNA folder in the user's workspace, saving design.html, diretrizes.md, paleta.json, and style.css. This allows reproducing a dark, premium neon-glowing project showcase aesthetic.
---

# Design_DNA Skill

This skill is designed to automatically replicate the premium **Design_DNA** visual system in any web project.

When this skill is invoked, you MUST execute the following actions to initialize the **Design_DNA** design tokens in the user's workspace exactly like the specified structure, making sure all contents adapt seamlessly to the target project.

> [!IMPORTANT]
> **Dynamic Project Adaptation Directive:**
> The design system assets (including `design.html`, `diretrizes.md`, `paleta.json`, and `style.css`) MUST NOT be copied blindly with placeholder text or unrelated brand assets.
> 1. **Project Name & Context:** Replace all generic occurrences of "Your Project" or placeholders with the actual target project name (e.g., "Nex_TI", "Layout_personalizado", etc.) and adapt subtitles/descriptions to reflect the target project's true core values and functions.
> 2. **Color Palette & Theme Alignment:** Adapt the primary accent colors, background tones, and highlights to coordinate with the target project's defined styling.
> 3. **Favicon Customization:** The Data-URI SVG favicon colors (specifically the `fill` attributes for the Erlenmeyer flask background and icon) MUST be adjusted to match the chosen brand palette of the target project. Do not default to the yellow-olive color if it conflicts with the project's visual direction.

## Directory Structure to Create
You must create a folder named `design_DNA` (with a lowercase 'd' and uppercase 'DNA') at the root of the active workspace. Inside it, create exactly four files:

```
▼ 📁 design_DNA
  </> design.html
   M↓ diretrizes.md
   {} paleta.json
   {} style.css
```

---

## Execution Steps & Files Content

### 1. Create the Directory
Create a directory named `design_DNA` at the root of the project workspace.

### 2. Save the HTML Showcase (`design_DNA/design.html`)
Create the file `design_DNA/design.html` containing the complete interactive dashboard. The file uses inline SVG logo and Data-URI Favicon, which makes it 100% portable and independent of external image assets.

**IMPORTANT (Favicon Color Customization):**
Before writing the HTML, analyze the target project's design system or palette (e.g., in its stylesheet, index.html, or user request). You MUST adapt the colors of the inline SVG favicon (specifically the background rect fill and the flask path fill) to match the brand colors of the target project to maintain design consistency!

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Project DNA — Design_DNA</title>
    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;600&family=Inter:wght@300;400;500;600;700&family=Lora:ital,wght@0,500;0,600;1,500;1,600&display=swap" rel="stylesheet">
    <!-- FontAwesome para os ícones -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="stylesheet" href="style.css">
    <!-- Favicon inline em Data URI (ADAPTAR: Frasco Erlenmeyer com as cores oficiais de destaque/fundo do projeto correspondente) -->
    <link rel="icon" type="image/svg+xml" href="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32'><rect width='32' height='32' rx='8' fill='%23YOUR_BRAND_COLOR' /><path d='M12 6h8v2h-1v3.5l5.5 8.25c.6.9.7 1.8.3 2.62c-.4.82-1.1 1.63-2.3 1.63H9.5c-1.2 0-1.9-.81-2.3-1.63c-.4-.82-.3-1.72.3-2.62L13 11.5V8h-1V6zm1.5 5.5l-5 7.5h15l-5-7.5V8h-5v3.5z' fill='%23YOUR_BACKGROUND_COLOR' /><path d='M7.7 20.3L13 16.5c1.2-.8 2.8-.8 4 0l4.3 3c.8.6 1.3.8 2 .8c.5 0 .9-.1 1.2-.3l.1-.1l-.1.2c-.3.8-1 1.7-2.2 1.7H9.5c-1.2 0-1.9-.9-2.2-1.7l.4.8zM9.5 24h13c1.2 0 1.9-.8 2.3-1.6c-1 .4-2.2.1-3.2-.6l-4.3-3c-1.6-1.1-3.8-1.1-5.4 0l-5.3 3.8c-.8.6-1.5.8-2.1.8H9.5zM13 8h6v2h-6V8z' fill='%23YOUR_BACKGROUND_COLOR' /></svg>">
</head>
<body>
    <!-- Focos de luz radiais no fundo (Glows) -->
    <div class="radial-glow glow-left"></div>
    <div class="radial-glow glow-right"></div>
    <div class="main-wrapper">
        <!-- Cabeçalho Principal -->
        <header class="dna-header">
            <div class="dna-icon-container">
                <!-- Ícone de hélice de DNA estilizado -->
                <svg class="dna-svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C11.45 2 11 2.45 11 3V5.07C9.28 5.4 7.74 6.27 6.54 7.46C5.35 8.66 4.47 10.21 4.14 11.93H2C1.45 11.93 1 12.38 1 12.93C1 13.48 1.45 13.93 2 13.93H4.14C4.47 15.65 5.35 17.2 6.54 18.4C7.74 19.59 9.28 20.46 11 20.79V22.86C11 23.41 11.45 23.86 12 23.86C12.55 23.86 13 23.41 13 22.86V20.79C14.72 20.46 16.26 19.59 17.46 18.4C18.65 17.2 19.53 15.65 19.86 13.93H22C22.55 13.93 23 13.48 23 12.93C23 12.38 22.55 11.93 22 11.93H19.86C19.53 10.21 18.65 8.66 17.46 7.46C16.26 6.27 14.72 5.4 13 5.07V3C13 2.45 12.55 2 12 2M12 7.07C13.62 7.07 15.08 7.82 16.03 9.07H7.97C8.92 7.82 10.38 7.07 12 7.07M6.17 11.07C6.31 10.36 6.57 9.68 6.95 9.07H17.05C17.43 9.68 17.69 10.36 17.83 11.07H6.17M6.17 12.93H17.83C17.69 13.64 17.43 14.32 17.05 14.93H6.95C6.57 14.32 6.31 13.64 6.17 12.93M12 16.93C10.38 16.93 8.92 16.18 7.97 14.93H16.03C15.08 16.18 13.62 16.93 12 16.93Z"/>
                </svg>
            </div>
            <h1 class="dna-title">Your Project <span class="italic-serif">DNA</span></h1>
            <p class="dna-subtitle">Explore a identidade estética, tipografia e diretrizes visuais que compõem o DNA de design do seu projeto</p>
        </header>

        <!-- Container do Painel -->
        <section class="panel-container">
            <!-- Painel Interno dos Conteúdos -->
            <div class="panel-body">
                <div class="panel-content">
                    <!-- Brand Header Card -->
                    <div class="dna-card brand-header-card">
                        <h2 class="brand-title">Design_DNA</h2>
                        <div class="brand-url-group" style="display: flex; flex-direction: column; gap: 0.5rem; margin-top: 0.5rem;">
                            <div class="brand-url-container" style="display: flex; align-items: center; gap: 0.5rem;">
                                <i class="fa-brands fa-github link-icon"></i>
                                <!-- ADAPTAR: Substituir pelo link do repositório Git do projeto correspondente -->
                                <a href="https://github.com/YourUsername/YourRepository" target="_blank" class="brand-link-url">https://github.com/YourUsername/YourRepository</a>
                            </div>
                        </div>
                    </div>

                    <!-- Row 2: Add Logo + Fonts -->
                    <div class="card-row">
                        <!-- Logo Card (SVG Geometria Neon embutido) -->
                        <div class="dna-card logo-card">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 120" class="logo-svg" style="width: 100%; height: 100%; max-height: 80px;">
                                <defs>
                                    <filter id="glow-cyan" x="-20%" y="-20%" width="140%" height="140%">
                                        <feGaussianBlur stdDeviation="6" result="blur" />
                                        <feMerge>
                                            <feMergeNode in="blur" />
                                            <feMergeNode in="SourceGraphic" />
                                        </feMerge>
                                    </filter>
                                    <filter id="glow-purple" x="-20%" y="-20%" width="140%" height="140%">
                                        <feGaussianBlur stdDeviation="8" result="blur" />
                                        <feMerge>
                                            <feMergeNode in="blur" />
                                            <feMergeNode in="SourceGraphic" />
                                        </feMerge>
                                    </filter>
                                </defs>
                                <rect x="30" y="20" width="120" height="80" rx="8" fill="#18181c" stroke="rgba(255, 255, 255, 0.05)" stroke-width="1" />
                                <rect x="90" y="35" width="160" height="60" rx="10" fill="#a855f7" opacity="0.85" filter="url(#glow-purple)" />
                                <rect x="210" y="25" width="140" height="70" rx="12" fill="#00e6e6" opacity="0.9" filter="url(#glow-cyan)" />
                                <rect x="150" y="45" width="100" height="40" rx="6" fill="#353822" stroke="#a8b865" stroke-width="1.5" />
                                <text x="200" y="70" font-family="'Lora', serif" font-size="14" fill="#a8b865" font-weight="bold" text-anchor="middle" letter-spacing="1">DNA</text>
                            </svg>
                        </div>

                        <!-- Fonts Card -->
                        <div class="dna-card fonts-card">
                            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.2rem;">
                                <h3 class="card-label">Fonts</h3>
                                <a href="https://fonts.google.com/" target="_blank" style="color: var(--link-cyan); font-size: 0.75rem; text-decoration: none; display: flex; align-items: center; gap: 0.25rem;">
                                    <i class="fa-solid fa-arrow-up-right-from-square" style="font-size: 0.7rem;"></i> Google Fonts
                                </a>
                            </div>
                            <div class="fonts-preview-container">
                                <div class="font-preview-item">
                                    <span class="font-huge-char font-fira">Aa</span>
                                    <span class="font-name-sub">JetBrains Mono</span>
                                </div>
                                <div class="font-preview-item">
                                    <span class="font-huge-char font-inter">Aa</span>
                                    <span class="font-name-sub">Inter</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Row 3: Colors -->
                    <div class="dna-card colors-card">
                        <h3 class="card-label">Colors</h3>
                        <div class="colors-list">
                            <div class="color-item">
                                <div class="color-circle" style="background-color: #0c0d12;"></div>
                                <span class="color-hex-text">#0c0d12</span>
                            </div>
                            <div class="color-item">
                                <div class="color-circle" style="background-color: #a3e635;"></div>
                                <span class="color-hex-text">#a3e635</span>
                            </div>
                            <div class="color-item">
                                <div class="color-circle" style="background-color: #a855f7;"></div>
                                <span class="color-hex-text">#a855f7</span>
                            </div>
                            <div class="color-item">
                                <div class="color-circle" style="background-color: #3b82f6;"></div>
                                <span class="color-hex-text">#3b82f6</span>
                            </div>
                        </div>
                    </div>

                    <!-- Row 4: Tagline + Brand Values -->
                    <div class="card-row">
                        <!-- Tagline -->
                        <div class="dna-card tagline-card">
                            <h3 class="card-label">Tagline</h3>
                            <p class="tagline-text">High fidelity and immersive.</p>
                        </div>

                        <!-- Brand Values -->
                        <div class="dna-card values-card">
                            <h3 class="card-label">Brand values</h3>
                            <div class="badge-container">
                                <span class="outline-badge">High Fidelity</span>
                                <span class="outline-badge">Refined Minimalism</span>
                                <span class="outline-badge">Atmospheric Depth</span>
                            </div>
                        </div>
                    </div>

                    <!-- Row 5: Brand Aesthetic + Brand Tone of Voice -->
                    <div class="card-row">
                        <!-- Brand Aesthetic -->
                        <div class="dna-card aesthetic-card">
                            <h3 class="card-label">Brand aesthetic</h3>
                            <div class="badge-container">
                                <span class="outline-badge">minimalist</span>
                                <span class="outline-badge">refined</span>
                                <span class="outline-badge">immersive</span>
                                <span class="outline-badge">dark-mode</span>
                                <span class="outline-badge">modern</span>
                            </div>
                        </div>

                        <!-- Brand Tone of Voice -->
                        <div class="dna-card tone-card">
                            <h3 class="card-label">Brand tone of voice</h3>
                            <div class="badge-container">
                                <span class="outline-badge">Premium</span>
                                <span class="outline-badge">Technical</span>
                                <span class="outline-badge">Professional</span>
                            </div>
                        </div>
                    </div>

                    <!-- Row 6: Business Overview -->
                    <div class="dna-card overview-card">
                        <h3 class="card-label">Business overview</h3>
                        <p class="overview-text">Este design system define as diretrizes visuais, de layout e de estilo para o desenvolvimento de interfaces e apresentações baseadas no Design_DNA. A identidade visual busca criar uma experiência de alta fidelidade, moderna, refinada e imersiva, utilizando glows de iluminação radial difusa e composições espaciais estilizadas.</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Rodapé do Projeto -->
        <footer class="project-footer">
            <p>Layout e diretrizes desenvolvidos a partir de referências do design_DNA.</p>
        </footer>
    </div>
</body>
</html>
```

### 3. Save the Design Guidelines (`design_DNA/diretrizes.md`)
Create the file `design_DNA/diretrizes.md` containing the complete markdown details of the visual identities and visual references (relative path to assets is set as `../assets/` in case they exist on the root folder):

```markdown
# Diretrizes de Design — Design_DNA

Este documento define as diretrizes visuais, de layout e de estilo para o desenvolvimento de interfaces e apresentações baseadas no **Design_DNA**.

> [!NOTE]
> Este projeto, suas diretrizes e sua especificação visual foram desenvolvidos e refinados tendo como base as imagens de referência do Design_DNA.

---

## 1. Filosofia de Design

A identidade visual busca criar uma experiência de alta fidelidade, moderna, refinada e imersiva.

*   **Ponto de Calibração (Estética de Referência):**
    *   Material de marketing da **Apple**.
    *   Interfaces da **Linear**, **Vercel** e **Stripe Press**.
    *   Estilos sofisticados do fórum **r/unixporn** (top da comunidade).
*   **Anti-pattern (O que evitar):**
    *   Evitar a estética "hacker clichê dos anos 90" (linhas verdes em pixel art sobre fundo preto simples). O design deve ser limpo, com tipografia legível e gradientes suaves.

---

## 2. Paleta de Cores e Iluminação

O sistema utiliza um tema essencialmente escuro (*Dark Mode*) com focos de luz (*radial glow*) e bordas iluminadas.

### Cores de Fundo (Backgrounds)
*   **Fundo Principal:** Tons extremamente escuros de cinza e azul-marinho (`#0d0e12` a `#12131a`).
*   **Focos de Luz (Glows):** Efeitos de iluminação radial difusa aplicados no fundo das telas em tons de roxo/violeta escuro (`hsla(260, 40%, 30%, 0.15)`) no lado esquerdo e azul-petróleo/ciano (`hsla(190, 40%, 30%, 0.15)`) no lado direito.

### Cores de Status e Acento (Accents)
*   **Verde Sucesso/Destaque (`#a3e635` / `#84cc16`):** Usado para destacar o item vencedor/selecionado, status de sucesso (`FUNCIONOU` / `CONCLUÍDO`) e badges de vitória.
*   **Roxo/Magenta (`#a855f7` / `#c084fc`):** Cor de acento secundária de marca, associada a elementos em destaque secundário ou marcas específicas.
*   **Azul (`#3b82f6` / `#60a5fa`):** Cor neutra fria usada para progresso comum, informações adicionais ou elements padrão.
*   **Amarelo/Laranja (`#f59e0b` / `#fbbf24`):** Usado para avisos, status parcial ou multiplicadores/métricas de atenção.
*   **Rosa/Vermelho (`#f43f5e` / `#fb7185`):** Usado para pontos negativos, erros, alertas críticos ou falhas.
*   **Cinza/Opacidade Baixa (`#6b7280` / `#4b5563`):** Usado para elementos secundários desativados, status não suportados ou dados indisponíveis.

---

## 3. Tipografia

A tipografia combina uma leitura limpa com elementos técnicos estruturados.

*   **Títulos Principais:** Letras em caixa alta (uppercase), com peso forte (*Bold* ou *Black*), grande espaçamento e visual limpo.
*   **Textos Técnicos / Valores / Metadados:** Fonte mono-espaçada como **JetBrains Mono** (tamanho reduzido, em caixa alta ou baixa dependendo da hierarquia).
*   **Textos de Apoio / Descrições:** Fonte sans-serif geométrica moderna (como *Inter*, *Outfit* ou *Roboto*), oferecendo excelente legibilidade em tamanhos menores.

---

## 4. Componentes de Interface

### 4.1. Cards de Comparação (Prós e Contras)
*   **Borda:** Borda de 1px com gradiente de cor suave indicando o status ou categoria do item.
*   **Símbolos:**
    *   **Prós (Verde):** Checkmarks (`✔`) em verde claro seguidos de texto explicativo.
    *   **Contras (Rosa):** Símbolos de cancelamento (`✖` ou `✘`) em rosa/vermelho seguidos do texto com os pontos fracos.
*   **Conteúdo:** Título do card centralizado com logotipo ou ícone representativo no topo.

### 4.2. Gráficos de Barras Horizontais
*   **Estrutura:** Linhas contendo o título do elemento no topo em caixa alta.
*   **Barras:** Formato horizontal com cantos arredondados e cor correspondente à categoria ou status do item.
*   **Multiplicador:** Destaque em fonte grande no canto direito indicando a proporção de diferença ou métrica relevante.

### 4.3. Carrossel de Seleção (Destaque do Item Focado)
*   **Profundidade:** O item selecionado/destacado é posicionado no centro com bordas acesas em verde neon e opacidade de 100%.
*   **Foco e Desfoque:** Os itens alternativos à esquerda e à direita ficam em segundo plano, com opacidade reduzida (~30% a 40%) e sem bordas brilhantes, guiando o foco do usuário instantaneamente para o centro.

### 4.4. Tabela / Matriz de Comparação
*   **Grid:** Layout tabular limpo com linhas de divisão horizontais sutis e sem bordas verticais.
*   **Destaque:** A linha do item de maior relevância ou vencedor é envolta por um contorno completo de 1.5px em verde brilhante (`#a3e635`).
*   **Indicadores:** Utiliza `✔` em verde, `✖` em rosa e `-` em cinza escuro para representar status de suporte ou compatibilidade.

### 4.5. Painel de Processamento Concorrente
*   **Input / Cabeçalho:** Um bloco horizontal com estilo de console no topo exibindo comandos, prompts ou parâmetros.
*   **Grid de Respostas/Outputs:** Exibição dos resultados em cards dispostos em grid.
*   **Barra de Progresso:** Cada card possui uma linha fina de progresso na base indicando o tempo de execução ou status de processamento com a cor de acento do respectivo item.

### 4.6. Grid de Cards de Status
*   **Status Badge:** Um rótulo posicionado no canto superior direito do card contendo o status correspondente (sucesso, parcial, falha ou indisponível).
*   **Atributos Técnicos:** Exibidos em formato de tabela interna do card em estilo chave/valor com fundo ligeiramente mais escuro que o card.
*   **Descrição Rápida:** Nota de rodapé em fonte de tamanho reduzido com a cor do status correspondente, explicando brevemente o comportamento do item.

---

## 5. Referências Visuais
As imagens originais e layouts modelo que deram origem a este design system podem ser vistos em `../assets/` (se disponíveis no repositório de destino):

| Conceito Estético | Imagem de Referência |
| :--- | :--- |
| **Linhas Neon Diagonais (Contraste Ativo)** | [abstrato.png](../assets/abstrato.png) |
| **Retângulos Sobrepostos (Profundidade 2D)** | [geometria.png](../assets/geometria.png) |
| **Ondas Volumétricas 3D (Fluidic Glow)** | [onda.png](../assets/onda.png) |
| **Apresentação de Produto (Photoshoot)** | [perfume.png](../assets/perfume.png) |
| **Wallpaper Minimalista (Developer Style)** | [style.png](../assets/style.png) |
```

### 4. Save the Color Palette (`design_DNA/paleta.json`)
Create the file `design_DNA/paleta.json` with the exact system color variables:

```json
{
  "theme": "dark",
  "colors": {
    "background": {
      "main": "#0c0c0e",
      "card": "#1e1e24",
      "card_header": "#18181c"
    },
    "borders": {
      "default": "rgba(255, 255, 255, 0.05)",
      "accent_olive": "rgba(168, 184, 101, 0.25)"
    },
    "brand": {
      "olive_text": "#a8b865",
      "olive_bg": "#353822",
      "gold": "#c9b177",
      "gold_dim": "rgba(201, 177, 119, 0.6)",
      "cyan": "#00e6e6"
    },
    "glows": {
      "purple": "rgba(168, 85, 247, 0.15)",
      "cyan": "rgba(0, 230, 230, 0.11)"
    },
    "accents": {
      "success": "#a3e635",
      "success_dark": "#84cc16",
      "purple": "#a855f7",
      "purple_light": "#c084fc",
      "blue": "#3b82f6",
      "blue_light": "#60a5fa",
      "warning": "#f59e0b",
      "warning_light": "#fbbf24",
      "danger": "#f43f5e",
      "danger_light": "#fb7185",
      "muted": "#8c8c96",
      "dark_muted": "#585860"
    }
  },
  "typography": {
    "serif": "Lora, serif",
    "sans": "Inter, sans-serif",
    "mono": "Fira Code, monospace"
  }
}
```

### 5. Save the CSS Foundations (`design_DNA/style.css`)
Create the file `design_DNA/style.css` containing the complete CSS layout code, including the neon glows animations:

```css
/* ==========================================================================
   Design_DNA — Estilo Fiel às Imagens Modelo
   ========================================================================== */

:root {
    --bg-color: #0c0c0e;
    --card-bg: #1e1e24;
    --card-bg-header: #18181c;
    --border-color: rgba(255, 255, 255, 0.05);
    
    /* Cores Específicas do Modelo */
    --accent-olive-bg: #353822;
    --accent-olive-text: #a8b865;
    --accent-gold: #c9b177;
    --accent-gold-dim: rgba(201, 177, 119, 0.6);
    --link-cyan: #00e6e6;
    
    /* Glows */
    --glow-purple: rgba(168, 85, 247, 0.15);
    --glow-cyan: rgba(0, 230, 230, 0.11);
    
    /* Tipografia */
    --font-serif: 'Lora', serif;
    --font-sans: 'Inter', sans-serif;
    --font-mono: 'Fira Code', monospace;
    
    /* Textos */
    --text-main: #e8e8ec;
    --text-muted: #8c8c96;
    --text-dark: #585860;
}

/* Reset Geral */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background-color: var(--bg-color);
    color: var(--text-main);
    font-family: var(--font-sans);
    min-height: 100vh;
    padding: 3rem 1.5rem;
    display: flex;
    justify-content: center;
    -webkit-font-smoothing: antialiased;
    position: relative;
}

/* Focos de luz radiais no fundo (Glows de exemplo) */
.radial-glow {
    position: fixed;
    width: 65vw;
    height: 65vw;
    border-radius: 50%;
    pointer-events: none;
    z-index: 0;
    filter: blur(140px);
    opacity: 0.55;
    transition: opacity 0.5s ease;
}

.glow-left {
    top: -25vh;
    left: -20vw;
    background: radial-gradient(circle, var(--glow-purple) 0%, rgba(0, 0, 0, 0) 70%);
    animation: floatGlowLeft 22s infinite alternate ease-in-out;
}

.glow-right {
    bottom: -25vh;
    right: -20vw;
    background: radial-gradient(circle, var(--glow-cyan) 0%, rgba(0, 0, 0, 0) 70%);
    animation: floatGlowRight 22s infinite alternate ease-in-out;
}

@keyframes floatGlowLeft {
    0% { transform: translate(0, 0) scale(1); }
    50% { transform: translate(5vw, 4vh) scale(1.12); }
    100% { transform: translate(0, 0) scale(1); }
}

@keyframes floatGlowRight {
    0% { transform: translate(0, 0) scale(1.12); }
    50% { transform: translate(-5vw, -4vh) scale(1); }
    100% { transform: translate(0, 0) scale(1.12); }
}

.main-wrapper {
    max-width: 820px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    position: relative;
    z-index: 1;
}

/* Cabeçalho Principal (DNA Header) */
.dna-header {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.8rem;
    margin-bottom: 0.5rem;
}

.dna-icon-container {
    color: #ffffff;
    opacity: 0.9;
}

.dna-svg {
    width: 32px;
    height: 32px;
}

.dna-title {
    font-family: var(--font-serif);
    font-size: 2.2rem;
    font-weight: 500;
    letter-spacing: 0.5px;
    color: #ffffff;
}

.italic-serif {
    font-style: italic;
    font-family: var(--font-serif);
}

.dna-subtitle {
    color: var(--text-muted);
    font-size: 0.88rem;
    font-weight: 400;
    max-width: 600px;
    line-height: 1.4;
}

/* Container do Painel */
.panel-container {
    background-color: var(--card-bg-header);
    border: 1px solid var(--border-color);
    border-radius: 16px;
    overflow: hidden;
}

/* Painel de Conteúdo */
.panel-body {
    padding: 2.2rem;
    background-color: var(--card-bg-header);
}

.panel-content {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    animation: fadeIn 0.4s ease-out forwards;
}

@keyframes fadeIn {
    from { opacity: 0; transform: translateY(8px); }
    to { opacity: 1; transform: translateY(0); }
}

/* Cards do DNA */
.dna-card {
    background-color: var(--card-bg);
    border: 1px solid var(--border-color);
    border-radius: 12px;
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    position: relative;
    transition: transform 0.25s ease, border-color 0.25s ease;
}

/* Row Layout */
.card-row {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 1.2rem;
}

/* Logo Card */
.logo-card {
    background-color: var(--card-bg);
    border-color: var(--border-color);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    min-height: 120px;
    overflow: hidden;
    padding: 1.2rem;
    transition: opacity 0.25s ease;
}

.logo-card:hover {
    opacity: 0.9;
}

.logo-svg {
    width: 100%;
    height: 100%;
    max-height: 80px;
    border-radius: 8px;
}

/* Fonts Card */
.fonts-card {
    gap: 0.8rem;
}

.card-label {
    font-size: 0.8rem;
    font-weight: 600;
    color: var(--text-muted);
    text-transform: capitalize;
    letter-spacing: 0.2px;
}

.fonts-preview-container {
    display: flex;
    gap: 4rem;
}

.font-preview-item {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
}

.font-huge-char {
    font-size: 1.8rem;
    font-weight: 500;
    color: var(--accent-olive-text);
}

.font-fira {
    font-family: var(--font-mono);
}

.font-inter {
    font-family: var(--font-sans);
}

.font-name-sub {
    font-size: 0.75rem;
    color: var(--text-muted);
    font-weight: 500;
}

/* Colors Card */
.colors-card {
    gap: 1.2rem;
}

.colors-list {
    display: flex;
    gap: 1.5rem;
    flex-wrap: wrap;
}

.color-item {
    display: flex;
    align-items: center;
    gap: 0.6rem;
}

.color-circle {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 1px solid var(--border-color);
}

.color-hex-text {
    font-family: var(--font-mono);
    font-size: 0.82rem;
    color: var(--text-main);
}

/* Tagline Card */
.tagline-card {
    gap: 0.8rem;
}

.tagline-text {
    font-family: var(--font-serif);
    font-size: 1.4rem;
    font-style: italic;
    color: #ffffff;
    line-height: 1.3;
}

/* Values Card */
.values-card {
    gap: 0.8rem;
}

.badge-container {
    display: flex;
    gap: 0.6rem;
    flex-wrap: wrap;
    margin-top: 0.2rem;
}

.outline-badge {
    border: 1px solid var(--border-color);
    padding: 0.35rem 0.75rem;
    border-radius: 99px;
    font-size: 0.72rem;
    font-weight: 600;
    color: var(--text-muted);
    background-color: rgba(255, 255, 255, 0.01);
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

/* Aesthetic Card & Tone Card */
.aesthetic-card, .tone-card {
    gap: 0.8rem;
}

/* Overview Card */
.overview-card {
    gap: 0.8rem;
}

.overview-text {
    font-size: 0.88rem;
    line-height: 1.6;
    color: var(--text-muted);
}

/* Project Footer */
.project-footer {
    text-align: center;
    padding: 1.5rem 0;
    color: var(--text-dark);
    font-size: 0.78rem;
}
```

---

When you are done setting up these files, notify the user that the `design_DNA` directory structure has been created and populated successfully.
