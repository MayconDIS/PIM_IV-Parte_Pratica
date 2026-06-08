// ==========================================
// SERVIÇO DE INTEGRAÇÃO COM A API (FETCH)
// ==========================================

const API_BASE_URL = 'http://localhost:5000/api';

const ApiService = {
    // 1. Verifica se a API está online
    checkStatus: async () => {
        try {
            const response = await fetch(`${API_BASE_URL}/status`);
            return response.ok;
        } catch (error) {
            console.error("Erro ao conectar com a API:", error);
            return false;
        }
    },

    // 2. Autenticação: Login
    login: async (username, password) => {
        try {
            const response = await fetch(`${API_BASE_URL}/auth/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password })
            });
            if (!response.ok) throw new Error("Credenciais inválidas");
            return await response.json();
        } catch (error) {
            console.error(error);
            throw error;
        }
    },

    // 3. Autenticação: Registro
    register: async (username, email, password) => {
        try {
            const response = await fetch(`${API_BASE_URL}/auth/register`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, email, password })
            });
            if (!response.ok) {
                const data = await response.json();
                throw new Error(data.message || "Erro ao registrar");
            }
            return await response.json();
        } catch (error) {
            console.error(error);
            throw error;
        }
    },

    // 4. Busca o Usuário no Banco de Dados (Consulta Pública)
    getUsuario: async (username) => {
        try {
            const response = await fetch(`${API_BASE_URL}/usuarios/${username}`);
            if (!response.ok) throw new Error("Usuário não encontrado");
            return await response.json();
        } catch (error) {
            console.error(error);
            return null;
        }
    },

    // 5. Busca todas as Fases cadastradas
    getFases: async () => {
        try {
            const response = await fetch(`${API_BASE_URL}/fases`);
            return await response.json();
        } catch (error) {
            console.error("Erro ao buscar fases:", error);
            return [];
        }
    },

    // 6. Busca os Flashcards de uma Fase específica
    getFlashcardsPorFase: async (codigoFase) => {
        try {
            const response = await fetch(`${API_BASE_URL}/fases/${codigoFase}/flashcards`);
            if (!response.ok) throw new Error("Flashcards não encontrados");
            return await response.json();
        } catch (error) {
            console.error(error);
            return [];
        }
    },

    // 7. Atualiza o progresso SM-2 (Agora exige Token JWT)
    atualizarProgresso: async (usuarioId, flashcardId, qualidade) => {
        const token = localStorage.getItem('quest_jwt_token');
        try {
            const response = await fetch(`${API_BASE_URL}/progresso/atualizar`, {
                method: 'POST',
                headers: { 
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({ usuarioId, flashcardId, qualidade })
            });
            if (!response.ok) throw new Error("Sessão expirada ou erro no servidor");
            return await response.json();
        } catch (error) {
            console.error("Erro ao atualizar progresso:", error);
            throw error;
        }
    },

    // 8. Atualiza estatísticas do usuário (XP, Moedas, Nível) (JWT)
    updateUserStats: async (xp, moedas, nivel) => {
        const token = localStorage.getItem('quest_jwt_token');
        try {
            const response = await fetch(`${API_BASE_URL}/usuarios/stats`, {
                method: 'PUT',
                headers: { 
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({ xp, moedas, nivel })
            });
            if (!response.ok) throw new Error("Erro ao atualizar estatísticas no servidor");
            return await response.json();
        } catch (error) {
            console.error("Erro ao atualizar estatísticas:", error);
            throw error;
        }
    },

    // 9. Busca todas as questões de simulados ENADE (UML)
    getSimuladoQuestoes: async () => {
        try {
            const response = await fetch(`${API_BASE_URL}/simulados/questoes`);
            return await response.json();
        } catch (error) {
            console.error("Erro ao buscar questões de simulado:", error);
            return [];
        }
    }
};

// Exportar globalmente para ser usado no dashboard e login
window.ApiService = ApiService;

