# Registro Scrum: Reunião 09 (03/05)

**Ritual**: Sprint Planning (Alinhamento de Documentação e Extensão)  
**Data**: 03 de Maio de 2026 (Domingo)  
**Facilitador (Scrum Master)**: Maciel Costa da Silva  
**Participantes**: Gabriel, Maciel, Maycon, Miguel, Rafael  

---

### 1. O que foi feito (Progresso)

- **Elaboração de Manuais de Extensão**: Escrevemos os manuais técnicos exigidos para o projeto de Extensão Universitária, facilitando a análise técnica e prática pela banca:
  - [MANUAL_DE_EXECUCAO.md](file:///C:/Users/mayco/Documents/GitHub/PIM_III-Parte_Pratica/MANUAL_DE_EXECUCAO.md): Guia com instruções para rodar o banco SQL Server, configurar a API C# (.NET 10) na porta `5001` e executar o front-end via Live Server na porta `5500`.
  - [MANUAL_PRATICO.md](file:///C:/Users/mayco/Documents/GitHub/PIM_III-Parte_Pratica/MANUAL_PRATICO.md): Manual de uso do sistema para os alunos, explicando a gamificação (XP/moedas) e a lógica de repetição espaçada.
  - [MANUAL_TECNICO.md](file:///C:/Users/mayco/Documents/GitHub/PIM_III-Parte_Pratica/MANUAL_TECNICO.md): Detalhamento da arquitetura 3 camadas, endpoints HTTP da API e segurança de dados conforme a LGPD.
- **Padronização de Dados**: Alinhamos os nomes, RAs dos integrantes e a data de fechamento para `Julho / 2026` em todos os manuais.

### 2. O que será feito (Planejamento)

- **Ajustes no Mapa Neural (Obsidian View)**: Otimizar o arquivo JavaScript responsável pela visualização dinâmica no dashboard.
- **Física de Nós**: Parametrizar o amortecimento de física (coeficiente de 0.15) e habilitar a persistência do posicionamento da câmera e nós por meio de LocalStorage.

### 3. Impedimentos e Resoluções

- **Impedimento**: Havia divergências pontuais nas descrições técnicas dos manuais antigos que conflitavam com as novas alterações do backend.
- **Resolução**: Fizemos uma revisão de leitura em equipe e padronizamos as terminologias técnicas de acordo com as entregas reais do código.

### 4. Backlog da Sprint (Status)

- [x] Elaboração do Manual de Execução para a banca da UNIP
- [x] Elaboração do Manual Prático do Usuário para Extensão
- [x] Elaboração do Manual Técnico e Arquitetural para Extensão
- [x] Ajuste de autoria e datas nos arquivos de manual
- [ ] Otimização dos coeficientes de física do Mapa Neural
- [ ] Implementação de persistência LocalStorage para os nós do mapa
