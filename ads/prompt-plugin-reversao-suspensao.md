# Prompt para o agente de navegador — remediação da conta Google Ads suspensa

Cole o bloco abaixo inteiro no agente do plugin. Ele executa a **remediação**:
arruma o que motivou a suspensão. **Não** envia o recurso — o texto do recurso
só vale depois que tudo aqui estiver feito, e é uma etapa separada.

---

## Contexto da conta

- Conta Google Ads **138-211-1556** — "Sousa Costa Soluções" — **suspensa** por
  "Reutilização da identidade de verificação" (política *Circumventing systems*).
- Existem **dois perfis de pagamento** na mesma conta Google:
  - **7207-6380-3319** — Pessoa Física, LUAN SOUSA DA COSTA, verificado em
    17/01/2025. É o perfil ao qual a conta de Ads está amarrada hoje. Também
    carrega Google One, Cloud e YouTube, e 7 cartões (5 deles com problema).
  - **0257-6770-6865** — **SOUSA COSTA LTDA**, tipo Organização, verificado em
    09/07/2026. Está vazio: sem conta vinculada, sem cartão, com dados
    cadastrais incompletos.
- A conta de Ads foi criada em 09/07/2026 — o mesmo dia em que o perfil da LTDA
  foi verificado — mas ficou amarrada ao perfil **pessoal**. É essa
  incompatibilidade (identidade pessoal validando um anunciante que se apresenta
  como empresa, com CNPJ no site) que sustenta a acusação de reutilização de
  identidade.

## O que o agente deve fazer

### 1. Completar o perfil de pagamentos 0257-6770-6865

Ir em `payments.google.com` → perfil **SOUSA COSTA LTDA (0257-6770-6865)` →
Configurações. Preencher e salvar:

- **Nome/razão social:** Sousa Costa LTDA
- **CNPJ:** 48.725.763/0001-26
- **Endereço:** Rua Vitória, 17 — Amarante, São Gonçalo do Amarante/RN,
  CEP 59296-692
- **Telefone:** (84) 99126-0677
- **E-mail de contato:** contato@sousacosta.com.br

Os dados têm que bater **exatamente** com o cartão CNPJ na Receita Federal. Se
algum campo já estiver preenchido com valor diferente do acima, **pare e
reporte** em vez de sobrescrever.

### 2. Trocar o perfil de pagamento da conta de Ads

Em `ads.google.com`, conta 138-211-1556 → Faturamento → Configurações →
**"Quem paga"** (payments profile). Trocar de **7207-6380-3319** para
**0257-6770-6865**.

Se o Google bloquear a troca por a conta estar suspensa, **não force e não tente
contornar**: registre a mensagem de erro exata (com captura de tela) e siga para
o passo 4. Essa informação é material para o recurso.

### 3. Cadastrar forma de pagamento válida no perfil da LTDA

Adicionar ao perfil 0257-6770-6865 **um** cartão ou boleto em nome da **Sousa
Costa LTDA**. Um só, válido.

No perfil pessoal 7207-6380-3319, remover os **5 cartões com problema** (os
marcados como expirado/recusado/inválido). Deixar intactos os cartões que estão
funcionando — eles pagam Google One, Cloud e YouTube, que não têm nada a ver com
esta suspensão.

### 4. Corrigir a URL final quebrada do anúncio

Na conta de Ads, localizar o anúncio cuja URL final é
`https://servicos.sousacosta.com.br/recarga/condominio` — essa página dá **404**.
Trocar por:

```
https://servicos.sousacosta.com.br/servicos/carregador-de-veiculo-eletrico-condominio/
```

O erro é só do painel: os CSVs em `ads/` já usam a URL certa. Verificar também se
algum outro anúncio ou extensão aponta para `/recarga/` — se apontar, corrigir do
mesmo jeito, sempre para `/servicos/<slug>/`.

### 5. Escrever para a especialista do Google

Enviar e-mail para **erikatavares@xwf.google.com** (o botão "Agendar agora" dela
só mostra uma reunião velha de 29 de julho, sem agenda disponível — por isso
e-mail, não agendamento). Assunto e corpo:

> **Assunto:** Conta 138-211-1556 — suspensão por reutilização de identidade:
> remediação concluída
>
> Olá, Erika.
>
> A conta 138-211-1556 foi suspensa por "Reutilização da identidade de
> verificação". Identifiquei a origem: a conta foi criada em 09/07/2026 já como
> anunciante pessoa jurídica (Sousa Costa LTDA, CNPJ 48.725.763/0001-26), mas
> ficou vinculada ao meu perfil de pagamentos pessoa física (7207-6380-3319),
> verificado em 17/01/2025 para serviços de consumo — Google One, Cloud e
> YouTube.
>
> O perfil da empresa (0257-6770-6865, SOUSA COSTA LTDA), verificado em
> 09/07/2026, existe e está ativo, mas nunca foi associado à conta de anúncios.
> Não há segunda conta de Google Ads em nenhum dos meus logins — conferi todos.
>
> Já corrigi o que estava sob meu controle: completei os dados cadastrais do
> perfil da empresa, cadastrei forma de pagamento em nome da LTDA, removi do site
> a menção a "consultor autorizado Cosern" (a empresa atua por procuração
> outorgada pelo cliente, e o rodapé agora diz explicitamente que não há vínculo
> com a Neoenergia Cosern), publiquei política de privacidade em
> https://servicos.sousacosta.com.br/politica-de-privacidade/ e
> https://www.sousacosta.com.br/politica-de-privacidade/, e corrigi a URL final
> que retornava 404.
>
> Preciso da sua orientação em um ponto: [SE O PASSO 2 FALHOU, descrever aqui o
> erro exato ao trocar o perfil de pagamento; SE DEU CERTO, escrever "a troca do
> perfil de pagamento para 0257-6770-6865 foi concluída"].
>
> Não abri conta nova, não usei outro e-mail e não refiz a verificação de
> anunciante — aguardo sua orientação antes de qualquer passo nesse sentido.
>
> Obrigado,
> Luan Sousa da Costa — Sousa Costa LTDA

## Proibições — não faça nada disso

Cada item abaixo transforma uma suspensão reversível em permanente:

- ❌ **Não crie conta nova de Google Ads, nem MCC.**
- ❌ **Não use outro e-mail, outro login ou cartão de terceiro** para acessar ou
  pagar esta conta.
- ❌ **Não refaça a verificação de anunciante** e não altere a identidade
  verificada (nome, documento, tipo de pessoa) enquanto a conversa com a Erika
  não acontecer. Refazer a verificação é literalmente a conduta pela qual a conta
  foi suspensa.
- ❌ **Não envie o recurso (appeal).** Um recurso é processado por vez, e enviar
  com a remediação incompleta congela o processamento por 7 dias. O texto do
  recurso vem depois, e só quando os passos 1 a 4 estiverem realmente feitos.
- ❌ **Não altere o tipo do perfil de pagamento 7207-6380-3319.** O tipo é
  definido na criação e é permanente; tentar mudá-lo não funciona e polui o
  histórico.

## Ao terminar, reporte

1. Perfil 0257-6770-6865: quais campos estavam vazios, quais você preencheu, e
   captura de tela da tela salva.
2. Troca do "quem paga": funcionou ou não. Se não, **a mensagem de erro
   literal**.
3. Cartões: qual foi cadastrado na LTDA, quais foram removidos do perfil pessoal.
4. URL do anúncio: qual anúncio, URL antes e depois. Se houver outros
   `/recarga/`, liste.
5. E-mail para a Erika: enviado (com a data/hora) ou não, e por quê.
6. Qualquer aviso, banner ou mudança de status que a conta tenha exibido durante
   o processo.
