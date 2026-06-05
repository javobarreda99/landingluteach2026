import http.server, os

class NoCacheHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        super().end_headers()
    def log_message(self, fmt, *args):
        pass  # silence request logs

os.chdir(os.path.dirname(os.path.abspath(__file__)))
print("Serving at http://localhost:3000 — press Ctrl+C to stop")
http.server.HTTPServer(('', 3000), NoCacheHandler).serve_forever()
