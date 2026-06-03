# Plano de Implementação — Testes de Módulo (Estilo ENADE)

Este plano detalha a inclusão de avaliações de módulo ("Testes de Módulo") no dashboard principal do Nex_TI. Antes das fases bônus de cada módulo, o aluno deverá realizar um teste de múltipla escolha com 20 questões aleatórias selecionadas a partir do pool de flashcards daquele respectivo módulo, com distratores gerados de forma dinâmica.

---

## User Review Required

> [!IMPORTANT]
> A progressão de aprendizado será atualizada para incluir os testes como etapas obrigatórias. Por exemplo, para destravar as disciplinas do Módulo 02, o usuário precisará concluir o Teste do Módulo 01.

---

## Proposed Changes

### 1. CSS Design System

Adicionaremos as classes de estilização exclusivas para os testes de módulo no arquivo [style.css](file:///c:/Users/mayco/Documents/GitHub/PIM_IV-Parte_Pratica/pages/dashboard/style.css), garantindo que os novos botões e badges sigam o padrão sem violar a regra de estilos inline.

#### [MODIFY] [style.css](file:///c:/Users/mayco/Documents/GitHub/PIM_IV-Parte_Pratica/pages/dashboard/style.css)
Inserir no final do arquivo as classes utilitárias de estilo:
```css
.teste-xp-badge { border-color: var(--alura-cyan); color: var(--alura-cyan); }
.aula-title-cyan { color: var(--alura-cyan); }
```

---

### 2. Frontend HTML Structure

Adicionaremos os itens de menu referentes aos testes do módulo no arquivo [index.html](file:///c:/Users/mayco/Documents/GitHub/PIM_IV-Parte_Pratica/pages/dashboard/index.html) imediatamente antes da fase bônus de cada um dos módulos (Mod_01 a Mod_04).

#### [MODIFY] [index.html](file:///c:/Users/mayco/Documents/GitHub/PIM_IV-Parte_Pratica/pages/dashboard/index.html)

* **Módulo 01 (Lógica, Matemática, Infra, Segurança, Ética):**
  Inserir antes de `#menu-bonus1`:
  ```html
                  <div class="aula-item" id="menu-teste-mod1" onclick="carregarAula('teste-mod1', 'Teste do Módulo 01: Fundamentos', this)">
                      <span class="icon-status material-symbols-outlined">play_circle</span>
                      <span class="aula-title aula-title-cyan">[ TESTE ] Mod 01: Fundamentos</span>
                      <div class="menu-badges-wrapper">
                          <span class="xp-badge tech-font teste-xp-badge">25xp</span>
                          <span class="xp-badge tech-font flex-align coin-badge"><span class="material-symbols-outlined toll-icon-small">toll</span> 50</span>
                      </div>
                  </div>
  ```

* **Módulo 02 (Algoritmos, Linguagem C, Engenharia de Sistemas, Redes, IA):**
  Inserir antes de `#menu-bonus2`:
  ```html
                  <div class="aula-item" id="menu-teste-mod2" onclick="carregarAula('teste-mod2', 'Teste do Módulo 02: Engenharia e Estruturas', this)">
                      <span class="icon-status material-symbols-outlined">play_circle</span>
                      <span class="aula-title aula-title-cyan">[ TESTE ] Mod 02: Engenharia e Estruturas</span>
                      <div class="menu-badges-wrapper">
                          <span class="xp-badge tech-font teste-xp-badge">25xp</span>
                          <span class="xp-badge tech-font flex-align coin-badge"><span class="material-symbols-outlined toll-icon-small">toll</span> 50</span>
                      </div>
                  </div>
  ```

* **Módulo 03 (Banco de Dados, POO C#, Web UX/UI, Machine Learning, Agile):**
  Inserir antes de `#menu-bonus3`:
  ```html
                  <div class="aula-item" id="menu-teste-mod3" onclick="carregarAula('teste-mod3', 'Teste do Módulo 03: Desenvolvimento Profissional', this)">
                      <span class="icon-status material-symbols-outlined">play_circle</span>
                      <span class="aula-title aula-title-cyan">[ TESTE ] Mod 03: Desenvolvimento Profissional</span>
                      <div class="menu-badges-wrapper">
                          <span class="xp-badge tech-font teste-xp-badge">25xp</span>
                          <span class="xp-badge tech-font flex-align coin-badge"><span class="material-symbols-outlined toll-icon-small">toll</span> 50</span>
                      </div>
                  </div>
  ```

* **Módulo 04 (Web .NET, Mobile, Programação SQL, Cloud/DevOps, Empreendedorismo):**
  Inserir antes de `#menu-bonus4`:
  ```html
                  <div class="aula-item" id="menu-teste-mod4" onclick="carregarAula('teste-mod4', 'Teste do Módulo 04: Tecnologias Avançadas', this)">
                      <span class="icon-status material-symbols-outlined">play_circle</span>
                      <span class="aula-title aula-title-cyan">[ TESTE ] Mod 04: Tecnologias Avançadas</span>
                      <div class="menu-badges-wrapper">
                          <span class="xp-badge tech-font teste-xp-badge">25xp</span>
                          <span class="xp-badge tech-font flex-align coin-badge"><span class="material-symbols-outlined toll-icon-small">toll</span> 50</span>
                      </div>
                  </div>
  ```

---

### 3. Lógica do Jogo e Geração Dinâmica

Ajustaremos a engine do dashboard em [app.js](file:///c:/Users/mayco/Documents/GitHub/PIM_IV-Parte_Pratica/pages/dashboard/js/app.js) para processar os novos IDs de teste, gerar as questões com alternativas e gerenciar os unlocks e recompensas.

#### [MODIFY] [app.js](file:///c:/Users/mayco/Documents/GitHub/PIM_IV-Parte_Pratica/pages/dashboard/js/app.js)

* **Ordem de Progressão (`ordemFases`):**
  Definir explicitamente as fases intercaladas com os testes:
  ```javascript
  const ordemFases = [
      'fase1', 'fase2', 'fase3', 'fase4', 'fase5', 'teste-mod1',
      'fase6', 'fase7', 'fase8', 'fase9', 'fase10', 'teste-mod2',
      'fase11', 'fase12', 'fase13', 'fase14', 'fase15', 'teste-mod3',
      'fase16', 'fase17', 'fase18', 'fase19', 'fase20', 'teste-mod4',
      'fase21', 'fase22'
  ];
  ```

* **Desbloqueios Iniciais e Diagnostics:**
  Atualizar os perfis de desbloqueio para conter os testes correspondentes (Ingressante e Intermediário).

* **Geração Dinâmica de Múltipla Escolha com Distratores:**
  Na função `carregarAula()`, interceptaremos chamadas cujo ID comece com `teste-mod`. Faremos a extração de 20 flashcards aleatórios das fases daquele módulo. Para cada um, coletaremos distratores do mesmo módulo, gerando as 4 alternativas (`A`, `B`, `C`, `D`) e mapeando o índice correto de resposta para o motor visual do ENADE.

* **Recompensas e Mensagens de Conclusão:**
  Ajustar `irParaProximaAula()` para conceder `+25 XP` e `+50 Coins` aos testes de módulo e exibir as mensagens de desbloqueio de forma correta.

---

## Verification Plan

### Manual Verification
1. **Desbloqueio e Fluxo:** Acessar o sistema, verificar se o Teste do Módulo 01 inicia bloqueado e se ele destrava ao concluir a Fase 05.
2. **Execução do Teste:** Iniciar o Teste do Módulo 01, validar a exibição das 20 questões em formato de alternativas de múltipla escolha.
3. **Validação das Respostas:** Verificar se ao selecionar a alternativa correta o sistema concede estrelas e avança, e se ao errar indica a opção certa e gera a lógica de revisão do SM-2.
4. **Recompensas:** Confirmar que ao concluir a rotina de testes, o usuário recebe a pontuação (`+25 XP` e `+50 Coins`) e destrava a Fase 06.
