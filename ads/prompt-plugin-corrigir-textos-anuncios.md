# Prompt para o agente de navegador — corrigir os textos dos anúncios

Cole o bloco abaixo inteiro no agente do plugin.

Esta tarefa é **só edição de texto de anúncio**. Não toca em identidade, em
verificação de anunciante, em perfil de pagamentos, em orçamento nem em status de
campanha. É segura de rodar com a conta suspensa.

---

## Por que estamos fazendo isso

A conta **138-211-1556** está suspensa por deturpação/reutilização de identidade.
O site de destino já foi corrigido: ele agora declara explicitamente que a empresa
**não tem vínculo societário ou contratual com a Neoenergia Cosern**.

Os anúncios, porém, continuam dizendo **"Consultor Autorizado"**. Ou seja: o
anúncio afirma um credenciamento e a página de destino nega. Num recurso, o
analista abre a landing page e lê a contradição. Enquanto esses textos estiverem
na conta, a correção do site trabalha contra nós.

## Regras da tarefa

1. **Case por texto, não por posição.** As posições abaixo (Título 7, Descrição 4)
   são só referência do nosso arquivo. Na conta a ordem pode ser outra. **Localize
   pelo texto exato de "DE:"** e troque só aquele campo.
2. **Não altere nenhum outro campo.** Não mexa em URL final, caminhos de exibição,
   palavras-chave, lances, orçamento, extensões (exceto a do passo 10), nem no
   status de campanhas ou grupos.
3. **Não ative nada.** O que está pausado fica pausado.
4. Se um texto de "DE:" **não for encontrado** num grupo, não improvise: registre
   "não encontrado" e siga. Se encontrar o texto em um grupo **diferente** do
   indicado, troque ali também e registre o fato.
5. Se um campo estiver **fixado (pinned)**, troque o texto e mantenha a fixação.
6. Os anúncios voltarão para "em análise" depois de salvos. Isso é esperado e não
   tem custo — a conta está suspensa e nada está veiculando.

---

## As trocas

### 1. SC | Solar e GD → Projeto solar e homologação

- **Título 7**
  DE: `Consultor Autorizado`
  PARA: `Consultoria Independente`
- **Descrição 4**
  DE: `Consultor autorizado com 12 anos de energia no RN. Orçamento sem compromisso.`
  PARA: `Consultoria independente com 12 anos de energia no RN. Orçamento sem compromisso.`

### 2. SC | Solar e GD → Rateio e créditos

- **Título 7**
  DE: `Consultor Autorizado`
  PARA: `12+ Anos de Energia no RN`
- **Descrição 4**
  DE: `Consultor autorizado. Mande suas faturas e receba o diagnóstico sem custo.`
  PARA: `Atuamos por procuração do cliente. Mande as faturas e receba o diagnóstico.`

### 3. SC | Solar e GD → Múltiplas unidades e EMUC

- **Título 7**
  DE: `Consultor Autorizado`
  PARA: `12+ Anos de Energia no RN`
- **Descrição 4**
  DE: `Consultor autorizado, 12 anos de energia no RN. Fale conosco no WhatsApp.`
  PARA: `Consultoria independente, 12 anos de energia no RN. Fale conosco no WhatsApp.`

### 4. SC | Ligação e Projetos → Ligação nova e padrão de entrada

- **Descrição 4**
  DE: `Consultor autorizado com 12 anos de energia no RN. Fale pelo WhatsApp.`
  PARA: `Consultoria independente com 12 anos de energia no RN. Fale pelo WhatsApp.`

### 5. SC | Ligação e Projetos → Prédios e múltiplas UCs

- **Descrição 4**
  DE: `Consultor autorizado com 12 anos de energia no RN. Orçamento pelo WhatsApp.`
  PARA: `Consultoria independente com 12 anos de energia no RN. Orçamento pelo WhatsApp.`

### 6. SC | Conta e Tarifa → Conta alta e revisão de fatura

- **Título 5**
  DE: `Recupere o Que Pagou a Mais`
  PARA: `Cobrou a Mais? Contestamos`
- **Título 7**
  DE: `Consultor Autorizado`
  PARA: `12+ Anos de Energia no RN`

### 7. SC | Conta e Tarifa → Demanda e modalidade tarifária

- **Título 8**
  DE: `Consultor Autorizado`
  PARA: `12+ Anos de Energia no RN`

### 8. SC | Conta e Tarifa → Titularidade e cadastro

- **Título 8**
  DE: `Consultor Autorizado`
  PARA: `12+ Anos de Energia no RN`

### 9. SC | Recarga Veicular → Recarga veicular em condomínio

- **Título 9**
  DE: `Sem Aumentar o Padrão`
  PARA: `Avaliamos a Carga Antes`
- **Título 13**
  DE: `Consultor Autorizado`
  PARA: `12+ Anos de Energia no RN`

### 10. Extensão de frases de destaque (nível de conta)

Em **Campanhas → Recursos → Frases de destaque**, localizar a frase
`Consultor autorizado` e trocar por `Empresa independente`.

As outras frases (`12+ anos no RN`, `Orçamento sem compromisso`,
`Atendemos todo o RN`) ficam como estão.

### 11. Varredura final

Usar a busca da conta (ou percorrer os grupos) para confirmar que **não resta
nenhuma ocorrência** de:

- `autorizado` / `Autorizado`
- `Cosern` em **texto de anúncio, título, descrição ou frase de destaque**

Atenção: `Cosern` **como palavra-chave é permitido e deve permanecer** — não
remova palavras-chave. A proibição é só no texto que aparece no anúncio.

Se aparecer alguma ocorrência em lugar não previsto acima (outro anúncio, sitelink,
snippet estruturado, texto de chamada), **não corrija por conta própria**: registre
onde está e o texto exato, e reporte.

---

## Não faça

- ❌ Não altere URL final, caminho de exibição, palavra-chave, lance ou orçamento.
- ❌ Não ative campanha, grupo ou anúncio que esteja pausado.
- ❌ Não mexa em perfil de pagamentos, forma de pagamento ou "quem paga".
- ❌ Não inicie nem conclua verificação de anunciante.
- ❌ Não envie recurso (appeal).
- ❌ Não crie anúncio novo para substituir o antigo, a menos que a interface não
  permita editar — nesse caso, **pare e reporte** antes de criar qualquer coisa.

## Ao terminar, reporte

1. Tabela com as 14 trocas: grupo, campo, texto antigo, texto novo, e se foi salvo
   com sucesso.
2. Qualquer "DE:" não encontrado, e em que grupo.
3. Se algum campo estava fixado (pinned), e se a fixação foi preservada.
4. Resultado da varredura do passo 11 — inclusive as ocorrências que você
   encontrou e **não** corrigiu.
5. Status dos anúncios depois de salvar (esperado: "em análise").
6. Qualquer aviso ou mudança de status que a conta tenha exibido.
