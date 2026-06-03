// Simulador de logs de terminal (Heurística de Visibilidade do Estado do Sistema)
const logs = [
    "> Estabelecendo conexão...",
    "> Carregando módulos de segurança...",
    "> Montando banco de dados (SQL)...",
    "> Injetando dependências POO...",
    "> Verificando heurísticas de UI...",
    "> Autenticação pronta. Redirecionando..."
];

const logElement = document.getElementById('status-log');
let step = 0;

// Muda o texto do log a cada 600ms
const interval = setInterval(() => {
    step++;
    if(step < logs.length) {
        logElement.innerText = logs[step];
    } else {
        clearInterval(interval);
    }
}, 600);

// Redireciona após 4 segundos exatos (quando a barra enche e o log acaba)
setTimeout(function() {
    window.location.href = "pages/login/login.html";
}, 4000);
