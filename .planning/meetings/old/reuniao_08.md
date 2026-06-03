# Registro Scrum: Reunião 08 (17/04)

**Ritual**: Sprint Review & Retrospective (Encerramento da Sprint Final)  
**Data**: 17 de Abril de 2026  
**Facilitador (Scrum Master)**: Gabriel Alves Moreira  
**Participantes**: Gabriel, Maciel, Maycon, Miguel, Rafael  

---

### 1. O que foi feito (Progresso)

- **Revisão Geral do Banco**: Analisamos de ponta a ponta o Diagrama de Entidade-Relacionamento (DER). Garantimos a sincronia de dados e o suporte à persistência física das tabelas chaves da plataforma:
  - Registro de usuários com senhas hashadas para a **[US02] Cadastrar Usuário** (LGPD).
  - Controle de intervalos temporais do motor de flashcards para a **[US06] Estudar Flashcards (SM-2)**.
  - Registro de XP e moedas adquiridas para a **[US08] Atribuir XP e Moedas**.
- **Script DDL Finalizado**: Fechamos o arquivo de criação física no SQL Server com integridade ACID nativa.
- **Validação Geral**: Concluímos os testes de integridade relacional.

### 2. O que será feito (Próximos Passos)

- **Entrega do PIM**: Compilar a versão final do PDF e exportar o relatório do projeto para envio na plataforma acadêmica da UNIP.
- **Apresentação**: Preparar os slides e alinhar a fala do grupo sobre o MVP da EdTech Nex_TI.

### 3. Impedimentos e Resoluções

- **Impedimento**: A modelagem física do banco com muitas relações N:N estava ficando confusa de ler no diagrama completo.
- **Resolução**: Resolvemos fatiar a exibição do DER em "Cortes" menores (Foco em Usuários/Gamificação e Foco em Questões) nas abas interativas do HTML para facilitar a compreensão da banca avaliadora.

### 4. Backlog da Sprint (Status)

- [x] Ajustes e refações no diagrama DER
- [x] Escrita do Script SQL DDL finalizado e testado no SQL Server
- [x] Revisão ortográfica e formatação final de acordo com a ABNT
