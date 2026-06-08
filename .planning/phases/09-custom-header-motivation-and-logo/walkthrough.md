# Walkthrough — Layout de Logotipo e Frases Motivacionais Customizadas

Nesta fase, implementamos uma nova área para exibição de frases motivacionais dinâmicas e personalizadas no centro do cabeçalho do dashboard. Além disso, substituímos o logotipo em formato de texto pela logo oficial em imagem, aplicando um recorte justo nas bordas do texto para maximizar o tamanho e desenhando o grid quadriculado de forma dinâmica via CSS. Por fim, corrigimos avisos e erros de compatibilidade apontados pelo linter.

---

## O que Mudou?

### 1. Frases Motivacionais Dinâmicas e Customizadas
* **HTML ([index.html](file:///c:/Users/mayco/Documents/GitHub/PIM_IV-Parte_Pratica/pages/dashboard/index.html)):** Inserimos o elemento `#header-motivation` centralizado.
* **JavaScript ([app.js](file:///c:/Users/mayco/Documents/GitHub/PIM_IV-Parte_Pratica/pages/dashboard/js/app.js)):** Implementamos a função `inicializarFraseMotivacional` que sorteia de forma randômica uma frase de estudo ativo, destacando o nickname do desenvolvedor logado no sistema.
* **Ícone de Terminal:** Copiamos a imagem de terminal quadrada enviada para [terminal-icon.png](file:///c:/Users/mayco/Documents/GitHub/PIM_IV-Parte_Pratica/assets/img/terminal-icon.png) e a injetamos no cabeçalho antes das frases.
* **Alinhamento Vertical:** Corrigimos a herança indesejada de `line-height: 80px` do header normalizando para `line-height: 1` no contêiner e no `span` de texto. Deslocamos o texto em `1.5px` para baixo para ficar na mesma linha horizontal média do ícone do terminal.

### 2. Logotipo Oficial com Grid Dinâmico via CSS
* **Processamento de Imagem ([logo.png](file:///c:/Users/mayco/Documents/GitHub/PIM_IV-Parte_Pratica/assets/img/logo.png)):** Desenvolvemos um script em Python para fazer o recorte (crop) justo das margens pretas da imagem de logo enviada, aplicando canal alfa transparente com anti-aliasing nas bordas do texto. Com isso, o texto "Nex_TI" da imagem foi maximizado na tela.
* **Estilização de Contêiner (`.logo-header-box`):**
  - Implementamos a caixa no cabeçalho imitando a estética do painel do terminal, porém sem a barra esquerda turquesa (criando simetria com a caixa das frases).
  - Adicionamos o grid quadriculado dinâmico (`linear-gradient(rgba(0, 230, 230, 0.03) 1px, transparent 1px)`) de `20x20px` via CSS diretamente na propriedade de background. Isso evita cortes bruscos nas bordas do grid.
* **Substituição da Logo:** Trocamos a logo textual pela imagem `logo.png` com suas respectivas classes nas páginas do Dashboard, Sobre e Login.

### 3. Ajustes de Linter e Acessibilidade
* **Compatibilidade com o Safari (`backdrop-filter`):** Adicionamos o prefixo `-webkit-backdrop-filter` em todas as regras do projeto que utilizam o efeito de vidro fosco (`backdrop-filter`).
* **Estilo Inline no Login:** Movemos o display invisível do campo de nickname (`style="display: none;"` no HTML) para uma classe específica no arquivo de CSS de login (`#group-nome { display: none; }`).

---

## Verificação Manual Realizada

1. **Simetria do Cabeçalho:** Confirmamos que a logo à esquerda e a frase motivacional à direita possuem o mesmo estilo de caixas do terminal, com cantos arredondados equivalentes e planos de fundo quadriculados idênticos.
2. **Alinhamento do Texto com Ícone:** Validamos que o ícone do terminal e o texto da frase motivacional estão perfeitamente na mesma linha horizontal.
3. **Escalabilidade do Grid da Logo:** Verificamos que o grid quadriculado do logotipo se estende de forma limpa até a borda física do contêiner, adaptando-se a redimensionamentos.
4. **Verificação de Linter:** Garantimos que todos os 5 problemas de compatibilidade e qualidade de código mostrados no VS Code foram eliminados.
