# Prompt — links do sousacosta.com.br para o servicos.sousacosta.com.br

Cole na sessão do Claude Code que trabalha no repositório do **site institucional**
(`sousacosta.com.br`). Não é para o repositório do subdomínio de serviços.

**Por que isso importa.** O `servicos.sousacosta.com.br` foi publicado há pouco e o
Search Console mostra quase todas as páginas como *"Detectada, mas não indexada no
momento"* — o Google conhece as URLs e escolheu não indexar. Não é erro técnico
(canonical, robots, sitemap e dados estruturados estão corretos e verificados). É falta
de autoridade: o subdomínio não recebe link de lugar nenhum. O institucional já é
conhecido pelo Google, e um link dele é o caminho mais curto para o subdomínio deixar
de ser um endereço órfão.

---

```
Trabalhe no repositório deste site (sousacosta.com.br).

OBJETIVO
Criar links reais do site institucional para as páginas de serviço publicadas em
https://servicos.sousacosta.com.br — um subdomínio nosso, publicado por GitHub Pages.
O objetivo é de SEO: transferir autoridade e fazer o Google indexar aquelas páginas.

REGRAS TÉCNICAS (o link só conta se seguir todas)
- Tem que ser <a href="..."> de verdade, presente no HTML entregue ao navegador.
  Se o site for React/Next/Gatsby, garanta que sai no HTML renderizado no servidor
  ou na build estática — link injetado só no cliente por JS o Google pode não seguir.
- NÃO use rel="nofollow", rel="sponsored" nem rel="ugc". Esses atributos anulam
  justamente o efeito que queremos.
- NÃO acrescente parâmetros UTM. O GA4 é o mesmo dos dois lados (G-236DB6S5SY) e,
  por ser subdomínio, a sessão continua sozinha. UTM aqui quebraria a atribuição,
  criando uma sessão nova com origem errada.
- URLs exatamente como estão abaixo: https, com barra no final, sem redirecionamento.
- Texto âncora descritivo. Nada de "clique aqui", "saiba mais" ou "veja". E varie:
  não repita a mesma palavra-chave em todos os links.
- Mantenha o padrão visual e os componentes que o site já usa. Não invente estilo novo.

O QUE FAZER — três lugares, nesta ordem de prioridade

1) RODAPÉ (maior valor: aparece em todas as páginas do site)
   Acrescente uma coluna nova ao rodapé, com o título "Serviços junto à Cosern"
   (ou o padrão de título que o rodapé já usa), contendo estes links:

   https://servicos.sousacosta.com.br/servicos/carregador-de-veiculo-eletrico-condominio/
     âncora: Recarga de veículos elétricos em condomínios
   https://servicos.sousacosta.com.br/servicos/projeto-de-energia-solar/
     âncora: Projeto solar e solicitação de acesso
   https://servicos.sousacosta.com.br/servicos/multiplas-unidades-consumidoras/
     âncora: Projeto EMUC para múltiplas unidades
   https://servicos.sousacosta.com.br/servicos/alteracao-de-rateio/
     âncora: Alteração de rateio de créditos
   https://servicos.sousacosta.com.br/servicos/alteracao-de-carga-baixa-tensao/
     âncora: Aumento de carga em baixa tensão
   https://servicos.sousacosta.com.br/servicos/consultoria-de-faturamento/
     âncora: Revisão de faturas de energia
   https://servicos.sousacosta.com.br/
     âncora: Ver todos os serviços

   Se o rodapé não comportar mais uma coluna no layout, coloque os 7 links em uma
   linha própria abaixo das colunas atuais, e me diga que foi assim que você fez.

2) UMA SEÇÃO NA HOME
   Um bloco com 3 ou 4 cartões, no estilo que a home já usa, apresentando os serviços
   documentais e regulatórios e apontando para as páginas correspondentes. Sugestão de
   conteúdo, adapte ao tom do site:

   - "Recarga de veículos elétricos em condomínios" — projeto, medição por vaga,
     instalação e aumento de carga, dentro da RT 05 do CBMRN.
     → /servicos/carregador-de-veiculo-eletrico-condominio/
   - "Projeto solar e homologação na distribuidora" — projeto elétrico, ART e
     solicitação de acesso conduzidos até a homologação.
     → /servicos/projeto-de-energia-solar/
   - "Laudo técnico e ART" — inspeção, medições e responsabilidade técnica registrada.
     → /servicos/laudo-tecnico/
   - "Revisão de faturas de energia" — conferência de tarifa, demanda, tributos e
     compensação de créditos.
     → /servicos/consultoria-de-faturamento/

   (URLs completas com o domínio https://servicos.sousacosta.com.br na frente.)

3) LINKS DENTRO DO TEXTO DE PÁGINAS EXISTENTES
   Este é o link que mais pesa, porque vem dentro de conteúdo. Percorra as páginas do
   site e, onde o texto já falar de um destes assuntos, transforme a menção em link
   para a página correspondente. Não force: só onde a frase já existe e o link faz
   sentido para quem lê.
     energia solar / homologação / parecer de acesso
       → /servicos/projeto-de-energia-solar/
     condomínio / carro elétrico / carregador / garagem
       → /servicos/carregador-de-veiculo-eletrico-condominio/
     conta de luz alta / fatura / tarifa
       → /servicos/consultoria-de-faturamento/
     padrão de entrada / aumento de carga / ligação nova
       → /servicos/alteracao-de-carga-baixa-tensao/
     ART / CREA / responsável técnico
       → /servicos/art-projeto-solar-cosern/
   No máximo 2 links desses por página. Mais que isso vira spam de link interno.

O QUE NÃO FAZER
- Não copie o texto das páginas de serviço para cá. Conteúdo duplicado entre os dois
  domínios prejudica os dois.
- Não crie redirecionamento de nenhuma rota do institucional para o subdomínio.
- Não coloque os links dentro de accordion, modal, aba ou menu que só existe depois
  de um clique em JavaScript.
- Não mexa em robots.txt, sitemap, canonical ou qualquer meta tag deste site.

VERIFICAÇÃO ANTES DE ENTREGAR
- Rode a build e confirme, no HTML gerado (não no navegador com JS ligado), que os
  links aparecem como <a href="https://servicos.sousacosta.com.br/...">.
- Confirme que nenhum deles tem nofollow.
- Confirme que nenhuma URL tem barra dupla, falta de barra final ou parâmetro extra.
- Suba num branch, commit descritivo, e me diga em quais arquivos você mexeu e quantos
  links foram criados em cada um dos três lugares.
```

---

## Depois que isso subir

O efeito não é imediato: o Google precisa rastrear o institucional de novo para achar
os links. Costuma levar de alguns dias a duas semanas. O sinal de que funcionou aparece
no Search Console do subdomínio, em **Links → Sites com links para o site**, e na queda
do número de páginas em "Detectada, mas não indexada".
