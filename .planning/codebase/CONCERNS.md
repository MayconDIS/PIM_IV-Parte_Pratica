---
mapped_date: "2026-04-30"
---
*Read in: [English](#english-version) | [Português](#versao-em-portugues)*

---
## English Version

# Concerns

### Known Issues & Debt
- **Hardcoded JWT Secret Key**: The token generation key is currently hardcoded in `Program.cs` as a developer fallback. For production deployment, this must be migrated to Environment Variables or .NET User Secrets to prevent credentials exposure.
- **State Synchronization**: While basic layout positions (node zoom/pan) are stored in `LocalStorage`, academic progress data (learned cards, user XP, level, and coin balance) must be synchronized continuously with the database rather than relying on browser-only cache.

---
## Versão em Português

# Preocupações (Concerns)

### Problemas Conhecidos e Débito Técnico
- **Chave Secreta JWT Hardcoded**: A chave para assinatura do token JWT está definida diretamente no código em `Program.cs`. Em ambiente de produção, esta chave deve ser extraída para Variáveis de Ambiente ou .NET User Secrets para evitar exposição de credenciais.
- **Sincronização de Estado**: Embora coordenadas e zoom do Mapa Neural usem `LocalStorage` (adequado para preferências visuais), todo o progresso acadêmico (XP, nível, moedas do aluno e cartas estudadas) deve ser sincronizado de forma consistente com o banco de dados através da API para evitar fraudes ou perdas de dados.
