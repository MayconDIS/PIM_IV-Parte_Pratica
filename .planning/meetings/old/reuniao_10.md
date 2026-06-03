# Registro Scrum: Reunião 10 (24/05)

**Ritual**: Sprint Review (Refatoração SOLID e Fechamento de Escopo)  
**Data**: 24 de Maio de 2026 (Domingo)  
**Facilitador (Scrum Master)**: Gabriel Alves Moreira  
**Participantes**: Gabriel, Maciel, Maycon, Miguel, Rafael  

---

### 1. O que foi feito (Progresso)

- **Refatoração SOLID do Backend**: Ajustamos a API em C# (.NET 10) para alinhar a organização do código aos conceitos de POO estudados na disciplina:
  - **SRP e DIP**: Separamos a lógica matemática do SM-2 em um serviço isolado (`Sm2Engine.cs`) associado à interface `ISm2Engine` em [backend/Services/](file:///C:/Users/mayco/Documents/GitHub/PIM_III-Parte_Pratica/backend/Services/), evitando acoplamento nas rotas.
  - **Organização do Program.cs**: Movemos a declaração e mapeamento dos endpoints da API para uma classe externa de extensão (`EndpointExtensions.cs`), mantendo a classe principal limpa.
- **Validação de Escopo (3º vs 4º Semestre)**: Inserimos notas formais nos manuais técnicos do repositório prático para esclarecer que módulos como simulados ENADE e loja avançada são escopo de desenvolvimento do próximo semestre (4º Semestre).
- **Validação Técnica**: Testamos o build do backend, confirmando que a API compila sem avisos e os endpoints respondem normalmente.

### 2. O que será feito (Próximos Passos)

- **Consolidação do Ecossistema**: Copiar os registros e atas informais de reuniões Scrum para os diretórios `.planning/meetings/` em todos os repositórios complementares.
- **Verificação Geral**: Validar a execução integrada do frontend com a API local e banco de dados.

### 3. Impedimentos e Resoluções

- **Impedimento**: Havia a preocupação de a banca do PIM exigir telas funcionais de simulados e loja pelo fato das tabelas correspondentes estarem criadas no script DDL do banco e modelagem UML.
- **Resolução**: Mantivemos a modelagem conceitual UML/DER que demonstra o planejamento geral do sistema (garantindo nota de arquitetura e modelagem), mas adicionamos avisos formais no README e manuais explicando que o front-end desse módulo está em desenvolvimento e é escopo do 4º semestre.
- **Impedimento Técnico**: Risco de a refatoração do cálculo de datas do SM-2 introduzir inconsistências ou bugs de arredondamento.
- **Resolução**: Validamos o motor matemático com testes de unidade focados nos agendamentos de revisão do algoritmo.

### 4. Backlog da Sprint (Status)

- [x] Isolar a lógica matemática do algoritmo SM-2 na pasta backend/Services/
- [x] Mapear Minimal APIs em classe separada de extensão EndpointExtensions.cs
- [x] Simplificar o arquivo de entrada Program.cs do backend
- [x] Verificar a compilação completa da API C#
- [x] Sinalizar delimitação de escopo semestral nos manuais técnicos
- [x] Realizar testes integrados básicos com o frontend na porta 5001
