/**
 * Política de privacidade. Página estática, sem dados dinâmicos: descreve o
 * que o site coleta (medição do Google e o contato que o próprio visitante
 * inicia no WhatsApp) e como exercer os direitos da LGPD.
 *
 * Mantenha em dia com o que o site realmente faz. Se um script de medição for
 * adicionado ou removido em src/data/site.mjs (ANALYTICS), atualize a seção
 * "O que coletamos" aqui também — política que descreve algo diferente do que
 * o site faz é pior do que não ter política.
 */
import { CONTATO, EMPRESA, SITE } from '../data/site.mjs';
import { esc, pagina } from './layout.mjs';

const ATUALIZADO = '2026-09-12';

const bloco = (titulo, corpo) => `
  <h2>${esc(titulo)}</h2>
  ${corpo}`;

export function paginaPrivacidade(css) {
  const titulo = 'Política de privacidade | Sousa Costa Energia';
  const descricao =
    'Como a Sousa Costa Energia trata seus dados: o que coletamos, por quê, com quem compartilhamos e como exercer seus direitos pela LGPD.';

  const conteudo = `
<section class="secao">
  <div class="container conteudo">
    <h1>Política de privacidade</h1>
    <p>
      Esta política explica como a <strong>${esc(EMPRESA.razaoSocial)}</strong>, CNPJ
      ${esc(EMPRESA.cnpj)}, trata os dados pessoais de quem visita
      <a href="${SITE.dominio}/">${esc(SITE.dominio.replace('https://', ''))}</a> ou entra em
      contato conosco. Ela segue a Lei Geral de Proteção de Dados (Lei nº 13.709/2018).
    </p>
    <p><em>Última atualização: 12 de setembro de 2026.</em></p>

    ${bloco('Quem é o controlador dos dados', `
    <p>
      ${esc(EMPRESA.razaoSocial)} — CNPJ ${esc(EMPRESA.cnpj)}<br />
      ${esc(EMPRESA.endereco)}<br />
      E-mail para assuntos de privacidade: <a href="mailto:${esc(CONTATO.email)}">${esc(CONTATO.email)}</a>
    </p>`)}

    ${bloco('O que coletamos', `
    <p><strong>Quando você apenas navega.</strong> Usamos Google Analytics 4 e Google Ads para
    medir audiência e entender quais páginas trazem contato. Esses serviços registram dados de
    navegação — páginas vistas, tempo de permanência, origem do acesso, tipo de dispositivo e um
    identificador do seu navegador — por meio de cookies e tecnologias semelhantes. Não usamos
    esses dados para identificar você pessoalmente.</p>
    <p><strong>Quando você nos chama no WhatsApp.</strong> O contato parte de você. A partir daí
    tratamos o que você mesmo nos informa: nome, telefone, cidade, dados da unidade consumidora e
    o que for necessário para analisar o seu caso. Também registramos o histórico da conversa para
    dar continuidade ao atendimento.</p>
    <p>Não coletamos dados sensíveis, não compramos listas e não enviamos mensagem para quem não
    nos procurou primeiro.</p>`)}

    ${bloco('Por que tratamos esses dados', `
    <ul>
      <li><strong>Para responder e executar o serviço</strong> — analisar o caso, elaborar
      orçamento, conduzir o processo junto à distribuidora. Base legal: execução de contrato ou
      procedimento preliminar a pedido do titular (art. 7º, V).</li>
      <li><strong>Para medir e melhorar o site e os anúncios</strong> — saber o que funciona e o
      que não funciona. Base legal: legítimo interesse (art. 7º, IX).</li>
      <li><strong>Para cumprir obrigações legais</strong> — fiscais, contábeis e regulatórias.
      Base legal: obrigação legal (art. 7º, II).</li>
    </ul>`)}

    ${bloco('Com quem compartilhamos', `
    <p>Compartilhamos apenas o necessário, e apenas com:</p>
    <ul>
      <li><strong>Neoenergia Cosern</strong> — quando você nos autoriza por procuração a
      protocolar e acompanhar um processo em seu nome. O envio se limita ao que a distribuidora
      exige para aquele processo.</li>
      <li><strong>Google</strong> (Analytics e Ads) — dados de navegação, conforme descrito acima.</li>
      <li><strong>Meta / WhatsApp</strong> — a conversa trafega pela plataforma do WhatsApp e
      está sujeita também à política de privacidade da Meta.</li>
      <li><strong>Órgãos públicos</strong> — quando houver exigência legal ou ordem judicial.</li>
    </ul>
    <p>Não vendemos dados pessoais, em nenhuma hipótese.</p>`)}

    ${bloco('Por quanto tempo guardamos', `
    <p>Dados de atendimento ficam conosco enquanto durar a relação e, depois dela, pelo prazo
    necessário para cumprir obrigações legais e defender direitos — em regra, cinco anos. Dados de
    navegação seguem os prazos de retenção do Google Analytics. Você pode pedir a exclusão antes
    disso, no que não estiver sujeito a guarda obrigatória.</p>`)}

    ${bloco('Seus direitos', `
    <p>A LGPD garante a você, a qualquer momento e sem custo, o direito de confirmar se tratamos
    seus dados, acessá-los, corrigir o que estiver errado ou desatualizado, pedir anonimização,
    bloqueio ou eliminação, solicitar portabilidade, saber com quem compartilhamos e revogar um
    consentimento dado.</p>
    <p>Para exercer qualquer um deles, escreva para
    <a href="mailto:${esc(CONTATO.email)}">${esc(CONTATO.email)}</a> ou chame no WhatsApp
    ${esc(CONTATO.whatsappExibicao)}. Respondemos em até 15 dias.</p>`)}

    ${bloco('Cookies', `
    <p>Usamos cookies próprios, para o funcionamento básico do site, e cookies do Google, para
    medição e anúncios. Você pode bloqueá-los nas configurações do seu navegador — o site continua
    funcionando, mas deixamos de medir a visita.</p>`)}

    ${bloco('Segurança', `
    <p>O site trafega em HTTPS e o acesso aos dados de atendimento é restrito a quem precisa deles
    para trabalhar no seu caso. Nenhum sistema é imune a incidentes; se ocorrer algum que traga
    risco relevante a você, comunicaremos você e a ANPD, como manda a lei.</p>`)}

    ${bloco('Mudanças nesta política', `
    <p>Se esta política mudar, a data de atualização no topo muda junto. Alterações relevantes são
    avisadas nesta mesma página.</p>`)}
  </div>
</section>`;

  return pagina({
    titulo,
    descricao,
    caminho: '/politica-de-privacidade/',
    conteudo,
    css,
    zapMsg: 'Olá! Tenho uma dúvida sobre privacidade e uso dos meus dados.',
    schemas: [
      {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        '@id': `${SITE.dominio}/politica-de-privacidade/#pagina`,
        name: titulo,
        description: descricao,
        url: `${SITE.dominio}/politica-de-privacidade/`,
        inLanguage: 'pt-BR',
        dateModified: ATUALIZADO,
      },
    ],
  });
}
