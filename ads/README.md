# Campanha de Google Ads — Sousa Costa Energia

Estrutura pronta para subir no Google Ads. Verba de referência: **R$ 1.000/mês**.

Arquivos desta pasta:

| Arquivo | O que é |
|---|---|
| `anuncios.csv` | Anúncios responsivos de pesquisa (títulos e descrições), um por grupo |
| `palavras-chave.csv` | Palavras-chave em correspondência de frase e exata |
| `palavras-negativas.txt` | Lista de exclusão — aplicar na **conta inteira** |

Todos os textos foram validados contra os limites do Google (título 30, descrição 90,
caminho 15 caracteres).

---

## Estrutura e verba

Verba é definida **por campanha**, nunca por grupo de anúncios. Por isso a divisão em
três campanhas temáticas com o mesmo valor — é o que permite verba equilibrada entre
serviços sem estilhaçar o orçamento em 15 campanhas minúsculas.

| Campanha | Grupos de anúncios | Verba/dia |
|---|---|---|
| SC \| Solar e GD | Projeto solar · Rateio · EMUC | R$ 11,00 |
| SC \| Ligação e Projetos | Padrão de entrada · Aumento de carga · Prédios | R$ 11,00 |
| SC \| Conta e Tarifa | Conta alta · Demanda e tarifa · Titularidade | R$ 11,00 |

**Total: R$ 33/dia ≈ R$ 990/mês.**

Com essa verba, espere algo entre **60 e 100 cliques/mês** no conjunto. É pouco para
otimização automática, e é justamente por isso que a lista de palavras negativas
importa tanto: cada clique irrelevante custa proporcionalmente muito.

---

## Configuração das campanhas

Aplicar nas três, iguais:

- **Tipo:** Pesquisa. **Sem** "Rede de Display" e **sem** "Parceiros de pesquisa".
  A caixa da Display vem marcada por padrão e é o erro que mais consome verba de conta nova.
- **Local:** Rio Grande do Norte. Em *Opções de local*, escolher **"Presença: pessoas
  que estão ou frequentam regularmente"** — o padrão inclui quem apenas demonstra
  interesse na região, o que traz clique de fora do estado.
- **Idioma:** Português.
- **Lances:** começar em **Maximizar cliques com limite de CPC de R$ 3,00**. Trocar
  para *Maximizar conversões* só depois de acumular cerca de 15 a 30 conversões —
  antes disso o algoritmo não tem dados e gasta caro aprendendo.
- **Horário:** das 7h às 22h, todos os dias. Faz sentido porque você responde em
  minutos; se um dia isso mudar, reduza para o horário em que consegue responder.
- **Rotação de anúncios:** otimizar (padrão).

### Extensões (recursos)

Configurar uma vez, na conta:

- **Sitelinks** (mínimo 4): Projeto solar · Alteração de rateio · Revisão de faturas · Ligação nova
- **Frases de destaque:** Consultor autorizado · 12+ anos no RN · Orçamento sem compromisso · Atendemos todo o RN
- **Chamada:** (84) 99126-0677
- **Local:** vincular o Perfil da Empresa no Google assim que ele existir

### Modelo de acompanhamento (conta → Configurações)

```
{lpurl}?utm_source=google&utm_medium=cpc&utm_campaign={campaignid}&utm_term={keyword}
```

Assim cada visita chega ao GA4 já identificada por campanha e palavra-chave.

---

## Conversões

O site já dispara os eventos. Falta ligar as duas pontas:

1. **GA4** — crie a propriedade e coloque o ID (`G-XXXXXXXXXX`) em `src/data/site.mjs`,
   no bloco `ANALYTICS`. Publique.
2. Em GA4 → *Administrador → Eventos*, marque **`contato_whatsapp`** como
   **evento principal** (antigo "conversão").
3. **Google Ads** → *Ferramentas → Conversões → Importar → GA4* e importe
   `contato_whatsapp`. Marque como **conversão principal**.
4. Opcional, para atribuição mais rápida: crie também a conversão nativa do Ads e
   coloque o ID (`AW-…`) e o rótulo (`AW-…/…`) no mesmo bloco `ANALYTICS`.

O evento carrega dois parâmetros úteis:

- `servico` — qual página gerou o contato (`alteracao-de-rateio`, `home`, …)
- `local` — qual botão foi clicado (`topo`, `hero`, `faixa`, `flutuante`, `rodape`)

É com isso que você descobre **qual serviço paga a própria campanha** e pode
remanejar verba com base em dado, não em impressão.

---

## Atenção: uso da marca "Cosern" nos anúncios

Os textos desta pasta **não citam "Cosern"** nos títulos e descrições, de propósito.

Usar marca de terceiro como **palavra-chave** é permitido pelo Google. Usar no **texto
do anúncio** pode ser reprovado se o titular da marca tiver restrição registrada — e
grupos de distribuidoras normalmente têm. Anúncio reprovado por marca registrada
derruba o grupo inteiro até você recorrer.

Como você é consultor autorizado, existe caminho: o Google tem formulário de
autorização de uso de marca, preenchido pelo titular. Enquanto isso não estiver
resolvido, rode com os textos atuais, que passam sem risco.

Se um dia a autorização sair, trocar "distribuidora" por "Cosern" nos títulos costuma
melhorar a taxa de cliques nessas buscas — mas só depois da autorização.

---

## Antes de ativar

- [ ] GA4 instalado e `contato_whatsapp` marcado como evento principal
- [ ] Conversão importada no Ads e definida como principal
- [ ] Palavras negativas aplicadas na conta inteira
- [ ] Rede de Display e Parceiros de pesquisa **desmarcados** nas três campanhas
- [ ] Local configurado como "presença", não "interesse"
- [ ] Extensões preenchidas
- [ ] WhatsApp Business com mensagem de saudação automática configurada

## Depois de duas semanas

1. **Termos de pesquisa** (não palavras-chave): leia o relatório e transforme em
   negativa tudo que veio errado. Nas primeiras semanas isso costuma economizar
   de 20% a 30% da verba.
2. Pause palavras com mais de 30 cliques e nenhuma conversão.
3. Compare o custo por conversão entre as três campanhas e mova verba para a melhor —
   verba igual é ponto de partida, não regra permanente.
4. Confira, no GA4, quais páginas de serviço convertem. Serviço com muita visita e
   nenhum contato costuma ser problema da página, não do anúncio.
