# Design System Nex_TI: Acessibilidade Universal

Diretrizes e especificações de conformidade e acessibilidade web (WAI-ARIA) aplicadas ao projeto Nex_TI.

---

## 1. Acessibilidade WAI-ARIA
* **Marcação Semântica**: Use tags HTML5 semânticas (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`) para estruturar as páginas de forma compreensível a leitores de tela.
* **aria-label**: Todos os elementos puramente interativos sem texto descritivo (como botões de controle do mapa com ícones SVG ou imagens) devem conter o atributo `aria-label` apropriado.
* **Texto Alternativo**: Todas as imagens funcionais ou informativas devem possuir a tag `alt` descritiva. Imagens puramente decorativas (como glows de fundo) devem ter `alt=""` ou `aria-hidden="true"`.

---

## 2. Widget de Acessibilidade Visual e Alto Contraste
O painel do dashboard possui controles específicos de acessibilidade no canto inferior esquerdo:
* **Zoom de Texto (Font Scaling)**: Controla o tamanho da fonte em múltiplos tamanhos aumentando a raiz do HTML (`html { font-size: ... }`).
* **Alto Contraste**: Inverte o gradiente do plano de fundo para cores sólidas de alto contraste (fundo preto puro `#000000` e bordas claras explícitas) e substitui glows sutis por marcações de alto contraste visual para legibilidade de pessoas com baixa visão.

---

## 3. Acessibilidade em Libras (VLibras Widget)
O widget oficial do VLibras é carregado no canto direito das páginas.
* **Componentes**: Estrutura `vw-plugin-wrapper` e importação de `https://vlibras.gov.br/app/vlibras-plugin.js`.
* **Posicionamento**: O widget de Libras deve se manter alinhado no lado direito da viewport de forma fixa, sem sobrepor modais ou ocultar as principais áreas clicáveis do dashboard.
