/** Servidor local para conferir o site gerado: npm run dev → http://localhost:5180 */
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const dist = path.join(path.dirname(fileURLToPath(import.meta.url)), 'dist');
const PORTA = Number(process.env.PORTA ?? 5180);

const TIPOS = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.xml': 'application/xml; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
};

http
  .createServer((req, res) => {
    const rota = decodeURIComponent((req.url ?? '/').split('?')[0]);
    let arquivo = path.join(dist, rota);
    if (!path.extname(arquivo)) arquivo = path.join(arquivo, 'index.html');

    if (!arquivo.startsWith(dist) || !fs.existsSync(arquivo)) {
      const p404 = path.join(dist, '404.html');
      res.writeHead(404, { 'Content-Type': TIPOS['.html'] });
      return res.end(fs.existsSync(p404) ? fs.readFileSync(p404) : 'não encontrado');
    }

    res.writeHead(200, { 'Content-Type': TIPOS[path.extname(arquivo)] ?? 'application/octet-stream' });
    res.end(fs.readFileSync(arquivo));
  })
  .listen(PORTA, () => console.log(`Site em http://localhost:${PORTA}`));
