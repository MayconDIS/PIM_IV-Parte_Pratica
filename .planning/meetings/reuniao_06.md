# Registro Scrum: Reunião 06 (29/03)

**Ritual**: Daily Scrum (UML e Integração no Relatório)  
**Data**: 29 de Março de 2026  
**Facilitador (Scrum Master)**: Gabriel Alves Moreira  
**Participantes**: Gabriel, Maciel, Maycon, Miguel, Rafael  

---

### 1. O que foi feito (Progresso)

- **Desenho da UML**: Elaboramos os diagramas UML do sistema baseados na arquitetura lógica. Mapeamos os 3 atores principais (Aluno, Tutor, Admin) e suas interações divididas em 15 Casos de Uso independentes (alinhados com a documentação do projeto).
- **Detalhamento do SM-2**: O Diagrama de Sequência detalhou o fluxo temporal do motor algorítmico da **[US06] Estudar Flashcards (SM-2)** (13 Story Points).
- **Abas Interativas**: Criamos um layout interativo no HTML usando botões de aba (`.tab-btn` e `.tab-content`) e JavaScript vanilla para permitir que a banca examine cortes parciais aproximados dos diagramas sem poluir o documento.

### 2. O que será feito (Planejamento)

- **Responsividade Web**: Codificar a adaptação móvel dos elementos e do sumário no HTML5.
- **Estilização das Tabelas**: Mapear estilos e remover larguras fixas de tabelas para manter o layout flexível.

### 3. Impedimentos e Resoluções

- **Impedimento**: Os diagramas completos ficavam muito pequenos no layout A4 do navegador, prejudicando a leitura da banca avaliadora.
- **Resolução**: Além do fatiamento em cortes em abas, configuramos o CSS de impressão (`@media print`) para ocultar os controles de aba e renderizar todas as 3 versões empilhadas sequencialmente na impressão/PDF.

### 4. Backlog da Sprint (Status)

- [x] Elaboração dos diagramas UML do sistema (Casos de Uso, Classes e Sequência)
- [x] Estrutura das abas interativas no index.html e script de controle em JS
- [x] Ocultação dos controles de aba e impressão das imagens empilhadas no CSS
