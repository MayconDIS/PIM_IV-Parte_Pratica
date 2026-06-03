# Registro Scrum: Reunião 07 (05/04)

**Ritual**: Sprint Planning (Planejamento da Sprint 4)  
**Data**: 05 de Abril de 2026  
**Facilitador (Scrum Master)**: Miguel Angel Fernandez Ortiz  
**Participantes**: Gabriel, Maciel, Maycon, Miguel, Rafael  

---

### 1. O que foi feito (Progresso)

- **Desenvolvimento Front-end**: Codificamos a estrutura visual do [index.html](file:///c:/Users/mayco/Documents/GitHub/PIM_III-Parte_Teorica/index.html) baseada nos protótipos do Figma. Integramos as páginas de login e cadastro em conformidade com as histórias:
  - **[US01] Realizar Login** (3 Story Points)
  - **[US02] Cadastrar Usuário** (5 Story Points)
- **Ajustes de Responsividade**: Criamos classes de utilidades flexíveis no [style.css](file:///c:/Users/mayco/Documents/GitHub/PIM_III-Parte_Teorica/style.css) usando CSS Grid e Flexbox, garantindo a acessibilidade de zoom e adaptação móvel da **[US15] Ajustar Acessibilidade** (5 Story Points).

### 2. O que será feito (Planejamento)

- **Validação DER**: Revisar os relacionamentos de banco de dados e fechar o DER definitivo.
- **Scripts SQL**: Criar e testar os scripts DDL de criação física no SQL Server.

### 3. Impedimentos e Resoluções

- **Impedimento**: O sumário longo quebrava e ficava ilegível em telas de smartphones.
- **Resolução**: Criamos uma regra de media query móvel no CSS que empilha os itens do sumário verticalmente e oculta os pontos pontilhados em telas menores que 800px.

### 4. Backlog da Sprint (Status)

- [x] Integração do front-end responsivo baseado no Figma (Login, Cadastro, Nivelamento)
- [x] Testes de adaptação móvel (Media Queries no CSS)
- [x] Correções estruturais de acessibilidade WAI-ARIA nas novas telas
