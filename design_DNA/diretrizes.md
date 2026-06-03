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
*   **Fundo Principal:** Tons extremamente escuros de preto e azul-marinho (`#0b0c10`).
*   **Focos de Luz (Glows):** Efeitos de iluminação radial difusa aplicados no fundo das telas em tons de roxo/violeta escuro (`hsla(260, 40%, 30%, 0.15)`) no lado esquerdo e azul-petróleo/ciano (`hsla(190, 40%, 30%, 0.15)`) no lado direito.

### Cores de Status e Acento (Accents)
*   **Verde Sucesso/Destaque (`#00ff88`):** Usado para destacar o item vencedor/selecionado, status de sucesso (`FUNCIONOU` / `CONCLUÍDO`) e badges de vitória.
*   **Roxo/Magenta (`#8a2be2`):** Cor de acento secundária de marca, associada a elementos em destaque secundário ou marcas específicas.
*   **Azul (`#2f81f7`):** Cor neutra fria usada para progresso comum, informações adicionais ou elements padrão.
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
*   **Destaque:** A linha do item de maior relevância ou vencedor é envolta por um contorno completo de 1.5px em verde brilhante (`#00ff88`).
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
