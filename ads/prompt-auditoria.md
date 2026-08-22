# Prompt de auditoria — GA4, Google Ads e Search Console

Auditoria **somente leitura**: o agente confere e relata, não corrige. Cole no plugin
com acesso ao navegador logado em `luansolida@gmail.com`.

---

```
Faça uma AUDITORIA de configuração. Trabalhe na conta Google de luansolida@gmail.com.

REGRA PRINCIPAL: NÃO ALTERE NADA.
Esta tarefa é de leitura e diagnóstico. Não ative, não pause, não edite verba, texto,
palavra-chave, conversão ou configuração. Se encontrar algo errado, ANOTE no relatório
em vez de corrigir. Se alguma tela exigir salvar para exibir informação, não salve —
relate que não foi possível ver sem alterar.

CONTEXTO (o que DEVERIA estar configurado)
  Site:            https://servicos.sousacosta.com.br  (16 páginas, GitHub Pages)
  GA4:             G-236DB6S5SY  (mesma propriedade do sousacosta.com.br)
  Conta Ads:       1382111556 — SOUSA COSTA SOLUÇÕES
  Conversão Ads:   "Lead - WhatsApp" → AW-658673813/m5MKCLe76c0cEJWhiroC

  Campanhas criadas recentemente, todas devem estar PAUSADAS:
    24168072434  SC | Solar e GD             R$ 14/dia
    24162356610  SC | Ligação e Projetos     R$ 13/dia
    24168097430  SC | Conta e Tarifa         R$ 13/dia
  Campanhas antigas, devem estar PAUSADAS:
    24018173177  Search - Energia Solar RN - Quente
    23370496555  Manutenção de Energia Solar (O&M) no RN

--------------------------------------------------------------------
BLOCO 1 — GOOGLE ANALYTICS 4
--------------------------------------------------------------------
1.1 Confirme que a propriedade com o ID G-236DB6S5SY existe e diga o nome dela.
1.2 Em Administrador → Fluxos de dados: liste os fluxos Web e os domínios de cada um.
    Diga se servicos.sousacosta.com.br é coberto por algum (subdomínio conta).
1.3 Em Administrador → Eventos principais: o evento "contato_whatsapp" está listado e
    com o botão ATIVADO? E "contato_email"?
1.4 Em Relatórios → Tempo real ou Engajamento → Eventos: o evento "contato_whatsapp"
    já registrou ocorrências? Quantas nos últimos 7 dias?
1.5 IMPORTANTE — Administrador → Definições personalizadas → Dimensões personalizadas:
    existem dimensões registradas para os parâmetros "servico" e "local"?
    (Sem registrar, o GA4 coleta os parâmetros mas NÃO os mostra em relatório algum,
    e a pergunta "qual serviço traz cliente" fica sem resposta.)
1.6 Administrador → Retenção de dados: está em 2 meses (padrão) ou 14 meses?
1.7 Existe filtro de tráfego interno configurado, para os acessos do próprio dono não
    poluírem os dados?
1.8 Administrador → Vinculações de produtos → Google Ads: o vínculo com a conta
    1382111556 está ativo?

--------------------------------------------------------------------
BLOCO 2 — GOOGLE ADS
--------------------------------------------------------------------
2.1 Ferramentas → Conversões: liste TODAS as conversões com nome, origem e a coluna
    "Meta e ação" / se é PRINCIPAL ou SECUNDÁRIA.
    Ponto crítico: verificar se há mais de uma conversão contando o MESMO clique de
    WhatsApp (a nativa "Lead - WhatsApp" e alguma importada do GA4). Duas principais
    para o mesmo evento faz o clique contar em dobro e distorce o custo por conversão.
2.2 Para cada uma das 3 campanhas novas, confirme e relate:
    - status (deve ser Pausada) e verba diária
    - Redes: "Rede de Pesquisa" SIM; "Rede de Display" NÃO; "Parceiros de pesquisa" NÃO
    - Locais: Rio Grande do Norte, e a opção de local em "Presença" (não "interesse")
    - Estratégia de lances e teto de CPC
    - Modelo de acompanhamento (url_tags) com utm_source/utm_medium/utm_campaign
2.3 Para cada um dos 9 anúncios responsivos, relate o STATUS DE APROVAÇÃO
    (aprovado, aprovado com restrições, reprovado) e, se houver problema, o motivo
    exato da política. Relate também a "Eficácia do anúncio" de cada um.
2.4 Recursos (extensões) no nível da conta: liste sitelinks, frases de destaque e
    chamada. Atenção: os sitelinks existentes apontam para sousacosta.com.br e para a
    calculadora — nenhum aponta para as páginas de servicos.sousacosta.com.br. Confirme
    se é isso mesmo e liste o que existe.
2.5 As duas campanhas antigas estão realmente pausadas?
2.6 DADO QUE EU PRECISO: para as campanhas 24018173177 e 23370496555, nos ÚLTIMOS 30
    DIAS, informe: impressões, cliques, custo, conversões e custo por conversão de cada
    uma. (Foram pausadas sem que ninguém tivesse olhado esse número.)
2.7 Faturamento: existe forma de pagamento válida e ativa? Há algum aviso de conta
    suspensa, pagamento recusado ou limite atingido?
2.8 Há alguma lista de palavras-chave negativas no nível da CONTA? Se sim, quantos termos.
2.9 Existe algum aviso, recomendação crítica ou notificação de política pendente na conta?

--------------------------------------------------------------------
BLOCO 3 — SEARCH CONSOLE (SEO)
--------------------------------------------------------------------
3.1 Existe propriedade no Google Search Console para servicos.sousacosta.com.br
    (ou para o domínio sousacosta.com.br)? Se sim, qual tipo (domínio ou prefixo de URL)?
3.2 O sitemap https://servicos.sousacosta.com.br/sitemap.xml foi enviado? Qual o status
    e quantas URLs descobertas?
3.3 Em Páginas: quantas URLs estão indexadas e quantas não indexadas? Quais os motivos
    principais de não indexação, se houver?

--------------------------------------------------------------------
FORMATO DO RELATÓRIO
--------------------------------------------------------------------
Responda em português, organizado em três blocos, e para cada item use:
  ✅ OK — está como deveria
  ⚠️  ATENÇÃO — funciona, mas há risco ou melhoria relevante
  ❌ PROBLEMA — está errado ou ausente
  ❓ NÃO CONSEGUI VER — e o motivo

Ao final, liste em ordem de prioridade o que precisa ser corrigido, separando o que é
crítico (afeta gasto ou medição) do que é melhoria. Não corrija nada: só relate.
```

---

## Por que estes itens

Três achados desta implantação que a auditoria precisa confirmar:

- **Dimensões personalizadas (1.5)** — o site envia `servico` e `local` em cada conversão,
  mas o GA4 só exibe parâmetro de evento em relatório depois que ele é registrado como
  dimensão personalizada. É a diferença entre saber e não saber qual serviço paga a campanha.
- **Contagem dupla (2.1)** — a conversão nativa do Ads já dispara a cada clique. Se o
  `contato_whatsapp` também for importado do GA4 como principal, o mesmo clique conta duas
  vezes e o algoritmo de lances passa a trabalhar com número inflado.
- **Desempenho das pausadas (2.6)** — duas campanhas que rodavam desde julho e dezembro
  foram pausadas sem consulta ao histórico. Se alguma convertia bem, o certo é reativar.
