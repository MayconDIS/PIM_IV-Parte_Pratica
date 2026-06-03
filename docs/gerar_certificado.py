import os
import sys
from datetime import datetime

# Tenta importar fpdf2, se falhar, tenta instalar
try:
    from fpdf import FPDF
except ImportError:
    print("FPDF2 não está instalado. Tentando instalar via pip...")
    import subprocess
    subprocess.check_call([sys.executable, "-m", "pip", "install", "fpdf2"])
    from fpdf import FPDF

class NexTICertificadoPDF(FPDF):
    def draw_watermark(self):
        # Desenha a marca d'água com padrão de grade cibernética fina e sutil
        self.set_draw_color(15, 35, 40)
        self.set_line_width(0.15)
        # Grade horizontal
        for y in range(12, 198, 15):
            self.line(10, y, 287, y)
        # Grade vertical
        for x in range(12, 285, 15):
            self.line(x, 10, x, 200)

        # Desenha símbolos discretos de código ( > _ ) em vetor
        self.set_draw_color(25, 50, 55)
        self.set_line_width(0.3)
        for y in range(25, 190, 45):
            for x in range(30, 270, 60):
                # Desenha o símbolo ">"
                self.line(x, y, x + 2.5, y + 2.5)
                self.line(x + 2.5, y + 2.5, x, y + 5)
                # Desenha o cursor "_"
                self.line(x + 4, y + 5, x + 7, y + 5)

    def draw_borders(self):
        # Desenha a moldura interna elegante com tema tecnológico neon
        # Moldura externa em Cyan Neon
        self.set_draw_color(0, 230, 230)
        self.set_line_width(0.5)
        self.rect(8, 8, 281, 194) 
        
        # Moldura interna em Roxo Neon
        self.set_draw_color(138, 43, 226)
        self.set_line_width(0.35)
        self.rect(10, 10, 277, 190)

    def draw_circuits(self):
        # Desenha trilhas de circuitos nos quatro cantos do certificado
        self.set_draw_color(0, 230, 230) # Cian
        self.set_fill_color(0, 230, 230)
        self.set_line_width(0.35)
        
        # Canto Superior Esquerdo
        self.line(12, 12, 30, 12)
        self.line(12, 12, 12, 30)
        self.line(12, 12, 20, 20)
        self.ellipse(29, 11, 2, 2, 'F')
        self.ellipse(11, 29, 2, 2, 'F')
        self.ellipse(19, 19, 2, 2, 'F')
        
        # Canto Superior Direito
        self.set_draw_color(138, 43, 226) # Roxo
        self.set_fill_color(138, 43, 226)
        self.line(285, 12, 267, 12)
        self.line(285, 12, 285, 30)
        self.line(285, 12, 277, 20)
        self.ellipse(266, 11, 2, 2, 'F')
        self.ellipse(284, 29, 2, 2, 'F')
        self.ellipse(276, 19, 2, 2, 'F')
        
        # Canto Inferior Esquerdo
        self.set_draw_color(138, 43, 226) # Roxo
        self.set_fill_color(138, 43, 226)
        self.line(12, 198, 30, 198)
        self.line(12, 198, 12, 180)
        self.line(12, 198, 20, 190)
        self.ellipse(29, 197, 2, 2, 'F')
        self.ellipse(11, 179, 2, 2, 'F')
        self.ellipse(19, 189, 2, 2, 'F')
        
        # Canto Inferior Direito
        self.set_draw_color(0, 230, 230) # Cian
        self.set_fill_color(0, 230, 230)
        self.line(285, 198, 267, 198)
        self.line(285, 198, 285, 180)
        self.line(285, 198, 277, 190)
        self.ellipse(266, 197, 2, 2, 'F')
        self.ellipse(284, 179, 2, 2, 'F')
        self.ellipse(276, 189, 2, 2, 'F')

    def draw_barcode(self, x, y, height=8):
        # Desenha um código de barras estético estilizado no rodapé
        self.set_fill_color(0, 230, 230)
        widths = [0.4, 0.8, 1.2, 0.4, 1.6, 0.4, 0.8, 1.2, 0.4, 0.4, 1.6, 0.8, 0.4, 1.2, 0.8]
        curr_x = x
        for i, w in enumerate(widths):
            if i % 2 == 0:
                self.rect(curr_x, y, w, height, 'F')
            curr_x += w + 0.4

def gerar_certificado(nome_aluno, data_conclusao, codigo_autenticidade, output_path):
    pdf = NexTICertificadoPDF(orientation='L', unit='mm', format='A4')
    pdf.set_margins(15, 15, 15)
    pdf.set_auto_page_break(auto=False)
    
    pdf.add_page()
    
    # Preenchimento de Fundo Escuro (Slate 950 / #0b0c10)
    pdf.set_fill_color(11, 12, 16)
    pdf.rect(0, 0, 297, 210, 'F')
    
    # Setup das fontes personalizadas do Google Fonts
    font_dir = "docs/fonts"
    os.makedirs(font_dir, exist_ok=True)
    
    local_fonts = {
        "Orbitron": os.path.join(font_dir, "Orbitron-Variable.ttf"),
        "SpaceGrotesk": os.path.join(font_dir, "SpaceGrotesk-Variable.ttf"),
        "FiraCode": os.path.join(font_dir, "FiraCode-Variable.ttf")
    }
    
    urls = {
        "Orbitron": "https://github.com/google/fonts/raw/main/ofl/orbitron/Orbitron%5Bwght%5D.ttf",
        "SpaceGrotesk": "https://github.com/google/fonts/raw/main/ofl/spacegrotesk/SpaceGrotesk%5Bwght%5D.ttf",
        "FiraCode": "https://github.com/google/fonts/raw/main/ofl/firacode/FiraCode%5Bwght%5D.ttf"
    }
    
    loaded_fonts = {}
    import urllib.request
    for name, path in local_fonts.items():
        if not os.path.exists(path):
            print(f"Baixando fonte {name} para o certificado...")
            try:
                req = urllib.request.Request(urls[name], headers={'User-Agent': 'Mozilla/5.0'})
                with urllib.request.urlopen(req) as response, open(path, 'wb') as out_file:
                    out_file.write(response.read())
                print(f"Fonte {name} baixada!")
            except Exception as e:
                print(f"Erro ao baixar {name}: {e}. Tentando usar fallback local ou padrao.")
                
        if os.path.exists(path):
            try:
                if name == "Orbitron":
                    pdf.add_font("Orbitron", style="B", fname=path)
                    loaded_fonts["Orbitron"] = True
                elif name == "SpaceGrotesk":
                    pdf.add_font("SpaceGrotesk", style="", fname=path)
                    # Registra a mesma variable font para Bold
                    pdf.add_font("SpaceGrotesk", style="B", fname=path)
                    loaded_fonts["SpaceGrotesk"] = True
                    loaded_fonts["SpaceGroteskBD"] = True
                elif name == "FiraCode":
                    pdf.add_font("FiraCode", style="", fname=path)
                    loaded_fonts["FiraCode"] = True
            except Exception as e:
                print(f"Erro ao carregar fonte {name}: {e}")

    # Definição das fontes (com fallbacks robustos)
    font_title = "Orbitron" if loaded_fonts.get("Orbitron") else "Helvetica"
    font_body = "SpaceGrotesk" if loaded_fonts.get("SpaceGrotesk") else "Helvetica"
    font_mono = "FiraCode" if loaded_fonts.get("FiraCode") else "Courier"
    
    # Marca d'água e bordas
    pdf.draw_watermark()
    pdf.draw_borders()
    pdf.draw_circuits()
    
    # Elementos Estéticos de Console nos cantos (Criatividade Tecnológica)
    pdf.set_text_color(25, 65, 75)
    if loaded_fonts.get("FiraCode"):
        pdf.set_font("FiraCode", "", 7)
    else:
        pdf.set_font("Courier", "", 7)
    pdf.text(15, 18, 'import { learning } from "nexti";')
    pdf.text(15, 22, 'const status = "COMPLETED";')
    pdf.text(240, 18, '// system_level: 05')
    pdf.text(240, 22, '// status: 200 OK')
    
    # 1. Cabeçalho do Logotipo
    pdf.ln(12)
    pdf.set_font(font_title, 'B', 24)
    pdf.set_text_color(0, 230, 230) # Cian tecnológico
    pdf.cell(0, 10, 'Nex_TI', 0, 1, 'C')
    
    pdf.set_font(font_mono, '', 7.5)
    pdf.set_text_color(110, 118, 129) # Cinza de suporte
    pdf.cell(0, 4, 'EDTECH LEARNING PLATFORM', 0, 1, 'C')
    pdf.ln(10)
    
    # 2. Título "Certificado" grande
    pdf.set_font(font_title, 'B', 42)
    pdf.set_text_color(255, 255, 255) # Branco no dark mode
    pdf.cell(0, 18, 'CERTIFICADO', 0, 1, 'C')
    pdf.ln(8)
    
    # 3. Corpo de Texto do Certificado
    pdf.set_font(font_body, '', 11.5)
    pdf.set_text_color(139, 146, 165) # Cinza azulado claro
    pdf.cell(0, 6, 'Certificamos que', 0, 1, 'C')
    pdf.ln(4)
    
    # Nome do Aluno
    pdf.set_font(font_body, 'B', 28)
    pdf.set_text_color(255, 255, 255) # Branco com destaque
    pdf.cell(0, 12, nome_aluno, 0, 1, 'C')
    pdf.ln(6)
    
    # Descrição do curso
    pdf.set_font(font_body, '', 11)
    pdf.set_text_color(197, 198, 199) # Cinza claro
    pdf.cell(0, 6, 'concluiu com êxito a trilha de aprendizado de estudo ativo na plataforma', 0, 1, 'C')
    
    pdf.set_font(font_title, 'B', 13)
    pdf.set_text_color(0, 230, 230) # Cian tecnológico
    pdf.cell(0, 8, 'NEX_TI - EDTECH LEARNING PLATFORM [20 HORAS]', 0, 1, 'C')
    
    pdf.set_font(font_body, '', 11)
    pdf.set_text_color(197, 198, 199) # Cinza claro
    pdf.cell(0, 6, 'com duração total de 20 horas, realizando todas as atividades', 0, 1, 'C')
    pdf.cell(0, 6, 'e avaliações necessárias, com aproveitamento superior a 80% no Simulado ENADE final.', 0, 1, 'C')
    pdf.ln(8)
    
    # Registro de Conclusão e Código
    pdf.set_font(font_body, '', 10)
    pdf.set_text_color(197, 198, 199) # Cinza claro
    pdf.cell(0, 6, f'A conclusão foi registrada em {data_conclusao}.', 0, 1, 'C')
    
    # Linha do Código do Certificado
    pdf.set_font(font_mono, '', 9)
    pdf.set_text_color(0, 230, 230)
    codigo_text = f'Código do Certificado: {codigo_autenticidade}'
    pdf.cell(0, 6, codigo_text, 0, 1, 'C')
    pdf.ln(8)
    
    # Código de barras estético
    pdf.draw_barcode(131, 150)
    pdf.ln(10)
    
    # 4. Nota Legal
    pdf.set_font('Helvetica', 'I', 7.5)
    pdf.set_text_color(110, 118, 129)
    pdf.cell(0, 4, '*Certificado válido, amparado pela Lei n. 9.394 de Diretrizes e Bases da Educação Nacional', 0, 1, 'C')
    pdf.cell(0, 4, 'Nex_TI Academy EdTech - PIM IV UNIP', 0, 1, 'C')
    pdf.ln(12)
    
    # 5. Assinatura Manuscrita
    # Desenho da Assinatura
    pdf.set_draw_color(0, 230, 230) # Cian brilhante
    pdf.set_line_width(0.35)
    
    # Rabisco simulando assinatura
    pdf.line(125, 172, 130, 165)
    pdf.line(130, 165, 135, 175)
    pdf.line(135, 175, 140, 167)
    pdf.line(140, 167, 150, 171)
    pdf.line(150, 171, 165, 162)
    pdf.line(165, 162, 180, 169)
    
    # Linha de suporte
    pdf.line(110, 175, 187, 175)
    
    # Cargo
    pdf.set_font(font_body, '', 8)
    pdf.set_text_color(139, 146, 165) # Cinza azulado claro
    pdf.cell(0, 4, 'Diretoria Nex_TI Academy', 0, 1, 'C')
    
    # Hash SHA256 criptográfico para assinatura digital premium
    import hashlib
    hash_str = hashlib.sha256(f"{nome_aluno}-{codigo_autenticidade}".encode()).hexdigest()[:24]
    pdf.set_font(font_mono, '', 5.5)
    pdf.set_text_color(25, 65, 75)
    pdf.text(118, 182, f"SHA256: {hash_str.upper()}...")
    
    # Salva o arquivo PDF
    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    pdf.output(output_path)
    print(f"PDF do Certificado gerado com sucesso em: {output_path}")

if __name__ == "__main__":
    # Parametrização dinâmica
    nome = sys.argv[1] if len(sys.argv) > 1 else "Maycon Silva"
    
    # Formatação de data atual por extenso por default
    meses = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", 
             "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"]
    agora = datetime.now()
    data_extenso_default = f"{agora.day} de {meses[agora.month - 1]} de {agora.year}"
    
    data = sys.argv[2] if len(sys.argv) > 2 else data_extenso_default
    
    # Gera um código determinístico simulado
    letra_hash = abs(hash(nome + data)) % 100000
    codigo_default = f"NEX-A18C-{letra_hash:05d}-{agora.strftime('%d%m%Y')}"
    codigo = sys.argv[3] if len(sys.argv) > 3 else codigo_default
    
    output = sys.argv[4] if len(sys.argv) > 4 else "docs/certificado_modelo.pdf"
    
    gerar_certificado(nome, data, codigo, output)
