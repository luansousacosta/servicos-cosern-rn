/** Dados da marca e do site. Fonte única — usado em todas as páginas. */

export const SITE = {
  dominio: 'https://servicos.sousacosta.com.br',
  nome: 'Sousa Costa Energia',
  nomeCurto: 'Sousa Costa',
  titulo: 'Serviços para energia solar e Cosern no RN',
  descricao:
    'Consultor autorizado Cosern no RN: projeto solar e de baixa tensão, alteração de carga, demanda, rateio, titularidade, dados cadastrais, modalidade tarifária, ART, laudo técnico e revisão de faturas.',
  idioma: 'pt-BR',
  regiao: 'RN',
  cidade: 'Natal',
  logo: '/logo-sousa-costa.png',
  logoBranca: '/logo-sousa-costa-branca.png',
  ogImagem: '/og-servicos.png',
};

export const CONTATO = {
  whatsapp: '5584991260677',
  whatsappExibicao: '(84) 99126-0677',
  whatsappAlt: '5584991388651',
  whatsappAltExibicao: '(84) 99138-8651',
  email: 'contato@sousacosta.com.br',
};

/** Números verificados da operação. Não acrescentar nada sem confirmação. */
export const PROVA = [
  { numero: '12+', unidade: 'anos', label: 'de atuação em energia no RN' },
  { numero: '~4', unidade: 'MWp', label: 'implantados' },
  { numero: '2,3', unidade: 'MWp', label: 'em operação e manutenção' },
  { numero: '167', unidade: 'municípios', label: 'do RN atendidos' },
];

/** Link de WhatsApp com mensagem pré-preenchida. */
export const wa = (mensagem, numero = CONTATO.whatsapp) =>
  `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;

export const CIDADES_ATENDIDAS = [
  'Natal', 'Parnamirim', 'São Gonçalo do Amarante', 'Macaíba', 'Extremoz',
  'Mossoró', 'Caicó', 'Currais Novos', 'Assú', 'João Câmara',
  'Santa Cruz', 'Nova Cruz', 'São José de Mipibu', 'Ceará-Mirim', 'Touros',
];

/**
 * Medição. Enquanto os campos estiverem vazios, NENHUM script externo é
 * carregado — o site continua sem requisição a terceiros. Basta preencher
 * o ID e publicar para as tags entrarem.
 *
 *   ga4                  → GA4, formato "G-XXXXXXXXXX"
 *   adsId                → Google Ads, formato "AW-XXXXXXXXX"
 *   adsConversaoWhatsapp → rótulo da conversão, "AW-XXXXXXXXX/AbCdEfGhIj"
 */
export const ANALYTICS = {
  ga4: '',
  adsId: 'AW-658673813',
  adsConversaoWhatsapp: 'AW-658673813/m5MKCLe76c0cEJWhiroC',
};
