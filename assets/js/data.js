// js/data.js
const bancoDeDados = {
    // ================= MÓDULO 01 =================
    "fase1": [
        { "frente": "O que é uma Variável?", "verso": "Um espaço reservado na memória para armazenar um dado.", "dica": "Disciplina: Lógica com Python." },
        { "frente": "Para que serve a estrutura 'for' em Python?", "verso": "Para criar um laço de repetição iterável (loop).", "dica": "Percorre listas e sequências." },
        { "frente": "O que é um Dicionário?", "verso": "Uma estrutura de dados baseada em pares de 'chave: valor'.", "dica": "Usa chaves {}. Ex: {'curso': 'ADS'}" },
        { "frente": "Qual a diferença entre = e == em programação?", "verso": "= é para Atribuição. == é para Comparação (Verificar se é igual).", "dica": "Erro muito comum em lógica básica." },
        { "frente": "O que faz a palavra 'def' em Python?", "verso": "Serve para definir/criar uma nova função.", "dica": "Ex: def calcular_media():" },
        { "frente": "Para que serve a função len()?", "verso": "Para retornar o tamanho (quantidade de itens) de uma lista ou string.", "dica": "Vem da palavra 'length' (comprimento)." },
        { "frente": "O que é uma Lista (List) em Python?", "verso": "Uma coleção ordenada e mutável de itens.", "dica": "Usa colchetes []. Ex: notas = [10, 8, 9]" },
        { "frente": "O que faz o método .append()?", "verso": "Adiciona um novo item ao final de uma lista existente.", "dica": "Muito usado dentro de laços de repetição." },
        { "frente": "Para que serve o if/elif/else?", "verso": "Para criar estruturas de decisão (condicionais) na lógica do código.", "dica": "Se (if) chover, levo guarda-chuva. Senão (else)..." },
        { "frente": "O que é o laço 'while'?", "verso": "Um loop que continua executando enquanto uma condição for Verdadeira (True).", "dica": "Cuidado com o loop infinito!" },
        { "frente": "Qual a diferença entre int e float?", "verso": "Int é número inteiro (ex: 5). Float é número decimal/quebrado (ex: 5.5).", "dica": "Tipos de dados primitivos." },
        { "frente": "O que é um dado Booleano (bool)?", "verso": "Um tipo de dado que só possui dois valores: True (Verdadeiro) ou False (Falso).", "dica": "Base da álgebra booleana." },
        { "frente": "Como se faz um comentário em Python?", "verso": "Usando o símbolo de hashtag (#) antes do texto.", "dica": "O computador ignora essa linha na execução." },
        { "frente": "Para que serve a função input()?", "verso": "Para capturar um dado ou texto digitado pelo usuário no teclado.", "dica": "Sempre retorna o dado como String (texto)." },
        { "frente": "Para que serve a função print()?", "verso": "Para exibir mensagens ou valores na tela (console).", "dica": "O 'Olá, Mundo!' usa essa função." },
        { "frente": "O que é uma função Lambda?", "verso": "Uma função anônima e rápida, escrita em uma única linha.", "dica": "Usada para lógicas curtas e matemáticas." },
        { "frente": "Para que serve o bloco try/except?", "verso": "Para tratar erros (exceções) e evitar que o programa 'crache' e feche sozinho.", "dica": "Tente (try) fazer isso, se der erro (except) avise." },
        { "frente": "O que faz o comando 'import'?", "verso": "Traz bibliotecas, módulos ou arquivos externos para dentro do seu código atual.", "dica": "Ex: import math, import random" },
        { "frente": "Qual a diferença entre '==' e 'is'?", "verso": "'==' compara se o valor é igual. 'is' compara se são o mesmo objeto na memória.", "dica": "Conceito avançado de gerenciamento de memória." },
        { "frente": "O que é Slicing (Fatiamento) em Python?", "verso": "Uma técnica para extrair pedaços de uma string ou lista usando [início:fim].", "dica": "Ex: texto[0:4] pega as primeiras 4 letras." }
    ],
    "fase2": [
        { "frente": "O que é a Média Aritmética?", "verso": "A soma de todos os valores dividida pela quantidade deles.", "dica": "Disciplina: Matemática e Estatística." },
        { "frente": "O que é a Mediana em um conjunto de dados?", "verso": "É o valor que fica exatamente no meio quando os dados estão em ordem crescente.", "dica": "Não é afetada por valores extremos (outliers)." },
        { "frente": "O que é a Moda estatística?", "verso": "É o valor que aparece com maior frequência num conjunto de dados.", "dica": "Pode haver mais de uma moda (bimodal)." },
        { "frente": "Para que serve o Desvio Padrão?", "verso": "Para medir a dispersão dos dados, ou seja, o quão distantes eles estão da média.", "dica": "Desvio baixo = dados muito próximos da média." },
        { "frente": "O que é a Variância?", "verso": "É o quadrado do desvio padrão, indicando o quão longe os valores se encontram do valor esperado.", "dica": "Base para análises estatísticas profundas." },
        { "frente": "O que estuda a Lógica Proposicional?", "verso": "Proposições que podem ser classificadas como Verdadeiras ou Falsas.", "dica": "Base para a programação de computadores." },
        { "frente": "Na Tabela Verdade, o que faz o operador AND (E)?", "verso": "Retorna Verdadeiro apenas se TODAS as condições forem verdadeiras.", "dica": "Multiplicação lógica." },
        { "frente": "Na Tabela Verdade, o que faz o operador OR (OU)?", "verso": "Retorna Verdadeiro se PELO MENOS UMA das condições for verdadeira.", "dica": "Soma lógica." },
        { "frente": "Na Tabela Verdade, o que faz o operador NOT (NÃO)?", "verso": "Inverte o valor lógico da proposição (Verdadeiro vira Falso e vice-versa).", "dica": "Negação." },
        { "frente": "O que é um Grafo?", "verso": "Conjunto de Vértices (nós) conectados por Arestas (linhas).", "dica": "Usado em GPS, mapas e redes." },
        { "frente": "Num Grafo, o que é um Vértice?", "verso": "É a entidade, ponto ou nó que armazena a informação.", "dica": "Pense nas cidades num mapa." },
        { "frente": "Num Grafo, o que é uma Aresta?", "verso": "É a linha ou caminho que conecta dois vértices.", "dica": "Pense nas estradas que ligam as cidades." },
        { "frente": "O que é uma Árvore na Teoria dos Grafos?", "verso": "Um grafo conectado e sem ciclos (sem caminhos fechados que voltem à origem).", "dica": "Usada na organização de pastas no PC." },
        { "frente": "O que é o Teorema de Bayes?", "verso": "Fórmula matemática usada para calcular a probabilidade condicional de um evento baseado em conhecimentos anteriores.", "dica": "Base matemática para filtros de Spam." },
        { "frente": "Na Teoria dos Conjuntos, o que é a União (A ∪ B)?", "verso": "A junção de todos os elementos do conjunto A com todos os do conjunto B.", "dica": "Soma de conjuntos sem repetir os iguais." },
        { "frente": "O que é a Interseção de Conjuntos (A ∩ B)?", "verso": "Apenas os elementos que existem SIMULTANEAMENTE no conjunto A e no conjunto B.", "dica": "O que eles têm em comum." },
        { "frente": "O que é uma Matriz (Álgebra Linear)?", "verso": "Um arranjo bidimensional de números organizados em linhas e colunas.", "dica": "Essencial para a computação gráfica." },
        { "frente": "O que é um Vetor?", "verso": "Uma matriz de uma única linha ou única coluna. Na física, possui magnitude e direção.", "dica": "Usado como array na programação." },
        { "frente": "O que é uma Função Linear?", "verso": "Uma função cujo gráfico forma uma linha reta (f(x) = ax + b).", "dica": "Crescimento constante." },
        { "frente": "O que é uma Função Exponencial?", "verso": "Uma função onde a variável está no expoente, gerando um crescimento ou decaimento curvo e muito rápido.", "dica": "A forma como os vírus se espalham." }
    ],
    "fase3": [
        { "frente": "O que é a Placa-Mãe (Motherboard)?", "verso": "A placa de circuito principal que conecta todos os componentes do computador.", "dica": "Disciplinas: Infraestrutura e Hardware." },
        { "frente": "Para que serve a CPU (Processador)?", "verso": "É o cérebro do computador, responsável por processar e executar as instruções e cálculos.", "dica": "Central Processing Unit." },
        { "frente": "Qual a diferença entre RAM e HD/SSD?", "verso": "RAM é a memória de curto prazo (volátil). HD/SSD é o armazenamento permanente.", "dica": "Desligou o PC, a RAM apaga tudo." },
        { "frente": "O que é a BIOS / UEFI?", "verso": "O primeiro software que é executado ao ligar o PC, responsável por acordar e testar o hardware (POST).", "dica": "Basic Input/Output System." },
        { "frente": "O que é uma Placa de Vídeo (GPU)?", "verso": "O componente especializado na renderização e processamento pesado de gráficos e imagens.", "dica": "Graphic Processing Unit." },
        { "frente": "Para que serve a Fonte de Alimentação?", "verso": "Converter a energia elétrica da tomada (Corrente Alternada) para a energia usada pelo PC (Corrente Contínua).", "dica": "O coração elétrico da máquina." },
        { "frente": "O que é um Sistema Operacional (SO)?", "verso": "O software base que gere o hardware e permite executar outros programas e interfaces.", "dica": "Ex: Windows, Linux, macOS." },
        { "frente": "O que é o Kernel de um Sistema Operacional?", "verso": "O núcleo do SO, que faz a ponte direta entre o software (aplicativos) e o hardware (CPU, memória).", "dica": "O motor invisível do SO." },
        { "frente": "O que é a Virtualização?", "verso": "A tecnologia que permite criar versões virtuais de recursos físicos, como correr um Windows dentro do Linux.", "dica": "A base da Computação em Nuvem." },
        { "frente": "O que é uma Máquina Virtual (VM)?", "verso": "Um ficheiro que atua como um computador físico independente, com o seu próprio SO, correndo isolado.", "dica": "Um PC dentro do PC." },
        { "frente": "O que é um Hypervisor?", "verso": "O software, firmware ou hardware que cria e executa as máquinas virtuais.", "dica": "O gestor das VMs (Ex: VirtualBox)." },
        { "frente": "O que é Computação em Nuvem?", "verso": "O fornecimento de serviços de computação (servidores, armazenamento, bancos) através da Internet.", "dica": "AWS, Azure, Google Cloud." },
        { "frente": "O que é um Servidor?", "verso": "Um computador muito potente e ligado 24/7 projetado para fornecer serviços e recursos a outros computadores (clientes).", "dica": "A espinha dorsal da web." },
        { "frente": "O que é um Data Center?", "verso": "Um local físico (prédio ou sala) focado em abrigar centenas de servidores e infraestruturas de TI.", "dica": "Onde a nuvem mora fisicamente." },
        { "frente": "O que é o Endereço MAC?", "verso": "O identificador físico e único de fábrica da placa de rede de um dispositivo.", "dica": "Media Access Control." },
        { "frente": "Qual a diferença entre Software e Firmware?", "verso": "Software são os programas normais. Firmware é o software gravado diretamente na memória do hardware para o controlar.", "dica": "O sistema do controlo remoto da TV é um firmware." },
        { "frente": "O que são periféricos de Entrada e Saída (I/O)?", "verso": "Entrada envia dados ao PC (Teclado/Rato). Saída mostra dados do PC ao utilizador (Monitor/Impressora).", "dica": "I/O (Input / Output)." },
        { "frente": "O que é o Sistema de Arquivos?", "verso": "O método que o Sistema Operacional usa para controlar como os dados são guardados e recuperados no disco.", "dica": "Ex: NTFS no Windows, ext4 no Linux." },
        { "frente": "O que é o RAID em armazenamento?", "verso": "A combinação de vários discos rígidos físicos numa única unidade lógica para melhorar o desempenho ou a segurança (cópia espelho).", "dica": "Redundant Array of Independent Disks." },
        { "frente": "O que significa formatação de baixo nível?", "verso": "A criação de trilhas e setores no disco magnético na fábrica. A formatação que fazemos em casa é a de alto nível.", "dica": "O reset físico absoluto do disco." }
    ],
    "fase4": [
        { "frente": "O que significa a sigla LGPD?", "verso": "Lei Geral de Proteção de Dados (Lei 13.709/2018).", "dica": "Disciplinas: Cibersegurança e Legislação." },
        { "frente": "Na LGPD, quem é o Titular dos Dados?", "verso": "A pessoa singular (física) a quem se referem os dados pessoais recolhidos.", "dica": "O cidadão, o dono da informação." },
        { "frente": "O que é um Dado Pessoal Sensível?", "verso": "Dado que revela origem racial, religião, filiação política, saúde ou biometria.", "dica": "Dados que podem causar discriminação." },
        { "frente": "Quem é o Encarregado de Dados (DPO)?", "verso": "O profissional indicado pela empresa para ser o canal de comunicação sobre a proteção de dados.", "dica": "Data Protection Officer." },
        { "frente": "O que é Phishing?", "verso": "Ataque de engenharia social que usa e-mails ou sites falsos para roubar informações da vítima.", "dica": "Pense em 'pescar' a senha do utilizador." },
        { "frente": "O que é um Ransomware?", "verso": "Um malware que criptografa os dados do computador e exige o pagamento de um resgate (geralmente em Bitcoin).", "dica": "Ransom = Resgate." },
        { "frente": "O que é um ataque DDoS?", "verso": "Enviar milhares de requisições simultâneas para derrubar um servidor por sobrecarga.", "dica": "Distributed Denial of Service." },
        { "frente": "O que é um Cavalo de Troia (Trojan)?", "verso": "Malware disfarçado de programa legítimo para abrir as 'portas' do PC ao atacante.", "dica": "Presente de grego." },
        { "frente": "Qual a diferença entre Vírus e Worm?", "verso": "O vírus precisa que o utilizador execute o ficheiro para o infetar. O Worm (verme) espalha-se sozinho pela rede.", "dica": "Worms são autónomos." },
        { "frente": "O que é a Engenharia Social no hacking?", "verso": "Técnica de manipulação psicológica para enganar pessoas e fazê-las entregar senhas ou dados confidenciais.", "dica": "Hackear a mente humana." },
        { "frente": "Para que serve um Firewall?", "verso": "Barreira de segurança que monitoriza e bloqueia o tráfego de rede de entrada e saída baseado em regras.", "dica": "Parede de fogo da rede." },
        { "frente": "O que é uma VPN?", "verso": "Uma rede privada virtual que cria um túnel criptografado, ocultando o endereço IP e o tráfego do utilizador.", "dica": "Virtual Private Network." },
        { "frente": "O que é Criptografia Simétrica?", "verso": "Usa a MESMA chave secreta tanto para encriptar quanto para desencriptar a mensagem.", "dica": "Rápida, mas difícil de partilhar a chave em segurança." },
        { "frente": "O que é Criptografia Assimétrica?", "verso": "Usa um par de chaves: uma Chave Pública (para encriptar) e uma Chave Privada (para desencriptar).", "dica": "A base da segurança na Internet moderna." },
        { "frente": "O que é uma função de Hash?", "verso": "Algoritmo de mão única que transforma qualquer dado numa string de tamanho fixo, impossível de reverter.", "dica": "Usada para guardar palavras-passe no banco de dados." },
        { "frente": "O que é a Autenticação de 2 Fatores (2FA)?", "verso": "Adicionar uma camada extra de segurança (ex: SMS, Token, Biometria) além da palavra-passe padrão.", "dica": "Algo que você sabe + Algo que você tem." },
        { "frente": "O que é um Teste de Invasão (PenTest)?", "verso": "Um ataque cibernético simulado e autorizado num sistema para encontrar e corrigir vulnerabilidades.", "dica": "Realizado por White Hats (Hackers Éticos)." },
        { "frente": "O que é uma vulnerabilidade Zero-Day?", "verso": "Uma falha de software recém-descoberta que os criadores do sistema ainda não tiveram tempo de corrigir (zero dias).", "dica": "Ataques indetectáveis no momento." },
        { "frente": "O que é a Regra de Backup 3-2-1?", "verso": "Ter 3 cópias dos dados, em 2 tipos de média diferentes, sendo 1 cópia fora da empresa (offsite/nuvem).", "dica": "Garante a recuperação total em caso de desastre." },
        { "frente": "Qual a função do protocolo HTTPS?", "verso": "Permitir a navegação segura na web, criptografando a comunicação entre o navegador e o servidor com certificados SSL/TLS.", "dica": "O cadeado verde na barra de endereço." }
    ],
    "fase5": [
        { "frente": "O que é a Inclusão Digital?", "verso": "A democratização do acesso às tecnologias de informação para todas as camadas da sociedade.", "dica": "Disciplinas: Ética e Sociedade." },
        { "frente": "O que é o conceito de Green IT (TI Verde)?", "verso": "O conjunto de práticas para reduzir o impacto ambiental da tecnologia (consumo de energia, lixo eletrônico).", "dica": "Sustentabilidade na tecnologia." },
        { "frente": "O que garante a Propriedade Intelectual em Software?", "verso": "Protege o código-fonte de um sistema como direitos de autor, impedindo a cópia ou pirataria comercial.", "dica": "Software é tratado como uma obra literária por lei." },
        { "frente": "O que é o Viés Algorítmico (Bias)?", "verso": "Quando uma IA reproduz discriminações e preconceitos humanos porque foi treinada com dados históricos falhos.", "dica": "O algoritmo herda os defeitos da sociedade." },
        { "frente": "Qual a diferença entre Open Source e Software Proprietário?", "verso": "Open Source tem o código-fonte aberto e colaborativo. Proprietário é fechado, patenteado e pertence a uma empresa.", "dica": "Linux vs Windows." },
        { "frente": "O que é o Copyleft?", "verso": "Licença que permite o livre uso, modificação e partilha de uma obra, desde que as versões alteradas mantenham as mesmas liberdades.", "dica": "O oposto do Copyright restritivo." },
        { "frente": "O que é o Cyberbullying?", "verso": "A intimidação, assédio ou violência psicológica realizada através da internet e redes sociais.", "dica": "Bullying digital." },
        { "frente": "O que é um Deepfake?", "verso": "Vídeos ou áudios gerados por IA que substituem o rosto ou a voz de uma pessoa para criar situações falsas e realistas.", "dica": "Ameaça gigante à política e privacidade." },
        { "frente": "O que é a Obsolescência Programada?", "verso": "A tática da indústria de fabricar aparelhos desenhados para quebrarem ou ficarem inúteis rapidamente, forçando uma nova compra.", "dica": "Telemóvel que fica lento após 2 anos." },
        { "frente": "O que é o Lixo Eletrônico (E-waste)?", "verso": "Equipamentos tecnológicos descartados incorretamente que libertam metais pesados tóxicos no solo.", "dica": "O lado negro do consumo tecnológico." },
        { "frente": "O que são Fake News?", "verso": "Notícias falsas ou distorcidas disseminadas rapidamente em massa pelas redes sociais para manipular opiniões.", "dica": "A desinformação digital." },
        { "frente": "O que é Privacidade Digital?", "verso": "O direito do utilizador de controlar como as suas informações pessoais são recolhidas e usadas na internet.", "dica": "O seu histórico de pesquisa é seu." },
        { "frente": "O que são as normas WCAG (Acessibilidade Web)?", "verso": "Diretrizes internacionais que garantem que sites e aplicações possam ser usados por pessoas com deficiências (visuais, motoras, etc).", "dica": "Web Content Accessibility Guidelines." },
        { "frente": "Qual o foco da Ergonomia na TI?", "verso": "A conceção de estações de trabalho (cadeira, monitor, teclado) para evitar lesões por esforço repetitivo em profissionais de tecnologia.", "dica": "Cuidar da saúde do desenvolvedor." },
        { "frente": "Qual o impacto social da Automação e da IA?", "verso": "A eliminação de empregos operacionais antigos, mas simultaneamente a criação de novas especializações tecnológicas.", "dica": "A Quarta Revolução Industrial." },
        { "frente": "O que é Netiqueta?", "verso": "O conjunto de regras de etiqueta e boa educação que governam o comportamento social na internet.", "dica": "Não escrever tudo em CAIXA ALTA (Gritar)." },
        { "frente": "O que é a Sociedade da Informação?", "verso": "Uma sociedade onde a criação, distribuição e uso da informação tornaram-se a atividade económica e cultural mais importante.", "dica": "A Era da Informação." },
        { "frente": "O que é o Tecnocentrismo?", "verso": "A crença ilusória de que a tecnologia, por si só, resolverá todos os problemas da humanidade.", "dica": "A tecnologia é ferramenta, não milagre." },
        { "frente": "O que é a Exclusão Digital?", "verso": "A desigualdade entre aqueles que têm fácil acesso à tecnologia e aqueles que não têm, agravando a pobreza e o desemprego.", "dica": "A consequência da falta de Inclusão Digital." },
        { "frente": "Como a Tecnologia afeta os Direitos Humanos?", "verso": "Pode promovê-los (liberdade de expressão) ou ameaçá-los (vigilância estatal em massa e invasão de privacidade).", "dica": "A tecnologia como uma faca de dois gumes." }
    ],

    // ================= MÓDULO 02 =================
    "fase6": [
        { "frente": "O que é a estrutura de dados Pilha (Stack)?", "verso": "O último elemento a entrar é o primeiro a sair (LIFO - Last In, First Out).", "dica": "Disciplina: Algoritmos e Dados. Ex: Botão 'Desfazer'." },
        { "frente": "O que é a Fila (Queue)?", "verso": "O primeiro elemento a entrar é o primeiro a sair (FIFO - First In, First Out).", "dica": "Ex: Fila de impressão numa impressora." },
        { "frente": "O que é um Algoritmo de Ordenação?", "verso": "Um método para organizar dados numa sequência lógica (ex: crescente ou decrescente).", "dica": "Ex: Bubble Sort, Quick Sort." },
        { "frente": "O que é a Complexidade 'Big O'?", "verso": "Uma notação matemática para medir a eficiência de um algoritmo (tempo e memória) à medida que os dados crescem.", "dica": "O(1) é excelente, O(n²) é muito lento." },
        { "frente": "O que é uma Árvore Binária?", "verso": "Estrutura de dados onde cada nó tem no máximo dois filhos (ramo esquerdo e direito).", "dica": "Excelente para pesquisas rápidas." },
        { "frente": "O que é uma Lista Ligada (Linked List)?", "verso": "Uma sequência de elementos onde cada nó contém um valor e um 'ponteiro' para o próximo nó da lista.", "dica": "Não usa blocos de memória contíguos como os Arrays." },
        { "frente": "O que é uma Tabela de Dispersão (Hash Table)?", "verso": "Estrutura que mapeia chaves para valores usando uma função matemática (Hash), permitindo pesquisas ultra-rápidas.", "dica": "A base dos Dicionários em Python." },
        { "frente": "Como funciona a Pesquisa Binária (Binary Search)?", "verso": "Procura um item dividindo repetidamente uma lista ORDENADA pela metade até encontrar o valor.", "dica": "Muito mais rápido que olhar um por um." },
        { "frente": "Como funciona a Pesquisa Linear?", "verso": "Percorre a lista elemento por elemento, do início ao fim, até encontrar o que procura.", "dica": "Simples, mas lento em listas gigantes (O(n))." },
        { "frente": "O que é a Recursividade?", "verso": "É quando uma função se invoca a si mesma repetidamente até atingir uma condição de paragem.", "dica": "Muito usada para calcular fatoriais e percorrer árvores." },
        { "frente": "Como funciona o algoritmo Bubble Sort?", "verso": "Compara pares vizinhos e troca-os se estiverem na ordem errada, fazendo o maior valor 'flutuar' para o final.", "dica": "O algoritmo de ordenação mais simples e menos eficiente." },
        { "frente": "O que é o algoritmo Merge Sort?", "verso": "Usa a técnica 'Dividir para Conquistar', cortando a lista em metades e depois unindo-as já ordenadas.", "dica": "Muito eficiente e estável (O(n log n))." },
        { "frente": "O que é o Quick Sort?", "verso": "Escolhe um elemento como 'Pivô' e particiona a lista, colocando os menores à esquerda e os maiores à direita.", "dica": "O algoritmo de ordenação mais famoso do mundo." },
        { "frente": "O que significa um algoritmo ter complexidade O(1)?", "verso": "Significa 'Tempo Constante'. O algoritmo demora exatamente o mesmo tempo, quer a lista tenha 10 ou 1 milhão de itens.", "dica": "O Santo Graal da eficiência." },
        { "frente": "O que é a Programação Dinâmica (Memoization)?", "verso": "Técnica de otimização que guarda os resultados de funções pesadas numa cache para não ter de os calcular de novo.", "dica": "Memória salva processamento." },
        { "frente": "O que é um Algoritmo Guloso (Greedy)?", "verso": "Toma a melhor decisão local disponível no momento imediato, na esperança de que leve à melhor solução global.", "dica": "Nem sempre entrega o cenário perfeito, mas é rápido." },
        { "frente": "Em Python, o que é uma Tupla (Tuple)?", "verso": "Uma coleção de itens ordenados, mas que é IMUTÁVEL (não pode ser alterada depois de criada).", "dica": "Usa parênteses (). Ex: coordenadas = (x, y)" },
        { "frente": "Em Python, o que é um Conjunto (Set)?", "verso": "Uma coleção não ordenada de itens ÚNICOS (não permite valores duplicados).", "dica": "Usa chaves {}. Excelente para remover repetições." },
        { "frente": "Qual é a estrutura LIFO?", "verso": "Last In, First Out (Último a entrar, primeiro a sair).", "dica": "É a regra da estrutura de Pilha (Stack)." },
        { "frente": "Qual é a estrutura FIFO?", "verso": "First In, First Out (Primeiro a entrar, primeiro a sair).", "dica": "É a regra da estrutura de Fila (Queue)." }
    ],
    "fase7": [
        { "frente": "O que são Ponteiros (Pointers) em C?", "verso": "Variáveis especiais que, em vez de guardar um valor, guardam o ENDEREÇO DE MEMÓRIA de outra variável.", "dica": "Disciplina: Programação em C." },
        { "frente": "Para que serve a biblioteca <stdio.h>?", "verso": "Standard Input/Output. É obrigatória para usar as funções básicas de entrada e saída, como printf e scanf.", "dica": "O cabeçalho (header) mais famoso do C." },
        { "frente": "Para que serve a função malloc()?", "verso": "Memory Allocation. Serve para alocar blocos de memória dinamicamente enquanto o programa está a correr.", "dica": "Pede memória emprestada ao sistema." },
        { "frente": "O que a função free() faz?", "verso": "Liberta a memória que foi alocada dinamicamente com o malloc(), devolvendo-a ao sistema operativo.", "dica": "Evita o Memory Leak (Fuga de Memória)." },
        { "frente": "O que é um Struct em C?", "verso": "Uma estrutura que agrupa diferentes tipos de variáveis sob um único nome.", "dica": "É o 'avô' das Classes da Orientação a Objetos." },
        { "frente": "Como declaramos o tipo 'String' em C?", "verso": "O C não tem um tipo 'String' nativo. Usamos um Array (vetor) de caracteres (char).", "dica": "Ex: char nome[50];" },
        { "frente": "O que faz o operador '&' numa variável em C?", "verso": "Retorna o endereço de memória físico onde essa variável está guardada.", "dica": "Muito usado dentro do scanf()." },
        { "frente": "O que faz o operador '*' associado a um ponteiro?", "verso": "Faz a 'desreferenciação', acedendo ao valor que está guardado naquele endereço de memória.", "dica": "Lê o conteúdo apontado." },
        { "frente": "O que faz a função printf()?", "verso": "Imprime texto formatado e valores de variáveis no ecrã (console).", "dica": "Print Formatted." },
        { "frente": "O que faz a função scanf()?", "verso": "Lê os dados formatados introduzidos pelo utilizador através do teclado.", "dica": "Scan Formatted." },
        { "frente": "O que é um Array (Vetor) em C?", "verso": "Uma estrutura que armazena uma coleção sequencial de elementos do MESMO TIPO de dados.", "dica": "A primeira posição é sempre o índice [0]." },
        { "frente": "O que é uma Matriz em C?", "verso": "Um Array bidimensional (ou com mais dimensões), organizado em linhas e colunas.", "dica": "Ex: int matriz[3][3];" },
        { "frente": "O que é o GCC?", "verso": "GNU Compiler Collection. É o compilador mais utilizado no mundo para transformar código C em linguagem máquina.", "dica": "Traduz o texto para binário." },
        { "frente": "Para que serve a diretiva #define?", "verso": "Usada para criar macros ou definir constantes globais que não mudam durante o programa.", "dica": "Ex: #define PI 3.1415" },
        { "frente": "O que marca o fim de uma string (char array) em C?", "verso": "O caractere nulo (Null Terminator), representado por '\\0'.", "dica": "Diz ao programa onde a frase termina." },
        { "frente": "Como funciona o loop 'do-while'?", "verso": "Executa o bloco de código PELO MENOS UMA VEZ antes de verificar se a condição é verdadeira.", "dica": "A verificação fica no final." },
        { "frente": "Para que serve o comando 'switch-case'?", "verso": "Substitui uma longa cadeia de 'if-else', permitindo testar o valor de uma variável contra vários casos específicos.", "dica": "Ideal para menus de opções." },
        { "frente": "Para que serve a palavra-chave 'break' num switch?", "verso": "Para interromper a execução e sair do bloco switch; caso contrário, executará os casos seguintes em cascata.", "dica": "Trava a cascata." },
        { "frente": "O que é Passagem por Valor numa função?", "verso": "A função recebe apenas uma CÓPIA da variável. Alterar o valor dentro da função não afeta a variável original.", "dica": "Seguro, mas gasta memória duplicada." },
        { "frente": "O que é Passagem por Referência numa função?", "verso": "A função recebe o PONTEIRO (endereço) da variável original. Qualquer alteração afeta os dados reais do programa.", "dica": "Rápido e afeta a raiz do dado." }
    ],
    "fase8": [
        { "frente": "O que são Requisitos Funcionais?", "verso": "Descrevem o que o sistema DEVE FAZER (as suas funções). Ex: 'O sistema deve emitir faturas'.", "dica": "Disciplina: Análise e Eng. de Sistemas." },
        { "frente": "O que são Requisitos Não Funcionais?", "verso": "Descrevem COMO o sistema deve ser, as suas qualidades e restrições. Ex: 'O ecrã deve carregar em 1 segundo'.", "dica": "Focam em performance, segurança, design." },
        { "frente": "O que é um Diagrama de Casos de Uso (UML)?", "verso": "Um desenho que mostra as interações entre os Utilizadores (Atores) e o Sistema.", "dica": "Foca nas ações principais do ponto de vista do utilizador." },
        { "frente": "Qual a diferença entre a Metodologia Ágil e o modelo Cascata (Waterfall)?", "verso": "O Ágil é flexível e iterativo (entregas parciais). O Cascata é linear, rígido e só testa no final.", "dica": "Ágil adapta-se; Cascata planeia tudo antes." },
        { "frente": "O que é um Diagrama de Classes?", "verso": "Diagrama estrutural da UML que mapeia a estrutura estática do sistema (classes, atributos, métodos e heranças).", "dica": "A planta-baixa dos programadores Orientados a Objetos." },
        { "frente": "Quais são as fases clássicas do Ciclo de Vida do Software?", "verso": "1. Levantamento de Requisitos; 2. Análise/Design; 3. Implementação (Código); 4. Testes; 5. Implantação; 6. Manutenção.", "dica": "O passo a passo para criar qualquer sistema." },
        { "frente": "O que faz a Engenharia de Requisitos?", "verso": "É a disciplina que foca em descobrir, documentar e manter as regras de negócio e necessidades do cliente.", "dica": "A ponte entre o cliente e os programadores." },
        { "frente": "O que é o Diagrama de Sequência (UML)?", "verso": "Mostra como os objetos interagem num determinado cenário ao longo de uma linha de tempo temporal.", "dica": "Foco na troca de mensagens cronológicas." },
        { "frente": "O que é o Diagrama de Atividades (UML)?", "verso": "Semelhante a um fluxograma, modela o fluxo de controlo de uma atividade para outra dentro do sistema.", "dica": "Mostra o caminho da lógica, passo a passo." },
        { "frente": "O que é o Framework Scrum?", "verso": "Uma estrutura de trabalho ágil focada em equipas pequenas que realizam entregas de software em ciclos curtos (Sprints).", "dica": "A metodologia ágil mais famosa." },
        { "frente": "O que é a metodologia Kanban?", "verso": "Método de gestão visual do fluxo de trabalho contínuo, usando um quadro com colunas (A Fazer, Fazendo, Feito).", "dica": "Criado originalmente pela Toyota." },
        { "frente": "O que é o XP (Extreme Programming)?", "verso": "Metodologia ágil extremamente focada na excelência técnica, exigindo testes contínuos e Programação em Par (Pair Programming).", "dica": "Foco pesado na qualidade do código." },
        { "frente": "O que é o padrão MVC?", "verso": "Model (Dados/Regras), View (Interface Visual) e Controller (Mediador). Um padrão de arquitetura que separa responsabilidades.", "dica": "Não mistura HTML com acessos à base de dados." },
        { "frente": "O que são Testes Unitários?", "verso": "Testes de baixo nível que verificam se a menor parte testável de um código (uma função ou método) funciona corretamente de forma isolada.", "dica": "Testa o tijolo antes de construir o muro." },
        { "frente": "O que são Testes de Integração?", "verso": "Testes que verificam se os diferentes módulos, classes ou bases de dados funcionam bem quando ligados entre si.", "dica": "Testa a junção dos tijolos." },
        { "frente": "O que é o Teste de Aceitação do Utilizador (UAT)?", "verso": "A fase final onde o cliente ou o utilizador real testa o sistema para validar se atende aos requisitos de negócio.", "dica": "A validação final antes de ir para produção." },
        { "frente": "O que é Refatoração (Refactoring)?", "verso": "O processo de reescrever e limpar o código-fonte para melhorar a sua estrutura interna, sem alterar o seu comportamento externo.", "dica": "Arrumar a casa por dentro." },
        { "frente": "O que é a Dívida Técnica (Technical Debt)?", "verso": "O custo futuro acumulado ao escolhermos soluções de código fáceis e rápidas agora, em vez da abordagem correta e otimizada.", "dica": "Fazer rápido hoje significa ter de refazer amanhã." },
        { "frente": "O que são os Padrões de Projeto (Design Patterns)?", "verso": "Soluções típicas, testadas e reutilizáveis para resolver problemas comuns no design de software.", "dica": "Ex: Singleton, Factory, Observer." },
        { "frente": "O que significa a sigla UML?", "verso": "Unified Modeling Language (Linguagem de Modelação Unificada). É a linguagem visual padrão para documentar sistemas de software.", "dica": "O 'idioma' internacional dos diagramas de sistemas." }
    ],
    "fase9": [
        { "frente": "O que é um endereço IP?", "verso": "Identificador numérico exclusivo atribuído a cada dispositivo conectado numa rede de computadores.", "dica": "Disciplina: Redes e Sistemas Distribuídos." },
        { "frente": "Para que serve o DNS?", "verso": "Domain Name System. Traduz nomes de domínios fáceis (google.com) para endereços IP numéricos.", "dica": "A lista telefónica da Web." },
        { "frente": "Qual a diferença entre os protocolos TCP e UDP?", "verso": "TCP garante a entrega e ordem dos dados. O UDP é muito mais rápido, mas não verifica se o dado chegou (não é fiável).", "dica": "TCP para ficheiros. UDP para jogos/streaming." },
        { "frente": "O que é um Sistema Distribuído?", "verso": "Vários computadores independentes na rede a trabalharem juntos para parecerem um único sistema coeso para o utilizador.", "dica": "A base arquitetural da Nuvem (Cloud)." },
        { "frente": "O que faz um Load Balancer (Balanceador de Carga)?", "verso": "Distribui o tráfego de rede e as requisições igualmente entre vários servidores para evitar sobrecargas e quedas.", "dica": "Evita que um único servidor suporte todo o peso." },
        { "frente": "O que é um endereço MAC?", "verso": "O endereço físico gravado permanentemente na placa de rede pelo fabricante. Não muda com a internet.", "dica": "Media Access Control." },
        { "frente": "O que é o Modelo OSI?", "verso": "Um modelo de referência conceitual dividido em 7 camadas (Física, Ligação, Rede, Transporte, Sessão, Apresentação, Aplicação).", "dica": "Cria um padrão de comunicação universal." },
        { "frente": "O que é o Modelo TCP/IP?", "verso": "O modelo prático que realmente move a internet, condensando o modelo OSI em apenas 4 camadas.", "dica": "Aplicação, Transporte, Internet e Acesso à Rede." },
        { "frente": "Qual a diferença entre HTTP e HTTPS?", "verso": "O HTTPS utiliza a camada de segurança SSL/TLS, encriptando todo o tráfego para que não possa ser intercetado.", "dica": "Hyper Text Transfer Protocol (Secure)." },
        { "frente": "O que é o protocolo FTP?", "verso": "File Transfer Protocol. Usado historicamente para transferir ficheiros de um computador para um servidor na rede.", "dica": "Transferência pura de ficheiros." },
        { "frente": "Para que serve o SSH?", "verso": "Secure Shell. Protocolo de rede que permite ligar-se de forma encriptada e segura a servidores remotos através de um terminal em linha de comando.", "dica": "Acesso remoto seguro a servidores Linux." },
        { "frente": "Quais são as portas padrão para os protocolos HTTP e HTTPS?", "verso": "HTTP corre na porta 80. HTTPS corre na porta segura 443.", "dica": "Portas essenciais do Firewall." },
        { "frente": "O que faz um Router (Roteador)?", "verso": "É o equipamento de rede que envia os pacotes de dados entre diferentes redes (ex: da sua rede local para a Internet global).", "dica": "O 'carteiro' da internet." },
        { "frente": "O que faz um Switch?", "verso": "Equipamento que liga vários dispositivos dentro de uma mesma rede local (LAN), enviando os dados apenas para o dispositivo correto (usando o MAC).", "dica": "Diferente do Hub, que enviava para todos." },
        { "frente": "Para que serve um Firewall numa rede?", "verso": "Filtra o tráfego de entrada e de saída com base num conjunto de regras de segurança, bloqueando ligações não autorizadas.", "dica": "A barreira de segurança da rede." },
        { "frente": "O que é uma VPN?", "verso": "Virtual Private Network. Cria um túnel encriptado na internet pública, simulando uma ligação privada e segura à rede da empresa.", "dica": "Segurança e privacidade remotas." },
        { "frente": "Para que serve a Máscara de Sub-rede (Subnet Mask)?", "verso": "Divide um grande bloco de endereços IP em redes menores, indicando que parte do IP é a rede e que parte é a máquina.", "dica": "Ex: 255.255.255.0" },
        { "frente": "O que faz o protocolo DHCP?", "verso": "Dynamic Host Configuration Protocol. Atribui automaticamente endereços IP, gateways e DNS aos computadores quando estes se ligam à rede.", "dica": "Imagina configurar o IP de cada telemóvel manualmente!" },
        { "frente": "O que testa o comando Ping?", "verso": "Envia pacotes ICMP para um IP de destino e aguarda a resposta, medindo o tempo de ida e volta para verificar se a máquina está online.", "dica": "Teste básico de conectividade." },
        { "frente": "Na rede, o que é a Latência (vulgo 'Lag')?", "verso": "O tempo que um pacote de dados demora a viajar do ponto A (o seu PC) até ao ponto B (Servidor) e voltar.", "dica": "Baixa latência = resposta rápida." }
    ],
    "fase10": [
        { "frente": "O que é o Teste de Turing?", "verso": "Um teste proposto por Alan Turing para verificar se uma máquina consegue exibir um comportamento inteligente indistinguível de um humano.", "dica": "Disciplina: Inteligência Artificial." },
        { "frente": "O que são Agentes Inteligentes em IA?", "verso": "Sistemas (software ou hardware) que percebem o ambiente através de sensores e agem para maximizar a hipótese de sucesso dos seus objetivos.", "dica": "Ex: Um robô aspirador de pó." },
        { "frente": "O que é uma Heurística na IA?", "verso": "Uma 'regra de ouro' ou atalho mental usado pela IA para encontrar soluções boas o suficiente num tempo muito rápido, sem garantir a perfeição absoluta.", "dica": "Troca perfeição por velocidade." },
        { "frente": "O que é o PLN (Processamento de Linguagem Natural)?", "verso": "Área da IA focada em ensinar as máquinas a compreender, interpretar e gerar a linguagem humana (texto e fala).", "dica": "Como o ChatGPT ou a Alexa funcionam." },
        { "frente": "Qual a diferença entre Inovação Incremental e Disruptiva?", "verso": "Incremental melhora algo que já existe (iPhone 14 para 15). Disruptiva cria um novo mercado, matando o anterior (Netflix vs Blockbuster).", "dica": "Evolução vs Revolução." },
        { "frente": "O que é o Machine Learning (Aprendizado de Máquina)?", "verso": "Subárea da IA onde os sistemas aprendem a identificar padrões em grandes volumes de dados, sem serem explicitamente programados passo a passo.", "dica": "A máquina cria a sua própria lógica." },
        { "frente": "O que é o Deep Learning (Aprendizado Profundo)?", "verso": "Uma evolução do Machine Learning baseada em Redes Neurais Artificiais profundas (com várias camadas ocultas) para lidar com dados muito complexos.", "dica": "A base do reconhecimento facial moderno." },
        { "frente": "O que são Redes Neurais Artificiais?", "verso": "Algoritmos matemáticos divididos em nós (neurónios) e camadas (Input, Ocultas, Output), biologicamente inspirados no cérebro humano.", "dica": "Mimetizam as sinapses cerebrais." },
        { "frente": "Como funciona o Aprendizado Supervisionado?", "verso": "O modelo de IA é treinado recebendo os dados de exemplo E o 'gabarito' com a resposta correta (dados rotulados).", "dica": "Existe um supervisor a dizer à IA o que é certo." },
        { "frente": "O que é o Aprendizado Não Supervisionado?", "verso": "O modelo recebe dados brutos sem rótulos ou categorias, e tem de descobrir padrões ou agrupar informações sozinho (Clustering).", "dica": "A IA tenta encontrar lógica no caos sozinha." },
        { "frente": "Como funciona o Aprendizado por Reforço (Reinforcement Learning)?", "verso": "A IA aprende por tentativa e erro dentro de um ambiente, recebendo 'recompensas' ao acertar e 'punições' ao errar.", "dica": "Como treinar um cão de estimação." },
        { "frente": "Na IA, o que é o erro de Overfitting?", "verso": "Quando o modelo de IA 'decora' viciosamente os dados de treino, acertando tudo no laboratório, mas errando gravemente quando lida com dados novos reais.", "dica": "Falta de capacidade de generalização." },
        { "frente": "O que é um Algoritmo de Classificação?", "verso": "Um algoritmo que prevê uma etiqueta ou categoria (Variável Discreta). Ex: Dizer se um e-mail é 'Spam' ou 'Não Spam'.", "dica": "Divide os dados em caixas." },
        { "frente": "O que é um Algoritmo de Regressão?", "verso": "Um algoritmo que prevê um número ou valor contínuo baseado em tendências históricas. Ex: Prever o preço de uma casa no futuro.", "dica": "Desenha uma linha de tendência." },
        { "frente": "O que estuda a Visão Computacional?", "verso": "O campo da IA focado em permitir que computadores extraiam informações e entendam imagens digitais e vídeos do mundo real.", "dica": "Como os carros da Tesla conduzem sozinhos." },
        { "frente": "O que é um Chatbot?", "verso": "Um programa de computador projetado para simular conversas com utilizadores humanos, geralmente suportado por árvores de decisão ou PNL.", "dica": "Atendimento automatizado." },
        { "frente": "O que é o Viés Algorítmico (Bias)?", "verso": "Quando a IA herda e reproduz preconceitos e discriminações raciais ou sociais devido à má qualidade dos dados usados para a treinar.", "dica": "A máquina apenas reflete os defeitos da sociedade." },
        { "frente": "O que significa o conceito de Big Data?", "verso": "O processamento e armazenamento de volumes de dados tão gigantescos, rápidos e complexos (Os 3 Vs) que as bases de dados tradicionais não suportam.", "dica": "Volume, Velocidade e Variedade." },
        { "frente": "O que é a Mineração de Dados (Data Mining)?", "verso": "A exploração e análise de bases de dados colossais para descobrir padrões ocultos, correlações ou anomalias valiosas para o negócio.", "dica": "Extrair ouro comercial dos dados." },
        { "frente": "O que significa a sigla LLM na IA moderna?", "verso": "Large Language Model (Grande Modelo de Linguagem). IAs de processamento de linguagem treinadas com terabytes de texto da internet.", "dica": "A tecnologia base do ChatGPT." }
    ],

    // ================= MÓDULO 03 =================
    "fase11": [
        { "frente": "O que é uma Chave Primária (Primary Key)?", "verso": "Um campo (ou conjunto de campos) que identifica de forma exclusiva uma linha numa tabela.", "dica": "Disciplina: Bases de Dados. Ex: NIF ou CPF." },
        { "frente": "O que é uma Chave Estrangeira (Foreign Key)?", "verso": "Um campo numa tabela que faz referência à Chave Primária de outra tabela, criando um vínculo entre ambas.", "dica": "Garante a integridade referencial." },
        { "frente": "Qual a diferença entre SQL e NoSQL?", "verso": "SQL é relacional (tabelas e esquemas rígidos). NoSQL é não-relacional (documentos flexíveis, chave-valor, grafos).", "dica": "MySQL vs MongoDB." },
        { "frente": "O que significa a sigla CRUD?", "verso": "Create (Criar), Read (Ler), Update (Atualizar), Delete (Apagar).", "dica": "As 4 operações básicas de qualquer sistema." },
        { "frente": "Para que serve a cláusula JOIN no SQL?", "verso": "Para combinar e recuperar dados de duas ou mais tabelas baseando-se numa coluna em comum entre elas.", "dica": "Une os 'Clientes' aos seus 'Pedidos'." },
        { "frente": "O que é a Normalização de Dados?", "verso": "O processo de organizar as tabelas para minimizar a redundância (dados repetidos) e evitar anomalias de atualização.", "dica": "Dividir para organizar." },
        { "frente": "O que dita a Primeira Forma Normal (1FN)?", "verso": "Que uma tabela não deve conter atributos multivalorados ou compostos. Cada célula deve ter um valor atómico (único).", "dica": "Não colocar dois telefones na mesma célula." },
        { "frente": "O que significa o acrónimo ACID em transações de Bases de Dados?", "verso": "Atomicidade, Consistência, Isolamento e Durabilidade.", "dica": "Garante que a transação bancária não falha a meio." },
        { "frente": "Qual a diferença entre DDL e DML no SQL?", "verso": "DDL define a estrutura (CREATE, ALTER, DROP). DML manipula os dados (INSERT, UPDATE, DELETE).", "dica": "DDL mexe na tabela, DML mexe na linha." },
        { "frente": "Para que serve o comando SELECT?", "verso": "Para consultar e extrair dados específicos de uma ou mais tabelas.", "dica": "A operação mais usada (Read do CRUD)." },
        { "frente": "Como funciona o comando GROUP BY?", "verso": "Agrupa linhas com os mesmos valores em colunas de resumo, frequentemente usado com funções matemáticas (SUM, COUNT).", "dica": "Agrupa para somar ou contar." },
        { "frente": "O que é um Índice (Index) numa Base de Dados?", "verso": "Uma estrutura de dados especial criada para acelerar incrivelmente a velocidade das pesquisas nas tabelas.", "dica": "Como o índice remissivo no fim de um livro." },
        { "frente": "O que é uma Trigger (Gatilho)?", "verso": "Um código SQL que é executado automaticamente APÓS ou ANTES de um evento (Insert, Update ou Delete) numa tabela.", "dica": "Excelente para criar logs de auditoria automáticos." },
        { "frente": "O que é uma Stored Procedure (Procedimento Armazenado)?", "verso": "Um bloco de código SQL guardado no servidor que pode ser invocado pela aplicação várias vezes.", "dica": "Poupa tráfego de rede e centraliza regras de negócio." },
        { "frente": "O que é uma View (Vista)?", "verso": "Uma 'tabela virtual' baseada no resultado de uma consulta SELECT (Query). Não guarda os dados fisicamente.", "dica": "Facilita a leitura de JOINs muito complexos." },
        { "frente": "O que é um SGBD?", "verso": "Sistema Gestor de Bases de Dados. O software responsável por administrar as bases de dados.", "dica": "Ex: SQL Server, PostgreSQL, Oracle." },
        { "frente": "Como o MongoDB guarda os seus dados?", "verso": "Em coleções de Documentos no formato BSON (semelhante ao JSON), sem necessidade de colunas rígidas.", "dica": "Ideal para dados desestruturados." },
        { "frente": "O que é um Diagrama Entidade-Relacionamento (DER)?", "verso": "Um modelo visual que descreve a estrutura lógica da base de dados, as suas entidades e como se conectam.", "dica": "A planta-baixa do banco." },
        { "frente": "Para que servem os comandos COMMIT e ROLLBACK?", "verso": "COMMIT guarda as alterações da transação permanentemente. ROLLBACK desfaz e reverte tudo em caso de erro.", "dica": "Salvar vs Desfazer." },
        { "frente": "Qual a diferença entre DELETE e TRUNCATE?", "verso": "DELETE apaga linhas específicas e regista isso no log (mais lento). TRUNCATE limpa a tabela inteira de imediato (rápido).", "dica": "TRUNCATE é um 'reset' à tabela." }
    ],
    "fase12": [
        { "frente": "O que é uma Classe na POO?", "verso": "Um molde, planta ou especificação que define os atributos e comportamentos de um objeto.", "dica": "Disciplina: POO com C#." },
        { "frente": "O que é um Objeto?", "verso": "Uma instância concreta (materialização) de uma Classe, residente na memória durante a execução do programa.", "dica": "A classe é a forma do bolo; o objeto é o bolo." },
        { "frente": "O que é a Herança em POO?", "verso": "O mecanismo onde uma classe filha adquire automaticamente as características e comportamentos de uma classe pai.", "dica": "Promove o reaproveitamento de código." },
        { "frente": "O que é o Polimorfismo?", "verso": "A capacidade de um método ter diferentes comportamentos dependendo do objeto que o invoca.", "dica": "Ex: 'EmitirSom()' -> Cão ladra, Gato mia." },
        { "frente": "O que é o Encapsulamento?", "verso": "A técnica de ocultar o estado interno de um objeto (usando variáveis private) e expor apenas os métodos seguros (public).", "dica": "Protege os dados de alterações indevidas." },
        { "frente": "O que é uma Classe Abstrata?", "verso": "Uma classe genérica que não pode ser instanciada (não se pode fazer 'new'), servindo apenas de base para outras classes herdarem.", "dica": "Modelo base obrigatório." },
        { "frente": "O que é uma Interface?", "verso": "Um contrato 100% vazio. Define APENAS a assinatura dos métodos que as classes que a implementam são obrigadas a criar.", "dica": "Resolve o problema da herança múltipla no C#." },
        { "frente": "O que é um Construtor?", "verso": "Um método especial, executado automaticamente quando o objeto é instanciado, usado para inicializar os seus atributos.", "dica": "Tem sempre o mesmo nome da Classe." },
        { "frente": "Qual a diferença entre os modificadores 'public' e 'private'?", "verso": "Public: Qualquer parte do código acede. Private: Apenas a própria classe tem acesso.", "dica": "Níveis de visibilidade." },
        { "frente": "O que é a Sobrecarga (Overloading)?", "verso": "Criar vários métodos com o MESMO NOME na mesma classe, mas com parâmetros diferentes (quantidade ou tipo).", "dica": "Comportamentos variados consoante os argumentos." },
        { "frente": "O que é a Sobrescrita (Overriding)?", "verso": "Quando a classe filha reescreve e muda a lógica de um método herdado da classe pai.", "dica": "Usa as palavras 'virtual' e 'override' no C#." },
        { "frente": "O que faz a palavra-chave 'static' num método ou atributo?", "verso": "O membro pertence à Classe em si e não aos objetos gerados. Pode ser usado sem instanciar a classe.", "dica": "Ex: Math.Round();" },
        { "frente": "Para que servem as Propriedades (Getters / Setters) em C#?", "verso": "Para aceder e modificar os atributos privados de forma controlada e segura.", "dica": "O filtro de entrada de dados." },
        { "frente": "Para que serve o operador 'new'?", "verso": "Para alocar memória e instanciar um novo objeto a partir de uma classe.", "dica": "Ex: Carro c = new Carro();" },
        { "frente": "O que é o Garbage Collector (Coletor de Lixo)?", "verso": "Um processo automático do .NET que limpa a memória, destruindo objetos que já não estão a ser usados pelo programa.", "dica": "Evita o Memory Leak automaticamente." },
        { "frente": "Para que servem os 'Namespaces' em C#?", "verso": "Para organizar o código e evitar conflitos de nomes entre classes (ex: duas classes chamadas 'Usuario' em pastas diferentes).", "dica": "Como se fossem 'sobrenomes' das classes." },
        { "frente": "Para que serve o bloco 'try / catch'?", "verso": "Para capturar e tratar exceções (erros) em tempo de execução, impedindo que o programa feche abruptamente.", "dica": "Gestão elegante de erros." },
        { "frente": "No C#, qual a diferença entre Value Types e Reference Types?", "verso": "Value (structs, int) guarda o dado direto na memória Stack. Reference (classes, arrays) guarda um ponteiro na memória Heap.", "dica": "Gestão interna do .NET." },
        { "frente": "Qual a grande diferença entre o Paradigma POO e o Procedural?", "verso": "O Procedural foca numa sequência de funções e dados globais soltos. O POO agrupa dados e funções no mesmo elemento (Objeto).", "dica": "POO modela o mundo real." },
        { "frente": "Para que serve a palavra-chave 'this'?", "verso": "Faz referência à instância ATUAL do objeto. Usado para diferenciar atributos da classe de variáveis locais com o mesmo nome.", "dica": "Eu próprio." }
    ],
    "fase13": [
        { "frente": "Qual a diferença entre UX e UI?", "verso": "UX = User Experience (Jornada, sentimento e usabilidade). UI = User Interface (Cores, botões e estética visual).", "dica": "Disciplina: Web Responsivo e UX/UI." },
        { "frente": "O que é o Design Responsivo?", "verso": "Técnica que permite que um site adapte o seu layout automaticamente ao tamanho do ecrã (PC, Tablet, Smartphone).", "dica": "Feito usando Media Queries no CSS." },
        { "frente": "O que é a abordagem 'Mobile First'?", "verso": "Estratégia de desenhar e programar o site primeiro para o telemóvel, e só depois expandi-lo para monitores maiores.", "dica": "Altamente recomendado pelo Google." },
        { "frente": "Para que serve o CSS Flexbox?", "verso": "Para organizar, alinhar e distribuir o espaço entre os itens numa linha ou coluna (1 dimensão).", "dica": "Ideal para alinhar menus e botões." },
        { "frente": "Para que serve o CSS Grid Layout?", "verso": "Para criar estruturas de layout complexas trabalhando com linhas E colunas simultaneamente (2 dimensões).", "dica": "A grelha de construção do site." },
        { "frente": "O que é um Wireframe?", "verso": "O 'esqueleto' ou rascunho estrutural de um ecrã, sem cores, fontes ou imagens finais.", "dica": "A planta-baixa do site." },
        { "frente": "O que é um Protótipo de Alta Fidelidade?", "verso": "Uma simulação interativa que se parece exatamente com o produto final, contendo cores, animações e cliques funcionais.", "dica": "Geralmente criado no Figma." },
        { "frente": "O que são as normas WCAG?", "verso": "Web Content Accessibility Guidelines. Diretrizes mundiais para tornar a web acessível a pessoas com deficiência.", "dica": "Acessibilidade para todos." },
        { "frente": "O que é a Hierarquia Visual?", "verso": "A organização dos elementos na interface para guiar o olhar do utilizador por ordem de importância (usando tamanho, cor, contraste).", "dica": "O que devo ler primeiro?" },
        { "frente": "O que estuda a Psicologia das Cores?", "verso": "Como as cores afetam a perceção e o comportamento do utilizador (ex: Vermelho para alertas, Verde para sucesso).", "dica": "Cores transmitem emoções." },
        { "frente": "Qual a diferença entre fontes Serifadas e Sem Serifa?", "verso": "Serifadas (Serif) têm 'perninhas' ou prolongamentos nos cantos (ex: Times New Roman). Sem Serifa (Sans-Serif) têm traços retos (ex: Arial).", "dica": "Sans-Serif é o padrão para Web." },
        { "frente": "O que é uma Call to Action (CTA)?", "verso": "Um elemento (geralmente um botão de destaque) que incita o utilizador a realizar uma ação desejada (ex: 'Comprar Agora').", "dica": "Chamar para a ação." },
        { "frente": "No CSS, para que servem as Media Queries?", "verso": "Para aplicar estilos condicionados ao tamanho do ecrã do dispositivo (ex: @media (max-width: 600px)).", "dica": "O motor da responsividade." },
        { "frente": "O que é o DOM (Document Object Model)?", "verso": "A representação estrutural em árvore do documento HTML, permitindo que o JavaScript altere os elementos em tempo real.", "dica": "A ponte entre HTML e JavaScript." },
        { "frente": "O que é o HTML Semântico?", "verso": "O uso de tags apropriadas para o significado do conteúdo (ex: <header>, <article>, <nav>) em vez de apenas <div> genéricas.", "dica": "Melhora a acessibilidade e o SEO." },
        { "frente": "O que é o 'White Space' (Espaço em Branco) no UI Design?", "verso": "A área vazia entre os elementos de uma interface. É crucial para deixar o design respirar e evitar poluição visual.", "dica": "O vazio também é design." },
        { "frente": "O que é um Teste A/B?", "verso": "Testar duas versões diferentes de uma mesma página simultaneamente para ver qual delas tem melhor taxa de conversão.", "dica": "O botão verde vende mais que o azul?" },
        { "frente": "O que é o conceito de 'Affordance' em UX?", "verso": "A característica visual de um objeto que sugere intuitivamente como ele deve ser usado (ex: um botão com sombra parece clicável).", "dica": "Sugestão visual de uso." },
        { "frente": "O que é uma 'Persona' em UX Design?", "verso": "Uma representação semi-fictícia do cliente ideal da aplicação, baseada em dados reais, para guiar as decisões de design.", "dica": "Dar rosto e nome ao público-alvo." },
        { "frente": "O que é o Mapa da Jornada do Utilizador (User Journey)?", "verso": "A documentação visual de todos os passos, frustrações e sucessos que um utilizador tem ao interagir com o produto.", "dica": "O passo a passo da experiência." }
    ],
    "fase14": [
        { "frente": "O que é Machine Learning (ML)?", "verso": "Sistemas que aprendem a identificar padrões em grandes volumes de dados sem precisarem de ser explicitamente programados passo a passo.", "dica": "Disciplina: Machine Learning." },
        { "frente": "O que é a Inteligência Artificial (IA)?", "verso": "O campo amplo da ciência da computação que procura criar máquinas capazes de realizar tarefas que normalmente exigem inteligência humana.", "dica": "ML é um subcampo da IA." },
        { "frente": "O que é o Aprendizado Supervisionado?", "verso": "O modelo é treinado usando um conjunto de dados onde a RESPOSTA CORRETA (rótulo) já é fornecida.", "dica": "Treinado com 'gabarito'." },
        { "frente": "O que é o Aprendizado Não Supervisionado?", "verso": "O modelo recebe dados brutos sem rótulos e tenta descobrir padrões ou agrupar os dados sozinho.", "dica": "Organiza o caos de forma autónoma." },
        { "frente": "O que é o Aprendizado por Reforço?", "verso": "A IA aprende por tentativa e erro dentro de um ambiente, recebendo 'recompensas' (pontos) ao acertar e 'punições' ao errar.", "dica": "Como ensinar um cão com biscoitos." },
        { "frente": "O que é o Overfitting?", "verso": "Quando o modelo memoriza ou decora os dados de treino tão bem que falha miseravelmente quando tenta analisar dados novos e reais.", "dica": "Falta de generalização." },
        { "frente": "O que é o Underfitting?", "verso": "Quando o modelo é demasiado simples ou treinado por pouco tempo e não consegue sequer capturar os padrões dos dados de treino.", "dica": "Erro na teoria e na prática." },
        { "frente": "O que é um Algoritmo de Regressão?", "verso": "Prevê um número ou valor contínuo baseado em tendências históricas. Ex: Prever o preço de uma casa ou o valor das ações.", "dica": "Desenha uma linha de tendência (gráfico)." },
        { "frente": "O que é um Algoritmo de Classificação?", "verso": "Prevê a que categoria pertence um dado. Ex: Classificar se um tumor é maligno ou benigno, ou se um e-mail é spam.", "dica": "Separa em caixas/etiquetas." },
        { "frente": "O que são as Redes Neurais Artificiais?", "verso": "Modelos matemáticos inspirados no cérebro humano, organizados em camadas de nós (neurónios) interligados.", "dica": "A base da inteligência artificial moderna." },
        { "frente": "O que é o Deep Learning (Aprendizado Profundo)?", "verso": "Uma área do ML que utiliza Redes Neurais com múltiplas camadas ocultas ('Deep') para resolver problemas altamentes complexos.", "dica": "O poder por trás do reconhecimento facial e ChatGPT." },
        { "frente": "O que é o Processamento de Linguagem Natural (PLN)?", "verso": "A capacidade de a máquina compreender, interpretar e gerar texto ou fala na linguagem humana (inglês, português, etc).", "dica": "A ponte entre o homem e o texto do robô." },
        { "frente": "O que é a Visão Computacional?", "verso": "O ensino dos computadores para extraírem informações, identificarem e interpretarem imagens e vídeos do mundo real.", "dica": "Carros autónomos dependem disto." },
        { "frente": "Qual a diferença entre Dados de Treino e Dados de Teste?", "verso": "Treino: 80% dos dados, usados para ensinar o modelo. Teste: 20% guardados em segredo para avaliar se o modelo aprendeu de verdade.", "dica": "O teste é a 'prova final' do modelo." },
        { "frente": "O que é o Viés Algorítmico (Bias)?", "verso": "Quando a IA herda preconceitos (sociais ou raciais) devido ao uso de uma base de dados histórica defeituosa.", "dica": "A IA pode ser racista se ensinada assim." },
        { "frente": "O que é Clustering (Agrupamento)?", "verso": "Uma técnica de Aprendizado Não Supervisionado que divide os dados em grupos semelhantes baseados nas suas características intrínsecas.", "dica": "Usado para segmentar perfis de clientes de marketing." },
        { "frente": "Como funciona uma Árvore de Decisão?", "verso": "Um modelo em forma de fluxograma onde cada 'nó' é uma pergunta e os 'ramos' são as respostas possíveis até chegar à decisão final.", "dica": "Mapeia uma série de regras 'se-então'." },
        { "frente": "O que é o algoritmo KNN (K-Nearest Neighbors)?", "verso": "Classifica um dado observando a categoria da maioria dos seus 'K' vizinhos mais próximos no gráfico.", "dica": "Diz-me com quem andas e eu dir-te-ei quem és." },
        { "frente": "O que é a Matriz de Confusão?", "verso": "Uma tabela usada para avaliar o desempenho de um modelo de classificação, mostrando Verdadeiros Positivos, Falsos Positivos, etc.", "dica": "Onde o algoritmo acertou e onde se confundiu." },
        { "frente": "O que é a Extração de Características (Feature Engineering)?", "verso": "O processo de selecionar, manipular e limpar as variáveis de entrada mais importantes para ajudar a IA a aprender melhor.", "dica": "Entra lixo, sai lixo (GIGO)." }
    ],
    "fase15": [
        { "frente": "O que é o Manifesto Ágil (2001)?", "verso": "O documento fundador das metodologias ágeis, que prioriza Indivíduos, Software a funcionar, Colaboração com o cliente e Resposta a mudanças.", "dica": "Disciplina: Engenharia de Software Ágil." },
        { "frente": "O que é o Scrum?", "verso": "Um framework ágil iterativo (por ciclos) e incremental, focado no trabalho de equipa para entregar valor rápido ao cliente.", "dica": "A metodologia mais adotada no mundo." },
        { "frente": "Quem é o Product Owner (PO)?", "verso": "A voz do cliente na equipa. É o ÚNICO responsável por definir as prioridades do produto e gerir o Backlog.", "dica": "O dono da visão do produto." },
        { "frente": "Quem é o Scrum Master?", "verso": "O líder servidor da equipa. A sua função é garantir o uso correto do Scrum e remover impedimentos ou barreiras técnicas e burocráticas.", "dica": "O facilitador e protetor da equipa." },
        { "frente": "O que é uma Sprint no Scrum?", "verso": "Um ciclo de trabalho fixo (timebox de 1 a 4 semanas) onde um conjunto de tarefas é planeado e executado até estar pronto.", "dica": "O 'coração' pulsante do Scrum." },
        { "frente": "Qual o objetivo da reunião Daily Scrum?", "verso": "Sincronização tática da equipa de Desenvolvimento. Duração máxima de 15 minutos. O que fiz ontem, farei hoje e há algum impedimento?", "dica": "Reunião rápida, feita em pé." },
        { "frente": "O que ocorre na Sprint Planning?", "verso": "A reunião onde a equipa define o Objetivo da Sprint e seleciona as histórias do Backlog que consegue construir nesse ciclo.", "dica": "O planeamento inicial." },
        { "frente": "Qual o propósito da Sprint Review?", "verso": "Ocorre no FIM da Sprint para demonstrar o incremento (o software pronto) ao cliente e aos stakeholders para colher feedback.", "dica": "Hora da demonstração prática." },
        { "frente": "O que é a Sprint Retrospective (Retrospectiva)?", "verso": "A última cerimónia, onde a equipa debate O PROCESSO (o que correu bem, o que falhou) para encontrar melhorias contínuas para a próxima Sprint.", "dica": "Melhorar a forma como se trabalha." },
        { "frente": "O que é o Product Backlog?", "verso": "A lista viva, ordenada e priorizada pelo PO de TUDO o que é necessário construir e melhorar no produto.", "dica": "A lista de desejos do software." },
        { "frente": "O que é o Sprint Backlog?", "verso": "O subconjunto de tarefas selecionadas do Product Backlog pela equipa para serem desenvolvidas apenas durante a Sprint atual.", "dica": "O trabalho fechado para o mês." },
        { "frente": "O que é o Incremento no Scrum?", "verso": "A soma de todas as tarefas concluídas numa Sprint. Deve ser um software testado, a funcionar e pronto para uso pelo cliente.", "dica": "Valor real entregue no fim." },
        { "frente": "O que é uma História de Utilizador (User Story)?", "verso": "A descrição simples de um requisito do ponto de vista de quem usa o sistema. 'Como [perfil], eu quero [ação], para [benefício]'.", "dica": "Foca no valor gerado para o cliente." },
        { "frente": "O que é um Épico (Epic)?", "verso": "Uma História de Utilizador muito grande ou complexa que não cabe numa única Sprint e tem de ser fatiada em histórias menores.", "dica": "Um requisito gigante." },
        { "frente": "O que são Story Points (Planning Poker)?", "verso": "Uma técnica da equipa para estimar o ESFORÇO e a complexidade de uma tarefa usando valores relativos (como a sequência de Fibonacci).", "dica": "Não mede horas, mede esforço." },
        { "frente": "O que é um Burndown Chart?", "verso": "Um gráfico que mostra diariamente a quantidade de trabalho restante na Sprint em relação ao tempo. A linha 'queima' para baixo até zero.", "dica": "Mede a velocidade da equipa." },
        { "frente": "Como funciona o método Kanban?", "verso": "Uma metodologia baseada na gestão visual do fluxo de trabalho contínuo através de um quadro (A Fazer, Fazendo, Feito).", "dica": "Não tem Sprints com tempos fixos como o Scrum." },
        { "frente": "O que é o limite de WIP no Kanban?", "verso": "Work In Progress. Consiste em limitar a quantidade máxima de tarefas que a equipa pode realizar em simultâneo na coluna 'Fazendo'.", "dica": "Pare de começar, comece a terminar." },
        { "frente": "O que é o DoD (Definition of Done)?", "verso": "O Acordo da Definição de Pronto. Um checklist que determina se uma tarefa foi codificada, testada e atende aos níveis de qualidade.", "dica": "Pronto significa realmente pronto a usar." },
        { "frente": "O que significa 'Timebox' nos métodos Ágeis?", "verso": "A duração de tempo MÁXIMA permitida para realizar uma cerimónia ou ciclo (Ex: a Daily tem um Timebox cravado de 15 minutos).", "dica": "Bateu no tempo, a reunião acaba." }
    ],

    // ================= MÓDULO 04 =================
    "fase16": [
        { "frente": "O que é o .NET Core (ou apenas .NET)?", "verso": "Um framework open-source e multiplataforma (Windows, Linux, macOS) criado pela Microsoft para construir vários tipos de aplicações.", "dica": "Disciplina: Web e Aplicações com .NET." },
        { "frente": "O que é o Entity Framework Core (EF Core)?", "verso": "Um ORM (Object-Relational Mapper) que permite manipular bases de dados usando objetos C# em vez de escrever código SQL manual.", "dica": "Mapeamento Objeto-Relacional." },
        { "frente": "Para que serve uma API REST?", "verso": "Para comunicar sistemas (Front-end e Back-end) trocando dados, geralmente no formato JSON, através do protocolo HTTP.", "dica": "Usa os métodos GET, POST, PUT e DELETE." },
        { "frente": "O que é a Injeção de Dependência (DI)?", "verso": "Técnica onde uma classe recebe os objetos (dependências) de que precisa a partir de uma fonte externa, em vez de os instanciar (usar 'new') internamente.", "dica": "Desacopla o código e facilita os testes." },
        { "frente": "O que é o padrão MVC no ASP.NET?", "verso": "Um padrão de arquitetura que divide a aplicação em Model (Dados), View (Interface) e Controller (Lógica de interligação).", "dica": "Separação de responsabilidades." },
        { "frente": "O que é o Kestrel?", "verso": "O servidor web embutido, multiplataforma e extremamente rápido, incluído por padrão nas aplicações ASP.NET Core.", "dica": "Servidor web do .NET." },
        { "frente": "O que é o NuGet?", "verso": "O gestor de pacotes oficial da plataforma .NET. Permite instalar, remover e atualizar bibliotecas de terceiros no projeto.", "dica": "O equivalente ao 'npm' do Node.js." },
        { "frente": "Qual a diferença entre IEnumerable e IQueryable no C#?", "verso": "IEnumerable executa a consulta na memória (após trazer os dados da base). IQueryable traduz os filtros para SQL e executa diretamente na base de dados.", "dica": "IQueryable é muito mais otimizado para bases de dados." },
        { "frente": "O que é o Swagger (OpenAPI)?", "verso": "Uma ferramenta que gera automaticamente uma interface visual e interativa para documentar e testar os endpoints de uma API REST.", "dica": "A documentação viva da API." },
        { "frente": "No ciclo de vida de Injeção de Dependência, o que significa 'Singleton'?", "verso": "Cria uma única instância do serviço a primeira vez que é solicitado, e partilha essa mesma instância com todas as requisições futuras.", "dica": "Único para todos." },
        { "frente": "No ciclo de vida de Injeção de Dependência, o que significa 'Scoped'?", "verso": "Cria uma nova instância do serviço por cada requisição HTTP (request).", "dica": "O mais comum em APIs web." },
        { "frente": "O que é o LINQ (Language Integrated Query)?", "verso": "Um conjunto de funcionalidades do C# que permite escrever consultas complexas (filtros, ordenações) em coleções de dados ou bases de dados de forma nativa.", "dica": "O SQL dentro do C#." },
        { "frente": "O que é uma Minimal API no .NET?", "verso": "Uma forma simplificada de criar APIs HTTP no C# com poucas linhas de código, sem a complexidade dos Controllers tradicionais.", "dica": "Rápido e direto ao ponto." },
        { "frente": "O que faz a palavra-chave 'await' em C#?", "verso": "Pausa a execução do método atual até que a tarefa assíncrona (Task) seja concluída, libertando a thread principal.", "dica": "Programação Assíncrona (async/await)." },
        { "frente": "O que é o ficheiro appsettings.json?", "verso": "O ficheiro principal de configuração das aplicações .NET, usado para guardar chaves, strings de conexão e parâmetros globais.", "dica": "Onde fica a 'Connection String'." },
        { "frente": "O que é o CORS (Cross-Origin Resource Sharing)?", "verso": "Um mecanismo de segurança dos navegadores que bloqueia requisições HTTP de domínios diferentes, a menos que a API as autorize explicitamente.", "dica": "Erro clássico ao ligar Front-end ao Back-end." },
        { "frente": "O que é um token JWT (JSON Web Token)?", "verso": "Um padrão de mercado para autenticação. É uma string encriptada gerada após o login que o cliente usa para aceder a rotas protegidas da API.", "dica": "O 'passaporte' de acesso do utilizador." },
        { "frente": "O que é o Middleware no ASP.NET Core?", "verso": "Um pedaço de código (componente) inserido no pipeline de requisições da aplicação, que pode intercetar, processar ou alterar o request/response.", "dica": "Ex: Autenticação, tratamento de erros globais." },
        { "frente": "O que são Data Annotations?", "verso": "Atributos colocados por cima das propriedades de uma classe (ex: [Required], [MaxLength(50)]) para validar os dados automaticamente.", "dica": "Validação de modelos." },
        { "frente": "O que são as Migrations no Entity Framework Core?", "verso": "Um sistema que permite gerar e aplicar alterações na estrutura da base de dados (criar tabelas, colunas) a partir das mudanças feitas nas classes C#.", "dica": "Versionamento do esquema da base de dados." }
    ],
    "fase17": [
        { "frente": "Qual a principal diferença entre uma Aplicação Nativa e Híbrida?", "verso": "A Nativa usa o código original (Kotlin/Swift) para uma performance máxima. A Híbrida usa tecnologias web (HTML/JS) dentro de uma 'casca' mobile.", "dica": "Disciplina: Desenvolvimento Mobile." },
        { "frente": "O que é o desenvolvimento Cross-Platform?", "verso": "A capacidade de escrever um código numa única linguagem (ex: C#, Dart, JS) e compilá-lo para gerar aplicações tanto para Android como iOS.", "dica": "Escreve uma vez, corre em todo o lado." },
        { "frente": "O que é o .NET MAUI?", "verso": "Framework da Microsoft (evolução do Xamarin) para criar aplicações nativas para Android, iOS, macOS e Windows utilizando C# e XAML.", "dica": "Multi-platform App UI." },
        { "frente": "O que é o Ciclo de Vida (Lifecycle) de um ecrã mobile?", "verso": "A série de estados pelos quais uma app passa: Criada (OnCreate), Visível (OnStart), Em Pausa (OnPause) e Destruída (OnDestroy).", "dica": "Evita consumo excessivo de bateria em 2º plano." },
        { "frente": "Para que serve a API de Geolocalização?", "verso": "Permite à aplicação aceder ao GPS e às redes móveis do telemóvel para determinar a latitude e longitude do utilizador.", "dica": "Usada no Uber, iFood, Waze." },
        { "frente": "Para que serve o SQLite em projetos Mobile?", "verso": "É uma base de dados relacional extremamente leve, que fica embutida dentro do próprio telemóvel para guardar informações offline.", "dica": "Funciona sem internet." },
        { "frente": "Qual é a linguagem oficial recomendada atualmente pela Google para o Android?", "verso": "Kotlin (substituindo o antigo Java).", "dica": "Moderna, concisa e segura." },
        { "frente": "Qual é a linguagem oficial recomendada atualmente pela Apple para o iOS?", "verso": "Swift (substituindo o antigo Objective-C).", "dica": "Rápida e interativa." },
        { "frente": "O que é o React Native?", "verso": "Um framework Cross-Platform criado pelo Facebook que permite desenvolver apps nativas utilizando JavaScript e React.", "dica": "Usado pelo Instagram e Discord." },
        { "frente": "O que é o Flutter?", "verso": "Um UI Toolkit Cross-Platform criado pela Google, que utiliza a linguagem Dart para desenhar interfaces bonitas e fluidas rapidamente.", "dica": "O principal concorrente do React Native." },
        { "frente": "O que é o ficheiro APK ou AAB no Android?", "verso": "O pacote final compilado e compactado que contém a aplicação pronta para ser instalada ou enviada para a Google Play Store.", "dica": "Android Package / Android App Bundle." },
        { "frente": "O que é o Xcode?", "verso": "O Ambiente de Desenvolvimento Integrado (IDE) oficial da Apple, obrigatório para compilar e publicar aplicações para o iOS.", "dica": "Só funciona no macOS." },
        { "frente": "O que são Push Notifications?", "verso": "Mensagens ou alertas curtos enviados pelo servidor diretamente para o ecrã do telemóvel do utilizador, mesmo quando a app está fechada.", "dica": "Mensagens de aviso do WhatsApp ou Banco." },
        { "frente": "O que significa 'Background Process' no mobile?", "verso": "Um processo em segundo plano, ou seja, código que continua a ser executado mesmo quando o utilizador está noutra app.", "dica": "Ex: O Spotify a tocar música enquanto lê e-mails." },
        { "frente": "Qual a diferença entre 'px' (pixels) e 'dp' (density-independent pixels)?", "verso": "O pixel varia de tamanho consoante o ecrã. O 'dp' ajusta-se automaticamente à densidade do ecrã para que os botões tenham sempre o mesmo tamanho físico.", "dica": "Responsividade móvel." },
        { "frente": "O que é o Firebase?", "verso": "Uma plataforma da Google (BaaS) que fornece base de dados em tempo real, autenticação, analytics e hospedagem, simplificando o Back-end de apps.", "dica": "Back-end as a Service." },
        { "frente": "O que é a funcionalidade 'Hot Reload'?", "verso": "A capacidade de injetar código alterado diretamente na app em execução, atualizando a interface em segundos sem perder o estado ou reiniciar a app.", "dica": "Acelera a criação de UIs." },
        { "frente": "O que é o Material Design?", "verso": "Um sistema de design global criado pela Google focado em UI limpa, com sombras físicas, cores vibrantes e animações de transição intuitivas.", "dica": "O padrão visual do Android." },
        { "frente": "O que é uma WebView?", "verso": "Um componente invisível que embute um navegador web dentro de uma app nativa, permitindo renderizar páginas HTML diretamente no ecrã.", "dica": "Um browser disfarçado de app." },
        { "frente": "O que é o sistema de Permissões Mobile?", "verso": "O mecanismo de segurança (exigido por Android e iOS) que obriga a app a perguntar ao utilizador se pode aceder à câmara, microfone ou ficheiros.", "dica": "'Permitir acesso à câmara?'" }
    ],
    "fase18": [
        { "frente": "O que é uma Stored Procedure (Procedimento Armazenado)?", "verso": "Um bloco de código SQL guardado na base de dados para ser reutilizado várias vezes pelas aplicações que se conectam a ela.", "dica": "Disciplina: Programação de Bases de Dados." },
        { "frente": "O que é uma Trigger (Gatilho)?", "verso": "Um código SQL que é disparado e executado automaticamente no exato momento em que ocorre um evento (Insert, Update, Delete) numa tabela.", "dica": "Ótimo para manter históricos/logs automáticos." },
        { "frente": "Qual a principal diferença entre uma View e uma Tabela?", "verso": "A tabela armazena dados físicos no disco. A View é uma 'tabela virtual' temporária que apresenta o resultado de uma consulta pré-definida (SELECT).", "dica": "A View não ocupa espaço com os dados." },
        { "frente": "O que é o conceito ACID em transações?", "verso": "Um conjunto de propriedades (Atomicidade, Consistência, Isolamento, Durabilidade) que garante que as transações na base de dados processam com segurança.", "dica": "Garante a fiabilidade do sistema bancário." },
        { "frente": "Para que serve o comando COMMIT?", "verso": "Para confirmar o sucesso de uma transação, guardando e gravando permanentemente as alterações efetuadas na base de dados.", "dica": "Confirmar a gravação." },
        { "frente": "Para que serve o comando ROLLBACK?", "verso": "Para reverter e cancelar todas as alterações feitas numa transação caso ocorra um erro antes do comando COMMIT.", "dica": "O 'Desfazer' (Ctrl+Z) da base de dados." },
        { "frente": "O que é um Cursor em SQL?", "verso": "Uma estrutura de controlo que permite percorrer e processar os registos (linhas) resultantes de um SELECT, um por um.", "dica": "Como um laço 'for', mas muito lento em SQL." },
        { "frente": "O que é uma User-Defined Function (UDF)?", "verso": "Uma função criada pelo utilizador para efetuar cálculos ou formatar dados e retornar um único valor (escalar) ou uma tabela.", "dica": "Pode ser usada dentro de um comando SELECT." },
        { "frente": "Qual a principal diferença entre Procedure e Function em SQL?", "verso": "Uma Function tem SEMPRE de devolver um valor e pode ser usada num SELECT. A Procedure pode apenas alterar dados e não pode ser usada num SELECT.", "dica": "A função calcula, a procedure executa tarefas." },
        { "frente": "O que é um Índice Agrupado (Clustered Index)?", "verso": "Ordena fisicamente os dados no disco da mesma forma que o índice. Uma tabela só pode ter UM índice agrupado (geralmente a Chave Primária).", "dica": "Muda a ordem real das folhas no arquivo." },
        { "frente": "O que é um Índice Não Agrupado (Non-Clustered Index)?", "verso": "Cria uma estrutura de procura separada (como um índice de livro) que aponta para os dados. Uma tabela pode ter vários.", "dica": "Índice remissivo no fim de um livro." },
        { "frente": "O que é um Deadlock (Impasse)?", "verso": "Quando duas ou mais transações ficam bloqueadas eternamente, com cada uma à espera que a outra liberte um recurso (tabela) que a outra bloqueou.", "dica": "Abraço da morte." },
        { "frente": "O que é o nível de isolamento 'Read Uncommitted'?", "verso": "O nível mais baixo de isolamento; permite a uma transação ler dados não confirmados (sujos) que ainda estão a ser alterados por outra transação.", "dica": "Leitura fantasma/suja (Dirty Read)." },
        { "frente": "O que é o T-SQL (Transact-SQL)?", "verso": "Uma extensão proprietária da linguagem SQL criada pela Microsoft para uso no SQL Server, que adiciona lógica de programação (IF, WHILE, Variáveis).", "dica": "A linguagem de programação do SQL Server." },
        { "frente": "O que faz o comando EXEC ou EXECUTE?", "verso": "É utilizado para invocar e correr uma Stored Procedure ou executar uma string de código SQL dinâmico.", "dica": "Dá o 'play' na Procedure." },
        { "frente": "O que é uma Tabela Temporária (ex: #Tabela)?", "verso": "Uma tabela que existe apenas temporariamente na memória (ou no tempdb) durante a ligação do utilizador e é eliminada ao encerrar a sessão.", "dica": "Usa o símbolo '#' na frente do nome." },
        { "frente": "Para que serve a função SCOPE_IDENTITY() em T-SQL?", "verso": "Devolve o último valor de Identidade (ID autoincremental) que acabou de ser gerado pelo INSERT na sessão e escopo atuais.", "dica": "Qual foi o ID que acabei de inserir?" },
        { "frente": "Qual a diferença entre a cláusula WHERE e a HAVING?", "verso": "O WHERE filtra os dados ANTES do agrupamento. O HAVING filtra os dados JÁ AGRUPADOS por uma função agregadora (SUM, COUNT).", "dica": "HAVING é o WHERE do GROUP BY." },
        { "frente": "O que é o Particionamento de Tabelas?", "verso": "A divisão de uma tabela gigantesca em pedaços (partições) menores distribuídos por vários discos, para melhorar drasticamente a performance.", "dica": "Ex: Particionar dados por ano (2025, 2026)." },
        { "frente": "O que é um Plano de Execução (Execution Plan)?", "verso": "A rota ou estratégia interna escolhida pelo motor da base de dados para recuperar os dados da forma mais otimizada possível.", "dica": "Mostra se o SQL está a usar os índices corretamente." }
    ],
    "fase19": [
        { "frente": "O que é a Cloud Computing (Computação em Nuvem)?", "verso": "A entrega de serviços informáticos (servidores, bases de dados, software) via Internet, geridos por terceiros com base no 'pague o que utilizar'.", "dica": "Disciplina: Cloud e DevOps." },
        { "frente": "O que é o Docker?", "verso": "Uma plataforma de código aberto que automatiza a instalação e execução de aplicações em unidades padronizadas e isoladas chamadas Contentores.", "dica": "Acaba com o 'no meu PC funciona'." },
        { "frente": "Para que serve o Kubernetes?", "verso": "É um sistema (orquestrador) desenvolvido pela Google para automatizar o deployment, o escalonamento e a gestão de milhares de contentores Docker.", "dica": "O capitão/orquestrador dos contentores." },
        { "frente": "O que significa CI/CD?", "verso": "Continuous Integration (Integração Contínua) e Continuous Deployment (Entrega Contínua). O processo de automatizar testes e lançamentos de código em produção.", "dica": "Automatização desde o 'git push' até ao servidor." },
        { "frente": "Defina IaaS, PaaS e SaaS.", "verso": "IaaS (Máquina/Infraestrutura alugada); PaaS (Ambiente para desenvolvimento); SaaS (Software final pronto para o utilizador, ex: Gmail).", "dica": "Os 3 níveis do serviço Cloud." },
        { "frente": "O que é Escalabilidade Horizontal?", "verso": "Aumentar a capacidade adicionando MAIS máquinas (servidores) ao sistema, dividindo a carga entre eles.", "dica": "Scale-out." },
        { "frente": "O que é Escalabilidade Vertical?", "verso": "Aumentar a capacidade colocando mais recursos físicos (mais RAM ou CPU mais potente) na MESMA máquina existente.", "dica": "Scale-up." },
        { "frente": "O que é Serverless (Computação sem Servidor)?", "verso": "Modelo onde o provedor Cloud aloca recursos dinamicamente. O programador apenas escreve o código (funções) e só paga pelo tempo exato de execução.", "dica": "Ex: AWS Lambda." },
        { "frente": "O que é IaC (Infraestrutura como Código)?", "verso": "A gestão e provisionamento de centros de dados Cloud através de ficheiros com código e scripts, em vez de configurar as coisas manualmente em painéis web.", "dica": "O servidor configurado em linhas de código." },
        { "frente": "O que é o Terraform?", "verso": "Uma ferramenta open-source popular de IaC (Infraestrutura como Código) que permite criar, alterar e gerir redes seguras e eficientes em múltiplos provedores Cloud.", "dica": "Automatiza a criação do servidor." },
        { "frente": "O que é o AWS EC2?", "verso": "Amazon Elastic Compute Cloud. O serviço de IaaS da Amazon que permite alugar e correr servidores virtuais (instâncias) na nuvem.", "dica": "A máquina virtual da Amazon." },
        { "frente": "O que é o Amazon S3?", "verso": "Amazon Simple Storage Service. Um serviço de armazenamento de ficheiros em nuvem seguro e infinitamente escalável focado em objetos (imagens, backups).", "dica": "O 'disco rígido' infinito da AWS." },
        { "frente": "O que é um Pipeline de DevOps?", "verso": "Um conjunto de etapas automatizadas (Build, Test, Deploy) que o código percorre desde o repositório até ser publicado no servidor final.", "dica": "A esteira de montagem do software." },
        { "frente": "O que é uma Arquitetura de Microsserviços?", "verso": "Onde uma aplicação grande é construída como um conjunto de pequenos serviços modulares e independentes, cada um correndo o seu próprio processo.", "dica": "Opõe-se à arquitetura Monolítica." },
        { "frente": "O que é o GitHub Actions?", "verso": "Uma plataforma nativa no GitHub que permite criar, testar e fazer o deployment automático do seu código (pipeline de CI/CD).", "dica": "Ação automatizada sempre que se faz um 'push'." },
        { "frente": "O que significa 'Alta Disponibilidade' (High Availability)?", "verso": "Sistemas configurados (usando balanceadores e redundância) para garantirem que estão online e acessíveis 99,99% do tempo, sem paralisações.", "dica": "O sistema não pode cair." },
        { "frente": "No Docker, o que é uma Imagem?", "verso": "Um modelo/ficheiro imutável de apenas leitura contendo as instruções necessárias (SO, bibliotecas, código) para instanciar um Contentor.", "dica": "A 'forma de bolo' do contentor." },
        { "frente": "O que faz o comando 'docker-compose up'?", "verso": "Lê o ficheiro 'docker-compose.yml' e inicia simultaneamente múltiplos contentores interligados (ex: Aplicação + Banco de Dados).", "dica": "Sobe todo o ambiente de uma vez." },
        { "frente": "O que é o Blue-Green Deployment?", "verso": "Técnica de lançamento de software em que dois ambientes idênticos coexistem (Azul ativo, Verde atualizado). O tráfego é movido do Azul para o Verde sem o utilizador notar.", "dica": "Atualização com Zero Downtime (sem paralisação)." },
        { "frente": "O que é Monitorização e Observabilidade em DevOps?", "verso": "Uso de ferramentas (métricas, logs, traces) para compreender rapidamente o estado interno de um sistema e detetar gargalos ou quedas antes do cliente.", "dica": "Medição contínua da saúde do software." }
    ],
    "fase20": [
        { "frente": "O que é um MVP (Minimum Viable Product)?", "verso": "A versão mais simples de um novo produto que permite à equipa recolher o máximo de validação sobre o cliente com o mínimo esforço.", "dica": "Disciplina: Empreendedorismo em TI." },
        { "frente": "Qual o principal objetivo do Empreendedorismo em TI?", "verso": "Identificar problemas ou necessidades reais da sociedade e criar soluções de base tecnológica escaláveis e inovadoras.", "dica": "Não é só programar, é resolver uma dor." },
        { "frente": "O que caracteriza uma Startup?", "verso": "Um grupo de pessoas à procura de um modelo de negócio inovador, repetível e escalável, a trabalhar em condições de extrema incerteza.", "dica": "Não é apenas uma 'pequena empresa'." },
        { "frente": "O que é um Modelo B2B (Business to Business)?", "verso": "Um modelo onde a empresa comercializa os seus produtos (como softwares ERP) ou serviços diretamente a outras Empresas, não a pessoas físicas.", "dica": "Ex: A Microsoft a vender o Office à IBM." },
        { "frente": "O que é um Modelo B2C (Business to Consumer)?", "verso": "Um modelo comercial em que os produtos ou serviços são vendidos diretamente da empresa para o consumidor ou utilizador final.", "dica": "Ex: Spotify, Netflix, iFood." },
        { "frente": "O que é um 'Pitch' (ou Pitch Deck)?", "verso": "Uma apresentação verbal rápida (entre 3 a 5 minutos) utilizada para vender a ideia da sua startup a potenciais investidores ou parceiros.", "dica": "Venda de elevador (Elevator Pitch)." },
        { "frente": "O que é um Investidor Anjo (Angel Investor)?", "verso": "Uma pessoa física (geralmente empresários de sucesso) que investe o seu próprio capital numa startup ainda na sua fase inicial de risco.", "dica": "Aporta dinheiro e mentoria inteligente (Smart Money)." },
        { "frente": "O que é Venture Capital (Capital de Risco)?", "verso": "Fundos de investimento de grandes grupos aplicados em startups maduras com alto potencial de crescimento escalável e retorno agressivo.", "dica": "Injetam os milhões na empresa." },
        { "frente": "O que significa o indicador CAC (Custo de Aquisição de Clientes)?", "verso": "O montante médio que a empresa tem de gastar em marketing, anúncios e vendas para conseguir atrair um único cliente novo para o produto.", "dica": "Quanto custa comprar um cliente." },
        { "frente": "O que é a métrica LTV (Lifetime Value)?", "verso": "O lucro financeiro líquido que um cliente gera para a empresa durante todo o tempo em que mantém relacionamento e assinatura ativa.", "dica": "A regra de ouro: O LTV tem de ser superior ao CAC." },
        { "frente": "O que significa o Churn Rate?", "verso": "A taxa de cancelamento. A percentagem de clientes que param de pagar ou de usar o serviço da sua empresa num determinado período.", "dica": "A métrica do 'balde furado'." },
        { "frente": "O que significa o termo 'Pivotar' (Pivot) no mundo das startups?", "verso": "Alterar fundamentalmente a estratégia do modelo de negócio ou as funcionalidades do produto ao perceber que a ideia original não está a dar lucro.", "dica": "Mudar a rota do barco antes dele afundar." },
        { "frente": "O que é o Break-even Point (Ponto de Equilíbrio)?", "verso": "O ponto financeiro de viragem em que os custos da empresa são iguais às suas receitas. Daí para a frente, a empresa passa finalmente a gerar lucro líquido.", "dica": "O famoso 'ficar a zero e sair do vermelho'." },
        { "frente": "O que é a prática do 'Bootstrapping'?", "verso": "Iniciar e desenvolver uma startup usando apenas os próprios recursos do fundador e o dinheiro dos primeiros clientes, sem aceitar investimento externo.", "dica": "Crescer pelos seus próprios meios." },
        { "frente": "O que é o Business Model Canvas?", "verso": "Uma ferramenta de gestão estratégica em formato visual (1 quadro com 9 blocos) focada em desenvolver ou documentar um modelo de negócio completo.", "dica": "A evolução ágil do Plano de Negócios clássico." },
        { "frente": "O que é a Proposta de Valor (Value Proposition)?", "verso": "A afirmação simples que explica o benefício do seu produto, como ele resolve a dor do cliente e por que ele deve comprar de si e não da concorrência.", "dica": "O pilar central do seu negócio." },
        { "frente": "O que é o conceito de 'Growth Hacking'?", "verso": "Uma abordagem focada no marketing impulsionado por experiências rápidas, ciência de dados e desenvolvimento de software para garantir o crescimento (Growth) explosivo.", "dica": "Usar tecnologia no marketing em prol do crescimento." },
        { "frente": "O que é o indicador ROI (Return on Investment)?", "verso": "Retorno Sobre o Investimento. Uma métrica utilizada para medir o lucro (rentabilidade) gerado num projeto em relação ao montante que foi inicialmente investido nele.", "dica": "O projeto deu dinheiro ou prejuízo?" },
        { "frente": "O que é considerado uma Startup 'Unicórnio'?", "verso": "Uma empresa privada de tecnologia ou startup que consegue alcançar uma avaliação de mercado financeira igual ou superior a 1 Milhão de Dólares antes de ir para a bolsa de valores.", "dica": "Uma avaliação astronômica e rara." },
        { "frente": "O que preconiza o método 'Lean Startup' (Startup Enxuta) criado por Eric Ries?", "verso": "Aplicar o ciclo 'Construir-Medir-Aprender' num processo científico focado em lançar o MVP o mais depressa possível para validar factos sem desperdiçar dinheiro e tempo.", "dica": "Falhar rapidamente, aprender depressa, gastar pouco." }
    ],

    // ================= MÓDULO 05: PROVA ENADE (50 QUESTÕES POR FASE) =================
    "fase21": [
        { 
            "frente": "(ENADE - Gestão) Uma empresa adotou metodologias ágeis. Durante uma iteração, a equipe percebeu que um dos requisitos estava mal detalhado, gerando atraso.\n\nQual cerimônia do Scrum é o momento IDEAL para a equipe inspecionar esse problema de processo e sugerir melhorias para o próximo ciclo?", 
            "opcoes": ["A) Sprint Planning", "B) Daily Scrum", "C) Sprint Review", "D) Sprint Retrospective"],
            "correta": 3,
            "verso": "Alternativa D: Sprint Retrospective.\n\nJustificativa: A Retrospectiva serve exatamente para avaliar o processo, as falhas de comunicação e ferramentas, buscando melhoria contínua para a próxima Sprint.", 
            "dica": "Foco no processo e na equipe, não no produto." 
        },
        { 
            "frente": "(ENADE - LGPD) Uma clínica médica recolhe dados biométricos e histórico de doenças de seus pacientes. Segundo a Lei Geral de Proteção de Dados (LGPD), estes dados são classificados como:", 
            "opcoes": ["A) Dados Públicos", "B) Dados Sensíveis", "C) Dados Anonimizados", "D) Dados Temporários"],
            "correta": 1,
            "verso": "Alternativa B: Dados Sensíveis.\n\nJustificativa: Dados sobre saúde, biometria, origem racial, religião e orientação sexual são sensíveis pois podem gerar discriminação, exigindo maior rigor de proteção.", 
            "dica": "A saúde é um tema que exige proteção redobrada." 
        },
        { 
            "frente": "(ENADE - UX/UI) Uma equipe está refatorando a interface de um sistema. O sistema atual possui textos com baixo contraste e depende apenas da cor vermelha para indicar erros.\n\nQual das ações abaixo NÃO corresponde a uma boa prática de Acessibilidade (WCAG)?", 
            "opcoes": ["A) Adicionar atributos 'alt' em imagens.", "B) Depender exclusivamente da cor para mensagens de erro.", "C) Garantir navegação completa via teclado (Tab).", "D) Manter alto contraste entre fundo e texto."],
            "correta": 1,
            "verso": "Alternativa B: Depender exclusivamente da cor para mensagens de erro.\n\nJustificativa: Pessoas daltônicas não conseguirão identificar o erro. O correto é usar Cor + Ícone + Texto descritivo.", 
            "dica": "Pense na experiência de um usuário daltônico." 
        },
        { 
            "frente": "(ENADE - Eng. de Software) No contexto de levantamento de requisitos, um analista documentou: 'O sistema deve ser capaz de processar 10.000 transações por segundo'.\n\nEste é um exemplo clássico de:", 
            "opcoes": ["A) Requisito Funcional", "B) Regra de Negócio", "C) Requisito Não Funcional", "D) Caso de Uso"],
            "correta": 2,
            "verso": "Alternativa C: Requisito Não Funcional.\n\nJustificativa: Requisitos Não Funcionais descrevem *como* o sistema deve operar (desempenho, segurança, usabilidade), enquanto os Funcionais descrevem *o que* ele faz.", 
            "dica": "Refere-se à performance (o 'como'), não a uma funcionalidade." 
        },
        { 
            "frente": "(ENADE - Scrum) Durante o desenvolvimento de um produto, o cliente solicita constantemente mudanças. No framework Scrum, quem é o papel responsável por maximizar o valor do produto e gerenciar o Backlog, aceitando ou recusando essas mudanças?", 
            "opcoes": ["A) Scrum Master", "B) Product Owner (PO)", "C) Tech Lead", "D) Desenvolvedor Full-Stack"],
            "correta": 1,
            "verso": "Alternativa B: Product Owner (PO).\n\nJustificativa: O PO é a voz do cliente dentro da equipe. Ele é o único responsável por priorizar, adicionar ou remover itens do Product Backlog.", 
            "dica": "É o 'dono' do produto e do backlog." 
        },
        { 
            "frente": "(ENADE - Ética) Um desenvolvedor descobre uma falha crítica de segurança no sistema da empresa e decide vendê-la na Dark Web em vez de reportá-la. \n\nNa segurança da informação, essa atitude enquadra-se no perfil de um hacker do tipo:", 
            "opcoes": ["A) White Hat", "B) Gray Hat", "C) Black Hat", "D) Red Hat"],
            "correta": 2,
            "verso": "Alternativa C: Black Hat.\n\nJustificativa: Hackers Black Hat exploram vulnerabilidades para ganho financeiro ou fins maliciosos, agindo de forma ilegal e antiética.", 
            "dica": "Chapéu preto = intenções maliciosas." 
        },
        { 
            "frente": "(ENADE - UML) Em um Diagrama de Casos de Uso, quando um Caso de Uso 'A' obrigatoriamente executa o Caso de Uso 'B' para completar sua função, qual é o tipo de relacionamento entre eles?", 
            "opcoes": ["A) <<extend>>", "B) <<include>>", "C) Generalização", "D) Associação Simples"],
            "correta": 1,
            "verso": "Alternativa B: <<include>>.\n\nJustificativa: O relacionamento <<include>> (inclusão) indica que o caso de uso base sempre, obrigatoriamente, incorpora o comportamento do caso de uso incluído.", 
            "dica": "É uma dependência obrigatória." 
        },
        { 
            "frente": "(ENADE - Governança) A biblioteca ITIL tem como foco principal o alinhamento da TI com os negócios da empresa. Qual é a principal diferença entre a ITIL e o COBIT?", 
            "opcoes": ["A) A ITIL foca em serviços de TI; o COBIT foca em auditoria e governança.", "B) O COBIT é para desenvolvimento ágil; a ITIL é para gestão financeira.", "C) Ambos são frameworks exclusivos para segurança da informação.", "D) A ITIL substitui a LGPD; o COBIT substitui o Scrum."],
            "correta": 0,
            "verso": "Alternativa A: A ITIL foca em serviços; o COBIT foca em auditoria e governança.\n\nJustificativa: A ITIL foca nas boas práticas de Gestão de Serviços de TI (ITSM), enquanto o COBIT fornece um modelo abrangente de Governança corporativa e auditoria de TI.", 
            "dica": "ITIL = Serviços. COBIT = Controle/Auditoria." 
        },
        { 
            "frente": "(ENADE - Qualidade) Em um processo de testes de software, os testes unitários são fundamentais. Quem é o principal responsável pela criação e execução dos testes unitários?", 
            "opcoes": ["A) O Analista de Requisitos", "B) O Usuário Final", "C) O Desenvolvedor do código", "D) O Gerente de Projetos"],
            "correta": 2,
            "verso": "Alternativa C: O Desenvolvedor do código.\n\nJustificativa: Os testes unitários validam os menores blocos de código (funções/métodos) e devem ser escritos pelo próprio programador que desenvolveu a lógica.", 
            "dica": "Quem escreve a função, testa a função." 
        },
        { 
            "frente": "(ENADE - Inovação) No contexto de startups, o conceito de MVP (Minimum Viable Product) refere-se a:", 
            "opcoes": ["A) Um produto finalizado e sem bugs.", "B) A versão mais complexa de um sistema para testes de estresse.", "C) A versão mais simples de um produto que permite validar uma hipótese com o menor esforço.", "D) Um protótipo visual feito apenas no papel."],
            "correta": 2,
            "verso": "Alternativa C: A versão mais simples de um produto para validação.\n\nJustificativa: O MVP serve para testar a viabilidade do negócio no mercado rapidamente, recolhendo feedback antes de investir pesadamente no desenvolvimento.", 
            "dica": "Mínimo + Viável = Rápido e Funcional." 
        },
        { 
            "frente": "(ENADE - Negócios) Um modelo de negócio onde uma empresa fornece software através da internet mediante uma assinatura mensal (como a Netflix ou Spotify) é classificado como:", 
            "opcoes": ["A) IaaS (Infrastructure as a Service)", "B) PaaS (Platform as a Service)", "C) SaaS (Software as a Service)", "D) DaaS (Data as a Service)"],
            "correta": 2,
            "verso": "Alternativa C: SaaS (Software as a Service).\n\nJustificativa: No modelo SaaS, o usuário final acessa uma aplicação pronta e hospedada na nuvem, pagando pelo uso ou assinatura, sem se preocupar com a infraestrutura.", 
            "dica": "O S significa Software." 
        },
        { 
            "frente": "(ENADE - Métricas) O que mede o KPI conhecido como 'Churn Rate' em uma empresa de tecnologia SaaS?", 
            "opcoes": ["A) O número de novos usuários por mês.", "B) A taxa de cancelamento ou evasão de clientes em um determinado período.", "C) A velocidade de carregamento da página.", "D) O custo para adquirir um novo cliente (CAC)."],
            "correta": 1,
            "verso": "Alternativa B: A taxa de cancelamento de clientes.\n\nJustificativa: O Churn mede a porcentagem de clientes que pararam de usar o serviço. É uma métrica crítica para avaliar a retenção e a satisfação do cliente.", 
            "dica": "Churn significa perda ou cancelamento." 
        },
        { 
            "frente": "(ENADE - Negócios) Em finanças e gestão de TI, o que significa a métrica ROI?", 
            "opcoes": ["A) Return on Incident (Retorno sobre Incidente).", "B) Return on Investment (Retorno sobre Investimento).", "C) Rate of Integration (Taxa de Integração).", "D) Resource Optimization Index (Índice de Otimização de Recursos)."],
            "correta": 1,
            "verso": "Alternativa B: Return on Investment (Retorno sobre Investimento).\n\nJustificativa: O ROI mede a rentabilidade de um investimento, calculando quanto dinheiro a empresa ganhou ou perdeu em relação ao valor que foi investido no projeto.", 
            "dica": "Mede se o projeto deu lucro ou prejuízo." 
        },
        { 
            "frente": "(ENADE - Kanban) O que significa a prática de 'Limitar o WIP' (Work in Progress) na metodologia Kanban?", 
            "opcoes": ["A) Limitar o número de horas que a equipe pode trabalhar por dia.", "B) Restringir a quantidade máxima de tarefas que podem estar em andamento simultaneamente em uma coluna do quadro.", "C) Limitar o acesso do cliente ao código-fonte.", "D) Reduzir o escopo do projeto pela metade."],
            "correta": 1,
            "verso": "Alternativa B: Restringir a quantidade de tarefas em andamento.\n\nJustificativa: Limitar o WIP evita a sobrecarga da equipe, foca na finalização das tarefas (terminar o que começou) e identifica gargalos no fluxo de trabalho.", 
            "dica": "Pare de começar e comece a terminar." 
        },
        { 
            "frente": "(ENADE - LGPD) De acordo com a LGPD, quem é a figura do 'Titular' dos dados?", 
            "opcoes": ["A) A empresa que armazena os dados no banco de dados.", "B) O administrador do sistema (DBA).", "C) A pessoa natural (física) a quem se referem os dados pessoais.", "D) O governo federal."],
            "correta": 2,
            "verso": "Alternativa C: A pessoa natural (física) a quem se referem os dados pessoais.\n\nJustificativa: Na LGPD, o titular é o dono dos dados (o cidadão, cliente ou funcionário), e a ele são garantidos os direitos de acesso, alteração e eliminação.", 
            "dica": "É o verdadeiro dono da informação." 
        },
        { 
            "frente": "(ENADE - LGPD) De acordo com a LGPD, quem é o 'DPO' (Data Protection Officer) ou Encarregado de Dados?", 
            "opcoes": ["A) O hacker contratado para testar o sistema.", "B) O gerente de banco de dados (DBA).", "C) A pessoa indicada pela empresa para atuar como canal de comunicação entre a empresa, os titulares dos dados e a Autoridade Nacional (ANPD).", "D) O desenvolvedor back-end sênior."],
            "correta": 2,
            "verso": "Alternativa C: O canal de comunicação sobre proteção de dados.\n\nJustificativa: O DPO (Encarregado) é o profissional responsável por garantir que a empresa está em conformidade com a LGPD e atuar como ponte de comunicação oficial.", 
            "dica": "É o 'porta-voz' da privacidade na empresa." 
        },
        { 
            "frente": "(ENADE - Cloud) Uma empresa quer focar apenas em escrever o código do seu sistema web, sem precisar gerenciar o sistema operacional do servidor, atualizações de segurança ou redes. Qual modelo de Cloud deve ser contratado?", 
            "opcoes": ["A) IaaS", "B) PaaS", "C) SaaS", "D) On-Premises"],
            "correta": 1,
            "verso": "Alternativa B: PaaS (Platform as a Service).\n\nJustificativa: O modelo PaaS fornece o ambiente e as ferramentas para o desenvolvedor executar a aplicação, abstraindo toda a gestão da infraestrutura por trás.", 
            "dica": "Plataforma focada no desenvolvedor (Platform)." 
        },
        { 
            "frente": "(ENADE - Projetos) Em uma matriz SWOT (FOFA), quais os fatores representam o ambiente EXTERNO da organização, sobre os quais a empresa não tem controle direto?", 
            "opcoes": ["A) Forças e Fraquezas", "B) Fraquezas e Oportunidades", "C) Forças e Ameaças", "D) Oportunidades e Ameaças"],
            "correta": 3,
            "verso": "Alternativa D: Oportunidades e Ameaças.\n\nJustificativa: Forças e Fraquezas são aspectos internos (equipe, tecnologia). Oportunidades e Ameaças vêm de fora (mercado, concorrência, novas leis).", 
            "dica": "O que vem de fora (mercado/leis)." 
        },
        { 
            "frente": "(ENADE - Qualidade de Software) O que é o processo de Refatoração (Refactoring)?", 
            "opcoes": ["A) Reescrever o código para alterar suas funcionalidades externas e adicionar botões.", "B) Melhorar a estrutura interna do código sem alterar seu comportamento externo (o que o usuário vê).", "C) Apagar o sistema e começar tudo do zero.", "D) Adicionar novas features durante a fase de testes."],
            "correta": 1,
            "verso": "Alternativa B: Melhorar a estrutura interna sem alterar o comportamento externo.\n\nJustificativa: Refatorar é limpar o código (deixá-lo mais legível, otimizado e modular) sem mudar as regras de negócio ou a interface do usuário.", 
            "dica": "Melhorar por dentro, manter igual por fora." 
        },
        { 
            "frente": "(ENADE - Gestão) O Ciclo PDCA é uma ferramenta de gestão interativa amplamente utilizada para o controle e melhoria contínua. O que significam as siglas PDCA?", 
            "opcoes": ["A) Program, Develop, Code, Analyze.", "B) Plan, Do, Check, Act.", "C) Process, Data, Control, Audit.", "D) Plan, Deploy, Compile, Act."],
            "correta": 1,
            "verso": "Alternativa B: Plan (Planejar), Do (Fazer), Check (Checar), Act (Agir).\n\nJustificativa: O PDCA é um método de 4 passos para garantir a melhoria contínua de processos e produtos em qualquer área da empresa.", 
            "dica": "Planejar, Fazer, Verificar e Agir." 
        },
        { 
            "frente": "(ENADE - Eng. Requisitos) Uma técnica ágil eficaz para capturar requisitos sob a perspectiva do usuário segue o formato: 'Como [perfil], eu quero [ação], para [benefício]'. Como se chama essa técnica?", 
            "opcoes": ["A) Diagrama de Classes", "B) História de Usuário (User Story)", "C) Mapa Mental", "D) Documento de Visão"],
            "correta": 1,
            "verso": "Alternativa B: História de Usuário (User Story).\n\nJustificativa: A User Story é uma técnica ágil focada em descrever uma funcionalidade sob a perspectiva do usuário final e do valor que ela gera para o negócio.", 
            "dica": "Foca no 'quem', 'o quê' e 'porquê'." 
        },
        { 
            "frente": "(ENADE - Eng. Requisitos) Na metodologia Ágil, quando uma História de Usuário (User Story) é muito grande ou complexa para ser entregue em uma única Sprint, como ela é chamada?", 
            "opcoes": ["A) Bug", "B) Épico (Epic)", "C) Tarefa (Task)", "D) Spike"],
            "correta": 1,
            "verso": "Alternativa B: Épico (Epic).\n\nJustificativa: Um Épico é uma grande iniciativa ou requisito que não cabe em uma Sprint e precisa ser quebrado (fatiado) em várias User Stories menores.", 
            "dica": "Uma história grande e épica." 
        },
        { 
            "frente": "(ENADE - Design Thinking) O Design Thinking é uma abordagem de inovação centrada no ser humano. Qual é a primeira etapa fundamental desse processo?", 
            "opcoes": ["A) Prototipação", "B) Ideação", "C) Teste", "D) Empatia (Imersão)"],
            "correta": 3,
            "verso": "Alternativa D: Empatia (Imersão).\n\nJustificativa: Antes de criar soluções, a equipe precisa se colocar no lugar do usuário (empatia) para entender profundamente suas dores, necessidades e o contexto do problema.", 
            "dica": "Se colocar no lugar do cliente primeiro." 
        },
        { 
            "frente": "(ENADE - Projetos) No PMBOK, o que é o 'Caminho Crítico' em um cronograma de projeto?", 
            "opcoes": ["A) A sequência de atividades com o menor risco de falha.", "B) A sequência de atividades que determina a duração total do projeto, onde qualquer atraso afeta a data de entrega final.", "C) O conjunto de tarefas que custam mais dinheiro.", "D) O caminho percorrido pelo cliente."],
            "correta": 1,
            "verso": "Alternativa B: A sequência que determina a duração total mais longa.\n\nJustificativa: As tarefas no caminho crítico têm zero 'folga'. Se uma delas atrasar um dia, todo o projeto atrasará um dia no cronograma.", 
            "dica": "São as tarefas sem folga de tempo." 
        },
        { 
            "frente": "(ENADE - Projetos) O 'Triângulo de Ferro' da gestão de projetos clássica define três restrições principais que devem ser equilibradas para garantir a qualidade do projeto. Quais são elas?", 
            "opcoes": ["A) Código, Testes e Deploy.", "B) Escopo, Tempo e Custo.", "C) Risco, Qualidade e Comunicação.", "D) Design, Front-end e Back-end."],
            "correta": 1,
            "verso": "Alternativa B: Escopo, Tempo e Custo.\n\nJustificativa: Alterar um lado do triângulo invariavelmente afeta os outros. Se o cliente aumentar o Escopo, o Tempo e/ou o Custo precisarão ser aumentados para manter a qualidade.", 
            "dica": "Restrições triplas clássicas." 
        },
        { 
            "frente": "(ENADE - Empreendedorismo) O que significa a sigla B2B em modelos de negócios?", 
            "opcoes": ["A) Business to Business (Empresa vendendo para Empresa).", "B) Business to Consumer (Empresa vendendo para Consumidor final).", "C) Back to Basics (De volta ao básico).", "D) Banco para Banco."],
            "correta": 0,
            "verso": "Alternativa A: Business to Business.\n\nJustificativa: B2B ocorre quando uma empresa cria soluções (como um ERP de RH ou maquinário pesado) e vende para outras empresas, e não para pessoas físicas.", 
            "dica": "Empresa para Empresa." 
        },
        { 
            "frente": "(ENADE - Inovação) A Uber mudou completamente a indústria de transportes sem possuir um único carro de frota. O Netflix fez o mesmo com as locadoras de vídeo. Esse fenômeno é conhecido como:", 
            "opcoes": ["A) Inovação Incremental", "B) Inovação de Sustentação", "C) Inovação Disruptiva", "D) Reengenharia Reversa"],
            "correta": 2,
            "verso": "Alternativa C: Inovação Disruptiva.\n\nJustificativa: Inovações disruptivas criam um novo mercado ou rede de valor, desestabilizando líderes de mercado existentes e mudando as regras do jogo.", 
            "dica": "Destrói o modelo antigo e cria um novo." 
        },
        { 
            "frente": "(ENADE - Scrum) O que é o objetivo da cerimônia 'Daily Scrum'?", 
            "opcoes": ["A) Discutir a arquitetura técnica do banco de dados por 2 horas.", "B) Reunião diária de no máximo 15 minutos para sincronizar as atividades da equipe e planejar as próximas 24 horas.", "C) Apresentar o software finalizado para o cliente.", "D) Revisar as falhas do membro mais lento da equipe."],
            "correta": 1,
            "verso": "Alternativa B: Reunião diária de sincronização (Timebox de 15 min).\n\nJustificativa: A Daily serve para a equipe de desenvolvimento inspecionar o progresso em direção ao objetivo da Sprint e identificar impedimentos rapidamente.", 
            "dica": "Reunião em pé (Stand-up), rápida e diária." 
        },
        { 
            "frente": "(ENADE - Scrum) Quem é o 'Scrum Master' na metodologia ágil?", 
            "opcoes": ["A) O chefe ou gerente tradicional que manda na equipe.", "B) O líder servidor que garante que o Scrum seja compreendido e aplicado, removendo impedimentos técnicos e organizacionais da equipe.", "C) O desenvolvedor que escreve o código mais rápido.", "D) O representante legal do cliente (Product Owner)."],
            "correta": 1,
            "verso": "Alternativa B: O líder servidor e facilitador.\n\nJustificativa: O Scrum Master não é um gerente que dita tarefas. Ele facilita cerimônias, protege a equipe de distrações externas e remove gargalos (impedimentos).", 
            "dica": "Líder servidor e facilitador." 
        },
        { 
            "frente": "(ENADE - Negócios) O que é o CAC (Custo de Aquisição de Clientes)?", 
            "opcoes": ["A) O valor que o cliente paga mensalmente pelo software.", "B) O custo total com marketing e vendas dividido pelo número de novos clientes conquistados.", "C) A taxa de cancelamento de assinaturas.", "D) O custo dos servidores na nuvem AWS."],
            "correta": 1,
            "verso": "Alternativa B: O custo para atrair um novo cliente.\n\nJustificativa: O CAC mostra quanto dinheiro a empresa precisou gastar em campanhas publicitárias e vendedores para convencer uma pessoa a comprar o produto.", 
            "dica": "Quanto custa 'comprar' um cliente novo." 
        },
        { 
            "frente": "(ENADE - Sustentabilidade) O conceito de 'Green IT' (TI Verde) busca reduzir o impacto ambiental da tecnologia. Qual das práticas abaixo NÃO é uma prática de TI Verde?", 
            "opcoes": ["A) Virtualização de servidores para economizar energia física.", "B) Descarte de lixo eletrônico em aterros sanitários comuns.", "C) Uso de data centers alimentados por energia eólica/solar.", "D) Políticas de impressão reduzida e digitalização de documentos."],
            "correta": 1,
            "verso": "Alternativa B: Descarte de lixo eletrônico em aterros comuns.\n\nJustificativa: Lixo eletrônico contém metais pesados (chumbo, mercúrio) tóxicos. A TI Verde exige a reciclagem e o descarte correto especializado desses componentes.", 
            "dica": "Lixo eletrônico é altamente tóxico." 
        },
        { 
            "frente": "(ENADE - Qualidade) O que é o Teste UAT (User Acceptance Testing) no ciclo de vida de um software?", 
            "opcoes": ["A) Teste focado em verificar vulnerabilidades de banco de dados.", "B) Teste executado por um robô para checar a API.", "C) Teste de Aceitação do Usuário, a fase final onde o cliente testa o sistema no mundo real antes de o aprovar para produção.", "D) Teste de mesa para revisar diagramas UML."],
            "correta": 2,
            "verso": "Alternativa C: Teste de Aceitação do Usuário.\n\nJustificativa: O UAT é o momento onde os stakeholders finais (quem pediu o software) validam se o sistema construído realmente atende às necessidades de negócio acordadas.", 
            "dica": "É a validação final do cliente." 
        },
        { 
            "frente": "(ENADE - Governança) O que é um SLA (Service Level Agreement - Acordo de Nível de Serviço)?", 
            "opcoes": ["A) Um protocolo de internet para enviar e-mails.", "B) Um contrato que define as expectativas de nível de serviço entre o provedor e o cliente (ex: garantir 99,9% de disponibilidade do servidor).", "C) Uma lei brasileira de proteção de dados.", "D) Uma certificação de qualidade de código C#."],
            "correta": 1,
            "verso": "Alternativa B: Um contrato de garantia de serviço.\n\nJustificativa: O SLA estabelece métricas claras (tempo de resposta do suporte, uptime do site, penalidades financeiras se o serviço cair) que o fornecedor deve cumprir.", 
            "dica": "É o contrato de garantias técnicas." 
        },
        { 
            "frente": "(ENADE - DevOps) A cultura DevOps visa a integração contínua (CI) e entrega contínua (CD). O que é o processo de 'Integração Contínua' (CI)?", 
            "opcoes": ["A) Juntar as equipes de RH e TI na mesma sala.", "B) Fazer o merge frequente do código de vários desenvolvedores em um repositório central, executando testes automatizados a cada envio.", "C) Ligar o banco de dados SQL a um banco NoSQL.", "D) Lançar o sistema diretamente em produção sem testes."],
            "correta": 1,
            "verso": "Alternativa B: Fazer merge frequente de código com testes automatizados.\n\nJustificativa: A CI (Continuous Integration) garante que as alterações de código feitas pela equipe sejam validadas constantemente, evitando o 'integration hell' no final do projeto.", 
            "dica": "Evita conflitos gigantes de código no GitHub." 
        },
        { 
            "frente": "(ENADE - Inovação) No mundo das Startups, o que significa a expressão 'Pivotar' (Pivot)?", 
            "opcoes": ["A) Vender a empresa para o Google.", "B) Mudar o código de Python para Java.", "C) Alterar drasticamente a estratégia ou o modelo de negócio da startup após perceber que a ideia original não está dando certo no mercado.", "D) Demitir toda a equipe executiva."],
            "correta": 2,
            "verso": "Alternativa C: Alterar a direção e o modelo de negócio.\n\nJustificativa: Pivotar significa manter um pé na visão da empresa, mas girar em outra direção para encontrar um mercado mais lucrativo (Ex: A Netflix começou entregando DVDs pelo correio).", 
            "dica": "Mudar a rota do barco antes de afundar." 
        },
        { 
            "frente": "(ENADE - Gestão) Na gestão de projetos e Governança de TI, quem são os 'Stakeholders'?", 
            "opcoes": ["A) Apenas os acionistas que colocaram dinheiro na empresa.", "B) Os robôs que testam o software.", "C) Todas as partes interessadas que podem afetar ou ser afetadas pelo projeto (clientes, equipe, usuários, governo, diretores).", "D) Apenas os programadores do sistema."],
            "correta": 2,
            "verso": "Alternativa C: Todas as partes interessadas.\n\nJustificativa: Stakeholder é qualquer pessoa ou grupo que tem interesse no sucesso (ou fracasso) do projeto, indo desde o CEO até o usuário final do aplicativo.", 
            "dica": "Partes interessadas (todos os envolvidos)." 
        },
        { 
            "frente": "(ENADE - Ágil) No Scrum, qual é a principal função do gráfico 'Burndown Chart'?", 
            "opcoes": ["A) Mostrar o lucro financeiro da empresa ao longo do mês.", "B) Visualizar graficamente a quantidade de trabalho restante versus o tempo restante na Sprint.", "C) Rastrear quais desenvolvedores cometeram mais bugs.", "D) Mapear a arquitetura de rede em nuvem."],
            "correta": 1,
            "verso": "Alternativa B: Visualizar o trabalho restante na Sprint.\n\nJustificativa: A linha do Burndown cai (queima) a cada dia conforme as tarefas são concluídas, permitindo que a equipe saiba rapidamente se conseguirá entregar tudo até o fim da Sprint.", 
            "dica": "O gráfico 'queima' para baixo até chegar a zero." 
        },
        { 
            "frente": "(ENADE - Governança) O que significa atuar em 'Compliance' na área de Tecnologia da Informação?", 
            "opcoes": ["A) Programar em linguagens modernas de alto nível.", "B) Garantir que os processos de TI estejam em total conformidade e obedeçam a leis, regulamentos, políticas internas e normas externas (ex: LGPD).", "C) Usar computadores da Apple.", "D) Contratar seguro contra incêndios no servidor."],
            "correta": 1,
            "verso": "Alternativa B: Estar em conformidade legal e normativa.\n\nJustificativa: Compliance vem do verbo *to comply* (cumprir, estar de acordo). Significa seguir rigidamente as leis trabalhistas, de segurança de dados, ambientais e normas da indústria.", 
            "dica": "Andar na linha com as leis e regras." 
        },
        { 
            "frente": "(ENADE - Ética) Uma empresa copia integralmente o código-fonte e o layout de um aplicativo concorrente sem permissão, lançando-o como se fosse seu. Isso fere qual princípio ético/legal?", 
            "opcoes": ["A) LGPD (Proteção de Dados).", "B) Propriedade Intelectual e Direitos Autorais de Software.", "C) Código de Defesa do Consumidor.", "D) Marco Civil da Internet."],
            "correta": 1,
            "verso": "Alternativa B: Propriedade Intelectual e Direitos Autorais.\n\nJustificativa: O código-fonte original é protegido por leis de direitos autorais como propriedade intelectual do seu criador. Copiá-lo para fins comerciais caracteriza pirataria/plágio.", 
            "dica": "O código tem um 'dono' por direito autoral." 
        },
        { 
            "frente": "(ENADE - Negócios) Em métricas financeiras de startups, o que é o Break-even Point (Ponto de Equilíbrio)?", 
            "opcoes": ["A) O momento em que a empresa decreta falência.", "B) O momento em que a receita total da empresa iguala exatamente seus custos totais (não há lucro, nem prejuízo).", "C) O pico máximo de vendas no final do ano.", "D) O desconto dado aos primeiros clientes."],
            "correta": 1,
            "verso": "Alternativa B: Receitas igualam os custos totais.\n\nJustificativa: O Break-even é a linha mágica. A partir do momento em que a empresa ultrapassa esse ponto, cada nova venda começa finalmente a gerar Lucro real.", 
            "dica": "O zero a zero financeiro (empatou)." 
        },
        { 
            "frente": "(ENADE - Negócios) O que é a métrica LTV (Lifetime Value) em produtos SaaS?", 
            "opcoes": ["A) O tempo que o servidor fica ligado sem reiniciar.", "B) O valor total de receita que um cliente gera para a empresa durante todo o tempo em que ele permanece como assinante.", "C) O tempo de vida útil da bateria do notebook.", "D) A multa rescisória do contrato."],
            "correta": 1,
            "verso": "Alternativa B: Valor gerado pelo cliente durante seu tempo de retenção.\n\nJustificativa: Se um cliente paga R$ 50/mês na Netflix e assina por 20 meses, o LTV dele é de R$ 1.000. Uma empresa saudável deve ter o LTV muito maior que o CAC (Custo de Aquisição).", 
            "dica": "Valor de vida do cliente." 
        },
        { 
            "frente": "(ENADE - Projetos) Qual ferramenta visual, muito comum na gestão clássica de projetos (PMBOK), é formada por barras horizontais e ilustra o cronograma de atividades ao longo dos dias e meses?", 
            "opcoes": ["A) Diagrama de Entidade-Relacionamento (DER).", "B) Gráfico de Gantt.", "C) Quadro Kanban.", "D) Diagrama de Dispersão."],
            "correta": 1,
            "verso": "Alternativa B: Gráfico de Gantt.\n\nJustificativa: O Gráfico de Gantt é a representação visual de um cronograma, mostrando quando uma tarefa começa, quando termina e se ela depende do fim de outra tarefa anterior.", 
            "dica": "Gráfico de barras temporais em cascata." 
        },
        { 
            "frente": "(ENADE - Qualidade) Uma equipe implementou uma nova tela no sistema. Qual teste deve ser rodado para garantir que o código novo não quebrou ou gerou bugs em funcionalidades antigas que já estavam funcionando?", 
            "opcoes": ["A) Teste de Usabilidade.", "B) Teste de Carga/Estresse.", "C) Teste de Regressão.", "D) Teste de Invasão (PenTest)."],
            "correta": 2,
            "verso": "Alternativa C: Teste de Regressão.\n\nJustificativa: Como o nome sugere, serve para verificar se o software 'regrediu' em qualidade. É essencial rodá-lo (geralmente de forma automatizada) a cada nova atualização do sistema.", 
            "dica": "Garante que o passado não quebrou." 
        },
        { 
            "frente": "(ENADE - Scrum) No final de uma Sprint, a equipe realiza a 'Sprint Review' (Revisão da Sprint). Qual é o propósito desta reunião?", 
            "opcoes": ["A) Discutir os sentimentos da equipe e as falhas de comunicação.", "B) Apresentar o incremento do software pronto para os Stakeholders/Cliente e adaptar o Backlog do Produto conforme o feedback.", "C) Estimar o esforço das tarefas da próxima semana (Planning Poker).", "D) Escrever a documentação técnica da API."],
            "correta": 1,
            "verso": "Alternativa B: Inspecionar o produto pronto e colher feedback do cliente.\n\nJustificativa: Enquanto a Retrospectiva foca no Processo da equipe, a Review foca no Produto. É a hora do 'Show and Tell', mostrando o software rodando na prática.", 
            "dica": "Demonstração prática para o cliente." 
        },
        { 
            "frente": "(ENADE - Inovação) O que é um 'Design Sprint' (criado pelo Google Ventures)?", 
            "opcoes": ["A) Uma corrida de programação onde ganha quem digitar mais rápido.", "B) Um processo de 5 dias usado para responder questões críticas de negócios através do design, prototipação e teste de ideias com clientes.", "C) Um framework para otimizar o banco de dados do Google.", "D) Apenas o desenho do logotipo da empresa."],
            "correta": 1,
            "verso": "Alternativa B: Processo de 5 dias para prototipar e validar ideias.\n\nJustificativa: O Design Sprint condensa meses de debates em uma única semana focada, saindo do problema para uma ideia desenhada, prototipada e testada com usuários reais na sexta-feira.", 
            "dica": "Validação de ideia em 5 dias." 
        },
        { 
            "frente": "(ENADE - Governança) O que é o COBIT na área de TI?", 
            "opcoes": ["A) Uma linguagem de programação orientada a objetos baseada em COBOL.", "B) Um framework global para a Governança e Gestão corporativa de Tecnologia da Informação.", "C) Um software antivírus empresarial.", "D) Uma lei americana de proteção de patentes."],
            "correta": 1,
            "verso": "Alternativa B: Framework de Governança de TI.\n\nJustificativa: O COBIT ajuda diretores e executivos a gerenciarem os riscos de TI, garantirem a segurança da informação e auditarem se os investimentos tecnológicos geram valor ao negócio.", 
            "dica": "Focado em Diretoria, Governança e Auditoria." 
        },
        { 
            "frente": "(ENADE - Negócios) O que é o modelo de negócio 'Marketplace'?", 
            "opcoes": ["A) Uma empresa que fabrica os próprios sapatos e os vende em loja física.", "B) Uma plataforma online que conecta vendedores independentes a compradores, recebendo comissões pelas vendas (Ex: Mercado Livre, Amazon, Uber).", "C) Uma ONG focada na doação de hardware antigo.", "D) Um modelo onde o software é grátis mas o suporte é pago."],
            "correta": 1,
            "verso": "Alternativa B: Uma plataforma que conecta múltiplos vendedores a compradores.\n\nJustificativa: A plataforma de Marketplace não possui necessariamente o estoque dos produtos; ela intermedeia a transação financeira, garantindo segurança e tráfego para os parceiros.", 
            "dica": "É um shopping center virtual." 
        },
        { 
            "frente": "(ENADE - Ética e IA) Em relação ao desenvolvimento de algoritmos de Inteligência Artificial, o que é o 'Viés Algorítmico' (Algorithmic Bias)?", 
            "opcoes": ["A) Quando o código Python é substituído por R.", "B) A capacidade da IA de ter sentimentos humanos.", "C) Quando a IA toma decisões preconceituosas, injustas ou discriminatórias devido a falhas nos dados históricos usados em seu treinamento.", "D) O atraso na resposta de um servidor de IA na nuvem."],
            "correta": 2,
            "verso": "Alternativa C: Decisões discriminatórias baseadas em dados viciados.\n\nJustificativa: Se uma IA de recrutamento for treinada com currículos de uma empresa que historicamente contratava mais homens brancos, a IA aprenderá que esse perfil é o 'ideal' e passará a descartar minorias, herdando o preconceito humano.", 
            "dica": "A IA reproduzindo o preconceito humano." 
        },
        { 
            "frente": "(ENADE - Ágil) No Scrum, O que representa o 'Product Backlog'?", 
            "opcoes": ["A) Uma lista estática de requisitos que nunca pode ser alterada após o início do projeto.", "B) O log de erros do servidor em produção.", "C) Uma lista viva, ordenada e priorizada de tudo que é conhecido e necessário para criar e melhorar o Produto.", "D) O painel visual onde as tarefas estão na coluna 'Em Andamento'."],
            "correta": 2,
            "verso": "Alternativa C: Lista viva e priorizada de requisitos.\n\nJustificativa: O Product Backlog nunca está 'pronto'. Enquanto o produto existir, o backlog existirá, sendo constantemente refinado e priorizado pelo Product Owner com base no valor de negócio.", 
            "dica": "Lista de desejos do produto." 
        },
        { 
            "frente": "(ENADE - Projetos) Durante o levantamento de Requisitos Funcionais, um usuário relata: 'A tela de login travou e apareceu erro 404'. Como a equipe de TI classifica essa informação?", 
            "opcoes": ["A) É um requisito funcional novo.", "B) É uma melhoria (Feature).", "C) É um Bug (Defeito/Incidente) que afeta a disponibilidade e funcionalidade do sistema.", "D) É um requisito de negócio estrutural."],
            "correta": 2,
            "verso": "Alternativa C: É um Bug (Defeito/Incidente).\n\nJustificativa: O erro 404 indica que algo no código ou servidor que já deveria estar operando falhou. Bugs devem ser priorizados na fila de resolução, separados de novas features.", 
            "dica": "O sistema não operou conforme projetado." 
        }
    ],
    "fase22": [
        { 
            "frente": "(ENADE - Algoritmos) Considere a estrutura de dados 'Fila' (Queue) a ser usada para gerir requisições de impressão num escritório. Foram inseridos, nesta ordem, os ficheiros: A, B e C.\n\nSe o comando 'dequeue()' for executado duas vezes, qual ficheiro restará na fila?", 
            "opcoes": ["A) Ficheiro A", "B) Ficheiro B", "C) Ficheiro C", "D) A fila ficará vazia"],
            "correta": 2,
            "verso": "Alternativa C: Ficheiro C.\n\nJustificativa: A Fila segue o princípio FIFO (First In, First Out). O primeiro a entrar é o primeiro a sair. Sairão o A e o B, restando apenas o C.", 
            "dica": "FIFO = First In, First Out." 
        },
        { 
            "frente": "(ENADE - POO) Na Programação Orientada a Objetos, qual é o pilar que permite ocultar os detalhes internos de implementação de uma classe (colocando variáveis como private) e expor apenas os métodos públicos necessários (getters/setters)?", 
            "opcoes": ["A) Herança", "B) Polimorfismo", "C) Encapsulamento", "D) Abstração"],
            "correta": 2,
            "verso": "Alternativa C: Encapsulamento.\n\nJustificativa: O encapsulamento protege os dados do objeto contra alterações diretas indevidas por parte de outras classes, garantindo a integridade do estado interno.", 
            "dica": "Funciona como uma cápsula de proteção." 
        },
        { 
            "frente": "(ENADE - Bases de Dados) Num modelo relacional, o que caracteriza uma restrição de integridade referencial implementada através de uma Chave Estrangeira (Foreign Key)?", 
            "opcoes": ["A) Garante que uma coluna não tenha valores nulos (NOT NULL).", "B) Garante que os valores de uma coluna de uma tabela existam como valores de uma chave primária (PK) noutra tabela relacionada.", "C) Garante a ordenação alfabética das colunas.", "D) Impede atualizações na base de dados."],
            "correta": 1,
            "verso": "Alternativa B: Garante que os valores correspondam a uma Chave Primária noutra tabela.\n\nJustificativa: A Chave Estrangeira impede que se registe um 'Pedido' para um 'Cliente' que não existe na base de dados, mantendo a integridade dos dados.", 
            "dica": "Evita registos órfãos." 
        },
        { 
            "frente": "(ENADE - SQL) Qual comando DML (Data Manipulation Language) do SQL é utilizado para atualizar registos já existentes numa tabela?", 
            "opcoes": ["A) ALTER TABLE", "B) MODIFY", "C) INSERT", "D) UPDATE"],
            "correta": 3,
            "verso": "Alternativa D: UPDATE.\n\nJustificativa: O comando UPDATE altera os dados de uma ou mais linhas existentes. (O ALTER TABLE é um comando DDL usado para alterar a estrutura da tabela, não os dados).", 
            "dica": "Lembre-se da estrutura UPDATE ... SET ... WHERE." 
        },
        { 
            "frente": "(ENADE - UML) Qual é a finalidade principal do Diagrama de Sequência na linguagem UML?", 
            "opcoes": ["A) Mostrar a hierarquia de herança entre as classes.", "B) Descrever os estados pelos quais um objeto passa durante a sua vida.", "C) Modelar a interação e a troca de mensagens entre os objetos ao longo do tempo.", "D) Estruturar a base de dados do sistema."],
            "correta": 2,
            "verso": "Alternativa C: Modelar a interação e a troca de mensagens ao longo do tempo.\n\nJustificativa: O diagrama de sequência evidencia a ordem temporal cronológica das interações entre componentes ou atores num determinado cenário.", 
            "dica": "Foco na linha do tempo e nas mensagens (setas)." 
        },
        { 
            "frente": "(ENADE - Estruturas de Dados) Se necessitar de um algoritmo que faça pesquisas extremamente rápidas em grandes conjuntos de dados ordenados, qual estrutura e respetivo algoritmo oferecem complexidade O(log n)?", 
            "opcoes": ["A) Fila (Pesquisa Linear)", "B) Array não ordenado (Busca Cega)", "C) Árvore Binária de Busca (Busca Binária)", "D) Pilha (LIFO)"],
            "correta": 2,
            "verso": "Alternativa C: Árvore Binária de Busca (Busca Binária).\n\nJustificativa: Na busca binária, a cada passo dividimos o conjunto de dados pela metade, o que resulta na eficiência logarítmica O(log n).", 
            "dica": "A cada passo corta o problema pela metade." 
        },
        { 
            "frente": "(ENADE - Redes) Numa aplicação cliente-servidor (ex: Streaming de vídeo), onde a velocidade e o envio contínuo são mais importantes que a garantia de entrega de cada pacote, qual protocolo da camada de transporte é preferível utilizar?", 
            "opcoes": ["A) TCP", "B) UDP", "C) HTTP", "D) FTP"],
            "correta": 1,
            "verso": "Alternativa B: UDP.\n\nJustificativa: O UDP não verifica se os pacotes chegaram ao destino (não tem confirmação de entrega - ACK), sendo muito mais rápido e ideal para transmissões em tempo real.", 
            "dica": "Rápido, mas sem confirmação." 
        },
        { 
            "frente": "(ENADE - Arquitetura) Qual é a principal característica da arquitetura de Microserviços em comparação com uma arquitetura Monolítica?", 
            "opcoes": ["A) Partilhar a mesma base de dados para todo o sistema de forma rígida.", "B) Dividir a aplicação em pequenos serviços independentes que comunicam via APIs.", "C) O código-fonte reside inteiramente num único ficheiro executável.", "D) Não é compatível com computação na nuvem."],
            "correta": 1,
            "verso": "Alternativa B: Dividir a aplicação em pequenos serviços independentes.\n\nJustificativa: Nos microserviços, cada serviço foca-se numa regra de negócio específica, podendo ser implementado e escalado de forma totalmente isolada.", 
            "dica": "Serviços pequenos e isolados." 
        },
        { 
            "frente": "(ENADE - SO) O que é o processo de 'Swapping' (troca) gerido pelo Sistema Operativo?", 
            "opcoes": ["A) Trocar o processador principal em tempo de execução.", "B) Substituir o sistema Linux pelo Windows.", "C) Transferir processos temporariamente da memória RAM para o Disco/SSD (memória virtual) para libertar espaço.", "D) Efetuar a troca de pacotes de rede pelo router."],
            "correta": 2,
            "verso": "Alternativa C: Transferir processos da RAM para o Disco (memória virtual).\n\nJustificativa: Quando a memória RAM fica cheia, o SO move dados inativos para uma área de troca (Swap) no disco rígido, libertando RAM para processos mais urgentes.", 
            "dica": "Cria a 'memória virtual' no disco." 
        },
        { 
            "frente": "(ENADE - Criptografia) Numa comunicação com criptografia Assimétrica (Chave Pública/Privada), como a Alice garante que uma mensagem que ela envia para o Bob só poderá ser lida por ele?", 
            "opcoes": ["A) Encriptando com a Chave Privada da Alice.", "B) Encriptando com a Chave Pública do Bob.", "C) Encriptando com a Chave Pública da Alice.", "D) Encriptando com a Chave Privada do Bob."],
            "correta": 1,
            "verso": "Alternativa B: Encriptando com a Chave Pública do Bob.\n\nJustificativa: Se a Alice usar a Chave Pública do Bob (que todos conhecem) para encriptar, apenas a Chave Privada do Bob (que só ele possui) conseguirá desencriptar e ler a mensagem.", 
            "dica": "A fechadura é pública, mas a chave é privada." 
        },
        { 
            "frente": "(ENADE - Web) O que é o modelo DOM (Document Object Model) no desenvolvimento Front-end?", 
            "opcoes": ["A) Uma base de dados nativa do navegador.", "B) Uma linguagem que substitui o HTML.", "C) Uma interface de programação (API) que representa o documento HTML como uma árvore de objetos.", "D) Um protocolo de rede."],
            "correta": 2,
            "verso": "Alternativa C: Representação estrutural do documento HTML como árvore de objetos.\n\nJustificativa: O DOM permite que o JavaScript modifique elementos, estilos e eventos da página em tempo real, alterando a estrutura de árvore.", 
            "dica": "A 'árvore' estrutural do HTML vista pelo JS." 
        },
        { 
            "frente": "(ENADE - Lógica) O que é a Recursividade na construção de um algoritmo?", 
            "opcoes": ["A) Um loop while infinito.", "B) Quando uma função chama-se a si mesma até atingir uma condição de paragem.", "C) Quando o código partilha variáveis globais.", "D) Quando o código é executado num servidor remoto."],
            "correta": 1,
            "verso": "Alternativa B: Quando uma função chama-se a si mesma.\n\nJustificativa: Algoritmos recursivos resolvem problemas complexos quebrando-os em instâncias menores do próprio problema (ex: cálculo de Fatorial).", 
            "dica": "Uma função que se invoca a si própria." 
        },
        { 
            "frente": "(ENADE - POO) Qual é a utilidade prática de uma Classe Abstrata na POO?", 
            "opcoes": ["A) Evitar que a classe seja instanciada diretamente, servindo apenas como modelo (superclasse) para as suas classes filhas.", "B) Forçar que todos os seus métodos estejam vazios (como numa Interface).", "C) Esconder o código-fonte num ficheiro DLL fechado.", "D) Substituir o uso de variáveis locais no escopo."],
            "correta": 0,
            "verso": "Alternativa A: Servir apenas como modelo para herança.\n\nJustificativa: Uma classe abstrata (ex: 'Animal') representa um conceito genérico. Não se cria um 'Animal' direto, mas sim instâncias concretas das filhas ('Cão', 'Gato').", 
            "dica": "Não permite usar o operador 'new' diretamente nela." 
        },
        { 
            "frente": "(ENADE - Segurança) Um atacante envia um link manipulado para a vítima. Quando a vítima clica no link, estando autenticada no site do banco, o código faz uma transferência indesejada. Este ataque é o:", 
            "opcoes": ["A) SQL Injection", "B) Cross-Site Scripting (XSS)", "C) Cross-Site Request Forgery (CSRF)", "D) Buffer Overflow"],
            "correta": 2,
            "verso": "Alternativa C: CSRF (Falsificação de Pedido Entre Sites).\n\nJustificativa: No CSRF, o atacante usa a sessão válida (os cookies de login) do utilizador para executar ações indesejadas no servidor de destino.", 
            "dica": "Falsifica uma ação do próprio utilizador autenticado." 
        },
        { 
            "frente": "(ENADE - Redes) O que diferencia o protocolo HTTPS do protocolo HTTP padrão?", 
            "opcoes": ["A) O HTTPS é mais rápido para vídeo.", "B) O HTTPS utiliza uma camada adicional de segurança (SSL/TLS) para encriptar os dados.", "C) O HTTPS não exige servidor web.", "D) O HTTPS usa o UDP em vez do TCP."],
            "correta": 1,
            "verso": "Alternativa B: O HTTPS utiliza encriptação SSL/TLS.\n\nJustificativa: O 'S' (Secure) garante que toda a comunicação entre o cliente e o servidor esteja encriptada, impedindo a interceção de dados em texto claro.", 
            "dica": "O cadeado no navegador." 
        },
        { 
            "frente": "(ENADE - ACID) A respeito das transações em Bases de Dados Relacionais, o que garante a propriedade da 'Atomicidade'?", 
            "opcoes": ["A) A transação será executada inteiramente com sucesso, ou falhará totalmente (tudo ou nada).", "B) O sistema volta sempre à versão original do dia anterior.", "C) Duas transações não afetam a mesma tabela.", "D) Os dados são salvos em múltiplos discos simultaneamente."],
            "correta": 0,
            "verso": "Alternativa A: Tudo ou nada na transação.\n\nJustificativa: Se no meio de uma transferência o sistema for abaixo, a atomicidade garante o ROLLBACK, revertendo toda a operação para que os dados não fiquem inconsistentes.", 
            "dica": "Ação indestrutível, executa tudo ou não executa nada." 
        },
        { 
            "frente": "(ENADE - API REST) Qual o método HTTP utilizado especificamente para solicitar a *atualização completa* de um recurso no servidor?", 
            "opcoes": ["A) PUT", "B) GET", "C) PATCH", "D) DELETE"],
            "correta": 0,
            "verso": "Alternativa A: PUT.\n\nJustificativa: O PUT é usado para substituir completamente um recurso existente. O PATCH é usado quando se deseja atualizar apenas uma parte (atualização parcial) do recurso.", 
            "dica": "Substitui todo o objeto." 
        },
        { 
            "frente": "(ENADE - Design Patterns) O Padrão de Projeto 'Singleton' é categorizado como um padrão de Criação. Qual é a sua finalidade no código?", 
            "opcoes": ["A) Criar múltiplas instâncias dinâmicas de uma classe.", "B) Garantir que uma classe tenha uma única instância em todo o sistema e fornecer um ponto global de acesso a ela.", "C) Ocultar a complexidade de criação sob uma Interface.", "D) Criar famílias de objetos inter-relacionados."],
            "correta": 1,
            "verso": "Alternativa B: Garantir uma única instância global da classe.\n\nJustificativa: Singleton é muito usado para gerir conexões com a base de dados, onde ter várias instâncias ativas gastaria memória desnecessária.", 
            "dica": "Single (Uma única instância)." 
        },
        { 
            "frente": "(ENADE - Git) Num fluxo de trabalho usando Git, o que o comando 'git commit' executa?", 
            "opcoes": ["A) Envia o código para a nuvem no GitHub.", "B) Cria uma cópia do projeto.", "C) Guarda um snapshot do estado atual dos ficheiros modificados no repositório LOCAL do desenvolvedor.", "D) Apaga o histórico."],
            "correta": 2,
            "verso": "Alternativa C: Guarda o estado atual no repositório LOCAL.\n\nJustificativa: O comando commit regista as alterações no histórico da máquina do utilizador. Para enviar para a nuvem, usa-se o git push.", 
            "dica": "Grava a versão localmente." 
        },
        { 
            "frente": "(ENADE - Algoritmos) Qual é a finalidade principal do algoritmo de ordenação 'Bubble Sort'?", 
            "opcoes": ["A) Compactar ficheiros ZIP.", "B) Percorrer uma lista, comparando pares vizinhos e trocando de posição se estiverem fora de ordem, até que o maior flutue para o final.", "C) Pesquisar a palavra mais longa num texto.", "D) Criar matrizes multidimensionais vazias."],
            "correta": 1,
            "verso": "Alternativa B: Percorrer listas e trocar pares vizinhos até ordenar.\n\nJustificativa: O Bubble Sort é o algoritmo de ordenação mais simples e menos eficiente O(n²). O maior valor 'borbulha' para a extremidade a cada ciclo.", 
            "dica": "Como bolhas a flutuar num copo." 
        },
        { 
            "frente": "(ENADE - Bases de Dados) O que significa a operação de 'Normalização' aplicada a um esquema de base de dados relacional?", 
            "opcoes": ["A) Aumentar propositadamente a redundância para tornar as pesquisas rápidas.", "B) Aumentar os tipos de dados permitidos.", "C) Reestruturar as tabelas para eliminar anomalias de atualização, inserção e reduzir a redundância de dados.", "D) Traduzir a base de dados para ORM."],
            "correta": 2,
            "verso": "Alternativa C: Eliminar anomalias e reduzir a redundância.\n\nJustificativa: A normalização (1FN, 2FN, 3FN) garante que não haverá inconsistências (ex: ter duas moradas diferentes para a mesma pessoa) isolando dados repetidos.", 
            "dica": "Regras para organizar tabelas sem repetições." 
        },
        { 
            "frente": "(ENADE - Sistemas Distribuídos) O que dita o Teorema CAP focado em Bases de Dados NoSQL e Sistemas Distribuídos?", 
            "opcoes": ["A) Que não se pode ter uma rede sem routers.", "B) Que é impossível fornecer simultaneamente as três garantias: Consistência (C), Disponibilidade (A) e Tolerância a Partição (P). Só se escolhe duas.", "C) Que toda a base distribuída deve usar SQL.", "D) Que backups evitam qualquer falha de hardware."],
            "correta": 1,
            "verso": "Alternativa B: Impossível garantir as 3 propriedades simultaneamente (C, A e P).\n\nJustificativa: Num cluster, em caso de falha de rede (Partição), deve-se escolher se paralisa o sistema para manter a Consistência ou se permite gravações para manter a Disponibilidade.", 
            "dica": "Escolha apenas duas de três." 
        },
        { 
            "frente": "(ENADE - Cloud) O que caracteriza a 'Escalabilidade Horizontal' numa infraestrutura Web em comparação com a Vertical?", 
            "opcoes": ["A) Aumentar a CPU e a RAM do mesmo servidor existente.", "B) Adicionar mais servidores à arquitetura e dividir o tráfego (Load Balancer) entre eles.", "C) Aumento da largura de banda do provedor.", "D) Mover o sistema on-premises para a nuvem."],
            "correta": 1,
            "verso": "Alternativa B: Adicionar mais servidores e dividir o tráfego com Load Balancer.\n\nJustificativa: A escalabilidade vertical (Scale-up) aumenta o poder da própria máquina. A horizontal (Scale-out) resolve a alta procura colocando mais máquinas a trabalhar em equipa.", 
            "dica": "Mais máquinas lado a lado = Horizontal." 
        },
        { 
            "frente": "(ENADE - C) Na linguagem C, qual o grande problema causado quando o programador aloca memória dinamicamente usando malloc() e esquece de a libertar com free()?", 
            "opcoes": ["A) Stack Overflow (Estouro da Pilha).", "B) Memory Leak (Fuga de Memória).", "C) Null Pointer Exception.", "D) Loop Infinito."],
            "correta": 1,
            "verso": "Alternativa B: Memory Leak (Fuga de Memória).\n\nJustificativa: O sistema operativo perde a referência dessa alocação, mas não a liberta. Se ocorrer repetidamente, o computador fica sem memória RAM disponível e crasha.", 
            "dica": "Fuga contínua de memória RAM." 
        },
        { 
            "frente": "(ENADE - Engenharia de Software) Qual é o objetivo do padrão arquitetural MVC (Model-View-Controller)?", 
            "opcoes": ["A) Aumentar o acoplamento do sistema.", "B) Separar a representação da informação (dados), a interação do utilizador (interface) e o controlo lógico em três componentes interligados.", "C) Juntar todo o código num único ficheiro JavaScript.", "D) Substituir a necessidade de uma base de dados."],
            "correta": 1,
            "verso": "Alternativa B: Separar dados, interface e controlo lógico.\n\nJustificativa: O MVC promove a separação de preocupações (Separation of Concerns), tornando o código mais modular, fácil de testar e de manter.", 
            "dica": "Separa o ecrã da lógica." 
        },
        { 
            "frente": "(ENADE - POO) A técnica em que duas ou mais funções da mesma classe têm o mesmo nome, mas diferem no número ou tipo dos seus parâmetros, chama-se:", 
            "opcoes": ["A) Sobrescrita (Overriding)", "B) Sobrecarga (Overloading)", "C) Abstração", "D) Interface"],
            "correta": 1,
            "verso": "Alternativa B: Sobrecarga (Overloading).\n\nJustificativa: A sobrecarga de métodos ocorre em tempo de compilação. Permite criar métodos com o mesmo nome (ex: calcularArea(int lado) e calcularArea(int base, int altura)) na mesma classe.", 
            "dica": "Mesmo nome, assinaturas diferentes." 
        },
        { 
            "frente": "(ENADE - Bases de Dados) Numa tabela de base de dados relacional, uma chave primária (Primary Key) composta é formada por:", 
            "opcoes": ["A) Apenas um atributo numérico e autoincremental.", "B) Dois ou mais atributos que, combinados, identificam unicamente uma linha na tabela.", "C) Uma chave que faz referência a outra tabela externa.", "D) Uma chave que permite valores nulos."],
            "correta": 1,
            "verso": "Alternativa B: Dois ou mais atributos combinados.\n\nJustificativa: Quando uma única coluna não é suficiente para garantir a exclusividade do registo (ex: ID_Aluno e ID_Disciplina numa tabela de matrículas), utiliza-se a junção das colunas como Chave Primária Composta.", 
            "dica": "Combinação de duas ou mais colunas." 
        },
        { 
            "frente": "(ENADE - Estruturas de Dados) Numa estrutura do tipo Pilha (Stack), as operações clássicas de inserção e remoção são conhecidas, respetivamente, como:", 
            "opcoes": ["A) Enqueue e Dequeue", "B) Insert e Delete", "C) Push e Pop", "D) Add e Remove"],
            "correta": 2,
            "verso": "Alternativa C: Push e Pop.\n\nJustificativa: Numa Pilha (LIFO - Last In, First Out), a operação de empilhar um item no topo chama-se 'Push', e a operação de retirar o item do topo chama-se 'Pop'.", 
            "dica": "Empurrar e Estourar." 
        },
        { 
            "frente": "(ENADE - Lógica) Numa expressão condicional, o operador lógico 'XOR' (OU Exclusivo) retorna VERDADEIRO apenas quando:", 
            "opcoes": ["A) Ambas as proposições são verdadeiras.", "B) Ambas as proposições são falsas.", "C) Apenas uma das proposições é verdadeira, e a outra é falsa.", "D) O valor é nulo."],
            "correta": 2,
            "verso": "Alternativa C: Apenas uma das proposições é verdadeira, e a outra é falsa.\n\nJustificativa: O XOR (Exclusive OR) exige que as entradas sejam diferentes para ser verdadeiro. Se ambas forem iguais (True/True ou False/False), o resultado é falso.", 
            "dica": "Um ou outro, mas não os dois." 
        },
        { 
            "frente": "(ENADE - SQL) A cláusula GROUP BY no SQL é geralmente utilizada em conjunto com:", 
            "opcoes": ["A) Comandos INSERT e UPDATE.", "B) Funções de agregação (como SUM, AVG, COUNT, MAX, MIN).", "C) Comandos de criação de tabelas (CREATE TABLE).", "D) Cláusulas LIMIT e OFFSET exclusivamente."],
            "correta": 1,
            "verso": "Alternativa B: Funções de agregação.\n\nJustificativa: O GROUP BY serve para agrupar linhas que têm os mesmos valores em colunas de resumo, permitindo calcular médias, somas ou totais por grupo (ex: COUNT(*) de utilizadores agrupados por País).", 
            "dica": "Agrupa para somar ou contar." 
        },
        { 
            "frente": "(ENADE - Engenharia de Software) Qual é o modelo de ciclo de vida de software que se caracteriza por uma progressão estrita e linear através de fases (Requisitos, Design, Implementação, Testes, Manutenção) sem possibilidade de retorno natural à fase anterior?", 
            "opcoes": ["A) Modelo Ágil (Scrum)", "B) Modelo em Espiral", "C) Modelo Cascata (Waterfall)", "D) Modelo Prototipagem"],
            "correta": 2,
            "verso": "Alternativa C: Modelo Cascata (Waterfall).\n\nJustificativa: O modelo em cascata é sequencial e rígido. Uma nova fase só começa quando a anterior termina totalmente, sendo difícil e dispendioso acomodar mudanças de requisitos no meio do projeto.", 
            "dica": "A água só cai, não sobe." 
        },
        { 
            "frente": "(ENADE - DevOps) Na terminologia de contentorização (ex: Docker), o que é uma 'Imagem' (Image)?", 
            "opcoes": ["A) Uma fotografia JPEG do layout do site.", "B) Um template apenas de leitura (read-only) que contém o SO, bibliotecas e o código-fonte necessário para executar a aplicação num contentor.", "C) O disco rígido físico onde os dados são salvos permanentemente.", "D) Um serviço de hospedagem na AWS."],
            "correta": 1,
            "verso": "Alternativa B: Um template read-only contendo as dependências para rodar a app.\n\nJustificativa: A Imagem é o 'molde' estático. Quando executamos uma Imagem no Docker, ela torna-se um Contentor (Container) vivo e em execução.", 
            "dica": "É a 'receita de bolo' do contentor." 
        },
        { 
            "frente": "(ENADE - Sistemas Operativos) O conceito de 'Multithreading' refere-se à:", 
            "opcoes": ["A) Capacidade de ligar vários monitores ao computador.", "B) Capacidade de um programa se dividir em múltiplas threads (linhas de execução) que podem ser processadas em paralelo pelo CPU.", "C) Transferência de ficheiros pesados via FTP.", "D) Instalação de múltiplos sistemas operativos no mesmo disco."],
            "correta": 1,
            "verso": "Alternativa B: Múltiplas linhas de execução paralelas.\n\nJustificativa: O Multithreading permite que a aplicação faça várias tarefas ao mesmo tempo (ex: um jogo carrega o som numa thread enquanto processa a física noutra), otimizando o uso do processador.", 
            "dica": "Processamento simultâneo." 
        },
        { 
            "frente": "(ENADE - Web) No desenvolvimento web, o que são as sessões armazenadas nos Cookies ou no Local Storage do navegador?", 
            "opcoes": ["A) Ficheiros de vídeo em cache.", "B) Pequenos fragmentos de dados armazenados no cliente (navegador) para manter o estado da aplicação e identificar o utilizador entre as requisições HTTP (que são stateless).", "C) Componentes do servidor de base de dados MySQL.", "D) Um protocolo de encriptação de senhas."],
            "correta": 1,
            "verso": "Alternativa B: Dados armazenados no cliente para manter o estado.\n\nJustificativa: Como o HTTP é 'sem estado' (não lembra da última requisição), os cookies e o Local Storage guardam os tokens de autenticação (ex: JWT) para manter o utilizador 'logado'.", 
            "dica": "Memória do navegador." 
        },
        { 
            "frente": "(ENADE - Segurança) O que caracteriza um ataque do tipo 'SQL Injection' (Injeção de SQL)?", 
            "opcoes": ["A) Inserir um cabo de rede não autorizado no servidor.", "B) Explorar vulnerabilidades numa aplicação inserindo instruções SQL maliciosas nos campos de input (formulários) para manipular ou destruir a base de dados.", "C) Quando o banco de dados desliga por sobrecarga de memória.", "D) Interceção de pacotes na rede Wi-Fi aberta."],
            "correta": 1,
            "verso": "Alternativa B: Inserir instruções SQL maliciosas em campos de input.\n\nJustificativa: Ocorre quando a aplicação não filtra/higieniza os dados do utilizador. O atacante pode enviar algo como `' OR 1=1 --` num campo de login para aceder ao sistema sem password.", 
            "dica": "Input malicioso que engana a base de dados." 
        },
        { 
            "frente": "(ENADE - Redes) O Modelo OSI é um padrão de referência para interligação de sistemas abertos. É composto por quantas camadas lógicas?", 
            "opcoes": ["A) 4 camadas", "B) 5 camadas", "C) 7 camadas", "D) 9 camadas"],
            "correta": 2,
            "verso": "Alternativa C: 7 camadas.\n\nJustificativa: O Modelo OSI tem 7 camadas: Física, Enlace (Dados), Rede, Transporte, Sessão, Apresentação e Aplicação. O modelo TCP/IP, mais prático, é que condensa estas em apenas 4 camadas.", 
            "dica": "F-E-R-T-S-A-A." 
        },
        { 
            "frente": "(ENADE - POO) A que conceito de POO se refere a afirmação: 'As subclasses podem fornecer a sua própria implementação específica para um método que já foi definido na superclasse'?", 
            "opcoes": ["A) Construtor", "B) Sobrescrita (Overriding)", "C) Sobrecarga (Overloading)", "D) Interface"],
            "correta": 1,
            "verso": "Alternativa B: Sobrescrita (Overriding).\n\nJustificativa: A sobrescrita ocorre em tempo de execução quando uma classe herda de outra e redefine (altera o bloco de código) de um método existente no pai (ex: @Override no Java/C#).", 
            "dica": "A mesma assinatura, comportamento redefinido." 
        },
        { 
            "frente": "(ENADE - Arquitetura REST) Uma API RESTful deve ser 'Stateless' (Sem Estado). O que isto significa obrigatoriamente?", 
            "opcoes": ["A) Que não pode usar base de dados.", "B) Que cada requisição do cliente para o servidor deve conter todas as informações necessárias para ser compreendida e processada, sem depender de contextos salvos no servidor.", "C) Que o servidor deve gravar a sessão do cliente na memória RAM.", "D) Que o formato de resposta tem de ser em XML."],
            "correta": 1,
            "verso": "Alternativa B: Cada requisição contém toda a informação necessária.\n\nJustificativa: O servidor não guarda quem está 'logado'. O cliente envia um token (como o JWT) no cabeçalho (Header) de TODAS as requisições para provar quem é.", 
            "dica": "O servidor não tem memória da requisição passada." 
        },
        { 
            "frente": "(ENADE - Lógica) Numa tabela de verdade para o operador lógico 'AND' (E), se tivermos as variáveis A (Verdadeiro), B (Falso) e C (Verdadeiro), qual será o resultado da expressão A AND B AND C?", 
            "opcoes": ["A) Verdadeiro", "B) Falso", "C) Null", "D) Ocorre um erro de compilação."],
            "correta": 1,
            "verso": "Alternativa B: Falso.\n\nJustificativa: O operador AND lógico só retorna Verdadeiro se TODAS as condições fornecidas forem Verdadeiras. Como a variável B é Falsa, toda a expressão se torna Falsa.", 
            "dica": "AND exige perfeição (todos verdadeiros)." 
        },
        { 
            "frente": "(ENADE - Algoritmos) Qual é a técnica de otimização de algoritmos (frequentemente usada junto com recursividade) que consiste em guardar os resultados de cálculos pesados já processados num cache/tabela para evitar reprocessamento futuro?", 
            "opcoes": ["A) Backtracking", "B) Memoization (Programação Dinâmica)", "C) Algoritmo Guloso (Greedy)", "D) Ordenação por inserção"],
            "correta": 1,
            "verso": "Alternativa B: Memoization (Programação Dinâmica).\n\nJustificativa: Memoization é o ato de memorizar a saída de uma função cara. Na sequência de Fibonacci recursiva, sem Memoization a árvore de chamadas cresce exponencialmente (repetindo cálculos iguais).", 
            "dica": "Memorizar o que já foi calculado." 
        },
        { 
            "frente": "(ENADE - Criptografia) O algoritmo de Hash (como SHA-256 ou MD5) possui uma característica fundamental que o difere da Criptografia padrão (como AES ou RSA). Qual é essa característica?", 
            "opcoes": ["A) O Hash é utilizado para encriptar ficheiros grandes em formato zip.", "B) O Hash é uma via de mão única (One-way): é impossível (ou inviável computacionalmente) reverter o código gerado de volta para a palavra original.", "C) O Hash necessita sempre de uma chave pública para ser lido.", "D) O Hash só aceita números inteiros como entrada."],
            "correta": 1,
            "verso": "Alternativa B: É de mão única (One-way), não tem reversão.\n\nJustificativa: Criptografia serve para encriptar e depois desencriptar. O Hash destrói a string original e cria uma 'impressão digital'. É assim que as palavras-passe são guardadas com segurança no banco de dados.", 
            "dica": "Pode transformar a carne na salsicha, mas não a salsicha na carne." 
        },
        { 
            "frente": "(ENADE - Cloud) Em provedores de nuvem (AWS, Azure, GCP), o conceito de 'Elasticidade' refere-se à capacidade do sistema de:", 
            "opcoes": ["A) Alterar a cor da interface dependendo do fuso horário do utilizador.", "B) Aumentar (Scale-out) ou diminuir (Scale-in) automaticamente e de forma dinâmica os recursos de infraestrutura com base na procura em tempo real.", "C) Compactar o tamanho do banco de dados relacional.", "D) Impedir ataques DDoS bloqueando IPs asiáticos."],
            "correta": 1,
            "verso": "Alternativa B: Aumentar e diminuir recursos automaticamente com a procura.\n\nJustificativa: A elasticidade é o que permite a um e-commerce manter-se online na Black Friday (alugando mais servidores por algumas horas) e reduzir os custos na semana seguinte.", 
            "dica": "Estica e encolhe como um elástico." 
        },
        { 
            "frente": "(ENADE - Mobile) Qual é a principal diferença entre criar uma aplicação Mobile Nativa e uma aplicação Cross-Platform (Híbrida)?", 
            "opcoes": ["A) A Nativa só funciona offline. A Híbrida precisa de internet.", "B) A Nativa utiliza o GPS. A Híbrida não tem acesso ao hardware.", "C) A Nativa exige códigos separados para Android (Kotlin/Java) e iOS (Swift/Objective-C). A Cross-Platform (ex: React Native, Flutter) gera ambos a partir de uma base de código única.", "D) Não existem diferenças estruturais."],
            "correta": 2,
            "verso": "Alternativa C: A Cross-Platform usa uma base de código única para ambos os sistemas operativos.\n\nJustificativa: Aplicações nativas têm o melhor desempenho e integração, mas exigem duas equipas (Android e iOS). Frameworks híbridos ganham em produtividade e tempo de lançamento.", 
            "dica": "Nativa = Código diferente. Híbrida = Código único." 
        },
        { 
            "frente": "(ENADE - Banco de Dados) O que faz o comando JOIN da cláusula LEFT OUTER JOIN (ou LEFT JOIN) no SQL?", 
            "opcoes": ["A) Retorna apenas os registos que têm correspondência nas duas tabelas.", "B) Retorna todos os registos da tabela da ESQUERDA, e apenas as correspondências da tabela da direita. Se não houver correspondência, preenche com NULL.", "C) Apaga as linhas duplicadas do lado esquerdo.", "D) Multiplica todos os registos (Produto Cartesiano)."],
            "correta": 1,
            "verso": "Alternativa B: Retorna todos da esquerda, independentemente da correspondência na direita.\n\nJustificativa: O LEFT JOIN é essencial quando queremos listar, por exemplo, todos os 'Clientes' e os seus 'Pedidos', incluindo na lista os clientes que ainda não fizeram nenhum pedido (NULL).", 
            "dica": "Prioriza a tabela da Esquerda." 
        },
        { 
            "frente": "(ENADE - Segurança) O que significa aplicar o princípio do 'Menor Privilégio' (Least Privilege) num sistema operativo ou base de dados?", 
            "opcoes": ["A) Dar acesso total de Admin a todos para evitar bloqueios de trabalho.", "B) Fornecer a cada utilizador ou programa apenas as permissões e acessos estritamente necessários para realizar as suas tarefas, e nada mais.", "C) Remover as permissões de quem ganha o menor salário.", "D) Cobrar menos por assinaturas de software básicas."],
            "correta": 1,
            "verso": "Alternativa B: Fornecer apenas as permissões estritamente necessárias.\n\nJustificativa: É uma regra de ouro em segurança cibernética. Se a conta de um funcionário comum for pirateada, o atacante não conseguirá eliminar a base de dados central, pois a conta não tem esse privilégio.", 
            "dica": "Só dê a chave da porta que a pessoa precisa de abrir." 
        },
        { 
            "frente": "(ENADE - Eng. de Requisitos) No desenvolvimento de software, os 'Diagramas de Casos de Uso' são utilizados primariamente durante qual fase do ciclo de vida?", 
            "opcoes": ["A) Manutenção e Evolução", "B) Testes de Integração e Deployment", "C) Levantamento e Análise de Requisitos", "D) Refatoração de Código"],
            "correta": 2,
            "verso": "Alternativa C: Levantamento e Análise de Requisitos.\n\nJustificativa: Os Casos de Uso (da UML) são ferramentas visuais para traduzir as necessidades do negócio e as interações entre os atores (utilizadores) e o sistema, antes de a equipa começar a programar.", 
            "dica": "É o planeamento antes do código." 
        },
        { 
            "frente": "(ENADE - Versionamento) No Git, se um desenvolvedor quiser criar um caminho isolado para desenvolver uma nova funcionalidade sem interferir com o código principal, qual comando deverá usar?", 
            "opcoes": ["A) git clone", "B) git branch", "C) git log", "D) git rm"],
            "correta": 1,
            "verso": "Alternativa B: git branch.\n\nJustificativa: O comando branch cria uma 'ramificação'. Isto permite que o programador crie código isoladamente numa ramificação de testes, e só faça a junção (merge) com a ramificação principal (main) após ter a certeza que o código funciona.", 
            "dica": "Cria um ramo (branch) isolado." 
        },
        { 
            "frente": "(ENADE - Design de Interface) No CSS, utilizando o modelo Flexbox (display: flex), qual propriedade é utilizada para alinhar os itens horizontalmente ao longo do eixo principal?", 
            "opcoes": ["A) align-items", "B) flex-direction", "C) justify-content", "D) float: left"],
            "correta": 2,
            "verso": "Alternativa C: justify-content.\n\nJustificativa: A propriedade `justify-content` lida com o alinhamento no eixo principal (que por padrão é o horizontal, da esquerda para a direita). O `align-items` faz o alinhamento no eixo transversal (vertical).", 
            "dica": "Justifica o conteúdo na linha." 
        },
        { 
            "frente": "(ENADE - Web) Numa API REST desenvolvida em NodeJS ou C#, se o cliente envia dados sigilosos, como uma palavra-passe, no corpo (body) de um formulário. Qual método HTTP está a ser utilizado?", 
            "opcoes": ["A) GET", "B) OPTIONS", "C) POST", "D) HEAD"],
            "correta": 2,
            "verso": "Alternativa C: POST.\n\nJustificativa: O verbo POST é usado para enviar dados sensíveis ou longos contidos no corpo (body) da requisição. O método GET anexa os dados no URL (na barra de endereço), o que expõe a password publicamente.", 
            "dica": "O GET mostra no URL, o POST oculta no Corpo." 
        },
        { 
            "frente": "(ENADE - Eng. de Software) O padrão de arquitetura SOLID traz princípios para a programação orientada a objetos. O 'S' (Single Responsibility Principle) diz que:", 
            "opcoes": ["A) O sistema deve rodar num servidor único.", "B) Uma classe deve ter uma, e apenas uma, razão para mudar (uma única responsabilidade).", "C) Só pode existir uma herança por classe.", "D) O código deve ser escrito por um único programador."],
            "correta": 1,
            "verso": "Alternativa B: Uma classe deve ter apenas uma responsabilidade.\n\nJustificativa: O Princípio da Responsabilidade Única evita a criação de 'Classes Deus' (classes gigantes que fazem de tudo: enviam email, guardam no banco, desenham a interface). Classes pequenas e focadas evitam bugs.", 
            "dica": "Princípio da Responsabilidade Única." 
        }
    ],

    // ================= FASES BÔNUS (PREMIUM) =================
    "bonus1": [
        { "frente": "Bônus 01: O que é a 'Deep Web'?", "verso": "A parte da internet que não é indexada por motores de busca como o Google.", "dica": "Não é necessariamente ilegal, apenas oculta." },
        { "frente": "Bônus 01: O que foi o vírus 'ILOVEYOU' (2000)?", "verso": "Um dos maiores worms de e-mail da história que causou bilhões em prejuízos.", "dica": "Engenharia social pura." },
        { "frente": "Bônus 01: O que é o Teste de Invasão (PenTest)?", "verso": "Simular um ataque cibernético autorizado para encontrar falhas de segurança.", "dica": "Feito por Hackers Éticos." },
        { "frente": "Bônus 01: Quem é o grupo 'Anonymous'?", "verso": "Um coletivo descentralizado internacional de ativistas hackers (hacktivistas).", "dica": "Usam a máscara de Guy Fawkes." },
        { "frente": "Bônus 01: Quem é Kevin Mitnick?", "verso": "Um dos hackers mais famosos da história, especialista em Engenharia Social.", "dica": "Chegou a ser o homem mais procurado do FBI." },
        { "frente": "Bônus 01: O que é uma vulnerabilidade 'Zero-Day'?", "verso": "Uma falha de segurança recém-descoberta que os criadores do software ainda não conhecem e não corrigiram.", "dica": "Dia-zero (nenhum tempo para consertar)." },
        { "frente": "Bônus 01: Qual a diferença entre Malware e Vírus?", "verso": "Malware é qualquer código malicioso. Vírus é um tipo de malware que se replica inserindo seu código em outros programas.", "dica": "Todo vírus é um malware, mas nem todo malware é vírus." },
        { "frente": "Bônus 01: O que é um Cavalo de Troia (Trojan)?", "verso": "Um malware disfarçado de software legítimo e inofensivo para enganar o usuário.", "dica": "Inspirado na lenda grega." },
        { "frente": "Bônus 01: O que é Engenharia Social no hacking?", "verso": "A arte de manipular psicologicamente as pessoas para que entreguem informações confidenciais.", "dica": "O 'hackeamento' do cérebro humano." },
        { "frente": "Bônus 01: Qual a diferença entre Black Hat e White Hat?", "verso": "Black Hats invadem para roubar e destruir. White Hats (éticos) invadem para testar e proteger o sistema.", "dica": "Chapéu preto (vilão) vs Chapéu branco (herói)." },
        { "frente": "Bônus 01: O que é um programa de 'Bug Bounty'?", "verso": "Empresas que pagam recompensas em dinheiro para hackers que encontrarem e reportarem falhas em seus sistemas.", "dica": "Caçadores de recompensas digitais." },
        { "frente": "Bônus 01: O que significa CAPTCHA?", "verso": "Completely Automated Public Turing test to tell Computers and Humans Apart (Teste para diferenciar humanos e robôs).", "dica": "Aquelas imagens irritantes de semáforos." },
        { "frente": "Bônus 01: Como funciona uma VPN?", "verso": "Cria um túnel criptografado entre você e a internet, ocultando seu IP e sua localização.", "dica": "Virtual Private Network." },
        { "frente": "Bônus 01: O que é o navegador Tor?", "verso": "Um navegador projetado para comunicação anônima, roteando o tráfego por vários servidores voluntários (nós).", "dica": "Símbolo da cebola (The Onion Router)." },
        { "frente": "Bônus 01: Quem criou o Bitcoin?", "verso": "Uma pessoa ou grupo sob o pseudônimo de 'Satoshi Nakamoto'. A identidade real nunca foi descoberta.", "dica": "Criado logo após a crise de 2008." },
        { "frente": "Bônus 01: O que foi o Stuxnet?", "verso": "Um vírus de computador militar extremamente sofisticado, criado para sabotar usinas nucleares.", "dica": "A primeira arma cibernética do mundo." },
        { "frente": "Bônus 01: O que foi o Morris Worm (1988)?", "verso": "Um dos primeiros malwares distribuídos pela internet, que acidentalmente derrubou milhares de computadores.", "dica": "Criado por um estudante para 'medir' o tamanho da internet." },
        { "frente": "Bônus 01: O que foi o WannaCry (2017)?", "verso": "Um ataque de ransomware global que infectou centenas de milhares de PCs exigindo resgate em Bitcoin.", "dica": "Paralisou até os hospitais do Reino Unido." },
        { "frente": "Bônus 01: O que foi a Máquina Enigma?", "verso": "Uma máquina de criptografia usada pelos nazistas na 2ª Guerra Mundial, quebrada pela equipe de Alan Turing.", "dica": "Filme: O Jogo da Imitação." },
        { "frente": "Bônus 01: O que foi a ARPANET?", "verso": "A rede de computadores financiada pelo departamento de defesa dos EUA que deu origem à Internet atual.", "dica": "Avó da internet." },
        { "frente": "Bônus 01: Qual foi o primeiro 'Bug' de computador real?", "verso": "Uma mariposa (inseto/bug) real que ficou presa nos relés do computador Mark II em 1947.", "dica": "Encontrada pela pioneira Grace Hopper." },
        { "frente": "Bônus 01: Quem foi Alan Turing?", "verso": "Matemático britânico considerado o pai da ciência da computação e da Inteligência Artificial.", "dica": "Criou o 'Teste de Turing'." },
        { "frente": "Bônus 01: Quem foi Ada Lovelace?", "verso": "Matemática inglesa reconhecida como a primeira pessoa programadora da história (anos 1840).", "dica": "Escreveu o primeiro algoritmo para a Máquina Analítica." },
        { "frente": "Bônus 01: Qual a arquitetura de Von Neumann?", "verso": "O design base de quase todos os PCs modernos, separando CPU, memória e dispositivos de Entrada/Saída.", "dica": "Conceito criado em 1945." },
        { "frente": "Bônus 01: Quem é Linus Torvalds?", "verso": "O engenheiro de software finlandês que criou o núcleo (kernel) do sistema operacional Linux.", "dica": "Também criou o sistema de versionamento Git." },
        { "frente": "Bônus 01: O que é o Konami Code?", "verso": "Um código de trapaça famoso nos videogames: Cima, Cima, Baixo, Baixo, Esquerda, Direita, Esquerda, Direita, B, A.", "dica": "O maior easter egg da cultura pop." },
        { "frente": "Bônus 01: O que é um ataque de Força Bruta?", "verso": "Tentar adivinhar uma senha testando milhões de combinações possíveis até acertar.", "dica": "Motivo pelo qual pedem senhas complexas." },
        { "frente": "Bônus 01: O que é Phreaking?", "verso": "A exploração e hackeamento do sistema de telecomunicações e linhas telefônicas antigas.", "dica": "Steve Jobs e Wozniak vendiam as 'Blue Boxes' de phreaking." },
        { "frente": "Bônus 01: O que significa a mensagem de erro HTTP 404?", "verso": "Indica que o cliente conseguiu se comunicar com o servidor, mas o servidor não encontrou o arquivo ou página solicitada.", "dica": "Page Not Found." },
        { "frente": "Bônus 01: O que significa a mensagem de erro HTTP 418?", "verso": "I'm a teapot (Eu sou um bule de chá). É uma piada oficial de primeiro de abril criada no protocolo HTTP em 1998.", "dica": "O easter egg oficial da web." }
    ],
    "bonus2": [
        { "frente": "Bônus 02: O que foi o ENIAC (1946)?", "verso": "O primeiro computador digital eletrónico de grande escala, construído com válvulas para calcular tabelas de artilharia militar.", "dica": "Ocupava uma sala inteira e pesava 30 toneladas." },
        { "frente": "Bônus 02: Quem foi Ada Lovelace?", "verso": "A primeira programadora da história (século XIX), que criou o primeiro algoritmo focado numa máquina mecânica de computação.", "dica": "Matemática visionária." },
        { "frente": "Bônus 02: Quem foi Alan Turing?", "verso": "Matemático britânico considerado o 'Pai da Ciência da Computação'. Decifrou os códigos nazis da Máquina Enigma.", "dica": "Criou o 'Teste de Turing' para inteligência artificial." },
        { "frente": "Bônus 02: O que foi a Máquina Analítica?", "verso": "Um projeto de computador mecânico desenhado por Charles Babbage em 1837, ancestral dos computadores modernos.", "dica": "Nunca foi totalmente construída no seu tempo." },
        { "frente": "Bônus 02: Qual foi o impacto da invenção do Transístor?", "verso": "Substituiu as válvulas, permitindo que os computadores se tornassem muito mais pequenos, baratos e não superaquecessem.", "dica": "A base de toda a eletrónica moderna." },
        { "frente": "Bônus 02: O que ditava a Lei de Moore (1965)?", "verso": "Que a quantidade de transístores (o poder de processamento) num microchip dobraria a cada dois anos, sem aumento de custos.", "dica": "A profecia que guiou a evolução do Hardware." },
        { "frente": "Bônus 02: O que foi a ARPANET?", "verso": "Uma rede de computadores financiada pelo departamento militar dos EUA que é a base histórica da Internet.", "dica": "Para proteger os dados em caso de ataque nuclear." },
        { "frente": "Bônus 02: Quem inventou a World Wide Web (WWW)?", "verso": "Tim Berners-Lee em 1989, trabalhando no CERN, com o objetivo de partilhar ficheiros HTML entre cientistas.", "dica": "Criou também o protocolo HTTP." },
        { "frente": "Bônus 02: Qual o papel de Margaret Hamilton na Missão Apollo 11?", "verso": "Ela foi a Diretora de Engenharia de Software da NASA; o código da sua equipa impediu que o módulo lunar caísse na lua.", "dica": "A mãe do termo 'Engenharia de Software'." },
        { "frente": "Bônus 02: Qual foi o primeiro 'Bug' de computador real?", "verso": "Uma traça real que ficou presa num relé do computador Mark II em 1947, encontrada por Grace Hopper.", "dica": "A origem literal do termo 'Inseto'." },
        { "frente": "Bônus 02: Quem criou o sistema operacional Linux?", "verso": "Linus Torvalds, em 1991, lançando o kernel de forma aberta (open source) para a comunidade.", "dica": "Hoje o Linux domina os servidores do mundo." },
        { "frente": "Bônus 02: O que foi o Computador Altair 8800 (1975)?", "verso": "O primeiro computador pessoal de sucesso comercial. Inspirou Bill Gates a fundar a Microsoft para vender software.", "dica": "Era uma caixa com interruptores e luzes." },
        { "frente": "Bônus 02: O que a Xerox PARC inventou que a Apple e a Microsoft copiaram?", "verso": "A Interface Gráfica de Utilizador (GUI) com janelas e o Rato de computador.", "dica": "A Xerox não sabia comercializar a invenção." },
        { "frente": "Bônus 02: O que foi o 'Bug do Milénio' (Y2K)?", "verso": "O medo de que os computadores parassem no ano 2000, pois as datas eram guardadas apenas com os dois últimos dígitos (99 para 1999).", "dica": "Bilhões foram gastos em refatoração de código." },
        { "frente": "Bônus 02: O que foi a 'Bolha da Internet' (Dot-com Bubble) no ano 2000?", "verso": "Uma crise financeira causada pela especulação cega em qualquer empresa que tivesse um site '.com', quebrando milhares de startups.", "dica": "Muitas promessas, pouco lucro real." },
        { "frente": "Bônus 02: Qual a origem da linguagem Python?", "verso": "Criada por Guido van Rossum em 1991, com foco na legibilidade do código. O nome é uma homenagem ao grupo 'Monty Python'.", "dica": "Não tem a ver com a cobra." },
        { "frente": "Bônus 02: O que foi a 'Guerra dos Navegadores' nos anos 90?", "verso": "A competição feroz pela fatia de mercado de browsers entre o Netscape Navigator e o Internet Explorer da Microsoft.", "dica": "O IE venceu por vir pré-instalado no Windows." },
        { "frente": "Bônus 02: O que é o Easter Egg 'Konami Code'?", "verso": "Um código de trapaça famoso em videojogos: Cima, Cima, Baixo, Baixo, Esquerda, Direita, Esquerda, Direita, B, A.", "dica": "O mais famoso ovo de páscoa digital." },
        { "frente": "Bônus 02: Como começou a Amazon.com em 1994?", "verso": "Fundada por Jeff Bezos na garagem de sua casa operando exclusivamente como uma livraria online.", "dica": "Hoje vende desde pens a infraestrutura cloud (AWS)." },
        { "frente": "Bônus 02: Como o Google revolucionou a busca na Web (1998)?", "verso": "Com o algoritmo PageRank, que ordenava os sites com base na quantidade e qualidade de links (relevância) apontados para eles.", "dica": "Mataram os diretórios organizados manualmente." },
        { "frente": "Bônus 02: O que representou o lançamento do iPhone (2007)?", "verso": "Revolucionou a computação móvel ao eliminar os teclados físicos em favor do 'Multitouch' capacitivo e a entrada de lojas de apps.", "dica": "Transformou os telemóveis em computadores de bolso." },
        { "frente": "Bônus 02: Quem é o criador da linguagem C?", "verso": "Dennis Ritchie, na década de 1970. A linguagem foi usada para reescrever o sistema operativo UNIX.", "dica": "A base da maioria dos sistemas modernos." },
        { "frente": "Bônus 02: O que significa 'RTFM' na cultura Hacker?", "verso": "Read The F***ing Manual (Leia o maldito manual).", "dica": "A resposta rude mas clássica para perguntas óbvias." },
        { "frente": "Bônus 02: O que foi o sistema MS-DOS?", "verso": "O sistema operativo em linha de comando da Microsoft que dominou os PCs na década de 1980.", "dica": "Antecessor do Windows." },
        { "frente": "Bônus 02: O que era o Cartão Perfurado?", "verso": "Pedaços de papel rígido com furos estrategicamente posicionados usados para inserir dados e código nos primeiros computadores.", "dica": "Código físico." },
        { "frente": "Bônus 02: Qual o papel de Steve Wozniak na fundação da Apple?", "verso": "Ele era o gênio técnico que projetou e construiu manualmente as placas de circuito dos computadores Apple I e Apple II.", "dica": "Jobs vendia, Wozniak construía." },
        { "frente": "Bônus 02: O que foi o 'Projeto Manhattan' do Google?", "verso": "A criação de um sistema de IA focado em vencer o melhor jogador humano do mundo de Go (um complexo jogo de tabuleiro asiático).", "dica": "AlphaGo." },
        { "frente": "Bônus 02: O que significa o acrónimo 'CAPTCHA'?", "verso": "Completely Automated Public Turing test to tell Computers and Humans Apart.", "dica": "Testes de semáforos e passadeiras de peões." },
        { "frente": "Bônus 02: O que foi o erro 418 do protocolo HTTP?", "verso": "I'm a teapot (Eu sou um bule de chá). Foi criado em 1998 como uma piada de primeiro de abril sobre protocolos de cafeteiras conectadas.", "dica": "O Easter Egg oficial da Web." },
        { "frente": "Bônus 02: O que são as 'Blue Boxes' (Caixas Azuis) dos anos 70?", "verso": "Dispositivos criados por hackers (Phreakers) que emitiam os mesmos tons acústicos da operadora de telefonia para fazer chamadas gratuitas.", "dica": "Jobs e Wozniak vendiam essas caixas antes da Apple." }
    ],
    "bonus3": [
        { "frente": "Bônus 03: O que é a Síndrome do Impostor?", "verso": "O sentimento constante de que não é bom o suficiente, de que é uma fraude e que o seu sucesso se deve apenas à sorte.", "dica": "Afeta cerca de 80% dos desenvolvedores iniciantes." },
        { "frente": "Bônus 03: Qual a linguagem de programação que foi para a Lua (Apollo 11)?", "verso": "Assembly, escrito por Margaret Hamilton e a sua equipa.", "dica": "O código era literalmente costurado em fios de cobre." },
        { "frente": "Bônus 03: O que dita a Lei de Moore?", "verso": "A observação de que o número de transístores num microchip dobra aproximadamente a cada dois anos.", "dica": "Dita o ritmo da evolução do hardware mundial." },
        { "frente": "Bônus 03: Qual a principal diferença entre um Júnior, um Pleno e um Sénior?", "verso": "Júnior precisa de orientação. Pleno resolve problemas de forma independente. Sénior previne os problemas antes que eles aconteçam e orienta a equipa.", "dica": "Evolução natural de carreira." },
        { "frente": "Bônus 03: O que são Hard Skills?", "verso": "Habilidades técnicas e mensuráveis que podem ser aprendidas, como programar em C#, configurar redes ou gerir bases de dados.", "dica": "O que coloca no currículo." },
        { "frente": "Bônus 03: O que são Soft Skills?", "verso": "Habilidades comportamentais e interpessoais, como comunicação, empatia, inteligência emocional e resolução de conflitos.", "dica": "Muitas empresas contratam pelo Hard e demitem pelo Soft." },
        { "frente": "Bônus 03: O que é a Síndrome de Burnout?", "verso": "Um estado de esgotamento físico e mental extremo causado por stress crónico e prolongado no ambiente de trabalho.", "dica": "Muito comum em TI; a saúde mental vem primeiro." },
        { "frente": "Bônus 03: O que significa ter um perfil profissional 'T-Shaped'?", "verso": "Ter conhecimentos gerais amplos em várias áreas da TI (a barra horizontal do T), mas ser profundamente especialista numa única área (a barra vertical).", "dica": "O perfil mais procurado pelas empresas." },
        { "frente": "Bônus 03: O que é o 'Tutorial Hell' (Inferno dos Tutoriais)?", "verso": "O ciclo vicioso em que o aluno consome dezenas de cursos e vídeos, mas sente-se incapaz de construir um projeto real sozinho a partir do zero.", "dica": "Para sair: pare de assistir e comece a programar." },
        { "frente": "Bônus 03: O que é a Síndrome do Objeto Brilhante (Shiny Object Syndrome)?", "verso": "A tendência de abandonar uma tecnologia ou linguagem que se está a aprender a meio, só porque surgiu um novo framework 'da moda'.", "dica": "Foco vence o 'hype'." },
        { "frente": "Bônus 03: O que é um Hackathon?", "verso": "Uma maratona de programação (geralmente de 24h a 48h) onde equipas competem para criar um protótipo de software que resolva um problema específico.", "dica": "Excelente para networking e portfólio." },
        { "frente": "Bônus 03: Por que o GitHub é considerado o 'Currículo do Programador'?", "verso": "Porque mostra o código real que escreveu, os seus commits e a sua capacidade de colaborar, o que vale mais do que diplomas em muitas vagas.", "dica": "Mantenha o seu portfólio ativo." },
        { "frente": "Bônus 03: O que é o trabalho Assíncrono?", "verso": "Modelo de trabalho onde a comunicação não exige uma resposta imediata. Permite que cada pessoa trabalhe no seu fuso horário e ritmo, usando ferramentas como o Slack ou Jira.", "dica": "A base do trabalho remoto global." },
        { "frente": "Bônus 03: Qual a importância do idioma Inglês na TI?", "verso": "As linguagens, frameworks, a melhor documentação oficial, os fóruns (Stack Overflow) e os melhores salários remotos estão todos em inglês.", "dica": "É a verdadeira linguagem de programação universal." },
        { "frente": "Bônus 03: O que é o 'Fit Cultural' numa entrevista de emprego?", "verso": "A avaliação feita pelos RH para saber se os valores, crenças e o comportamento do candidato estão alinhados com a cultura da empresa.", "dica": "Não basta codar bem, tem de se dar bem com a equipa." },
        { "frente": "Bônus 03: O que é o 'Mito do Programador 10x'?", "verso": "A ideia de que existe um programador 'lobo solitário' tão genial que produz dez vezes mais que uma pessoa normal.", "dica": "O trabalho em equipa consistente supera sempre o talento isolado." },
        { "frente": "Bônus 03: O que é o Code Review (Revisão de Código)?", "verso": "Prática onde outros programadores da equipa leem e analisam o seu código antes de ele ser fundido (merge) ao projeto principal.", "dica": "A melhor forma de aprender a programar melhor." },
        { "frente": "Bônus 03: O que é Pair Programming (Programação em Par)?", "verso": "Técnica Ágil onde dois programadores partilham o mesmo ecrã: um digita o código (Piloto) e o outro revê e pensa na estratégia (Navegador).", "dica": "Duas cabeças pensam melhor que uma." },
        { "frente": "Bônus 03: O que significa 'Networking' profissional?", "verso": "A construção e manutenção de uma rede de contactos profissionais que trocam conhecimentos, indicações de vagas e experiências mútuas.", "dica": "Quem não é visto não é lembrado." },
        { "frente": "Bônus 03: O que é um NDA (Non-Disclosure Agreement)?", "verso": "Um Acordo de Confidencialidade. Um contrato legal em que promete não revelar os segredos de negócio e o código da empresa a terceiros.", "dica": "Nunca coloque código da empresa no seu GitHub público." },
        { "frente": "Bônus 03: O que é a técnica Pomodoro?", "verso": "Um método de gestão de tempo que alterna blocos de 25 minutos de foco absoluto com 5 minutos de descanso para manter o cérebro fresco.", "dica": "Aumenta a produtividade e evita a fadiga." },
        { "frente": "Bônus 03: O que é atuar como Freelancer?", "verso": "Trabalhar de forma independente, prestando serviços de desenvolvimento ou design para vários clientes sem vínculo de emprego exclusivo.", "dica": "Seja o seu próprio patrão." },
        { "frente": "Bônus 03: O que é um teste de 'Live Coding' em processos seletivos?", "verso": "Uma etapa da entrevista onde o candidato tem de partilhar o ecrã e resolver um problema de lógica em tempo real, enquanto o avaliador observa.", "dica": "Testa como lida com a pressão." },
        { "frente": "Bônus 03: Qual a importância de participar em Comunidades de Devs?", "verso": "Acelera a aprendizagem através do apoio de pessoas mais experientes, ajuda a resolver bloqueios técnicos e abre portas no mercado de trabalho.", "dica": "Discord, Reddit, Fóruns locais." },
        { "frente": "Bônus 03: O que significa trabalhar 'Alocado' vs 'Outsourcing' (Terceirização)?", "verso": "Alocado é ser contratado para a equipa interna. Outsourcing é trabalhar para uma empresa que o 'aluga' como consultor a outro cliente corporativo.", "dica": "Modelo muito comum em consultorias de TI." },
        { "frente": "Bônus 03: O que é uma Mentoria de Carreira?", "verso": "Um relacionamento profissional onde uma pessoa experiente (mentor) orienta, partilha atalhos e aconselha um profissional menos experiente (mentorado).", "dica": "Encurta a curva de aprendizagem." },
        { "frente": "Bônus 03: O que significa ter Inteligência Emocional no trabalho?", "verso": "A capacidade de reconhecer e gerir as suas próprias emoções (não entrar em pânico perante bugs) e ter empatia com os colegas.", "dica": "Fundamental para liderar." },
        { "frente": "Bônus 03: O que é a síndrome do 'Not Invented Here' (Não Inventado Aqui)?", "verso": "O preconceito nocivo de empresas ou equipas que recusam usar bibliotecas de terceiros excelentes, querendo criar tudo do zero internamente.", "dica": "Não reinvente a roda." },
        { "frente": "Bônus 03: O que é 'Gamificação' (O que estamos a fazer agora)?", "verso": "O uso de mecânicas e dinâmicas de jogos (pontos, níveis, recompensas) em contextos que não são de jogo (estudo, trabalho) para aumentar o engajamento.", "dica": "A magia do Nex_TI!" },
        { "frente": "Bônus 03: O que é o Princípio de Pareto (Regra 80/20)?", "verso": "A regra que diz que 80% dos resultados vêm de 20% dos esforços. Na TI, 80% dos bugs estão em 20% do código.", "dica": "Foco no que realmente dá resultado." }
    ],
    "bonus4": [
        { "frente": "Bônus 04: O que é um 'Unicórnio' no mercado de TI?", "verso": "Uma startup de capital fechado que conseguiu atingir uma avaliação de mercado superior a 1 Bilhão de Dólares.", "dica": "Ex: Nubank, Uber, iFood (no seu início)." },
        { "frente": "Bônus 04: O que é um Pitch Deck?", "verso": "Uma apresentação visual curta (10 a 15 slides) usada por empreendedores para apresentar o seu modelo de negócio a investidores para levantar capital.", "dica": "A apresentação que pode valer milhões." },
        { "frente": "Bônus 04: O que é Bootstrapping?", "verso": "Iniciar e escalar uma empresa usando exclusivamente o próprio dinheiro dos fundadores e o fluxo de caixa gerado pelas vendas iniciais.", "dica": "Crescer sem dinheiro de fora." },
        { "frente": "Bônus 04: O que é o Burn Rate (Taxa de Queima)?", "verso": "A velocidade (geralmente mensal) com que uma startup gasta o seu capital de investimento para se manter a operar antes de ser rentável.", "dica": "A que velocidade queima o dinheiro do investidor." },
        { "frente": "Bônus 04: O que é Runway (Pista de Descolagem)?", "verso": "A quantidade de tempo (em meses) que a startup tem para sobreviver operando com o seu saldo atual, com base no seu Burn Rate.", "dica": "Se acabar a pista, a empresa fecha." },
        { "frente": "Bônus 04: Qual a diferença entre Incubadora e Aceleradora?", "verso": "A incubadora ajuda ideias embrionárias a estruturarem-se fisicamente. A aceleradora pega numa startup que já fatura e injeta capital intensivo para escalar rapidamente.", "dica": "Apoio inicial vs Crescimento explosivo." },
        { "frente": "Bônus 04: O que significa B2B2C?", "verso": "Business to Business to Consumer. Uma empresa que vende um serviço a outra empresa, mas o foco final é chegar ao consumidor daquela empresa.", "dica": "Ex: iFood vendendo o sistema aos Restaurantes (B2B) para chegar a nós (B2C)." },
        { "frente": "Bônus 04: O que é a métrica CAC (Custo de Aquisição de Clientes)?", "verso": "O investimento médio exigido em marketing e vendas para conseguir convencer um novo cliente a comprar o seu produto.", "dica": "Quanto custa cada cliente novo." },
        { "frente": "Bônus 04: O que é a métrica LTV (Lifetime Value)?", "verso": "A estimativa da receita líquida total que um cliente gerará para a empresa durante todo o seu tempo de retenção/assinatura.", "dica": "O LTV tem de ser pelo menos 3x maior que o CAC." },
        { "frente": "Bônus 04: O que é o Churn Rate?", "verso": "A taxa que mede a percentagem de clientes ou assinantes que cancelaram o serviço ou deixaram de comprar num determinado período.", "dica": "O 'buraco' no balde da empresa." },
        { "frente": "Bônus 04: O que é 'Pivotar' (Pivot)?", "verso": "Mudar drasticamente a direção do modelo de negócio, do produto ou do público-alvo quando se percebe que a estratégia atual falhou no mercado.", "dica": "Correção de rota sem fechar a empresa." },
        { "frente": "Bônus 04: O que é o Break-even Point (Ponto de Equilíbrio)?", "verso": "O momento exato em que os custos de operação da empresa se igualam às receitas de vendas (Lucro Zero). Tudo o que entrar acima disso é lucro real.", "dica": "Sair do vermelho e empatar o jogo." },
        { "frente": "Bônus 04: O que é um modelo Freemium?", "verso": "Um modelo de negócio que oferece uma versão básica do produto de forma totalmente gratuita, cobrando uma assinatura (Premium) por recursos avançados.", "dica": "Free + Premium. Ex: Spotify, LinkedIn." },
        { "frente": "Bônus 04: O que é Crowdfunding?", "verso": "Um financiamento coletivo em que várias pessoas ('a multidão') investem pequenas quantias de dinheiro pela internet para ajudar a viabilizar um projeto.", "dica": "A famosa 'vaquinha online' empresarial." },
        { "frente": "Bônus 04: O que é o Valuation de uma empresa?", "verso": "A avaliação financeira estimativa do valor total de mercado de uma startup. Usado para definir quanta % da empresa os investidores recebem pelo dinheiro aportado.", "dica": "Quanto vale a sua empresa hoje?" },
        { "frente": "Bônus 04: O que é o 'Exit' (Saída) de uma startup?", "verso": "O evento final em que os fundadores e primeiros investidores vendem as suas participações e têm o retorno lucrativo (Ex: Sendo comprados por uma gigante como a Google).", "dica": "O dia do grande pagamento." },
        { "frente": "Bônus 04: O que significa IPO (Initial Public Offering)?", "verso": "A Oferta Pública Inicial, momento em que uma empresa privada cresce tanto que abre o seu capital para vender ações na Bolsa de Valores pública.", "dica": "Quando a startup vira uma 'Megacorporação'." },
        { "frente": "Bônus 04: O que significa atingir o 'Product-Market Fit'?", "verso": "É o momento mágico em que uma startup construiu um produto que resolve tão bem a dor do cliente, que este mercado começa a comprar e recomendar avidamente.", "dica": "O produto casa perfeitamente com a procura." },
        { "frente": "Bônus 04: Quem são os 'Early Adopters' (Adotantes Iniciais)?", "verso": "O pequeno grupo de clientes visionários que estão dispostos a comprar e testar a primeira versão (MVP) de um produto antes de ele se tornar famoso.", "dica": "Os clientes que validam o seu negócio." },
        { "frente": "Bônus 04: O que é Growth Hacking?", "verso": "O uso de estratégias criativas de marketing com baixo custo, análise de dados rigorosa e engenharia de software para gerar um crescimento (growth) rápido de utilizadores.", "dica": "Hackear o crescimento através da tecnologia." },
        { "frente": "Bônus 04: O que é um MVP (Minimum Viable Product)?", "verso": "O Produto Mínimo Viável. A versão mais básica da sua solução que possui as funcionalidades mínimas para atrair os Early Adopters e testar o mercado.", "dica": "Se não tem vergonha da primeira versão do seu produto, lançou-o tarde demais." },
        { "frente": "Bônus 04: O que são OKRs (Objectives and Key Results)?", "verso": "Metodologia de gestão usada pelo Google e Netflix para alinhar a empresa, definindo Objetivos qualitativos inspiradores e Resultados Chave quantitativos e mensuráveis.", "dica": "Para onde vamos (O) e como mediremos se chegámos (KR)." },
        { "frente": "Bônus 04: O que são KPIs (Key Performance Indicators)?", "verso": "Indicadores chave de desempenho. Métricas numéricas que os gestores analisam diariamente para medir a saúde técnica e comercial da empresa.", "dica": "O painel do carro do gestor." },
        { "frente": "Bônus 04: O que é uma Cap Table (Capitalization Table)?", "verso": "Uma tabela jurídica que detalha quem são os donos da startup e qual a percentagem exata (quotas ou ações) que pertence aos fundadores, funcionários e investidores.", "dica": "A divisão oficial do bolo da empresa." },
        { "frente": "Bônus 04: O que é o 'Vale da Morte' das Startups?", "verso": "A fase crítica inicial em que a startup já começou a operar e gastar capital (Burn Rate alto), mas ainda não atingiu receitas suficientes (Break-even).", "dica": "Onde 90% das empresas morrem de falta de caixa." },
        { "frente": "Bônus 04: O que é o Contrato de 'Vesting' para fundadores?", "verso": "Uma cláusula que exige que os sócios permaneçam a trabalhar na empresa por um tempo mínimo (ex: 4 anos) para receberem progressivamente o total das suas ações.", "dica": "Evita que um sócio abandone o barco com metade da empresa." },
        { "frente": "Bônus 04: O que é um 'Term Sheet'?", "verso": "O documento preliminar que resume os termos e condições básicos de um investimento proposto por um Venture Capital antes do contrato jurídico final.", "dica": "A proposta de noivado antes do casamento." },
        { "frente": "Bônus 04: O que é Inovação Disruptiva?", "verso": "Uma tecnologia ou modelo de negócio que é criado na base do mercado, mais acessível e barato, e que eventualmente desaloja os gigantes e domina o mundo.", "dica": "Ex: Câmaras digitais aniquilaram as de filme (Kodak)." },
        { "frente": "Bônus 04: O que é um Acordo de Confidencialidade (NDA) para startups?", "verso": "Um contrato que protege o sigilo da ideia, código ou plano de negócio. NOTA: Investidores não assinam NDAs para escutar a sua ideia inicial.", "dica": "As ideias não valem nada, a execução vale tudo." },
        { "frente": "Bônus 04: O que significa 'Escalabilidade' num modelo de negócio?", "verso": "A capacidade da empresa de multiplicar as suas receitas de forma exponencial, enquanto os seus custos operacionais crescem de forma muito lenta ou quase zero.", "dica": "O Santo Graal de qualquer software." }
    ]
};