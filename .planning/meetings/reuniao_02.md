# Registro Scrum: Reunião 02 (12/03)

**Ritual**: Sprint Planning (Planejamento da Sprint 2)  
**Data**: 12 de Março de 2026  
**Facilitador (Scrum Master)**: Rafael Mesquita  
**Participantes**: Gabriel, Maciel, Maycon, Miguel, Rafael  

---

### 1. O que foi feito (Progresso)

- **Product Backlog no Trello**: Criamos e estimamos o tamanho de todas as tarefas de desenvolvimento do MVP usando a sequência de Fibonacci. Mapeamos os épicos principais:
  - **Épico 1 (Autenticação e Acesso)**: [US01] (Login), [US02] (Cadastrar) e [US03] (Gerenciar Perfis).
  - **Épico 2 (Nivelamento)**: [US04] (Teste de Nivelamento).
  - **Épico 3 (Flashcards)**: [US05] (Gerenciar), [US06] (Estudar - SM-2) e [US07] (Criar Pessoais).
  - **Épico 4 (Gamificação)**: [US08] (XP e Moedas), [US09] (Desbloquear) e [US10] (Painel).
- **Esboço do Banco de Dados**: Definimos as tabelas principais para guardar o progresso do usuário e os dados do algoritmo de repetição espaçada.

### 2. O que será feito (Planejamento)

- **Estudo de Acessibilidade**: Planejar os critérios de aceitação para a **[US15] Ajustar Acessibilidade** (zoom, contraste e tags WAI-ARIA).
- **Persona e UX**: Detalhar a Persona do aluno que usará o sistema Nex_TI para guiar a interface gráfica.

### 3. Impedimentos e Resoluções

- **Impedimento**: Como conectar de forma segura e limpa a tabela de usuários com a parte de dados de flashcards e simulados.
- **Resolução**: Definimos chaves estrangeiras apropriadas associando a tabela `tb_usuarios` às cartas do motor SM-2 (`tb_flashcards_sm2`) para rastrear o progresso individual.

### 4. Backlog da Sprint (Status)

- [x] Criação e pontuação do Product Backlog no Trello (US01 a US15)
- [x] Rascunho da modelagem lógica do banco de dados (tabelas e chaves)
- [x] Definição preliminar do diagrama de classes em C#
