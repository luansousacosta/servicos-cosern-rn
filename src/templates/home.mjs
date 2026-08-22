import { CIDADES_ATENDIDAS, CONTATO, PROVA, SITE, wa } from '../data/site.mjs';
import { SERVICOS } from '../data/servicos.mjs';
import { CHECK, CHECK_CLARO, ICONES } from './icones.mjs';
import { esc, negocioJsonLd, pagina } from './layout.mjs';

const FAQ_HOME = [
  {
    p: 'Vocês são da Cosern?',
    r: 'Somos consultor autorizado Cosern, o que nos habilita a conduzir processos junto à distribuidora. Não somos a Cosern e não falamos em nome dela: atuamos representando você, mediante procuração, para protocolar, acompanhar prazos e responder exigências.',
  },
  {
    p: 'Atendem em todo o Rio Grande do Norte?',
    r: 'Sim. A maior parte dos serviços é documental e roda à distância, o que permite atender os 167 municípios do RN. Quando o caso exige inspeção em campo, programamos a visita.',
  },
  {
    p: 'Quanto custa?',
    r: 'Orçamento sob consulta. O valor depende do porte da unidade, da complexidade do processo e do que já existe pronto. A primeira conversa, para entender o caso e dizer se há solução, não é cobrada.',
  },
  {
    p: 'Atendem projeto instalado por outra empresa?',
    r: 'Atendemos. Boa parte da nossa demanda é justamente sistema instalado por terceiros que ficou sem homologação, sem compensação correta ou sem responsável técnico.',
  },
  {
    p: 'Em quanto tempo resolve?',
    r: 'A parte que depende de nós — projeto, documentação, protocolo — é rápida. O que não controlamos é o prazo de análise da distribuidora, que tem prazos regulatórios por etapa. Não prometemos prazo da Cosern, e desconfie de quem promete.',
  },
  {
    p: 'Preciso ir pessoalmente à Cosern?',
    r: 'Na maioria dos casos, não. Com procuração, protocolamos e acompanhamos o processo pelos canais próprios da distribuidora.',
  },
];

const cardServico = (s) => `
  <article class="card">
    <div class="card__icone">${ICONES[s.icone] ?? ICONES.sol}</div>
    <h3><a href="/servicos/${s.slug}/">${esc(s.h1)}</a></h3>
    <p>${esc(s.chamada)}</p>
    <a class="card__link" href="/servicos/${s.slug}/">Ver o serviço →</a>
  </article>`;

export function paginaHome(css, opcoes = {}) {
  const titulo = 'Energia Solar e Cosern no RN | Sousa Costa Energia';
  const descricao =
    'Consultor autorizado Cosern: projeto solar, carga, demanda, rateio, ART, titularidade, cadastro e revisão de faturas. Atendimento em todo o RN.';

  const conteudo = `
<section class="hero">
  <div class="container hero__grid">
    <div>
      <span class="pill">${CHECK} Consultor autorizado Cosern · Rio Grande do Norte</span>
      <h1>Resolvemos o que <span class="destaque">trava</span> seu projeto solar e sua conta de energia na Cosern</h1>
      <p class="hero__sub">
        Projeto e homologação de usinas, rateio de créditos, ART, laudo técnico, titularidade,
        modalidade tarifária e revisão de faturas. Você manda o caso, a gente diz se tem solução —
        e conduz o processo do início ao fim.
      </p>
      <div class="hero__ctas">
        <a class="btn btn--primario" href="${wa('Olá! Vim pelo site. Preciso de ajuda com um serviço junto à Cosern.')}" rel="noopener" target="_blank">
          Falar no WhatsApp
        </a>
        <a class="btn btn--contorno" href="#servicos">Ver os serviços</a>
      </div>
      <p class="hero__nota">Resposta pelo WhatsApp ${esc(CONTATO.whatsappExibicao)} · Orçamento sob consulta</p>
    </div>

    <aside class="painel" aria-label="Resumo da atuação">
      <span class="painel__rotulo">Experiência</span>
      <div class="painel__numero">12+ anos</div>
      <p class="painel__texto">de energia no Rio Grande do Norte — projeto, execução e operação de usinas.</p>
      <div class="painel__lista">
        <div class="painel__item">${CHECK_CLARO}<span>Consultor autorizado Cosern, com acesso aos canais da distribuidora</span></div>
        <div class="painel__item">${CHECK_CLARO}<span>Processo conduzido de ponta a ponta, com procuração</span></div>
        <div class="painel__item">${CHECK_CLARO}<span>Responsável técnico próprio para assinar e responder exigências</span></div>
        <div class="painel__item">${CHECK_CLARO}<span>Diagnóstico antes do orçamento: você sabe o que está comprando</span></div>
        <div class="painel__item">${CHECK_CLARO}<span>Atendimento nos 167 municípios do RN</span></div>
      </div>
    </aside>
  </div>
</section>

<section class="secao secao--compacta secao--soft">
  <div class="container numeros">
    ${PROVA.map(
      (n) => `<div>
      <div class="numero__valor">${esc(n.numero)}<span>${esc(n.unidade)}</span></div>
      <div class="numero__label">${esc(n.label)}</div>
    </div>`,
    ).join('\n    ')}
  </div>
</section>

<section class="secao" id="servicos">
  <div class="container">
    <span class="rotulo">Serviços</span>
    <h2>O que resolvemos para você</h2>
    <p class="limite-leitura" style="color:var(--muted)">
      Cada serviço tem uma página própria com o que está incluso, os documentos necessários e as
      dúvidas mais comuns. Se o seu caso não estiver aqui, mande mesmo assim — provavelmente é
      parente de algum destes.
    </p>
    <div class="grade grade--3" style="margin-top:40px">
      ${SERVICOS.map(cardServico).join('\n      ')}
    </div>
  </div>
</section>

<section class="secao secao--soft" id="como-funciona">
  <div class="container">
    <span class="rotulo">Como funciona</span>
    <h2>Do primeiro contato à solução</h2>
    <ol class="passos" style="margin-top:40px;max-width:820px">
      <li><div><h3>Você manda o caso</h3><p>Uma mensagem no WhatsApp com a fatura ou a descrição do problema já basta para começarmos a entender a situação.</p></div></li>
      <li><div><h3>Diagnóstico</h3><p>Analisamos os documentos e dizemos o que está acontecendo, o que dá para resolver e qual o caminho. Se não houver solução, também dizemos.</p></div></li>
      <li><div><h3>Proposta e procuração</h3><p>Escopo e valor definidos por escrito. A procuração é o que nos permite falar com a distribuidora no seu lugar.</p></div></li>
      <li><div><h3>Execução e acompanhamento</h3><p>Protocolamos, respondemos exigências e acompanhamos até o resultado aparecer — na homologação, no cadastro ou na fatura.</p></div></li>
    </ol>
  </div>
</section>

<section class="secao">
  <div class="container grade grade--2">
    <div>
      <span class="rotulo">Sinais de alerta</span>
      <h2>Talvez você precise da gente se…</h2>
      <ul class="lista-check" style="margin-top:24px">
        <li>${CHECK}<span>instalou energia solar e a conta continua alta</span></li>
        <li>${CHECK}<span>a usina está instalada há meses e não foi homologada</span></li>
        <li>${CHECK}<span>sobra crédito numa unidade e falta em outra</span></li>
        <li>${CHECK}<span>abriu protocolo na Cosern e não teve resposta</span></li>
        <li>${CHECK}<span>a fatura tem cobranças que ninguém sabe explicar</span></li>
        <li>${CHECK}<span>paga ultrapassagem de demanda todo mês</span></li>
        <li>${CHECK}<span>comprou ou vendeu imóvel com usina instalada</span></li>
      </ul>
    </div>
    <div>
      <span class="rotulo">Por que conosco</span>
      <h2>Técnico, não só burocrático</h2>
      <p style="color:var(--muted)">
        Boa parte dos problemas com a distribuidora não se resolve insistindo no atendimento: se
        resolve entendendo a regra que se aplica ao caso e apresentando o pedido no formato certo,
        com a fundamentação certa.
      </p>
      <ul class="lista-check" style="margin-top:16px">
        <li>${CHECK}<span><strong>Responsável técnico próprio</strong> — assinamos projeto, ART e laudo, e respondemos às exigências técnicas.</span></li>
        <li>${CHECK}<span><strong>Quem executa usina, entende usina</strong> — são ~4 MWp implantados e 2,3 MWp em operação e manutenção.</span></li>
        <li>${CHECK}<span><strong>Diagnóstico antes da proposta</strong> — você só contrata sabendo o que tem e o que dá para fazer.</span></li>
        <li>${CHECK}<span><strong>Sem promessa de prazo da distribuidora</strong> — trabalhamos com os prazos da regulação e cobramos o cumprimento deles.</span></li>
      </ul>
    </div>
  </div>
</section>

<section class="secao secao--soft" id="perguntas">
  <div class="container" style="max-width:820px">
    <span class="rotulo">Dúvidas frequentes</span>
    <h2>Perguntas que sempre chegam</h2>
    <div class="faq" style="margin-top:32px">
      ${FAQ_HOME.map(
        (f) => `<details><summary>${esc(f.p)}</summary><p>${esc(f.r)}</p></details>`,
      ).join('\n      ')}
    </div>
  </div>
</section>

<section class="secao secao--compacta">
  <div class="container">
    <span class="rotulo">Onde atendemos</span>
    <h2>Rio Grande do Norte inteiro</h2>
    <p class="limite-leitura" style="color:var(--muted)">
      Atendemos consumidores atendidos pela Neoenergia Cosern em todo o estado, incluindo
      ${CIDADES_ATENDIDAS.map((c) => esc(c)).join(', ')} e demais municípios do RN.
      A maior parte do trabalho é documental e não exige presença física.
    </p>
  </div>
</section>

<section class="faixa-cta">
  <div class="container">
    <h2>Manda o seu caso. A primeira conversa é <span class="destaque">gratuita</span>.</h2>
    <p>
      Envie a fatura ou descreva o problema no WhatsApp. Respondemos dizendo o que está acontecendo
      e qual o caminho — mesmo quando o caminho não passa por contratar a gente.
    </p>
    <div class="faixa-cta__acoes">
      <a class="btn btn--lime" href="${wa('Olá! Vim pelo site. Quero falar sobre o meu caso.')}" rel="noopener" target="_blank">
        Falar no WhatsApp ${esc(CONTATO.whatsappExibicao)}
      </a>
      <a class="btn btn--claro" href="mailto:${esc(CONTATO.email)}">Enviar e-mail</a>
    </div>
  </div>
</section>`;

  const schemas = [
    negocioJsonLd(),
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      '@id': `${SITE.dominio}/#site`,
      url: `${SITE.dominio}/`,
      name: SITE.nome,
      inLanguage: 'pt-BR',
      publisher: { '@id': `${SITE.dominio}/#negocio` },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Serviços de energia e processos junto à Neoenergia Cosern',
      itemListElement: SERVICOS.map((s, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: s.h1,
        url: `${SITE.dominio}/servicos/${s.slug}/`,
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: FAQ_HOME.map((f) => ({
        '@type': 'Question',
        name: f.p,
        acceptedAnswer: { '@type': 'Answer', text: f.r },
      })),
    },
  ];

  return pagina({
    titulo,
    descricao,
    caminho: '/',
    conteudo,
    schemas,
    css,
    zapMsg: 'Olá! Vim pelo site e preciso de ajuda com um serviço junto à Cosern.',
    ...opcoes,
  });
}
