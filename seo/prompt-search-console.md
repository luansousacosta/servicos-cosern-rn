# Prompt — Search Console: sitemap e pedido de indexação

Tarefa de **execução** (o agente altera coisas), ao contrário da auditoria do Ads.
Cole no plugin com acesso ao navegador logado em `luansolida@gmail.com`.

Por que precisa de navegador: o "Solicitar indexação" do Search Console **não tem API**.
A Indexing API do Google aceita apenas `JobPosting` e `BroadcastEvent` — páginas de
serviço não se enquadram. A URL Inspection API é somente leitura. Ou seja: esse clique
é manual, por design do Google.

---

```
Trabalhe no Google Search Console com a conta luansolida@gmail.com.

OBJETIVO
Garantir que o site https://servicos.sousacosta.com.br esteja registrado, com o sitemap
enviado, e pedir indexação da página nova publicada hoje.

TRAVAS
- Não remova propriedade, não remova sitemap, não use a ferramenta "Remoções".
- Não altere nada em outras propriedades da conta (sousacosta.com.br é outra propriedade
  e não deve ser tocada).
- Se algo já estiver correto, apenas relate — não refaça.

--------------------------------------------------------------------
BLOCO 1 — A PROPRIEDADE EXISTE?
--------------------------------------------------------------------
1.1 Liste as propriedades da conta e diga se já existe uma para
    servicos.sousacosta.com.br, e de que tipo (Domínio ou Prefixo do URL).

1.2 SE JÁ EXISTIR: siga para o Bloco 2.

1.3 SE NÃO EXISTIR: crie uma propriedade do tipo "Prefixo do URL" com o valor exato
    https://servicos.sousacosta.com.br/
    Para verificar, use o método "Google Analytics" — o site já carrega a tag
    G-236DB6S5SY, que é a mesma propriedade GA4 do sousacosta.com.br e pertence a
    esta conta. Esse método verifica sem precisar subir arquivo nem mexer em DNS.
    Se o método do Analytics não aparecer ou falhar, PARE e relate: subir arquivo de
    verificação exige alterar o repositório, o que é tarefa minha, não sua.

--------------------------------------------------------------------
BLOCO 2 — SITEMAP
--------------------------------------------------------------------
2.1 Vá em Sitemaps. Relate o que já está listado: caminho, data do último processamento,
    status e quantas URLs foram descobertas.

2.2 Se "sitemap.xml" NÃO estiver listado, envie: digite sitemap.xml e clique em Enviar.

2.3 Se JÁ estiver listado com status "Sucesso", NÃO remova e reenvie — reenviar um
    sitemap já registrado não acelera nada e você perde o histórico. Só reenvie se o
    status for de erro, e nesse caso copie a mensagem de erro no relatório.

2.4 Relate quantas URLs o Google diz ter descoberto. O esperado é 17.

--------------------------------------------------------------------
BLOCO 3 — PEDIDO DE INDEXAÇÃO (o que realmente acelera)
--------------------------------------------------------------------
Há cota de aproximadamente 10 a 12 pedidos por propriedade por dia. Respeite a ordem
abaixo e pare quando a cota acabar — relate onde parou.

3.1 PRIORIDADE MÁXIMA — cole na barra de inspeção de URL, no topo:
    https://servicos.sousacosta.com.br/servicos/carregador-de-veiculo-eletrico-condominio/
    a) Relate o resultado da inspeção (indexada? não indexada? motivo?).
    b) Clique em "Solicitar indexação" e aguarde a confirmação.
    c) Se der erro, copie a mensagem exata.

3.2 PRIORIDADE ALTA — a home, porque mudou (faixa nova, menu novo, FAQ novo):
    https://servicos.sousacosta.com.br/
    Inspecione, relate e solicite indexação.

3.3 As três páginas que passaram a linkar para a página nova:
    https://servicos.sousacosta.com.br/servicos/alteracao-de-carga-baixa-tensao/
    https://servicos.sousacosta.com.br/servicos/projeto-multiplas-unidades-baixa-tensao/
    https://servicos.sousacosta.com.br/servicos/laudo-tecnico/
    Inspecione cada uma, relate e solicite indexação.

3.4 SÓ SE AINDA HOUVER COTA — inspecione as demais e solicite indexação apenas das que
    aparecerem como NÃO indexadas:
    https://servicos.sousacosta.com.br/servicos/projeto-de-energia-solar/
    https://servicos.sousacosta.com.br/servicos/multiplas-unidades-consumidoras/
    https://servicos.sousacosta.com.br/servicos/alteracao-de-rateio/
    https://servicos.sousacosta.com.br/servicos/art-projeto-solar-cosern/
    https://servicos.sousacosta.com.br/servicos/analise-de-problemas/
    https://servicos.sousacosta.com.br/servicos/alteracao-de-titularidade/
    https://servicos.sousacosta.com.br/servicos/alteracao-de-modalidade-tarifaria/
    https://servicos.sousacosta.com.br/servicos/consultoria-de-faturamento/
    https://servicos.sousacosta.com.br/servicos/demandas-cosern/
    https://servicos.sousacosta.com.br/servicos/projeto-unidade-baixa-tensao/
    https://servicos.sousacosta.com.br/servicos/alteracao-de-demanda/
    https://servicos.sousacosta.com.br/servicos/alteracao-de-dados-cadastrais/

--------------------------------------------------------------------
BLOCO 4 — DIAGNÓSTICO (leitura, sem alterar)
--------------------------------------------------------------------
4.1 Em Indexação → Páginas: quantas indexadas e quantas não indexadas? Liste os motivos
    de não indexação e quantas páginas em cada motivo.
4.2 Em Experiência → Core Web Vitals: há URLs em "Precisa de melhoria" ou "Ruim"?
    Se o relatório disser que não há dados suficientes, relate isso.
4.3 Em Aprimoramentos: aparecem itens de dados estruturados (Perguntas frequentes,
    Breadcrumbs)? Quantos válidos e quantos com erro? Copie os erros, se houver.
4.4 Se existir o relatório de desempenho para superfícies de IA (busca generativa),
    diga se ele está disponível nesta propriedade e o que mostra.

--------------------------------------------------------------------
RELATÓRIO FINAL
--------------------------------------------------------------------
Responda em português, nesta ordem:
1. Situação da propriedade (existia? tipo? precisou criar e verificar?)
2. Situação do sitemap (já estava? enviado agora? quantas URLs descobertas?)
3. Lista de URLs para as quais você pediu indexação, com o resultado de cada uma
   (aceito / erro / já indexada), e onde a cota acabou, se acabou.
4. Números de Indexação → Páginas e os motivos de não indexação.
5. Erros de dados estruturados, se houver.
6. Qualquer coisa que você tenha encontrado e que eu não perguntei.
Não invente número: se não conseguiu ver algo, escreva "não consegui ver" e explique.
```

---

## O que esperar depois

- Pedido de indexação **não garante indexação nem posição** — ele coloca a URL numa fila
  de rastreamento prioritário. O normal é a página aparecer no índice em alguns dias.
- Sitemap já registrado é relido sozinho pelo Google. Reenviar não acelera; o `lastmod`
  correto (que o build agora gera por página) é o que sinaliza o que mudou.
- O relatório de Páginas costuma listar páginas como "Descoberta – no momento não
  indexada" nos primeiros dias. Isso é normal em site novo e não é erro de configuração.
