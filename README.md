# Serviços de energia e Cosern — Sousa Costa Energia

Site estático de captação para os serviços de consultoria em energia no Rio Grande do Norte:
projeto solar, recarga de veículos elétricos em condomínios, EMUC, rateio de créditos, ART, laudo
técnico, análise de problemas, titularidade, modalidade tarifária, consultoria de faturamento e
demandas junto à Neoenergia Cosern.

**17 páginas**, uma URL por serviço, HTML pronto no primeiro byte.
Sem framework e **sem nenhuma dependência de terceiros** — o build usa só o Node.

## Por que HTML estático e não React

A calculadora é uma aplicação: faz sentido em React. Este site é conteúdo, e conteúdo precisa
ranquear. HTML servido pronto indexa mais rápido e com menos risco do que HTML montado por
JavaScript, o LCP fica menor no 4G, e cada serviço ganha `<title>`, meta description, canonical e
JSON-LD próprios. O visual é o mesmo do site institucional — só a entrega muda.

## Rodar localmente

```bash
npm run dev        # gera dist/ e sobe http://localhost:5180
npm run build      # só gera dist/
npm run verificar  # gera dist/ e roda a verificação de SEO técnico
```

`verificar.mjs` falha o build quando encontra o tipo de erro que só apareceria semanas depois no
Search Console: título acima de 60 caracteres, description acima de 156 ou duplicada, mais de um
`<h1>`, JSON-LD inválido, `<img>` sem `alt`, link interno quebrado ou página fora do sitemap.

## Como está organizado

```
src/data/site.mjs         contatos, domínio, números de prova social
src/data/servicos.mjs     conteúdo dos 16 serviços — é aqui que você edita textos
src/templates/            layout (head/SEO), home e página de serviço
src/styles/estilo.css     tokens da marca (indigo #3E4095, lime #9AD629, Instrument Serif + Sora)
public/                   logos, imagem de compartilhamento, CNAME
build.mjs                 gera dist/ + sitemap.xml + robots.txt + 404.html
verificar.mjs             checagem de SEO técnico do dist/
```

### Adicionar um serviço novo

Acrescente um objeto em `src/data/servicos.mjs` e rode `npm run build`. A página, o link no menu do
rodapé, o card na home, o sitemap e o JSON-LD saem automaticamente. Campos obrigatórios:

`slug`, `nav`, `chamada`, `icone`, `titulo`, `h1`, `descricao`, `badge`, `resumo`, `paraQuem[]`,
`entregaveis[]`, `documentos[]`, `passos[]`, `prazoNota`, `faq[]`, `relacionados[]`, `keywords[]`, `waMsg`.

Campos opcionais:

| Campo | Efeito |
|---|---|
| `respostaCurta` | parágrafo "Em resumo" no topo da página e `abstract` do `WebPage` — é o trecho que buscador e assistente citam |
| `secoes[]` | blocos de aprofundamento (`{rotulo, titulo, intro, itens:[{t,d}]}`) renderizados antes do FAQ |
| `destaque` | marca o card na home e sobe a prioridade no sitemap |
| `atualizado` | data `AAAA-MM-DD` usada no `lastmod` do sitemap e no `dateModified` do JSON-LD |

## Publicação (GitHub Pages)

1. Suba este projeto para um repositório **público** (Pages exige repo público no plano gratuito).
2. Em **Settings → Pages → Source**, escolha **GitHub Actions**. Sem isso o workflow
   falha em `actions/configure-pages` com "Get Pages site failed" — e não adianta
   usar `enablement: true`, porque o `GITHUB_TOKEN` não pode criar o site do Pages.
3. O workflow `.github/workflows/deploy.yml` publica a cada push na `main`.
4. No DNS de `sousacosta.com.br`, crie um registro **CNAME**:
   `servicos` → `luansousacosta.github.io`
5. Em **Settings → Pages → Custom domain**, digite `servicos.sousacosta.com.br` e salve.
   Aguarde a verificação de DNS e então marque **Enforce HTTPS** (o certificado leva
   alguns minutos; erro de TLS nesse intervalo é esperado).

> **Atenção:** em publicação por GitHub Actions, o arquivo `public/CNAME` **não**
> configura o domínio sozinho — quem manda é o campo *Custom domain* das
> configurações. O arquivo é mantido por compatibilidade, caso um dia se troque
> para publicação direto de branch.

## O que já está feito de SEO

- URL própria por serviço, com `<title>`, meta description e canonical exclusivos
- JSON-LD: `ProfessionalService`, `WebPage`, `Service`, `FAQPage`, `BreadcrumbList`, `ItemList`, `WebSite`,
  ligados por `@id` para formar um grafo de entidade em vez de blocos soltos
- Bloco "Em resumo" no topo de cada página: resposta direta e autocontida, que é o formato que
  featured snippet e resposta gerada por IA extraem
- `lastmod` do sitemap vem da data declarada no serviço, não da data do build — carimbar tudo como
  alterado a cada deploy vira ruído e o Google passa a ignorar o campo
- `robots.txt` libera explicitamente GPTBot, OAI-SearchBot, PerplexityBot, ClaudeBot, Google-Extended
  e Applebot-Extended: só é citado em resposta de IA quem foi lido
- `preconnect` para o Google Tag Manager, reduzindo o custo do script de medição no LCP
- Open Graph e Twitter Card com imagem 1200×630 própria
- `sitemap.xml` e `robots.txt` gerados no build
- CSS inline (sem requisição bloqueante), imagens com dimensões declaradas e servidas
  no tamanho exibido (WebP com fallback PNG)
- Instrument Serif com `font-display: optional` em vez de `swap`. Medido com a fonte
  atrasada em 900 ms: `swap` produzia CLS de 0,237 no desktop e 0,171 no celular, porque
  os títulos são grandes e a fonte ocupa cerca de 78% da largura da serifada de sistema.
  Com `optional`, 0,005 e 0,000. Sora, que causava 0,005, continua em `swap`.
- Biblioteca do Google Tag injetada no `load` ou na primeira interação, não no HTML.
  O stub `gtag()` e a fila `dataLayer` ficam inline, então pageview e conversão não se
  perdem — só saem do caminho crítico do LCP
- Heading único por página, links internos entre serviços relacionados, breadcrumb visível
- Conteúdo em pt-BR com a terminologia que o cliente realmente pesquisa

## O que ainda depende de você (é o que mais pesa no ranking)

Página boa é pré-requisito, não garantia. Depois de publicar:

1. **Google Search Console** — cadastre o domínio e envie `https://servicos.sousacosta.com.br/sitemap.xml`.
2. **Perfil da Empresa no Google** — para busca local ("projeto solar Natal") o perfil pesa mais que o site.
   Cadastre categoria, área de atuação, fotos e peça avaliações a cada cliente atendido.
3. **Link do site institucional** — `sousacosta.com.br` apontando para cá transfere autoridade.
4. **Conteúdo recorrente** — cada dúvida que chega no WhatsApp é uma página futura. As buscas que
   convertem neste ramo são específicas ("crédito de energia não apareceu na fatura"), e é conteúdo
   assim que traz visita qualificada.
5. **Avaliações e casos reais** — depoimento com nome e cidade melhora conversão e reforça a entidade.

> Nenhum ajuste técnico substitui esses cinco pontos. O site foi feito para não ser o gargalo.
