# 🚀 Manual de Execução - Nex_TI (PIM IV)

Bem-vindo ao guia de execução do projeto **Nex_TI**. Este manual foi criado para guiar a banca avaliadora da UNIP no processo de rodar a aplicação localmente, cobrindo o Banco de Dados, o Backend em C# e o Frontend em HTML/JS.

---

## 1️⃣ Configurando o Banco de Dados (SQL Server)
O projeto utiliza o **Microsoft SQL Server** para armazenamento seguro dos dados e do algoritmo de repetição espaçada.

1. Abra o **SQL Server Management Studio (SSMS)** ou o **Azure Data Studio**.
2. Conecte-se à sua instância de servidor local (`localhost` ou `.\SQLEXPRESS`).
3. Vá em **File > Open > File...** e selecione o script localizado na pasta do projeto:
   `database/NexTI_DB.sql`
4. Pressione **F5** (ou clique em "Execute"). 
   *O script irá criar automaticamente o banco `NexTI_DB`, as tabelas `Usuarios`, `Fases`, `Flashcards`, e a tabela de ligação `Progresso_Flashcards` (Algoritmo SM-2), além de inserir todos os dados base das disciplinas.*

---

## 2️⃣ Rodando a API / Backend (C# .NET)
A API REST foi desenvolvida com **ASP.NET Core 10** e **Entity Framework Core**. Ela atua como a ponte entre o banco de dados e as telas do usuário.

1. Abra o **Visual Studio 2022** (ou VS Code).
2. Abra a pasta `backend/` do projeto.
3. Se necessário, abra o arquivo `backend/appsettings.json` e verifique a linha `"DefaultConnection"`. Caso o seu SQL Server exija senha (Autenticação SQL), altere a string para:
   `"Server=localhost;Database=NexTI_DB;User Id=SEU_USUARIO;Password=SUA_SENHA;TrustServerCertificate=True;"`
4. Abra o terminal na pasta `backend/` e execute os comandos:
   ```bash
   dotnet restore
   dotnet run
   ```
5. A API iniciará, geralmente no endereço `https://localhost:5001`. Você pode testar se está online acessando no navegador: `https://localhost:5001/api/status`.

---

## 3️⃣ Rodando o Frontend (Vanilla Web)
O Frontend foi construído com as melhores práticas de **WAI-ARIA** e semântica **HTML5**, operando sem a necessidade de frameworks pesados (apenas HTML, CSS Global e JavaScript Puro).

1. Abra a pasta raiz do projeto (`PIM_IV-Parte_Pratica`) no **VS Code**.
2. Utilize a extensão **Live Server** (clicando com o botão direito no arquivo `index.html` > *Open with Live Server*).
3. A experiência do aplicativo será iniciada através da *Splash Screen*, que fará o redirecionamento para o fluxo de **Login** e, posteriormente, para o **Terminal de Dashboard** e sistema de Flashcards.

*Nota: O script `assets/js/api.js` está configurado para buscar os dados diretamente na porta `:5001` (da API C#).*

---
> **Projeto Desenvolvido para o Projeto Integrado Multidisciplinar (PIM IV) - UNIP.**
> *Foco em Engenharia de Software, Modelagem de Banco de Dados e UX/UI.*
