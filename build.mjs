/**
 * Build do site: gera HTML estático em dist/.
 * Sem framework e sem dependências — só Node. Cada serviço vira uma URL
 * própria (/servicos/<slug>/) com HTML pronto no primeiro byte.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { SERVICOS } from './src/data/servicos.mjs';
import { SITE } from './src/data/site.mjs';
import { paginaHome } from './src/templates/home.mjs';
import { paginaServico } from './src/templates/servico.mjs';

const raiz = path.dirname(fileURLToPath(import.meta.url));
const dist = path.join(raiz, 'dist');

/** Minificação conservadora: só espaço entre regras, nada de reescrever valores. */
function minificarCss(css) {
  return css
    .replace(/\/\*[\s\S]*?\*\//g, '')
    .replace(/\s*\n\s*/g, '\n')
    .replace(/\n{2,}/g, '\n')
    .replace(/\s*([{}:;,>])\s*/g, '$1')
    .replace(/;}/g, '}')
    .trim();
}

function escreve(rota, html) {
  const destino = rota === '/' ? path.join(dist, 'index.html') : path.join(dist, rota, 'index.html');
  fs.mkdirSync(path.dirname(destino), { recursive: true });
  fs.writeFileSync(destino, html, 'utf8');
  return destino;
}

function copiarPublic() {
  const origem = path.join(raiz, 'public');
  if (!fs.existsSync(origem)) return [];
  const copiados = [];
  (function copiar(de, para) {
    fs.mkdirSync(para, { recursive: true });
    for (const item of fs.readdirSync(de, { withFileTypes: true })) {
      const origemItem = path.join(de, item.name);
      const destinoItem = path.join(para, item.name);
      if (item.isDirectory()) copiar(origemItem, destinoItem);
      else {
        fs.copyFileSync(origemItem, destinoItem);
        copiados.push(path.relative(dist, destinoItem));
      }
    }
  })(origem, dist);
  return copiados;
}

/**
 * Sitemap. O `lastmod` sai da data declarada no serviço (`atualizado`), não da
 * data do build: carimbar tudo como alterado a cada deploy é ruído e o Google
 * passa a ignorar o campo.
 */
function sitemap(rotas) {
  const hoje = new Date().toISOString().slice(0, 10);
  const urls = rotas
    .map(
      (r) => `  <url>
    <loc>${SITE.dominio}${r.rota === '/' ? '/' : `${r.rota}/`}</loc>
    <lastmod>${r.lastmod ?? hoje}</lastmod>
    <changefreq>${r.changefreq ?? 'monthly'}</changefreq>
    <priority>${r.prioridade}</priority>
  </url>`,
    )
    .join('\n');
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;
}

/**
 * robots.txt. Além do Googlebot, liberamos explicitamente os rastreadores que
 * alimentam respostas de IA (ChatGPT, Perplexity, Claude, Gemini). Boa parte
 * das buscas hoje termina numa resposta gerada, e só é citado quem foi lido.
 */
const robots = () => `User-agent: *
Allow: /

# Rastreadores de assistentes de IA — liberados para permitir citação.
User-agent: GPTBot
Allow: /

User-agent: OAI-SearchBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: Claude-SearchBot
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: Applebot-Extended
Allow: /

Sitemap: ${SITE.dominio}/sitemap.xml
`;

const favicon = () =>
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" rx="24" fill="#3E4095"/><path d="M50 20l6 18h19l-15 11 6 18-16-11-16 11 6-18-15-11h19z" fill="#9AD629"/></svg>`;

/**
 * 404 reaproveita a home (o visitante cai numa página útil em vez de um beco),
 * mas com título e description próprios e fora do índice.
 */
const pagina404 = (css) =>
  paginaHome(css, { relativizar: false })
    .replace('<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />',
             '<meta name="robots" content="noindex, follow" />')
    .replace(/<title>[^<]*<\/title>/, '<title>Página não encontrada | Sousa Costa Energia</title>')
    .replace(/<meta name="description" content="[^"]*" \/>/,
             '<meta name="description" content="Esta página não existe. Veja abaixo os serviços disponíveis ou fale conosco no WhatsApp." />');

function build() {
  fs.rmSync(dist, { recursive: true, force: true });
  fs.mkdirSync(dist, { recursive: true });

  // As @font-face vêm primeiro para o navegador iniciar o download das fontes
  // assim que lê o <style> — antes de calcular o layout.
  const css = minificarCss(
    ['src/styles/fontes.css', 'src/styles/estilo.css']
      .map((arquivo) => fs.readFileSync(path.join(raiz, arquivo), 'utf8'))
      .join('\n'),
  );

  const rotas = [{ rota: '/', prioridade: '1.0', changefreq: 'weekly' }];
  escreve('/', paginaHome(css));

  for (const servico of SERVICOS) {
    const rota = `/servicos/${servico.slug}`;
    escreve(rota, paginaServico(servico, css));
    rotas.push({ rota, prioridade: servico.destaque ? '0.9' : '0.8', lastmod: servico.atualizado });
  }

  fs.writeFileSync(path.join(dist, 'sitemap.xml'), sitemap(rotas));
  fs.writeFileSync(path.join(dist, 'robots.txt'), robots());
  fs.writeFileSync(path.join(dist, 'favicon.svg'), favicon());
  fs.writeFileSync(path.join(dist, '404.html'), pagina404(css));
  // Impede o Jekyll do GitHub Pages de reprocessar os arquivos gerados.
  fs.writeFileSync(path.join(dist, '.nojekyll'), '');

  const copiados = copiarPublic();

  console.log(`✓ ${rotas.length} páginas geradas em dist/`);
  for (const r of rotas) console.log(`  ${r.rota === '/' ? '/' : `${r.rota}/`}`);
  console.log(`✓ sitemap.xml, robots.txt, favicon.svg, 404.html`);
  console.log(`✓ ${copiados.length} arquivo(s) de public/: ${copiados.join(', ')}`);
}

build();
