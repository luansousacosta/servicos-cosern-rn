/**
 * Verificação de SEO técnico do dist/.
 *
 * Roda depois do build e falha (exit 1) quando encontra o tipo de erro que só
 * aparece semanas depois no Search Console: título fora do limite de exibição,
 * description duplicada, JSON-LD inválido, link interno quebrado, imagem sem alt.
 *
 *   node build.mjs && node verificar.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const raiz = path.dirname(fileURLToPath(import.meta.url));
const dist = path.join(raiz, 'dist');

const LIMITE_TITULO = 60;
const LIMITE_DESCRICAO = 156;

const erros = [];
const avisos = [];
const falha = (pagina, msg) => erros.push(`${pagina}: ${msg}`);
const aviso = (pagina, msg) => avisos.push(`${pagina}: ${msg}`);

function listarHtml(dir) {
  const saida = [];
  for (const item of fs.readdirSync(dir, { withFileTypes: true })) {
    const alvo = path.join(dir, item.name);
    if (item.isDirectory()) saida.push(...listarHtml(alvo));
    else if (item.name.endsWith('.html')) saida.push(alvo);
  }
  return saida;
}

const arquivos = listarHtml(dist);
const titulos = new Map();
const descricoes = new Map();

for (const arquivo of arquivos) {
  const html = fs.readFileSync(arquivo, 'utf8');
  const rota = `/${path.relative(dist, arquivo).replace(/index\.html$/, '')}`;
  const indexavel = !/<meta name="robots" content="noindex/.test(html);

  const titulo = html.match(/<title>([^<]*)<\/title>/)?.[1] ?? '';
  const descricao = html.match(/<meta name="description" content="([^"]*)"/)?.[1] ?? '';

  if (!titulo) falha(rota, 'sem <title>');
  else if (titulo.length > LIMITE_TITULO) falha(rota, `título com ${titulo.length} caracteres (limite ${LIMITE_TITULO}): "${titulo}"`);

  if (!descricao) falha(rota, 'sem meta description');
  else if (descricao.length > LIMITE_DESCRICAO) falha(rota, `description com ${descricao.length} caracteres (limite ${LIMITE_DESCRICAO})`);
  else if (descricao.length < 70) aviso(rota, `description curta (${descricao.length} caracteres) — sobra espaço no resultado`);

  if (indexavel) {
    if (titulos.has(titulo)) falha(rota, `título duplicado com ${titulos.get(titulo)}`);
    else titulos.set(titulo, rota);
    if (descricoes.has(descricao)) falha(rota, `description duplicada com ${descricoes.get(descricao)}`);
    else descricoes.set(descricao, rota);
  }

  const h1 = html.match(/<h1[^>]*>/g) ?? [];
  if (h1.length !== 1) falha(rota, `${h1.length} elementos <h1> (esperado exatamente 1)`);

  // Canonical precisa apontar para a própria URL. Canonical cruzado é a causa
  // técnica clássica de "detectada, mas não indexada": o Google trata a página
  // como duplicata de outra e não a indexa.
  const canonical = html.match(/<link rel="canonical" href="([^"]*)"/)?.[1];
  if (indexavel) {
    const esperado = `https://servicos.sousacosta.com.br${rota}`;
    if (!canonical) falha(rota, 'sem canonical');
    else if (!canonical.startsWith('https://')) falha(rota, `canonical não é absoluto: ${canonical}`);
    else if (canonical !== esperado) falha(rota, `canonical aponta para outra URL: ${canonical} (esperado ${esperado})`);
  }
  if (!/<meta property="og:image"/.test(html)) falha(rota, 'sem og:image');
  if (!/<html lang="pt-BR">/.test(html)) falha(rota, 'sem lang="pt-BR"');

  // JSON-LD precisa ser JSON válido e declarar @type.
  const blocos = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
  if (!blocos.length) falha(rota, 'sem JSON-LD');
  for (const [, corpo] of blocos) {
    try {
      const dado = JSON.parse(corpo.replace(/\\u003c/g, '<'));
      if (!dado['@type']) falha(rota, 'bloco JSON-LD sem @type');
    } catch (e) {
      falha(rota, `JSON-LD inválido: ${e.message}`);
    }
  }

  // Imagens sem alt não aparecem no Google Imagens e quebram a leitura de tela.
  for (const [, tag] of html.matchAll(/<img\s([^>]*)>/g)) {
    if (!/\balt="/.test(tag)) falha(rota, `<img> sem alt: ${tag.slice(0, 60)}`);
  }

  // Links internos precisam existir em disco.
  for (const [, bruto] of html.matchAll(/href="([^"]+)"/g)) {
    if (/^(https?:|mailto:|tel:|#)/.test(bruto)) continue;
    const href = bruto.split('#')[0];
    if (!href) continue;
    const base = path.dirname(arquivo);
    const destino = href.startsWith('/') ? path.join(dist, href) : path.resolve(base, href);
    const candidatos = [destino, path.join(destino, 'index.html')];
    if (!candidatos.some((c) => fs.existsSync(c))) falha(rota, `link interno quebrado: ${href}`);
  }
}

// Sitemap: toda página indexável precisa estar listada, e só elas.
const sitemap = fs.readFileSync(path.join(dist, 'sitemap.xml'), 'utf8');
const noSitemap = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
const esperadas = arquivos
  .filter((a) => !/<meta name="robots" content="noindex/.test(fs.readFileSync(a, 'utf8')))
  .map((a) => `/${path.relative(dist, a).replace(/index\.html$/, '')}`);
for (const rota of esperadas) {
  if (!noSitemap.some((u) => u.endsWith(rota))) falha(rota, 'ausente do sitemap.xml');
}
if (noSitemap.length !== esperadas.length) {
  falha('sitemap.xml', `${noSitemap.length} URLs para ${esperadas.length} páginas indexáveis`);
}

console.log(`Verificadas ${arquivos.length} páginas (${noSitemap.length} no sitemap).`);
for (const a of avisos) console.log(`  aviso  ${a}`);
if (erros.length) {
  console.error(`\n${erros.length} erro(s):`);
  for (const e of erros) console.error(`  ✗ ${e}`);
  process.exit(1);
}
console.log('✓ Sem erros de SEO técnico.');
