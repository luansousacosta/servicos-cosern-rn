/** Dados da marca e do site. Fonte única — usado em todas as páginas. */

export const SITE = {
  dominio: 'https://servicos.sousacosta.com.br',
  nome: 'Sousa Costa Energia',
  nomeCurto: 'Sousa Costa',
  titulo: 'Serviços para energia solar e Cosern no RN',
  descricao:
    'Consultoria em energia no RN: projeto solar, recarga de veículos elétricos em condomínios, alteração de carga, demanda, rateio, titularidade, modalidade tarifária, ART, laudo técnico e revisão de faturas.',
  idioma: 'pt-BR',
  regiao: 'RN',
  cidade: 'Natal',
  logo: '/logo-sousa-costa.png',
  logoBranca: '/logo-sousa-costa-branca.png',
  ogImagem: '/og-servicos.png',
};

/**
 * Dados cadastrais da empresa. Vão no rodapé de todas as páginas: é o que
 * identifica quem está por trás do site para o visitante, para o Código de
 * Defesa do Consumidor e para a análise das plataformas de anúncio.
 */
export const EMPRESA = {
  razaoSocial: 'Sousa Costa LTDA',
  cnpj: '48.725.763/0001-26',
  endereco: 'Rua Vitória, 17 — Amarante, São Gonçalo do Amarante/RN, CEP 59296-692',
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
  ga4: 'G-236DB6S5SY',
  adsId: 'AW-658673813',
  adsConversaoWhatsapp: 'AW-658673813/m5MKCLe76c0cEJWhiroC',
};
