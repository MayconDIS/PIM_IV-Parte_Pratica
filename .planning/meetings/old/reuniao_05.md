# Registro Scrum: Reunião 05 (26/03)

**Ritual**: Daily Scrum (Implementação do Core em C#)  
**Data**: 26 de Março de 2026  
**Facilitador (Scrum Master)**: Maciel Costa da Silva  
**Participantes**: Gabriel, Maciel, Maycon, Miguel, Rafael  

---

### 1. O que foi feito (Progresso)

- **Desenvolvimento POO**: Codificamos as classes e relacionamentos no C# (.NET 10). Implementamos:
  - O modelo de usuário com hashing de senhas para a **[US02] Cadastrar Usuário** (5 Story Points), em adequação à LGPD.
  - A herança de `Aluno` e `Tutor` derivando da classe base.
  - A composição dos atributos de gamificação para a **[US08] Atribuir XP e Moedas** (3 Story Points).
- **Lógica de Recompensa**: Programamos as classes `XP` e `Moedas` virtuais associadas à execução e conclusão de simulados de flashcards.

### 2. O que será feito (Planejamento)

- **Modelagem UML**: Elaborar os diagramas de classe, sequência e casos de uso do sistema.
- **Diagramação Visual no Relatório**: Definir a disposição física dos diagramas UML no relatório.

### 3. Impedimentos e Resoluções

- **Impedimento**: Garantir que as regras de negócio de concessão de moedas virtuais fossem executadas estritamente no servidor e associadas ao usuário correto.
- **Resolução**: Criamos a validação de segurança onde o estado do objeto `Aluno` é modificado apenas após o retorno do status de conclusão das rotinas de flashcards.

### 4. Backlog da Sprint (Status)

- [x] Criação da classe Usuario com encapsulamento de dados (US02)
- [x] Herança das classes derivadas Tutor e Aluno
- [x] Composição das regras de XP e Moedas associadas ao Aluno (US08)
