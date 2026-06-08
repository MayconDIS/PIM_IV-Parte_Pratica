# Walkthrough - Reorganização de Pastas do Projeto

Este documento resume as alterações de estruturação de pastas do repositório Nex_TI para organização técnica dos arquivos e seus devidos testes de validação.

## O que Mudou

### 1. Documentação e Manuais da Banca

* Movidos da raiz do projeto para a pasta [docs/](file:///c:/Users/mayco/Documents/GitHub/PIM_IV-Parte_Pratica/docs/):
  * `MANUAL_DE_EXECUCAO.md` -> [docs/MANUAL_DE_EXECUCAO.md](file:///c:/Users/mayco/Documents/GitHub/PIM_IV-Parte_Pratica/docs/MANUAL_DE_EXECUCAO.md)
  * `MANUAL_PRATICO.md` -> [docs/MANUAL_PRATICO.md](file:///c:/Users/mayco/Documents/GitHub/PIM_IV-Parte_Pratica/docs/MANUAL_PRATICO.md)
  * `MANUAL_TECNICO.md` -> [docs/MANUAL_TECNICO.md](file:///c:/Users/mayco/Documents/GitHub/PIM_IV-Parte_Pratica/docs/MANUAL_TECNICO.md)

### 2. Módulos e Scripts de PDF

* Criada a pasta dedicada [backend/Certificados/](file:///c:/Users/mayco/Documents/GitHub/PIM_IV-Parte_Pratica/backend/Certificados/) para isolar a lógica executável de PDF do backend.
* Movidos os seguintes arquivos da pasta `docs/` para a nova pasta `backend/Certificados/`:
  * `gerar_certificado.py`
  * `gerar_pdf.py`
  * `certificado_modelo.pdf`
  * `modelo.pdf`
  * Diretório de fontes `fonts/`
* O script `gerar_certificado.py` foi atualizado para localizar suas fontes de forma dinâmica e relativa, tornando a execução portátil:

  ```python
  script_dir = os.path.dirname(os.path.abspath(__file__))
  font_dir = os.path.join(script_dir, "fonts")
  ```

### 3. Integração com o Backend C# (API)

* O arquivo de projeto [NexTI_API.csproj](file:///c:/Users/mayco/Documents/GitHub/PIM_IV-Parte_Pratica/backend/NexTI_API.csproj) foi atualizado para copiar dinamicamente a pasta `Certificados` e todos os seus recursos para o diretório de build do executável:

  ```xml
  <ItemGroup>
    <None Update="Certificados\**">
      <CopyToOutputDirectory>PreserveNewest</CopyToOutputDirectory>
    </None>
  </ItemGroup>
  ```

* O endpoint de PDF em [EndpointExtensions.cs](file:///c:/Users/mayco/Documents/GitHub/PIM_IV-Parte_Pratica/backend/Endpoints/EndpointExtensions.cs) foi simplificado para carregar o script de certificados a partir do diretório de build:

  ```csharp
  string scriptPath = Path.Combine(AppDomain.CurrentDomain.BaseDirectory, "Certificados", "gerar_certificado.py");
  ```

### 4. Árvore de Diretórios

* A árvore de diretórios do repositório foi atualizada nos três idiomas (Português, Inglês e Espanhol) no [README.md](file:///c:/Users/mayco/Documents/GitHub/PIM_IV-Parte_Pratica/README.md).

---

## O que foi Testado e Validação

1. **Compilação do Backend**:
   * O comando `dotnet build` foi executado na pasta `backend` com **sucesso** (0 Erros e 0 Avisos).
   * Verificou-se que a pasta de compilação `bin/Debug/net10.0/Certificados/` agora recebe automaticamente todos os arquivos copiados (`gerar_certificado.py`, `gerar_pdf.py`, `modelo.pdf`, `fonts/` e fontes variáveis do Google).

2. **Execução do Script Python**:
   * O script `gerar_certificado.py` foi executado em sua nova pasta e baixou/carregou as fontes `Orbitron`, `SpaceGrotesk` e `FiraCode` com sucesso via caminhos relativos ao arquivo do script, gerando o PDF corretamente.
