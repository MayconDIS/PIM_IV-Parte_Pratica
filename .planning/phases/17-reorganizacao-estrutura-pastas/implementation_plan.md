# Plano de Reorganização de Pastas do Repositório

Este plano descreve as mudanças necessárias para organizar os arquivos do projeto Nex_TI em suas pastas correspondentes, melhorando a modularidade e limpando a raiz do repositório.

## User Review Required

> [!IMPORTANT]
> Os scripts Python de geração de certificados (`gerar_certificado.py`) e apresentação (`gerar_pdf.py`), juntamente com suas fontes e modelos de PDF, serão movidos de `docs/` para a nova pasta `backend/Certificados/`. Isso exige alterar a chamada do script no backend em C# ([EndpointExtensions.cs](file:///c:/Users/mayco/Documents/GitHub/PIM_IV-Parte_Pratica/backend/Endpoints/EndpointExtensions.cs)) e ajustar as configurações do projeto ([NexTI_API.csproj](file:///c:/Users/mayco/Documents/GitHub/PIM_IV-Parte_Pratica/backend/NexTI_API.csproj)) para garantir que o script seja empacotado junto com a build do backend.

## Proposed Changes

---

### [Documentação]

Mover os manuais da raiz do projeto para o diretório de documentação `docs/`.

#### [MODIFY] [README.md](file:///c:/Users/mayco/Documents/GitHub/PIM_IV-Parte_Pratica/README.md)
* Atualizar a estrutura de pastas do repositório documentada no README.

#### [NEW] [MANUAL_DE_EXECUCAO.md](file:///c:/Users/mayco/Documents/GitHub/PIM_IV-Parte_Pratica/docs/MANUAL_DE_EXECUCAO.md)
* Versão movida do manual da raiz para `docs/`.

#### [NEW] [MANUAL_PRATICO.md](file:///c:/Users/mayco/Documents/GitHub/PIM_IV-Parte_Pratica/docs/MANUAL_PRATICO.md)
* Versão movida do manual da raiz para `docs/`.

#### [NEW] [MANUAL_TECNICO.md](file:///c:/Users/mayco/Documents/GitHub/PIM_IV-Parte_Pratica/docs/MANUAL_TECNICO.md)
* Versão movida do manual da raiz para `docs/`.

#### [DELETE] [MANUAL_DE_EXECUCAO.md](file:///c:/Users/mayco/Documents/GitHub/PIM_IV-Parte_Pratica/MANUAL_DE_EXECUCAO.md)
#### [DELETE] [MANUAL_PRATICO.md](file:///c:/Users/mayco/Documents/GitHub/PIM_IV-Parte_Pratica/MANUAL_PRATICO.md)
#### [DELETE] [MANUAL_TECNICO.md](file:///c:/Users/mayco/Documents/GitHub/PIM_IV-Parte_Pratica/MANUAL_TECNICO.md)

---

### [Backend e Scripts de Geração de PDF]

Criar uma pasta `backend/Certificados/` e mover todos os scripts e modelos do PDF para lá.

#### [NEW] [gerar_certificado.py](file:///c:/Users/mayco/Documents/GitHub/PIM_IV-Parte_Pratica/backend/Certificados/gerar_certificado.py)
* Versão portada de `docs/gerar_certificado.py`.
* Atualizar os caminhos internos de busca de fontes para serem dinâmicos e baseados na localização atual do script usando `os.path.dirname(os.path.abspath(__file__))`.

#### [NEW] [gerar_pdf.py](file:///c:/Users/mayco/Documents/GitHub/PIM_IV-Parte_Pratica/backend/Certificados/gerar_pdf.py)
* Versão movida de `docs/gerar_pdf.py`.

#### [NEW] [modelo.pdf](file:///c:/Users/mayco/Documents/GitHub/PIM_IV-Parte_Pratica/backend/Certificados/modelo.pdf)
* Modelo base de PDF movido de `docs/`.

#### [NEW] [certificado_modelo.pdf](file:///c:/Users/mayco/Documents/GitHub/PIM_IV-Parte_Pratica/backend/Certificados/certificado_modelo.pdf)
* Modelo gerado de certificado movido de `docs/`.

#### [NEW] [fonts/](file:///c:/Users/mayco/Documents/GitHub/PIM_IV-Parte_Pratica/backend/Certificados/fonts/)
* Pasta de fontes do certificado (`Orbitron-Variable.ttf`, etc.) movida de `docs/fonts/`.

#### [DELETE] [gerar_certificado.py](file:///c:/Users/mayco/Documents/GitHub/PIM_IV-Parte_Pratica/docs/gerar_certificado.py)
#### [DELETE] [gerar_pdf.py](file:///c:/Users/mayco/Documents/GitHub/PIM_IV-Parte_Pratica/docs/gerar_pdf.py)
#### [DELETE] [modelo.pdf](file:///c:/Users/mayco/Documents/GitHub/PIM_IV-Parte_Pratica/docs/modelo.pdf)
#### [DELETE] [certificado_modelo.pdf](file:///c:/Users/mayco/Documents/GitHub/PIM_IV-Parte_Pratica/docs/certificado_modelo.pdf)
#### [DELETE] [fonts/](file:///c:/Users/mayco/Documents/GitHub/PIM_IV-Parte_Pratica/docs/fonts/)

#### [MODIFY] [NexTI_API.csproj](file:///c:/Users/mayco/Documents/GitHub/PIM_IV-Parte_Pratica/backend/NexTI_API.csproj)
* Adicionar regras para empacotar e copiar a pasta `Certificados/` para a saída da compilação do C# (`bin/Debug/net10.0/Certificados/`).

#### [MODIFY] [EndpointExtensions.cs](file:///c:/Users/mayco/Documents/GitHub/PIM_IV-Parte_Pratica/backend/Endpoints/EndpointExtensions.cs)
* Simplificar o carregamento do script Python para buscá-lo diretamente a partir de `AppDomain.CurrentDomain.BaseDirectory` + `Certificados/gerar_certificado.py`.

## Verification Plan

### Automated Tests
* Rodar `dotnet build` na pasta `backend` para verificar se os arquivos são copiados com sucesso para a pasta de saída do build (`bin/Debug/net10.0/Certificados/`).
* Rodar o script Python `gerar_certificado.py` diretamente de sua nova pasta para garantir que ele baixa e carrega as fontes sem erros usando o novo caminho relativo.

### Manual Verification
* Verificar a geração de um certificado PDF chamando o endpoint do backend `/api/certificado/pdf` para atestar a comunicação integrada.
