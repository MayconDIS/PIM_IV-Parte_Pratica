# Clean Code: JavaScript Guidelines

Diretrizes específicas de Clean Code para desenvolvimento frontend robusto utilizando JavaScript vanilla.

---

## 1. Nomenclatura CamelCase e Intenção
* Use **camelCase** para variáveis e funções.
* Use **PascalCase** para classes e construtores.
* Use verbos para funções (ex: `abrirMapaMental`, `salvarEstadoAtivo`) e substantivos para classes/variáveis.

---

## 2. Evitar Variáveis Globais Implícitas
Sempre declare variáveis com `const` ou `let`. Evite o uso de `var` para prevenir escopo de função confuso e vazamentos globais.
* **Bad**: `estadoAtivo = "mapa";`
* **Clean**: `const estadoAtivo = "mapa";`

---

## 3. Modularização de Eventos
Evite escrever todo o comportamento de resposta no escopo global ou direto no `onclick` inline do HTML. Use `addEventListener` no arquivo JS para separar a estrutura HTML das interações dinâmicas.

```javascript
// SEGURO E MODULAR
document.getElementById("btn-fechar-modal")
        .addEventListener("click", fecharModalMapa);
```

---

## 4. Manipulação de DOM Segura e Coesa
Divida funções que interagem com o DOM em pequenas rotinas especializadas.
* **Bad**: Uma função gigante `renderizarTudo()` que busca dados da API, faz parse de JSON, limpa a div, cria 50 elementos HTML dinâmicos manipulando strings complexas, anexa eventos de clique e atualiza o contador de moedas.
* **Clean**: Crie `buscarCardsDoUsuario()`, `criarElementoCard(card)` e `atualizarContadorMoedas(moedas)`.
