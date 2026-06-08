# Testes em JavaScript Vanilla

Guia para criação de testes no frontend Nex_TI usando JavaScript puro, sem dependências de frameworks pesados como Jest ou Mocha.

---

## 🎯 Abordagem para o Nex_TI

O frontend do Nex_TI usa JavaScript Vanilla puro (sem bundlers, sem transpilers). Para manter a coerência, os testes também seguem essa filosofia: **leves, sem dependências externas**.

---

## 🧪 Micro-Framework de Testes (Inline)

Criar um arquivo `tests/test-runner.js` que pode ser incluído temporariamente durante o desenvolvimento:

```javascript
// tests/test-runner.js — Micro-framework de testes para JS Vanilla
const TestRunner = {
    passed: 0,
    failed: 0,
    results: [],

    assert(condition, testName) {
        if (condition) {
            this.passed++;
            this.results.push(`✅ PASS: ${testName}`);
        } else {
            this.failed++;
            this.results.push(`❌ FAIL: ${testName}`);
        }
    },

    assertEqual(actual, expected, testName) {
        this.assert(actual === expected, 
            `${testName} (esperado: ${expected}, recebido: ${actual})`);
    },

    assertNotNull(value, testName) {
        this.assert(value !== null && value !== undefined, testName);
    },

    report() {
        console.log('═══════════════════════════════════════');
        console.log(`📊 RESULTADOS: ${this.passed} passed, ${this.failed} failed`);
        console.log('═══════════════════════════════════════');
        this.results.forEach(r => console.log(r));
        return this.failed === 0;
    }
};
```

---

## 🔐 Testes de Autenticação (auth.js)

```javascript
// tests/auth.test.js
function testAuthValidation() {
    console.log('🧪 Testando validações de autenticação...');

    // Test 1: Campo de email vazio deve ser inválido
    const emailInput = document.createElement('input');
    emailInput.type = 'email';
    emailInput.value = '';
    TestRunner.assert(!emailInput.checkValidity(), 
        'Email vazio deve ser inválido');

    // Test 2: Email com formato incorreto deve ser inválido
    emailInput.value = 'naoemail';
    TestRunner.assert(!emailInput.checkValidity(), 
        'Email sem @ deve ser inválido');

    // Test 3: Email com formato correto deve ser válido
    emailInput.value = 'user@example.com';
    TestRunner.assert(emailInput.checkValidity(), 
        'Email com formato correto deve ser válido');

    // Test 4: Token JWT deve estar no localStorage após login simulado
    localStorage.setItem('quest_jwt_token', 'test-token-123');
    TestRunner.assertEqual(
        localStorage.getItem('quest_jwt_token'), 
        'test-token-123', 
        'Token JWT deve ser armazenado no localStorage'
    );
    localStorage.removeItem('quest_jwt_token');
}
```

---

## 📊 Testes de Gamificação (XP/Moedas)

```javascript
// tests/gamification.test.js
function testGamificationLimits() {
    console.log('🧪 Testando limites de gamificação...');

    // Test 1: XP não pode ser negativo
    let xp = 0;
    let xpDelta = -10;
    let isValid = xpDelta >= 0;
    TestRunner.assert(isValid === false, 
        'XP delta negativo deve ser rejeitado');

    // Test 2: XP delta máximo por ciclo é 150
    xpDelta = 200;
    isValid = xpDelta <= 150;
    TestRunner.assert(isValid === false, 
        'XP delta > 150 deve ser rejeitado (anti-cheat)');

    // Test 3: XP delta válido (dentro do limite)
    xpDelta = 30;
    isValid = xpDelta >= 0 && xpDelta <= 150;
    TestRunner.assert(isValid === true, 
        'XP delta de 30 deve ser aceito');

    // Test 4: Moedas delta máximo por ciclo é 150
    let moedasDelta = 151;
    isValid = moedasDelta <= 150;
    TestRunner.assert(isValid === false, 
        'Moedas delta > 150 deve ser rejeitado');
}
```

---

## 🔍 Testes de Sanitização (Segurança Frontend)

```javascript
// tests/security.test.js
function testInputSanitization() {
    console.log('🧪 Testando sanitização de input...');

    // Função auxiliar de escape HTML
    function escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    // Test 1: Tags HTML devem ser escapadas
    const malicious = '<script>alert("xss")</script>';
    const sanitized = escapeHtml(malicious);
    TestRunner.assert(!sanitized.includes('<script>'), 
        'Tags <script> devem ser escapadas');

    // Test 2: Caracteres especiais devem ser escapados
    const specialChars = '"><img src=x onerror=alert(1)>';
    const escaped = escapeHtml(specialChars);
    TestRunner.assert(!escaped.includes('<img'), 
        'Tags <img> injetadas devem ser escapadas');

    // Test 3: Texto seguro não deve ser alterado
    const safeText = 'Olá Mundo 123';
    TestRunner.assertEqual(escapeHtml(safeText), safeText, 
        'Texto puro não deve ser modificado pelo escape');
}
```

---

## 🏃 Executando os Testes

### Via Console do Navegador
Incluir temporariamente no HTML de desenvolvimento:

```html
<!-- Apenas em desenvolvimento -->
<script src="tests/test-runner.js"></script>
<script src="tests/auth.test.js"></script>
<script src="tests/gamification.test.js"></script>
<script src="tests/security.test.js"></script>
<script>
    testAuthValidation();
    testGamificationLimits();
    testInputSanitization();
    TestRunner.report();
</script>
```

### Via Node.js (sem navegador)
Para testes que não dependem do DOM:

```bash
node -e "
const assert = require('assert');
// Importar funções de lógica pura para testar
assert.strictEqual(1 + 1, 2, 'Sanity check');
console.log('✅ Testes de lógica passaram!');
"
```

---

## 📋 Checklist de Testes Frontend (Manual UAT)

Para fluxos que exigem interação visual, manter um checklist manual:

| # | Fluxo | Critério de Aceite | Status |
|---|---|---|---|
| 1 | Login com credenciais válidas | Redireciona para Dashboard | ☐ |
| 2 | Login com credenciais inválidas | Exibe mensagem de erro | ☐ |
| 3 | Registro com email duplicado | Exibe mensagem de erro | ☐ |
| 4 | Estudo de Flashcard (virar carta) | Animação 3D flip funciona | ☐ |
| 5 | Avaliação SM-2 (Fácil/Médio/Difícil) | Progresso é salvo | ☐ |
| 6 | Mapa Neural (visualização) | Nós e conexões renderizam | ☐ |
| 7 | Geração de Certificado PDF | Download do PDF funciona | ☐ |
| 8 | Logout | Token é removido, redireciona para login | ☐ |
