---
name: "security-best-practices"
description: "Realiza revisões de melhores práticas de segurança e auditorias de código para encontrar vulnerabilidades (OWASP, injeção, XSS, autenticação, autorização, criptografia). Dispare quando o usuário pedir revisão de segurança, auditoria OWASP, relatório de vulnerabilidades ou suporte para codificação segura. Suporta python, javascript/typescript, go, csharp."
---

# Security Best Practices & Review Skill

Esta skill unifica as metodologias de **Revisão de Código baseada em OWASP** (segurança defensiva) e **Práticas Recomendadas de Desenvolvimento Seguro (Best Practices)**.

---

## 🎯 Escopo: Investigação vs. Relatório

Ao realizar uma auditoria de segurança ou aplicar melhores práticas:
1. **Audite em**: Apenas o código, componente ou diff fornecido pelo usuário.
2. **Pesquise em**: Todo o repositório para verificar se existem sanitizações upstream, middlewares ou variáveis de configuração que mitigam o problema.

**Regra de Ouro:** Relate apenas vulnerabilidades de **alta confiança** (onde a entrada de dados do atacante é realmente explorável e não controlada pelo servidor ou framework).

---

## 🚦 Níveis de Confiança para Vulnerabilidades

| Nível | Critério | Ação |
|-------|----------|--------|
| **ALTA** | Padrão vulnerável + Entrada de dados controlada por atacante confirmada. | **Reportar** com severidade |
| **MÉDIA** | Padrão potencialmente vulnerável, mas a origem dos dados é incerta. | **Anotar** como "Necessita de verificação" |
| **BAIXA** | Vulnerabilidade puramente teórica ou sugestão de defesa em profundidade. | **Não reportar** no resumo crítico |

### Padrões Seguros (Não Reportar)
* Arquivos de teste, código comentado ou documentação.
* Consultas parametrizadas (ex: ORM `filter(id=input)`, `Command.Parameters.AddWithValue`).
* Variáveis de ambiente (`os.environ`), settings do Django, constantes do app, etc. (controladas pelo servidor).

---

## 🚀 Fluxo de Trabalho (Workflow)

1. **Detectar o Contexto:** Identifique todas as linguagens (Python, JS, C#) e frameworks presentes no projeto.
2. **Carregar as Referências:**
   * Se for auditoria de segurança estruturada, consulte os guias OWASP em `references/` (ex: `injection.md`, `xss.md`, `authentication.md`).
   * Se for revisão de melhores práticas da linguagem, consulte `languages/` (ex: `python.md`, `javascript.md`) e arquivos genéricos em `references/` (ex: `javascript-general-web-frontend-security.md`).
3. **Gerar o Relatório:**
   * O relatório de segurança deve ser criado como um arquivo markdown (ex: `security_report.md`).
   * Inclua um resumo executivo, delineação por severidade (Crítico, Alto, Médio, Baixo) e a identificação do local exato no código (com números de linha).
4. **Executar Correções (Fixes):**
   * Corrija uma vulnerabilidade de cada vez.
   * Evite quebras de compatibilidade (código inseguro às vezes é necessário para retrocompatibilidade; planeje a correção de forma a não introduzir regressões).

---

## 📝 Referências Disponíveis (.agents/security-best-practices/)

### Guias de Vulnerabilidade (`references/`)
* [injection.md](file:///c:/Users/mayco/Documents/GitHub/PIM_IV-Parte_Pratica/.agents/security-best-practices/references/injection.md) - SQL, OS Command e Template Injections.
* [xss.md](file:///c:/Users/mayco/Documents/GitHub/PIM_IV-Parte_Pratica/.agents/security-best-practices/references/xss.md) - Reflected, Stored e DOM XSS.
* [authorization.md](file:///c:/Users/mayco/Documents/GitHub/PIM_IV-Parte_Pratica/.agents/security-best-practices/references/authorization.md) - Broken Object Level Authorization, IDOR.
* [authentication.md](file:///c:/Users/mayco/Documents/GitHub/PIM_IV-Parte_Pratica/.agents/security-best-practices/references/authentication.md) - Sessões, JWT e armazenamento seguro de senhas.
* [cryptography.md](file:///c:/Users/mayco/Documents/GitHub/PIM_IV-Parte_Pratica/.agents/security-best-practices/references/cryptography.md) - Algoritmos criptográficos e chaves.
* [file-security.md](file:///c:/Users/mayco/Documents/GitHub/PIM_IV-Parte_Pratica/.agents/security-best-practices/references/file-security.md) - Path Traversal e upload de arquivos.
* [ssrf.md](file:///c:/Users/mayco/Documents/GitHub/PIM_IV-Parte_Pratica/.agents/security-best-practices/references/ssrf.md) - Server-Side Request Forgery.
* [csrf.md](file:///c:/Users/mayco/Documents/GitHub/PIM_IV-Parte_Pratica/.agents/security-best-practices/references/csrf.md) - Cross-Site Request Forgery.

### Melhores Práticas por Linguagem e Stack (`references/` & `languages/`)
* [javascript-general-web-frontend-security.md](file:///c:/Users/mayco/Documents/GitHub/PIM_IV-Parte_Pratica/.agents/security-best-practices/references/javascript-general-web-frontend-security.md) - Boas práticas para o frontend JS.
* [javascript.md](file:///c:/Users/mayco/Documents/GitHub/PIM_IV-Parte_Pratica/.agents/security-best-practices/languages/javascript.md) - Regras de Node.js, Express, React e Next.js.
* [python-fastapi-web-server-security.md](file:///c:/Users/mayco/Documents/GitHub/PIM_IV-Parte_Pratica/.agents/security-best-practices/references/python-fastapi-web-server-security.md) - Boas práticas para servidores Python.
* [python.md](file:///c:/Users/mayco/Documents/GitHub/PIM_IV-Parte_Pratica/.agents/security-best-practices/languages/python.md) - Regras de segurança gerais do Python.

---

## 🔒 Diretrizes Gerais de Desenvolvimento Seguro

### Evite IDs Incrementais Públicos (IDOR Prevention)
Evite expor IDs numéricos sequenciais diretamente na URL (ex: `/api/usuarios/1`). Use identificadores únicos não sequenciais, como **UUID4** ou hashes aleatórios.

### Tratamento Criptográfico e de Senhas
* Nunca armazene senhas em texto puro. Use algoritmos de hash adaptativos com sal (como **BCrypt**, **Argon2** ou **PBKDF2**).
* Para geração de tokens de sessão ou chaves, utilize geradores de números pseudoaleatórios criptograficamente seguros (CSPRNG) (ex: biblioteca `Random` de criptografia em C# ou módulo `secrets` no Python).

### Camada de Transporte (TLS/HTTPS)
Em desenvolvimento local, atente-se para desativar atributos como `Secure` em cookies de sessão ou parâmetros que dependam obrigatoriamente de HTTPS se o ambiente não possuir certificados locais válidos, evitando travar a aplicação de testes do usuário.
