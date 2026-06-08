import os
import sys

# Tenta importar fpdf2, se falhar, tenta instalar
try:
    from fpdf import FPDF
except ImportError:
    print("FPDF2 não está instalado. Tentando instalar via pip...")
    import subprocess
    subprocess.check_call([sys.executable, "-m", "pip", "install", "fpdf2"])
    from fpdf import FPDF

class NexTIPDF(FPDF):
    def header(self):
        # Fundo do cabeçalho em Slate 900
        self.set_fill_color(15, 23, 42)
        self.rect(0, 0, 210, 32, 'F')
        
        # Detalhe decorativo em Cyan
        self.set_fill_color(0, 230, 230)
        self.rect(0, 32, 210, 1.5, 'F')
        
        # Título principal
        self.set_font('Helvetica', 'B', 15)
        self.set_text_color(255, 255, 255)
        self.set_y(6)
        self.cell(0, 8, 'NEX_TI - PLATAFORMA DE ENSINO ATIVO', 0, 1, 'C')
        
        # Subtítulo
        self.set_font('Helvetica', 'B', 10)
        self.set_text_color(0, 230, 230)
        self.cell(0, 4, 'Guia de Engenharia de Software & Desenhos do PIM IV', 0, 1, 'C')
        
        self.set_y(40)

    def footer(self):
        # Rodapé posicionado a 15 mm da margem inferior
        self.set_y(-15)
        
        # Linha decorativa
        self.set_draw_color(226, 232, 240)
        self.line(15, self.get_y(), 195, self.get_y())
        
        self.set_font('Helvetica', 'I', 8.5)
        self.set_text_color(100, 116, 139)
        
        # Nome do projeto e grupo
        self.cell(90, 10, 'UNIP - CST ADS (Grupo 02 / 2026)', 0, 0, 'L')
        # Paginação
        self.cell(90, 10, f'Página {self.page_no()}', 0, 0, 'R')

    def add_section_title(self, number, title, status="Modelado"):
        self.set_font('Helvetica', 'B', 12)
        self.set_text_color(15, 23, 42)
        
        # Caixa de fundo para o título da seção
        self.set_fill_color(241, 245, 249)
        self.cell(0, 8, f' {number}. {title.upper()}', 0, 0, 'L', fill=True)
        
        # Status alinhado à direita
        self.set_x(-45)
        self.set_text_color(13, 148, 136) # Teal escuro
        self.cell(30, 8, f'[{status}]', 0, 1, 'R')
        self.ln(2.5)

    def add_bullet_point(self, title, text):
        orig_left = self.l_margin
        
        # Desenha o bullet
        self.set_font('Helvetica', 'B', 10)
        self.set_text_color(30, 41, 59)
        self.set_x(20)
        self.cell(4, 5, chr(149), 0, 0, 'L')
        
        # Recuo dinâmico de margem
        self.set_left_margin(24)
        self.set_x(24)
        
        # Título em negrito
        self.set_font('Helvetica', 'B', 10)
        self.write(5.5, f'{title}: ')
        
        # Descrição normal
        self.set_font('Helvetica', '', 10)
        self.set_text_color(71, 85, 105)
        self.write(5.5, text)
        
        # Quebra de linha e restauração de margem
        self.ln(6.5)
        self.set_left_margin(orig_left)

    def add_qa(self, question, answer):
        orig_left = self.l_margin
        
        # Pergunta
        self.set_font('Helvetica', 'B', 10)
        self.set_text_color(15, 23, 42) # Slate 900
        self.write(4.5, f'P: {question}')
        self.ln(5)
        
        # Recuo da resposta
        self.set_left_margin(20)
        self.set_x(20)
        
        # Resposta
        self.set_font('Helvetica', '', 9)
        self.set_text_color(71, 85, 105) # Slate 600
        self.write(4.5, f'R: {answer}')
        
        # Linha em branco e restaura margem
        self.ln(6.5)
        self.set_left_margin(orig_left)

    def add_qa_divider(self):
        self.set_font('Helvetica', 'B', 9.5)
        self.set_text_color(13, 148, 136) # Teal
        self.cell(0, 6, 'PERGUNTAS PROVÁVEIS DA BANCA EXAMINADORA:', 0, 1, 'L')
        self.ln(2)

def gerar_apresentacao(output_path):
    pdf = NexTIPDF()
    pdf.set_top_margin(40)
    pdf.set_left_margin(15)
    pdf.set_right_margin(15)
    pdf.set_auto_page_break(auto=True, margin=15)
    
    # ==================== PÁGINA 1: ETAPA 1 ====================
    pdf.add_page()
    
    pdf.set_font('Helvetica', 'I', 10)
    pdf.set_text_color(71, 85, 105)
    pdf.multi_cell(0, 4.5, 'Este roteiro resume a organizacao das ideias, desenhos técnicos e telas projetadas para o trabalho do PIM IV (4º Semestre).')
    pdf.ln(3)
    
    # 1. Levantamento e Análise de Requisitos
    pdf.add_section_title("1", "Levantamento de Requisitos", "Modelado")
    pdf.set_font('Helvetica', '', 10)
    pdf.set_text_color(71, 85, 105)
    pdf.multi_cell(0, 5, 'Definicao do que a plataforma Nex_TI fara e suas regras de funcionamento.')
    pdf.ln(1.5)
    pdf.add_bullet_point('O que o usuario faz', 'Criar cadastro, fazer login no site, responder aos cartoes de perguntas (flashcards) e ver pontos e moedas na tela.')
    pdf.add_bullet_point('Como o sistema funciona', 'Telas que se adaptam a celulares e computadores, acessibilidade para leitores de tela e seguranca no salvamento de senhas.')
    pdf.ln(4)
    
    # Q&As Etapa 1
    pdf.add_qa_divider()
    pdf.add_qa('Como o grupo dividiu o que o sistema faz das regras tecnicas de funcionamento?',
               'Separamos em Requisitos Funcionais (o que o usuario consegue fazer na tela, como ver seu saldo de moedas) e Requisitos Nao Funcionais (como o sistema se comporta por tras, como ser acessível para leitores de tela e salvar senhas de forma segura).')
    pdf.add_qa('Por que é importante definir as regras do jogo (como os pontos e moedas) antes de programar?',
               'Ajuda a evitar erros de lógica na hora de criar o site. Por exemplo, a regra de que o aluno so ganha moedas quando termina de estudar o conjunto inteiro de cartoes impede que alguem ganhe pontos sem ter estudado de verdade.')
    pdf.add_qa('Como o projeto protege os dados dos alunos de acordo com as leis atuais (LGPD)?',
               'O aluno da autorizacao explícita no cadastro. Alem disso, as senhas nao serao salvas como texto comum, mas sim codificadas para seguranca. Relatorios de desempenho tambem serao genéricos para nao expor ninguem.')

    # ==================== PÁGINA 2: ETAPA 2 ====================
    pdf.add_page()

    # 2. Modelagem do Sistema (UML)
    pdf.add_section_title("2", "Desenhos do Sistema (UML)", "Modelado")
    pdf.set_font('Helvetica', '', 10)
    pdf.set_text_color(71, 85, 105)
    pdf.multi_cell(0, 5, 'Desenhos estruturais das classes de programacao e do fluxo que a informacao faz no sistema.')
    pdf.ln(1.5)
    pdf.add_bullet_point('Acoes do Sistema', 'Separacao de tarefas divididas em 15 acoes para Aluno, Tutor e Administrador, garantindo que cada um tenha acessos diferentes.')
    pdf.add_bullet_point('Organizacao de Classes', 'Classes de Aluno, Tutor e Usuario, organizando os dados de cadastro e o saldo de pontos e moedas de forma segura.')
    pdf.add_bullet_point('Fluxo de Informacao', 'Desenho do caminho que a informacao faz desde o clique do Aluno na tela ate a gravacao no banco de dados.')
    pdf.ln(4)
    
    # Q&As Etapa 2
    pdf.add_qa_divider()
    pdf.add_qa('Por que o desenho de uso do sistema foi dividido em partes e quem sao as pessoas que usam o sistema?',
               'Mapeamos 15 acoes divididas entre Aluno, Tutor e Administrador. Para nao poluir o desenho no trabalho, separamos em duas telas: uma geral e outra focada apenas no que o Aluno faz.')
    pdf.add_qa('Como é a relacao entre as classes de Usuario, Aluno e o sistema de pontos no projeto?',
               'O Aluno aproveita as informacoes basicas de Usuario (como nome e senha) por meio de heranca. Cada Aluno tem sua propria carteira de pontos (XP) e moedas ligada ao seu usuario de forma protegida.')
    pdf.add_qa('Como o desenho de sequência ajuda a entender o caminho que a informacao faz no sistema?',
               'Mostra o passo a passo: o aluno responde a pergunta e da uma nota; o navegador envia a nota; o servidor calcula a nova data de revisao usando o algoritmo; o banco grava a data e os pontos do aluno; e a tela atualiza.')

    # ==================== PÁGINA 3: ETAPA 3 ====================
    pdf.add_page()

    # 3. Banco de Dados (Onde a informação é salva)
    pdf.add_section_title("3", "Banco de Dados", "Modelado")
    pdf.set_font('Helvetica', '', 10)
    pdf.set_text_color(71, 85, 105)
    pdf.multi_cell(0, 5, 'Organizacao de onde e como as informacoes do site serao guardadas de forma segura.')
    pdf.ln(1.5)
    pdf.add_bullet_point('Estrutura de Tabelas', 'Tabelas separadas para Usuarios, Flashcards e Questoes, garantindo que os dados nao se misturem e que as moedas fiquem salvas sem erros.')
    pdf.add_bullet_point('Regras de Seguranca', 'Uso de regras para limpar o banco de dados. Se uma pergunta for apagada, todas as suas alternativas de resposta sao deletadas junto automaticamente, evitando lixo no sistema.')
    pdf.add_bullet_point('Dados de Progresso', 'Tabela especial que guarda a dificuldade de cada cartao para o aluno, o tempo de sumico da pergunta e a data da proxima revisao.')
    pdf.ln(4)
    
    # Q&As Etapa 3
    pdf.add_qa_divider()
    pdf.add_qa('Por que foi escolhido um banco de dados tradicional (SQL Server) em vez de outros modelos?',
               'Como o sistema mexe com pontos e moedas virtuais de desbloqueio, nao podemos correr o risco de ter saldos errados. O banco relacional garante que as moedas e o XP fiquem sempre corretos e sincronizados.')
    pdf.add_qa('Para que serve o dicionario de dados e a regra de "exclusao em cascata" que colocamos no banco?',
               'O dicionario serve para explicar o significado de cada tabela e coluna. A "exclusao em cascata" apaga as alternativas de uma pergunta automaticamente caso ela seja excluida, evitando dados inuteis e perdidos.')
    pdf.add_qa('Como o banco de dados resolve o caso de uma pergunta poder estar em varias provas, e uma prova ter varias perguntas?',
               'Criamos uma tabela intermediaria de ligacao que guarda apenas a conexao entre o código da prova e o da pergunta. Assim, reaproveitamos as questoes sem precisar duplicar textos no banco de dados.')

    # ==================== PÁGINA 4: ETAPA 4 ====================
    pdf.add_page()

    # 4. Visual do Sistema (UX/UI)
    pdf.add_section_title("4", "Visual do Sistema (UX/UI)", "Modelado")
    pdf.set_font('Helvetica', '', 10)
    pdf.set_text_color(71, 85, 105)
    pdf.multi_cell(0, 5, 'Desenho das telas focado em facilidade de uso, clareza de botoes e visual limpo.')
    pdf.ln(1.5)
    pdf.add_bullet_point('Visual Padronizado', 'Uso de cores e estilos sempre iguais em todas as telas (como tons de azul e cinza) para o site nao parecer baguncado ou confuso.')
    pdf.add_bullet_point('Usuario Modelo', 'Telas desenhadas para jovens de 18 a 20 anos que estao comecando em TI. Criamos uma tela com visual de mapa mental (Mapa Neural) para mostrar a conexao entre as matérias.')
    pdf.add_bullet_point('Desenhos de Tela', 'Desenho visual completo no Figma para as telas de entrar no site, cadastrar usuario, painel principal e cartoes de perguntas.')
    pdf.ln(4)
    
    # Q&As Etapa 4
    pdf.add_qa_divider()
    pdf.add_qa('Como o grupo pensou no visual do sistema para ajudar estudantes que estao comecando em TI?',
               'Nossa persona é um jovem de 18 a 20 anos comecando em TI. Para nao assusta-lo com termos difíceis, criamos uma tela limpa, com botoes grandes e fáceis de achar, e um mapa mental mostrando como as matérias se conectam.')
    pdf.add_qa('O que significa a estratégia de adaptar a tela para celulares ("Desktop-First")?',
               'Desenhamos as telas pensando primeiro no computador, que é o ambiente onde o aluno estuda focado. Depois, criamos regras no CSS para que os elementos se reorganizem sozinhos se o site for aberto no celular.')
    pdf.add_qa('De que maneira o sistema avisa o aluno sobre seu progresso e da controle sobre os estudos?',
               'O aviso ocorre em tempo real: ao responder, o aluno ve seus pontos subirem e a barra de progresso avancar. O controle é garantido permitindo pausar os estudos a qualquer momento ou gerenciar seus cartoes.')

    # ==================== PÁGINA 5: ETAPA 5 ====================
    pdf.add_page()

    # 5. Projeção de Codificação e Arquitetura
    pdf.add_section_title("5", "Organizacao do Codigo", "Modelado")
    pdf.set_font('Helvetica', '', 10)
    pdf.set_text_color(71, 85, 105)
    pdf.multi_cell(0, 5, 'Planejamento de como o codigo do site e do servidor sera organizado de forma limpa.')
    pdf.ln(1.5)
    pdf.add_bullet_point('Estrutura do Servidor', 'Organizacao das conexoes e links de dados do servidor em C# de forma organizada, facilitando mudancas futuras no sistema.')
    pdf.add_bullet_point('Telas Leves', 'Visual do site planejado com codigo de programacao puro (HTML/CSS Vanilla) para carregar rapido e rodar com facilidade em leitores de tela.')
    pdf.add_bullet_point('Calculo de Datas', 'A formula do tempo das perguntas fica em um arquivo isolado. Se quisermos mudar o calculo do tempo no futuro, mudamos apenas esse arquivo sem afetar o resto.')
    pdf.ln(4)
    
    # Q&As Etapa 5
    pdf.add_qa_divider()
    pdf.add_qa('Como os conceitos de heranca e protecao de dados foram aplicados na modelagem de C#?',
               'A heranca economiza codigo ao fazer Aluno e Tutor herdarem o cadastro de Usuario. A protecao (encapsulamento) impede que o saldo de pontos seja alterado de forma direta ou errada, exigindo passar por uma funcao de validacao.')
    pdf.add_qa('Como o codigo foi planejado para ficar facil de mexer e atualizar no futuro?',
               'Separamos o codigo em blocos independentes. A parte do calculo do tempo (algoritmo) fica em um arquivo isolado. Conseguimos alterar a formula matematica no futuro sem correr o risco de quebrar as telas ou o banco.')
    pdf.add_qa('Qual a vantagem de projetar a tela do site com codigo puro (HTML/CSS Vanilla) em vez de usar ferramentas prontas?',
               'O site fica muito mais leve, carrega mais rapido e nos da controle total do visual. Tambem ajuda na acessibilidade, pois o codigo limpo é facilmente interpretado por softwares de leitura de tela para pessoas com deficiencia.')

    # ==================== PÁGINA 6: ETAPA 6 ====================
    pdf.add_page()

    # 6. Planejamento de Testes
    pdf.add_section_title("6", "Planejamento de Testes", "Modelado")
    pdf.set_font('Helvetica', '', 10)
    pdf.set_text_color(71, 85, 105)
    pdf.multi_cell(0, 5, 'Planejamento de como testar o funcionamento e a seguranca do site antes de entregar.')
    pdf.ln(1.5)
    pdf.add_bullet_point('Testes de Acessibilidade', 'Verificacao planejada para navegar no site sem usar o mouse (apenas pelo teclado) e para checar o contraste das cores e tamanho das letras.')
    pdf.add_bullet_point('Testes de Seguranca', 'Simulacoes de tentativas de invasao, como testar se um Aluno comum consegue entrar em paginas exclusivas do Tutor.')
    pdf.ln(4)
    
    # Q&As Etapa 6
    pdf.add_qa_divider()
    pdf.add_qa('Como o grupo planejou testar a acessibilidade e o visual da plataforma?',
               'Planejamos testar a navegacao usando apenas o teclado e leitores de tela para ver se as descricoes sao faladas corretamente, alem de checar o contraste de cores e o tamanho das letras para uma leitura confortavel.')
    pdf.add_qa('Como a equipe planejou testar a formula matematica do tempo das perguntas (SM-2)?',
               'Criamos simulacoes de teste: colocamos notas de dificuldade (de facil a difícil) e conferimos se a formula gerava a data de revisao correta de acordo com a teoria, garantindo que o tempo mude de forma certa.')
    pdf.add_qa('Como planejamos testar se um perfil nao consegue invadir a tela de outro?',
               'Simulamos no servidor um usuario com perfil comum de Aluno tentando acessar rotas que seriam exclusivas do Tutor. Se o servidor barrar a acao e der erro de permissao, o teste de seguranca é considerado aprovado.')

    # ==================== PÁGINA 7: ETAPA 7 ====================
    pdf.add_page()

    # 7. Trabalho em Grupo
    pdf.add_section_title("7", "Metodologia e Trabalho em Grupo", "Modelado")
    pdf.set_font('Helvetica', '', 10)
    pdf.set_text_color(71, 85, 105)
    pdf.multi_cell(0, 5, 'Gestao do projeto baseada em metodologia agil Scrum/Kanban e entregas de valor.')
    pdf.ln(1.5)
    pdf.add_bullet_point('Rituais Scrum', 'Realizacao de rituais reais de planejamento e revisao (Sprint Planning e Sprint Review) registrados nas atas (01 a 10) e facilitados rotativamente (Gabriel e Maciel como Scrum Masters).')
    pdf.add_bullet_point('Manuais de Extensao', 'Elaboracao de manuais tecnicos complementares (Manual de Execucao, Manual Pratico e Manual Tecnico) para formalizar a entrega e o uso da plataforma.')
    pdf.add_bullet_point('Controle de Impedimentos', 'Gerenciamento de conflitos de escopo e ativacao de integracoes reais de simulados do Enade e loja no 4º semestre.')
    pdf.ln(4)
    
    # Q&As Etapa 7
    pdf.add_qa_divider()
    pdf.add_qa('Por que o grupo preferiu criar a monografia em formato de site (HTML/CSS) em vez do arquivo de Word comum?',
               'Permite que todos editem ao mesmo tempo usando o Git, evitando conflitos de versoes. Conseguimos colocar botoes interativos para mudar a visualizacao e configuramos o visual para imprimir exatamente na norma ABNT.')
    pdf.add_qa('Qual a utilidade de padronizar as mensagens de salvamento de arquivos (commits) no historico do projeto?',
               'Usamos mensagens curtas em portugues (como feat(docs) para novos textos). Isso ajuda a entender a evolucao do projeto ao longo dos meses e a achar rapidamente quem e quando alterou um texto ou desenho especifico.')
    pdf.add_qa('Como as reunioes do grupo ajudam a provar a organizacao do trabalho?',
               'Registramos 10 encontros nas atas informais (.planning/meetings/). Elas provam os rituais Scrum semanais, a divisao de tarefas em Kanban, a elaboracao de manuais e a resolucao de barreiras de escopo (simulados/loja).')
    pdf.ln(2.5)

    # Nota informativa de rodapé
    pdf.set_font('Helvetica', 'I', 8)
    pdf.set_text_color(100, 116, 139)
    pdf.multi_cell(0, 4, '*Guia de estudo completo com linguagem simples em: docs/Perguntas_Banca_Nex_TI.md*')

    # Salva o arquivo PDF
    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    pdf.output(output_path)
    print(f"PDF gerado com sucesso em: {output_path}")

if __name__ == "__main__":
    if len(sys.argv) > 1:
        out = sys.argv[1]
    else:
        out = "docs/apresentação.pdf"
    gerar_apresentacao(out)
