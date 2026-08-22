# Prompt para o plugin/agente configurar Google Analytics e Google Ads

Cole o texto abaixo no agente que tem acesso ao navegador com sua conta Google logada.
Ele cobre o que exige interface web. As campanhas em si podem ser criadas por API — veja
a última seção.

---

```
Preciso que você configure a medição e a conta de anúncios de um site já publicado.
Trabalhe na conta Google de luansolida@gmail.com. O site é:

  https://servicos.sousacosta.com.br
  (site institucional de serviços de energia, Sousa Costa Energia, Natal/RN)

REGRAS DE SEGURANÇA — leia antes de começar
1. NÃO cadastre, digite ou confirme qualquer dado de pagamento, cartão, CPF/CNPJ para
   faturamento ou aceite de contrato financeiro. Se a tela pedir isso, PARE e me avise:
   essa parte é feita pelo dono da conta.
2. NÃO ative nenhuma campanha. Tudo deve ficar PAUSADO até revisão humana.
3. NÃO altere nada em outras propriedades, sites ou campanhas que já existam na conta.
   Se encontrar uma propriedade ou campanha preexistente com nome parecido, PARE e me
   avise antes de mexer.
4. Se algo já estiver configurado, relate o que encontrou em vez de recriar.

ETAPA 1 — Google Analytics 4
a) Em analytics.google.com, crie uma propriedade GA4 chamada
   "Sousa Costa — Serviços" (fuso: (GMT-03:00) Brasília; moeda: Real brasileiro).
b) Crie um fluxo de dados do tipo Web para https://servicos.sousacosta.com.br
   com o nome "Site de serviços".
c) Anote o ID da métrica, no formato G-XXXXXXXXXX. Ele é o principal resultado
   desta etapa — eu preciso dele de volta.
d) Em Administrador → Eventos principais (Key events), crie um evento principal com
   EXATAMENTE este nome: contato_whatsapp
   (o site já dispara esse evento; se a interface só permitir marcar eventos já
   recebidos, me avise que resolvemos depois do primeiro acesso ao site.)
e) Crie também, do mesmo jeito, o evento principal: contato_email

ETAPA 2 — Conta do Google Ads
a) Verifique se já existe uma conta do Google Ads nesse e-mail. Se existir, use-a e me
   informe o ID (formato 123-456-7890). Se NÃO existir, inicie a criação com:
     - País: Brasil · Moeda: BRL · Fuso: (GMT-03:00) Brasília
     - No modo de criação, escolha a opção de "alternar para o modo especialista"
       (ou "Criar uma conta sem campanha"), NUNCA o modo simplificado.
   Ao chegar na tela de forma de pagamento, PARE e me avise. Não preencha.
b) Em Ferramentas → Contas vinculadas, vincule a propriedade GA4 criada na Etapa 1.
c) Em Ferramentas → Conversões → Importar → Google Analytics 4, importe o evento
   contato_whatsapp e marque-o como conversão PRINCIPAL. Se a importação ainda não
   listar o evento (por falta de dados), crie no lugar uma conversão nativa do Ads
   chamada "Contato WhatsApp", categoria "Contato", e me devolva o ID de conversão
   (AW-XXXXXXXXX) e o rótulo (formato AW-XXXXXXXXX/AbCdEfGhIj).

ETAPA 3 — Recursos (extensões), no nível da conta
Sitelinks (4), cada um apontando para a URL indicada:
  - "Projeto solar"        → https://servicos.sousacosta.com.br/servicos/projeto-de-energia-solar/
  - "Alteração de rateio"  → https://servicos.sousacosta.com.br/servicos/alteracao-de-rateio/
  - "Revisão de faturas"   → https://servicos.sousacosta.com.br/servicos/consultoria-de-faturamento/
  - "Ligação nova"         → https://servicos.sousacosta.com.br/servicos/projeto-unidade-baixa-tensao/
Frases de destaque: Consultor autorizado · 12+ anos no RN · Orçamento sem compromisso ·
Atendemos todo o RN
Chamada (telefone): (84) 99126-0677

ETAPA 4 — Modelo de acompanhamento
Em Configurações da conta → Acompanhamento, defina o modelo:
  {lpurl}?utm_source=google&utm_medium=cpc&utm_campaign={campaignid}&utm_term={keyword}

AO TERMINAR, me devolva exatamente:
  1. o ID do GA4 (G-XXXXXXXXXX)
  2. o ID da conta do Google Ads (123-456-7890)
  3. se criou conversão nativa: o ID (AW-…) e o rótulo (AW-…/…)
  4. o que ficou pendente por exigir dados de pagamento ou decisão humana
  5. confirmação de que NENHUMA campanha foi ativada
```

---

## Depois que ele devolver os IDs

Cole os valores em `src/data/site.mjs`, no bloco `ANALYTICS`, e publique:

```js
export const ANALYTICS = {
  ga4: 'G-XXXXXXXXXX',
  adsId: 'AW-XXXXXXXXX',              // só se criou conversão nativa
  adsConversaoWhatsapp: 'AW-XXXXXXXXX/AbCdEfGhIj',
};
```

O site volta a carregar a tag e passa a registrar cada clique no WhatsApp, com o
serviço e a posição do botão.

## As campanhas podem ser criadas por API

As três campanhas, nove grupos, palavras-chave, negativas e anúncios desta pasta podem
ser criados programaticamente, sem interface — todas nascem **pausadas**.

Para isso é preciso apenas autorizar o Google Ads no conector, uma vez. Peça o link de
autorização e informe qual conta usar. O que a API **não** faz: criar a conta do Ads,
cadastrar pagamento e criar a propriedade do GA4 — isso continua sendo das etapas 1 e 2
acima.
