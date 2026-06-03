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
-- 3. INSERINDO OS FLASHCARDS
-- =======================================================

-- MÓDULO 01
INSERT INTO Flashcards (CodigoFase, Frente, Verso, Dica) VALUES
('fase1', N'O que é uma Variável?', N'Um espaço reservado na memória para armazenar um dado.', N'Disciplina: Lógica com Python.'),
('fase1', N'Para que serve a estrutura ''for'' em Python?', N'Para criar um laço de repetição iterável (loop).', N'Percorre listas e sequências.'),
('fase1', N'O que é um Dicionário?', N'Uma estrutura de dados baseada em pares de ''chave: valor''.', N'Usa chaves {}. Ex: {''curso'': ''ADS''}'),
('fase1', N'Qual a diferença entre = e == em programação?', N'= é para Atribuição. == é para Comparação (Verificar se é igual).', N'Erro muito comum em lógica básica.'),
('fase1', N'O que faz a palavra ''def'' em Python?', N'Serve para definir/criar uma nova função.', N'Ex: def calcular_media():'),

('fase2', N'O que é a Média Aritmética?', N'A soma de todos os valores dividida pela quantidade deles.', N'Disciplina: Matemática e Estatística.'),
('fase2', N'O que é a Mediana em um conjunto de dados?', N'É o valor que fica exatamente no meio quando os dados estão em ordem.', N'Não é afetada por valores extremos (outliers).'),
('fase2', N'O que estuda a Lógica Proposicional?', N'Proposições que podem ser classificadas como Verdadeiras ou Falsas.', N'Base para os operadores AND, OR, NOT na programação.'),
('fase2', N'O que é um Grafo?', N'Conjunto de Vértices (nós) conectados por Arestas (linhas).', N'Usado em GPS, mapas e redes sociais.'),
('fase2', N'O que é o Teorema de Bayes?', N'Fórmula matemática usada para calcular a probabilidade condicional de um evento.', N'Base matemática para IA e Machine Learning.'),

('fase3', N'O que é a Placa-Mãe?', N'A placa de circuito principal que conecta todos os componentes do PC.', N'Disciplinas: Infraestrutura e TIC.'),
('fase3', N'Qual a diferença entre RAM e HD/SSD?', N'RAM é memória volátil de curto prazo. HD/SSD é armazenamento permanente.', N'Desligou o PC, a RAM apaga tudo.'),
('fase3', N'O que é um Sistema Operacional (SO)?', N'O software principal que gerencia o hardware e permite executar outros programas.', N'Ex: Windows, Linux, macOS.'),
('fase3', N'Para que serve a CPU?', N'É o cérebro do computador, responsável por processar e executar as instruções.', N'Central Processing Unit.'),
('fase3', N'O que é Virtualização?', N'Criar versões virtuais de recursos físicos (ex: Máquinas Virtuais).', N'A base da Computação em Nuvem.'),

('fase4', N'O que significa a sigla LGPD?', N'Lei Geral de Proteção de Dados.', N'Disciplinas: Cibersegurança e LGPD.'),
('fase4', N'O que é Phishing?', N'Ataque de engenharia social (e-mails falsos) para roubar dados da vítima.', N'Pense em ''pescar'' a senha do usuário.'),
('fase4', N'O que é um Ransomware?', N'Software malicioso que criptografa os dados e exige pagamento de resgate.', N'Ransom = Resgate.'),
('fase4', N'O que são Dados Sensíveis (LGPD)?', N'Dados sobre raça, religião, saúde, biometria e orientação sexual.', N'Exigem proteção extra por causarem discriminação.'),
('fase4', N'O que é um ataque DDoS?', N'Enviar milhares de requisições falsas até derrubar o servidor por sobrecarga.', N'Distributed Denial of Service.'),

('fase5', N'O que é a Inclusão Digital?', N'Garantir que todas as pessoas tenham acesso às tecnologias da informação.', N'Disciplinas: Ética e Direitos Humanos.'),
('fase5', N'Qual o pilar da Sustentabilidade na TI?', N'Reduzir o impacto ambiental (lixo eletrônico) e o consumo de energia dos datacenters.', N'Green IT (TI Verde).'),
('fase5', N'O que é Propriedade Intelectual em Software?', N'O direito legal do criador sobre o código, layout ou algoritmo de um sistema.', N'Protegido por direitos autorais e patentes.'),
('fase5', N'O que é o Viés Algorítmico (Bias)?', N'Quando uma Inteligência Artificial toma decisões preconceituosas baseadas em dados históricos falhos.', N'Ex: IA de recrutamento que descarta mulheres.'),
('fase5', N'Como a LGPD apoia os Direitos Humanos?', N'Garantindo o direito fundamental à privacidade e à liberdade de escolha do cidadão.', N'O titular é o dono do próprio dado.');
GO

-- MÓDULO 02
INSERT INTO Flashcards (CodigoFase, Frente, Verso, Dica) VALUES
('fase6', N'O que é a estrutura de dados Pilha (Stack)?', N'O último elemento a entrar é o primeiro a sair (LIFO).', N'Disciplina: Algoritmos e Dados em Python. Ex: Botão ''Desfazer''.'),
('fase6', N'O que é a Fila (Queue)?', N'O primeiro a entrar é o primeiro a sair (FIFO).', N'Ex: Fila de impressão na impressora.'),
('fase6', N'O que é um Algoritmo de Ordenação?', N'Um método para organizar dados em sequência (ex: Bubble Sort, Quick Sort).', N'Coloca números em ordem crescente.'),
('fase6', N'O que é a Complexidade ''Big O''?', N'Uma notação para medir a eficiência de um algoritmo (tempo e memória) quando os dados crescem.', N'O(1) é excelente, O(n²) é lento.'),
('fase6', N'O que é uma Árvore Binária?', N'Estrutura de dados onde cada nó tem no máximo dois filhos (esquerda e direita).', N'Excelente para buscas rápidas.'),

('fase7', N'O que são Ponteiros em C?', N'Variáveis que armazenam o endereço de memória de outra variável.', N'Disciplina: Programação C.'),
('fase7', N'Como incluir a biblioteca de entrada e saída em C?', N'#include <stdio.h>', N'Obrigatório para printf() e scanf().'),
('fase7', N'Para que serve a função malloc()?', N'Para alocar blocos de memória dinamicamente enquanto o programa roda.', N'Memória sob demanda.'),
('fase7', N'O que a função free() faz?', N'Libera a memória que foi alocada dinamicamente, devolvendo ao sistema.', N'Se não usar, causa ''Memory Leak''.'),
('fase7', N'O que é um Struct em C?', N'Agrupa variáveis de tipos diferentes sob um único nome.', N'É o ''avô'' dos objetos na POO.'),

('fase8', N'O que são Requisitos Funcionais?', N'Descrevem o que o sistema DEVE FAZER (funções). Ex: ''O sistema deve emitir NF''.', N'Disciplina: Análise e Eng. de Sistemas.'),
('fase8', N'O que são Requisitos Não Funcionais?', N'Descrevem COMO o sistema deve ser. Ex: ''O sistema deve carregar em 1 seg''.', N'Foca em performance, segurança, design.'),
('fase8', N'O que é um Diagrama de Casos de Uso (UML)?', N'Um desenho que mostra as interações entre os Usuários (Atores) e o Sistema.', N'Foca nas ações principais, não no código.'),
('fase8', N'Qual a diferença entre Metodologia Ágil e Cascata?', N'Ágil é flexível/iterativo. Cascata é linear, rígida e testa só no final.', N'Ágil entrega valor aos poucos.'),
('fase8', N'O que é um Diagrama de Classes?', N'Diagrama UML que mapeia a estrutura orientada a objetos (atributos e métodos) do sistema.', N'É a planta baixa dos desenvolvedores C.'),

('fase9', N'O que é um endereço IP?', N'Identificador numérico exclusivo de um dispositivo na rede.', N'Disciplina: Redes e Sist. Distribuídos.'),
('fase9', N'Para que serve o DNS?', N'Traduz nomes de sites (google.com) para endereços IP numéricos.', N'A lista telefônica da web.'),
('fase9', N'Qual a diferença entre TCP e UDP?', N'TCP garante a entrega dos dados. UDP é rápido mas não verifica se o dado chegou.', N'TCP: Arquivos. UDP: Jogos/Vídeo.'),
('fase9', N'O que é um Sistema Distribuído?', N'Vários computadores na rede trabalhando juntos como se fossem um único sistema.', N'A base da computação em nuvem.'),
('fase9', N'O que faz um Load Balancer?', N'Distribui o tráfego de rede igualmente entre vários servidores para evitar sobrecarga.', N'Salva o site na Black Friday.'),

('fase10', N'O que é o Teste de Turing?', N'Um teste para verificar se uma máquina consegue exibir comportamento inteligente indistinguível do humano.', N'Disciplina: IA e Inovação.'),
('fase10', N'O que são Agentes Inteligentes?', N'Sistemas que percebem o ambiente via sensores e agem para maximizar seus objetivos.', N'Ex: Um robô aspirador de pó.'),
('fase10', N'O que é uma Heurística em IA?', N'Uma ''regra de ouro'' ou atalho mental usado pela IA para encontrar boas soluções rapidamente.', N'Não garante a perfeição, mas é rápida.'),
('fase10', N'O que é NLP?', N'Processamento de Linguagem Natural. Área da IA que entende a linguagem humana.', N'Como o ChatGPT ou a Alexa funcionam.'),
('fase10', N'Qual a diferença entre Inovação Incremental e Disruptiva?', N'Incremental melhora algo existente (iPhone 14 -> 15). Disruptiva cria um novo mercado (Táxi -> Uber).', N'Disrupção muda as regras do jogo.');
GO

-- MÓDULO 03
INSERT INTO Flashcards (CodigoFase, Frente, Verso, Dica) VALUES
('fase11', N'O que é uma Chave Primária (PK)?', N'Um campo que identifica de forma exclusiva uma linha na tabela. Ex: CPF.', N'Disciplina: Banco de Dados e NoSQL.'),
('fase11', N'Qual a diferença entre SQL e NoSQL?', N'SQL é relacional (tabelas rígidas). NoSQL usa documentos flexíveis (JSON).', N'MongoDB é NoSQL.'),
('fase11', N'O que significa CRUD?', N'Create (Criar), Read (Ler), Update (Atualizar), Delete (Apagar).', N'As 4 ações básicas do banco.'),
('fase11', N'Para que serve a cláusula JOIN no SQL?', N'Para unir dados de duas ou mais tabelas baseando-se em uma coluna em comum.', N'Une clientes aos seus pedidos.'),
('fase11', N'O que é o processo de Normalização?', N'Organizar as tabelas para eliminar dados redundantes/repetidos.', N'Economiza espaço e evita inconsistências.'),

('fase12', N'O que é uma Classe?', N'Um molde que define os atributos e comportamentos de um objeto.', N'Disciplina: POO com C#.'),
('fase12', N'O que é Herança em POO?', N'Quando uma classe filha recebe as características de uma classe pai.', N'Promove o reaproveitamento de código.'),
('fase12', N'O que é Polimorfismo?', N'Capacidade de um método ter diferentes comportamentos dependendo do objeto que o chama.', N'Ex: ''Falar()'' -> Gato mia, Cachorro late.'),
('fase12', N'O que é Encapsulamento?', N'Esconder variáveis internas da classe (private) e expô-las apenas via Get/Set.', N'Protege os dados contra alterações indevidas.'),
('fase12', N'Qual a diferença entre Interface e Classe Abstrata?', N'A Interface é 100% vazia (um contrato). A Abstrata pode conter código pronto.', N'Uma classe herda 1 abstrata, mas implementa N interfaces.'),

('fase13', N'Qual a diferença entre UX e UI?', N'UX = Jornada e sentimento do usuário. UI = Cores, botões e design da tela.', N'Disciplina: Web Responsivo e UX/UI.'),
('fase13', N'O que é Design Responsivo?', N'Páginas que se adaptam perfeitamente a PCs, Tablets e Celulares.', N'Feito usando Media Queries no CSS.'),
('fase13', N'O que é ''Mobile First''?', N'Estratégia de desenhar o site primeiro para o celular e depois para monitores maiores.', N'Aprovado pelo Google.'),
('fase13', N'Para que serve o CSS Flexbox?', N'Organizar, alinhar e distribuir espaço entre itens em uma linha ou coluna.', N'É o que usamos para dividir este app.'),
('fase13', N'O que é um Wireframe?', N'O ''esqueleto'' ou rascunho visual da tela, sem cores ou imagens finais.', N'A planta-baixa do site.'),

('fase14', N'O que é Machine Learning (ML)?', N'Sistemas que aprendem a identificar padrões em dados sem serem explicitamente programados.', N'Disciplina: Machine Learning.'),
('fase14', N'O que é Aprendizado Supervisionado?', N'Treinar a IA dando os dados de exemplo e a resposta certa (gabarito).', N'Ex: 1000 fotos com a tag ''Cachorro''.'),
('fase14', N'O que é o erro de Overfitting?', N'Quando a IA ''decora'' os dados de treino, mas erra muito ao testar dados reais e novos.', N'Falta de generalização.'),
('fase14', N'Qual a diferença entre Regressão e Classificação?', N'Classificação prevê categorias (Spam). Regressão prevê números contínuos (Preço da casa).', N'A regressão desenha uma linha de tendência.'),
('fase14', N'O que são Redes Neurais?', N'Algoritmos em camadas (Input, Ocultas, Output) inspirados no cérebro.', N'Base do Deep Learning.'),

('fase15', N'O que é o Scrum?', N'Framework ágil iterativo focado no trabalho em equipe.', N'Disciplina: Eng. Soft. Ágil Aplicada.'),
('fase15', N'O que faz o Product Owner (PO)?', N'Representa o cliente, cria histórias de usuário e prioriza o Backlog.', N'Dono da visão do produto.'),
('fase15', N'O que é uma Sprint?', N'Um ciclo fixo de trabalho (1 a 4 semanas) onde a equipe desenvolve uma entrega funcional.', N'Termina com a Revisão e Retrospectiva.'),
('fase15', N'O que é o Scrum Master?', N'Líder servidor que remove impedimentos e garante que o time siga as regras do Scrum.', N'O ''facilitador''.'),
('fase15', N'Qual o objetivo da Daily Scrum?', N'Reunião de 15 min de alinhamento tático: O que fiz, farei e se há bloqueios.', N'Não é reunião para resolver problemas profundos.');
GO

-- MÓDULO 04
INSERT INTO Flashcards (CodigoFase, Frente, Verso, Dica) VALUES
('fase16', N'O que é o .NET Core?', N'Framework open-source e multiplataforma (Windows/Linux/Mac) da Microsoft.', N'Disciplina: Web e App em .NET.'),
('fase16', N'O que é o Entity Framework Core?', N'Um ORM que permite manipular bancos de dados usando objetos C# ao invés de SQL.', N'Mapeamento Objeto-Relacional.'),
('fase16', N'Para que serve uma API REST?', N'Para comunicar sistemas (Front e Back) trocando dados, geralmente no formato JSON.', N'As requisições usam HTTP (GET, POST, PUT, DELETE).'),
('fase16', N'O que é Injeção de Dependência (DI)?', N'Técnica onde a classe recebe os objetos que precisa de fora, ao invés de instanciá-los.', N'Facilita testes e desacopla código.'),
('fase16', N'O que é o padrão MVC?', N'Padrão de arquitetura: Model (Dados), View (Tela) e Controller (Lógica).', N'Separa as responsabilidades do sistema.'),

('fase17', N'Qual a diferença entre App Nativo e Híbrido/Cross-platform?', N'Nativo usa o código original (Java/Swift). Híbrido escreve um código e exporta para ambos.', N'Disciplina: Dev Mobile.'),
('fase17', N'O que é o .NET MAUI?', N'Framework da Microsoft para criar apps mobile para iOS e Android usando C#.', N'Substituto do Xamarin.'),
('fase17', N'O que é o Ciclo de Vida de uma Activity/Tela?', N'Os estados pelo qual um app passa: Criar, Iniciar, Pausar e Destruir.', N'Evita o app travar ou gastar bateria no fundo.'),
('fase17', N'O que são APIs de Geolocalização?', N'Bibliotecas que permitem ao app acessar o GPS do celular.', N'Usado pelo Uber, iFood, etc.'),
('fase17', N'Para que serve o SQLite no Mobile?', N'É um banco de dados relacional super leve, embutido no próprio celular (offline).', N'Salva dados sem precisar de internet.'),

('fase18', N'O que é uma Stored Procedure?', N'Um bloco de código SQL salvo no banco de dados para ser executado várias vezes.', N'Disciplina: Programação de BD.'),
('fase18', N'O que é uma Trigger (Gatilho)?', N'Um código SQL que roda automaticamente APÓS um evento (Insert, Update ou Delete).', N'Útil para gerar logs de auditoria.'),
('fase18', N'Qual a diferença entre VIEW e Tabela?', N'Tabela guarda dados físicos. View é uma ''tabela virtual'' criada a partir de um SELECT.', N'A View facilita consultas complexas.'),
('fase18', N'O que é o conceito ACID em Transações?', N'Atomicidade, Consistência, Isolamento e Durabilidade.', N'Garante que o Pix não dê erro no meio do caminho.'),
('fase18', N'Para que serve o comando COMMIT?', N'Confirma e salva permanentemente as alterações de uma transação no banco.', N'Se der erro, usamos o ROLLBACK.'),

('fase19', N'O que é Cloud Computing?', N'Acessar servidores, bancos e softwares via internet ao invés de comprar máquinas.', N'Disciplina: Cloud e DevOps.'),
('fase19', N'O que é o Docker?', N'Ferramenta para empacotar o código em contêineres leves e isolados.', N'Acaba com o ''Na minha máquina funcionou''.'),
('fase19', N'Para que serve o Kubernetes?', N'Orquestrar, gerenciar e escalar automaticamente centenas de contêineres.', N'É o comandante do navio.'),
('fase19', N'O que significa CI/CD?', N'Integração Contínua (CI) e Entrega Contínua (CD).', N'Automação de testes e publicação de código.'),
('fase19', N'Defina IaaS, PaaS e SaaS.', N'IaaS (Máquina alugada), PaaS (Ambiente para devs), SaaS (Software pronto pro usuário).', N'AWS EC2 = IaaS, Netflix = SaaS.'),

('fase20', N'O que é um MVP (Minimum Viable Product)?', N'A versão mais simples de um produto, lançada rapidamente para testar o mercado.', N'Disciplina: Empreendedorismo e Gestão.'),
('fase20', N'O que é o Kanban?', N'Método visual de gestão de fluxo de trabalho (A Fazer, Fazendo, Feito).', N'Originou-se na Toyota.'),
('fase20', N'O que é Escalabilidade Horizontal?', N'Adicionar MAIS servidores para dividir a carga do sistema (Cloud).', N'Diferente de Vertical, que é bo-- MÓDULO 05 (ENADE)
INSERT INTO Flashcards (CodigoFase, Frente, Verso, Dica, Opcoes, Correta) VALUES
('fase21', N'(ENADE - Gestão) Uma empresa adotou metodologias ágeis. Durante uma iteração, a equipe percebeu que um dos requisitos estava mal detalhado, gerando atraso. Qual cerimônia do Scrum é o momento IDEAL para a equipe inspecionar esse problema de processo e sugerir melhorias para o próximo ciclo?', N'Alternativa D: Sprint Retrospective. Justificativa: A Retrospectiva serve exatamente para avaliar o processo, as falhas de comunicação e ferramentas, buscando melhoria contínua para a próxima Sprint.', N'Foco no processo e na equipe, não no produto.', N'A) Sprint Planning;B) Daily Scrum;C) Sprint Review;D) Sprint Retrospective', 3),
('fase21', N'(ENADE - LGPD) Uma clínica médica recolhe dados biométricos e histórico de doenças de seus pacientes. Segundo a Lei Geral de Proteção de Dados (LGPD), estes dados são classificados como:', N'Alternativa B: Dados Sensíveis. Justificativa: Dados sobre saúde, biometria, origem racial, religião e orientação sexual são sensíveis pois podem gerar discriminação, exigindo maior rigor de proteção.', N'A saúde é um tema que exige proteção redobrada.', N'A) Dados Públicos;B) Dados Sensíveis;C) Dados Anonimizados;D) Dados Temporários', 1),
('fase21', N'(ENADE - UX/UI) Uma equipe está refatorando a interface de um sistema. O sistema atual possui textos com baixo contraste e depende apenas da cor vermelha para indicar erros. Qual das ações abaixo NÃO corresponde a uma boa prática de Acessibilidade (WCAG)?', N'Alternativa B: Depender exclusivamente da cor para mensagens de erro. Justificativa: Pessoas daltônicas não conseguirão identificar o erro. O correto é usar Cor + Ícone + Texto descritivo.', N'Pense na experiência de um usuário daltônico.', N'A) Adicionar atributos ''alt'' em imagens.;B) Depender exclusivamente da cor para mensagens de erro.;C) Garantir navegação completa via teclado (Tab).;D) Manter alto contraste entre fundo e texto.', 1),
('fase22', N'(ENADE - Algoritmos) Considere a estrutura de dados ''Fila'' (Queue) sendo usada para gerenciar requisições de impressão em um escritório. Foram inseridos, nesta ordem, os arquivos: A, B e C. Se o comando ''pop()'' ou ''dequeue()'' for executado duas vezes, qual arquivo restará na fila?', N'Alternativa C: Arquivo C. Justificativa: A Fila segue o princípio FIFO (First In, First Out). O primeiro a entrar é o primeiro a sair. Sairão A e B, restando apenas o C.', N'FIFO = First In, First Out.', N'A) Arquivo A;B) Arquivo B;C) Arquivo C;D) A fila ficará vazia', 2),
('fase22', N'(ENADE - Engenharia de Software) O padrão de arquitetura MVC divide o sistema em três camadas. Um desenvolvedor inseriu uma regra de negócio complexa de cálculo de juros bancários diretamente no botão da tela HTML (View). Esta prática fere o padrão MVC pois as regras de negócio deveriam estar no:', N'Alternativa B: Model (ou na camada de serviço acionada pelo Controller). Justificativa: A View só deve exibir dados. O Controller gerencia o tráfego. O Model detém o domínio, os dados e as regras de negócio.', N'A View é ''burra'', só mostra visual.', N'A) Controller;B) Model;C) View;D) Banco de Dados', 1),
('fase22', N'(ENADE - Redes) Para garantir a segurança de uma aplicação web, foi solicitado que todo o tráfego fosse criptografado usando SSL/TLS. Qual protocolo e qual porta padrão devem ser habilitados no firewall para essa configuração?', N'Alternativa C: HTTPS - Porta 443. Justificativa: O HTTPS (Hyper Text Transfer Protocol Secure) é a versão segura do HTTP, operando nativamente na porta 443 com certificados SSL/TLS.', N'Lembre do cadeado no navegador.', N'A) HTTP - Porta 80;B) FTP - Porta 21;C) HTTPS - Porta 443;D) SSH - Porta 22', 2);
GO

-- BÔNUS
INSERT INTO Flashcards (CodigoFase, Frente, Verso, Dica, Opcoes, Correta) VALUES
('bonus1', N'Bônus 01: O que é a ''Deep Web''?', N'A parte da internet que não é indexada por motores de busca como o Google.', N'Não é necessariamente ilegal, apenas oculta.', NULL, NULL),
('bonus1', N'Bônus 01: O que foi o vírus ''ILOVEYOU'' (2000)?', N'Um dos maiores worms de e-mail da história que causou bilhões em prejuízos.', N'Engenharia social pura.', NULL, NULL),
('bonus1', N'Bônus 01: O que é o Teste de Invasão (PenTest)?', N'Simular um ataque cibernético autorizado para encontrar falhas de segurança.', N'Feito por Hackers Éticos.', NULL, NULL),
('bonus2', N'Bônus 02: O que é um ''Easter Egg'' em software?', N'Uma mensagem, piada ou recurso oculto deixado pelos programadores.', N'Muito comum em jogos e no Google.', NULL, NULL),
('bonus2', N'Bônus 02: O que significa ''RTFM'' na cultura Tech?', N'Read The F***ing Manual (Leia o maldito manual).', N'A resposta clássica para perguntas óbvias.', NULL, NULL),
('bonus2', N'Bônus 02: O que foi a ''Bolha da Internet'' (Dot-com bubble)?', N'A crise econômica dos anos 2000 causada pela supervalorização de empresas de internet.', N'Muitas empresas faliram da noite pro dia.', NULL, NULL),
('bonus3', N'Bônus 03: O que é a síndrome do Impostor?', N'O sentimento de que você não é bom o suficiente e que seu sucesso é sorte.', N'Afeta 80% dos desenvolvedores iniciantes.', NULL, NULL),
('bonus3', N'Bônus 03: Qual a linguagem de programação que foi para a Lua (Apollo 11)?', N'Assembly, escrito por Margaret Hamilton e sua equipe.', N'O código era literalmente costurado em fios.', NULL, NULL),
('bonus3', N'Bônus 03: O que é a Lei de Moore?', N'A observação de que o número de transistores em um microchip dobra a cada dois anos.', N'Dita o ritmo da evolução do hardware.', NULL, NULL),
('bonus4', N'Bônus 04: O que é um ''Unicórnio'' no mercado de TI?', N'Uma startup de capital fechado avaliada em mais de 1 bilhão de dólares.', N'Ex: Nubank, iFood e Uber no início.', NULL, NULL),
('bonus4', N'Bônus 04: Qual a diferença entre Júnior, Pleno e Sênior?', N'Júnior precisa de ajuda. Pleno resolve sozinho. Sênior evita o problema antes dele acontecer.', N'Resumo clássico do mercado.', NULL, NULL),
('bonus4', N'Bônus 04: O que é a cultura ''Open Source''?', N'O modelo de desenvolvimento de software onde o código-fonte é aberto e colaborativo.', N'O Linux é o maior exemplo mundial.', NULL, NULL);


-- =======================================================
-- 4. TABELAS ADICIONAIS: MÓDULO DE PROVAS E SIMULADOS
--    (MAPEADO NO PIM III E PLANEJADO PARA O 4º SEMESTRE)
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
GO