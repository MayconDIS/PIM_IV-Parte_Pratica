if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}
window.scrollTo(0, 0);
// js/app.js

// ==========================================
// 1. INICIALIZAÇÃO E BANCO DE DADOS
// ==========================================
let apiOnline = false;
const nomeSalvo = localStorage.getItem('quest_user_name') || 'Desenvolvedor';

const headerUserName = document.getElementById('header-user-name') || document.getElementById('header-user-name-title');
if (headerUserName) headerUserName.innerText = nomeSalvo;

const menuUserName = document.getElementById('menu-user-name');
if (menuUserName) menuUserName.innerText = nomeSalvo;

// ==========================================
// FRASES MOTIVACIONAIS DE ESTUDO ATIVO
// ==========================================
const frasesMotivacionais = [
    "Bora programar, {name}! O próximo commit será de sucesso!",
    "Foco total nos estudos, {name}! Você evolui a cada fase.",
    "A persistência é o segredo do código perfeito, {name}!",
    "{name}, cada flashcard resolvido é um passo rumo ao topo!",
    "Compilando conhecimento... continue assim, {name}!",
    "Não pare até orgulhar o seu console, {name}!",
    "Café na caneca e foco nos estudos, {name}!",
    "{name}, os bugs de hoje são os aprendizados de amanhã!",
    "O algoritmo SM-2 está calibrando suas conexões neurais, {name}!",
    "Sua árvore de habilidades está crescendo, {name}!",
    "Executando processo de aprendizagem... Vai com tudo, {name}!",
    "Estudo ativo gera resultados exponenciais. Força, {name}!"
];

function inicializarFraseMotivacional(username) {
    const elMotivation = document.getElementById('header-motivation');
    if (!elMotivation) return;
    
    let nomeExibido = username;
    if (username === 'Desenvolvedor') nomeExibido = 'Dev';
    
    const idxRand = Math.floor(Math.random() * frasesMotivacionais.length);
    const fraseSelecionada = frasesMotivacionais[idxRand].replace('{name}', `<span class="username-highlight">${nomeExibido}</span>`);
    
    elMotivation.innerHTML = `<img src="../../assets/img/terminal-icon.png" class="motivation-icon" alt="Terminal"> <span>${fraseSelecionada}</span>`;
}

inicializarFraseMotivacional(nomeSalvo);

const userKey = `quest_${nomeSalvo}_`;

let rankSalvo = localStorage.getItem(userKey + 'rank') || 'Rank: Pendente';
document.getElementById('menu-user-level').innerText = rankSalvo;

async function inicializarApi() {
    apiOnline = await ApiService.checkStatus();
    if (apiOnline) {
        console.log("Integração API: Conectado ao servidor.");
        const username = localStorage.getItem('quest_user_name');
        if (username && username !== 'Desenvolvedor' && username !== 'Admin') {
            const dataUser = await ApiService.getUsuario(username);
            if (dataUser) {
                xpTotal = dataUser.xp;
                coinsTotal = dataUser.moedas;
                let nivel = dataUser.nivel;
                let nomeRank = `Rank: Nível ${nivel}`;
                if (nivel === 1) nomeRank = "Rank: Ingressante";
                else if (nivel >= 2 && nivel <= 5) nomeRank = "Rank: Intermediário";
                else if (nivel > 5) nomeRank = "Rank: Expert";
                
                localStorage.setItem(userKey + 'xp', xpTotal);
                localStorage.setItem(userKey + 'coins', coinsTotal);
                localStorage.setItem(userKey + 'rank', nomeRank);
                
                document.getElementById('menu-user-level').innerText = nomeRank;
                document.getElementById('xp-display').innerHTML = `<span class="material-symbols-outlined" style="font-size: 1.2rem;">military_tech</span> ${xpTotal} XP`;
                document.getElementById('coin-display').innerHTML = `<span class="material-symbols-outlined" style="font-size: 1.2rem;">toll</span> ${coinsTotal}`;
            }
        }
    } else {
        console.log("Integração API: Servidor offline. Utilizando modo offline (localStorage).");
    }
}

let xpTotal = parseInt(localStorage.getItem(userKey + 'xp')) || 0;
let coinsTotal = parseInt(localStorage.getItem(userKey + 'coins')) || 0;

document.getElementById('xp-display').innerHTML = `<span class="material-symbols-outlined" style="font-size: 1.2rem;">military_tech</span> ${xpTotal} XP`;
document.getElementById('coin-display').innerHTML = `<span class="material-symbols-outlined" style="font-size: 1.2rem;">toll</span> ${coinsTotal}`;

let meusDecks = JSON.parse(localStorage.getItem(userKey + 'decks'));

// Verifica integridade dos dados (versão + encoding limpo)
let dadosCorretos = meusDecks && meusDecks.fase22 && meusDecks.fase22.length >= 50;
if (dadosCorretos) {
    let amostra = JSON.stringify(meusDecks.fase1 || []) + JSON.stringify(meusDecks.fase2 || []);
    if (amostra.includes('\u00C3') || amostra.includes('Ã§') || amostra.includes('Ã£') || amostra.includes('Ã©')) {
        dadosCorretos = false;
    }
}
if (!dadosCorretos) {
    meusDecks = JSON.parse(JSON.stringify(bancoDeDados));
    localStorage.setItem(userKey + 'decks', JSON.stringify(meusDecks));
}

// Banco de dados de Repetição Espaçada (Algoritmo SM-2)
let srsData = JSON.parse(localStorage.getItem(userKey + 'srs')) || {};

// ==========================================
// 2. SISTEMA DE DESBLOQUEIO E BÔNUS
// ==========================================
const ordemFases = [
    'fase1', 'fase2', 'fase3', 'fase4', 'fase5', 'teste-mod1',
    'fase6', 'fase7', 'fase8', 'fase9', 'fase10', 'teste-mod2',
    'fase11', 'fase12', 'fase13', 'fase14', 'fase15', 'teste-mod3',
    'fase16', 'fase17', 'fase18', 'fase19', 'fase20', 'teste-mod4',
    'fase21', 'fase22', 'teste-mod5'
];

let fasesDesbloqueadas = JSON.parse(localStorage.getItem(userKey + 'desbloqueadas')) || ['fase1'];
let bonusDesbloqueados = JSON.parse(localStorage.getItem(userKey + 'bonus_unlocked')) || [];

function atualizarFasesVisuais() {
    ordemFases.forEach(fase => {
        const elementoFase = document.getElementById('menu-' + fase);
        if (!elementoFase) return;

        if (fasesDesbloqueadas.includes(fase)) {
            elementoFase.classList.remove('aula-locked-item');
            const icon = elementoFase.querySelector('.icon-status');
            if (icon && icon.innerText === 'lock') icon.innerText = 'check_circle';
        } else {
            elementoFase.classList.add('aula-locked-item');
            const icon = elementoFase.querySelector('.icon-status');
            if (icon) icon.innerText = 'lock';
        }
    });

    const certUnlocked = localStorage.getItem(userKey + 'certificado_unlocked') === 'true';
    const menuCertificado = document.getElementById('menu-certificado');
    if (menuCertificado) {
        if (certUnlocked) {
            menuCertificado.classList.remove('aula-locked-item');
            const icon = menuCertificado.querySelector('.icon-status');
            if (icon) icon.innerText = 'verified';
        } else {
            menuCertificado.classList.add('aula-locked-item');
            const icon = menuCertificado.querySelector('.icon-status');
            if (icon) icon.innerText = 'lock';
        }
    }
    
    const listaBonus = ['bonus1', 'bonus2', 'bonus3', 'bonus4'];
    listaBonus.forEach(bonusId => {
        const item = document.getElementById('menu-' + bonusId);
        const icon = document.getElementById('icon-' + bonusId);
        const price = document.getElementById('price-' + bonusId);
        
        if (item && bonusDesbloqueados.includes(bonusId)) {
            if (icon) icon.innerText = 'check_circle';
            if (price) {
                price.innerHTML = '<span class="material-symbols-outlined" style="font-size: 1rem;">toll</span> Liberado';
                price.style.borderColor = 'var(--alura-green)';
                price.style.background = 'rgba(0, 255, 136, 0.05)';
                price.style.color = 'var(--alura-green)';
            }
        }
    });
}

function tentarAbrirBonus(bonusId, custo, nomeAula, elementoClicado) {
    if (bonusDesbloqueados.includes(bonusId)) {
        if (!fasesDesbloqueadas.includes(bonusId)) fasesDesbloqueadas.push(bonusId);
        carregarAula(bonusId, nomeAula, elementoClicado);
        return;
    }
    
    const confirmar = confirm(`[ TRANSAÇÃO DE SISTEMA ]\n\nDeseja gastar ${custo} Coins para desbloquear a fase:\n"${nomeAula}"?\n\nSaldo atual: ${coinsTotal} Coins.`);
    
    if (confirmar) {
        if (coinsTotal >= custo) {
            coinsTotal -= custo;
            bonusDesbloqueados.push(bonusId);
            localStorage.setItem(userKey + 'coins', coinsTotal);
            localStorage.setItem(userKey + 'bonus_unlocked', JSON.stringify(bonusDesbloqueados));
            document.getElementById('coin-display').innerHTML = `<span class="material-symbols-outlined" style="font-size: 1.2rem;">toll</span> ${coinsTotal}`;
            atualizarFasesVisuais();
            alert(`[ SUCESSO ]\nTransação concluída. Acesso concedido.`);
            if (!fasesDesbloqueadas.includes(bonusId)) fasesDesbloqueadas.push(bonusId);
            carregarAula(bonusId, nomeAula, elementoClicado);
        } else {
            alert(`[ ACESSO NEGADO ]\nSaldo insuficiente.\nVocê possui ${coinsTotal} Coins, mas precisa de ${custo}.`);
        }
    }
}

// ==========================================
// 3. SISTEMA DE NIVELAMENTO ENADE
// ==========================================
const quizPerguntas = [
    { p: "1. Python: O que é um Dicionário?", r: ["Uma lista de palavras.", "Estrutura baseada em 'Chave: Valor'.", "Um laço de repetição."], certa: 1 },
    { p: "2. Segurança: O que é Phishing?", r: ["Ataque via e-mail falso.", "Firewall físico.", "Um tipo de vírus de pendrive."], certa: 0 },
    { p: "3. Dados: Qual a principal diferença de uma Fila para uma Pilha?", r: ["Fila é LIFO, Pilha é FIFO.", "Fila é FIFO (Primeiro a entrar, primeiro a sair).", "Pilhas são maiores."], certa: 1 },
    { p: "4. Redes: Para que serve o HTTPS?", r: ["Limpar o cache.", "Conectar o banco de dados.", "Navegação web segura com criptografia."], certa: 2 },
    { p: "5. Banco de Dados: O que é a Chave Estrangeira (FK)?", r: ["Senha do admin.", "Vínculo de referência com a Chave Primária de outra tabela.", "Arquivo JSON."], certa: 1 },
    { p: "6. POO (C#): O que é Polimorfismo?", r: ["Múltiplas formas de um método.", "Esconder código.", "Limpar memória."], certa: 0 },
    { p: "7. UX/UI: O que significa 'Mobile First'?", r: ["Criar o app apenas para Android.", "Desenhar focando primeiro na tela do celular.", "Obrigar login."], certa: 1 },
    { p: "8. Frameworks: O que é um ORM (ex: Entity Framework)?", r: ["Mapeia dados relacionais para objetos da programação.", "Deleta vírus.", "Uma linguagem front-end."], certa: 0 },
    { p: "9. Nuvem: O que faz o Docker?", r: ["Acelerar o WiFi.", "Empacotar sistemas em contêineres isolados.", "Conecta impressoras."], certa: 1 },
    { p: "10. Mobile: O que é o SDK?", r: ["Software Development Kit (Kit de ferramentas para criar apps).", "Um banco de dados.", "Cabo USB."], certa: 0 }
];

let questaoAtualNivelamento = 0;
let acertosNivelamento = 0;
let acertosTesteModulo = 0;

function verificarNivelamento() {
    const jaNivelou = localStorage.getItem(userKey + 'nivelado');
    if (!jaNivelou) document.getElementById('modalNivelamento').classList.add('show');
    else atualizarFasesVisuais(); 
}

function refazerDiagnostico() {
    questaoAtualNivelamento = 0;
    acertosNivelamento = 0;
    document.getElementById('nivelamento-body').innerHTML = `
        <p style="color: #c5c6c7; font-size: 1.1rem; margin-bottom: 20px;">
            Iniciando protocolo de avaliação. Para calibrarmos sua árvore de habilidades, responda às 10 questões técnicas abaixo.
        </p>
        <button class="btn-action btn-right tech-font flex-align-center" style="width: 100%; padding: 15px; justify-content: center;" onclick="iniciarQuizNivelamento()">
            <span class="material-symbols-outlined" style="margin-right:5px;">play_arrow</span> START_SCAN()
        </button>
    `;
    abrirModal('modalNivelamento');
}

function iniciarQuizNivelamento() { renderizarPerguntaNivelamento(); }

function renderizarPerguntaNivelamento() {
    const body = document.getElementById('nivelamento-body');
    const perguntaObj = quizPerguntas[questaoAtualNivelamento];
    let htmlRespostas = perguntaObj.r.map((resposta, index) => 
        `<button class="btn-action tech-font" style="width: 100%; margin-bottom: 10px; text-align: left;" onclick="responderNivelamento(${index})">${resposta}</button>`
    ).join('');
    
    body.innerHTML = `
        <h3 style="color: var(--alura-cyan); margin-bottom: 15px;">Avaliação Acadêmica ${questaoAtualNivelamento + 1}/10</h3>
        <p style="color: #fff; font-size: 1.1rem; margin-bottom: 25px;">${perguntaObj.p}</p>
        ${htmlRespostas}
    `;
}

function responderNivelamento(indiceResposta) {
    if (indiceResposta === quizPerguntas[questaoAtualNivelamento].certa) acertosNivelamento++;
    questaoAtualNivelamento++;
    if (questaoAtualNivelamento < quizPerguntas.length) renderizarPerguntaNivelamento(); 
    else finalizarNivelamento(); 
}

function finalizarNivelamento() {
    let nivelMsg = "";
    let nomeRank = "";
    let nivelId = 1;
    
    if (acertosNivelamento <= 3) {
        nivelMsg = `Você pontuou ${acertosNivelamento}/10. <br><br><b>Status: Ingressante.</b> Vamos focar na base do Módulo 01!`;
        fasesDesbloqueadas = ['fase1'];
        nomeRank = "Rank: Ingressante";
        nivelId = 1;
    } else if (acertosNivelamento >= 4 && acertosNivelamento <= 7) {
        nivelMsg = `Você pontuou ${acertosNivelamento}/10. <br><br><b>Status: Intermediário.</b> Os Módulos 01 e 02 estão abertos!`;
        fasesDesbloqueadas = ['fase1', 'fase2', 'fase3', 'fase4', 'fase5', 'teste-mod1', 'fase6', 'fase7', 'fase8', 'fase9', 'fase10', 'teste-mod2'];
        nomeRank = "Rank: Intermediário";
        nivelId = 3;
    } else {
        nivelMsg = `Você pontuou ${acertosNivelamento}/10. <br><br><b>Status: Expert Universitário.</b> Todas as 22 disciplinas regulares estão abertas!`;
        fasesDesbloqueadas = [...ordemFases]; 
        nomeRank = "Rank: Expert";
        nivelId = 6;
    }

    localStorage.setItem(userKey + 'nivelado', 'true');
    localStorage.setItem(userKey + 'desbloqueadas', JSON.stringify(fasesDesbloqueadas));
    localStorage.setItem(userKey + 'xp', xpTotal);
    localStorage.setItem(userKey + 'coins', coinsTotal);
    localStorage.setItem(userKey + 'rank', nomeRank);
    
    document.getElementById('menu-user-level').innerText = nomeRank;
    document.getElementById('xp-display').innerHTML = `<span class="material-symbols-outlined" style="font-size: 1.2rem;">military_tech</span> ${xpTotal} XP`;
    document.getElementById('coin-display').innerHTML = `<span class="material-symbols-outlined" style="font-size: 1.2rem;">toll</span> ${coinsTotal}`;

    if (apiOnline) {
        ApiService.updateUserStats(xpTotal, coinsTotal, nivelId)
            .catch(err => console.error("Erro ao sincronizar estatísticas iniciais da API:", err));
    }

    document.getElementById('nivelamento-body').innerHTML = `
        <h3 style="color: var(--alura-green); margin-bottom: 15px;">Avaliação Concluída!</h3>
        <p style="color: #c5c6c7; margin-bottom: 25px;">${nivelMsg}</p>
        <button class="btn-action btn-right tech-font flex-align-center" style="width: 100%; justify-content: center;" onclick="fecharModal('modalNivelamento'); atualizarFasesVisuais();">Entrar no Terminal</button>
    `;
}

// ==========================================
// 4. MOTOR DE REPETIÇÃO ESPAÇADA (SM-2) E ENADE
// ==========================================
let deckAtual = [];
let deckRevisao = []; 
let indiceCarta = 0;
let faseAtualId = ''; 

function formatarIntervalo(dias) {
    let d = Math.round(dias);
    if (d < 1) return "<10m";
    if (d === 1) return "1d";
    if (d < 30) return d + "d";
    if (d < 365) return Math.round(d / 30) + "m";
    return Math.round(d / 365) + "a";
}

function gerarBotoesRepeticao(idCarta) {
    let dataSrs = srsData[idCarta] || { rep: 0, interval: 0, ease: 2.5 };
    let tAgain = "<1m", tHard = "<6m", tGood = "<10m", tEasy = "3d";

    if (dataSrs.rep > 0) {
        tHard = formatarIntervalo(Math.max(1, dataSrs.interval * 1.2));
        tGood = formatarIntervalo(Math.max(1, dataSrs.interval * dataSrs.ease));
        tEasy = formatarIntervalo(Math.max(1, dataSrs.interval * dataSrs.ease * 1.3));
    }

    return `
        <div class="anki-container">
            <button class="anki-btn" onclick="processarResposta('again')">
                <span class="anki-time">${tAgain}</span>
                <span class="anki-label" style="color: #ff5555;">De novo</span>
            </button>
            <button class="anki-btn" onclick="processarResposta('hard')">
                <span class="anki-time">${tHard}</span>
                <span class="anki-label" style="color: #ffaa00;">Difícil</span>
            </button>
            <button class="anki-btn" onclick="processarResposta('good')">
                <span class="anki-time">${tGood}</span>
                <span class="anki-label" style="color: #00ff88;">Bom</span>
            </button>
            <button class="anki-btn" onclick="processarResposta('easy')">
                <span class="anki-time">${tEasy}</span>
                <span class="anki-label" style="color: #00e6e6;">Fácil</span>
            </button>
        </div>
    `;
}

async function carregarAula(faseId, nomeAula, elementoClicado) {
    if (!fasesDesbloqueadas.includes(faseId)) {
        alert("[ SISTEMA ]\n\nDisciplina bloqueada. Conclua as permissões anteriores!");
        return;
    }

    if (faseId.startsWith('teste-mod')) {
        acertosTesteModulo = 0;
    }

    const rightPanel = document.getElementById('right-panel');
    const leftPanel = document.querySelector('.left-panel'); 

    // Fechar fase se já estiver aberta
    if (elementoClicado.classList.contains('active-lesson')) {
        elementoClicado.classList.remove('active-lesson');
        leftPanel.classList.remove('focus-mode'); 
        
        // Retorna o scroll com o ajuste fino de 2.2px para cima
        const headerFixHeight = document.querySelector('header') ? document.querySelector('header').offsetHeight : 80;
        const y = elementoClicado.getBoundingClientRect().top + window.pageYOffset - headerFixHeight - 2.2;
        window.scrollTo({ top: y, behavior: 'smooth' });

        setTimeout(() => { leftPanel.classList.remove('fade-out-others'); }, 50);
        document.querySelectorAll('.dia-header').forEach(el => el.classList.remove('active-header'));
        rightPanel.classList.remove('active'); 
        setTimeout(() => { rightPanel.style.display = 'none'; }, 1000); 
        
        localStorage.removeItem(userKey + 'active_state');
        return; 
    }

    // Abrir Fase
    document.querySelectorAll('.aula-item').forEach(el => el.classList.remove('active-lesson'));
    elementoClicado.classList.add('active-lesson');
    leftPanel.classList.add('fade-out-others');
    document.querySelectorAll('.dia-header').forEach(el => el.classList.remove('active-header'));
    
    let prev = elementoClicado.previousElementSibling;
    while(prev) {
        if(prev.classList.contains('dia-header')) { prev.classList.add('active-header'); break; }
        prev = prev.previousElementSibling;
    }

    document.getElementById('botoes-jogo').style.display = 'flex';
    document.getElementById('botao-proxima').style.display = 'none';

    localStorage.setItem(userKey + 'active_state', JSON.stringify({ type: 'aula', id: faseId, title: nomeAula }));
    faseAtualId = faseId;
    let cartasDaFase = [];
    if (faseId.startsWith('teste-mod')) {
        let numMod = parseInt(faseId.replace('teste-mod', ''));
        let fasesDoModulo = [];
        if (numMod === 1) fasesDoModulo = ['fase1', 'fase2', 'fase3', 'fase4', 'fase5'];
        else if (numMod === 2) fasesDoModulo = ['fase6', 'fase7', 'fase8', 'fase9', 'fase10'];
        else if (numMod === 3) fasesDoModulo = ['fase11', 'fase12', 'fase13', 'fase14', 'fase15'];
        else if (numMod === 4) fasesDoModulo = ['fase16', 'fase17', 'fase18', 'fase19', 'fase20'];
        else if (numMod === 5) fasesDoModulo = ['fase21', 'fase22'];

        let todosCards = [];
        fasesDoModulo.forEach(fId => {
            todosCards = todosCards.concat(meusDecks[fId] || []);
        });

        let totalDesejado = Math.min(20, todosCards.length);
        let selecionados = [];
        let copiaCards = [...todosCards];
        for (let i = 0; i < totalDesejado; i++) {
            let idxRand = Math.floor(Math.random() * copiaCards.length);
            selecionados.push(copiaCards.splice(idxRand, 1)[0]);
        }

        cartasDaFase = selecionados.map(card => {
            let respostaCorreta = card.verso;
            let outrosVersos = todosCards
                .filter(c => c.verso !== respostaCorreta)
                .map(c => c.verso);
            
            outrosVersos = [...new Set(outrosVersos)];

            let distratores = [];
            for (let i = 0; i < 3; i++) {
                if (outrosVersos.length === 0) break;
                let idxRand = Math.floor(Math.random() * outrosVersos.length);
                distratores.push(outrosVersos.splice(idxRand, 1)[0]);
            }

            let alternativas = [respostaCorreta, ...distratores];

            for (let i = alternativas.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [alternativas[i], alternativas[j]] = [alternativas[j], alternativas[i]];
            }

            let corretaIdx = alternativas.indexOf(respostaCorreta);
            let letras = ["A", "B", "C", "D"];
            let opcoesFormatadas = alternativas.map((alt, idx) => `${letras[idx]}) ${alt}`);

            return {
                id: card.id || Math.floor(Math.random() * 100000),
                frente: card.frente,
                verso: card.verso,
                dica: card.dica,
                opcoes: opcoesFormatadas,
                correta: corretaIdx
            };
        });
    } else if (apiOnline) {
        try {
            const responseCards = await ApiService.getFlashcardsPorFase(faseId);
            if (responseCards && responseCards.length > 0) {
                cartasDaFase = responseCards.map(c => {
                    let cardObj = {
                        id: c.id,
                        frente: c.frente,
                        verso: c.verso,
                        dica: c.dica
                    };
                    if (c.opcoes) {
                        cardObj.opcoes = c.opcoes.split(';');
                        cardObj.correta = c.correta;
                    }
                    return cardObj;
                });
            } else {
                cartasDaFase = [...(meusDecks[faseId] || [])];
            }
        } catch (e) {
            console.error("Erro ao buscar flashcards da API, usando local:", e);
            cartasDaFase = [...(meusDecks[faseId] || [])];
        }
    } else {
        cartasDaFase = [...(meusDecks[faseId] || [])];
    }
    let agora = new Date().getTime();

    // Priorização SM-2: Novas/Devidas primeiro, Revisadas depois (deck completo)
    if (faseId.startsWith('teste-mod')) {
        deckAtual = [...cartasDaFase];
    } else {
        let cartasNovasOuDevidas = [];
        let cartasRevisadas = [];

        cartasDaFase.forEach(carta => {
            let infoProgresso = srsData[carta.frente];
            if (!infoProgresso || infoProgresso.next <= agora) {
                cartasNovasOuDevidas.push(carta);
            } else {
                cartasRevisadas.push(carta);
            }
        });

        // Embaralha cada grupo separadamente
        for (let i = cartasNovasOuDevidas.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [cartasNovasOuDevidas[i], cartasNovasOuDevidas[j]] = [cartasNovasOuDevidas[j], cartasNovasOuDevidas[i]];
        }
        for (let i = cartasRevisadas.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [cartasRevisadas[i], cartasRevisadas[j]] = [cartasRevisadas[j], cartasRevisadas[i]];
        }

        // Novas/Devidas primeiro, revisadas ao final — deck completo
        deckAtual = [...cartasNovasOuDevidas, ...cartasRevisadas];
    }

    if (deckAtual.length === 0) {
        elementoClicado.classList.remove('active-lesson');
        leftPanel.classList.remove('focus-mode'); 
        leftPanel.classList.remove('fade-out-others');
        document.querySelectorAll('.dia-header').forEach(el => el.classList.remove('active-header'));
        
        rightPanel.classList.remove('active'); 
        setTimeout(() => { rightPanel.style.display = 'none'; }, 1000); 
        localStorage.removeItem(userKey + 'active_state');
        return;
    }

    // Shuffle para testes de módulo
    if (faseId.startsWith('teste-mod')) {
        for (let i = deckAtual.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [deckAtual[i], deckAtual[j]] = [deckAtual[j], deckAtual[i]];
        }
    }

    document.getElementById('titulo-aula').innerHTML = `Processando: <span style="color: var(--alura-cyan)">${nomeAula}</span>`;
    elementoClicado.after(rightPanel);
    rightPanel.style.display = 'block';
    
    setTimeout(() => { rightPanel.classList.add('active'); }, 50);

    // ===============================================
    // LÓGICA BLINDADA DE SCROLL (Ajuste fino Sub-pixel 2.2px)
    // ===============================================
    setTimeout(() => {
        if (elementoClicado.classList.contains('active-lesson')) {
            leftPanel.classList.add('focus-mode');

            setTimeout(() => {
                const headerObj = document.querySelector('header');
                const headerFixHeight = headerObj ? headerObj.offsetHeight : 80;
                
                const targetBox = elementoClicado;
                const elementTop = targetBox.getBoundingClientRect().top;
                const scrollY = window.pageYOffset || document.documentElement.scrollTop;
                
                // Aplicado o ajuste exato de 6px que pediu
                const targetPosition = scrollY + elementTop - headerFixHeight - 6;

                window.scrollTo({
                    top: targetPosition,
                    behavior: "smooth"
                });
            }, 100); 
        }
    }, 700); 

    deckRevisao = []; 
    indiceCarta = 0;
    
    mostrarCartaAtual();
}

function mostrarCartaAtual() {
    const cardInner = document.getElementById('meuCard');
    cardInner.classList.remove('flipped'); 

    const carta = deckAtual[indiceCarta];
    if (!carta) return; 

    const frenteEl = document.getElementById('texto-frente');
    const versoEl = document.getElementById('texto-verso');
    const isEnade = carta.opcoes;

    if (isEnade) {
        frenteEl.style.textAlign = 'left';
        versoEl.style.textAlign = 'left';
        
        let htmlOpcoes = carta.opcoes.map((op, idx) => 
            `<button class="btn-opcao" onclick="event.stopPropagation(); verificarEnade(${idx}, ${carta.correta})">${op}</button>`
        ).join('');

        frenteEl.innerHTML = `
            <div style="font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;">${carta.frente}</div>
            <div class="opcoes-container">${htmlOpcoes}</div>
        `;
        
        versoEl.innerHTML = `
            <div style="font-size: 0.95rem; color: #8b92a5; margin-bottom: 15px; padding-bottom: 15px; border-bottom: 1px dashed #30363d; width: 100%; text-align: left; line-height: 1.5;">
                <strong style="color: var(--alura-cyan);">Relembrando a Questão:</strong><br><br>${carta.frente}
            </div>
            <div style="font-size: 1.1rem; text-align: left; line-height: 1.6; color: #fff;">
                ${carta.verso.replace(/\n/g, '<br>')}
            </div>
        `;
        
        document.getElementById('dica-frente').innerText = "Selecione a alternativa correta abaixo";
        document.getElementById('dica-verso').innerText = carta.dica || ""; 
        document.getElementById('botoes-jogo').style.display = 'none';
    } else {
        frenteEl.style.fontSize = '1.5rem';
        frenteEl.style.textAlign = 'center';
        
        frenteEl.innerHTML = carta.frente;
        versoEl.innerHTML = `
            <div style="font-size: 0.95rem; color: #8b92a5; margin-bottom: 20px; padding-bottom: 15px; border-bottom: 1px dashed #30363d; width: 100%; text-align: center;">
                <strong style="color: var(--alura-cyan);">Pergunta Original:</strong><br><br>${carta.frente}
            </div>
            <div style="font-size: 1.3rem; text-align: center; color: #fff; font-weight: 500;">
                ${carta.verso.replace(/\n/g, '<br>')}
            </div>
        `;

        document.getElementById('dica-frente').innerText = "Aperte [ESPAÇO] para debugar";
        document.getElementById('dica-verso').innerText = carta.dica || ""; 
        
        document.getElementById('botoes-jogo').innerHTML = `
            <button class="btn-mostrar tech-font" onclick="virarCarta()">MOSTRAR RESPOSTA</button>
        `;
        document.getElementById('botoes-jogo').style.display = 'flex';
    }
    document.getElementById('contador-cartas').innerText = `Item ${indiceCarta + 1}/${deckAtual.length}`;
}

function virarCarta() {
    const isEnade = deckAtual[indiceCarta] && deckAtual[indiceCarta].opcoes;

    if (isEnade) {
        const botoesVisiveis = document.getElementById('botoes-jogo').style.display === 'flex';
        if (!botoesVisiveis) return;
    }

    if (deckAtual.length > 0 && indiceCarta < deckAtual.length) {
        const card = document.getElementById('meuCard');
        card.classList.toggle('flipped');
        
        if (!isEnade && card.classList.contains('flipped')) {
            document.getElementById('botoes-jogo').innerHTML = gerarBotoesRepeticao(deckAtual[indiceCarta].frente);
        } else if (!isEnade && !card.classList.contains('flipped')) {
            document.getElementById('botoes-jogo').innerHTML = `<button class="btn-mostrar tech-font" onclick="virarCarta()">MOSTRAR RESPOSTA</button>`;
        }
    }
}

document.addEventListener('keydown', function(e) {
    const isPlaying = document.getElementById('right-panel').classList.contains('active');
    if (!isPlaying) return;

    const isEnade = deckAtual[indiceCarta] && deckAtual[indiceCarta].opcoes;
    if (isEnade) return; 

    const card = document.getElementById('meuCard');
    const isFlipped = card.classList.contains('flipped');

    if (e.code === 'Space') {
        e.preventDefault();
        if (!isFlipped) virarCarta();
        else processarResposta('good'); 
    } else if (isFlipped) {
        if (e.key === '1') processarResposta('again');
        if (e.key === '2') processarResposta('hard');
        if (e.key === '3') processarResposta('good');
        if (e.key === '4') processarResposta('easy');
    }
});

function soltarEstrelas(botaoElement) {
    for (let i = 0; i < 8; i++) {
        let star = document.createElement('div');
        star.innerText = '⭐';
        star.className = 'star-anim';
        star.style.left = (Math.random() * 80 + 10) + '%'; 
        star.style.animationDelay = (Math.random() * 0.3) + 's';
        botaoElement.appendChild(star);
        setTimeout(() => star.remove(), 1000);
    }
}

function verificarEnade(escolhida, correta) {
    const botoes = document.querySelectorAll('.btn-opcao');
    botoes.forEach(b => b.disabled = true);

    const isTesteMod = faseAtualId.startsWith('teste-mod');

    if (escolhida === correta) {
        botoes[escolhida].classList.add('opcao-correta');
        soltarEstrelas(botoes[escolhida]);
        if (isTesteMod) {
            acertosTesteModulo++;
        }
        
        setTimeout(() => {
            document.getElementById('meuCard').classList.add('flipped');
            if (isTesteMod) {
                document.getElementById('botoes-jogo').innerHTML = `
                    <div class="anki-container">
                        <button class="anki-btn" onclick="processarResposta('proxima-teste')">
                            <span class="anki-label" style="color: #00ff88;">Continuar Teste</span>
                        </button>
                    </div>
                `;
            } else {
                document.getElementById('botoes-jogo').innerHTML = gerarBotoesRepeticao(deckAtual[indiceCarta].frente);
            }
            document.getElementById('botoes-jogo').style.display = 'flex';
        }, 3000);

    } else {
        botoes[escolhida].classList.add('opcao-errada');
        botoes[correta].classList.add('opcao-correta'); 
        
        setTimeout(() => {
            document.getElementById('meuCard').classList.add('flipped');
            if (isTesteMod) {
                document.getElementById('botoes-jogo').innerHTML = `
                    <div class="anki-container">
                        <button class="anki-btn" onclick="processarResposta('proxima-teste')">
                            <span class="anki-label" style="color: #ffaa00;">Continuar Teste</span>
                        </button>
                    </div>
                `;
            } else {
                document.getElementById('botoes-jogo').innerHTML = `
                    <div class="anki-container">
                        <button class="anki-btn" style="border-color: #ff5555;" onclick="processarResposta('again')">
                            <span class="anki-time"><1m</span>
                            <span class="anki-label" style="color: #ff5555;">Errou (Repetir Hoje)</span>
                        </button>
                    </div>
                `;
            }
            document.getElementById('botoes-jogo').style.display = 'flex';
        }, 3000);
    }
}

function processarResposta(resultado) {
    if (deckAtual.length === 0 || indiceCarta >= deckAtual.length) return;
    
    let cartaAtual = deckAtual[indiceCarta];
    let idCarta = cartaAtual.frente; 
    let dataSrs = srsData[idCarta] || { rep: 0, interval: 0, ease: 2.5, next: 0 };
    let agora = new Date().getTime();

    if (resultado === 'proxima-teste') {
        // Apenas avança sem atualizar a repetição espaçada
    } else if (resultado === 'again' || resultado === 'errei') {
        deckRevisao.push(cartaAtual); 
        dataSrs.rep = 0;
        dataSrs.interval = 1;
        dataSrs.ease = Math.max(1.3, dataSrs.ease - 0.2); 
    } else if (resultado === 'hard') {
        dataSrs.interval = Math.max(1, Math.round(dataSrs.interval * 1.2));
        dataSrs.ease = Math.max(1.3, dataSrs.ease - 0.15);
        dataSrs.rep++;
    } else if (resultado === 'good' || resultado === 'acertei') {
        if (dataSrs.rep === 0) dataSrs.interval = 1;
        else dataSrs.interval = Math.max(1, Math.round(dataSrs.interval * dataSrs.ease));
        dataSrs.rep++;
    } else if (resultado === 'easy') {
        if (dataSrs.rep === 0) dataSrs.interval = 3;
        else dataSrs.interval = Math.max(1, Math.round(dataSrs.interval * dataSrs.ease * 1.3));
        dataSrs.ease += 0.15; 
        dataSrs.rep++;
    }

    if (!faseAtualId.startsWith('teste-mod')) {
        dataSrs.next = agora + (dataSrs.interval * 86400000); 
        srsData[idCarta] = dataSrs;
        localStorage.setItem(userKey + 'srs', JSON.stringify(srsData));
        
        if (apiOnline) {
            const usuarioId = parseInt(localStorage.getItem('quest_user_id')) || 0;
            const flashcardId = cartaAtual.id;
            let qualidadeNum = 4;
            if (resultado === 'again' || resultado === 'errei') qualidadeNum = 1;
            else if (resultado === 'hard') qualidadeNum = 3;
            else if (resultado === 'good' || resultado === 'acertei') qualidadeNum = 4;
            else if (resultado === 'easy') qualidadeNum = 5;

            if (usuarioId && flashcardId) {
                ApiService.atualizarProgresso(usuarioId, flashcardId, qualidadeNum)
                    .catch(err => console.error("Erro ao sincronizar progresso com a API:", err));
            }
        }
    }
    
    indiceCarta++;
    document.getElementById('meuCard').classList.remove('flipped');
    
    setTimeout(() => {
        if (indiceCarta >= deckAtual.length) {
            if (faseAtualId.startsWith('teste-mod')) {
                finalizarTesteModulo();
            } else if (deckRevisao.length > 0) {
                deckAtual = [...deckRevisao]; 
                deckRevisao = []; 
                indiceCarta = 0;
                mostrarCartaAtual();
                document.getElementById('dica-frente').innerText = "🔄 Reprocessando os erros de hoje...";
            } else {
                finalizarDeck();
            }
        } else {
            mostrarCartaAtual();
        }
    }, 300); 
}

function finalizarDeck() {
    document.getElementById('texto-frente').innerText = "Rotina Concluída 🎉";
    document.getElementById('texto-verso').innerText = "Código executado com sucesso!";
    document.getElementById('dica-verso').innerText = "Recolha seu XP e Coins abaixo.";
    document.getElementById('contador-cartas').innerText = "Status: Finalizado";
    document.getElementById('botoes-jogo').style.display = 'none';
    document.getElementById('botao-proxima').style.display = 'flex';
}

function finalizarTesteModulo() {
    let porcentagem = Math.round((acertosTesteModulo / deckAtual.length) * 100);
    const isMod5 = faseAtualId === 'teste-mod5';
    let corte = isMod5 ? 80 : 70;
    let passou = porcentagem >= corte;

    if (passou) {
        if (isMod5) {
            document.getElementById('texto-frente').innerText = "Curso Concluído! 📜🎉";
            document.getElementById('texto-verso').innerText = `Aproveitamento: ${porcentagem}% (${acertosTesteModulo}/${deckAtual.length} acertos).\n\nVocê desbloqueou o Certificado de Conclusão Oficial!`;
            document.getElementById('dica-verso').innerText = "Parabéns! Recolha seu XP e verifique seu Certificado no menu lateral.";
        } else {
            document.getElementById('texto-frente').innerText = "Teste Aprovado! 🎉";
            document.getElementById('texto-verso').innerText = `Aproveitamento: ${porcentagem}% (${acertosTesteModulo}/${deckAtual.length} acertos).\n\nCódigo executado com sucesso!`;
            document.getElementById('dica-verso').innerText = "Recolha seu XP abaixo.";
        }
    } else {
        document.getElementById('texto-frente').innerText = "Teste Reprovado ❌";
        document.getElementById('texto-verso').innerText = `Aproveitamento: ${porcentagem}% (${acertosTesteModulo}/${deckAtual.length} acertos).\n\nVocê precisa de pelo menos ${corte}% de acertos para passar.`;
        document.getElementById('dica-verso').innerText = "Estude mais o módulo e tente novamente.";
    }
    
    document.getElementById('contador-cartas').innerText = `Resultado: ${porcentagem}%`;
    document.getElementById('botoes-jogo').style.display = 'none';
    document.getElementById('botao-proxima').style.display = 'flex';
}

function irParaProximaAula() {
    let xpGanho = 0;
    let coinsGanho = 0;

    const isTesteMod = faseAtualId.startsWith('teste-mod');
    let testePassou = true;

    if (isTesteMod) {
        let porcentagem = Math.round((acertosTesteModulo / deckAtual.length) * 100);
        const isMod5 = faseAtualId === 'teste-mod5';
        let corte = isMod5 ? 80 : 70;
        testePassou = porcentagem >= corte;
        if (testePassou) {
            xpGanho = isMod5 ? 50 : 25;
            coinsGanho = 0;
        }
    } else if (faseAtualId.startsWith('fase')) {
        let numFase = parseInt(faseAtualId.replace('fase', ''));
        if (!isNaN(numFase)) {
            if (numFase >= 1 && numFase <= 5)        { xpGanho = 5;  coinsGanho = 10; } 
            else if (numFase >= 6 && numFase <= 10)  { xpGanho = 10; coinsGanho = 10; } 
            else if (numFase >= 11 && numFase <= 15) { xpGanho = 15; coinsGanho = 10; } 
            else if (numFase >= 16 && numFase <= 20) { xpGanho = 20; coinsGanho = 10; } 
            else if (numFase >= 21 && numFase <= 22) { xpGanho = 30; coinsGanho = 70; } 
        }
    } else if (faseAtualId.startsWith('bonus')) {
        xpGanho = 25; coinsGanho = 15;
    }

    if (isTesteMod && !testePassou) {
        const isMod5 = faseAtualId === 'teste-mod5';
        let corte = isMod5 ? 80 : 70;
        alert(`[ ACESSO NEGADO ]\nVocê não atingiu a pontuação mínima de ${corte}% no Teste de Módulo (Aproveitamento: ${Math.round((acertosTesteModulo / deckAtual.length) * 100)}%).\n\nNenhuma recompensa foi concedida e o próximo nível permanece bloqueado. Tente novamente!`);
        document.getElementById('menu-' + faseAtualId).click(); 
        return;
    }

    xpTotal += xpGanho;
    coinsTotal += coinsGanho;
    
    localStorage.setItem(userKey + 'xp', xpTotal);
    localStorage.setItem(userKey + 'coins', coinsTotal);
    
    document.getElementById('xp-display').innerHTML = `<span class="material-symbols-outlined" style="font-size: 1.2rem;">military_tech</span> ${xpTotal} XP`;
    document.getElementById('coin-display').innerHTML = `<span class="material-symbols-outlined" style="font-size: 1.2rem;">toll</span> ${coinsTotal}`;

    let nivelAtual = 1;
    let rankAtual = localStorage.getItem(userKey + 'rank') || 'Rank: Ingressante';
    if (rankAtual.includes("Expert")) {
        nivelAtual = 6;
    } else if (rankAtual.includes("Intermediário")) {
        nivelAtual = 3;
    } else {
        nivelAtual = 1;
    }
    
    if (xpTotal >= 300) {
        nivelAtual = Math.max(nivelAtual, 6);
        localStorage.setItem(userKey + 'rank', "Rank: Expert");
        document.getElementById('menu-user-level').innerText = "Rank: Expert";
    } else if (xpTotal >= 100) {
        nivelAtual = Math.max(nivelAtual, 3);
        localStorage.setItem(userKey + 'rank', "Rank: Intermediário");
        document.getElementById('menu-user-level').innerText = "Rank: Intermediário";
    }

    if (apiOnline) {
        ApiService.updateUserStats(xpTotal, coinsTotal, nivelAtual)
            .catch(err => console.error("Erro ao sincronizar estatísticas com a API:", err));
    }

    const indexAtual = ordemFases.indexOf(faseAtualId);
    
    if (isTesteMod) {
        let porcentagem = Math.round((acertosTesteModulo / deckAtual.length) * 100);
        if (indexAtual >= 0 && indexAtual < ordemFases.length - 1) {
            const proximaFase = ordemFases[indexAtual + 1];
            if (!fasesDesbloqueadas.includes(proximaFase)) {
                fasesDesbloqueadas.push(proximaFase);
                localStorage.setItem(userKey + 'desbloqueadas', JSON.stringify(fasesDesbloqueadas));
                atualizarFasesVisuais(); 
                alert(`[ SUCESSO ]\nTeste de Módulo Concluído com ${porcentagem}%!\nRecompensa: +${xpGanho} XP.\n🔓 Novo acesso concedido!`);
            } else {
                alert(`[ SUCESSO ]\nTeste de Módulo Revisitado com ${porcentagem}%!\nVocê ganhou +${xpGanho} XP!`);
            }
        } else if (faseAtualId === 'teste-mod5') {
            localStorage.setItem(userKey + 'certificado_unlocked', 'true');
            atualizarFasesVisuais(); 
            alert(`[ CURSO CONCLUÍDO ]\nParabéns! Você passou no Simulado ENADE final com ${porcentagem}% de aproveitamento!\nRecompensa: +${xpGanho} XP.\n📜 CERTIFICADO DE CONCLUSÃO DESBLOQUEADO! Verifique no menu lateral.`);
        }
    } else if (indexAtual >= 0 && indexAtual < ordemFases.length - 1) {
        const proximaFase = ordemFases[indexAtual + 1];
        if (!fasesDesbloqueadas.includes(proximaFase)) {
            fasesDesbloqueadas.push(proximaFase);
            localStorage.setItem(userKey + 'desbloqueadas', JSON.stringify(fasesDesbloqueadas));
            atualizarFasesVisuais(); 
            alert(`[ SUCESSO ]\nMissão Concluída!\nRecompensa: +${xpGanho} XP e +${coinsGanho} Coins.\n🔓 Novo acesso concedido!`);
        } else {
            alert(`[ SUCESSO ]\nRevisão de Código Concluída!\nVocê ganhou +${xpGanho} XP e +${coinsGanho} Coins!`);
        }
    } else if (indexAtual === ordemFases.length - 1) {
        alert(`[ MISSÃO FINALIZADA ]\nConcluiu o ENADE! Receba +${xpGanho} XP e +${coinsGanho} Coins!`);
    } else if (faseAtualId.startsWith('bonus')) {
        alert(`[ BÔNUS ]\nConhecimento extra rendeu +${xpGanho} XP e +${coinsGanho} Coins!`);
    }

    document.getElementById('menu-' + faseAtualId).click(); 
}

// ==========================================
// 5. MODAIS E CONFIGURAÇÕES
// ==========================================
function toggleMenu() { document.getElementById('dropdownMenu').classList.toggle('show'); }

document.addEventListener('click', function(event) {
    const menu = document.getElementById('dropdownMenu');
    const btn = document.querySelector('.hamburger-btn');
    if (menu && btn && !menu.contains(event.target) && !btn.contains(event.target)) { 
        menu.classList.remove('show'); 
    }
});

function abrirModal(idModal) {
    document.getElementById(idModal).classList.add('show');
    const menu = document.getElementById('dropdownMenu');
    if (menu) menu.classList.remove('show'); 
    localStorage.setItem(userKey + 'active_state', JSON.stringify({ type: 'modal', id: idModal }));
}

function fecharModal(idModal) { 
    document.getElementById(idModal).classList.remove('show'); 
    const state = JSON.parse(localStorage.getItem(userKey + 'active_state'));
    if (state && state.type === 'modal' && state.id === idModal) {
        localStorage.removeItem(userKey + 'active_state');
    }
}

function salvarFlashcard() {
    const fase = document.getElementById('nova-fase').value.trim().toLowerCase();
    const frente = document.getElementById('nova-frente').value.trim();
    const verso = document.getElementById('nova-verso').value.trim();
    const dica = document.getElementById('nova-dica').value.trim();

    if (!fase || !frente || !verso) { alert("[ AVISO ]\nPor favor, preencha Frente e Verso!"); return; }

    if (!meusDecks[fase]) meusDecks[fase] = [];
    meusDecks[fase].push({ frente, verso, dica });
    
    localStorage.setItem(userKey + 'decks', JSON.stringify(meusDecks));

    document.getElementById('nova-frente').value = '';
    document.getElementById('nova-verso').value = '';
    document.getElementById('nova-dica').value = '';
    fecharModal('modalCriacao');
    alert("[ SUCESSO ]\nDado salvo no banco da disciplina!");
}

function mostrarProgresso() {
    let totalCartas = 0;
    for (const cartas of Object.values(meusDecks)) { totalCartas += cartas.length; }
    const conteudo = `
        <div class="stat-box highlight">Nível Acadêmico <span class="tech-font">${xpTotal} XP</span></div>
        <div class="stat-box highlight" style="border-color: #ffd700; background-color: rgba(255, 215, 0, 0.05);">Coins <span class="tech-font">🪙 ${coinsTotal}</span></div>
        <div class="stat-box">Cartas no Sistema <span class="tech-font">${totalCartas}</span></div>
    `;
    document.getElementById('progresso-body').innerHTML = conteudo;
    abrirModal('modalProgresso');
}

function resetarProgresso() {
    const certeza = confirm(`[ AVISO CRÍTICO DE SISTEMA ]\n\nUsuário logado: ${nomeSalvo}\nAção solicitada: Formatação de Save Data\n\nIsso apagará permanentemente TODO o seu histórico de XP, Coins e permissões.\n\nTem certeza absoluta?`);
    if (certeza) {
        localStorage.removeItem(userKey + 'xp');
        localStorage.removeItem(userKey + 'coins');
        localStorage.removeItem(userKey + 'nivelado');
        localStorage.removeItem(userKey + 'desbloqueadas');
        localStorage.removeItem(userKey + 'bonus_unlocked');
        localStorage.removeItem(userKey + 'decks');
        localStorage.removeItem(userKey + 'rank');
        localStorage.removeItem(userKey + 'srs'); 
        localStorage.removeItem(userKey + 'map_state');
        
        window.location.href = '../login/login.html'; 
    }
}

function deslogar() {
    if (confirm("[ SISTEMA ]\nDeseja encerrar a sessão atual (Logout)?")) {
        localStorage.removeItem('quest_user_name');
        window.location.href = '../login/login.html'; 
    }
}

window.onload = async () => {
    await inicializarApi();
    verificarNivelamento();
    
    // Restaurar estado ativo (modal ou aula)
    const activeState = JSON.parse(localStorage.getItem(userKey + 'active_state'));
    if (activeState) {
        if (activeState.type === 'modal') {
            if (activeState.id === 'modalMapaMental') {
                abrirMapaMental();
            } else {
                abrirModal(activeState.id);
            }
        } else if (activeState.type === 'aula') {
            const el = document.getElementById('menu-' + activeState.id);
            if (el) {
                carregarAula(activeState.id, activeState.title, el);
            }
        }
    }
};

// ==========================================
// 6. EFEITO SCROLL: BOTÃO VOLTAR AO TOPO
// ==========================================
window.addEventListener('scroll', function() {
    const btnTopo = document.getElementById('btn-voltar-topo');
    const rightPanel = document.getElementById('right-panel');
    const isMobilePlaying = window.innerWidth <= 600 && rightPanel.classList.contains('active');

    if (window.scrollY > 300 && !isMobilePlaying) {
        btnTopo.style.display = 'flex';
    } else {
        btnTopo.style.display = 'none';
    }
});

document.querySelectorAll('.aula-item').forEach(item => {
    item.addEventListener('click', () => {
        if (window.innerWidth <= 600) {
            document.getElementById('btn-voltar-topo').style.display = 'none';
        }
    });
});

// ==========================================
// 7. ACESSIBILIDADE (ZOOM E ALTO CONTRASTE)
// ==========================================
let currentZoom = parseInt(localStorage.getItem('quest_zoom')) || 100;
document.documentElement.style.fontSize = currentZoom + '%';

function mudarZoom(direcao) {
    if (direcao > 0 && currentZoom < 150) {
        currentZoom += 10; 
    } else if (direcao < 0 && currentZoom > 80) {
        currentZoom -= 10; 
    }
    
    document.documentElement.style.fontSize = currentZoom + '%';
    localStorage.setItem('quest_zoom', currentZoom);
}

let isHighContrast = localStorage.getItem('quest_high_contrast') === 'true';
if (isHighContrast) {
    document.body.classList.add('high-contrast-mode');
}

function toggleAltoContraste() {
    isHighContrast = !isHighContrast;
    document.body.classList.toggle('high-contrast-mode', isHighContrast);
    localStorage.setItem('quest_high_contrast', isHighContrast);
}

function toggleA11yMenu() {
    const widget = document.getElementById('a11y-widget');
    widget.classList.toggle('open');
}

function emDesenvolvimento(event) {
    event.preventDefault(); 
    alert("[ SISTEMA ]\n\nMódulo em desenvolvimento.\nEsta funcionalidade será liberada nas próximas atualizações!");
}

function tentarAbrirCertificado(elemento) {
    const certUnlocked = localStorage.getItem(userKey + 'certificado_unlocked') === 'true';
    if (!certUnlocked) {
        alert("[ CERTIFICADO BLOQUEADO ]\n\nVocê ainda não possui permissão para emitir o certificado.\n\nPara desbloqueá-lo, você precisa concluir o Teste do Módulo 05 (Preparatório ENADE) com pelo menos 80% de aproveitamento.");
        return;
    }

    const nomeAluno = localStorage.getItem('quest_user_name') || 'Desenvolvedor';
    const dataNumerica = new Date().toLocaleDateString('pt-BR');
    const opcoesData = { year: 'numeric', month: 'long', day: 'numeric' };
    const dataPorExtenso = new Date().toLocaleDateString('pt-BR', opcoesData);
    
    let hash = 0;
    const str = nomeAluno + dataNumerica + "NexTI_Academy_Enade_PIMIV";
    for (let i = 0; i < str.length; i++) {
        hash = (hash << 5) - hash + str.charCodeAt(i);
        hash |= 0;
    }
    const hex = Math.abs(hash).toString(16).toUpperCase().padStart(8, '0');
    const uuidAutenticidade = `NEX-${hex.slice(0, 4)}-${hex.slice(4, 8)}-${dataNumerica.replace(/\//g, '')}`;

    document.getElementById('cert-nome-aluno').innerText = nomeAluno;
    document.getElementById('cert-data').innerText = dataPorExtenso;
    document.getElementById('cert-uuid').innerText = uuidAutenticidade;

    abrirModal('modalCertificado');
}

function imprimirCertificado() {
    window.print();
}

function baixarCertificadoPDF() {
    const nomeAluno = document.getElementById('cert-nome-aluno').innerText;
    const dataPorExtenso = document.getElementById('cert-data').innerText;
    const uuidAutenticidade = document.getElementById('cert-uuid').innerText;

    const apiUrl = `https://localhost:5001/api/certificado/pdf?nome=${encodeURIComponent(nomeAluno)}&data=${encodeURIComponent(dataPorExtenso)}&codigo=${encodeURIComponent(uuidAutenticidade)}`;
    
    const btn = document.querySelector('button[onclick="baixarCertificadoPDF()"]');
    if (btn) {
        btn.disabled = true;
        btn.innerHTML = `<span class="material-symbols-outlined">sync</span> GERANDO...`;
    }

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) throw new Error("Erro na geração do PDF no servidor.");
            return response.blob();
        })
        .then(blob => {
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.style.display = 'none';
            a.href = url;
            a.download = `Certificado_${nomeAluno.replace(/\s+/g, '_')}.pdf`;
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
            alert("[ DOWNLOAD CONCLUÍDO ]\nCertificado digital premium baixado com sucesso!");
        })
        .catch(err => {
            console.error(err);
            alert("[ ERRO ]\nNão foi possível baixar o PDF. Certifique-se de que o backend (.NET 10) está rodando localmente.");
        })
        .finally(() => {
            if (btn) {
                btn.disabled = false;
                btn.innerHTML = `<span class="material-symbols-outlined">download</span> BAIXAR_PDF()`;
            }
        });
}
