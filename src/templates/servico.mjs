import { CONTATO, SITE, wa } from '../data/site.mjs';
import { SERVICOS } from '../data/servicos.mjs';
import { CHECK, CHECK_CLARO, ICONES } from './icones.mjs';
import { esc, negocioJsonLd, pagina } from './layout.mjs';

const porSlug = (slug) => SERVICOS.find((s) => s.slug === slug);

export function paginaServico(s, css) {
  const url = `${SITE.dominio}/servicos/${s.slug}/`;
  const relacionados = (s.relacionados ?? []).map(porSlug).filter(Boolean);

  const conteudo = `
<div class="container">
  <nav class="trilha" aria-label="Você está aqui">
    <a href="/">Início</a> › <a href="/#servicos">Serviços</a> › <span>${esc(s.nav)}</span>
  </nav>
</div>

<section class="hero" style="padding-top:32px">
  <div class="container hero__grid">
    <div>
      <span class="pill">${CHECK} ${esc(s.badge)}</span>
      <h1>${esc(s.h1)}</h1>
      <p class="hero__sub">${esc(s.resumo)}</p>
      <div class="hero__ctas">
        <a class="btn btn--primario" data-local="hero" href="${wa(s.waMsg)}" rel="noopener" target="_blank">Falar no WhatsApp</a>
        <a class="btn btn--contorno" href="#como">Como funciona</a>
      </div>
      <p class="hero__nota">Orçamento sob consulta · Diagnóstico antes da proposta</p>
    </div>

    <aside class="painel" aria-label="O que está incluso">
      <span class="painel__rotulo">O que você recebe</span>
      <div class="painel__lista" style="border-top:0;padding-top:1rem">
        ${s.entregaveis.map((e) => `<div class="painel__item">${CHECK_CLARO}<span>${esc(e)}</span></div>`).join('\n        ')}
      </div>
    </aside>
  </div>
</section>

<section class="secao secao--soft">
  <div class="container grade grade--2">
    <div>
      <span class="rotulo">Para quem é</span>
      <h2>Esse serviço resolve o caso de…</h2>
      <ul class="lista-check" style="margin-top:24px">
        ${s.paraQuem.map((p) => `<li>${CHECK}<span>${esc(p)}</span></li>`).join('\n        ')}
      </ul>
    </div>
    <div>
      <span class="rotulo">Documentos</span>
      <h2>O que você precisa ter em mãos</h2>
      <ul class="lista-check" style="margin-top:24px">
        ${s.documentos.map((d) => `<li>${CHECK}<span>${esc(d)}</span></li>`).join('\n        ')}
      </ul>
    </div>
  </div>
</section>

<section class="secao" id="como">
  <div class="container">
    <span class="rotulo">Como funciona</span>
    <h2>O caminho, etapa por etapa</h2>
    <ol class="passos" style="margin-top:40px;max-width:860px">
      ${s.passos
        .map((p) => `<li><div><h3>${esc(p.t)}</h3><p>${esc(p.d)}</p></div></li>`)
        .join('\n      ')}
    </ol>
    <div class="aviso" style="margin-top:40px;max-width:860px">
      <strong>Sobre prazos:</strong> ${esc(s.prazoNota)}
    </div>
  </div>
</section>

<section class="secao secao--soft">
  <div class="container" style="max-width:820px">
    <span class="rotulo">Dúvidas frequentes</span>
    <h2>Sobre ${esc(s.nav.toLowerCase())}</h2>
    <div class="faq" style="margin-top:32px">
      ${s.faq.map((f) => `<details><summary>${esc(f.p)}</summary><p>${esc(f.r)}</p></details>`).join('\n      ')}
    </div>
  </div>
</section>

${
  relacionados.length
    ? `<section class="secao">
  <div class="container">
    <span class="rotulo">Relacionados</span>
    <h2>Quem procura isso também precisa de</h2>
    <div class="grade grade--3" style="margin-top:40px">
      ${relacionados
        .map(
          (r) => `<article class="card">
        <div class="card__icone">${ICONES[r.icone] ?? ICONES.sol}</div>
        <h3><a href="/servicos/${r.slug}/">${esc(r.h1)}</a></h3>
        <p>${esc(r.chamada)}</p>
        <a class="card__link" href="/servicos/${r.slug}/">Ver o serviço →</a>
      </article>`,
        )
        .join('\n      ')}
    </div>
  </div>
</section>`
    : ''
}

<section class="faixa-cta">
  <div class="container">
    <h2>Descreva o seu caso e receba um <span class="destaque">diagnóstico</span></h2>
    <p>
      Mande a fatura ou a documentação que você já tem. Respondemos dizendo o que dá para fazer,
      o que falta e como conduzimos — sem compromisso.
    </p>
    <div class="faixa-cta__acoes">
      <a class="btn btn--lime" data-local="faixa" href="${wa(s.waMsg)}" rel="noopener" target="_blank">
        Falar no WhatsApp ${esc(CONTATO.whatsappExibicao)}
      </a>
      <a class="btn btn--claro" data-local="faixa" href="mailto:${esc(CONTATO.email)}?subject=${encodeURIComponent(s.nav)}">Enviar e-mail</a>
    </div>
  </div>
</section>`;

  const schemas = [
    negocioJsonLd(),
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      '@id': `${url}#servico`,
      name: s.h1,
      description: s.descricao,
      serviceType: s.nav,
      url,
      provider: { '@id': `${SITE.dominio}/#negocio` },
      areaServed: { '@type': 'State', name: 'Rio Grande do Norte' },
      audience: { '@type': 'Audience', audienceType: 'Consumidores e empresas atendidos pela Neoenergia Cosern' },
      offers: {
        '@type': 'Offer',
        availability: 'https://schema.org/InStock',
        priceCurrency: 'BRL',
        priceSpecification: {
          '@type': 'PriceSpecification',
          priceCurrency: 'BRL',
          description: 'Orçamento sob consulta',
        },
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: `Escopo — ${s.nav}`,
        itemListElement: s.entregaveis.map((e) => ({
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: e },
        })),
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: s.faq.map((f) => ({
        '@type': 'Question',
        name: f.p,
        acceptedAnswer: { '@type': 'Answer', text: f.r },
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Início', item: `${SITE.dominio}/` },
        { '@type': 'ListItem', position: 2, name: 'Serviços', item: `${SITE.dominio}/#servicos` },
        { '@type': 'ListItem', position: 3, name: s.nav, item: url },
      ],
    },
  ];

  return pagina({
    titulo: s.titulo,
    descricao: s.descricao,
    caminho: `/servicos/${s.slug}/`,
    conteudo,
    schemas,
    css,
    zapMsg: s.waMsg,
  });
}
