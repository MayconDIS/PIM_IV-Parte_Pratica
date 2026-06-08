# Plano de Implementação — Logotipo e Frases Motivacionais Customizadas

Implementar uma área de frases motivacionais dinâmicas e personalizadas no cabeçalho do Dashboard, acompanhada de um ícone de terminal quadrado, e atualizar o logotipo oficial do sistema para usar a imagem oficial com fundo quadriculado dinâmico gerado via CSS.

## Mudanças Propostas

### 1. Cabeçalho Motivacional
* **HTML ([index.html](file:///c:/Users/mayco/Documents/GitHub/PIM_IV-Parte_Pratica/pages/dashboard/index.html)):** Inserção de uma div central `#header-motivation`.
* **JS ([app.js](file:///c:/Users/mayco/Documents/GitHub/PIM_IV-Parte_Pratica/pages/dashboard/js/app.js)):** Função `inicializarFraseMotivacional` sorteando frases dinâmicas personalizadas com base no nome do usuário logado.
* **Estilos ([style.css](file:///c:/Users/mayco/Documents/GitHub/PIM_IV-Parte_Pratica/pages/dashboard/style.css)):** Estilização do contêiner com borda turquesa e do ícone de terminal de cantos arredondados.

### 2. Logotipo com Grid Dinâmico
* **Recorte de Imagem ([logo.png](file:///c:/Users/mayco/Documents/GitHub/PIM_IV-Parte_Pratica/assets/img/logo.png)):** Remoção de margens pretas e aplicação de canal de transparência suave.
* **HTML/CSS:**
  - Inclusão da classe `.logo-header-box` com grid quadriculado dinâmico (`linear-gradient(rgba(0, 230, 230, 0.03) 1px, transparent 1px)`) e bordas arredondadas sem a barra lateral ciana.
  - Substituição da marca textual por `img` nos cabeçalhos (dashboard e sobre) e tela de login.

## Plano de Verificação
* Validar que as frases e o logotipo estão alinhados na mesma linha horizontal média.
* Verificar se o grid da logo se estende perfeitamente até as bordas da caixa.
* Garantir que o linter do VS Code não aponte erros de compatibilidade de `backdrop-filter` ou de estilo inline na tela de login.
