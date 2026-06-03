# Registro Scrum: Reunião 04 (22/03)

**Ritual**: Sprint Planning (Planejamento da Sprint 3)  
**Data**: 22 de Março de 2026  
**Facilitador (Scrum Master)**: Maycon Douglas Inácio Silva  
**Participantes**: Gabriel, Maciel, Maycon, Miguel, Rafael  

---

### 1. O que foi feito (Progresso)

- **Protótipos Figma**: Concluímos as telas de alta fidelidade no Figma para as histórias:
  - **[US01] Realizar Login** (3 Story Points)
  - **[US02] Cadastrar Usuário** (5 Story Points)
  - **[US04] Teste de Nivelamento** (5 Story Points) - com o fluxo do questionário de nivelamento inicial.
- **CSS de Páginas ABNT**: Estruturamos o [style.css](file:///c:/Users/mayco/Documents/GitHub/PIM_III-Parte_Teorica/style.css) com largura de `21cm` e altura rígida de `29.7cm`, aplicando o padding correto para simular as páginas físicas A4.
- **Segurança e Viewport**: Injetada a tag viewport no HTML e configurados os links externos com segurança (`rel="noopener"`).

### 2. O que será feito (Planejamento)

- **Injeção C#**: Desenvolver o código-fonte C# da lógica de orientação a objetos da EdTech.
- **Algoritmo de Recompensa**: Implementar as regras de moedas virtuais e XP com base no estudo concluído.

### 3. Impedimentos e Resoluções

- **Impedimento**: Garantir que as páginas físicas A4 configuradas no CSS mantenham a numeração no topo direito e o rodapé sempre no rodapé de cada página, mesmo na impressão.
- **Resolução**: Definimos posicionamento absoluto (`position: absolute`) para as classes `.num-pagina` e `.capa-footer`, atreladas a `.page` com posicionamento relativo, garantindo alinhamento fixo e preciso.

### 4. Backlog da Sprint (Status)

- [x] Protótipos de Login, Cadastro e Nivelamento validados no Figma
- [x] Configuração estrutural do CSS para o padrão ABNT (Página A4)
- [x] Correções estruturais iniciais de Viewport e segurança no HTML
