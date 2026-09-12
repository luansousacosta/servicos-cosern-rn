# Remediação da conta Google Ads suspensa — estado real e o que falta

> **Leia isto antes de executar qualquer coisa.** A primeira versão deste
> documento partia de duas premissas erradas e mandava executar um passo que
> **não pode ser executado**. Ambas foram corrigidas em 12/09/2026 depois da
> primeira passada do agente de navegador. O histórico do que se descobriu está
> abaixo, porque parte dele é material para o recurso.

## Contexto da conta

- Conta Google Ads **138-211-1556** — "Sousa Costa Soluções" — **suspensa** por
  "Reutilização da identidade de verificação" (política *Circumventing systems*).
- **Perfil de pagamentos pessoal 7207-6380-3319** — Pessoa Física, LUAN SOUSA DA
  COSTA. Informações fiscais **aceitas desde 07/02/2023**, com CPF. É o perfil ao
  qual a conta de Ads está amarrada hoje. Também paga Google One, Cloud e
  YouTube, e tem 7 cartões (5 com problema).
- **Perfil de pagamentos da empresa 0257-6770-6865** — SOUSA COSTA LTDA, tipo
  Organização, razão social verificada em 09/07/2026, informações fiscais
  **aceitas desde 14/07/2025**, CNPJ 48.725.763/0001-26. Endereço completo. Nunca
  foi associado à conta de Ads.
- A conta de Ads foi criada em 09/07/2026 já como anunciante pessoa jurídica, mas
  ficou amarrada ao perfil **pessoal**. É essa incompatibilidade — identidade
  pessoal validando um anunciante que se apresenta como empresa, com CNPJ no site
  — que sustenta a acusação.

O fato de as informações fiscais da LTDA estarem aceitas **desde julho de 2025**,
um ano antes de a conta de anúncios existir, é argumento a favor: a identidade da
empresa não foi improvisada para contornar nada, já estava estabelecida no
sistema do Google de forma independente.

---

## Estado de cada passo

### 1. Perfil da LTDA — CONCLUÍDO

Quase nada precisava ser feito. Ao contrário do que a primeira versão dizia, o
perfil **não estava vazio**: razão social, CNPJ, informações fiscais e endereço
já estavam corretos e aceitos. O valor não aparece na tela de Configurações — é
preciso abrir **"Gerenciar informações fiscais"** para ver.

Única lacuna real, já preenchida: **telefone +55 (84) 99126-0677**.

O endereço cadastrado é `R VITORIA, 17 — Amarante — São Gonçalo do Amarante/RN —
59296-692`. É o mesmo endereço, só abreviado. **Não reescrever**: o campo faz
parte de uma verificação de organização já aprovada, e mexer nele pode derrubar a
verificação sem ganho nenhum.

### 2. Trocar o "quem paga" — BLOQUEADO, NÃO EXECUTE

Este passo **não pode ser executado por conta própria**. O fluxo "Alterar quem
paga" mostra, na etapa 2 de 6, esta tela de implicações:

> **Verifique as seguintes implicações**
>
> Para alterar quem paga, crie ou atribua um perfil para pagamentos à sua conta
> do Google Ads.
>
> **Só é possível mudar essa configuração uma vez.**
>
> • **Conclua a verificação do anunciante**
> • Seu histórico de faturamento vai ficar disponível na página "Transferências
>   de faturamento"
> • O crédito no seu saldo atual será reembolsado, menos os custos não faturados
> • Em alguns casos, os tributos cobrados e os documentos recebidos podem variar

Dois motivos para parar:

1. **É irreversível** — "só é possível mudar essa configuração uma vez". Se a
   orientação do Google for outra, não há volta.
2. **Exige concluir a verificação do anunciante** — que é exatamente a conduta
   pela qual a conta foi suspensa. Disparar uma nova verificação por conta
   própria, no meio de uma enforcement ativa, pode ser lido como reincidência.

Há uma pergunta legítima embutida aqui: a nova verificação seria feita com a
identidade da **LTDA**, que é a correção, não a repetição. Mas quem decide isso é
o Google, não nós, e a decisão é de uma bala só. **Esta é a pergunta do e-mail do
passo 5.**

Nota lateral: a etapa 1 do fluxo pergunta "Por que você quer mudar quem paga?"
com quatro opções. Três são falsas no nosso caso (não houve mudança de
propriedade, a verificação foi concluída, a natureza do negócio não mudou). A
resposta correta é **"Outro"** — num processo cuja acusação é deturpação, marcar
uma opção falsa seria autodestrutivo.

### 3. Formas de pagamento — é do Luan, não do agente

Cadastrar cartão/boleto em nome da LTDA e remover os 5 cartões com problema do
perfil pessoal. O agente de navegador **não** faz: inserir dado financeiro e
excluir meio de pagamento são ações do titular. Cuidado ao remover — os cartões
que funcionam pagam Google One, Cloud e YouTube, que nada têm a ver com isto.

Faz sentido só **depois** da resposta da Erika: se a troca do pagador for feita
pelo suporte, o cartão pode ter que entrar por outro caminho.

### 4. URL do anúncio — NÃO HÁ 404; a primeira versão estava errada

O anúncio "Recarga de Carro Elétrico | Carregador em Condomínio" tem a **URL
final correta**:
`https://servicos.sousacosta.com.br/servicos/carregador-de-veiculo-eletrico-condominio/`
— e a página carrega normalmente.

O que a primeira versão leu como "URL quebrada" era o **caminho de exibição**
(Caminho 1 = `recarga`, Caminho 2 = `condominio`), que é texto descritivo do
anúncio, não um endereço. A política do Google exige que o **domínio** exibido
seja o mesmo da URL final — e é. Os caminhos são campos livres, que só precisam
dar ao usuário ideia clara de onde ele vai cair. `recarga/condominio` faz isso.

**Não há violação e não há nada a corrigir aqui.**

Pendente, de baixa prioridade: conferir uma a uma as URLs finais dos demais
anúncios (`energia-solar/hibrido-bess`, `sousacosta/energia`). A coluna "URL
final" na tabela está bloqueada na conta suspensa; é abrir cada anúncio.

### 5. E-mail para a especialista — este é o próximo passo real

Enviar para **erikatavares@xwf.google.com** (o botão "Agendar agora" só mostra
uma reunião velha de 29/07, sem agenda disponível). O texto está em
[`email-erika-ads.md`](email-erika-ads.md) — ele **pergunta** como destravar o
passo 2 em vez de reportar remediação concluída, porque a remediação **não** está
concluída, e mandar um e-mail com uma frase falsa neste processo é pior do que
não mandar e-mail.

---

## Proibições — valem sempre

Cada item abaixo transforma uma suspensão reversível em permanente:

- ❌ **Não crie conta nova de Google Ads, nem MCC.**
- ❌ **Não use outro e-mail, outro login ou cartão de terceiro.**
- ❌ **Não conclua o fluxo "Alterar quem paga"** até a Erika responder (ver
  passo 2).
- ❌ **Não refaça a verificação de anunciante** e não altere a identidade
  verificada.
- ❌ **Não envie o recurso (appeal).** Um recurso é processado por vez, e enviar
  com a remediação incompleta congela o processamento por 7 dias.
- ❌ **Não altere o tipo do perfil de pagamento 7207-6380-3319.** O tipo é
  definido na criação e é permanente.
- ❌ **Não reescreva o endereço do perfil 0257-6770-6865** (ver passo 1).

## O que já está corrigido no site

Conferido no ar em 12/09/2026:

- `servicos.sousacosta.com.br` — "consultor autorizado Cosern" saiu; no lugar há
  a declaração de que a empresa é independente e não tem vínculo societário ou
  contratual com a Neoenergia Cosern.
- Rodapé com razão social, CNPJ 48.725.763/0001-26 e endereço completo.
- Política de privacidade publicada nos dois domínios:
  `servicos.sousacosta.com.br/politica-de-privacidade/` e
  `www.sousacosta.com.br/politica-de-privacidade/`.
