import { ANALYTICS, CONTATO, SITE, wa } from '../data/site.mjs';
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
    'Recarga de veículos elétricos',
    'ABNT NBR 17019',
    'Resolução Técnica 05 do CBMRN',
    'Instalações elétricas de baixa tensão',
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
      <a href="/servicos/carregador-de-veiculo-eletrico-condominio/">Recarga veicular</a>
      <a href="/#como-funciona">Como funciona</a>
      <a href="/#perguntas">Dúvidas</a>
      <a class="btn btn--zap cabecalho__cta nav-mobile"
         href="${wa('Olá! Vim pelo site e preciso de ajuda com um serviço.')}"
         rel="noopener" target="_blank" data-local="topo"><span class="so-desktop">Falar no</span> WhatsApp</a>
    </nav>
  </div>
</header>`;

const rodape = () => `
<footer class="rodape">
  <div class="container">
    <div class="rodape__grid">
      <div>
        <img class="rodape__logo" src="/logo-sousa-costa-branca.png" alt="${esc(SITE.nome)}" width="160" height="42" loading="lazy" />
        <p>Consultor autorizado Cosern. Projetos de energia e condução de processos junto à distribuidora, em todo o Rio Grande do Norte.</p>
        <p>
          <a href="${wa('Olá! Vim pelo site.')}" rel="noopener" target="_blank" data-local="rodape">WhatsApp ${esc(CONTATO.whatsappExibicao)}</a><br />
          <a href="tel:+${esc(CONTATO.whatsappAlt)}">${esc(CONTATO.whatsappAltExibicao)}</a><br />
          <a href="mailto:${esc(CONTATO.email)}">${esc(CONTATO.email)}</a>
        </p>
      </div>
      <div>
        <h4>Serviços</h4>
        <ul>
          ${SERVICOS.slice(0, Math.ceil(SERVICOS.length / 2)).map((s) => `<li><a href="/servicos/${s.slug}/">${esc(s.nav)}</a></li>`).join('\n          ')}
        </ul>
      </div>
      <div>
        <h4>Também fazemos</h4>
        <ul>
          ${SERVICOS.slice(Math.ceil(SERVICOS.length / 2)).map((s) => `<li><a href="/servicos/${s.slug}/">${esc(s.nav)}</a></li>`).join('\n          ')}
        </ul>
      </div>
    </div>
    <p class="rodape__base">
      © ${new Date().getFullYear()} ${esc(SITE.nome)} · Natal/RN · Atendimento nos 167 municípios do Rio Grande do Norte.<br />
      Consultor autorizado Cosern. Atuamos representando o cliente perante a distribuidora, mediante procuração — não somos a Neoenergia Cosern e não respondemos por ela.
      Prazos citados são os previstos na regulação da ANEEL e não constituem garantia de prazo da distribuidora.
    </p>
  </div>
</footer>`;

const botaoZap = (mensagem) => `
<a class="zap" href="${wa(mensagem)}" rel="noopener" target="_blank" data-local="flutuante" aria-label="Falar no WhatsApp">
  ${ZAP}<span>Falar no WhatsApp</span>
</a>`;

/**
 * Monta a página inteira. O CSS entra inline para eliminar requisição
 * bloqueante — a folha toda tem poucos KB e melhora o LCP no 4G.
 */
/**
 * Tags de medição + rastreio de conversão.
 *
 * A conversão que importa aqui é o clique no WhatsApp: é o único momento em
 * que o visitante vira contato. Cada clique dispara um evento com o serviço
 * (pela URL) e o local do botão (topo, hero, faixa, flutuante, rodapé), o que
 * permite ver depois QUAL serviço e QUAL posição da página trazem contato.
 *
 * Devolve string vazia enquanto nenhum ID estiver configurado.
 */
function medicao() {
  const { ga4, adsId, adsConversaoWhatsapp } = ANALYTICS;
  if (!ga4 && !adsId) return '';

  const idCarregador = ga4 || adsId;
  const configs = [ga4 && `gtag('config','${ga4}');`, adsId && `gtag('config','${adsId}');`]
    .filter(Boolean)
    .join('');

  const conversaoAds = adsConversaoWhatsapp
    ? `if(zap){gtag('event','conversion',{send_to:'${adsConversaoWhatsapp}'});}`
    : '';

  return `
<script async src="https://www.googletagmanager.com/gtag/js?id=${idCarregador}"></script>
<script>
window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}
gtag('js',new Date());${configs}
document.addEventListener('click',function(e){
  var a=e.target.closest&&e.target.closest('a');if(!a)return;
  var href=a.getAttribute('href')||'';
  var zap=href.indexOf('wa.me')>-1, email=href.indexOf('mailto:')===0;
  if(!zap&&!email)return;
  var dados={servico:document.body.getAttribute('data-servico')||'home',local:a.getAttribute('data-local')||'outro'};
  gtag('event',zap?'contato_whatsapp':'contato_email',dados);
  ${conversaoAds}
},true);
</script>`;
}

export function pagina({ titulo, descricao, caminho, conteudo, schemas = [], zapMsg, css, relativizar = true }) {
  const url = `${SITE.dominio}${caminho}`;

  /**
   * Prefixo para transformar os caminhos absolutos em relativos, de modo que o
   * site funcione tanto na raiz do domínio próprio quanto sob um subcaminho
   * (ex.: usuario.github.io/repositorio/) enquanto o domínio não está ativo.
   * URLs absolutas (canonical, Open Graph, JSON-LD) continuam apontando para o
   * domínio oficial — são elas que o Google usa.
   */
  const profundidade = caminho === '/' ? 0 : caminho.replace(/^\/|\/$/g, '').split('/').length;
  const base = profundidade === 0 ? './' : '../'.repeat(profundidade);

  const html = `<!doctype html>
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

<link rel="preconnect" href="https://www.googletagmanager.com" crossorigin />
<link rel="dns-prefetch" href="https://www.googletagmanager.com" />
<link rel="icon" href="/favicon.svg" type="image/svg+xml" />
<link rel="apple-touch-icon" href="/logo-sousa-costa.png" />
<link rel="preload" href="/fonts/sora-latin.woff2" as="font" type="font/woff2" crossorigin />
<link rel="preload" href="/fonts/instrument-serif-latin.woff2" as="font" type="font/woff2" crossorigin />
<style>${css}</style>
${schemas.map(jsonLd).join('\n')}
${medicao()}
</head>
<body data-servico="${caminho === '/' ? 'home' : caminho.replace(/^\/servicos\/|\/$/g, '')}">
${cabecalho()}
<main id="conteudo">
${conteudo}
</main>
${rodape()}
${botaoZap(zapMsg ?? 'Olá! Vim pelo site e preciso de ajuda.')}
</body>
</html>`;

  if (!relativizar) return html;

  return html
    .replace(/(href|src)="\/(?!\/)/g, `$1="${base}`)
    .replace(/url\(\/fonts\//g, `url(${base}fonts/`);
}
