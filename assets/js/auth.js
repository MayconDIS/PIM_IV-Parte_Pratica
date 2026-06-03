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
    
    const username = document.getElementById('email').value.trim();
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
        }
    } else {
        const nickname = document.getElementById('nome').value.trim();
        const email = document.getElementById('email').value.trim();
        btn.innerText = "Criando Conta...";
        try {
            // 1. Registra o usuário com as credenciais corretas
            await ApiService.register(nickname, email, password);
            
            // 2. Realiza o login automático para obter o Token JWT e ID do usuário
            const loginData = await ApiService.login(nickname, password);
            
            localStorage.setItem('quest_jwt_token', loginData.token);
            localStorage.setItem('quest_user_id', loginData.user.id);
            localStorage.setItem('quest_user_name', loginData.user.username);
            localStorage.setItem('quest_user_nivel', loginData.user.nivel);
            
            setTimeout(() => { window.location.href = '../dashboard/index.html'; }, 1000);
        } catch (error) {
            mostrarErro(error.message);
        }
    }
}

function mostrarErro(mensagem) {
    const btn = document.getElementById('btn-submit');
    const textoReset = isLoginMode ? '> INITIALIZE_LOGIN()' : 'Criar Conta';
    
    btn.innerText = `⚠ ${mensagem}`;
    btn.style.color = "#ff5555"; 
    btn.style.borderColor = "#ff5555";
    
    setTimeout(() => { 
        btn.innerText = textoReset; 
        btn.style.color = "var(--alura-cyan)"; 
        btn.style.borderColor = "var(--alura-cyan)"; 
    }, 3000);
}

