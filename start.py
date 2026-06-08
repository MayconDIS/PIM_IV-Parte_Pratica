"""
╔══════════════════════════════════════════════════════╗
║   Nex_TI — Launcher (Backend + Frontend)             ║
║   Executa: dotnet run (porta 5000)                   ║
║            HTTP Server  (porta 5501)                 ║
║   Encerrar: Ctrl+C                                   ║
╚══════════════════════════════════════════════════════╝
"""

import subprocess
import http.server
import threading
import webbrowser
import signal
import socket
import time
import sys
import os

# ── Configurações ──────────────────────────────────────
BACKEND_DIR = os.path.join(os.path.dirname(os.path.abspath(__file__)), "backend")
FRONTEND_DIR = os.path.dirname(os.path.abspath(__file__))
FRONTEND_PORT = 5501
BACKEND_PORT = 5000
BACKEND_URL = f"http://localhost:{BACKEND_PORT}"
FRONTEND_URL = f"http://localhost:{FRONTEND_PORT}"

# ── Cores para o terminal ─────────────────────────────
class Cor:
    CYAN    = "\033[96m"
    VERDE   = "\033[92m"
    AMARELO = "\033[93m"
    VERMELHO= "\033[91m"
    BOLD    = "\033[1m"
    RESET   = "\033[0m"

def log(emoji, msg, cor=Cor.RESET):
    print(f"  {cor}{emoji}  {msg}{Cor.RESET}")

def banner():
    print(f"""
{Cor.CYAN}{Cor.BOLD}  ╔══════════════════════════════════════════════════╗
  ║          N e x _ T I   —   L a u n c h e r       ║
  ╚══════════════════════════════════════════════════╝{Cor.RESET}
""")

# ── Verificar se uma porta está ocupada ────────────────
def porta_ocupada(porta):
    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
        return s.connect_ex(("localhost", porta)) == 0

# ── Backend (.NET) ─────────────────────────────────────
processo_backend = None

def iniciar_backend():
    global processo_backend
    if porta_ocupada(BACKEND_PORT):
        log("⚠️", f"Porta {BACKEND_PORT} já está em uso. O backend pode já estar rodando.", Cor.AMARELO)
        return

    log("🔧", f"Compilando e iniciando o backend em {BACKEND_URL} ...", Cor.CYAN)

    processo_backend = subprocess.Popen(
        ["dotnet", "run", "--launch-profile", "http"],
        cwd=BACKEND_DIR,
        stdout=subprocess.PIPE,
        stderr=subprocess.STDOUT,
        text=True,
        encoding="utf-8",
        errors="replace",
    )

    # Thread para ler e exibir os logs do backend
    def stream_logs():
        if processo_backend and processo_backend.stdout:
            for linha in processo_backend.stdout:
                linha = linha.rstrip()
                if not linha:
                    continue
                # Destacar quando o backend ficar pronto
                if "Now listening on" in linha:
                    log("✅", f"Backend online: {BACKEND_URL}", Cor.VERDE)
                elif "Application started" in linha:
                    log("🚀", "Backend pronto para receber requisições!", Cor.VERDE)
                elif "error" in linha.lower() or "fail" in linha.lower():
                    log("❌", linha, Cor.VERMELHO)
                else:
                    print(f"     {Cor.RESET}[backend] {linha}{Cor.RESET}")

    thread_logs = threading.Thread(target=stream_logs, daemon=True)
    thread_logs.start()

# ── Aguardar backend responder ─────────────────────────
def aguardar_backend(timeout=30):
    log("⏳", "Aguardando o backend ficar pronto...", Cor.AMARELO)
    inicio = time.time()
    while time.time() - inicio < timeout:
        if porta_ocupada(BACKEND_PORT):
            return True
        time.sleep(1)
    return False

# ── Frontend (HTTP Server) ─────────────────────────────
servidor_frontend = None

def iniciar_frontend():
    global servidor_frontend

    if porta_ocupada(FRONTEND_PORT):
        log("⚠️", f"Porta {FRONTEND_PORT} já está em uso. O frontend pode já estar rodando.", Cor.AMARELO)
        return

    handler = http.server.SimpleHTTPRequestHandler

    class SilentHandler(handler):
        """Suprime os logs e garante charset UTF-8 nos arquivos de texto."""
        extensions_map = {
            **handler.extensions_map,
            '.js': 'text/javascript; charset=utf-8',
            '.mjs': 'text/javascript; charset=utf-8',
            '.css': 'text/css; charset=utf-8',
            '.html': 'text/html; charset=utf-8',
            '.json': 'application/json; charset=utf-8',
            '.svg': 'image/svg+xml; charset=utf-8',
        }
        def log_message(self, format, *args):
            pass

    os.chdir(FRONTEND_DIR)
    servidor_frontend = http.server.HTTPServer(("", FRONTEND_PORT), SilentHandler)

    thread_frontend = threading.Thread(target=servidor_frontend.serve_forever, daemon=True)
    thread_frontend.start()

    log("✅", f"Frontend online: {FRONTEND_URL}", Cor.VERDE)

# ── Shutdown gracioso ──────────────────────────────────
def encerrar(sig=None, frame=None):
    print()
    log("🛑", "Encerrando Nex_TI...", Cor.AMARELO)

    if servidor_frontend:
        servidor_frontend.shutdown()
        log("✔️", "Frontend encerrado.", Cor.VERDE)

    if processo_backend:
        processo_backend.terminate()
        try:
            processo_backend.wait(timeout=5)
        except subprocess.TimeoutExpired:
            processo_backend.kill()
        log("✔️", "Backend encerrado.", Cor.VERDE)

    log("👋", "Até a próxima, dev!", Cor.CYAN)
    sys.exit(0)

signal.signal(signal.SIGINT, encerrar)
signal.signal(signal.SIGTERM, encerrar)

# ── Main ───────────────────────────────────────────────
if __name__ == "__main__":
    banner()

    # 1. Iniciar o backend
    iniciar_backend()

    # 2. Aguardar o backend responder
    if not aguardar_backend():
        log("❌", "Timeout: o backend não respondeu a tempo.", Cor.VERMELHO)
        log("💡", "Verifique se o .NET SDK está instalado e o SQL Server LocalDB está ativo.", Cor.AMARELO)
        encerrar()

    # 3. Iniciar o frontend
    iniciar_frontend()

    # 4. Abrir no navegador
    log("🌐", f"Abrindo navegador em {FRONTEND_URL} ...", Cor.CYAN)
    webbrowser.open(FRONTEND_URL)

    print(f"""
{Cor.CYAN}{Cor.BOLD}  ┌──────────────────────────────────────────────────┐
  │  🟢  Nex_TI está rodando!                        │
  │                                                    │
  │  Backend:   {BACKEND_URL:<36s} │
  │  Frontend:  {FRONTEND_URL:<36s} │
  │                                                    │
  │  Pressione Ctrl+C para encerrar tudo.             │
  └──────────────────────────────────────────────────┘{Cor.RESET}
""")

    # Manter o script vivo até Ctrl+C
    try:
        while True:
            time.sleep(1)
    except KeyboardInterrupt:
        encerrar()
