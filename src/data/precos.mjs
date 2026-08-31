/**
 * Preço mínimo por serviço — o "a partir de" que aparece no site.
 *
 * É o filtro mais forte que existe: quem acha que o serviço é gratuito desiste
 * antes de mandar mensagem, e quem manda já sabe a ordem de grandeza.
 *
 * COMO USAR
 *   Preencha o valor em reais, sem centavos. O número aparece no card da home,
 *   na página do serviço e no JSON-LD (`minPrice`), que é o que permite ao
 *   Google exibir preço no resultado de busca.
 *   Slug sem valor, ou com valor 0, continua exibindo "Orçamento sob consulta" —
 *   o comportamento atual.
 *
 * ATENÇÃO
 *   A política do Google Ads exige que o preço citado no anúncio seja encontrável
 *   na página de destino. Publique aqui PRIMEIRO, depois mexa no anúncio.
 *   Nunca o contrário.
 */
export const PRECOS = {
  // 'alteracao-de-dados-cadastrais': 250,
  // 'alteracao-de-titularidade': 350,
  // 'consultoria-de-faturamento': 500,
  // ...
};

/** "A partir de R$ 250" — sem centavos, com separador de milhar. */
export const precoMinimo = (slug) => {
  const v = PRECOS[slug];
  if (!v || v <= 0) return null;
  return { valor: v, texto: `A partir de R$ ${v.toLocaleString('pt-BR')}` };
};
