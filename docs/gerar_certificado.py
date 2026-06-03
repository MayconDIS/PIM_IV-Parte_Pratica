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
        # Desenha a marca d'água com prompt de terminal ( > _ ) em vetor
        self.set_draw_color(242, 242, 250)
        self.set_line_width(0.4)
        for y in range(15, 205, 30):
            for x in range(15, 285, 40):
                # Desenha o símbolo ">"
                self.line(x, y, x + 3, y + 3)
                self.line(x + 3, y + 3, x, y + 6)
                # Desenha o cursor "_"
                self.line(x + 5, y + 6, x + 9, y + 6)

    def draw_borders(self):
        # Desenha a moldura interna elegante em azul escuro real
        self.set_draw_color(27, 20, 100)
        self.set_line_width(0.3)
        self.rect(8, 8, 281, 194) # Moldura bem fina e externa
        self.rect(10, 10, 277, 190) # Moldura interna principal

def gerar_certificado(nome_aluno, data_conclusao, codigo_autenticidade, output_path):
    pdf = NexTICertificadoPDF(orientation='L', unit='mm', format='A4')
    pdf.set_margins(15, 15, 15)
    pdf.set_auto_page_break(auto=False)
    
    pdf.add_page()
    
    # Marca d'água e bordas
    pdf.draw_watermark()
    pdf.draw_borders()
    
    # 1. Cabeçalho do Logotipo
    pdf.ln(12)
    pdf.set_font('Helvetica', 'B', 24)
    pdf.set_text_color(27, 20, 100) # Azul escuro real
    pdf.cell(0, 10, 'Nex_TI', 0, 1, 'C')
    
    pdf.set_font('Helvetica', 'B', 7.5)
    pdf.set_text_color(110, 118, 129)
    pdf.cell(0, 4, 'EDTECH LEARNING PLATFORM', 0, 1, 'C')
    pdf.ln(12)
    
    # 2. Título "Certificado" grande
    pdf.set_font('Helvetica', 'B', 44)
    pdf.set_text_color(27, 20, 100)
    pdf.cell(0, 18, 'Certificado', 0, 1, 'C')
    pdf.ln(8)
    
    # 3. Corpo de Texto do Certificado
    pdf.set_font('Helvetica', '', 11.5)
    pdf.set_text_color(79, 86, 107)
    pdf.cell(0, 6, 'Certificamos que', 0, 1, 'C')
    pdf.ln(4)
    
    # Nome do Aluno
    pdf.set_font('Helvetica', 'B', 26)
    pdf.set_text_color(0, 0, 0)
    pdf.cell(0, 12, nome_aluno, 0, 1, 'C')
    pdf.ln(6)
    
    # Descrição do curso
    pdf.set_font('Helvetica', '', 11)
    pdf.set_text_color(51, 51, 51)
    pdf.cell(0, 6, 'concluiu com êxito a trilha de aprendizado de estudo ativo na plataforma', 0, 1, 'C')
    
    pdf.set_font('Helvetica', 'B', 13)
    pdf.set_text_color(27, 20, 100)
    pdf.cell(0, 8, 'NEX_TI - EDTECH LEARNING PLATFORM [20 HORAS]', 0, 1, 'C')
    
    pdf.set_font('Helvetica', '', 11)
    pdf.set_text_color(51, 51, 51)
    pdf.cell(0, 6, 'concluiu com êxito a trilha de aprendizado de estudo ativo na plataforma', 0, 1, 'C')
    pdf.cell(0, 6, 'com duração total de 20 horas, realizando todas as atividades', 0, 1, 'C')
    pdf.cell(0, 6, 'e avaliações necessárias, com aproveitamento superior a 80% no Simulado ENADE final.', 0, 1, 'C')
    pdf.ln(8)
    
    # Registro de Conclusão e Código
    pdf.set_font('Helvetica', '', 10.5)
    pdf.set_text_color(51, 51, 51)
    pdf.cell(0, 6, f'A conclusão foi registrada em {data_conclusao}.', 0, 1, 'C')
    
    # Linha do Código do Certificado
    codigo_text = f'Código do Certificado: {codigo_autenticidade}'
    pdf.cell(0, 6, codigo_text, 0, 1, 'C')
    pdf.ln(12)
    
    # 4. Nota Legal
    pdf.set_font('Helvetica', 'I', 7.5)
    pdf.set_text_color(110, 118, 129)
    pdf.cell(0, 4, '*Certificado válido, amparado pela Lei n. 9.394 de Diretrizes e Bases da Educação Nacional', 0, 1, 'C')
    pdf.cell(0, 4, 'Nex_TI Academy EdTech - PIM IV UNIP', 0, 1, 'C')
    pdf.ln(15)
    
    # 5. Assinatura Manuscrita
    # Desenho da Assinatura
    pdf.set_draw_color(27, 20, 100)
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
    pdf.set_font('Helvetica', '', 8.5)
    pdf.set_text_color(79, 86, 107)
    pdf.cell(0, 4, 'Diretoria Nex_TI Academy', 0, 1, 'C')
    
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
