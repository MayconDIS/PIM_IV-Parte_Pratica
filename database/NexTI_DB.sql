-- =======================================================
-- CRIAÇÃO DO BANCO DE DADOS (Opcional, se já não tiver criado)
-- =======================================================
CREATE DATABASE NexTI_DB;
GO

USE NexTI_DB;
GO

-- =======================================================
-- 1. CRIAÇÃO DAS TABELAS
-- =======================================================

-- Tabela de Fases (Módulos e Bônus)
CREATE TABLE Fases (
    CodigoFase VARCHAR(20) PRIMARY KEY, -- Ex: 'fase1', 'bonus1'
    Descricao NVARCHAR(100) NOT NULL
);
GO

-- Tabela de Flashcards
CREATE TABLE Flashcards (
    Id INT IDENTITY(1,1) PRIMARY KEY,
    CodigoFase VARCHAR(20) NOT NULL,
    Frente NVARCHAR(MAX) NOT NULL,
    Verso NVARCHAR(MAX) NOT NULL,
    Dica NVARCHAR(255),
    Opcoes NVARCHAR(MAX) NULL, -- Alternativas do ENADE separadas por ;
    Correta INT NULL,          -- Índice da alternativa correta (0 a 3)
    
    -- Chave Estrangeira ligando a carta à fase correta
    CONSTRAINT FK_Flashcards_Fases FOREIGN KEY (CodigoFase) REFERENCES Fases(CodigoFase)
);
GO

-- Tabela de Usuários (Gamificação)
CREATE TABLE Usuarios (
    Id INT IDENTITY(1,1) PRIMARY KEY,
    Username NVARCHAR(50) NOT NULL UNIQUE,
    Email NVARCHAR(100) NOT NULL UNIQUE,
    SenhaHash NVARCHAR(255) NOT NULL,
    
    -- Lógica de Gamificação com Constraints
    Nivel INT DEFAULT 1 CHECK (Nivel >= 1),
    XP INT DEFAULT 0 CHECK (XP >= 0),
    Moedas INT DEFAULT 0 CHECK (Moedas >= 0),
    DataCriacao DATETIME DEFAULT GETDATE()
);
GO

-- Tabela de Progresso (Algoritmo SM-2)
CREATE TABLE Progresso_Flashcards (
    UsuarioId INT NOT NULL,
    FlashcardId INT NOT NULL,
    
    -- Parâmetros do Algoritmo SM-2
    Repeticoes INT DEFAULT 0 CHECK (Repeticoes >= 0),
    IntervaloDias FLOAT DEFAULT 0 CHECK (IntervaloDias >= 0),
    FatorFacilidade FLOAT DEFAULT 2.5 CHECK (FatorFacilidade >= 1.3),
    
    -- Controle de Agendamento
    DataProximaRevisao DATE DEFAULT CAST(GETDATE() AS DATE),
    
    PRIMARY KEY (UsuarioId, FlashcardId),
    CONSTRAINT FK_Progresso_Usuarios FOREIGN KEY (UsuarioId) REFERENCES Usuarios(Id),
    CONSTRAINT FK_Progresso_Flashcards FOREIGN KEY (FlashcardId) REFERENCES Flashcards(Id)
);
GO

-- =======================================================
-- 2. INSERINDO AS FASES NO BANCO
-- =======================================================
INSERT INTO Fases (CodigoFase, Descricao) VALUES 
('fase1', N'Lógica com Python'),
('fase2', N'Matemática e Estatística'),
('fase3', N'Infraestrutura e TIC'),
('fase4', N'Cibersegurança e LGPD'),
('fase5', N'Ética e Humanidades'),
('fase6', N'Algoritmos em Python'),
('fase7', N'Programação C'),
('fase8', N'Análise e Eng. de Sistemas'),
('fase9', N'Redes e Sist. Distribuídos'),
('fase10', N'Inteligência Artificial'),
('fase11', N'Banco de Dados e NoSQL'),
('fase12', N'POO com C#'),
('fase13', N'Web Responsivo e UX/UI Design'),
('fase14', N'Machine Learning'),
('fase15', N'Engenharia de Software Ágil'),
('fase16', N'Web e App com .NET'),
('fase17', N'Desenvolvimento Mobile'),
('fase18', N'Programação BD'),
('fase19', N'Cloud Computing e DevOps'),
('fase20', N'Empreendedorismo em TI'),
('fase21', N'ENADE Geral e Negócios'),
('fase22', N'ENADE Específicos ADS'),
('bonus1', N'Curiosidades & Hackers'),
('bonus2', N'História e Cultura Tech'),
('bonus3', N'Carreira e Mercado'),
('bonus4', N'Mercado das Startups');
GO

-- =======================================================
-- 3. INSERINDO OS FLASHCARDS (GERADO AUTOMATICAMENTE)
-- =======================================================

-- --- FASE1 ---
INSERT INTO Flashcards (CodigoFase, Frente, Verso, Dica, Opcoes, Correta) VALUES
('fase1', N'O que é uma Variável?', N'Um espaço reservado na memória para armazenar um dado.', N'Disciplina: Lógica com Python.', NULL, NULL),
('fase1', N'Para que serve a estrutura ''for'' em Python?', N'Para criar um laço de repetição iterável (loop).', N'Percorre listas e sequências.', NULL, NULL),
('fase1', N'O que é um Dicionário?', N'Uma estrutura de dados baseada em pares de ''chave: valor''.', N'Usa chaves {}. Ex: {''curso'': ''ADS''}', NULL, NULL),
('fase1', N'Qual a diferença entre = e == em programação?', N'= é para Atribuição. == é para Comparação (Verificar se é igual).', N'Erro muito comum em lógica básica.', NULL, NULL),
('fase1', N'O que faz a palavra ''def'' em Python?', N'Serve para definir/criar uma nova função.', N'Ex: def calcular_media():', NULL, NULL),
('fase1', N'Para que serve a função len()?', N'Para retornar o tamanho (quantidade de itens) de uma lista ou string.', N'Vem da palavra ''length'' (comprimento).', NULL, NULL),
('fase1', N'O que é uma Lista (List) em Python?', N'Uma coleção ordenada e mutável de itens.', N'Usa colchetes []. Ex: notas = [10, 8, 9]', NULL, NULL),
('fase1', N'O que faz o método .append()?', N'Adiciona um novo item ao final de uma lista existente.', N'Muito usado dentro de laços de repetição.', NULL, NULL),
('fase1', N'Para que serve o if/elif/else?', N'Para criar estruturas de decisão (condicionais) na lógica do código.', N'Se (if) chover, levo guarda-chuva. Senão (else)...', NULL, NULL),
('fase1', N'O que é o laço ''while''?', N'Um loop que continua executando enquanto uma condição for Verdadeira (True).', N'Cuidado com o loop infinito!', NULL, NULL),
('fase1', N'Qual a diferença entre int e float?', N'Int é número inteiro (ex: 5). Float é número decimal/quebrado (ex: 5.5).', N'Tipos de dados primitivos.', NULL, NULL),
('fase1', N'O que é um dado Booleano (bool)?', N'Um tipo de dado que só possui dois valores: True (Verdadeiro) ou False (Falso).', N'Base da álgebra booleana.', NULL, NULL),
('fase1', N'Como se faz um comentário em Python?', N'Usando o símbolo de hashtag (#) antes do texto.', N'O computador ignora essa linha na execução.', NULL, NULL),
('fase1', N'Para que serve a função input()?', N'Para capturar um dado ou texto digitado pelo usuário no teclado.', N'Sempre retorna o dado como String (texto).', NULL, NULL),
('fase1', N'Para que serve a função print()?', N'Para exibir mensagens ou valores na tela (console).', N'O ''Olá, Mundo!'' usa essa função.', NULL, NULL),
('fase1', N'O que é uma função Lambda?', N'Uma função anônima e rápida, escrita em uma única linha.', N'Usada para lógicas curtas e matemáticas.', NULL, NULL),
('fase1', N'Para que serve o bloco try/except?', N'Para tratar erros (exceções) e evitar que o programa ''crache'' e feche sozinho.', N'Tente (try) fazer isso, se der erro (except) avise.', NULL, NULL),
('fase1', N'O que faz o comando ''import''?', N'Traz bibliotecas, módulos ou arquivos externos para dentro do seu código atual.', N'Ex: import math, import random', NULL, NULL),
('fase1', N'Qual a diferença entre ''=='' e ''is''?', N'''=='' compara se o valor é igual. ''is'' compara se são o mesmo objeto na memória.', N'Conceito avançado de gerenciamento de memória.', NULL, NULL),
('fase1', N'O que é Slicing (Fatiamento) em Python?', N'Uma técnica para extrair pedaços de uma string ou lista usando [início:fim].', N'Ex: texto[0:4] pega as primeiras 4 letras.', NULL, NULL);
GO

-- --- FASE2 ---
INSERT INTO Flashcards (CodigoFase, Frente, Verso, Dica, Opcoes, Correta) VALUES
('fase2', N'O que é a Média Aritmética?', N'A soma de todos os valores dividida pela quantidade deles.', N'Disciplina: Matemática e Estatística.', NULL, NULL),
('fase2', N'O que é a Mediana em um conjunto de dados?', N'É o valor que fica exatamente no meio quando os dados estão em ordem crescente.', N'Não é afetada por valores extremos (outliers).', NULL, NULL),
('fase2', N'O que é a Moda estatística?', N'É o valor que aparece com maior frequência num conjunto de dados.', N'Pode haver mais de uma moda (bimodal).', NULL, NULL),
('fase2', N'Para que serve o Desvio Padrão?', N'Para medir a dispersão dos dados, ou seja, o quão distantes eles estão da média.', N'Desvio baixo = dados muito próximos da média.', NULL, NULL),
('fase2', N'O que é a Variância?', N'É o quadrado do desvio padrão, indicando o quão longe os valores se encontram do valor esperado.', N'Base para análises estatísticas profundas.', NULL, NULL),
('fase2', N'O que estuda a Lógica Proposicional?', N'Proposições que podem ser classificadas como Verdadeiras ou Falsas.', N'Base para a programação de computadores.', NULL, NULL),
('fase2', N'Na Tabela Verdade, o que faz o operador AND (E)?', N'Retorna Verdadeiro apenas se TODAS as condições forem verdadeiras.', N'Multiplicação lógica.', NULL, NULL),
('fase2', N'Na Tabela Verdade, o que faz o operador OR (OU)?', N'Retorna Verdadeiro se PELO MENOS UMA das condições for verdadeira.', N'Soma lógica.', NULL, NULL),
('fase2', N'Na Tabela Verdade, o que faz o operador NOT (NÃO)?', N'Inverte o valor lógico da proposição (Verdadeiro vira Falso e vice-versa).', N'Negação.', NULL, NULL),
('fase2', N'O que é um Grafo?', N'Conjunto de Vértices (nós) conectados por Arestas (linhas).', N'Usado em GPS, mapas e redes.', NULL, NULL),
('fase2', N'Num Grafo, o que é um Vértice?', N'É a entidade, ponto ou nó que armazena a informação.', N'Pense nas cidades num mapa.', NULL, NULL),
('fase2', N'Num Grafo, o que é uma Aresta?', N'É a linha ou caminho que conecta dois vértices.', N'Pense nas estradas que ligam as cidades.', NULL, NULL),
('fase2', N'O que é uma Árvore na Teoria dos Grafos?', N'Um grafo conectado e sem ciclos (sem caminhos fechados que voltem à origem).', N'Usada na organização de pastas no PC.', NULL, NULL),
('fase2', N'O que é o Teorema de Bayes?', N'Fórmula matemática usada para calcular a probabilidade condicional de um evento baseado em conhecimentos anteriores.', N'Base matemática para filtros de Spam.', NULL, NULL),
('fase2', N'Na Teoria dos Conjuntos, o que é a União (A ∪ B)?', N'A junção de todos os elementos do conjunto A com todos os do conjunto B.', N'Soma de conjuntos sem repetir os iguais.', NULL, NULL),
('fase2', N'O que é a Interseção de Conjuntos (A ∩ B)?', N'Apenas os elementos que existem SIMULTANEAMENTE no conjunto A e no conjunto B.', N'O que eles têm em comum.', NULL, NULL),
('fase2', N'O que é uma Matriz (Álgebra Linear)?', N'Um arranjo bidimensional de números organizados em linhas e colunas.', N'Essencial para a computação gráfica.', NULL, NULL),
('fase2', N'O que é um Vetor?', N'Uma matriz de uma única linha ou única coluna. Na física, possui magnitude e direção.', N'Usado como array na programação.', NULL, NULL),
('fase2', N'O que é uma Função Linear?', N'Uma função cujo gráfico forma uma linha reta (f(x) = ax + b).', N'Crescimento constante.', NULL, NULL),
('fase2', N'O que é uma Função Exponencial?', N'Uma função onde a variável está no expoente, gerando um crescimento ou decaimento curvo e muito rápido.', N'A forma como os vírus se espalham.', NULL, NULL);
GO

-- --- FASE3 ---
INSERT INTO Flashcards (CodigoFase, Frente, Verso, Dica, Opcoes, Correta) VALUES
('fase3', N'O que é a Placa-Mãe (Motherboard)?', N'A placa de circuito principal que conecta todos os componentes do computador.', N'Disciplinas: Infraestrutura e Hardware.', NULL, NULL),
('fase3', N'Para que serve a CPU (Processador)?', N'É o cérebro do computador, responsável por processar e executar as instruções e cálculos.', N'Central Processing Unit.', NULL, NULL),
('fase3', N'Qual a diferença entre RAM e HD/SSD?', N'RAM é a memória de curto prazo (volátil). HD/SSD é o armazenamento permanente.', N'Desligou o PC, a RAM apaga tudo.', NULL, NULL),
('fase3', N'O que é a BIOS / UEFI?', N'O primeiro software que é executado ao ligar o PC, responsável por acordar e testar o hardware (POST).', N'Basic Input/Output System.', NULL, NULL),
('fase3', N'O que é uma Placa de Vídeo (GPU)?', N'O componente especializado na renderização e processamento pesado de gráficos e imagens.', N'Graphic Processing Unit.', NULL, NULL),
('fase3', N'Para que serve a Fonte de Alimentação?', N'Converter a energia elétrica da tomada (Corrente Alternada) para a energia usada pelo PC (Corrente Contínua).', N'O coração elétrico da máquina.', NULL, NULL),
('fase3', N'O que é um Sistema Operacional (SO)?', N'O software base que gere o hardware e permite executar outros programas e interfaces.', N'Ex: Windows, Linux, macOS.', NULL, NULL),
('fase3', N'O que é o Kernel de um Sistema Operacional?', N'O núcleo do SO, que faz a ponte direta entre o software (aplicativos) e o hardware (CPU, memória).', N'O motor invisível do SO.', NULL, NULL),
('fase3', N'O que é a Virtualização?', N'A tecnologia que permite criar versões virtuais de recursos físicos, como correr um Windows dentro do Linux.', N'A base da Computação em Nuvem.', NULL, NULL),
('fase3', N'O que é uma Máquina Virtual (VM)?', N'Um ficheiro que atua como um computador físico independente, com o seu próprio SO, correndo isolado.', N'Um PC dentro do PC.', NULL, NULL),
('fase3', N'O que é um Hypervisor?', N'O software, firmware ou hardware que cria e executa as máquinas virtuais.', N'O gestor das VMs (Ex: VirtualBox).', NULL, NULL),
('fase3', N'O que é Computação em Nuvem?', N'O fornecimento de serviços de computação (servidores, armazenamento, bancos) através da Internet.', N'AWS, Azure, Google Cloud.', NULL, NULL),
('fase3', N'O que é um Servidor?', N'Um computador muito potente e ligado 24/7 projetado para fornecer serviços e recursos a outros computadores (clientes).', N'A espinha dorsal da web.', NULL, NULL),
('fase3', N'O que é um Data Center?', N'Um local físico (prédio ou sala) focado em abrigar centenas de servidores e infraestruturas de TI.', N'Onde a nuvem mora fisicamente.', NULL, NULL),
('fase3', N'O que é o Endereço MAC?', N'O identificador físico e único de fábrica da placa de rede de um dispositivo.', N'Media Access Control.', NULL, NULL),
('fase3', N'Qual a diferença entre Software e Firmware?', N'Software são os programas normais. Firmware é o software gravado diretamente na memória do hardware para o controlar.', N'O sistema do controlo remoto da TV é um firmware.', NULL, NULL),
('fase3', N'O que são periféricos de Entrada e Saída (I/O)?', N'Entrada envia dados ao PC (Teclado/Rato). Saída mostra dados do PC ao utilizador (Monitor/Impressora).', N'I/O (Input / Output).', NULL, NULL),
('fase3', N'O que é o Sistema de Arquivos?', N'O método que o Sistema Operacional usa para controlar como os dados são guardados e recuperados no disco.', N'Ex: NTFS no Windows, ext4 no Linux.', NULL, NULL),
('fase3', N'O que é o RAID em armazenamento?', N'A combinação de vários discos rígidos físicos numa única unidade lógica para melhorar o desempenho ou a segurança (cópia espelho).', N'Redundant Array of Independent Disks.', NULL, NULL),
('fase3', N'O que significa formatação de baixo nível?', N'A criação de trilhas e setores no disco magnético na fábrica. A formatação que fazemos em casa é a de alto nível.', N'O reset físico absoluto do disco.', NULL, NULL);
GO

-- --- FASE4 ---
INSERT INTO Flashcards (CodigoFase, Frente, Verso, Dica, Opcoes, Correta) VALUES
('fase4', N'O que significa a sigla LGPD?', N'Lei Geral de Proteção de Dados (Lei 13.709/2018).', N'Disciplinas: Cibersegurança e Legislação.', NULL, NULL),
('fase4', N'Na LGPD, quem é o Titular dos Dados?', N'A pessoa singular (física) a quem se referem os dados pessoais recolhidos.', N'O cidadão, o dono da informação.', NULL, NULL),
('fase4', N'O que é um Dado Pessoal Sensível?', N'Dado que revela origem racial, religião, filiação política, saúde ou biometria.', N'Dados que podem causar discriminação.', NULL, NULL),
('fase4', N'Quem é o Encarregado de Dados (DPO)?', N'O profissional indicado pela empresa para ser o canal de comunicação sobre a proteção de dados.', N'Data Protection Officer.', NULL, NULL),
('fase4', N'O que é Phishing?', N'Ataque de engenharia social que usa e-mails ou sites falsos para roubar informações da vítima.', N'Pense em ''pescar'' a senha do utilizador.', NULL, NULL),
('fase4', N'O que é um Ransomware?', N'Um malware que criptografa os dados do computador e exige o pagamento de um resgate (geralmente em Bitcoin).', N'Ransom = Resgate.', NULL, NULL),
('fase4', N'O que é um ataque DDoS?', N'Enviar milhares de requisições simultâneas para derrubar um servidor por sobrecarga.', N'Distributed Denial of Service.', NULL, NULL),
('fase4', N'O que é um Cavalo de Troia (Trojan)?', N'Malware disfarçado de programa legítimo para abrir as ''portas'' do PC ao atacante.', N'Presente de grego.', NULL, NULL),
('fase4', N'Qual a diferença entre Vírus e Worm?', N'O vírus precisa que o utilizador execute o ficheiro para o infetar. O Worm (verme) espalha-se sozinho pela rede.', N'Worms são autónomos.', NULL, NULL),
('fase4', N'O que é a Engenharia Social no hacking?', N'Técnica de manipulação psicológica para enganar pessoas e fazê-las entregar senhas ou dados confidenciais.', N'Hackear a mente humana.', NULL, NULL),
('fase4', N'Para que serve um Firewall?', N'Barreira de segurança que monitoriza e bloqueia o tráfego de rede de entrada e saída baseado em regras.', N'Parede de fogo da rede.', NULL, NULL),
('fase4', N'O que é uma VPN?', N'Uma rede privada virtual que cria um túnel criptografado, ocultando o endereço IP e o tráfego do utilizador.', N'Virtual Private Network.', NULL, NULL),
('fase4', N'O que é Criptografia Simétrica?', N'Usa a MESMA chave secreta tanto para encriptar quanto para desencriptar a mensagem.', N'Rápida, mas difícil de partilhar a chave em segurança.', NULL, NULL),
('fase4', N'O que é Criptografia Assimétrica?', N'Usa um par de chaves: uma Chave Pública (para encriptar) e uma Chave Privada (para desencriptar).', N'A base da segurança na Internet moderna.', NULL, NULL),
('fase4', N'O que é uma função de Hash?', N'Algoritmo de mão única que transforma qualquer dado numa string de tamanho fixo, impossível de reverter.', N'Usada para guardar palavras-passe no banco de dados.', NULL, NULL),
('fase4', N'O que é a Autenticação de 2 Fatores (2FA)?', N'Adicionar uma camada extra de segurança (ex: SMS, Token, Biometria) além da palavra-passe padrão.', N'Algo que você sabe + Algo que você tem.', NULL, NULL),
('fase4', N'O que é um Teste de Invasão (PenTest)?', N'Um ataque cibernético simulado e autorizado num sistema para encontrar e corrigir vulnerabilidades.', N'Realizado por White Hats (Hackers Éticos).', NULL, NULL),
('fase4', N'O que é uma vulnerabilidade Zero-Day?', N'Uma falha de software recém-descoberta que os criadores do sistema ainda não tiveram tempo de corrigir (zero dias).', N'Ataques indetectáveis no momento.', NULL, NULL),
('fase4', N'O que é a Regra de Backup 3-2-1?', N'Ter 3 cópias dos dados, em 2 tipos de média diferentes, sendo 1 cópia fora da empresa (offsite/nuvem).', N'Garante a recuperação total em caso de desastre.', NULL, NULL),
('fase4', N'Qual a função do protocolo HTTPS?', N'Permitir a navegação segura na web, criptografando a comunicação entre o navegador e o servidor com certificados SSL/TLS.', N'O cadeado verde na barra de endereço.', NULL, NULL);
GO

-- --- FASE5 ---
INSERT INTO Flashcards (CodigoFase, Frente, Verso, Dica, Opcoes, Correta) VALUES
('fase5', N'O que é a Inclusão Digital?', N'A democratização do acesso às tecnologias de informação para todas as camadas da sociedade.', N'Disciplinas: Ética e Sociedade.', NULL, NULL),
('fase5', N'O que é o conceito de Green IT (TI Verde)?', N'O conjunto de práticas para reduzir o impacto ambiental da tecnologia (consumo de energia, lixo eletrônico).', N'Sustentabilidade na tecnologia.', NULL, NULL),
('fase5', N'O que garante a Propriedade Intelectual em Software?', N'Protege o código-fonte de um sistema como direitos de autor, impedindo a cópia ou pirataria comercial.', N'Software é tratado como uma obra literária por lei.', NULL, NULL),
('fase5', N'O que é o Viés Algorítmico (Bias)?', N'Quando uma IA reproduz discriminações e preconceitos humanos porque foi treinada com dados históricos falhos.', N'O algoritmo herda os defeitos da sociedade.', NULL, NULL),
('fase5', N'Qual a diferença entre Open Source e Software Proprietário?', N'Open Source tem o código-fonte aberto e colaborativo. Proprietário é fechado, patenteado e pertence a uma empresa.', N'Linux vs Windows.', NULL, NULL),
('fase5', N'O que é o Copyleft?', N'Licença que permite o livre uso, modificação e partilha de uma obra, desde que as versões alteradas mantenham as mesmas liberdades.', N'O oposto do Copyright restritivo.', NULL, NULL),
('fase5', N'O que é o Cyberbullying?', N'A intimidação, assédio ou violência psicológica realizada através da internet e redes sociais.', N'Bullying digital.', NULL, NULL),
('fase5', N'O que é um Deepfake?', N'Vídeos ou áudios gerados por IA que substituem o rosto ou a voz de uma pessoa para criar situações falsas e realistas.', N'Ameaça gigante à política e privacidade.', NULL, NULL),
('fase5', N'O que é a Obsolescência Programada?', N'A tática da indústria de fabricar aparelhos desenhados para quebrarem ou ficarem inúteis rapidamente, forçando uma nova compra.', N'Telemóvel que fica lento após 2 anos.', NULL, NULL),
('fase5', N'O que é o Lixo Eletrônico (E-waste)?', N'Equipamentos tecnológicos descartados incorretamente que libertam metais pesados tóxicos no solo.', N'O lado negro do consumo tecnológico.', NULL, NULL),
('fase5', N'O que são Fake News?', N'Notícias falsas ou distorcidas disseminadas rapidamente em massa pelas redes sociais para manipular opiniões.', N'A desinformação digital.', NULL, NULL),
('fase5', N'O que é Privacidade Digital?', N'O direito do utilizador de controlar como as suas informações pessoais são recolhidas e usadas na internet.', N'O seu histórico de pesquisa é seu.', NULL, NULL),
('fase5', N'O que são as normas WCAG (Acessibilidade Web)?', N'Diretrizes internacionais que garantem que sites e aplicações possam ser usados por pessoas com deficiências (visuais, motoras, etc).', N'Web Content Accessibility Guidelines.', NULL, NULL),
('fase5', N'Qual o foco da Ergonomia na TI?', N'A conceção de estações de trabalho (cadeira, monitor, teclado) para evitar lesões por esforço repetitivo em profissionais de tecnologia.', N'Cuidar da saúde do desenvolvedor.', NULL, NULL),
('fase5', N'Qual o impacto social da Automação e da IA?', N'A eliminação de empregos operacionais antigos, mas simultaneamente a criação de novas especializações tecnológicas.', N'A Quarta Revolução Industrial.', NULL, NULL),
('fase5', N'O que é Netiqueta?', N'O conjunto de regras de etiqueta e boa educação que governam o comportamento social na internet.', N'Não escrever tudo em CAIXA ALTA (Gritar).', NULL, NULL),
('fase5', N'O que é a Sociedade da Informação?', N'Uma sociedade onde a criação, distribuição e uso da informação tornaram-se a atividade económica e cultural mais importante.', N'A Era da Informação.', NULL, NULL),
('fase5', N'O que é o Tecnocentrismo?', N'A crença ilusória de que a tecnologia, por si só, resolverá todos os problemas da humanidade.', N'A tecnologia é ferramenta, não milagre.', NULL, NULL),
('fase5', N'O que é a Exclusão Digital?', N'A desigualdade entre aqueles que têm fácil acesso à tecnologia e aqueles que não têm, agravando a pobreza e o desemprego.', N'A consequência da falta de Inclusão Digital.', NULL, NULL),
('fase5', N'Como a Tecnologia afeta os Direitos Humanos?', N'Pode promovê-los (liberdade de expressão) ou ameaçá-los (vigilância estatal em massa e invasão de privacidade).', N'A tecnologia como uma faca de dois gumes.', NULL, NULL);
GO

-- --- FASE6 ---
INSERT INTO Flashcards (CodigoFase, Frente, Verso, Dica, Opcoes, Correta) VALUES
('fase6', N'O que é a estrutura de dados Pilha (Stack)?', N'O último elemento a entrar é o primeiro a sair (LIFO - Last In, First Out).', N'Disciplina: Algoritmos e Dados. Ex: Botão ''Desfazer''.', NULL, NULL),
('fase6', N'O que é a Fila (Queue)?', N'O primeiro elemento a entrar é o primeiro a sair (FIFO - First In, First Out).', N'Ex: Fila de impressão numa impressora.', NULL, NULL),
('fase6', N'O que é um Algoritmo de Ordenação?', N'Um método para organizar dados numa sequência lógica (ex: crescente ou decrescente).', N'Ex: Bubble Sort, Quick Sort.', NULL, NULL),
('fase6', N'O que é a Complexidade ''Big O''?', N'Uma notação matemática para medir a eficiência de um algoritmo (tempo e memória) à medida que os dados crescem.', N'O(1) é excelente, O(n²) é muito lento.', NULL, NULL),
('fase6', N'O que é uma Árvore Binária?', N'Estrutura de dados onde cada nó tem no máximo dois filhos (ramo esquerdo e direito).', N'Excelente para pesquisas rápidas.', NULL, NULL),
('fase6', N'O que é uma Lista Ligada (Linked List)?', N'Uma sequência de elementos onde cada nó contém um valor e um ''ponteiro'' para o próximo nó da lista.', N'Não usa blocos de memória contíguos como os Arrays.', NULL, NULL),
('fase6', N'O que é uma Tabela de Dispersão (Hash Table)?', N'Estrutura que mapeia chaves para valores usando uma função matemática (Hash), permitindo pesquisas ultra-rápidas.', N'A base dos Dicionários em Python.', NULL, NULL),
('fase6', N'Como funciona a Pesquisa Binária (Binary Search)?', N'Procura um item dividindo repetidamente uma lista ORDENADA pela metade até encontrar o valor.', N'Muito mais rápido que olhar um por um.', NULL, NULL),
('fase6', N'Como funciona a Pesquisa Linear?', N'Percorre a lista elemento por elemento, do início ao fim, até encontrar o que procura.', N'Simples, mas lento em listas gigantes (O(n)).', NULL, NULL),
('fase6', N'O que é a Recursividade?', N'É quando uma função se invoca a si mesma repetidamente até atingir uma condição de paragem.', N'Muito usada para calcular fatoriais e percorrer árvores.', NULL, NULL),
('fase6', N'Como funciona o algoritmo Bubble Sort?', N'Compara pares vizinhos e troca-os se estiverem na ordem errada, fazendo o maior valor ''flutuar'' para o final.', N'O algoritmo de ordenação mais simples e menos eficiente.', NULL, NULL),
('fase6', N'O que é o algoritmo Merge Sort?', N'Usa a técnica ''Dividir para Conquistar'', cortando a lista em metades e depois unindo-as já ordenadas.', N'Muito eficiente e estável (O(n log n)).', NULL, NULL),
('fase6', N'O que é o Quick Sort?', N'Escolhe um elemento como ''Pivô'' e particiona a lista, colocando os menores à esquerda e os maiores à direita.', N'O algoritmo de ordenação mais famoso do mundo.', NULL, NULL),
('fase6', N'O que significa um algoritmo ter complexidade O(1)?', N'Significa ''Tempo Constante''. O algoritmo demora exatamente o mesmo tempo, quer a lista tenha 10 ou 1 milhão de itens.', N'O Santo Graal da eficiência.', NULL, NULL),
('fase6', N'O que é a Programação Dinâmica (Memoization)?', N'Técnica de otimização que guarda os resultados de funções pesadas numa cache para não ter de os calcular de novo.', N'Memória salva processamento.', NULL, NULL),
('fase6', N'O que é um Algoritmo Guloso (Greedy)?', N'Toma a melhor decisão local disponível no momento imediato, na esperança de que leve à melhor solução global.', N'Nem sempre entrega o cenário perfeito, mas é rápido.', NULL, NULL),
('fase6', N'Em Python, o que é uma Tupla (Tuple)?', N'Uma coleção de itens ordenados, mas que é IMUTÁVEL (não pode ser alterada depois de criada).', N'Usa parênteses (). Ex: coordenadas = (x, y)', NULL, NULL),
('fase6', N'Em Python, o que é um Conjunto (Set)?', N'Uma coleção não ordenada de itens ÚNICOS (não permite valores duplicados).', N'Usa chaves {}. Excelente para remover repetições.', NULL, NULL),
('fase6', N'Qual é a estrutura LIFO?', N'Last In, First Out (Último a entrar, primeiro a sair).', N'É a regra da estrutura de Pilha (Stack).', NULL, NULL),
('fase6', N'Qual é a estrutura FIFO?', N'First In, First Out (Primeiro a entrar, primeiro a sair).', N'É a regra da estrutura de Fila (Queue).', NULL, NULL);
GO

-- --- FASE7 ---
INSERT INTO Flashcards (CodigoFase, Frente, Verso, Dica, Opcoes, Correta) VALUES
('fase7', N'O que são Ponteiros (Pointers) em C?', N'Variáveis especiais que, em vez de guardar um valor, guardam o ENDEREÇO DE MEMÓRIA de outra variável.', N'Disciplina: Programação em C.', NULL, NULL),
('fase7', N'Para que serve a biblioteca <stdio.h>?', N'Standard Input/Output. É obrigatória para usar as funções básicas de entrada e saída, como printf e scanf.', N'O cabeçalho (header) mais famoso do C.', NULL, NULL),
('fase7', N'Para que serve a função malloc()?', N'Memory Allocation. Serve para alocar blocos de memória dinamicamente enquanto o programa está a correr.', N'Pede memória emprestada ao sistema.', NULL, NULL),
('fase7', N'O que a função free() faz?', N'Liberta a memória que foi alocada dinamicamente com o malloc(), devolvendo-a ao sistema operativo.', N'Evita o Memory Leak (Fuga de Memória).', NULL, NULL),
('fase7', N'O que é um Struct em C?', N'Uma estrutura que agrupa diferentes tipos de variáveis sob um único nome.', N'É o ''avô'' das Classes da Orientação a Objetos.', NULL, NULL),
('fase7', N'Como declaramos o tipo ''String'' em C?', N'O C não tem um tipo ''String'' nativo. Usamos um Array (vetor) de caracteres (char).', N'Ex: char nome[50];', NULL, NULL),
('fase7', N'O que faz o operador ''&'' numa variável em C?', N'Retorna o endereço de memória físico onde essa variável está guardada.', N'Muito usado dentro do scanf().', NULL, NULL),
('fase7', N'O que faz o operador ''*'' associado a um ponteiro?', N'Faz a ''desreferenciação'', acedendo ao valor que está guardado naquele endereço de memória.', N'Lê o conteúdo apontado.', NULL, NULL),
('fase7', N'O que faz a função printf()?', N'Imprime texto formatado e valores de variáveis no ecrã (console).', N'Print Formatted.', NULL, NULL),
('fase7', N'O que faz a função scanf()?', N'Lê os dados formatados introduzidos pelo utilizador através do teclado.', N'Scan Formatted.', NULL, NULL),
('fase7', N'O que é um Array (Vetor) em C?', N'Uma estrutura que armazena uma coleção sequencial de elementos do MESMO TIPO de dados.', N'A primeira posição é sempre o índice [0].', NULL, NULL),
('fase7', N'O que é uma Matriz em C?', N'Um Array bidimensional (ou com mais dimensões), organizado em linhas e colunas.', N'Ex: int matriz[3][3];', NULL, NULL),
('fase7', N'O que é o GCC?', N'GNU Compiler Collection. É o compilador mais utilizado no mundo para transformar código C em linguagem máquina.', N'Traduz o texto para binário.', NULL, NULL),
('fase7', N'Para que serve a diretiva #define?', N'Usada para criar macros ou definir constantes globais que não mudam durante o programa.', N'Ex: #define PI 3.1415', NULL, NULL),
('fase7', N'O que marca o fim de uma string (char array) em C?', N'O caractere nulo (Null Terminator), representado por ''\0''.', N'Diz ao programa onde a frase termina.', NULL, NULL),
('fase7', N'Como funciona o loop ''do-while''?', N'Executa o bloco de código PELO MENOS UMA VEZ antes de verificar se a condição é verdadeira.', N'A verificação fica no final.', NULL, NULL),
('fase7', N'Para que serve o comando ''switch-case''?', N'Substitui uma longa cadeia de ''if-else'', permitindo testar o valor de uma variável contra vários casos específicos.', N'Ideal para menus de opções.', NULL, NULL),
('fase7', N'Para que serve a palavra-chave ''break'' num switch?', N'Para interromper a execução e sair do bloco switch; caso contrário, executará os casos seguintes em cascata.', N'Trava a cascata.', NULL, NULL),
('fase7', N'O que é Passagem por Valor numa função?', N'A função recebe apenas uma CÓPIA da variável. Alterar o valor dentro da função não afeta a variável original.', N'Seguro, mas gasta memória duplicada.', NULL, NULL),
('fase7', N'O que é Passagem por Referência numa função?', N'A função recebe o PONTEIRO (endereço) da variável original. Qualquer alteração afeta os dados reais do programa.', N'Rápido e afeta a raiz do dado.', NULL, NULL);
GO

-- --- FASE8 ---
INSERT INTO Flashcards (CodigoFase, Frente, Verso, Dica, Opcoes, Correta) VALUES
('fase8', N'O que são Requisitos Funcionais?', N'Descrevem o que o sistema DEVE FAZER (as suas funções). Ex: ''O sistema deve emitir faturas''.', N'Disciplina: Análise e Eng. de Sistemas.', NULL, NULL),
('fase8', N'O que são Requisitos Não Funcionais?', N'Descrevem COMO o sistema deve ser, as suas qualidades e restrições. Ex: ''O ecrã deve carregar em 1 segundo''.', N'Focam em performance, segurança, design.', NULL, NULL),
('fase8', N'O que é um Diagrama de Casos de Uso (UML)?', N'Um desenho que mostra as interações entre os Utilizadores (Atores) e o Sistema.', N'Foca nas ações principais do ponto de vista do utilizador.', NULL, NULL),
('fase8', N'Qual a diferença entre a Metodologia Ágil e o modelo Cascata (Waterfall)?', N'O Ágil é flexível e iterativo (entregas parciais). O Cascata é linear, rígido e só testa no final.', N'Ágil adapta-se; Cascata planeia tudo antes.', NULL, NULL),
('fase8', N'O que é um Diagrama de Classes?', N'Diagrama estrutural da UML que mapeia a estrutura estática do sistema (classes, atributos, métodos e heranças).', N'A planta-baixa dos programadores Orientados a Objetos.', NULL, NULL),
('fase8', N'Quais são as fases clássicas do Ciclo de Vida do Software?', N'1. Levantamento de Requisitos; 2. Análise/Design; 3. Implementação (Código); 4. Testes; 5. Implantação; 6. Manutenção.', N'O passo a passo para criar qualquer sistema.', NULL, NULL),
('fase8', N'O que faz a Engenharia de Requisitos?', N'É a disciplina que foca em descobrir, documentar e manter as regras de negócio e necessidades do cliente.', N'A ponte entre o cliente e os programadores.', NULL, NULL),
('fase8', N'O que é o Diagrama de Sequência (UML)?', N'Mostra como os objetos interagem num determinado cenário ao longo de uma linha de tempo temporal.', N'Foco na troca de mensagens cronológicas.', NULL, NULL),
('fase8', N'O que é o Diagrama de Atividades (UML)?', N'Semelhante a um fluxograma, modela o fluxo de controlo de uma atividade para outra dentro do sistema.', N'Mostra o caminho da lógica, passo a passo.', NULL, NULL),
('fase8', N'O que é o Framework Scrum?', N'Uma estrutura de trabalho ágil focada em equipas pequenas que realizam entregas de software em ciclos curtos (Sprints).', N'A metodologia ágil mais famosa.', NULL, NULL),
('fase8', N'O que é a metodologia Kanban?', N'Método de gestão visual do fluxo de trabalho contínuo, usando um quadro com colunas (A Fazer, Fazendo, Feito).', N'Criado originalmente pela Toyota.', NULL, NULL),
('fase8', N'O que é o XP (Extreme Programming)?', N'Metodologia ágil extremamente focada na excelência técnica, exigindo testes contínuos e Programação em Par (Pair Programming).', N'Foco pesado na qualidade do código.', NULL, NULL),
('fase8', N'O que é o padrão MVC?', N'Model (Dados/Regras), View (Interface Visual) e Controller (Mediador). Um padrão de arquitetura que separa responsabilidades.', N'Não mistura HTML com acessos à base de dados.', NULL, NULL),
('fase8', N'O que são Testes Unitários?', N'Testes de baixo nível que verificam se a menor parte testável de um código (uma função ou método) funciona corretamente de forma isolada.', N'Testa o tijolo antes de construir o muro.', NULL, NULL),
('fase8', N'O que são Testes de Integração?', N'Testes que verificam se os diferentes módulos, classes ou bases de dados funcionam bem quando ligados entre si.', N'Testa a junção dos tijolos.', NULL, NULL),
('fase8', N'O que é o Teste de Aceitação do Utilizador (UAT)?', N'A fase final onde o cliente ou o utilizador real testa o sistema para validar se atende aos requisitos de negócio.', N'A validação final antes de ir para produção.', NULL, NULL),
('fase8', N'O que é Refatoração (Refactoring)?', N'O processo de reescrever e limpar o código-fonte para melhorar a sua estrutura interna, sem alterar o seu comportamento externo.', N'Arrumar a casa por dentro.', NULL, NULL),
('fase8', N'O que é a Dívida Técnica (Technical Debt)?', N'O custo futuro acumulado ao escolhermos soluções de código fáceis e rápidas agora, em vez da abordagem correta e otimizada.', N'Fazer rápido hoje significa ter de refazer amanhã.', NULL, NULL),
('fase8', N'O que são os Padrões de Projeto (Design Patterns)?', N'Soluções típicas, testadas e reutilizáveis para resolver problemas comuns no design de software.', N'Ex: Singleton, Factory, Observer.', NULL, NULL),
('fase8', N'O que significa a sigla UML?', N'Unified Modeling Language (Linguagem de Modelação Unificada). É a linguagem visual padrão para documentar sistemas de software.', N'O ''idioma'' internacional dos diagramas de sistemas.', NULL, NULL);
GO

-- --- FASE9 ---
INSERT INTO Flashcards (CodigoFase, Frente, Verso, Dica, Opcoes, Correta) VALUES
('fase9', N'O que é um endereço IP?', N'Identificador numérico exclusivo atribuído a cada dispositivo conectado numa rede de computadores.', N'Disciplina: Redes e Sistemas Distribuídos.', NULL, NULL),
('fase9', N'Para que serve o DNS?', N'Domain Name System. Traduz nomes de domínios fáceis (google.com) para endereços IP numéricos.', N'A lista telefónica da Web.', NULL, NULL),
('fase9', N'Qual a diferença entre os protocolos TCP e UDP?', N'TCP garante a entrega e ordem dos dados. O UDP é muito mais rápido, mas não verifica se o dado chegou (não é fiável).', N'TCP para ficheiros. UDP para jogos/streaming.', NULL, NULL),
('fase9', N'O que é um Sistema Distribuído?', N'Vários computadores independentes na rede a trabalharem juntos para parecerem um único sistema coeso para o utilizador.', N'A base arquitetural da Nuvem (Cloud).', NULL, NULL),
('fase9', N'O que faz um Load Balancer (Balanceador de Carga)?', N'Distribui o tráfego de rede e as requisições igualmente entre vários servidores para evitar sobrecargas e quedas.', N'Evita que um único servidor suporte todo o peso.', NULL, NULL),
('fase9', N'O que é um endereço MAC?', N'O endereço físico gravado permanentemente na placa de rede pelo fabricante. Não muda com a internet.', N'Media Access Control.', NULL, NULL),
('fase9', N'O que é o Modelo OSI?', N'Um modelo de referência conceitual dividido em 7 camadas (Física, Ligação, Rede, Transporte, Sessão, Apresentação, Aplicação).', N'Cria um padrão de comunicação universal.', NULL, NULL),
('fase9', N'O que é o Modelo TCP/IP?', N'O modelo prático que realmente move a internet, condensando o modelo OSI em apenas 4 camadas.', N'Aplicação, Transporte, Internet e Acesso à Rede.', NULL, NULL),
('fase9', N'Qual a diferença entre HTTP e HTTPS?', N'O HTTPS utiliza a camada de segurança SSL/TLS, encriptando todo o tráfego para que não possa ser intercetado.', N'Hyper Text Transfer Protocol (Secure).', NULL, NULL),
('fase9', N'O que é o protocolo FTP?', N'File Transfer Protocol. Usado historicamente para transferir ficheiros de um computador para um servidor na rede.', N'Transferência pura de ficheiros.', NULL, NULL),
('fase9', N'Para que serve o SSH?', N'Secure Shell. Protocolo de rede que permite ligar-se de forma encriptada e segura a servidores remotos através de um terminal em linha de comando.', N'Acesso remoto seguro a servidores Linux.', NULL, NULL),
('fase9', N'Quais são as portas padrão para os protocolos HTTP e HTTPS?', N'HTTP corre na porta 80. HTTPS corre na porta segura 443.', N'Portas essenciais do Firewall.', NULL, NULL),
('fase9', N'O que faz um Router (Roteador)?', N'É o equipamento de rede que envia os pacotes de dados entre diferentes redes (ex: da sua rede local para a Internet global).', N'O ''carteiro'' da internet.', NULL, NULL),
('fase9', N'O que faz um Switch?', N'Equipamento que liga vários dispositivos dentro de uma mesma rede local (LAN), enviando os dados apenas para o dispositivo correto (usando o MAC).', N'Diferente do Hub, que enviava para todos.', NULL, NULL),
('fase9', N'Para que serve um Firewall numa rede?', N'Filtra o tráfego de entrada e de saída com base num conjunto de regras de segurança, bloqueando ligações não autorizadas.', N'A barreira de segurança da rede.', NULL, NULL),
('fase9', N'O que é uma VPN?', N'Virtual Private Network. Cria um túnel encriptado na internet pública, simulando uma ligação privada e segura à rede da empresa.', N'Segurança e privacidade remotas.', NULL, NULL),
('fase9', N'Para que serve a Máscara de Sub-rede (Subnet Mask)?', N'Divide um grande bloco de endereços IP em redes menores, indicando que parte do IP é a rede e que parte é a máquina.', N'Ex: 255.255.255.0', NULL, NULL),
('fase9', N'O que faz o protocolo DHCP?', N'Dynamic Host Configuration Protocol. Atribui automaticamente endereços IP, gateways e DNS aos computadores quando estes se ligam à rede.', N'Imagina configurar o IP de cada telemóvel manualmente!', NULL, NULL),
('fase9', N'O que testa o comando Ping?', N'Envia pacotes ICMP para um IP de destino e aguarda a resposta, medindo o tempo de ida e volta para verificar se a máquina está online.', N'Teste básico de conectividade.', NULL, NULL),
('fase9', N'Na rede, o que é a Latência (vulgo ''Lag'')?', N'O tempo que um pacote de dados demora a viajar do ponto A (o seu PC) até ao ponto B (Servidor) e voltar.', N'Baixa latência = resposta rápida.', NULL, NULL);
GO

-- --- FASE10 ---
INSERT INTO Flashcards (CodigoFase, Frente, Verso, Dica, Opcoes, Correta) VALUES
('fase10', N'O que é o Teste de Turing?', N'Um teste proposto por Alan Turing para verificar se uma máquina consegue exibir um comportamento inteligente indistinguível de um humano.', N'Disciplina: Inteligência Artificial.', NULL, NULL),
('fase10', N'O que são Agentes Inteligentes em IA?', N'Sistemas (software ou hardware) que percebem o ambiente através de sensores e agem para maximizar a hipótese de sucesso dos seus objetivos.', N'Ex: Um robô aspirador de pó.', NULL, NULL),
('fase10', N'O que é uma Heurística na IA?', N'Uma ''regra de ouro'' ou atalho mental usado pela IA para encontrar soluções boas o suficiente num tempo muito rápido, sem garantir a perfeição absoluta.', N'Troca perfeição por velocidade.', NULL, NULL),
('fase10', N'O que é o PLN (Processamento de Linguagem Natural)?', N'Área da IA focada em ensinar as máquinas a compreender, interpretar e gerar a linguagem humana (texto e fala).', N'Como o ChatGPT ou a Alexa funcionam.', NULL, NULL),
('fase10', N'Qual a diferença entre Inovação Incremental e Disruptiva?', N'Incremental melhora algo que já existe (iPhone 14 para 15). Disruptiva cria um novo mercado, matando o anterior (Netflix vs Blockbuster).', N'Evolução vs Revolução.', NULL, NULL),
('fase10', N'O que é o Machine Learning (Aprendizado de Máquina)?', N'Subárea da IA onde os sistemas aprendem a identificar padrões em grandes volumes de dados, sem serem explicitamente programados passo a passo.', N'A máquina cria a sua própria lógica.', NULL, NULL),
('fase10', N'O que é o Deep Learning (Aprendizado Profundo)?', N'Uma evolução do Machine Learning baseada em Redes Neurais Artificiais profundas (com várias camadas ocultas) para lidar com dados muito complexos.', N'A base do reconhecimento facial moderno.', NULL, NULL),
('fase10', N'O que são Redes Neurais Artificiais?', N'Algoritmos matemáticos divididos em nós (neurónios) e camadas (Input, Ocultas, Output), biologicamente inspirados no cérebro humano.', N'Mimetizam as sinapses cerebrais.', NULL, NULL),
('fase10', N'Como funciona o Aprendizado Supervisionado?', N'O modelo de IA é treinado recebendo os dados de exemplo E o ''gabarito'' com a resposta correta (dados rotulados).', N'Existe um supervisor a dizer à IA o que é certo.', NULL, NULL),
('fase10', N'O que é o Aprendizado Não Supervisionado?', N'O modelo recebe dados brutos sem rótulos ou categorias, e tem de descobrir padrões ou agrupar informações sozinho (Clustering).', N'A IA tenta encontrar lógica no caos sozinha.', NULL, NULL),
('fase10', N'Como funciona o Aprendizado por Reforço (Reinforcement Learning)?', N'A IA aprende por tentativa e erro dentro de um ambiente, recebendo ''recompensas'' ao acertar e ''punições'' ao errar.', N'Como treinar um cão de estimação.', NULL, NULL),
('fase10', N'Na IA, o que é o erro de Overfitting?', N'Quando o modelo de IA ''decora'' viciosamente os dados de treino, acertando tudo no laboratório, mas errando gravemente quando lida com dados novos reais.', N'Falta de capacidade de generalização.', NULL, NULL),
('fase10', N'O que é um Algoritmo de Classificação?', N'Um algoritmo que prevê uma etiqueta ou categoria (Variável Discreta). Ex: Dizer se um e-mail é ''Spam'' ou ''Não Spam''.', N'Divide os dados em caixas.', NULL, NULL),
('fase10', N'O que é um Algoritmo de Regressão?', N'Um algoritmo que prevê um número ou valor contínuo baseado em tendências históricas. Ex: Prever o preço de uma casa no futuro.', N'Desenha uma linha de tendência.', NULL, NULL),
('fase10', N'O que estuda a Visão Computacional?', N'O campo da IA focado em permitir que computadores extraiam informações e entendam imagens digitais e vídeos do mundo real.', N'Como os carros da Tesla conduzem sozinhos.', NULL, NULL),
('fase10', N'O que é um Chatbot?', N'Um programa de computador projetado para simular conversas com utilizadores humanos, geralmente suportado por árvores de decisão ou PNL.', N'Atendimento automatizado.', NULL, NULL),
('fase10', N'O que é o Viés Algorítmico (Bias)?', N'Quando a IA herda e reproduz preconceitos e discriminações raciais ou sociais devido à má qualidade dos dados usados para a treinar.', N'A máquina apenas reflete os defeitos da sociedade.', NULL, NULL),
('fase10', N'O que significa o conceito de Big Data?', N'O processamento e armazenamento de volumes de dados tão gigantescos, rápidos e complexos (Os 3 Vs) que as bases de dados tradicionais não suportam.', N'Volume, Velocidade e Variedade.', NULL, NULL),
('fase10', N'O que é a Mineração de Dados (Data Mining)?', N'A exploração e análise de bases de dados colossais para descobrir padrões ocultos, correlações ou anomalias valiosas para o negócio.', N'Extrair ouro comercial dos dados.', NULL, NULL),
('fase10', N'O que significa a sigla LLM na IA moderna?', N'Large Language Model (Grande Modelo de Linguagem). IAs de processamento de linguagem treinadas com terabytes de texto da internet.', N'A tecnologia base do ChatGPT.', NULL, NULL);
GO

-- --- FASE11 ---
INSERT INTO Flashcards (CodigoFase, Frente, Verso, Dica, Opcoes, Correta) VALUES
('fase11', N'O que é uma Chave Primária (Primary Key)?', N'Um campo (ou conjunto de campos) que identifica de forma exclusiva uma linha numa tabela.', N'Disciplina: Bases de Dados. Ex: NIF ou CPF.', NULL, NULL),
('fase11', N'O que é uma Chave Estrangeira (Foreign Key)?', N'Um campo numa tabela que faz referência à Chave Primária de outra tabela, criando um vínculo entre ambas.', N'Garante a integridade referencial.', NULL, NULL),
('fase11', N'Qual a diferença entre SQL e NoSQL?', N'SQL é relacional (tabelas e esquemas rígidos). NoSQL é não-relacional (documentos flexíveis, chave-valor, grafos).', N'MySQL vs MongoDB.', NULL, NULL),
('fase11', N'O que significa a sigla CRUD?', N'Create (Criar), Read (Ler), Update (Atualizar), Delete (Apagar).', N'As 4 operações básicas de qualquer sistema.', NULL, NULL),
('fase11', N'Para que serve a cláusula JOIN no SQL?', N'Para combinar e recuperar dados de duas ou mais tabelas baseando-se numa coluna em comum entre elas.', N'Une os ''Clientes'' aos seus ''Pedidos''.', NULL, NULL),
('fase11', N'O que é a Normalização de Dados?', N'O processo de organizar as tabelas para minimizar a redundância (dados repetidos) e evitar anomalias de atualização.', N'Dividir para organizar.', NULL, NULL),
('fase11', N'O que dita a Primeira Forma Normal (1FN)?', N'Que uma tabela não deve conter atributos multivalorados ou compostos. Cada célula deve ter um valor atómico (único).', N'Não colocar dois telefones na mesma célula.', NULL, NULL),
('fase11', N'O que significa o acrónimo ACID em transações de Bases de Dados?', N'Atomicidade, Consistência, Isolamento e Durabilidade.', N'Garante que a transação bancária não falha a meio.', NULL, NULL),
('fase11', N'Qual a diferença entre DDL e DML no SQL?', N'DDL define a estrutura (CREATE, ALTER, DROP). DML manipula os dados (INSERT, UPDATE, DELETE).', N'DDL mexe na tabela, DML mexe na linha.', NULL, NULL),
('fase11', N'Para que serve o comando SELECT?', N'Para consultar e extrair dados específicos de uma ou mais tabelas.', N'A operação mais usada (Read do CRUD).', NULL, NULL),
('fase11', N'Como funciona o comando GROUP BY?', N'Agrupa linhas com os mesmos valores em colunas de resumo, frequentemente usado com funções matemáticas (SUM, COUNT).', N'Agrupa para somar ou contar.', NULL, NULL),
('fase11', N'O que é um Índice (Index) numa Base de Dados?', N'Uma estrutura de dados especial criada para acelerar incrivelmente a velocidade das pesquisas nas tabelas.', N'Como o índice remissivo no fim de um livro.', NULL, NULL),
('fase11', N'O que é uma Trigger (Gatilho)?', N'Um código SQL que é executado automaticamente APÓS ou ANTES de um evento (Insert, Update ou Delete) numa tabela.', N'Excelente para criar logs de auditoria automáticos.', NULL, NULL),
('fase11', N'O que é uma Stored Procedure (Procedimento Armazenado)?', N'Um bloco de código SQL guardado no servidor que pode ser invocado pela aplicação várias vezes.', N'Poupa tráfego de rede e centraliza regras de negócio.', NULL, NULL),
('fase11', N'O que é uma View (Vista)?', N'Uma ''tabela virtual'' baseada no resultado de uma consulta SELECT (Query). Não guarda os dados fisicamente.', N'Facilita a leitura de JOINs muito complexos.', NULL, NULL),
('fase11', N'O que é um SGBD?', N'Sistema Gestor de Bases de Dados. O software responsável por administrar as bases de dados.', N'Ex: SQL Server, PostgreSQL, Oracle.', NULL, NULL),
('fase11', N'Como o MongoDB guarda os seus dados?', N'Em coleções de Documentos no formato BSON (semelhante ao JSON), sem necessidade de colunas rígidas.', N'Ideal para dados desestruturados.', NULL, NULL),
('fase11', N'O que é um Diagrama Entidade-Relacionamento (DER)?', N'Um modelo visual que descreve a estrutura lógica da base de dados, as suas entidades e como se conectam.', N'A planta-baixa do banco.', NULL, NULL),
('fase11', N'Para que servem os comandos COMMIT e ROLLBACK?', N'COMMIT guarda as alterações da transação permanentemente. ROLLBACK desfaz e reverte tudo em caso de erro.', N'Salvar vs Desfazer.', NULL, NULL),
('fase11', N'Qual a diferença entre DELETE e TRUNCATE?', N'DELETE apaga linhas específicas e regista isso no log (mais lento). TRUNCATE limpa a tabela inteira de imediato (rápido).', N'TRUNCATE é um ''reset'' à tabela.', NULL, NULL);
GO

-- --- FASE12 ---
INSERT INTO Flashcards (CodigoFase, Frente, Verso, Dica, Opcoes, Correta) VALUES
('fase12', N'O que é uma Classe na POO?', N'Um molde, planta ou especificação que define os atributos e comportamentos de um objeto.', N'Disciplina: POO com C#.', NULL, NULL),
('fase12', N'O que é um Objeto?', N'Uma instância concreta (materialização) de uma Classe, residente na memória durante a execução do programa.', N'A classe é a forma do bolo; o objeto é o bolo.', NULL, NULL),
('fase12', N'O que é a Herança em POO?', N'O mecanismo onde uma classe filha adquire automaticamente as características e comportamentos de uma classe pai.', N'Promove o reaproveitamento de código.', NULL, NULL),
('fase12', N'O que é o Polimorfismo?', N'A capacidade de um método ter diferentes comportamentos dependendo do objeto que o invoca.', N'Ex: ''EmitirSom()'' -> Cão ladra, Gato mia.', NULL, NULL),
('fase12', N'O que é o Encapsulamento?', N'A técnica de ocultar o estado interno de um objeto (usando variáveis private) e expor apenas os métodos seguros (public).', N'Protege os dados de alterações indevidas.', NULL, NULL),
('fase12', N'O que é uma Classe Abstrata?', N'Uma classe genérica que não pode ser instanciada (não se pode fazer ''new''), servindo apenas de base para outras classes herdarem.', N'Modelo base obrigatório.', NULL, NULL),
('fase12', N'O que é uma Interface?', N'Um contrato 100% vazio. Define APENAS a assinatura dos métodos que as classes que a implementam são obrigadas a criar.', N'Resolve o problema da herança múltipla no C#.', NULL, NULL),
('fase12', N'O que é um Construtor?', N'Um método especial, executado automaticamente quando o objeto é instanciado, usado para inicializar os seus atributos.', N'Tem sempre o mesmo nome da Classe.', NULL, NULL),
('fase12', N'Qual a diferença entre os modificadores ''public'' e ''private''?', N'Public: Qualquer parte do código acede. Private: Apenas a própria classe tem acesso.', N'Níveis de visibilidade.', NULL, NULL),
('fase12', N'O que é a Sobrecarga (Overloading)?', N'Criar vários métodos com o MESMO NOME na mesma classe, mas com parâmetros diferentes (quantidade ou tipo).', N'Comportamentos variados consoante os argumentos.', NULL, NULL),
('fase12', N'O que é a Sobrescrita (Overriding)?', N'Quando a classe filha reescreve e muda a lógica de um método herdado da classe pai.', N'Usa as palavras ''virtual'' e ''override'' no C#.', NULL, NULL),
('fase12', N'O que faz a palavra-chave ''static'' num método ou atributo?', N'O membro pertence à Classe em si e não aos objetos gerados. Pode ser usado sem instanciar a classe.', N'Ex: Math.Round();', NULL, NULL),
('fase12', N'Para que servem as Propriedades (Getters / Setters) em C#?', N'Para aceder e modificar os atributos privados de forma controlada e segura.', N'O filtro de entrada de dados.', NULL, NULL),
('fase12', N'Para que serve o operador ''new''?', N'Para alocar memória e instanciar um novo objeto a partir de uma classe.', N'Ex: Carro c = new Carro();', NULL, NULL),
('fase12', N'O que é o Garbage Collector (Coletor de Lixo)?', N'Um processo automático do .NET que limpa a memória, destruindo objetos que já não estão a ser usados pelo programa.', N'Evita o Memory Leak automaticamente.', NULL, NULL),
('fase12', N'Para que servem os ''Namespaces'' em C#?', N'Para organizar o código e evitar conflitos de nomes entre classes (ex: duas classes chamadas ''Usuario'' em pastas diferentes).', N'Como se fossem ''sobrenomes'' das classes.', NULL, NULL),
('fase12', N'Para que serve o bloco ''try / catch''?', N'Para capturar e tratar exceções (erros) em tempo de execução, impedindo que o programa feche abruptamente.', N'Gestão elegante de erros.', NULL, NULL),
('fase12', N'No C#, qual a diferença entre Value Types e Reference Types?', N'Value (structs, int) guarda o dado direto na memória Stack. Reference (classes, arrays) guarda um ponteiro na memória Heap.', N'Gestão interna do .NET.', NULL, NULL),
('fase12', N'Qual a grande diferença entre o Paradigma POO e o Procedural?', N'O Procedural foca numa sequência de funções e dados globais soltos. O POO agrupa dados e funções no mesmo elemento (Objeto).', N'POO modela o mundo real.', NULL, NULL),
('fase12', N'Para que serve a palavra-chave ''this''?', N'Faz referência à instância ATUAL do objeto. Usado para diferenciar atributos da classe de variáveis locais com o mesmo nome.', N'Eu próprio.', NULL, NULL);
GO

-- --- FASE13 ---
INSERT INTO Flashcards (CodigoFase, Frente, Verso, Dica, Opcoes, Correta) VALUES
('fase13', N'Qual a diferença entre UX e UI?', N'UX = User Experience (Jornada, sentimento e usabilidade). UI = User Interface (Cores, botões e estética visual).', N'Disciplina: Web Responsivo e UX/UI.', NULL, NULL),
('fase13', N'O que é o Design Responsivo?', N'Técnica que permite que um site adapte o seu layout automaticamente ao tamanho do ecrã (PC, Tablet, Smartphone).', N'Feito usando Media Queries no CSS.', NULL, NULL),
('fase13', N'O que é a abordagem ''Mobile First''?', N'Estratégia de desenhar e programar o site primeiro para o telemóvel, e só depois expandi-lo para monitores maiores.', N'Altamente recomendado pelo Google.', NULL, NULL),
('fase13', N'Para que serve o CSS Flexbox?', N'Para organizar, alinhar e distribuir o espaço entre os itens numa linha ou coluna (1 dimensão).', N'Ideal para alinhar menus e botões.', NULL, NULL),
('fase13', N'Para que serve o CSS Grid Layout?', N'Para criar estruturas de layout complexas trabalhando com linhas E colunas simultaneamente (2 dimensões).', N'A grelha de construção do site.', NULL, NULL),
('fase13', N'O que é um Wireframe?', N'O ''esqueleto'' ou rascunho estrutural de um ecrã, sem cores, fontes ou imagens finais.', N'A planta-baixa do site.', NULL, NULL),
('fase13', N'O que é um Protótipo de Alta Fidelidade?', N'Uma simulação interativa que se parece exatamente com o produto final, contendo cores, animações e cliques funcionais.', N'Geralmente criado no Figma.', NULL, NULL),
('fase13', N'O que são as normas WCAG?', N'Web Content Accessibility Guidelines. Diretrizes mundiais para tornar a web acessível a pessoas com deficiência.', N'Acessibilidade para todos.', NULL, NULL),
('fase13', N'O que é a Hierarquia Visual?', N'A organização dos elementos na interface para guiar o olhar do utilizador por ordem de importância (usando tamanho, cor, contraste).', N'O que devo ler primeiro?', NULL, NULL),
('fase13', N'O que estuda a Psicologia das Cores?', N'Como as cores afetam a perceção e o comportamento do utilizador (ex: Vermelho para alertas, Verde para sucesso).', N'Cores transmitem emoções.', NULL, NULL),
('fase13', N'Qual a diferença entre fontes Serifadas e Sem Serifa?', N'Serifadas (Serif) têm ''perninhas'' ou prolongamentos nos cantos (ex: Times New Roman). Sem Serifa (Sans-Serif) têm traços retos (ex: Arial).', N'Sans-Serif é o padrão para Web.', NULL, NULL),
('fase13', N'O que é uma Call to Action (CTA)?', N'Um elemento (geralmente um botão de destaque) que incita o utilizador a realizar uma ação desejada (ex: ''Comprar Agora'').', N'Chamar para a ação.', NULL, NULL),
('fase13', N'No CSS, para que servem as Media Queries?', N'Para aplicar estilos condicionados ao tamanho do ecrã do dispositivo (ex: @media (max-width: 600px)).', N'O motor da responsividade.', NULL, NULL),
('fase13', N'O que é o DOM (Document Object Model)?', N'A representação estrutural em árvore do documento HTML, permitindo que o JavaScript altere os elementos em tempo real.', N'A ponte entre HTML e JavaScript.', NULL, NULL),
('fase13', N'O que é o HTML Semântico?', N'O uso de tags apropriadas para o significado do conteúdo (ex: <header>, <article>, <nav>) em vez de apenas <div> genéricas.', N'Melhora a acessibilidade e o SEO.', NULL, NULL),
('fase13', N'O que é o ''White Space'' (Espaço em Branco) no UI Design?', N'A área vazia entre os elementos de uma interface. É crucial para deixar o design respirar e evitar poluição visual.', N'O vazio também é design.', NULL, NULL),
('fase13', N'O que é um Teste A/B?', N'Testar duas versões diferentes de uma mesma página simultaneamente para ver qual delas tem melhor taxa de conversão.', N'O botão verde vende mais que o azul?', NULL, NULL),
('fase13', N'O que é o conceito de ''Affordance'' em UX?', N'A característica visual de um objeto que sugere intuitivamente como ele deve ser usado (ex: um botão com sombra parece clicável).', N'Sugestão visual de uso.', NULL, NULL),
('fase13', N'O que é uma ''Persona'' em UX Design?', N'Uma representação semi-fictícia do cliente ideal da aplicação, baseada em dados reais, para guiar as decisões de design.', N'Dar rosto e nome ao público-alvo.', NULL, NULL),
('fase13', N'O que é o Mapa da Jornada do Utilizador (User Journey)?', N'A documentação visual de todos os passos, frustrações e sucessos que um utilizador tem ao interagir com o produto.', N'O passo a passo da experiência.', NULL, NULL);
GO

-- --- FASE14 ---
INSERT INTO Flashcards (CodigoFase, Frente, Verso, Dica, Opcoes, Correta) VALUES
('fase14', N'O que é Machine Learning (ML)?', N'Sistemas que aprendem a identificar padrões em grandes volumes de dados sem precisarem de ser explicitamente programados passo a passo.', N'Disciplina: Machine Learning.', NULL, NULL),
('fase14', N'O que é a Inteligência Artificial (IA)?', N'O campo amplo da ciência da computação que procura criar máquinas capazes de realizar tarefas que normalmente exigem inteligência humana.', N'ML é um subcampo da IA.', NULL, NULL),
('fase14', N'O que é o Aprendizado Supervisionado?', N'O modelo é treinado usando um conjunto de dados onde a RESPOSTA CORRETA (rótulo) já é fornecida.', N'Treinado com ''gabarito''.', NULL, NULL),
('fase14', N'O que é o Aprendizado Não Supervisionado?', N'O modelo recebe dados brutos sem rótulos e tenta descobrir padrões ou agrupar os dados sozinho.', N'Organiza o caos de forma autónoma.', NULL, NULL),
('fase14', N'O que é o Aprendizado por Reforço?', N'A IA aprende por tentativa e erro dentro de um ambiente, recebendo ''recompensas'' (pontos) ao acertar e ''punições'' ao errar.', N'Como ensinar um cão com biscoitos.', NULL, NULL),
('fase14', N'O que é o Overfitting?', N'Quando o modelo memoriza ou decora os dados de treino tão bem que falha miseravelmente quando tenta analisar dados novos e reais.', N'Falta de generalização.', NULL, NULL),
('fase14', N'O que é o Underfitting?', N'Quando o modelo é demasiado simples ou treinado por pouco tempo e não consegue sequer capturar os padrões dos dados de treino.', N'Erro na teoria e na prática.', NULL, NULL),
('fase14', N'O que é um Algoritmo de Regressão?', N'Prevê um número ou valor contínuo baseado em tendências históricas. Ex: Prever o preço de uma casa ou o valor das ações.', N'Desenha uma linha de tendência (gráfico).', NULL, NULL),
('fase14', N'O que é um Algoritmo de Classificação?', N'Prevê a que categoria pertence um dado. Ex: Classificar se um tumor é maligno ou benigno, ou se um e-mail é spam.', N'Separa em caixas/etiquetas.', NULL, NULL),
('fase14', N'O que são as Redes Neurais Artificiais?', N'Modelos matemáticos inspirados no cérebro humano, organizados em camadas de nós (neurónios) interligados.', N'A base da inteligência artificial moderna.', NULL, NULL),
('fase14', N'O que é o Deep Learning (Aprendizado Profundo)?', N'Uma área do ML que utiliza Redes Neurais com múltiplas camadas ocultas (''Deep'') para resolver problemas altamentes complexos.', N'O poder por trás do reconhecimento facial e ChatGPT.', NULL, NULL),
('fase14', N'O que é o Processamento de Linguagem Natural (PLN)?', N'A capacidade de a máquina compreender, interpretar e gerar texto ou fala na linguagem humana (inglês, português, etc).', N'A ponte entre o homem e o texto do robô.', NULL, NULL),
('fase14', N'O que é a Visão Computacional?', N'O ensino dos computadores para extraírem informações, identificarem e interpretarem imagens e vídeos do mundo real.', N'Carros autónomos dependem disto.', NULL, NULL),
('fase14', N'Qual a diferença entre Dados de Treino e Dados de Teste?', N'Treino: 80% dos dados, usados para ensinar o modelo. Teste: 20% guardados em segredo para avaliar se o modelo aprendeu de verdade.', N'O teste é a ''prova final'' do modelo.', NULL, NULL),
('fase14', N'O que é o Viés Algorítmico (Bias)?', N'Quando a IA herda preconceitos (sociais ou raciais) devido ao uso de uma base de dados histórica defeituosa.', N'A IA pode ser racista se ensinada assim.', NULL, NULL),
('fase14', N'O que é Clustering (Agrupamento)?', N'Uma técnica de Aprendizado Não Supervisionado que divide os dados em grupos semelhantes baseados nas suas características intrínsecas.', N'Usado para segmentar perfis de clientes de marketing.', NULL, NULL),
('fase14', N'Como funciona uma Árvore de Decisão?', N'Um modelo em forma de fluxograma onde cada ''nó'' é uma pergunta e os ''ramos'' são as respostas possíveis até chegar à decisão final.', N'Mapeia uma série de regras ''se-então''.', NULL, NULL),
('fase14', N'O que é o algoritmo KNN (K-Nearest Neighbors)?', N'Classifica um dado observando a categoria da maioria dos seus ''K'' vizinhos mais próximos no gráfico.', N'Diz-me com quem andas e eu dir-te-ei quem és.', NULL, NULL),
('fase14', N'O que é a Matriz de Confusão?', N'Uma tabela usada para avaliar o desempenho de um modelo de classificação, mostrando Verdadeiros Positivos, Falsos Positivos, etc.', N'Onde o algoritmo acertou e onde se confundiu.', NULL, NULL),
('fase14', N'O que é a Extração de Características (Feature Engineering)?', N'O processo de selecionar, manipular e limpar as variáveis de entrada mais importantes para ajudar a IA a aprender melhor.', N'Entra lixo, sai lixo (GIGO).', NULL, NULL);
GO

-- --- FASE15 ---
INSERT INTO Flashcards (CodigoFase, Frente, Verso, Dica, Opcoes, Correta) VALUES
('fase15', N'O que é o Manifesto Ágil (2001)?', N'O documento fundador das metodologias ágeis, que prioriza Indivíduos, Software a funcionar, Colaboração com o cliente e Resposta a mudanças.', N'Disciplina: Engenharia de Software Ágil.', NULL, NULL),
('fase15', N'O que é o Scrum?', N'Um framework ágil iterativo (por ciclos) e incremental, focado no trabalho de equipa para entregar valor rápido ao cliente.', N'A metodologia mais adotada no mundo.', NULL, NULL),
('fase15', N'Quem é o Product Owner (PO)?', N'A voz do cliente na equipa. É o ÚNICO responsável por definir as prioridades do produto e gerir o Backlog.', N'O dono da visão do produto.', NULL, NULL),
('fase15', N'Quem é o Scrum Master?', N'O líder servidor da equipa. A sua função é garantir o uso correto do Scrum e remover impedimentos ou barreiras técnicas e burocráticas.', N'O facilitador e protetor da equipa.', NULL, NULL),
('fase15', N'O que é uma Sprint no Scrum?', N'Um ciclo de trabalho fixo (timebox de 1 a 4 semanas) onde um conjunto de tarefas é planeado e executado até estar pronto.', N'O ''coração'' pulsante do Scrum.', NULL, NULL),
('fase15', N'Qual o objetivo da reunião Daily Scrum?', N'Sincronização tática da equipa de Desenvolvimento. Duração máxima de 15 minutos. O que fiz ontem, farei hoje e há algum impedimento?', N'Reunião rápida, feita em pé.', NULL, NULL),
('fase15', N'O que ocorre na Sprint Planning?', N'A reunião onde a equipa define o Objetivo da Sprint e seleciona as histórias do Backlog que consegue construir nesse ciclo.', N'O planeamento inicial.', NULL, NULL),
('fase15', N'Qual o propósito da Sprint Review?', N'Ocorre no FIM da Sprint para demonstrar o incremento (o software pronto) ao cliente e aos stakeholders para colher feedback.', N'Hora da demonstração prática.', NULL, NULL),
('fase15', N'O que é a Sprint Retrospective (Retrospectiva)?', N'A última cerimónia, onde a equipa debate O PROCESSO (o que correu bem, o que falhou) para encontrar melhorias contínuas para a próxima Sprint.', N'Melhorar a forma como se trabalha.', NULL, NULL),
('fase15', N'O que é o Product Backlog?', N'A lista viva, ordenada e priorizada pelo PO de TUDO o que é necessário construir e melhorar no produto.', N'A lista de desejos do software.', NULL, NULL),
('fase15', N'O que é o Sprint Backlog?', N'O subconjunto de tarefas selecionadas do Product Backlog pela equipa para serem desenvolvidas apenas durante a Sprint atual.', N'O trabalho fechado para o mês.', NULL, NULL),
('fase15', N'O que é o Incremento no Scrum?', N'A soma de todas as tarefas concluídas numa Sprint. Deve ser um software testado, a funcionar e pronto para uso pelo cliente.', N'Valor real entregue no fim.', NULL, NULL),
('fase15', N'O que é uma História de Utilizador (User Story)?', N'A descrição simples de um requisito do ponto de vista de quem usa o sistema. ''Como [perfil], eu quero [ação], para [benefício]''.', N'Foca no valor gerado para o cliente.', NULL, NULL),
('fase15', N'O que é um Épico (Epic)?', N'Uma História de Utilizador muito grande ou complexa que não cabe numa única Sprint e tem de ser fatiada em histórias menores.', N'Um requisito gigante.', NULL, NULL),
('fase15', N'O que são Story Points (Planning Poker)?', N'Uma técnica da equipa para estimar o ESFORÇO e a complexidade de uma tarefa usando valores relativos (como a sequência de Fibonacci).', N'Não mede horas, mede esforço.', NULL, NULL),
('fase15', N'O que é um Burndown Chart?', N'Um gráfico que mostra diariamente a quantidade de trabalho restante na Sprint em relação ao tempo. A linha ''queima'' para baixo até zero.', N'Mede a velocidade da equipa.', NULL, NULL),
('fase15', N'Como funciona o método Kanban?', N'Uma metodologia baseada na gestão visual do fluxo de trabalho contínuo através de um quadro (A Fazer, Fazendo, Feito).', N'Não tem Sprints com tempos fixos como o Scrum.', NULL, NULL),
('fase15', N'O que é o limite de WIP no Kanban?', N'Work In Progress. Consiste em limitar a quantidade máxima de tarefas que a equipa pode realizar em simultâneo na coluna ''Fazendo''.', N'Pare de começar, comece a terminar.', NULL, NULL),
('fase15', N'O que é o DoD (Definition of Done)?', N'O Acordo da Definição de Pronto. Um checklist que determina se uma tarefa foi codificada, testada e atende aos níveis de qualidade.', N'Pronto significa realmente pronto a usar.', NULL, NULL),
('fase15', N'O que significa ''Timebox'' nos métodos Ágeis?', N'A duração de tempo MÁXIMA permitida para realizar uma cerimónia ou ciclo (Ex: a Daily tem um Timebox cravado de 15 minutos).', N'Bateu no tempo, a reunião acaba.', NULL, NULL);
GO

-- --- FASE16 ---
INSERT INTO Flashcards (CodigoFase, Frente, Verso, Dica, Opcoes, Correta) VALUES
('fase16', N'O que é o .NET Core (ou apenas .NET)?', N'Um framework open-source e multiplataforma (Windows, Linux, macOS) criado pela Microsoft para construir vários tipos de aplicações.', N'Disciplina: Web e Aplicações com .NET.', NULL, NULL),
('fase16', N'O que é o Entity Framework Core (EF Core)?', N'Um ORM (Object-Relational Mapper) que permite manipular bases de dados usando objetos C# em vez de escrever código SQL manual.', N'Mapeamento Objeto-Relacional.', NULL, NULL),
('fase16', N'Para que serve uma API REST?', N'Para comunicar sistemas (Front-end e Back-end) trocando dados, geralmente no formato JSON, através do protocolo HTTP.', N'Usa os métodos GET, POST, PUT e DELETE.', NULL, NULL),
('fase16', N'O que é a Injeção de Dependência (DI)?', N'Técnica onde uma classe recebe os objetos (dependências) de que precisa a partir de uma fonte externa, em vez de os instanciar (usar ''new'') internamente.', N'Desacopla o código e facilita os testes.', NULL, NULL),
('fase16', N'O que é o padrão MVC no ASP.NET?', N'Um padrão de arquitetura que divide a aplicação em Model (Dados), View (Interface) e Controller (Lógica de interligação).', N'Separação de responsabilidades.', NULL, NULL),
('fase16', N'O que é o Kestrel?', N'O servidor web embutido, multiplataforma e extremamente rápido, incluído por padrão nas aplicações ASP.NET Core.', N'Servidor web do .NET.', NULL, NULL),
('fase16', N'O que é o NuGet?', N'O gestor de pacotes oficial da plataforma .NET. Permite instalar, remover e atualizar bibliotecas de terceiros no projeto.', N'O equivalente ao ''npm'' do Node.js.', NULL, NULL),
('fase16', N'Qual a diferença entre IEnumerable e IQueryable no C#?', N'IEnumerable executa a consulta na memória (após trazer os dados da base). IQueryable traduz os filtros para SQL e executa diretamente na base de dados.', N'IQueryable é muito mais otimizado para bases de dados.', NULL, NULL),
('fase16', N'O que é o Swagger (OpenAPI)?', N'Uma ferramenta que gera automaticamente uma interface visual e interativa para documentar e testar os endpoints de uma API REST.', N'A documentação viva da API.', NULL, NULL),
('fase16', N'No ciclo de vida de Injeção de Dependência, o que significa ''Singleton''?', N'Cria uma única instância do serviço a primeira vez que é solicitado, e partilha essa mesma instância com todas as requisições futuras.', N'Único para todos.', NULL, NULL),
('fase16', N'No ciclo de vida de Injeção de Dependência, o que significa ''Scoped''?', N'Cria uma nova instância do serviço por cada requisição HTTP (request).', N'O mais comum em APIs web.', NULL, NULL),
('fase16', N'O que é o LINQ (Language Integrated Query)?', N'Um conjunto de funcionalidades do C# que permite escrever consultas complexas (filtros, ordenações) em coleções de dados ou bases de dados de forma nativa.', N'O SQL dentro do C#.', NULL, NULL),
('fase16', N'O que é uma Minimal API no .NET?', N'Uma forma simplificada de criar APIs HTTP no C# com poucas linhas de código, sem a complexidade dos Controllers tradicionais.', N'Rápido e direto ao ponto.', NULL, NULL),
('fase16', N'O que faz a palavra-chave ''await'' em C#?', N'Pausa a execução do método atual até que a tarefa assíncrona (Task) seja concluída, libertando a thread principal.', N'Programação Assíncrona (async/await).', NULL, NULL),
('fase16', N'O que é o ficheiro appsettings.json?', N'O ficheiro principal de configuração das aplicações .NET, usado para guardar chaves, strings de conexão e parâmetros globais.', N'Onde fica a ''Connection String''.', NULL, NULL),
('fase16', N'O que é o CORS (Cross-Origin Resource Sharing)?', N'Um mecanismo de segurança dos navegadores que bloqueia requisições HTTP de domínios diferentes, a menos que a API as autorize explicitamente.', N'Erro clássico ao ligar Front-end ao Back-end.', NULL, NULL),
('fase16', N'O que é um token JWT (JSON Web Token)?', N'Um padrão de mercado para autenticação. É uma string encriptada gerada após o login que o cliente usa para aceder a rotas protegidas da API.', N'O ''passaporte'' de acesso do utilizador.', NULL, NULL),
('fase16', N'O que é o Middleware no ASP.NET Core?', N'Um pedaço de código (componente) inserido no pipeline de requisições da aplicação, que pode intercetar, processar ou alterar o request/response.', N'Ex: Autenticação, tratamento de erros globais.', NULL, NULL),
('fase16', N'O que são Data Annotations?', N'Atributos colocados por cima das propriedades de uma classe (ex: [Required], [MaxLength(50)]) para validar os dados automaticamente.', N'Validação de modelos.', NULL, NULL),
('fase16', N'O que são as Migrations no Entity Framework Core?', N'Um sistema que permite gerar e aplicar alterações na estrutura da base de dados (criar tabelas, colunas) a partir das mudanças feitas nas classes C#.', N'Versionamento do esquema da base de dados.', NULL, NULL);
GO

-- --- FASE17 ---
INSERT INTO Flashcards (CodigoFase, Frente, Verso, Dica, Opcoes, Correta) VALUES
('fase17', N'Qual a principal diferença entre uma Aplicação Nativa e Híbrida?', N'A Nativa usa o código original (Kotlin/Swift) para uma performance máxima. A Híbrida usa tecnologias web (HTML/JS) dentro de uma ''casca'' mobile.', N'Disciplina: Desenvolvimento Mobile.', NULL, NULL),
('fase17', N'O que é o desenvolvimento Cross-Platform?', N'A capacidade de escrever um código numa única linguagem (ex: C#, Dart, JS) e compilá-lo para gerar aplicações tanto para Android como iOS.', N'Escreve uma vez, corre em todo o lado.', NULL, NULL),
('fase17', N'O que é o .NET MAUI?', N'Framework da Microsoft (evolução do Xamarin) para criar aplicações nativas para Android, iOS, macOS e Windows utilizando C# e XAML.', N'Multi-platform App UI.', NULL, NULL),
('fase17', N'O que é o Ciclo de Vida (Lifecycle) de um ecrã mobile?', N'A série de estados pelos quais uma app passa: Criada (OnCreate), Visível (OnStart), Em Pausa (OnPause) e Destruída (OnDestroy).', N'Evita consumo excessivo de bateria em 2º plano.', NULL, NULL),
('fase17', N'Para que serve a API de Geolocalização?', N'Permite à aplicação aceder ao GPS e às redes móveis do telemóvel para determinar a latitude e longitude do utilizador.', N'Usada no Uber, iFood, Waze.', NULL, NULL),
('fase17', N'Para que serve o SQLite em projetos Mobile?', N'É uma base de dados relacional extremamente leve, que fica embutida dentro do próprio telemóvel para guardar informações offline.', N'Funciona sem internet.', NULL, NULL),
('fase17', N'Qual é a linguagem oficial recomendada atualmente pela Google para o Android?', N'Kotlin (substituindo o antigo Java).', N'Moderna, concisa e segura.', NULL, NULL),
('fase17', N'Qual é a linguagem oficial recomendada atualmente pela Apple para o iOS?', N'Swift (substituindo o antigo Objective-C).', N'Rápida e interativa.', NULL, NULL),
('fase17', N'O que é o React Native?', N'Um framework Cross-Platform criado pelo Facebook que permite desenvolver apps nativas utilizando JavaScript e React.', N'Usado pelo Instagram e Discord.', NULL, NULL),
('fase17', N'O que é o Flutter?', N'Um UI Toolkit Cross-Platform criado pela Google, que utiliza a linguagem Dart para desenhar interfaces bonitas e fluidas rapidamente.', N'O principal concorrente do React Native.', NULL, NULL),
('fase17', N'O que é o ficheiro APK ou AAB no Android?', N'O pacote final compilado e compactado que contém a aplicação pronta para ser instalada ou enviada para a Google Play Store.', N'Android Package / Android App Bundle.', NULL, NULL),
('fase17', N'O que é o Xcode?', N'O Ambiente de Desenvolvimento Integrado (IDE) oficial da Apple, obrigatório para compilar e publicar aplicações para o iOS.', N'Só funciona no macOS.', NULL, NULL),
('fase17', N'O que são Push Notifications?', N'Mensagens ou alertas curtos enviados pelo servidor diretamente para o ecrã do telemóvel do utilizador, mesmo quando a app está fechada.', N'Mensagens de aviso do WhatsApp ou Banco.', NULL, NULL),
('fase17', N'O que significa ''Background Process'' no mobile?', N'Um processo em segundo plano, ou seja, código que continua a ser executado mesmo quando o utilizador está noutra app.', N'Ex: O Spotify a tocar música enquanto lê e-mails.', NULL, NULL),
('fase17', N'Qual a diferença entre ''px'' (pixels) e ''dp'' (density-independent pixels)?', N'O pixel varia de tamanho consoante o ecrã. O ''dp'' ajusta-se automaticamente à densidade do ecrã para que os botões tenham sempre o mesmo tamanho físico.', N'Responsividade móvel.', NULL, NULL),
('fase17', N'O que é o Firebase?', N'Uma plataforma da Google (BaaS) que fornece base de dados em tempo real, autenticação, analytics e hospedagem, simplificando o Back-end de apps.', N'Back-end as a Service.', NULL, NULL),
('fase17', N'O que é a funcionalidade ''Hot Reload''?', N'A capacidade de injetar código alterado diretamente na app em execução, atualizando a interface em segundos sem perder o estado ou reiniciar a app.', N'Acelera a criação de UIs.', NULL, NULL),
('fase17', N'O que é o Material Design?', N'Um sistema de design global criado pela Google focado em UI limpa, com sombras físicas, cores vibrantes e animações de transição intuitivas.', N'O padrão visual do Android.', NULL, NULL),
('fase17', N'O que é uma WebView?', N'Um componente invisível que embute um navegador web dentro de uma app nativa, permitindo renderizar páginas HTML diretamente no ecrã.', N'Um browser disfarçado de app.', NULL, NULL),
('fase17', N'O que é o sistema de Permissões Mobile?', N'O mecanismo de segurança (exigido por Android e iOS) que obriga a app a perguntar ao utilizador se pode aceder à câmara, microfone ou ficheiros.', N'''Permitir acesso à câmara?''', NULL, NULL);
GO

-- --- FASE18 ---
INSERT INTO Flashcards (CodigoFase, Frente, Verso, Dica, Opcoes, Correta) VALUES
('fase18', N'O que é uma Stored Procedure (Procedimento Armazenado)?', N'Um bloco de código SQL guardado na base de dados para ser reutilizado várias vezes pelas aplicações que se conectam a ela.', N'Disciplina: Programação de Bases de Dados.', NULL, NULL),
('fase18', N'O que é uma Trigger (Gatilho)?', N'Um código SQL que é disparado e executado automaticamente no exato momento em que ocorre um evento (Insert, Update, Delete) numa tabela.', N'Ótimo para manter históricos/logs automáticos.', NULL, NULL),
('fase18', N'Qual a principal diferença entre uma View e uma Tabela?', N'A tabela armazena dados físicos no disco. A View é uma ''tabela virtual'' temporária que apresenta o resultado de uma consulta pré-definida (SELECT).', N'A View não ocupa espaço com os dados.', NULL, NULL),
('fase18', N'O que é o conceito ACID em transações?', N'Um conjunto de propriedades (Atomicidade, Consistência, Isolamento, Durabilidade) que garante que as transações na base de dados processam com segurança.', N'Garante a fiabilidade do sistema bancário.', NULL, NULL),
('fase18', N'Para que serve o comando COMMIT?', N'Para confirmar o sucesso de uma transação, guardando e gravando permanentemente as alterações efetuadas na base de dados.', N'Confirmar a gravação.', NULL, NULL),
('fase18', N'Para que serve o comando ROLLBACK?', N'Para reverter e cancelar todas as alterações feitas numa transação caso ocorra um erro antes do comando COMMIT.', N'O ''Desfazer'' (Ctrl+Z) da base de dados.', NULL, NULL),
('fase18', N'O que é um Cursor em SQL?', N'Uma estrutura de controlo que permite percorrer e processar os registos (linhas) resultantes de um SELECT, um por um.', N'Como um laço ''for'', mas muito lento em SQL.', NULL, NULL),
('fase18', N'O que é uma User-Defined Function (UDF)?', N'Uma função criada pelo utilizador para efetuar cálculos ou formatar dados e retornar um único valor (escalar) ou uma tabela.', N'Pode ser usada dentro de um comando SELECT.', NULL, NULL),
('fase18', N'Qual a principal diferença entre Procedure e Function em SQL?', N'Uma Function tem SEMPRE de devolver um valor e pode ser usada num SELECT. A Procedure pode apenas alterar dados e não pode ser usada num SELECT.', N'A função calcula, a procedure executa tarefas.', NULL, NULL),
('fase18', N'O que é um Índice Agrupado (Clustered Index)?', N'Ordena fisicamente os dados no disco da mesma forma que o índice. Uma tabela só pode ter UM índice agrupado (geralmente a Chave Primária).', N'Muda a ordem real das folhas no arquivo.', NULL, NULL),
('fase18', N'O que é um Índice Não Agrupado (Non-Clustered Index)?', N'Cria uma estrutura de procura separada (como um índice de livro) que aponta para os dados. Uma tabela pode ter vários.', N'Índice remissivo no fim de um livro.', NULL, NULL),
('fase18', N'O que é um Deadlock (Impasse)?', N'Quando duas ou mais transações ficam bloqueadas eternamente, com cada uma à espera que a outra liberte um recurso (tabela) que a outra bloqueou.', N'Abraço da morte.', NULL, NULL),
('fase18', N'O que é o nível de isolamento ''Read Uncommitted''?', N'O nível mais baixo de isolamento; permite a uma transação ler dados não confirmados (sujos) que ainda estão a ser alterados por outra transação.', N'Leitura fantasma/suja (Dirty Read).', NULL, NULL),
('fase18', N'O que é o T-SQL (Transact-SQL)?', N'Uma extensão proprietária da linguagem SQL criada pela Microsoft para uso no SQL Server, que adiciona lógica de programação (IF, WHILE, Variáveis).', N'A linguagem de programação do SQL Server.', NULL, NULL),
('fase18', N'O que faz o comando EXEC ou EXECUTE?', N'É utilizado para invocar e correr uma Stored Procedure ou executar uma string de código SQL dinâmico.', N'Dá o ''play'' na Procedure.', NULL, NULL),
('fase18', N'O que é uma Tabela Temporária (ex: #Tabela)?', N'Uma tabela que existe apenas temporariamente na memória (ou no tempdb) durante a ligação do utilizador e é eliminada ao encerrar a sessão.', N'Usa o símbolo ''#'' na frente do nome.', NULL, NULL),
('fase18', N'Para que serve a função SCOPE_IDENTITY() em T-SQL?', N'Devolve o último valor de Identidade (ID autoincremental) que acabou de ser gerado pelo INSERT na sessão e escopo atuais.', N'Qual foi o ID que acabei de inserir?', NULL, NULL),
('fase18', N'Qual a diferença entre a cláusula WHERE e a HAVING?', N'O WHERE filtra os dados ANTES do agrupamento. O HAVING filtra os dados JÁ AGRUPADOS por uma função agregadora (SUM, COUNT).', N'HAVING é o WHERE do GROUP BY.', NULL, NULL),
('fase18', N'O que é o Particionamento de Tabelas?', N'A divisão de uma tabela gigantesca em pedaços (partições) menores distribuídos por vários discos, para melhorar drasticamente a performance.', N'Ex: Particionar dados por ano (2025, 2026).', NULL, NULL),
('fase18', N'O que é um Plano de Execução (Execution Plan)?', N'A rota ou estratégia interna escolhida pelo motor da base de dados para recuperar os dados da forma mais otimizada possível.', N'Mostra se o SQL está a usar os índices corretamente.', NULL, NULL);
GO

-- --- FASE19 ---
INSERT INTO Flashcards (CodigoFase, Frente, Verso, Dica, Opcoes, Correta) VALUES
('fase19', N'O que é a Cloud Computing (Computação em Nuvem)?', N'A entrega de serviços informáticos (servidores, bases de dados, software) via Internet, geridos por terceiros com base no ''pague o que utilizar''.', N'Disciplina: Cloud e DevOps.', NULL, NULL),
('fase19', N'O que é o Docker?', N'Uma plataforma de código aberto que automatiza a instalação e execução de aplicações em unidades padronizadas e isoladas chamadas Contentores.', N'Acaba com o ''no meu PC funciona''.', NULL, NULL),
('fase19', N'Para que serve o Kubernetes?', N'É um sistema (orquestrador) desenvolvido pela Google para automatizar o deployment, o escalonamento e a gestão de milhares de contentores Docker.', N'O capitão/orquestrador dos contentores.', NULL, NULL),
('fase19', N'O que significa CI/CD?', N'Continuous Integration (Integração Contínua) e Continuous Deployment (Entrega Contínua). O processo de automatizar testes e lançamentos de código em produção.', N'Automatização desde o ''git push'' até ao servidor.', NULL, NULL),
('fase19', N'Defina IaaS, PaaS e SaaS.', N'IaaS (Máquina/Infraestrutura alugada); PaaS (Ambiente para desenvolvimento); SaaS (Software final pronto para o utilizador, ex: Gmail).', N'Os 3 níveis do serviço Cloud.', NULL, NULL),
('fase19', N'O que é Escalabilidade Horizontal?', N'Aumentar a capacidade adicionando MAIS máquinas (servidores) ao sistema, dividindo a carga entre eles.', N'Scale-out.', NULL, NULL),
('fase19', N'O que é Escalabilidade Vertical?', N'Aumentar a capacidade colocando mais recursos físicos (mais RAM ou CPU mais potente) na MESMA máquina existente.', N'Scale-up.', NULL, NULL),
('fase19', N'O que é Serverless (Computação sem Servidor)?', N'Modelo onde o provedor Cloud aloca recursos dinamicamente. O programador apenas escreve o código (funções) e só paga pelo tempo exato de execução.', N'Ex: AWS Lambda.', NULL, NULL),
('fase19', N'O que é IaC (Infraestrutura como Código)?', N'A gestão e provisionamento de centros de dados Cloud através de ficheiros com código e scripts, em vez de configurar as coisas manualmente em painéis web.', N'O servidor configurado em linhas de código.', NULL, NULL),
('fase19', N'O que é o Terraform?', N'Uma ferramenta open-source popular de IaC (Infraestrutura como Código) que permite criar, alterar e gerir redes seguras e eficientes em múltiplos provedores Cloud.', N'Automatiza a criação do servidor.', NULL, NULL),
('fase19', N'O que é o AWS EC2?', N'Amazon Elastic Compute Cloud. O serviço de IaaS da Amazon que permite alugar e correr servidores virtuais (instâncias) na nuvem.', N'A máquina virtual da Amazon.', NULL, NULL),
('fase19', N'O que é o Amazon S3?', N'Amazon Simple Storage Service. Um serviço de armazenamento de ficheiros em nuvem seguro e infinitamente escalável focado em objetos (imagens, backups).', N'O ''disco rígido'' infinito da AWS.', NULL, NULL),
('fase19', N'O que é um Pipeline de DevOps?', N'Um conjunto de etapas automatizadas (Build, Test, Deploy) que o código percorre desde o repositório até ser publicado no servidor final.', N'A esteira de montagem do software.', NULL, NULL),
('fase19', N'O que é uma Arquitetura de Microsserviços?', N'Onde uma aplicação grande é construída como um conjunto de pequenos serviços modulares e independentes, cada um correndo o seu próprio processo.', N'Opõe-se à arquitetura Monolítica.', NULL, NULL),
('fase19', N'O que é o GitHub Actions?', N'Uma plataforma nativa no GitHub que permite criar, testar e fazer o deployment automático do seu código (pipeline de CI/CD).', N'Ação automatizada sempre que se faz um ''push''.', NULL, NULL),
('fase19', N'O que significa ''Alta Disponibilidade'' (High Availability)?', N'Sistemas configurados (usando balanceadores e redundância) para garantirem que estão online e acessíveis 99,99% do tempo, sem paralisações.', N'O sistema não pode cair.', NULL, NULL),
('fase19', N'No Docker, o que é uma Imagem?', N'Um modelo/ficheiro imutável de apenas leitura contendo as instruções necessárias (SO, bibliotecas, código) para instanciar um Contentor.', N'A ''forma de bolo'' do contentor.', NULL, NULL),
('fase19', N'O que faz o comando ''docker-compose up''?', N'Lê o ficheiro ''docker-compose.yml'' e inicia simultaneamente múltiplos contentores interligados (ex: Aplicação + Banco de Dados).', N'Sobe todo o ambiente de uma vez.', NULL, NULL),
('fase19', N'O que é o Blue-Green Deployment?', N'Técnica de lançamento de software em que dois ambientes idênticos coexistem (Azul ativo, Verde atualizado). O tráfego é movido do Azul para o Verde sem o utilizador notar.', N'Atualização com Zero Downtime (sem paralisação).', NULL, NULL),
('fase19', N'O que é Monitorização e Observabilidade em DevOps?', N'Uso de ferramentas (métricas, logs, traces) para compreender rapidamente o estado interno de um sistema e detetar gargalos ou quedas antes do cliente.', N'Medição contínua da saúde do software.', NULL, NULL);
GO

-- --- FASE20 ---
INSERT INTO Flashcards (CodigoFase, Frente, Verso, Dica, Opcoes, Correta) VALUES
('fase20', N'O que é um MVP (Minimum Viable Product)?', N'A versão mais simples de um novo produto que permite à equipa recolher o máximo de validação sobre o cliente com o mínimo esforço.', N'Disciplina: Empreendedorismo em TI.', NULL, NULL),
('fase20', N'Qual o principal objetivo do Empreendedorismo em TI?', N'Identificar problemas ou necessidades reais da sociedade e criar soluções de base tecnológica escaláveis e inovadoras.', N'Não é só programar, é resolver uma dor.', NULL, NULL),
('fase20', N'O que caracteriza uma Startup?', N'Um grupo de pessoas à procura de um modelo de negócio inovador, repetível e escalável, a trabalhar em condições de extrema incerteza.', N'Não é apenas uma ''pequena empresa''.', NULL, NULL),
('fase20', N'O que é um Modelo B2B (Business to Business)?', N'Um modelo onde a empresa comercializa os seus produtos (como softwares ERP) ou serviços diretamente a outras Empresas, não a pessoas físicas.', N'Ex: A Microsoft a vender o Office à IBM.', NULL, NULL),
('fase20', N'O que é um Modelo B2C (Business to Consumer)?', N'Um modelo comercial em que os produtos ou serviços são vendidos diretamente da empresa para o consumidor ou utilizador final.', N'Ex: Spotify, Netflix, iFood.', NULL, NULL),
('fase20', N'O que é um ''Pitch'' (ou Pitch Deck)?', N'Uma apresentação verbal rápida (entre 3 a 5 minutos) utilizada para vender a ideia da sua startup a potenciais investidores ou parceiros.', N'Venda de elevador (Elevator Pitch).', NULL, NULL),
('fase20', N'O que é um Investidor Anjo (Angel Investor)?', N'Uma pessoa física (geralmente empresários de sucesso) que investe o seu próprio capital numa startup ainda na sua fase inicial de risco.', N'Aporta dinheiro e mentoria inteligente (Smart Money).', NULL, NULL),
('fase20', N'O que é Venture Capital (Capital de Risco)?', N'Fundos de investimento de grandes grupos aplicados em startups maduras com alto potencial de crescimento escalável e retorno agressivo.', N'Injetam os milhões na empresa.', NULL, NULL),
('fase20', N'O que significa o indicador CAC (Custo de Aquisição de Clientes)?', N'O montante médio que a empresa tem de gastar em marketing, anúncios e vendas para conseguir atrair um único cliente novo para o produto.', N'Quanto custa comprar um cliente.', NULL, NULL),
('fase20', N'O que é a métrica LTV (Lifetime Value)?', N'O lucro financeiro líquido que um cliente gera para a empresa durante todo o tempo em que mantém relacionamento e assinatura ativa.', N'A regra de ouro: O LTV tem de ser superior ao CAC.', NULL, NULL),
('fase20', N'O que significa o Churn Rate?', N'A taxa de cancelamento. A percentagem de clientes que param de pagar ou de usar o serviço da sua empresa num determinado período.', N'A métrica do ''balde furado''.', NULL, NULL),
('fase20', N'O que significa o termo ''Pivotar'' (Pivot) no mundo das startups?', N'Alterar fundamentalmente a estratégia do modelo de negócio ou as funcionalidades do produto ao perceber que a ideia original não está a dar lucro.', N'Mudar a rota do barco antes dele afundar.', NULL, NULL),
('fase20', N'O que é o Break-even Point (Ponto de Equilíbrio)?', N'O ponto financeiro de viragem em que os custos da empresa são iguais às suas receitas. Daí para a frente, a empresa passa finalmente a gerar lucro líquido.', N'O famoso ''ficar a zero e sair do vermelho''.', NULL, NULL),
('fase20', N'O que é a prática do ''Bootstrapping''?', N'Iniciar e desenvolver uma startup usando apenas os próprios recursos do fundador e o dinheiro dos primeiros clientes, sem aceitar investimento externo.', N'Crescer pelos seus próprios meios.', NULL, NULL),
('fase20', N'O que é o Business Model Canvas?', N'Uma ferramenta de gestão estratégica em formato visual (1 quadro com 9 blocos) focada em desenvolver ou documentar um modelo de negócio completo.', N'A evolução ágil do Plano de Negócios clássico.', NULL, NULL),
('fase20', N'O que é a Proposta de Valor (Value Proposition)?', N'A afirmação simples que explica o benefício do seu produto, como ele resolve a dor do cliente e por que ele deve comprar de si e não da concorrência.', N'O pilar central do seu negócio.', NULL, NULL),
('fase20', N'O que é o conceito de ''Growth Hacking''?', N'Uma abordagem focada no marketing impulsionado por experiências rápidas, ciência de dados e desenvolvimento de software para garantir o crescimento (Growth) explosivo.', N'Usar tecnologia no marketing em prol do crescimento.', NULL, NULL),
('fase20', N'O que é o indicador ROI (Return on Investment)?', N'Retorno Sobre o Investimento. Uma métrica utilizada para medir o lucro (rentabilidade) gerado num projeto em relação ao montante que foi inicialmente investido nele.', N'O projeto deu dinheiro ou prejuízo?', NULL, NULL),
('fase20', N'O que é considerado uma Startup ''Unicórnio''?', N'Uma empresa privada de tecnologia ou startup que consegue alcançar uma avaliação de mercado financeira igual ou superior a 1 Milhão de Dólares antes de ir para a bolsa de valores.', N'Uma avaliação astronômica e rara.', NULL, NULL),
('fase20', N'O que preconiza o método ''Lean Startup'' (Startup Enxuta) criado por Eric Ries?', N'Aplicar o ciclo ''Construir-Medir-Aprender'' num processo científico focado em lançar o MVP o mais depressa possível para validar factos sem desperdiçar dinheiro e tempo.', N'Falhar rapidamente, aprender depressa, gastar pouco.', NULL, NULL);
GO

-- --- FASE21 ---
INSERT INTO Flashcards (CodigoFase, Frente, Verso, Dica, Opcoes, Correta) VALUES
('fase21', N'(ENADE - Gestão) Uma empresa adotou metodologias ágeis. Durante uma iteração, a equipe percebeu que um dos requisitos estava mal detalhado, gerando atraso.

Qual cerimônia do Scrum é o momento IDEAL para a equipe inspecionar esse problema de processo e sugerir melhorias para o próximo ciclo?', N'Alternativa D: Sprint Retrospective.

Justificativa: A Retrospectiva serve exatamente para avaliar o processo, as falhas de comunicação e ferramentas, buscando melhoria contínua para a próxima Sprint.', N'Foco no processo e na equipe, não no produto.', N'A) Sprint Planning;B) Daily Scrum;C) Sprint Review;D) Sprint Retrospective', 3),
('fase21', N'(ENADE - LGPD) Uma clínica médica recolhe dados biométricos e histórico de doenças de seus pacientes. Segundo a Lei Geral de Proteção de Dados (LGPD), estes dados são classificados como:', N'Alternativa B: Dados Sensíveis.

Justificativa: Dados sobre saúde, biometria, origem racial, religião e orientação sexual são sensíveis pois podem gerar discriminação, exigindo maior rigor de proteção.', N'A saúde é um tema que exige proteção redobrada.', N'A) Dados Públicos;B) Dados Sensíveis;C) Dados Anonimizados;D) Dados Temporários', 1),
('fase21', N'(ENADE - UX/UI) Uma equipe está refatorando a interface de um sistema. O sistema atual possui textos com baixo contraste e depende apenas da cor vermelha para indicar erros.

Qual das ações abaixo NÃO corresponde a uma boa prática de Acessibilidade (WCAG)?', N'Alternativa B: Depender exclusivamente da cor para mensagens de erro.

Justificativa: Pessoas daltônicas não conseguirão identificar o erro. O correto é usar Cor + Ícone + Texto descritivo.', N'Pense na experiência de um usuário daltônico.', N'A) Adicionar atributos ''alt'' em imagens.;B) Depender exclusivamente da cor para mensagens de erro.;C) Garantir navegação completa via teclado (Tab).;D) Manter alto contraste entre fundo e texto.', 1),
('fase21', N'(ENADE - Eng. de Software) No contexto de levantamento de requisitos, um analista documentou: ''O sistema deve ser capaz de processar 10.000 transações por segundo''.

Este é um exemplo clássico de:', N'Alternativa C: Requisito Não Funcional.

Justificativa: Requisitos Não Funcionais descrevem *como* o sistema deve operar (desempenho, segurança, usabilidade), enquanto os Funcionais descrevem *o que* ele faz.', N'Refere-se à performance (o ''como''), não a uma funcionalidade.', N'A) Requisito Funcional;B) Regra de Negócio;C) Requisito Não Funcional;D) Caso de Uso', 2),
('fase21', N'(ENADE - Scrum) Durante o desenvolvimento de um produto, o cliente solicita constantemente mudanças. No framework Scrum, quem é o papel responsável por maximizar o valor do produto e gerenciar o Backlog, aceitando ou recusando essas mudanças?', N'Alternativa B: Product Owner (PO).

Justificativa: O PO é a voz do cliente dentro da equipe. Ele é o único responsável por priorizar, adicionar ou remover itens do Product Backlog.', N'É o ''dono'' do produto e do backlog.', N'A) Scrum Master;B) Product Owner (PO);C) Tech Lead;D) Desenvolvedor Full-Stack', 1),
('fase21', N'(ENADE - Ética) Um desenvolvedor descobre uma falha crítica de segurança no sistema da empresa e decide vendê-la na Dark Web em vez de reportá-la. 

Na segurança da informação, essa atitude enquadra-se no perfil de um hacker do tipo:', N'Alternativa C: Black Hat.

Justificativa: Hackers Black Hat exploram vulnerabilidades para ganho financeiro ou fins maliciosos, agindo de forma ilegal e antiética.', N'Chapéu preto = intenções maliciosas.', N'A) White Hat;B) Gray Hat;C) Black Hat;D) Red Hat', 2),
('fase21', N'(ENADE - UML) Em um Diagrama de Casos de Uso, quando um Caso de Uso ''A'' obrigatoriamente executa o Caso de Uso ''B'' para completar sua função, qual é o tipo de relacionamento entre eles?', N'Alternativa B: <<include>>.

Justificativa: O relacionamento <<include>> (inclusão) indica que o caso de uso base sempre, obrigatoriamente, incorpora o comportamento do caso de uso incluído.', N'É uma dependência obrigatória.', N'A) <<extend>>;B) <<include>>;C) Generalização;D) Associação Simples', 1),
('fase21', N'(ENADE - Governança) A biblioteca ITIL tem como foco principal o alinhamento da TI com os negócios da empresa. Qual é a principal diferença entre a ITIL e o COBIT?', N'Alternativa A: A ITIL foca em serviços; o COBIT foca em auditoria e governança.

Justificativa: A ITIL foca nas boas práticas de Gestão de Serviços de TI (ITSM), enquanto o COBIT fornece um modelo abrangente de Governança corporativa e auditoria de TI.', N'ITIL = Serviços. COBIT = Controle/Auditoria.', N'A) A ITIL foca em serviços de TI; o COBIT foca em auditoria e governança.;B) O COBIT é para desenvolvimento ágil; a ITIL é para gestão financeira.;C) Ambos são frameworks exclusivos para segurança da informação.;D) A ITIL substitui a LGPD; o COBIT substitui o Scrum.', 0),
('fase21', N'(ENADE - Qualidade) Em um processo de testes de software, os testes unitários são fundamentais. Quem é o principal responsável pela criação e execução dos testes unitários?', N'Alternativa C: O Desenvolvedor do código.

Justificativa: Os testes unitários validam os menores blocos de código (funções/métodos) e devem ser escritos pelo próprio programador que desenvolveu a lógica.', N'Quem escreve a função, testa a função.', N'A) O Analista de Requisitos;B) O Usuário Final;C) O Desenvolvedor do código;D) O Gerente de Projetos', 2),
('fase21', N'(ENADE - Inovação) No contexto de startups, o conceito de MVP (Minimum Viable Product) refere-se a:', N'Alternativa C: A versão mais simples de um produto para validação.

Justificativa: O MVP serve para testar a viabilidade do negócio no mercado rapidamente, recolhendo feedback antes de investir pesadamente no desenvolvimento.', N'Mínimo + Viável = Rápido e Funcional.', N'A) Um produto finalizado e sem bugs.;B) A versão mais complexa de um sistema para testes de estresse.;C) A versão mais simples de um produto que permite validar uma hipótese com o menor esforço.;D) Um protótipo visual feito apenas no papel.', 2),
('fase21', N'(ENADE - Negócios) Um modelo de negócio onde uma empresa fornece software através da internet mediante uma assinatura mensal (como a Netflix ou Spotify) é classificado como:', N'Alternativa C: SaaS (Software as a Service).

Justificativa: No modelo SaaS, o usuário final acessa uma aplicação pronta e hospedada na nuvem, pagando pelo uso ou assinatura, sem se preocupar com a infraestrutura.', N'O S significa Software.', N'A) IaaS (Infrastructure as a Service);B) PaaS (Platform as a Service);C) SaaS (Software as a Service);D) DaaS (Data as a Service)', 2),
('fase21', N'(ENADE - Métricas) O que mede o KPI conhecido como ''Churn Rate'' em uma empresa de tecnologia SaaS?', N'Alternativa B: A taxa de cancelamento de clientes.

Justificativa: O Churn mede a porcentagem de clientes que pararam de usar o serviço. É uma métrica crítica para avaliar a retenção e a satisfação do cliente.', N'Churn significa perda ou cancelamento.', N'A) O número de novos usuários por mês.;B) A taxa de cancelamento ou evasão de clientes em um determinado período.;C) A velocidade de carregamento da página.;D) O custo para adquirir um novo cliente (CAC).', 1),
('fase21', N'(ENADE - Negócios) Em finanças e gestão de TI, o que significa a métrica ROI?', N'Alternativa B: Return on Investment (Retorno sobre Investimento).

Justificativa: O ROI mede a rentabilidade de um investimento, calculando quanto dinheiro a empresa ganhou ou perdeu em relação ao valor que foi investido no projeto.', N'Mede se o projeto deu lucro ou prejuízo.', N'A) Return on Incident (Retorno sobre Incidente).;B) Return on Investment (Retorno sobre Investimento).;C) Rate of Integration (Taxa de Integração).;D) Resource Optimization Index (Índice de Otimização de Recursos).', 1),
('fase21', N'(ENADE - Kanban) O que significa a prática de ''Limitar o WIP'' (Work in Progress) na metodologia Kanban?', N'Alternativa B: Restringir a quantidade de tarefas em andamento.

Justificativa: Limitar o WIP evita a sobrecarga da equipe, foca na finalização das tarefas (terminar o que começou) e identifica gargalos no fluxo de trabalho.', N'Pare de começar e comece a terminar.', N'A) Limitar o número de horas que a equipe pode trabalhar por dia.;B) Restringir a quantidade máxima de tarefas que podem estar em andamento simultaneamente em uma coluna do quadro.;C) Limitar o acesso do cliente ao código-fonte.;D) Reduzir o escopo do projeto pela metade.', 1),
('fase21', N'(ENADE - LGPD) De acordo com a LGPD, quem é a figura do ''Titular'' dos dados?', N'Alternativa C: A pessoa natural (física) a quem se referem os dados pessoais.

Justificativa: Na LGPD, o titular é o dono dos dados (o cidadão, cliente ou funcionário), e a ele são garantidos os direitos de acesso, alteração e eliminação.', N'É o verdadeiro dono da informação.', N'A) A empresa que armazena os dados no banco de dados.;B) O administrador do sistema (DBA).;C) A pessoa natural (física) a quem se referem os dados pessoais.;D) O governo federal.', 2),
('fase21', N'(ENADE - LGPD) De acordo com a LGPD, quem é o ''DPO'' (Data Protection Officer) ou Encarregado de Dados?', N'Alternativa C: O canal de comunicação sobre proteção de dados.

Justificativa: O DPO (Encarregado) é o profissional responsável por garantir que a empresa está em conformidade com a LGPD e atuar como ponte de comunicação oficial.', N'É o ''porta-voz'' da privacidade na empresa.', N'A) O hacker contratado para testar o sistema.;B) O gerente de banco de dados (DBA).;C) A pessoa indicada pela empresa para atuar como canal de comunicação entre a empresa, os titulares dos dados e a Autoridade Nacional (ANPD).;D) O desenvolvedor back-end sênior.', 2),
('fase21', N'(ENADE - Cloud) Uma empresa quer focar apenas em escrever o código do seu sistema web, sem precisar gerenciar o sistema operacional do servidor, atualizações de segurança ou redes. Qual modelo de Cloud deve ser contratado?', N'Alternativa B: PaaS (Platform as a Service).

Justificativa: O modelo PaaS fornece o ambiente e as ferramentas para o desenvolvedor executar a aplicação, abstraindo toda a gestão da infraestrutura por trás.', N'Plataforma focada no desenvolvedor (Platform).', N'A) IaaS;B) PaaS;C) SaaS;D) On-Premises', 1),
('fase21', N'(ENADE - Projetos) Em uma matriz SWOT (FOFA), quais os fatores representam o ambiente EXTERNO da organização, sobre os quais a empresa não tem controle direto?', N'Alternativa D: Oportunidades e Ameaças.

Justificativa: Forças e Fraquezas são aspectos internos (equipe, tecnologia). Oportunidades e Ameaças vêm de fora (mercado, concorrência, novas leis).', N'O que vem de fora (mercado/leis).', N'A) Forças e Fraquezas;B) Fraquezas e Oportunidades;C) Forças e Ameaças;D) Oportunidades e Ameaças', 3),
('fase21', N'(ENADE - Qualidade de Software) O que é o processo de Refatoração (Refactoring)?', N'Alternativa B: Melhorar a estrutura interna sem alterar o comportamento externo.

Justificativa: Refatorar é limpar o código (deixá-lo mais legível, otimizado e modular) sem mudar as regras de negócio ou a interface do usuário.', N'Melhorar por dentro, manter igual por fora.', N'A) Reescrever o código para alterar suas funcionalidades externas e adicionar botões.;B) Melhorar a estrutura interna do código sem alterar seu comportamento externo (o que o usuário vê).;C) Apagar o sistema e começar tudo do zero.;D) Adicionar novas features durante a fase de testes.', 1),
('fase21', N'(ENADE - Gestão) O Ciclo PDCA é uma ferramenta de gestão interativa amplamente utilizada para o controle e melhoria contínua. O que significam as siglas PDCA?', N'Alternativa B: Plan (Planejar), Do (Fazer), Check (Checar), Act (Agir).

Justificativa: O PDCA é um método de 4 passos para garantir a melhoria contínua de processos e produtos em qualquer área da empresa.', N'Planejar, Fazer, Verificar e Agir.', N'A) Program, Develop, Code, Analyze.;B) Plan, Do, Check, Act.;C) Process, Data, Control, Audit.;D) Plan, Deploy, Compile, Act.', 1),
('fase21', N'(ENADE - Eng. Requisitos) Uma técnica ágil eficaz para capturar requisitos sob a perspectiva do usuário segue o formato: ''Como [perfil], eu quero [ação], para [benefício]''. Como se chama essa técnica?', N'Alternativa B: História de Usuário (User Story).

Justificativa: A User Story é uma técnica ágil focada em descrever uma funcionalidade sob a perspectiva do usuário final e do valor que ela gera para o negócio.', N'Foca no ''quem'', ''o quê'' e ''porquê''.', N'A) Diagrama de Classes;B) História de Usuário (User Story);C) Mapa Mental;D) Documento de Visão', 1),
('fase21', N'(ENADE - Eng. Requisitos) Na metodologia Ágil, quando uma História de Usuário (User Story) é muito grande ou complexa para ser entregue em uma única Sprint, como ela é chamada?', N'Alternativa B: Épico (Epic).

Justificativa: Um Épico é uma grande iniciativa ou requisito que não cabe em uma Sprint e precisa ser quebrado (fatiado) em várias User Stories menores.', N'Uma história grande e épica.', N'A) Bug;B) Épico (Epic);C) Tarefa (Task);D) Spike', 1),
('fase21', N'(ENADE - Design Thinking) O Design Thinking é uma abordagem de inovação centrada no ser humano. Qual é a primeira etapa fundamental desse processo?', N'Alternativa D: Empatia (Imersão).

Justificativa: Antes de criar soluções, a equipe precisa se colocar no lugar do usuário (empatia) para entender profundamente suas dores, necessidades e o contexto do problema.', N'Se colocar no lugar do cliente primeiro.', N'A) Prototipação;B) Ideação;C) Teste;D) Empatia (Imersão)', 3),
('fase21', N'(ENADE - Projetos) No PMBOK, o que é o ''Caminho Crítico'' em um cronograma de projeto?', N'Alternativa B: A sequência que determina a duração total mais longa.

Justificativa: As tarefas no caminho crítico têm zero ''folga''. Se uma delas atrasar um dia, todo o projeto atrasará um dia no cronograma.', N'São as tarefas sem folga de tempo.', N'A) A sequência de atividades com o menor risco de falha.;B) A sequência de atividades que determina a duração total do projeto, onde qualquer atraso afeta a data de entrega final.;C) O conjunto de tarefas que custam mais dinheiro.;D) O caminho percorrido pelo cliente.', 1),
('fase21', N'(ENADE - Projetos) O ''Triângulo de Ferro'' da gestão de projetos clássica define três restrições principais que devem ser equilibradas para garantir a qualidade do projeto. Quais são elas?', N'Alternativa B: Escopo, Tempo e Custo.

Justificativa: Alterar um lado do triângulo invariavelmente afeta os outros. Se o cliente aumentar o Escopo, o Tempo e/ou o Custo precisarão ser aumentados para manter a qualidade.', N'Restrições triplas clássicas.', N'A) Código, Testes e Deploy.;B) Escopo, Tempo e Custo.;C) Risco, Qualidade e Comunicação.;D) Design, Front-end e Back-end.', 1),
('fase21', N'(ENADE - Empreendedorismo) O que significa a sigla B2B em modelos de negócios?', N'Alternativa A: Business to Business.

Justificativa: B2B ocorre quando uma empresa cria soluções (como um ERP de RH ou maquinário pesado) e vende para outras empresas, e não para pessoas físicas.', N'Empresa para Empresa.', N'A) Business to Business (Empresa vendendo para Empresa).;B) Business to Consumer (Empresa vendendo para Consumidor final).;C) Back to Basics (De volta ao básico).;D) Banco para Banco.', 0),
('fase21', N'(ENADE - Inovação) A Uber mudou completamente a indústria de transportes sem possuir um único carro de frota. O Netflix fez o mesmo com as locadoras de vídeo. Esse fenômeno é conhecido como:', N'Alternativa C: Inovação Disruptiva.

Justificativa: Inovações disruptivas criam um novo mercado ou rede de valor, desestabilizando líderes de mercado existentes e mudando as regras do jogo.', N'Destrói o modelo antigo e cria um novo.', N'A) Inovação Incremental;B) Inovação de Sustentação;C) Inovação Disruptiva;D) Reengenharia Reversa', 2),
('fase21', N'(ENADE - Scrum) O que é o objetivo da cerimônia ''Daily Scrum''?', N'Alternativa B: Reunião diária de sincronização (Timebox de 15 min).

Justificativa: A Daily serve para a equipe de desenvolvimento inspecionar o progresso em direção ao objetivo da Sprint e identificar impedimentos rapidamente.', N'Reunião em pé (Stand-up), rápida e diária.', N'A) Discutir a arquitetura técnica do banco de dados por 2 horas.;B) Reunião diária de no máximo 15 minutos para sincronizar as atividades da equipe e planejar as próximas 24 horas.;C) Apresentar o software finalizado para o cliente.;D) Revisar as falhas do membro mais lento da equipe.', 1),
('fase21', N'(ENADE - Scrum) Quem é o ''Scrum Master'' na metodologia ágil?', N'Alternativa B: O líder servidor e facilitador.

Justificativa: O Scrum Master não é um gerente que dita tarefas. Ele facilita cerimônias, protege a equipe de distrações externas e remove gargalos (impedimentos).', N'Líder servidor e facilitador.', N'A) O chefe ou gerente tradicional que manda na equipe.;B) O líder servidor que garante que o Scrum seja compreendido e aplicado, removendo impedimentos técnicos e organizacionais da equipe.;C) O desenvolvedor que escreve o código mais rápido.;D) O representante legal do cliente (Product Owner).', 1),
('fase21', N'(ENADE - Negócios) O que é o CAC (Custo de Aquisição de Clientes)?', N'Alternativa B: O custo para atrair um novo cliente.

Justificativa: O CAC mostra quanto dinheiro a empresa precisou gastar em campanhas publicitárias e vendedores para convencer uma pessoa a comprar o produto.', N'Quanto custa ''comprar'' um cliente novo.', N'A) O valor que o cliente paga mensalmente pelo software.;B) O custo total com marketing e vendas dividido pelo número de novos clientes conquistados.;C) A taxa de cancelamento de assinaturas.;D) O custo dos servidores na nuvem AWS.', 1),
('fase21', N'(ENADE - Sustentabilidade) O conceito de ''Green IT'' (TI Verde) busca reduzir o impacto ambiental da tecnologia. Qual das práticas abaixo NÃO é uma prática de TI Verde?', N'Alternativa B: Descarte de lixo eletrônico em aterros comuns.

Justificativa: Lixo eletrônico contém metais pesados (chumbo, mercúrio) tóxicos. A TI Verde exige a reciclagem e o descarte correto especializado desses componentes.', N'Lixo eletrônico é altamente tóxico.', N'A) Virtualização de servidores para economizar energia física.;B) Descarte de lixo eletrônico em aterros sanitários comuns.;C) Uso de data centers alimentados por energia eólica/solar.;D) Políticas de impressão reduzida e digitalização de documentos.', 1),
('fase21', N'(ENADE - Qualidade) O que é o Teste UAT (User Acceptance Testing) no ciclo de vida de um software?', N'Alternativa C: Teste de Aceitação do Usuário.

Justificativa: O UAT é o momento onde os stakeholders finais (quem pediu o software) validam se o sistema construído realmente atende às necessidades de negócio acordadas.', N'É a validação final do cliente.', N'A) Teste focado em verificar vulnerabilidades de banco de dados.;B) Teste executado por um robô para checar a API.;C) Teste de Aceitação do Usuário, a fase final onde o cliente testa o sistema no mundo real antes de o aprovar para produção.;D) Teste de mesa para revisar diagramas UML.', 2),
('fase21', N'(ENADE - Governança) O que é um SLA (Service Level Agreement - Acordo de Nível de Serviço)?', N'Alternativa B: Um contrato de garantia de serviço.

Justificativa: O SLA estabelece métricas claras (tempo de resposta do suporte, uptime do site, penalidades financeiras se o serviço cair) que o fornecedor deve cumprir.', N'É o contrato de garantias técnicas.', N'A) Um protocolo de internet para enviar e-mails.;B) Um contrato que define as expectativas de nível de serviço entre o provedor e o cliente (ex: garantir 99,9% de disponibilidade do servidor).;C) Uma lei brasileira de proteção de dados.;D) Uma certificação de qualidade de código C#.', 1),
('fase21', N'(ENADE - DevOps) A cultura DevOps visa a integração contínua (CI) e entrega contínua (CD). O que é o processo de ''Integração Contínua'' (CI)?', N'Alternativa B: Fazer merge frequente de código com testes automatizados.

Justificativa: A CI (Continuous Integration) garante que as alterações de código feitas pela equipe sejam validadas constantemente, evitando o ''integration hell'' no final do projeto.', N'Evita conflitos gigantes de código no GitHub.', N'A) Juntar as equipes de RH e TI na mesma sala.;B) Fazer o merge frequente do código de vários desenvolvedores em um repositório central, executando testes automatizados a cada envio.;C) Ligar o banco de dados SQL a um banco NoSQL.;D) Lançar o sistema diretamente em produção sem testes.', 1),
('fase21', N'(ENADE - Inovação) No mundo das Startups, o que significa a expressão ''Pivotar'' (Pivot)?', N'Alternativa C: Alterar a direção e o modelo de negócio.

Justificativa: Pivotar significa manter um pé na visão da empresa, mas girar em outra direção para encontrar um mercado mais lucrativo (Ex: A Netflix começou entregando DVDs pelo correio).', N'Mudar a rota do barco antes de afundar.', N'A) Vender a empresa para o Google.;B) Mudar o código de Python para Java.;C) Alterar drasticamente a estratégia ou o modelo de negócio da startup após perceber que a ideia original não está dando certo no mercado.;D) Demitir toda a equipe executiva.', 2),
('fase21', N'(ENADE - Gestão) Na gestão de projetos e Governança de TI, quem são os ''Stakeholders''?', N'Alternativa C: Todas as partes interessadas.

Justificativa: Stakeholder é qualquer pessoa ou grupo que tem interesse no sucesso (ou fracasso) do projeto, indo desde o CEO até o usuário final do aplicativo.', N'Partes interessadas (todos os envolvidos).', N'A) Apenas os acionistas que colocaram dinheiro na empresa.;B) Os robôs que testam o software.;C) Todas as partes interessadas que podem afetar ou ser afetadas pelo projeto (clientes, equipe, usuários, governo, diretores).;D) Apenas os programadores do sistema.', 2),
('fase21', N'(ENADE - Ágil) No Scrum, qual é a principal função do gráfico ''Burndown Chart''?', N'Alternativa B: Visualizar o trabalho restante na Sprint.

Justificativa: A linha do Burndown cai (queima) a cada dia conforme as tarefas são concluídas, permitindo que a equipe saiba rapidamente se conseguirá entregar tudo até o fim da Sprint.', N'O gráfico ''queima'' para baixo até chegar a zero.', N'A) Mostrar o lucro financeiro da empresa ao longo do mês.;B) Visualizar graficamente a quantidade de trabalho restante versus o tempo restante na Sprint.;C) Rastrear quais desenvolvedores cometeram mais bugs.;D) Mapear a arquitetura de rede em nuvem.', 1),
('fase21', N'(ENADE - Governança) O que significa atuar em ''Compliance'' na área de Tecnologia da Informação?', N'Alternativa B: Estar em conformidade legal e normativa.

Justificativa: Compliance vem do verbo *to comply* (cumprir, estar de acordo). Significa seguir rigidamente as leis trabalhistas, de segurança de dados, ambientais e normas da indústria.', N'Andar na linha com as leis e regras.', N'A) Programar em linguagens modernas de alto nível.;B) Garantir que os processos de TI estejam em total conformidade e obedeçam a leis, regulamentos, políticas internas e normas externas (ex: LGPD).;C) Usar computadores da Apple.;D) Contratar seguro contra incêndios no servidor.', 1),
('fase21', N'(ENADE - Ética) Uma empresa copia integralmente o código-fonte e o layout de um aplicativo concorrente sem permissão, lançando-o como se fosse seu. Isso fere qual princípio ético/legal?', N'Alternativa B: Propriedade Intelectual e Direitos Autorais.

Justificativa: O código-fonte original é protegido por leis de direitos autorais como propriedade intelectual do seu criador. Copiá-lo para fins comerciais caracteriza pirataria/plágio.', N'O código tem um ''dono'' por direito autoral.', N'A) LGPD (Proteção de Dados).;B) Propriedade Intelectual e Direitos Autorais de Software.;C) Código de Defesa do Consumidor.;D) Marco Civil da Internet.', 1),
('fase21', N'(ENADE - Negócios) Em métricas financeiras de startups, o que é o Break-even Point (Ponto de Equilíbrio)?', N'Alternativa B: Receitas igualam os custos totais.

Justificativa: O Break-even é a linha mágica. A partir do momento em que a empresa ultrapassa esse ponto, cada nova venda começa finalmente a gerar Lucro real.', N'O zero a zero financeiro (empatou).', N'A) O momento em que a empresa decreta falência.;B) O momento em que a receita total da empresa iguala exatamente seus custos totais (não há lucro, nem prejuízo).;C) O pico máximo de vendas no final do ano.;D) O desconto dado aos primeiros clientes.', 1),
('fase21', N'(ENADE - Negócios) O que é a métrica LTV (Lifetime Value) em produtos SaaS?', N'Alternativa B: Valor gerado pelo cliente durante seu tempo de retenção.

Justificativa: Se um cliente paga R$ 50/mês na Netflix e assina por 20 meses, o LTV dele é de R$ 1.000. Uma empresa saudável deve ter o LTV muito maior que o CAC (Custo de Aquisição).', N'Valor de vida do cliente.', N'A) O tempo que o servidor fica ligado sem reiniciar.;B) O valor total de receita que um cliente gera para a empresa durante todo o tempo em que ele permanece como assinante.;C) O tempo de vida útil da bateria do notebook.;D) A multa rescisória do contrato.', 1),
('fase21', N'(ENADE - Projetos) Qual ferramenta visual, muito comum na gestão clássica de projetos (PMBOK), é formada por barras horizontais e ilustra o cronograma de atividades ao longo dos dias e meses?', N'Alternativa B: Gráfico de Gantt.

Justificativa: O Gráfico de Gantt é a representação visual de um cronograma, mostrando quando uma tarefa começa, quando termina e se ela depende do fim de outra tarefa anterior.', N'Gráfico de barras temporais em cascata.', N'A) Diagrama de Entidade-Relacionamento (DER).;B) Gráfico de Gantt.;C) Quadro Kanban.;D) Diagrama de Dispersão.', 1),
('fase21', N'(ENADE - Qualidade) Uma equipe implementou uma nova tela no sistema. Qual teste deve ser rodado para garantir que o código novo não quebrou ou gerou bugs em funcionalidades antigas que já estavam funcionando?', N'Alternativa C: Teste de Regressão.

Justificativa: Como o nome sugere, serve para verificar se o software ''regrediu'' em qualidade. É essencial rodá-lo (geralmente de forma automatizada) a cada nova atualização do sistema.', N'Garante que o passado não quebrou.', N'A) Teste de Usabilidade.;B) Teste de Carga/Estresse.;C) Teste de Regressão.;D) Teste de Invasão (PenTest).', 2),
('fase21', N'(ENADE - Scrum) No final de uma Sprint, a equipe realiza a ''Sprint Review'' (Revisão da Sprint). Qual é o propósito desta reunião?', N'Alternativa B: Inspecionar o produto pronto e colher feedback do cliente.

Justificativa: Enquanto a Retrospectiva foca no Processo da equipe, a Review foca no Produto. É a hora do ''Show and Tell'', mostrando o software rodando na prática.', N'Demonstração prática para o cliente.', N'A) Discutir os sentimentos da equipe e as falhas de comunicação.;B) Apresentar o incremento do software pronto para os Stakeholders/Cliente e adaptar o Backlog do Produto conforme o feedback.;C) Estimar o esforço das tarefas da próxima semana (Planning Poker).;D) Escrever a documentação técnica da API.', 1),
('fase21', N'(ENADE - Inovação) O que é um ''Design Sprint'' (criado pelo Google Ventures)?', N'Alternativa B: Processo de 5 dias para prototipar e validar ideias.

Justificativa: O Design Sprint condensa meses de debates em uma única semana focada, saindo do problema para uma ideia desenhada, prototipada e testada com usuários reais na sexta-feira.', N'Validação de ideia em 5 dias.', N'A) Uma corrida de programação onde ganha quem digitar mais rápido.;B) Um processo de 5 dias usado para responder questões críticas de negócios através do design, prototipação e teste de ideias com clientes.;C) Um framework para otimizar o banco de dados do Google.;D) Apenas o desenho do logotipo da empresa.', 1),
('fase21', N'(ENADE - Governança) O que é o COBIT na área de TI?', N'Alternativa B: Framework de Governança de TI.

Justificativa: O COBIT ajuda diretores e executivos a gerenciarem os riscos de TI, garantirem a segurança da informação e auditarem se os investimentos tecnológicos geram valor ao negócio.', N'Focado em Diretoria, Governança e Auditoria.', N'A) Uma linguagem de programação orientada a objetos baseada em COBOL.;B) Um framework global para a Governança e Gestão corporativa de Tecnologia da Informação.;C) Um software antivírus empresarial.;D) Uma lei americana de proteção de patentes.', 1),
('fase21', N'(ENADE - Negócios) O que é o modelo de negócio ''Marketplace''?', N'Alternativa B: Uma plataforma que conecta múltiplos vendedores a compradores.

Justificativa: A plataforma de Marketplace não possui necessariamente o estoque dos produtos; ela intermedeia a transação financeira, garantindo segurança e tráfego para os parceiros.', N'É um shopping center virtual.', N'A) Uma empresa que fabrica os próprios sapatos e os vende em loja física.;B) Uma plataforma online que conecta vendedores independentes a compradores, recebendo comissões pelas vendas (Ex: Mercado Livre, Amazon, Uber).;C) Uma ONG focada na doação de hardware antigo.;D) Um modelo onde o software é grátis mas o suporte é pago.', 1),
('fase21', N'(ENADE - Ética e IA) Em relação ao desenvolvimento de algoritmos de Inteligência Artificial, o que é o ''Viés Algorítmico'' (Algorithmic Bias)?', N'Alternativa C: Decisões discriminatórias baseadas em dados viciados.

Justificativa: Se uma IA de recrutamento for treinada com currículos de uma empresa que historicamente contratava mais homens brancos, a IA aprenderá que esse perfil é o ''ideal'' e passará a descartar minorias, herdando o preconceito humano.', N'A IA reproduzindo o preconceito humano.', N'A) Quando o código Python é substituído por R.;B) A capacidade da IA de ter sentimentos humanos.;C) Quando a IA toma decisões preconceituosas, injustas ou discriminatórias devido a falhas nos dados históricos usados em seu treinamento.;D) O atraso na resposta de um servidor de IA na nuvem.', 2),
('fase21', N'(ENADE - Ágil) No Scrum, O que representa o ''Product Backlog''?', N'Alternativa C: Lista viva e priorizada de requisitos.

Justificativa: O Product Backlog nunca está ''pronto''. Enquanto o produto existir, o backlog existirá, sendo constantemente refinado e priorizado pelo Product Owner com base no valor de negócio.', N'Lista de desejos do produto.', N'A) Uma lista estática de requisitos que nunca pode ser alterada após o início do projeto.;B) O log de erros do servidor em produção.;C) Uma lista viva, ordenada e priorizada de tudo que é conhecido e necessário para criar e melhorar o Produto.;D) O painel visual onde as tarefas estão na coluna ''Em Andamento''.', 2),
('fase21', N'(ENADE - Projetos) Durante o levantamento de Requisitos Funcionais, um usuário relata: ''A tela de login travou e apareceu erro 404''. Como a equipe de TI classifica essa informação?', N'Alternativa C: É um Bug (Defeito/Incidente).

Justificativa: O erro 404 indica que algo no código ou servidor que já deveria estar operando falhou. Bugs devem ser priorizados na fila de resolução, separados de novas features.', N'O sistema não operou conforme projetado.', N'A) É um requisito funcional novo.;B) É uma melhoria (Feature).;C) É um Bug (Defeito/Incidente) que afeta a disponibilidade e funcionalidade do sistema.;D) É um requisito de negócio estrutural.', 2);
GO

-- --- FASE22 ---
INSERT INTO Flashcards (CodigoFase, Frente, Verso, Dica, Opcoes, Correta) VALUES
('fase22', N'(ENADE - Algoritmos) Considere a estrutura de dados ''Fila'' (Queue) a ser usada para gerir requisições de impressão num escritório. Foram inseridos, nesta ordem, os ficheiros: A, B e C.

Se o comando ''dequeue()'' for executado duas vezes, qual ficheiro restará na fila?', N'Alternativa C: Ficheiro C.

Justificativa: A Fila segue o princípio FIFO (First In, First Out). O primeiro a entrar é o primeiro a sair. Sairão o A e o B, restando apenas o C.', N'FIFO = First In, First Out.', N'A) Ficheiro A;B) Ficheiro B;C) Ficheiro C;D) A fila ficará vazia', 2),
('fase22', N'(ENADE - POO) Na Programação Orientada a Objetos, qual é o pilar que permite ocultar os detalhes internos de implementação de uma classe (colocando variáveis como private) e expor apenas os métodos públicos necessários (getters/setters)?', N'Alternativa C: Encapsulamento.

Justificativa: O encapsulamento protege os dados do objeto contra alterações diretas indevidas por parte de outras classes, garantindo a integridade do estado interno.', N'Funciona como uma cápsula de proteção.', N'A) Herança;B) Polimorfismo;C) Encapsulamento;D) Abstração', 2),
('fase22', N'(ENADE - Bases de Dados) Num modelo relacional, o que caracteriza uma restrição de integridade referencial implementada através de uma Chave Estrangeira (Foreign Key)?', N'Alternativa B: Garante que os valores correspondam a uma Chave Primária noutra tabela.

Justificativa: A Chave Estrangeira impede que se registe um ''Pedido'' para um ''Cliente'' que não existe na base de dados, mantendo a integridade dos dados.', N'Evita registos órfãos.', N'A) Garante que uma coluna não tenha valores nulos (NOT NULL).;B) Garante que os valores de uma coluna de uma tabela existam como valores de uma chave primária (PK) noutra tabela relacionada.;C) Garante a ordenação alfabética das colunas.;D) Impede atualizações na base de dados.', 1),
('fase22', N'(ENADE - SQL) Qual comando DML (Data Manipulation Language) do SQL é utilizado para atualizar registos já existentes numa tabela?', N'Alternativa D: UPDATE.

Justificativa: O comando UPDATE altera os dados de uma ou mais linhas existentes. (O ALTER TABLE é um comando DDL usado para alterar a estrutura da tabela, não os dados).', N'Lembre-se da estrutura UPDATE ... SET ... WHERE.', N'A) ALTER TABLE;B) MODIFY;C) INSERT;D) UPDATE', 3),
('fase22', N'(ENADE - UML) Qual é a finalidade principal do Diagrama de Sequência na linguagem UML?', N'Alternativa C: Modelar a interação e a troca de mensagens ao longo do tempo.

Justificativa: O diagrama de sequência evidencia a ordem temporal cronológica das interações entre componentes ou atores num determinado cenário.', N'Foco na linha do tempo e nas mensagens (setas).', N'A) Mostrar a hierarquia de herança entre as classes.;B) Descrever os estados pelos quais um objeto passa durante a sua vida.;C) Modelar a interação e a troca de mensagens entre os objetos ao longo do tempo.;D) Estruturar a base de dados do sistema.', 2),
('fase22', N'(ENADE - Estruturas de Dados) Se necessitar de um algoritmo que faça pesquisas extremamente rápidas em grandes conjuntos de dados ordenados, qual estrutura e respetivo algoritmo oferecem complexidade O(log n)?', N'Alternativa C: Árvore Binária de Busca (Busca Binária).

Justificativa: Na busca binária, a cada passo dividimos o conjunto de dados pela metade, o que resulta na eficiência logarítmica O(log n).', N'A cada passo corta o problema pela metade.', N'A) Fila (Pesquisa Linear);B) Array não ordenado (Busca Cega);C) Árvore Binária de Busca (Busca Binária);D) Pilha (LIFO)', 2),
('fase22', N'(ENADE - Redes) Numa aplicação cliente-servidor (ex: Streaming de vídeo), onde a velocidade e o envio contínuo são mais importantes que a garantia de entrega de cada pacote, qual protocolo da camada de transporte é preferível utilizar?', N'Alternativa B: UDP.

Justificativa: O UDP não verifica se os pacotes chegaram ao destino (não tem confirmação de entrega - ACK), sendo muito mais rápido e ideal para transmissões em tempo real.', N'Rápido, mas sem confirmação.', N'A) TCP;B) UDP;C) HTTP;D) FTP', 1),
('fase22', N'(ENADE - Arquitetura) Qual é a principal característica da arquitetura de Microserviços em comparação com uma arquitetura Monolítica?', N'Alternativa B: Dividir a aplicação em pequenos serviços independentes.

Justificativa: Nos microserviços, cada serviço foca-se numa regra de negócio específica, podendo ser implementado e escalado de forma totalmente isolada.', N'Serviços pequenos e isolados.', N'A) Partilhar a mesma base de dados para todo o sistema de forma rígida.;B) Dividir a aplicação em pequenos serviços independentes que comunicam via APIs.;C) O código-fonte reside inteiramente num único ficheiro executável.;D) Não é compatível com computação na nuvem.', 1),
('fase22', N'(ENADE - SO) O que é o processo de ''Swapping'' (troca) gerido pelo Sistema Operativo?', N'Alternativa C: Transferir processos da RAM para o Disco (memória virtual).

Justificativa: Quando a memória RAM fica cheia, o SO move dados inativos para uma área de troca (Swap) no disco rígido, libertando RAM para processos mais urgentes.', N'Cria a ''memória virtual'' no disco.', N'A) Trocar o processador principal em tempo de execução.;B) Substituir o sistema Linux pelo Windows.;C) Transferir processos temporariamente da memória RAM para o Disco/SSD (memória virtual) para libertar espaço.;D) Efetuar a troca de pacotes de rede pelo router.', 2),
('fase22', N'(ENADE - Criptografia) Numa comunicação com criptografia Assimétrica (Chave Pública/Privada), como a Alice garante que uma mensagem que ela envia para o Bob só poderá ser lida por ele?', N'Alternativa B: Encriptando com a Chave Pública do Bob.

Justificativa: Se a Alice usar a Chave Pública do Bob (que todos conhecem) para encriptar, apenas a Chave Privada do Bob (que só ele possui) conseguirá desencriptar e ler a mensagem.', N'A fechadura é pública, mas a chave é privada.', N'A) Encriptando com a Chave Privada da Alice.;B) Encriptando com a Chave Pública do Bob.;C) Encriptando com a Chave Pública da Alice.;D) Encriptando com a Chave Privada do Bob.', 1),
('fase22', N'(ENADE - Web) O que é o modelo DOM (Document Object Model) no desenvolvimento Front-end?', N'Alternativa C: Representação estrutural do documento HTML como árvore de objetos.

Justificativa: O DOM permite que o JavaScript modifique elementos, estilos e eventos da página em tempo real, alterando a estrutura de árvore.', N'A ''árvore'' estrutural do HTML vista pelo JS.', N'A) Uma base de dados nativa do navegador.;B) Uma linguagem que substitui o HTML.;C) Uma interface de programação (API) que representa o documento HTML como uma árvore de objetos.;D) Um protocolo de rede.', 2),
('fase22', N'(ENADE - Lógica) O que é a Recursividade na construção de um algoritmo?', N'Alternativa B: Quando uma função chama-se a si mesma.

Justificativa: Algoritmos recursivos resolvem problemas complexos quebrando-os em instâncias menores do próprio problema (ex: cálculo de Fatorial).', N'Uma função que se invoca a si própria.', N'A) Um loop while infinito.;B) Quando uma função chama-se a si mesma até atingir uma condição de paragem.;C) Quando o código partilha variáveis globais.;D) Quando o código é executado num servidor remoto.', 1),
('fase22', N'(ENADE - POO) Qual é a utilidade prática de uma Classe Abstrata na POO?', N'Alternativa A: Servir apenas como modelo para herança.

Justificativa: Uma classe abstrata (ex: ''Animal'') representa um conceito genérico. Não se cria um ''Animal'' direto, mas sim instâncias concretas das filhas (''Cão'', ''Gato'').', N'Não permite usar o operador ''new'' diretamente nela.', N'A) Evitar que a classe seja instanciada diretamente, servindo apenas como modelo (superclasse) para as suas classes filhas.;B) Forçar que todos os seus métodos estejam vazios (como numa Interface).;C) Esconder o código-fonte num ficheiro DLL fechado.;D) Substituir o uso de variáveis locais no escopo.', 0),
('fase22', N'(ENADE - Segurança) Um atacante envia um link manipulado para a vítima. Quando a vítima clica no link, estando autenticada no site do banco, o código faz uma transferência indesejada. Este ataque é o:', N'Alternativa C: CSRF (Falsificação de Pedido Entre Sites).

Justificativa: No CSRF, o atacante usa a sessão válida (os cookies de login) do utilizador para executar ações indesejadas no servidor de destino.', N'Falsifica uma ação do próprio utilizador autenticado.', N'A) SQL Injection;B) Cross-Site Scripting (XSS);C) Cross-Site Request Forgery (CSRF);D) Buffer Overflow', 2),
('fase22', N'(ENADE - Redes) O que diferencia o protocolo HTTPS do protocolo HTTP padrão?', N'Alternativa B: O HTTPS utiliza encriptação SSL/TLS.

Justificativa: O ''S'' (Secure) garante que toda a comunicação entre o cliente e o servidor esteja encriptada, impedindo a interceção de dados em texto claro.', N'O cadeado no navegador.', N'A) O HTTPS é mais rápido para vídeo.;B) O HTTPS utiliza uma camada adicional de segurança (SSL/TLS) para encriptar os dados.;C) O HTTPS não exige servidor web.;D) O HTTPS usa o UDP em vez do TCP.', 1),
('fase22', N'(ENADE - ACID) A respeito das transações em Bases de Dados Relacionais, o que garante a propriedade da ''Atomicidade''?', N'Alternativa A: Tudo ou nada na transação.

Justificativa: Se no meio de uma transferência o sistema for abaixo, a atomicidade garante o ROLLBACK, revertendo toda a operação para que os dados não fiquem inconsistentes.', N'Ação indestrutível, executa tudo ou não executa nada.', N'A) A transação será executada inteiramente com sucesso, ou falhará totalmente (tudo ou nada).;B) O sistema volta sempre à versão original do dia anterior.;C) Duas transações não afetam a mesma tabela.;D) Os dados são salvos em múltiplos discos simultaneamente.', 0),
('fase22', N'(ENADE - API REST) Qual o método HTTP utilizado especificamente para solicitar a *atualização completa* de um recurso no servidor?', N'Alternativa A: PUT.

Justificativa: O PUT é usado para substituir completamente um recurso existente. O PATCH é usado quando se deseja atualizar apenas uma parte (atualização parcial) do recurso.', N'Substitui todo o objeto.', N'A) PUT;B) GET;C) PATCH;D) DELETE', 0),
('fase22', N'(ENADE - Design Patterns) O Padrão de Projeto ''Singleton'' é categorizado como um padrão de Criação. Qual é a sua finalidade no código?', N'Alternativa B: Garantir uma única instância global da classe.

Justificativa: Singleton é muito usado para gerir conexões com a base de dados, onde ter várias instâncias ativas gastaria memória desnecessária.', N'Single (Uma única instância).', N'A) Criar múltiplas instâncias dinâmicas de uma classe.;B) Garantir que uma classe tenha uma única instância em todo o sistema e fornecer um ponto global de acesso a ela.;C) Ocultar a complexidade de criação sob uma Interface.;D) Criar famílias de objetos inter-relacionados.', 1),
('fase22', N'(ENADE - Git) Num fluxo de trabalho usando Git, o que o comando ''git commit'' executa?', N'Alternativa C: Guarda o estado atual no repositório LOCAL.

Justificativa: O comando commit regista as alterações no histórico da máquina do utilizador. Para enviar para a nuvem, usa-se o git push.', N'Grava a versão localmente.', N'A) Envia o código para a nuvem no GitHub.;B) Cria uma cópia do projeto.;C) Guarda um snapshot do estado atual dos ficheiros modificados no repositório LOCAL do desenvolvedor.;D) Apaga o histórico.', 2),
('fase22', N'(ENADE - Algoritmos) Qual é a finalidade principal do algoritmo de ordenação ''Bubble Sort''?', N'Alternativa B: Percorrer listas e trocar pares vizinhos até ordenar.

Justificativa: O Bubble Sort é o algoritmo de ordenação mais simples e menos eficiente O(n²). O maior valor ''borbulha'' para a extremidade a cada ciclo.', N'Como bolhas a flutuar num copo.', N'A) Compactar ficheiros ZIP.;B) Percorrer uma lista, comparando pares vizinhos e trocando de posição se estiverem fora de ordem, até que o maior flutue para o final.;C) Pesquisar a palavra mais longa num texto.;D) Criar matrizes multidimensionais vazias.', 1),
('fase22', N'(ENADE - Bases de Dados) O que significa a operação de ''Normalização'' aplicada a um esquema de base de dados relacional?', N'Alternativa C: Eliminar anomalias e reduzir a redundância.

Justificativa: A normalização (1FN, 2FN, 3FN) garante que não haverá inconsistências (ex: ter duas moradas diferentes para a mesma pessoa) isolando dados repetidos.', N'Regras para organizar tabelas sem repetições.', N'A) Aumentar propositadamente a redundância para tornar as pesquisas rápidas.;B) Aumentar os tipos de dados permitidos.;C) Reestruturar as tabelas para eliminar anomalias de atualização, inserção e reduzir a redundância de dados.;D) Traduzir a base de dados para ORM.', 2),
('fase22', N'(ENADE - Sistemas Distribuídos) O que dita o Teorema CAP focado em Bases de Dados NoSQL e Sistemas Distribuídos?', N'Alternativa B: Impossível garantir as 3 propriedades simultaneamente (C, A e P).

Justificativa: Num cluster, em caso de falha de rede (Partição), deve-se escolher se paralisa o sistema para manter a Consistência ou se permite gravações para manter a Disponibilidade.', N'Escolha apenas duas de três.', N'A) Que não se pode ter uma rede sem routers.;B) Que é impossível fornecer simultaneamente as três garantias: Consistência (C), Disponibilidade (A) e Tolerância a Partição (P). Só se escolhe duas.;C) Que toda a base distribuída deve usar SQL.;D) Que backups evitam qualquer falha de hardware.', 1),
('fase22', N'(ENADE - Cloud) O que caracteriza a ''Escalabilidade Horizontal'' numa infraestrutura Web em comparação com a Vertical?', N'Alternativa B: Adicionar mais servidores e dividir o tráfego com Load Balancer.

Justificativa: A escalabilidade vertical (Scale-up) aumenta o poder da própria máquina. A horizontal (Scale-out) resolve a alta procura colocando mais máquinas a trabalhar em equipa.', N'Mais máquinas lado a lado = Horizontal.', N'A) Aumentar a CPU e a RAM do mesmo servidor existente.;B) Adicionar mais servidores à arquitetura e dividir o tráfego (Load Balancer) entre eles.;C) Aumento da largura de banda do provedor.;D) Mover o sistema on-premises para a nuvem.', 1),
('fase22', N'(ENADE - C) Na linguagem C, qual o grande problema causado quando o programador aloca memória dinamicamente usando malloc() e esquece de a libertar com free()?', N'Alternativa B: Memory Leak (Fuga de Memória).

Justificativa: O sistema operativo perde a referência dessa alocação, mas não a liberta. Se ocorrer repetidamente, o computador fica sem memória RAM disponível e crasha.', N'Fuga contínua de memória RAM.', N'A) Stack Overflow (Estouro da Pilha).;B) Memory Leak (Fuga de Memória).;C) Null Pointer Exception.;D) Loop Infinito.', 1),
('fase22', N'(ENADE - Engenharia de Software) Qual é o objetivo do padrão arquitetural MVC (Model-View-Controller)?', N'Alternativa B: Separar dados, interface e controlo lógico.

Justificativa: O MVC promove a separação de preocupações (Separation of Concerns), tornando o código mais modular, fácil de testar e de manter.', N'Separa o ecrã da lógica.', N'A) Aumentar o acoplamento do sistema.;B) Separar a representação da informação (dados), a interação do utilizador (interface) e o controlo lógico em três componentes interligados.;C) Juntar todo o código num único ficheiro JavaScript.;D) Substituir a necessidade de uma base de dados.', 1),
('fase22', N'(ENADE - POO) A técnica em que duas ou mais funções da mesma classe têm o mesmo nome, mas diferem no número ou tipo dos seus parâmetros, chama-se:', N'Alternativa B: Sobrecarga (Overloading).

Justificativa: A sobrecarga de métodos ocorre em tempo de compilação. Permite criar métodos com o mesmo nome (ex: calcularArea(int lado) e calcularArea(int base, int altura)) na mesma classe.', N'Mesmo nome, assinaturas diferentes.', N'A) Sobrescrita (Overriding);B) Sobrecarga (Overloading);C) Abstração;D) Interface', 1),
('fase22', N'(ENADE - Bases de Dados) Numa tabela de base de dados relacional, uma chave primária (Primary Key) composta é formada por:', N'Alternativa B: Dois ou mais atributos combinados.

Justificativa: Quando uma única coluna não é suficiente para garantir a exclusividade do registo (ex: ID_Aluno e ID_Disciplina numa tabela de matrículas), utiliza-se a junção das colunas como Chave Primária Composta.', N'Combinação de duas ou mais colunas.', N'A) Apenas um atributo numérico e autoincremental.;B) Dois ou mais atributos que, combinados, identificam unicamente uma linha na tabela.;C) Uma chave que faz referência a outra tabela externa.;D) Uma chave que permite valores nulos.', 1),
('fase22', N'(ENADE - Estruturas de Dados) Numa estrutura do tipo Pilha (Stack), as operações clássicas de inserção e remoção são conhecidas, respetivamente, como:', N'Alternativa C: Push e Pop.

Justificativa: Numa Pilha (LIFO - Last In, First Out), a operação de empilhar um item no topo chama-se ''Push'', e a operação de retirar o item do topo chama-se ''Pop''.', N'Empurrar e Estourar.', N'A) Enqueue e Dequeue;B) Insert e Delete;C) Push e Pop;D) Add e Remove', 2),
('fase22', N'(ENADE - Lógica) Numa expressão condicional, o operador lógico ''XOR'' (OU Exclusivo) retorna VERDADEIRO apenas quando:', N'Alternativa C: Apenas uma das proposições é verdadeira, e a outra é falsa.

Justificativa: O XOR (Exclusive OR) exige que as entradas sejam diferentes para ser verdadeiro. Se ambas forem iguais (True/True ou False/False), o resultado é falso.', N'Um ou outro, mas não os dois.', N'A) Ambas as proposições são verdadeiras.;B) Ambas as proposições são falsas.;C) Apenas uma das proposições é verdadeira, e a outra é falsa.;D) O valor é nulo.', 2),
('fase22', N'(ENADE - SQL) A cláusula GROUP BY no SQL é geralmente utilizada em conjunto com:', N'Alternativa B: Funções de agregação.

Justificativa: O GROUP BY serve para agrupar linhas que têm os mesmos valores em colunas de resumo, permitindo calcular médias, somas ou totais por grupo (ex: COUNT(*) de utilizadores agrupados por País).', N'Agrupa para somar ou contar.', N'A) Comandos INSERT e UPDATE.;B) Funções de agregação (como SUM, AVG, COUNT, MAX, MIN).;C) Comandos de criação de tabelas (CREATE TABLE).;D) Cláusulas LIMIT e OFFSET exclusivamente.', 1),
('fase22', N'(ENADE - Engenharia de Software) Qual é o modelo de ciclo de vida de software que se caracteriza por uma progressão estrita e linear através de fases (Requisitos, Design, Implementação, Testes, Manutenção) sem possibilidade de retorno natural à fase anterior?', N'Alternativa C: Modelo Cascata (Waterfall).

Justificativa: O modelo em cascata é sequencial e rígido. Uma nova fase só começa quando a anterior termina totalmente, sendo difícil e dispendioso acomodar mudanças de requisitos no meio do projeto.', N'A água só cai, não sobe.', N'A) Modelo Ágil (Scrum);B) Modelo em Espiral;C) Modelo Cascata (Waterfall);D) Modelo Prototipagem', 2),
('fase22', N'(ENADE - DevOps) Na terminologia de contentorização (ex: Docker), o que é uma ''Imagem'' (Image)?', N'Alternativa B: Um template read-only contendo as dependências para rodar a app.

Justificativa: A Imagem é o ''molde'' estático. Quando executamos uma Imagem no Docker, ela torna-se um Contentor (Container) vivo e em execução.', N'É a ''receita de bolo'' do contentor.', N'A) Uma fotografia JPEG do layout do site.;B) Um template apenas de leitura (read-only) que contém o SO, bibliotecas e o código-fonte necessário para executar a aplicação num contentor.;C) O disco rígido físico onde os dados são salvos permanentemente.;D) Um serviço de hospedagem na AWS.', 1),
('fase22', N'(ENADE - Sistemas Operativos) O conceito de ''Multithreading'' refere-se à:', N'Alternativa B: Múltiplas linhas de execução paralelas.

Justificativa: O Multithreading permite que a aplicação faça várias tarefas ao mesmo tempo (ex: um jogo carrega o som numa thread enquanto processa a física noutra), otimizando o uso do processador.', N'Processamento simultâneo.', N'A) Capacidade de ligar vários monitores ao computador.;B) Capacidade de um programa se dividir em múltiplas threads (linhas de execução) que podem ser processadas em paralelo pelo CPU.;C) Transferência de ficheiros pesados via FTP.;D) Instalação de múltiplos sistemas operativos no mesmo disco.', 1),
('fase22', N'(ENADE - Web) No desenvolvimento web, o que são as sessões armazenadas nos Cookies ou no Local Storage do navegador?', N'Alternativa B: Dados armazenados no cliente para manter o estado.

Justificativa: Como o HTTP é ''sem estado'' (não lembra da última requisição), os cookies e o Local Storage guardam os tokens de autenticação (ex: JWT) para manter o utilizador ''logado''.', N'Memória do navegador.', N'A) Ficheiros de vídeo em cache.;B) Pequenos fragmentos de dados armazenados no cliente (navegador) para manter o estado da aplicação e identificar o utilizador entre as requisições HTTP (que são stateless).;C) Componentes do servidor de base de dados MySQL.;D) Um protocolo de encriptação de senhas.', 1),
('fase22', N'(ENADE - Segurança) O que caracteriza um ataque do tipo ''SQL Injection'' (Injeção de SQL)?', N'Alternativa B: Inserir instruções SQL maliciosas em campos de input.

Justificativa: Ocorre quando a aplicação não filtra/higieniza os dados do utilizador. O atacante pode enviar algo como `'' OR 1=1 --` num campo de login para aceder ao sistema sem password.', N'Input malicioso que engana a base de dados.', N'A) Inserir um cabo de rede não autorizado no servidor.;B) Explorar vulnerabilidades numa aplicação inserindo instruções SQL maliciosas nos campos de input (formulários) para manipular ou destruir a base de dados.;C) Quando o banco de dados desliga por sobrecarga de memória.;D) Interceção de pacotes na rede Wi-Fi aberta.', 1),
('fase22', N'(ENADE - Redes) O Modelo OSI é um padrão de referência para interligação de sistemas abertos. É composto por quantas camadas lógicas?', N'Alternativa C: 7 camadas.

Justificativa: O Modelo OSI tem 7 camadas: Física, Enlace (Dados), Rede, Transporte, Sessão, Apresentação e Aplicação. O modelo TCP/IP, mais prático, é que condensa estas em apenas 4 camadas.', N'F-E-R-T-S-A-A.', N'A) 4 camadas;B) 5 camadas;C) 7 camadas;D) 9 camadas', 2),
('fase22', N'(ENADE - POO) A que conceito de POO se refere a afirmação: ''As subclasses podem fornecer a sua própria implementação específica para um método que já foi definido na superclasse''?', N'Alternativa B: Sobrescrita (Overriding).

Justificativa: A sobrescrita ocorre em tempo de execução quando uma classe herda de outra e redefine (altera o bloco de código) de um método existente no pai (ex: @Override no Java/C#).', N'A mesma assinatura, comportamento redefinido.', N'A) Construtor;B) Sobrescrita (Overriding);C) Sobrecarga (Overloading);D) Interface', 1),
('fase22', N'(ENADE - Arquitetura REST) Uma API RESTful deve ser ''Stateless'' (Sem Estado). O que isto significa obrigatoriamente?', N'Alternativa B: Cada requisição contém toda a informação necessária.

Justificativa: O servidor não guarda quem está ''logado''. O cliente envia um token (como o JWT) no cabeçalho (Header) de TODAS as requisições para provar quem é.', N'O servidor não tem memória da requisição passada.', N'A) Que não pode usar base de dados.;B) Que cada requisição do cliente para o servidor deve conter todas as informações necessárias para ser compreendida e processada, sem depender de contextos salvos no servidor.;C) Que o servidor deve gravar a sessão do cliente na memória RAM.;D) Que o formato de resposta tem de ser em XML.', 1),
('fase22', N'(ENADE - Lógica) Numa tabela de verdade para o operador lógico ''AND'' (E), se tivermos as variáveis A (Verdadeiro), B (Falso) e C (Verdadeiro), qual será o resultado da expressão A AND B AND C?', N'Alternativa B: Falso.

Justificativa: O operador AND lógico só retorna Verdadeiro se TODAS as condições fornecidas forem Verdadeiras. Como a variável B é Falsa, toda a expressão se torna Falsa.', N'AND exige perfeição (todos verdadeiros).', N'A) Verdadeiro;B) Falso;C) Null;D) Ocorre um erro de compilação.', 1),
('fase22', N'(ENADE - Algoritmos) Qual é a técnica de otimização de algoritmos (frequentemente usada junto com recursividade) que consiste em guardar os resultados de cálculos pesados já processados num cache/tabela para evitar reprocessamento futuro?', N'Alternativa B: Memoization (Programação Dinâmica).

Justificativa: Memoization é o ato de memorizar a saída de uma função cara. Na sequência de Fibonacci recursiva, sem Memoization a árvore de chamadas cresce exponencialmente (repetindo cálculos iguais).', N'Memorizar o que já foi calculado.', N'A) Backtracking;B) Memoization (Programação Dinâmica);C) Algoritmo Guloso (Greedy);D) Ordenação por inserção', 1),
('fase22', N'(ENADE - Criptografia) O algoritmo de Hash (como SHA-256 ou MD5) possui uma característica fundamental que o difere da Criptografia padrão (como AES ou RSA). Qual é essa característica?', N'Alternativa B: É de mão única (One-way), não tem reversão.

Justificativa: Criptografia serve para encriptar e depois desencriptar. O Hash destrói a string original e cria uma ''impressão digital''. É assim que as palavras-passe são guardadas com segurança no banco de dados.', N'Pode transformar a carne na salsicha, mas não a salsicha na carne.', N'A) O Hash é utilizado para encriptar ficheiros grandes em formato zip.;B) O Hash é uma via de mão única (One-way): é impossível (ou inviável computacionalmente) reverter o código gerado de volta para a palavra original.;C) O Hash necessita sempre de uma chave pública para ser lido.;D) O Hash só aceita números inteiros como entrada.', 1),
('fase22', N'(ENADE - Cloud) Em provedores de nuvem (AWS, Azure, GCP), o conceito de ''Elasticidade'' refere-se à capacidade do sistema de:', N'Alternativa B: Aumentar e diminuir recursos automaticamente com a procura.

Justificativa: A elasticidade é o que permite a um e-commerce manter-se online na Black Friday (alugando mais servidores por algumas horas) e reduzir os custos na semana seguinte.', N'Estica e encolhe como um elástico.', N'A) Alterar a cor da interface dependendo do fuso horário do utilizador.;B) Aumentar (Scale-out) ou diminuir (Scale-in) automaticamente e de forma dinâmica os recursos de infraestrutura com base na procura em tempo real.;C) Compactar o tamanho do banco de dados relacional.;D) Impedir ataques DDoS bloqueando IPs asiáticos.', 1),
('fase22', N'(ENADE - Mobile) Qual é a principal diferença entre criar uma aplicação Mobile Nativa e uma aplicação Cross-Platform (Híbrida)?', N'Alternativa C: A Cross-Platform usa uma base de código única para ambos os sistemas operativos.

Justificativa: Aplicações nativas têm o melhor desempenho e integração, mas exigem duas equipas (Android e iOS). Frameworks híbridos ganham em produtividade e tempo de lançamento.', N'Nativa = Código diferente. Híbrida = Código único.', N'A) A Nativa só funciona offline. A Híbrida precisa de internet.;B) A Nativa utiliza o GPS. A Híbrida não tem acesso ao hardware.;C) A Nativa exige códigos separados para Android (Kotlin/Java) e iOS (Swift/Objective-C). A Cross-Platform (ex: React Native, Flutter) gera ambos a partir de uma base de código única.;D) Não existem diferenças estruturais.', 2),
('fase22', N'(ENADE - Banco de Dados) O que faz o comando JOIN da cláusula LEFT OUTER JOIN (ou LEFT JOIN) no SQL?', N'Alternativa B: Retorna todos da esquerda, independentemente da correspondência na direita.

Justificativa: O LEFT JOIN é essencial quando queremos listar, por exemplo, todos os ''Clientes'' e os seus ''Pedidos'', incluindo na lista os clientes que ainda não fizeram nenhum pedido (NULL).', N'Prioriza a tabela da Esquerda.', N'A) Retorna apenas os registos que têm correspondência nas duas tabelas.;B) Retorna todos os registos da tabela da ESQUERDA, e apenas as correspondências da tabela da direita. Se não houver correspondência, preenche com NULL.;C) Apaga as linhas duplicadas do lado esquerdo.;D) Multiplica todos os registos (Produto Cartesiano).', 1),
('fase22', N'(ENADE - Segurança) O que significa aplicar o princípio do ''Menor Privilégio'' (Least Privilege) num sistema operativo ou base de dados?', N'Alternativa B: Fornecer apenas as permissões estritamente necessárias.

Justificativa: É uma regra de ouro em segurança cibernética. Se a conta de um funcionário comum for pirateada, o atacante não conseguirá eliminar a base de dados central, pois a conta não tem esse privilégio.', N'Só dê a chave da porta que a pessoa precisa de abrir.', N'A) Dar acesso total de Admin a todos para evitar bloqueios de trabalho.;B) Fornecer a cada utilizador ou programa apenas as permissões e acessos estritamente necessários para realizar as suas tarefas, e nada mais.;C) Remover as permissões de quem ganha o menor salário.;D) Cobrar menos por assinaturas de software básicas.', 1),
('fase22', N'(ENADE - Eng. de Requisitos) No desenvolvimento de software, os ''Diagramas de Casos de Uso'' são utilizados primariamente durante qual fase do ciclo de vida?', N'Alternativa C: Levantamento e Análise de Requisitos.

Justificativa: Os Casos de Uso (da UML) são ferramentas visuais para traduzir as necessidades do negócio e as interações entre os atores (utilizadores) e o sistema, antes de a equipa começar a programar.', N'É o planeamento antes do código.', N'A) Manutenção e Evolução;B) Testes de Integração e Deployment;C) Levantamento e Análise de Requisitos;D) Refatoração de Código', 2),
('fase22', N'(ENADE - Versionamento) No Git, se um desenvolvedor quiser criar um caminho isolado para desenvolver uma nova funcionalidade sem interferir com o código principal, qual comando deverá usar?', N'Alternativa B: git branch.

Justificativa: O comando branch cria uma ''ramificação''. Isto permite que o programador crie código isoladamente numa ramificação de testes, e só faça a junção (merge) com a ramificação principal (main) após ter a certeza que o código funciona.', N'Cria um ramo (branch) isolado.', N'A) git clone;B) git branch;C) git log;D) git rm', 1),
('fase22', N'(ENADE - Design de Interface) No CSS, utilizando o modelo Flexbox (display: flex), qual propriedade é utilizada para alinhar os itens horizontalmente ao longo do eixo principal?', N'Alternativa C: justify-content.

Justificativa: A propriedade `justify-content` lida com o alinhamento no eixo principal (que por padrão é o horizontal, da esquerda para a direita). O `align-items` faz o alinhamento no eixo transversal (vertical).', N'Justifica o conteúdo na linha.', N'A) align-items;B) flex-direction;C) justify-content;D) float: left', 2),
('fase22', N'(ENADE - Web) Numa API REST desenvolvida em NodeJS ou C#, se o cliente envia dados sigilosos, como uma palavra-passe, no corpo (body) de um formulário. Qual método HTTP está a ser utilizado?', N'Alternativa C: POST.

Justificativa: O verbo POST é usado para enviar dados sensíveis ou longos contidos no corpo (body) da requisição. O método GET anexa os dados no URL (na barra de endereço), o que expõe a password publicamente.', N'O GET mostra no URL, o POST oculta no Corpo.', N'A) GET;B) OPTIONS;C) POST;D) HEAD', 2),
('fase22', N'(ENADE - Eng. de Software) O padrão de arquitetura SOLID traz princípios para a programação orientada a objetos. O ''S'' (Single Responsibility Principle) diz que:', N'Alternativa B: Uma classe deve ter apenas uma responsabilidade.

Justificativa: O Princípio da Responsabilidade Única evita a criação de ''Classes Deus'' (classes gigantes que fazem de tudo: enviam email, guardam no banco, desenham a interface). Classes pequenas e focadas evitam bugs.', N'Princípio da Responsabilidade Única.', N'A) O sistema deve rodar num servidor único.;B) Uma classe deve ter uma, e apenas uma, razão para mudar (uma única responsabilidade).;C) Só pode existir uma herança por classe.;D) O código deve ser escrito por um único programador.', 1);
GO

-- --- BONUS1 ---
INSERT INTO Flashcards (CodigoFase, Frente, Verso, Dica, Opcoes, Correta) VALUES
('bonus1', N'Bônus 01: O que é a ''Deep Web''?', N'A parte da internet que não é indexada por motores de busca como o Google.', N'Não é necessariamente ilegal, apenas oculta.', NULL, NULL),
('bonus1', N'Bônus 01: O que foi o vírus ''ILOVEYOU'' (2000)?', N'Um dos maiores worms de e-mail da história que causou bilhões em prejuízos.', N'Engenharia social pura.', NULL, NULL),
('bonus1', N'Bônus 01: O que é o Teste de Invasão (PenTest)?', N'Simular um ataque cibernético autorizado para encontrar falhas de segurança.', N'Feito por Hackers Éticos.', NULL, NULL),
('bonus1', N'Bônus 01: Quem é o grupo ''Anonymous''?', N'Um coletivo descentralizado internacional de ativistas hackers (hacktivistas).', N'Usam a máscara de Guy Fawkes.', NULL, NULL),
('bonus1', N'Bônus 01: Quem é Kevin Mitnick?', N'Um dos hackers mais famosos da história, especialista em Engenharia Social.', N'Chegou a ser o homem mais procurado do FBI.', NULL, NULL),
('bonus1', N'Bônus 01: O que é uma vulnerabilidade ''Zero-Day''?', N'Uma falha de segurança recém-descoberta que os criadores do software ainda não conhecem e não corrigiram.', N'Dia-zero (nenhum tempo para consertar).', NULL, NULL),
('bonus1', N'Bônus 01: Qual a diferença entre Malware e Vírus?', N'Malware é qualquer código malicioso. Vírus é um tipo de malware que se replica inserindo seu código em outros programas.', N'Todo vírus é um malware, mas nem todo malware é vírus.', NULL, NULL),
('bonus1', N'Bônus 01: O que é um Cavalo de Troia (Trojan)?', N'Um malware disfarçado de software legítimo e inofensivo para enganar o usuário.', N'Inspirado na lenda grega.', NULL, NULL),
('bonus1', N'Bônus 01: O que é Engenharia Social no hacking?', N'A arte de manipular psicologicamente as pessoas para que entreguem informações confidenciais.', N'O ''hackeamento'' do cérebro humano.', NULL, NULL),
('bonus1', N'Bônus 01: Qual a diferença entre Black Hat e White Hat?', N'Black Hats invadem para roubar e destruir. White Hats (éticos) invadem para testar e proteger o sistema.', N'Chapéu preto (vilão) vs Chapéu branco (herói).', NULL, NULL),
('bonus1', N'Bônus 01: O que é um programa de ''Bug Bounty''?', N'Empresas que pagam recompensas em dinheiro para hackers que encontrarem e reportarem falhas em seus sistemas.', N'Caçadores de recompensas digitais.', NULL, NULL),
('bonus1', N'Bônus 01: O que significa CAPTCHA?', N'Completely Automated Public Turing test to tell Computers and Humans Apart (Teste para diferenciar humanos e robôs).', N'Aquelas imagens irritantes de semáforos.', NULL, NULL),
('bonus1', N'Bônus 01: Como funciona uma VPN?', N'Cria um túnel criptografado entre você e a internet, ocultando seu IP e sua localização.', N'Virtual Private Network.', NULL, NULL),
('bonus1', N'Bônus 01: O que é o navegador Tor?', N'Um navegador projetado para comunicação anônima, roteando o tráfego por vários servidores voluntários (nós).', N'Símbolo da cebola (The Onion Router).', NULL, NULL),
('bonus1', N'Bônus 01: Quem criou o Bitcoin?', N'Uma pessoa ou grupo sob o pseudônimo de ''Satoshi Nakamoto''. A identidade real nunca foi descoberta.', N'Criado logo após a crise de 2008.', NULL, NULL),
('bonus1', N'Bônus 01: O que foi o Stuxnet?', N'Um vírus de computador militar extremamente sofisticado, criado para sabotar usinas nucleares.', N'A primeira arma cibernética do mundo.', NULL, NULL),
('bonus1', N'Bônus 01: O que foi o Morris Worm (1988)?', N'Um dos primeiros malwares distribuídos pela internet, que acidentalmente derrubou milhares de computadores.', N'Criado por um estudante para ''medir'' o tamanho da internet.', NULL, NULL),
('bonus1', N'Bônus 01: O que foi o WannaCry (2017)?', N'Um ataque de ransomware global que infectou centenas de milhares de PCs exigindo resgate em Bitcoin.', N'Paralisou até os hospitais do Reino Unido.', NULL, NULL),
('bonus1', N'Bônus 01: O que foi a Máquina Enigma?', N'Uma máquina de criptografia usada pelos nazistas na 2ª Guerra Mundial, quebrada pela equipe de Alan Turing.', N'Filme: O Jogo da Imitação.', NULL, NULL),
('bonus1', N'Bônus 01: O que foi a ARPANET?', N'A rede de computadores financiada pelo departamento de defesa dos EUA que deu origem à Internet atual.', N'Avó da internet.', NULL, NULL),
('bonus1', N'Bônus 01: Qual foi o primeiro ''Bug'' de computador real?', N'Uma mariposa (inseto/bug) real que ficou presa nos relés do computador Mark II em 1947.', N'Encontrada pela pioneira Grace Hopper.', NULL, NULL),
('bonus1', N'Bônus 01: Quem foi Alan Turing?', N'Matemático britânico considerado o pai da ciência da computação e da Inteligência Artificial.', N'Criou o ''Teste de Turing''.', NULL, NULL),
('bonus1', N'Bônus 01: Quem foi Ada Lovelace?', N'Matemática inglesa reconhecida como a primeira pessoa programadora da história (anos 1840).', N'Escreveu o primeiro algoritmo para a Máquina Analítica.', NULL, NULL),
('bonus1', N'Bônus 01: Qual a arquitetura de Von Neumann?', N'O design base de quase todos os PCs modernos, separando CPU, memória e dispositivos de Entrada/Saída.', N'Conceito criado em 1945.', NULL, NULL),
('bonus1', N'Bônus 01: Quem é Linus Torvalds?', N'O engenheiro de software finlandês que criou o núcleo (kernel) do sistema operacional Linux.', N'Também criou o sistema de versionamento Git.', NULL, NULL),
('bonus1', N'Bônus 01: O que é o Konami Code?', N'Um código de trapaça famoso nos videogames: Cima, Cima, Baixo, Baixo, Esquerda, Direita, Esquerda, Direita, B, A.', N'O maior easter egg da cultura pop.', NULL, NULL),
('bonus1', N'Bônus 01: O que é um ataque de Força Bruta?', N'Tentar adivinhar uma senha testando milhões de combinações possíveis até acertar.', N'Motivo pelo qual pedem senhas complexas.', NULL, NULL),
('bonus1', N'Bônus 01: O que é Phreaking?', N'A exploração e hackeamento do sistema de telecomunicações e linhas telefônicas antigas.', N'Steve Jobs e Wozniak vendiam as ''Blue Boxes'' de phreaking.', NULL, NULL),
('bonus1', N'Bônus 01: O que significa a mensagem de erro HTTP 404?', N'Indica que o cliente conseguiu se comunicar com o servidor, mas o servidor não encontrou o arquivo ou página solicitada.', N'Page Not Found.', NULL, NULL),
('bonus1', N'Bônus 01: O que significa a mensagem de erro HTTP 418?', N'I''m a teapot (Eu sou um bule de chá). É uma piada oficial de primeiro de abril criada no protocolo HTTP em 1998.', N'O easter egg oficial da web.', NULL, NULL);
GO

-- --- BONUS2 ---
INSERT INTO Flashcards (CodigoFase, Frente, Verso, Dica, Opcoes, Correta) VALUES
('bonus2', N'Bônus 02: O que foi o ENIAC (1946)?', N'O primeiro computador digital eletrónico de grande escala, construído com válvulas para calcular tabelas de artilharia militar.', N'Ocupava uma sala inteira e pesava 30 toneladas.', NULL, NULL),
('bonus2', N'Bônus 02: Quem foi Ada Lovelace?', N'A primeira programadora da história (século XIX), que criou o primeiro algoritmo focado numa máquina mecânica de computação.', N'Matemática visionária.', NULL, NULL),
('bonus2', N'Bônus 02: Quem foi Alan Turing?', N'Matemático britânico considerado o ''Pai da Ciência da Computação''. Decifrou os códigos nazis da Máquina Enigma.', N'Criou o ''Teste de Turing'' para inteligência artificial.', NULL, NULL),
('bonus2', N'Bônus 02: O que foi a Máquina Analítica?', N'Um projeto de computador mecânico desenhado por Charles Babbage em 1837, ancestral dos computadores modernos.', N'Nunca foi totalmente construída no seu tempo.', NULL, NULL),
('bonus2', N'Bônus 02: Qual foi o impacto da invenção do Transístor?', N'Substituiu as válvulas, permitindo que os computadores se tornassem muito mais pequenos, baratos e não superaquecessem.', N'A base de toda a eletrónica moderna.', NULL, NULL),
('bonus2', N'Bônus 02: O que ditava a Lei de Moore (1965)?', N'Que a quantidade de transístores (o poder de processamento) num microchip dobraria a cada dois anos, sem aumento de custos.', N'A profecia que guiou a evolução do Hardware.', NULL, NULL),
('bonus2', N'Bônus 02: O que foi a ARPANET?', N'Uma rede de computadores financiada pelo departamento militar dos EUA que é a base histórica da Internet.', N'Para proteger os dados em caso de ataque nuclear.', NULL, NULL),
('bonus2', N'Bônus 02: Quem inventou a World Wide Web (WWW)?', N'Tim Berners-Lee em 1989, trabalhando no CERN, com o objetivo de partilhar ficheiros HTML entre cientistas.', N'Criou também o protocolo HTTP.', NULL, NULL),
('bonus2', N'Bônus 02: Qual o papel de Margaret Hamilton na Missão Apollo 11?', N'Ela foi a Diretora de Engenharia de Software da NASA; o código da sua equipa impediu que o módulo lunar caísse na lua.', N'A mãe do termo ''Engenharia de Software''.', NULL, NULL),
('bonus2', N'Bônus 02: Qual foi o primeiro ''Bug'' de computador real?', N'Uma traça real que ficou presa num relé do computador Mark II em 1947, encontrada por Grace Hopper.', N'A origem literal do termo ''Inseto''.', NULL, NULL),
('bonus2', N'Bônus 02: Quem criou o sistema operacional Linux?', N'Linus Torvalds, em 1991, lançando o kernel de forma aberta (open source) para a comunidade.', N'Hoje o Linux domina os servidores do mundo.', NULL, NULL),
('bonus2', N'Bônus 02: O que foi o Computador Altair 8800 (1975)?', N'O primeiro computador pessoal de sucesso comercial. Inspirou Bill Gates a fundar a Microsoft para vender software.', N'Era uma caixa com interruptores e luzes.', NULL, NULL),
('bonus2', N'Bônus 02: O que a Xerox PARC inventou que a Apple e a Microsoft copiaram?', N'A Interface Gráfica de Utilizador (GUI) com janelas e o Rato de computador.', N'A Xerox não sabia comercializar a invenção.', NULL, NULL),
('bonus2', N'Bônus 02: O que foi o ''Bug do Milénio'' (Y2K)?', N'O medo de que os computadores parassem no ano 2000, pois as datas eram guardadas apenas com os dois últimos dígitos (99 para 1999).', N'Bilhões foram gastos em refatoração de código.', NULL, NULL),
('bonus2', N'Bônus 02: O que foi a ''Bolha da Internet'' (Dot-com Bubble) no ano 2000?', N'Uma crise financeira causada pela especulação cega em qualquer empresa que tivesse um site ''.com'', quebrando milhares de startups.', N'Muitas promessas, pouco lucro real.', NULL, NULL),
('bonus2', N'Bônus 02: Qual a origem da linguagem Python?', N'Criada por Guido van Rossum em 1991, com foco na legibilidade do código. O nome é uma homenagem ao grupo ''Monty Python''.', N'Não tem a ver com a cobra.', NULL, NULL),
('bonus2', N'Bônus 02: O que foi a ''Guerra dos Navegadores'' nos anos 90?', N'A competição feroz pela fatia de mercado de browsers entre o Netscape Navigator e o Internet Explorer da Microsoft.', N'O IE venceu por vir pré-instalado no Windows.', NULL, NULL),
('bonus2', N'Bônus 02: O que é o Easter Egg ''Konami Code''?', N'Um código de trapaça famoso em videojogos: Cima, Cima, Baixo, Baixo, Esquerda, Direita, Esquerda, Direita, B, A.', N'O mais famoso ovo de páscoa digital.', NULL, NULL),
('bonus2', N'Bônus 02: Como começou a Amazon.com em 1994?', N'Fundada por Jeff Bezos na garagem de sua casa operando exclusivamente como uma livraria online.', N'Hoje vende desde pens a infraestrutura cloud (AWS).', NULL, NULL),
('bonus2', N'Bônus 02: Como o Google revolucionou a busca na Web (1998)?', N'Com o algoritmo PageRank, que ordenava os sites com base na quantidade e qualidade de links (relevância) apontados para eles.', N'Mataram os diretórios organizados manualmente.', NULL, NULL),
('bonus2', N'Bônus 02: O que representou o lançamento do iPhone (2007)?', N'Revolucionou a computação móvel ao eliminar os teclados físicos em favor do ''Multitouch'' capacitivo e a entrada de lojas de apps.', N'Transformou os telemóveis em computadores de bolso.', NULL, NULL),
('bonus2', N'Bônus 02: Quem é o criador da linguagem C?', N'Dennis Ritchie, na década de 1970. A linguagem foi usada para reescrever o sistema operativo UNIX.', N'A base da maioria dos sistemas modernos.', NULL, NULL),
('bonus2', N'Bônus 02: O que significa ''RTFM'' na cultura Hacker?', N'Read The F***ing Manual (Leia o maldito manual).', N'A resposta rude mas clássica para perguntas óbvias.', NULL, NULL),
('bonus2', N'Bônus 02: O que foi o sistema MS-DOS?', N'O sistema operativo em linha de comando da Microsoft que dominou os PCs na década de 1980.', N'Antecessor do Windows.', NULL, NULL),
('bonus2', N'Bônus 02: O que era o Cartão Perfurado?', N'Pedaços de papel rígido com furos estrategicamente posicionados usados para inserir dados e código nos primeiros computadores.', N'Código físico.', NULL, NULL),
('bonus2', N'Bônus 02: Qual o papel de Steve Wozniak na fundação da Apple?', N'Ele era o gênio técnico que projetou e construiu manualmente as placas de circuito dos computadores Apple I e Apple II.', N'Jobs vendia, Wozniak construía.', NULL, NULL),
('bonus2', N'Bônus 02: O que foi o ''Projeto Manhattan'' do Google?', N'A criação de um sistema de IA focado em vencer o melhor jogador humano do mundo de Go (um complexo jogo de tabuleiro asiático).', N'AlphaGo.', NULL, NULL),
('bonus2', N'Bônus 02: O que significa o acrónimo ''CAPTCHA''?', N'Completely Automated Public Turing test to tell Computers and Humans Apart.', N'Testes de semáforos e passadeiras de peões.', NULL, NULL),
('bonus2', N'Bônus 02: O que foi o erro 418 do protocolo HTTP?', N'I''m a teapot (Eu sou um bule de chá). Foi criado em 1998 como uma piada de primeiro de abril sobre protocolos de cafeteiras conectadas.', N'O Easter Egg oficial da Web.', NULL, NULL),
('bonus2', N'Bônus 02: O que são as ''Blue Boxes'' (Caixas Azuis) dos anos 70?', N'Dispositivos criados por hackers (Phreakers) que emitiam os mesmos tons acústicos da operadora de telefonia para fazer chamadas gratuitas.', N'Jobs e Wozniak vendiam essas caixas antes da Apple.', NULL, NULL);
GO

-- --- BONUS3 ---
INSERT INTO Flashcards (CodigoFase, Frente, Verso, Dica, Opcoes, Correta) VALUES
('bonus3', N'Bônus 03: O que é a Síndrome do Impostor?', N'O sentimento constante de que não é bom o suficiente, de que é uma fraude e que o seu sucesso se deve apenas à sorte.', N'Afeta cerca de 80% dos desenvolvedores iniciantes.', NULL, NULL),
('bonus3', N'Bônus 03: Qual a linguagem de programação que foi para a Lua (Apollo 11)?', N'Assembly, escrito por Margaret Hamilton e a sua equipa.', N'O código era literalmente costurado em fios de cobre.', NULL, NULL),
('bonus3', N'Bônus 03: O que dita a Lei de Moore?', N'A observação de que o número de transístores num microchip dobra aproximadamente a cada dois anos.', N'Dita o ritmo da evolução do hardware mundial.', NULL, NULL),
('bonus3', N'Bônus 03: Qual a principal diferença entre um Júnior, um Pleno e um Sénior?', N'Júnior precisa de orientação. Pleno resolve problemas de forma independente. Sénior previne os problemas antes que eles aconteçam e orienta a equipa.', N'Evolução natural de carreira.', NULL, NULL),
('bonus3', N'Bônus 03: O que são Hard Skills?', N'Habilidades técnicas e mensuráveis que podem ser aprendidas, como programar em C#, configurar redes ou gerir bases de dados.', N'O que coloca no currículo.', NULL, NULL),
('bonus3', N'Bônus 03: O que são Soft Skills?', N'Habilidades comportamentais e interpessoais, como comunicação, empatia, inteligência emocional e resolução de conflitos.', N'Muitas empresas contratam pelo Hard e demitem pelo Soft.', NULL, NULL),
('bonus3', N'Bônus 03: O que é a Síndrome de Burnout?', N'Um estado de esgotamento físico e mental extremo causado por stress crónico e prolongado no ambiente de trabalho.', N'Muito comum em TI; a saúde mental vem primeiro.', NULL, NULL),
('bonus3', N'Bônus 03: O que significa ter um perfil profissional ''T-Shaped''?', N'Ter conhecimentos gerais amplos em várias áreas da TI (a barra horizontal do T), mas ser profundamente especialista numa única área (a barra vertical).', N'O perfil mais procurado pelas empresas.', NULL, NULL),
('bonus3', N'Bônus 03: O que é o ''Tutorial Hell'' (Inferno dos Tutoriais)?', N'O ciclo vicioso em que o aluno consome dezenas de cursos e vídeos, mas sente-se incapaz de construir um projeto real sozinho a partir do zero.', N'Para sair: pare de assistir e comece a programar.', NULL, NULL),
('bonus3', N'Bônus 03: O que é a Síndrome do Objeto Brilhante (Shiny Object Syndrome)?', N'A tendência de abandonar uma tecnologia ou linguagem que se está a aprender a meio, só porque surgiu um novo framework ''da moda''.', N'Foco vence o ''hype''.', NULL, NULL),
('bonus3', N'Bônus 03: O que é um Hackathon?', N'Uma maratona de programação (geralmente de 24h a 48h) onde equipas competem para criar um protótipo de software que resolva um problema específico.', N'Excelente para networking e portfólio.', NULL, NULL),
('bonus3', N'Bônus 03: Por que o GitHub é considerado o ''Currículo do Programador''?', N'Porque mostra o código real que escreveu, os seus commits e a sua capacidade de colaborar, o que vale mais do que diplomas em muitas vagas.', N'Mantenha o seu portfólio ativo.', NULL, NULL),
('bonus3', N'Bônus 03: O que é o trabalho Assíncrono?', N'Modelo de trabalho onde a comunicação não exige uma resposta imediata. Permite que cada pessoa trabalhe no seu fuso horário e ritmo, usando ferramentas como o Slack ou Jira.', N'A base do trabalho remoto global.', NULL, NULL),
('bonus3', N'Bônus 03: Qual a importância do idioma Inglês na TI?', N'As linguagens, frameworks, a melhor documentação oficial, os fóruns (Stack Overflow) e os melhores salários remotos estão todos em inglês.', N'É a verdadeira linguagem de programação universal.', NULL, NULL),
('bonus3', N'Bônus 03: O que é o ''Fit Cultural'' numa entrevista de emprego?', N'A avaliação feita pelos RH para saber se os valores, crenças e o comportamento do candidato estão alinhados com a cultura da empresa.', N'Não basta codar bem, tem de se dar bem com a equipa.', NULL, NULL),
('bonus3', N'Bônus 03: O que é o ''Mito do Programador 10x''?', N'A ideia de que existe um programador ''lobo solitário'' tão genial que produz dez vezes mais que uma pessoa normal.', N'O trabalho em equipa consistente supera sempre o talento isolado.', NULL, NULL),
('bonus3', N'Bônus 03: O que é o Code Review (Revisão de Código)?', N'Prática onde outros programadores da equipa leem e analisam o seu código antes de ele ser fundido (merge) ao projeto principal.', N'A melhor forma de aprender a programar melhor.', NULL, NULL),
('bonus3', N'Bônus 03: O que é Pair Programming (Programação em Par)?', N'Técnica Ágil onde dois programadores partilham o mesmo ecrã: um digita o código (Piloto) e o outro revê e pensa na estratégia (Navegador).', N'Duas cabeças pensam melhor que uma.', NULL, NULL),
('bonus3', N'Bônus 03: O que significa ''Networking'' profissional?', N'A construção e manutenção de uma rede de contactos profissionais que trocam conhecimentos, indicações de vagas e experiências mútuas.', N'Quem não é visto não é lembrado.', NULL, NULL),
('bonus3', N'Bônus 03: O que é um NDA (Non-Disclosure Agreement)?', N'Um Acordo de Confidencialidade. Um contrato legal em que promete não revelar os segredos de negócio e o código da empresa a terceiros.', N'Nunca coloque código da empresa no seu GitHub público.', NULL, NULL),
('bonus3', N'Bônus 03: O que é a técnica Pomodoro?', N'Um método de gestão de tempo que alterna blocos de 25 minutos de foco absoluto com 5 minutos de descanso para manter o cérebro fresco.', N'Aumenta a produtividade e evita a fadiga.', NULL, NULL),
('bonus3', N'Bônus 03: O que é atuar como Freelancer?', N'Trabalhar de forma independente, prestando serviços de desenvolvimento ou design para vários clientes sem vínculo de emprego exclusivo.', N'Seja o seu próprio patrão.', NULL, NULL),
('bonus3', N'Bônus 03: O que é um teste de ''Live Coding'' em processos seletivos?', N'Uma etapa da entrevista onde o candidato tem de partilhar o ecrã e resolver um problema de lógica em tempo real, enquanto o avaliador observa.', N'Testa como lida com a pressão.', NULL, NULL),
('bonus3', N'Bônus 03: Qual a importância de participar em Comunidades de Devs?', N'Acelera a aprendizagem através do apoio de pessoas mais experientes, ajuda a resolver bloqueios técnicos e abre portas no mercado de trabalho.', N'Discord, Reddit, Fóruns locais.', NULL, NULL),
('bonus3', N'Bônus 03: O que significa trabalhar ''Alocado'' vs ''Outsourcing'' (Terceirização)?', N'Alocado é ser contratado para a equipa interna. Outsourcing é trabalhar para uma empresa que o ''aluga'' como consultor a outro cliente corporativo.', N'Modelo muito comum em consultorias de TI.', NULL, NULL),
('bonus3', N'Bônus 03: O que é uma Mentoria de Carreira?', N'Um relacionamento profissional onde uma pessoa experiente (mentor) orienta, partilha atalhos e aconselha um profissional menos experiente (mentorado).', N'Encurta a curva de aprendizagem.', NULL, NULL),
('bonus3', N'Bônus 03: O que significa ter Inteligência Emocional no trabalho?', N'A capacidade de reconhecer e gerir as suas próprias emoções (não entrar em pânico perante bugs) e ter empatia com os colegas.', N'Fundamental para liderar.', NULL, NULL),
('bonus3', N'Bônus 03: O que é a síndrome do ''Not Invented Here'' (Não Inventado Aqui)?', N'O preconceito nocivo de empresas ou equipas que recusam usar bibliotecas de terceiros excelentes, querendo criar tudo do zero internamente.', N'Não reinvente a roda.', NULL, NULL),
('bonus3', N'Bônus 03: O que é ''Gamificação'' (O que estamos a fazer agora)?', N'O uso de mecânicas e dinâmicas de jogos (pontos, níveis, recompensas) em contextos que não são de jogo (estudo, trabalho) para aumentar o engajamento.', N'A magia do Nex_TI!', NULL, NULL),
('bonus3', N'Bônus 03: O que é o Princípio de Pareto (Regra 80/20)?', N'A regra que diz que 80% dos resultados vêm de 20% dos esforços. Na TI, 80% dos bugs estão em 20% do código.', N'Foco no que realmente dá resultado.', NULL, NULL);
GO

-- --- BONUS4 ---
INSERT INTO Flashcards (CodigoFase, Frente, Verso, Dica, Opcoes, Correta) VALUES
('bonus4', N'Bônus 04: O que é um ''Unicórnio'' no mercado de TI?', N'Uma startup de capital fechado que conseguiu atingir uma avaliação de mercado superior a 1 Bilhão de Dólares.', N'Ex: Nubank, Uber, iFood (no seu início).', NULL, NULL),
('bonus4', N'Bônus 04: O que é um Pitch Deck?', N'Uma apresentação visual curta (10 a 15 slides) usada por empreendedores para apresentar o seu modelo de negócio a investidores para levantar capital.', N'A apresentação que pode valer milhões.', NULL, NULL),
('bonus4', N'Bônus 04: O que é Bootstrapping?', N'Iniciar e escalar uma empresa usando exclusivamente o próprio dinheiro dos fundadores e o fluxo de caixa gerado pelas vendas iniciais.', N'Crescer sem dinheiro de fora.', NULL, NULL),
('bonus4', N'Bônus 04: O que é o Burn Rate (Taxa de Queima)?', N'A velocidade (geralmente mensal) com que uma startup gasta o seu capital de investimento para se manter a operar antes de ser rentável.', N'A que velocidade queima o dinheiro do investidor.', NULL, NULL),
('bonus4', N'Bônus 04: O que é Runway (Pista de Descolagem)?', N'A quantidade de tempo (em meses) que a startup tem para sobreviver operando com o seu saldo atual, com base no seu Burn Rate.', N'Se acabar a pista, a empresa fecha.', NULL, NULL),
('bonus4', N'Bônus 04: Qual a diferença entre Incubadora e Aceleradora?', N'A incubadora ajuda ideias embrionárias a estruturarem-se fisicamente. A aceleradora pega numa startup que já fatura e injeta capital intensivo para escalar rapidamente.', N'Apoio inicial vs Crescimento explosivo.', NULL, NULL),
('bonus4', N'Bônus 04: O que significa B2B2C?', N'Business to Business to Consumer. Uma empresa que vende um serviço a outra empresa, mas o foco final é chegar ao consumidor daquela empresa.', N'Ex: iFood vendendo o sistema aos Restaurantes (B2B) para chegar a nós (B2C).', NULL, NULL),
('bonus4', N'Bônus 04: O que é a métrica CAC (Custo de Aquisição de Clientes)?', N'O investimento médio exigido em marketing e vendas para conseguir convencer um novo cliente a comprar o seu produto.', N'Quanto custa cada cliente novo.', NULL, NULL),
('bonus4', N'Bônus 04: O que é a métrica LTV (Lifetime Value)?', N'A estimativa da receita líquida total que um cliente gerará para a empresa durante todo o seu tempo de retenção/assinatura.', N'O LTV tem de ser pelo menos 3x maior que o CAC.', NULL, NULL),
('bonus4', N'Bônus 04: O que é o Churn Rate?', N'A taxa que mede a percentagem de clientes ou assinantes que cancelaram o serviço ou deixaram de comprar num determinado período.', N'O ''buraco'' no balde da empresa.', NULL, NULL),
('bonus4', N'Bônus 04: O que é ''Pivotar'' (Pivot)?', N'Mudar drasticamente a direção do modelo de negócio, do produto ou do público-alvo quando se percebe que a estratégia atual falhou no mercado.', N'Correção de rota sem fechar a empresa.', NULL, NULL),
('bonus4', N'Bônus 04: O que é o Break-even Point (Ponto de Equilíbrio)?', N'O momento exato em que os custos de operação da empresa se igualam às receitas de vendas (Lucro Zero). Tudo o que entrar acima disso é lucro real.', N'Sair do vermelho e empatar o jogo.', NULL, NULL),
('bonus4', N'Bônus 04: O que é um modelo Freemium?', N'Um modelo de negócio que oferece uma versão básica do produto de forma totalmente gratuita, cobrando uma assinatura (Premium) por recursos avançados.', N'Free + Premium. Ex: Spotify, LinkedIn.', NULL, NULL),
('bonus4', N'Bônus 04: O que é Crowdfunding?', N'Um financiamento coletivo em que várias pessoas (''a multidão'') investem pequenas quantias de dinheiro pela internet para ajudar a viabilizar um projeto.', N'A famosa ''vaquinha online'' empresarial.', NULL, NULL),
('bonus4', N'Bônus 04: O que é o Valuation de uma empresa?', N'A avaliação financeira estimativa do valor total de mercado de uma startup. Usado para definir quanta % da empresa os investidores recebem pelo dinheiro aportado.', N'Quanto vale a sua empresa hoje?', NULL, NULL),
('bonus4', N'Bônus 04: O que é o ''Exit'' (Saída) de uma startup?', N'O evento final em que os fundadores e primeiros investidores vendem as suas participações e têm o retorno lucrativo (Ex: Sendo comprados por uma gigante como a Google).', N'O dia do grande pagamento.', NULL, NULL),
('bonus4', N'Bônus 04: O que significa IPO (Initial Public Offering)?', N'A Oferta Pública Inicial, momento em que uma empresa privada cresce tanto que abre o seu capital para vender ações na Bolsa de Valores pública.', N'Quando a startup vira uma ''Megacorporação''.', NULL, NULL),
('bonus4', N'Bônus 04: O que significa atingir o ''Product-Market Fit''?', N'É o momento mágico em que uma startup construiu um produto que resolve tão bem a dor do cliente, que este mercado começa a comprar e recomendar avidamente.', N'O produto casa perfeitamente com a procura.', NULL, NULL),
('bonus4', N'Bônus 04: Quem são os ''Early Adopters'' (Adotantes Iniciais)?', N'O pequeno grupo de clientes visionários que estão dispostos a comprar e testar a primeira versão (MVP) de um produto antes de ele se tornar famoso.', N'Os clientes que validam o seu negócio.', NULL, NULL),
('bonus4', N'Bônus 04: O que é Growth Hacking?', N'O uso de estratégias criativas de marketing com baixo custo, análise de dados rigorosa e engenharia de software para gerar um crescimento (growth) rápido de utilizadores.', N'Hackear o crescimento através da tecnologia.', NULL, NULL),
('bonus4', N'Bônus 04: O que é um MVP (Minimum Viable Product)?', N'O Produto Mínimo Viável. A versão mais básica da sua solução que possui as funcionalidades mínimas para atrair os Early Adopters e testar o mercado.', N'Se não tem vergonha da primeira versão do seu produto, lançou-o tarde demais.', NULL, NULL),
('bonus4', N'Bônus 04: O que são OKRs (Objectives and Key Results)?', N'Metodologia de gestão usada pelo Google e Netflix para alinhar a empresa, definindo Objetivos qualitativos inspiradores e Resultados Chave quantitativos e mensuráveis.', N'Para onde vamos (O) e como mediremos se chegámos (KR).', NULL, NULL),
('bonus4', N'Bônus 04: O que são KPIs (Key Performance Indicators)?', N'Indicadores chave de desempenho. Métricas numéricas que os gestores analisam diariamente para medir a saúde técnica e comercial da empresa.', N'O painel do carro do gestor.', NULL, NULL),
('bonus4', N'Bônus 04: O que é uma Cap Table (Capitalization Table)?', N'Uma tabela jurídica que detalha quem são os donos da startup e qual a percentagem exata (quotas ou ações) que pertence aos fundadores, funcionários e investidores.', N'A divisão oficial do bolo da empresa.', NULL, NULL),
('bonus4', N'Bônus 04: O que é o ''Vale da Morte'' das Startups?', N'A fase crítica inicial em que a startup já começou a operar e gastar capital (Burn Rate alto), mas ainda não atingiu receitas suficientes (Break-even).', N'Onde 90% das empresas morrem de falta de caixa.', NULL, NULL),
('bonus4', N'Bônus 04: O que é o Contrato de ''Vesting'' para fundadores?', N'Uma cláusula que exige que os sócios permaneçam a trabalhar na empresa por um tempo mínimo (ex: 4 anos) para receberem progressivamente o total das suas ações.', N'Evita que um sócio abandone o barco com metade da empresa.', NULL, NULL),
('bonus4', N'Bônus 04: O que é um ''Term Sheet''?', N'O documento preliminar que resume os termos e condições básicos de um investimento proposto por um Venture Capital antes do contrato jurídico final.', N'A proposta de noivado antes do casamento.', NULL, NULL),
('bonus4', N'Bônus 04: O que é Inovação Disruptiva?', N'Uma tecnologia ou modelo de negócio que é criado na base do mercado, mais acessível e barato, e que eventualmente desaloja os gigantes e domina o mundo.', N'Ex: Câmaras digitais aniquilaram as de filme (Kodak).', NULL, NULL),
('bonus4', N'Bônus 04: O que é um Acordo de Confidencialidade (NDA) para startups?', N'Um contrato que protege o sigilo da ideia, código ou plano de negócio. NOTA: Investidores não assinam NDAs para escutar a sua ideia inicial.', N'As ideias não valem nada, a execução vale tudo.', NULL, NULL),
('bonus4', N'Bônus 04: O que significa ''Escalabilidade'' num modelo de negócio?', N'A capacidade da empresa de multiplicar as suas receitas de forma exponencial, enquanto os seus custos operacionais crescem de forma muito lenta ou quase zero.', N'O Santo Graal de qualquer software.', NULL, NULL);
GO

-- =======================================================
-- 4. TABELAS ADICIONAIS: MÓDULO DE PROVAS E SIMULADOS
--    (INTEGRADO E OPERANTE NO PIM IV - 4º SEMESTRE)
-- =======================================================

-- Tabela de Áreas de Conhecimento
CREATE TABLE tb_areas_conhecimento (
    id_area INT IDENTITY(1,1) PRIMARY KEY,
    nome_area VARCHAR(100) NOT NULL
);
GO

-- Tabela de Provas
CREATE TABLE tb_provas (
    id_prova INT IDENTITY(1,1) PRIMARY KEY,
    ano INT NOT NULL,
    tipo VARCHAR(50) NOT NULL
);
GO

-- Tabela de Questões
CREATE TABLE tb_questoes (
    id_questao INT IDENTITY(1,1) PRIMARY KEY,
    id_area INT NOT NULL,
    enunciado NVARCHAR(MAX) NOT NULL,
    origem VARCHAR(50),
    CONSTRAINT FK_Questao_Area FOREIGN KEY (id_area) REFERENCES tb_areas_conhecimento(id_area)
);
GO

-- Tabela de Alternativas
CREATE TABLE tb_alternativas (
    id_alternativa INT IDENTITY(1,1) PRIMARY KEY,
    id_questao INT NOT NULL,
    texto NVARCHAR(MAX) NOT NULL,
    is_correta BIT NOT NULL,
    CONSTRAINT FK_Alt_Questao FOREIGN KEY (id_questao) REFERENCES tb_questoes(id_questao) ON DELETE CASCADE
);
GO

-- Tabela Associativa Prova_Questão
CREATE TABLE tb_prova_questao (
    id_prova INT NOT NULL,
    id_questao INT NOT NULL,
    PRIMARY KEY (id_prova, id_questao),
    CONSTRAINT FK_PQ_P FOREIGN KEY (id_prova) REFERENCES tb_provas(id_prova),
    CONSTRAINT FK_PQ_Q FOREIGN KEY (id_questao) REFERENCES tb_questoes(id_questao)
);
GO

-- =======================================================
-- 5. POPULANDO AS TABELAS DE SIMULADOS E PROVAS (SEED)
-- =======================================================

-- Áreas de Conhecimento
INSERT INTO tb_areas_conhecimento (nome_area) VALUES 
('Engenharia de Software'),
('Cibersegurança e LGPD'),
('UX/UI Design'),
('Algoritmos e Estruturas de Dados'),
('Redes de Computadores');
GO

-- Prova
INSERT INTO tb_provas (ano, tipo) VALUES (2021, 'ENADE');
GO

-- Questões (Mapeadas para as respectivas áreas)
INSERT INTO tb_questoes (id_area, enunciado, origem) VALUES 
(1, N'Uma empresa adotou metodologias ágeis. Durante uma iteração, a equipe percebeu que um dos requisitos estava mal detalhado, gerando atraso. Qual cerimônia do Scrum é o momento IDEAL para a equipe inspecionar esse problema de processo e sugerir melhorias para o próximo ciclo?', 'ENADE 2021'),
(2, N'Uma clínica médica recolhe dados biométricos e histórico de doenças de seus pacientes. Segundo a Lei Geral de Proteção de Dados (LGPD), estes dados são classificados como:', 'ENADE 2021'),
(3, N'Uma equipe está refatorando a interface de um sistema. O sistema atual possui textos com baixo contraste e depende apenas da cor vermelha para indicar erros. Qual das ações abaixo NÃO corresponde a uma boa prática de Acessibilidade (WCAG)?', 'ENADE 2021'),
(4, N'Considere a estrutura de dados ''Fila'' (Queue) sendo usada para gerenciar requisições de impressão em um escritório. Foram inseridos, nesta ordem, os arquivos: A, B e C. Se o comando ''pop()'' ou ''dequeue()'' for executado duas vezes, qual arquivo restará na fila?', 'ENADE 2021'),
(1, N'O padrão de arquitetura MVC divide o sistema em três camadas. Um desenvolvedor inseriu uma regra de negócio complexa de cálculo de juros bancários diretamente no botão da tela HTML (View). Esta prática fere o padrão MVC pois as regras de negócio deveriam estar no:', 'ENADE 2021'),
(5, N'Para garantir a segurança de uma aplicação web, foi solicitado que todo o tráfego fosse criptografado usando SSL/TLS. Qual protocolo e qual porta padrão devem ser habilitados no firewall para essa configuração?', 'ENADE 2021');
GO

-- Alternativas
INSERT INTO tb_alternativas (id_questao, texto, is_correta) VALUES 
(1, 'A) Sprint Planning', 0), (1, 'B) Daily Scrum', 0), (1, 'C) Sprint Review', 0), (1, 'D) Sprint Retrospective', 1),
(2, 'A) Dados Públicos', 0), (2, 'B) Dados Sensíveis', 1), (2, 'C) Dados Anonimizados', 0), (2, 'D) Dados Temporários', 0),
(3, 'A) Adicionar atributos ''alt'' em imagens.', 0), (3, 'B) Depender exclusivamente da cor para mensagens de erro.', 1), (3, 'C) Garantir navegação completa via teclado (Tab).', 0), (3, 'D) Manter alto contraste entre fundo e texto.', 0),
(4, 'A) Arquivo A', 0), (4, 'B) Arquivo B', 0), (4, 'C) Arquivo C', 1), (4, 'D) A fila ficará vazia', 0),
(5, 'A) Controller', 0), (5, 'B) Model', 1), (5, 'C) View', 0), (5, 'D) Banco de Dados', 0),
(6, 'A) HTTP - Porta 80', 0), (6, 'B) FTP - Porta 21', 0), (6, 'C) HTTPS - Porta 443', 1), (6, 'D) SSH - Porta 22', 0);
GO

-- Associação das Questões à Prova 1
INSERT INTO tb_prova_questao (id_prova, id_questao) VALUES 
(1, 1), (1, 2), (1, 3), (1, 4), (1, 5), (1, 6);
GO
