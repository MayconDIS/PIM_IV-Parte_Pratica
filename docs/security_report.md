# Relatório de Auditoria de Segurança - Nex_TI

## Sumário Executivo
Este relatório apresenta os resultados da auditoria de segurança sistemática baseada no padrão OWASP e nas diretrizes de desenvolvimento seguro (Best Practices) para o projeto **Nex_TI**. 

O objetivo da análise foi mapear falhas nos componentes do frontend e do backend em C# que pudessem comprometer a integridade do progresso acadêmico ou expor vetores de ataque. Foram encontrados problemas relacionados a manipulação de lógica de negócios (fraude na gamificação) e armazenamento de segredos criptográficos.

---

## 🔍 Resumo de Vulnerabilidades

| ID | Tipo de Vulnerabilidade | Severidade | Confiança | Status |
|----|------------------------|------------|-----------|--------|
| **[SEC-001]** | Manipulação Direta de Progresso (Cheat de Gamificação) | **Média** | Alta | Ativo |
| **[SEC-002]** | Exposição de Segredo Criptográfico no Código-Fonte | **Média** | Alta | Ativo |
| **[SEC-003]** | Armazenamento de Token JWT no LocalStorage | **Baixa** | Alta | Ativo |

---

## 🚨 Detalhes das Vulnerabilidades

### [SEC-001] Manipulação Direta de Progresso / Trapaça (Média)
* **Localização**: [EndpointExtensions.cs:L129-144](file:///c:/Users/mayco/Documents/GitHub/PIM_IV-Parte_Pratica/backend/Endpoints/EndpointExtensions.cs#L129-L144)
* **Confiança**: Alta
* **Problema**: O endpoint de atualização de estatísticas `/api/usuarios/stats` aceita os valores brutos de XP, moedas e nível (`request.XP`, `request.Moedas`, `request.Nivel`) diretamente no corpo da requisição e os persiste de forma cega no banco de dados para o usuário autenticado.
* **Impacto**: Um usuário mal-intencionado autenticado pode enviar uma requisição HTTP direta (via Postman, curl ou scripts simples) contendo valores inflados (ex: 999.999 XP e moedas infinitas). O backend gravará esses valores sem realizar qualquer validação em relação a tarefas de estudo realmente executadas, invalidando toda a integridade da dinâmica de gamificação acadêmica (fraude do placar de líderes).
* **Evidência**:
  ```csharp
  user.XP = request.XP;
  user.Moedas = request.Moedas;
  user.Nivel = request.Nivel;
  
  await db.SaveChangesAsync();
  ```
* **Remediação Recomendada**: O backend deve ser a única fonte da verdade para o cálculo de pontuação. Em vez de aceitar o valor final do XP e moedas, o endpoint de atualização de estatísticas deveria ser acionado indiretamente quando o usuário completa tarefas (como a conclusão de um deck no endpoint `/api/progresso/atualizar` ou finalização de simulados), com o próprio backend calculando o incremento devido (ex: `+10 XP`) e somando ao valor existente.

---

### [SEC-002] Exposição de Segredo Criptográfico no Código-Fonte (Média)
* **Localização**: [Program.cs:L21](file:///c:/Users/mayco/Documents/GitHub/PIM_IV-Parte_Pratica/backend/Program.cs#L21)
* **Confiança**: Alta
* **Problema**: A chave secreta simétrica usada para assinar e validar os tokens JWT está declarada diretamente em texto plano como uma variável no código do arquivo principal do servidor.
* **Impacto**: Se o código do repositório for exposto publicamente (vazamento ou compartilhamento de repositório git público), atacantes poderão obter a chave secreta e assinar tokens JWT forjados contendo quaisquer claims que desejarem, permitindo personificar qualquer usuário do sistema (incluindo administradores).
* **Evidência**:
  ```csharp
  var jwtKey = "NexTI_Secret_Key_2026_Super_Secure_Key_123!";
  ```
* **Remediação Recomendada**: Mova a chave de assinatura JWT para variáveis de ambiente ou para o gerenciador de segredos do ambiente de desenvolvimento (User Secrets do .NET). No código, leia de forma dinâmica:
  ```csharp
  var jwtKey = builder.Configuration["Jwt:Key"] ?? throw new InvalidOperationException("JWT Key not configured.");
  ```

---

### [SEC-003] Armazenamento de Token JWT no LocalStorage (Baixa / Defesa em Profundidade)
* **Localização**: [auth.js:L43](file:///c:/Users/mayco/Documents/GitHub/PIM_IV-Parte_Pratica/assets/js/auth.js#L43) e [auth.js:L63](file:///c:/Users/mayco/Documents/GitHub/PIM_IV-Parte_Pratica/assets/js/auth.js#L63)
* **Confiança**: Alta
* **Problema**: O token JWT recebido no login é salvo diretamente no `localStorage` do navegador para persistir a sessão.
* **Impacto**: O `localStorage` é acessível a qualquer script que rode no mesmo domínio. Caso ocorra uma vulnerabilidade de Cross-Site Scripting (XSS) no frontend do projeto, um script malicioso injetado poderá ler o token JWT diretamente do `localStorage` e enviá-lo ao atacante, levando ao sequestro de sessão completo da conta do aluno.
* **Evidência**:
  ```javascript
  localStorage.setItem('quest_jwt_token', data.token);
  ```
* **Remediação Recomendada**: Para máxima segurança (padrão corporativo), o token de autenticação deve ser enviado pelo backend através de um cookie HTTP de forma segura (`HttpOnly`, `Secure` e com política `SameSite=Strict`). Cookies marcados como `HttpOnly` não podem ser lidos por scripts Javascript no frontend, mitigando completamente o roubo de sessão via XSS.
