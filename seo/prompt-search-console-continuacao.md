# Prompt — Search Console: continuação (rodar 24h depois)

Complemento do `prompt-search-console.md`. Na primeira execução a cota diária de
pedidos de indexação esgotou na 12ª URL, e os relatórios de diagnóstico ainda
estavam em "Dados em processamento" porque a propriedade tinha acabado de ser criada.

Rode este **no dia seguinte ou depois**. Cole no plugin com navegador logado em
`luansolida@gmail.com`.

---

```
Trabalhe no Google Search Console, conta luansolida@gmail.com, propriedade
https://servicos.sousacosta.com.br/ (tipo Prefixo do URL, já criada e verificada).

TRAVAS
- Não remova propriedade, não remova sitemap, não use a ferramenta "Remoções".
- Não toque na propriedade sousacosta.com.br.
- Se a cota de indexação esgotar de novo, PARE e relate onde parou.

--------------------------------------------------------------------
BLOCO 1 — TERMINAR OS PEDIDOS DE INDEXAÇÃO
--------------------------------------------------------------------
Estas 6 URLs ficaram de fora na execução anterior. Inspecione cada uma e solicite
indexação SOMENTE se ainda aparecer como não indexada. Nesta ordem:

1. https://servicos.sousacosta.com.br/servicos/alteracao-de-modalidade-tarifaria/
2. https://servicos.sousacosta.com.br/servicos/consultoria-de-faturamento/
3. https://servicos.sousacosta.com.br/servicos/demandas-cosern/
4. https://servicos.sousacosta.com.br/servicos/projeto-unidade-baixa-tensao/
5. https://servicos.sousacosta.com.br/servicos/alteracao-de-demanda/
6. https://servicos.sousacosta.com.br/servicos/alteracao-de-dados-cadastrais/

Para cada uma relate: status antes da solicitação e resultado (aceito / erro / já
indexada).

--------------------------------------------------------------------
BLOCO 2 — CONFERIR AS 11 DA VEZ ANTERIOR
--------------------------------------------------------------------
Inspecione estas duas, que eram as prioritárias, e diga se JÁ ENTRARAM no índice:
  https://servicos.sousacosta.com.br/servicos/carregador-de-veiculo-eletrico-condominio/
  https://servicos.sousacosta.com.br/

NÃO peça indexação de novo para elas — pedir duas vezes não acelera e gasta cota.
Só relate o status atual.

--------------------------------------------------------------------
BLOCO 3 — DIAGNÓSTICO (agora com dados)
--------------------------------------------------------------------
3.1 Indexação → Páginas: quantas indexadas e quantas não indexadas. Liste CADA motivo
    de não indexação com a contagem. Copie os motivos com o texto exato do Google.
3.2 Para o motivo mais frequente, abra e liste quais URLs estão nele.
3.3 Sitemaps: o sitemap.xml continua com status de sucesso? Quantas URLs descobertas
    e quantas indexadas ele reporta?
3.4 Aprimoramentos / Melhorias: aparecem "Perguntas frequentes" e "Breadcrumbs"?
    Quantos itens válidos e quantos com erro em cada? Copie os erros na íntegra.
3.5 Experiência → Core Web Vitals: já há dados? Se sim, quantas URLs em Boa,
    Precisa de melhoria e Ruim, no celular e no computador.
3.6 Desempenho → Resultados da pesquisa, últimos 7 dias: total de cliques e
    impressões. Na aba Consultas, liste as 15 consultas com mais impressões, com
    cliques, impressões, CTR e posição média. Na aba Páginas, as 10 páginas com mais
    impressões.
3.7 Se o relatório de superfícies de IA / busca generativa já tiver dados, relate.

--------------------------------------------------------------------
RELATÓRIO FINAL
--------------------------------------------------------------------
Em português:
1. Resultado dos 6 pedidos de indexação.
2. Status atual da página de recarga veicular e da home (entraram no índice?).
3. Números de Indexação → Páginas, com os motivos e as URLs do motivo principal.
4. Erros de dados estruturados, na íntegra.
5. As consultas e páginas do relatório de desempenho.
6. Qualquer coisa que você tenha encontrado e que eu não perguntei.
Não invente número: se não conseguiu ver, escreva "não consegui ver" e explique.
```

---

## Como ler o resultado

- **"Detectada, mas não indexada no momento"** é o Google dizendo: conheço a URL e
  escolhi não indexar por enquanto. Em site novo isso é normal e costuma se resolver
  sozinho. Se persistir por várias semanas em muitas páginas, o problema não é
  técnico — é falta de autoridade externa (links de outros sites apontando para cá).
- **"Rastreada, mas não indexada no momento"** é um degrau adiante e mais sério:
  o Google leu a página e decidiu não indexar. Aí vale revisar o conteúdo da página.
- Pedir indexação da mesma URL duas vezes não acelera nada e consome cota.
