let isLoginMode = true;
let usersDB = JSON.parse(localStorage.getItem('quest_users')) || {};

function toggleMode(event) {
    event.preventDefault(); 
    isLoginMode = !isLoginMode; 
    
    const title = document.getElementById('form-title');
    const subtitle = document.getElementById('form-subtitle');
    const btn = document.getElementById('btn-submit');
    const footerText = document.getElementById('footer-text');
    const groupNome = document.getElementById('group-nome');
    const inputNome = document.getElementById('nome');

    if (isLoginMode) {
        title.innerHTML = 'Nex_<span class="tech-text">TI</span>';
        subtitle.innerText = 'Welcome back, developer.';
        btn.innerText = 'Entrar no Terminal';
        footerText.innerHTML = 'Ainda não tem acesso? <a href="#" onclick="toggleMode(event)">Cadastre-se</a>';
        groupNome.style.display = 'none'; 
        inputNome.required = false;
    } else {
        title.innerHTML = 'New_<span class="tech-text">Access</span>';
        subtitle.innerText = 'Join the Quest.';
        btn.innerText = 'Criar Conta';
        footerText.innerHTML = 'Já tem acesso? <a href="#" onclick="toggleMode(event)">Faça Login</a>';
        groupNome.style.display = 'block'; 
        inputNome.required = true;
    }
}

async function handleAuth(event) {
    event.preventDefault();
    
    const username = document.getElementById('email').value.trim(); // Usando email como username para compatibilidade visual
    const password = document.getElementById('password').value;
    const btn = document.getElementById('btn-submit');
    
    if (isLoginMode) {
        btn.innerText = "Autenticando...";
        try {
            const data = await ApiService.login(username, password);
            localStorage.setItem('quest_jwt_token', data.token);
            localStorage.setItem('quest_user_id', data.user.id);
            localStorage.setItem('quest_user_name', data.user.username);
            localStorage.setItem('quest_user_nivel', data.user.nivel);
            
            setTimeout(() => { window.location.href = '../dashboard/index.html'; }, 800);
        } catch (error) {
            mostrarErro("Acesso Bloqueado!");
        } finally {
            btn.innerText = "Entrar no Terminal";
        }
    } else {
        const nome = document.getElementById('nome').value.trim();
        btn.innerText = "Criando Conta...";
        try {
            await ApiService.register(username, username + "@nexti.com", password);
            localStorage.setItem('quest_user_name', nome);
            
            setTimeout(() => { window.location.href = '../dashboard/index.html'; }, 1000);
        } catch (error) {
            mostrarErro(error.message);
        } finally {
            btn.innerText = "Criar Conta";
        }
    }
}

function mostrarErro(mensagem) {
    const btn = document.getElementById('btn-submit');
    const textoOriginal = btn.innerText;
    
    btn.innerText = mensagem;
    btn.style.color = "#ff5555"; 
    btn.style.borderColor = "#ff5555";
    
    setTimeout(() => { 
        btn.innerText = textoOriginal; 
        btn.style.color = "var(--alura-cyan)"; 
        btn.style.borderColor = "var(--alura-cyan)"; 
    }, 2500);
}


function handleAuth(event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const btn = document.getElementById('btn-submit');
    
    if (isLoginMode && email === "admin@quest.com" && password === "admin") {
        btn.innerText = "Acesso Concedido...";
        localStorage.setItem('quest_user_name', 'Admin');
        
        const userKey = 'quest_Admin_';
        localStorage.setItem(userKey + 'nivelado', 'true');
        localStorage.setItem(userKey + 'rank', 'Rank: Deus (Admin)');
        localStorage.setItem(userKey + 'xp', '99999');
        localStorage.setItem(userKey + 'coins', '99999');
        
        const todasFases = ["fase1","fase2","fase3","fase4","fase5","fase6","fase7","fase8","fase9","fase10","fase11","fase12","fase13","fase14","fase15","fase16","fase17","fase18","fase19","fase20","fase21","fase22"];
        const todosBonus = ["bonus1","bonus2","bonus3","bonus4"];
        localStorage.setItem(userKey + 'desbloqueadas', JSON.stringify(todasFases));
        localStorage.setItem(userKey + 'bonus_unlocked', JSON.stringify(todosBonus));

        setTimeout(() => { window.location.href = '../dashboard/index.html'; }, 800);
        return;
    }

    if (!isLoginMode) {
        const nome = document.getElementById('nome').value.trim();
        
        if (usersDB[email]) return mostrarErro("Este ID já existe!");
        if (password.length < 4) return mostrarErro("Senha fraca!");
        
        usersDB[email] = { nome: nome, senha: password };
        localStorage.setItem('quest_users', JSON.stringify(usersDB));
        btn.innerText = "Registrado! Entrando...";
        localStorage.setItem('quest_user_name', nome);
        
        setTimeout(() => { window.location.href = '../dashboard/index.html'; }, 1000);
    } 
    else {
        const user = usersDB[email];
        if (!user || user.senha !== password) return mostrarErro("Acesso Bloqueado!");
        
        btn.innerText = "Autenticando...";
        localStorage.setItem('quest_user_name', user.nome);
        
        setTimeout(() => { window.location.href = '../dashboard/index.html'; }, 1000);
    }
}

function mostrarErro(mensagem) {
    const btn = document.getElementById('btn-submit');
    const textoOriginal = btn.innerText;
    
    btn.innerText = mensagem;
    btn.style.color = "#ff5555"; 
    btn.style.borderColor = "#ff5555";
    
    setTimeout(() => { 
        btn.innerText = textoOriginal; 
        btn.style.color = "var(--alura-cyan)"; 
        btn.style.borderColor = "var(--alura-cyan)"; 
    }, 2500);
}
