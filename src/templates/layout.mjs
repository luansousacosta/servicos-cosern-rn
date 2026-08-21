import { CONTATO, SITE, wa } from '../data/site.mjs';
import { SERVICOS } from '../data/servicos.mjs';
import { ZAP } from './icones.mjs';

export const esc = (s = '') =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/** Bloco JSON-LD. O conteúdo é nosso, mas escapamos "<" por segurança. */
const jsonLd = (obj) =>
  `<script type="application/ld+json">${JSON.stringify(obj).replace(/</g, '\\u003c')}</script>`;

/** Organização — repetida em todas as páginas para consolidar a entidade. */
export const negocioJsonLd = () => ({
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': `${SITE.dominio}/#negocio`,
  name: SITE.nome,
  description: SITE.descricao,
  url: `${SITE.dominio}/`,
  telephone: `+${CONTATO.whatsapp}`,
  email: CONTATO.email,
  image: `${SITE.dominio}${SITE.logo}`,
  logo: `${SITE.dominio}${SITE.logo}`,
  priceRange: 'Sob consulta',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Natal',
    addressRegion: 'RN',
    addressCountry: 'BR',
  },
  areaServed: {
    '@type': 'State',
    name: 'Rio Grande do Norte',
  },
  knowsAbout: [
    'Geração distribuída',
    'Neoenergia Cosern',
    'Sistema de compensação de energia elétrica',
    'REN ANEEL 1.000/2021',
    'Lei 14.300/2022',
    'Tarifas de energia elétrica',
  ],
  sameAs: ['https://sousacosta.com.br'],
});

const cabecalho = () => `
<header class="cabecalho">
  <div class="container cabecalho__interno">
    <a class="cabecalho__logo" href="/" aria-label="${esc(SITE.nome)} — página inicial">
      <img src="/logo-sousa-costa.png" alt="${esc(SITE.nome)}" width="160" height="40" />
    </a>
    <nav class="cabecalho__nav" aria-label="Navegação principal">
      <a href="/#servicos">Serviços</a>
      <a href="/#como-funciona">Como funciona</a>
      <a href="/#perguntas">Dúvidas</a>
      <a class="btn btn--primario cabecalho__cta nav-mobile"
         href="${wa('Olá! Vim pelo site e preciso de ajuda com um serviço.')}"
         rel="noopener" target="_blank"><span class="so-desktop">Falar no</span> WhatsApp</a>
    </nav>
  </div>
</header>`;

const rodape = () => `
<footer class="rodape">
  <div class="container">
    <div class="rodape__grid">
      <div>
        <img class="rodape__logo" src="/logo-sousa-costa-branca.png" alt="${esc(SITE.nome)}" width="160" height="42" loading="lazy" />
        <p>Consultoria técnica em energia para projetos de geração distribuída e processos junto à distribuidora, em todo o Rio Grande do Norte.</p>
        <p>
          <a href="${wa('Olá! Vim pelo site.')}" rel="noopener" target="_blank">WhatsApp ${esc(CONTATO.whatsappExibicao)}</a><br />
          <a href="tel:+${esc(CONTATO.whatsappAlt)}">${esc(CONTATO.whatsappAltExibicao)}</a><br />
          <a href="mailto:${esc(CONTATO.email)}">${esc(CONTATO.email)}</a>
        </p>
      </div>
      <div>
        <h4>Serviços</h4>
        <ul>
          ${SERVICOS.slice(0, 5).map((s) => `<li><a href="/servicos/${s.slug}/">${esc(s.nav)}</a></li>`).join('\n          ')}
        </ul>
      </div>
      <div>
        <h4>Também fazemos</h4>
        <ul>
          ${SERVICOS.slice(5).map((s) => `<li><a href="/servicos/${s.slug}/">${esc(s.nav)}</a></li>`).join('\n          ')}
        </ul>
      </div>
    </div>
    <p class="rodape__base">
      © ${new Date().getFullYear()} ${esc(SITE.nome)} · Natal/RN · Atendimento nos 167 municípios do Rio Grande do Norte.<br />
      Consultoria independente. Não possuímos vínculo societário com a Neoenergia Cosern; atuamos representando o cliente perante a distribuidora mediante procuração.
      Prazos citados são os previstos na regulação da ANEEL e não constituem garantia de prazo da distribuidora.
    </p>
  </div>
</footer>`;

const botaoZap = (mensagem) => `
<a class="zap" href="${wa(mensagem)}" rel="noopener" target="_blank" aria-label="Falar no WhatsApp">
  ${ZAP}<span>Falar no WhatsApp</span>
</a>`;

/**
 * Monta a página inteira. O CSS entra inline para eliminar requisição
 * bloqueante — a folha toda tem poucos KB e melhora o LCP no 4G.
 */
export function pagina({ titulo, descricao, caminho, conteudo, schemas = [], zapMsg, css }) {
  const url = `${SITE.dominio}${caminho}`;
  return `<!doctype html>
<html lang="pt-BR">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>${esc(titulo)}</title>
<meta name="description" content="${esc(descricao)}" />
<link rel="canonical" href="${url}" />
<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />
<meta name="theme-color" content="#3E4095" />
<meta name="author" content="${esc(SITE.nome)}" />
<meta name="geo.region" content="BR-RN" />
<meta name="geo.placename" content="Natal, Rio Grande do Norte" />

<meta property="og:type" content="website" />
<meta property="og:locale" content="pt_BR" />
<meta property="og:site_name" content="${esc(SITE.nome)}" />
<meta property="og:title" content="${esc(titulo)}" />
<meta property="og:description" content="${esc(descricao)}" />
<meta property="og:url" content="${url}" />
<meta property="og:image" content="${SITE.dominio}${SITE.ogImagem}" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:image:alt" content="Sousa Costa Energia — serviços de energia solar e processos junto à Cosern" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="${esc(titulo)}" />
<meta name="twitter:description" content="${esc(descricao)}" />
<meta name="twitter:image" content="${SITE.dominio}${SITE.ogImagem}" />

<link rel="icon" href="/favicon.svg" type="image/svg+xml" />
<link rel="apple-touch-icon" href="/logo-sousa-costa.png" />
<link rel="preload" href="/fonts/sora-latin.woff2" as="font" type="font/woff2" crossorigin />
<link rel="preload" href="/fonts/instrument-serif-latin.woff2" as="font" type="font/woff2" crossorigin />
<style>${css}</style>
${schemas.map(jsonLd).join('\n')}
</head>
<body>
${cabecalho()}
<main id="conteudo">
${conteudo}
</main>
${rodape()}
${botaoZap(zapMsg ?? 'Olá! Vim pelo site e preciso de ajuda.')}
</body>
</html>`;
}
