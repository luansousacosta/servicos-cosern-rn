/**
 * Conteúdo das páginas de serviço. Cada item vira uma URL própria
 * (/servicos/<slug>/) com title, meta description, JSON-LD e FAQ exclusivos.
 *
 * Regra de conteúdo: nada de promessa de prazo da distribuidora e nada de
 * número que não seja verificável. Prazos citados são os previstos na
 * regulação (REN ANEEL 1.000/2021, 1.059/2023 e Lei 14.300/2022).
 */

export const SERVICOS = [
  {
    slug: 'carregador-de-veiculo-eletrico-condominio',
    destaque: true,
    atualizado: '2026-08-26',
    chamada: 'Projeto, medição por vaga, instalação e aumento de carga para recarga de carro elétrico na garagem — dentro da RT 05 do CBMRN.',
    nav: 'Recarga veicular (SAVE)',
    icone: 'carregador',
    titulo: 'Carregador de Carro Elétrico em Condomínio | RN',
    h1: 'Recarga de veículos elétricos em condomínios e edifícios',
    descricao:
      'Projeto, medição por vaga, instalação e aumento de carga para carregador de carro elétrico em condomínios do RN, conforme a RT 05 do CBMRN e a NBR 17019.',
    badge: 'Condomínios e edifícios',
    respostaCurta:
      'No Rio Grande do Norte, ponto de recarga em garagem de condomínio só é regular com estação dedicada em modo 3 ou 4, circuito exclusivo por vaga, DR de 30 mA por ponto, disjuntor de corte, sinalização normativa e afastamento de 5 m das rotas de fuga — exigências da RT 05 do CBMRN, em vigor desde 15/07/2026, sem prazo de adaptação. Carregador portátil ligado na tomada da vaga não é regularizável em garagem interna. Fazemos o diagnóstico, o projeto com ART, o memorial SAVE, a instalação e o processo de carga junto à Cosern.',
    resumo:
      'A garagem virou instalação elétrica de risco especial. Conduzimos o pacote inteiro: diagnóstico de conformidade contra a RT 05 do CBMRN e a NBR 17019, estudo de demanda para não estourar os 75 kW, projeto elétrico com ART, medição e rateio por vaga, fornecimento e instalação das estações e o aumento de carga junto à Cosern quando for necessário.',
    paraQuem: [
      'Síndicos e administradoras com moradores pedindo ponto de recarga na vaga',
      'Condomínios que já têm carregador improvisado na tomada e precisam regularizar',
      'Incorporadoras e construtoras preparando garagem de empreendimento novo',
      'Condomínios notificados pelo Corpo de Bombeiros ou cobrados pela seguradora',
      'Empresas, hotéis e estacionamentos instalando recarga para clientes e frota',
    ],
    entregaveis: [
      'Diagnóstico de conformidade vaga a vaga contra a RT 05 do CBMRN e as normas ABNT',
      'Estudo de capacidade elétrica: carga instalada, demanda e curva de carga do prédio',
      'Comparativo entre controle de recarga e aumento do padrão de entrada, com custo',
      'Projeto elétrico com ART, conforme NBR 5410 e NBR 17019',
      'Memorial Descritivo SAVE e Formulário de Atividade Técnica (FAT) para o CBMRN',
      'Medição individual por vaga e regra de rateio do consumo entre os condôminos',
      'Fornecimento e instalação das estações, com controle dinâmico de carga',
      'Solicitação de aumento de carga na Cosern e acompanhamento até a conclusão',
    ],
    documentos: [
      'Fatura recente do condomínio (com o número da UC e a carga contratada)',
      'CNPJ do condomínio, convenção e ata de eleição do síndico',
      'Projeto de segurança contra incêndio aprovado e certificado de licenciamento do CBMRN',
      'Planta da garagem com a numeração das vagas',
      'Quadro de cargas ou projeto elétrico existente da edificação, se houver',
      'Relação das vagas que vão receber ponto de recarga',
      'Procuração para representação junto à distribuidora',
    ],
    secoes: [
      {
        rotulo: 'Base normativa',
        titulo: 'Cinco documentos que precisam ser atendidos ao mesmo tempo',
        intro:
          'Não existe uma norma única de recarga veicular. A norma do Corpo de Bombeiros importa as normas da ABNT para dentro dela: cumprir só o que o bombeiro vistoria não basta.',
        itens: [
          { t: 'Diretriz Nacional CNCGBM/LIGABOM', d: 'Aprovada pela Portaria nº 029/LIGABOM/2025 e vigente desde 22/02/2026. Define o piso nacional de segurança contra incêndio em garagens com SAVE, mas não se aplica sozinha — cada estado a implementa.' },
          { t: 'Resolução Técnica nº 05 do CBMRN', d: 'Em vigor desde 15/07/2026. É a norma efetivamente cobrada na vistoria no RN. Reproduz a diretriz nacional e vai além dela em cinco pontos.' },
          { t: 'ABNT NBR 17019:2022', d: 'Norma de instalação elétrica para alimentação de veículos elétricos. Traz o circuito dedicado por vaga, o DR de 30 mA por ponto, o DPS, os graus IPX4/IP4X e IK08 — e o fator de demanda igual a 1.' },
          { t: 'ABNT NBR 5410:2004', d: 'A base sobre a qual a NBR 17019 opera. Tudo o que a 17019 não altera continua valendo: dimensionamento, proteção, aterramento, quadros e verificação final.' },
          { t: 'ABNT NBR IEC 61851-1', d: 'Define os modos de recarga 1, 2, 3 e 4. Sem ela, as expressões "modo 3" e "modo 4" usadas pelas normas de bombeiros não teriam significado técnico.' },
        ],
      },
      {
        rotulo: 'Onde o RN aperta',
        titulo: 'Projeto feito só pela diretriz nacional é reprovado aqui',
        intro:
          'A RT 05 do CBMRN é mais rigorosa que o piso nacional em cinco pontos. Quem desenha olhando apenas para a diretriz entrega projeto que não passa no Rio Grande do Norte.',
        itens: [
          { t: 'Afastamento de 5 m das rotas de fuga', d: 'A diretriz nacional exige o afastamento apenas em edificações com uma única rota de saída. A RT 05 exige que toda vaga com ponto de recarga mantenha 5 m de qualquer trecho das rotas de saída, medidos do perímetro de demarcação da vaga.' },
          { t: 'Sinalização especificada', d: 'A placa precisa ser refletiva, com letras maiúsculas de no mínimo 10 mm, brancas sobre fundo vermelho, com o texto normativo completo do desligamento rápido. Não é sinalização genérica.' },
          { t: 'Memorial Descritivo SAVE obrigatório', d: 'Formulário anexo à norma estadual, apresentado no ato de entrega do projeto de segurança contra incêndio. Sem ele, o projeto não entra.' },
          { t: 'Vagas identificadas em planta', d: 'As vagas com ponto de recarga devem aparecer identificadas nas plantas do projeto de segurança contra incêndio e pânico.' },
          { t: 'Definição rigorosa de garagem externa', d: 'Só é externa a garagem fora da projeção da edificação e com todas as faces abertas, sem paredes. Garagem de subsolo ou sob o prédio é interna — e nela os modos 1 e 2 são vedados.' },
        ],
      },
      {
        rotulo: 'O ponto que quase ninguém calculou',
        titulo: 'Demanda: o item que inviabiliza o projeto depois de aprovado',
        intro:
          'A NBR 17019 determina, no item 4.2.1.1.103, que o fator de demanda do circuito de distribuição seja igual a 1 — salvo se houver controle de recarga. Sem controle, o projeto é obrigado a somar 100% da potência de todos os carregadores à carga instalada. Não se pode arbitrar que "nunca todos vão carregar ao mesmo tempo".',
        itens: [
          { t: 'O que acontece com um prédio típico', d: 'Carga instalada de 45 kW mais oito vagas de 7,4 kW somam 104,2 kW com fator 1,0. Pelo art. 23 da REN ANEEL 1.000/2021, acima de 75 kW a unidade sai do Grupo B e passa a ser atendida em média tensão.' },
          { t: 'O custo de cruzar os 75 kW', d: 'Deixa de ser ajuste de quadro e vira outra obra: entrada em média tensão, cabine primária, transformador próprio, projeto e aprovação na distribuidora, medição em MT, demanda contratada e manutenção periódica de subestação.' },
          { t: 'A saída que a própria norma abre', d: 'Com controle de recarga — sistema de gestão que assegura que a soma das correntes não excede um valor predeterminado — o mesmo prédio fica em 70 kW e permanece no Grupo B, com as oito vagas atendidas e a potência distribuída dinamicamente.' },
          { t: 'Acordo em ata não vale como limitação', d: 'A NBR 17019 exige que a corrente máxima seja configurada por chave, programação ou meio equivalente, acessível apenas a pessoa advertida ou qualificada. Combinado entre moradores não reduz o fator de demanda no projeto.' },
          { t: 'Quando o aumento de carga é o caminho certo', d: 'Nem sempre o controle resolve. Quando a carga do próprio prédio já está no limite, o caminho é solicitar aumento de carga à Cosern e adequar o padrão de entrada — processo que conduzimos junto com o projeto.' },
        ],
      },
      {
        rotulo: 'Medição e rateio',
        titulo: 'Quem carrega o carro paga a energia que usou',
        intro:
          'O ponto de recarga fica ligado ao relógio do condomínio. Sem individualização, a conta da área comum sobe e todos pagam pelo carro de alguns — é a principal fonte de conflito em assembleia.',
        itens: [
          { t: 'Medição por vaga', d: 'Cada ponto recebe medição própria, seja por medidor individual no circuito, seja pela medição interna da estação de recarga.' },
          { t: 'Identificação do usuário', d: 'Estações com controle de acesso por cartão ou aplicativo registram quem carregou, quando e quanto — o relatório vira a base do rateio.' },
          { t: 'Regra de rateio', d: 'Definimos o critério com o síndico: repasse do kWh medido pela tarifa da fatura, com ou sem parcela de custo fixo da infraestrutura, e a forma de lançamento no boleto do condomínio.' },
          { t: 'Registro em ata', d: 'Intervenção em área comum e cobrança individualizada precisam de deliberação em assembleia. Entregamos a memória de cálculo e o texto técnico para a ata.' },
        ],
      },
    ],
    passos: [
      { t: 'Levantar o que já existe na garagem', d: 'Percorremos as vagas e registramos, com foto, todo ponto de recarga em uso — inclusive tomadas improvisadas e extensões. É o que a vistoria vai encontrar, e é a base do diagnóstico.' },
      { t: 'Classificar a edificação', d: 'Definimos se há exigência de hidrantes e mangotinhos, se a garagem é interna ou externa pelo critério da RT 05 e se o prédio é novo ou existente. Essas três respostas determinam quais itens da norma se aplicam.' },
      { t: 'Avaliar a capacidade elétrica antes de escolher o carregador', d: 'Carga instalada, demanda e curva de carga da edificação. É aqui que se decide entre controle de recarga e aumento de entrada — e essa decisão muda o orçamento inteiro.' },
      { t: 'Projeto com ART e memorial SAVE', d: 'Projeto elétrico conforme NBR 5410 e NBR 17019, Memorial Descritivo SAVE e, quando for prédio existente, o laudo de gerenciamento de riscos.' },
      { t: 'Assembleia com números', d: 'Levamos as duas hipóteses de custo — com e sem controle de recarga —, a regra de rateio, o cronograma e as datas-limite. Intervenção em área comum exige deliberação registrada em ata.' },
      { t: 'Executar, protocolar e comunicar', d: 'Instalação das estações, protocolo no CBMRN (projeto ou FAT), aumento de carga na Cosern quando necessário, atualização do certificado de licenciamento e comunicação formal à seguradora.' },
    ],
    prazoNota:
      'As exigências elétricas do item 5.1 da RT 05 valem desde 15/07/2026, sem possibilidade de prorrogação — modos 3 e 4, pontos de desligamento, disjuntor de corte, sinalização, identificação em planta e os 5 m das rotas de fuga já são exigíveis hoje. O prazo de dois anos, até 15/07/2028, alcança apenas as medidas estruturais do item 5.4 (chuveiros interligados, detecção e gerenciamento de riscos) e só nas edificações onde já se exige hidrantes e mangotinhos. Prazos e exigências devem ser confirmados junto ao CBMRN e à distribuidora.',
    faq: [
      { p: 'Posso deixar o carregador portátil ligado na tomada da vaga?', r: 'Em garagem interna, não. A RT 05 do CBMRN admite apenas os modos 3 e 4 nessas garagens, e considera interna toda garagem que não esteja fora da projeção do edifício com todas as faces abertas. A maioria das garagens de condomínio no RN fica sob a projeção do prédio ou tem ao menos uma parede — nelas o carregador portátil não é regularizável. Não é questão de laudo: é vedação normativa.' },
      { p: 'Qual norma trata de carregador de carro elétrico em condomínio no RN?', r: 'A Resolução Técnica nº 05 do CBMRN, em vigor desde 15 de julho de 2026, é a norma cobrada na vistoria. Ela reproduz a Diretriz Nacional CNCGBM/LIGABOM e determina o atendimento integral às NBR 5410, NBR 17019 e NBR IEC 61851-1. São cinco documentos que precisam ser atendidos ao mesmo tempo.' },
      { p: 'Instalar carregadores obriga o condomínio a aumentar o padrão de entrada?', r: 'Depende da carga já instalada. A NBR 17019 impõe fator de demanda igual a 1, ou seja, o projeto soma 100% da potência de todos os pontos. Se o resultado passar de 75 kW, a unidade sai do Grupo B e migra para média tensão, com cabine, transformador e demanda contratada. Com sistema de controle de recarga, o conjunto passa a ser dimensionado por um valor limitado e conhecido, o que na maior parte dos casos mantém o prédio em baixa tensão. O estudo de capacidade é o que diz qual dos dois caminhos vale para o seu prédio.' },
      { p: 'O condomínio existente tem dois anos para se adequar?', r: 'Só em parte, e esse é o erro de leitura mais comum. Os dois anos, até 15/07/2028, valem apenas para as medidas estruturais — chuveiros interligados ao sistema de hidrantes, detecção e gerenciamento de riscos — e apenas onde já se exige hidrantes e mangotinhos. A parte elétrica, que é justamente a do carregador na vaga, venceu no dia em que a norma entrou em vigor.' },
      { p: 'Como cada morador paga a energia que gastou carregando?', r: 'Instalando medição por vaga e identificação do usuário na estação. O consumo de cada ponto fica registrado e é repassado ao condômino pelo critério aprovado em assembleia — em geral o kWh medido multiplicado pela tarifa da fatura, com ou sem uma parcela de custo fixo da infraestrutura. Sem individualização, a conta da área comum sobe e todos pagam pelo carro de alguns.' },
      { p: 'A instalação irregular afeta o seguro do prédio?', r: 'Não afirmamos que a seguradora vai negar cobertura — isso depende da apólice, da perícia e, se houver litígio, do entendimento judicial. O que é concreto: o Código Civil trata do agravamento de risco e do dever de comunicar alteração relevante, e a regulação de sinistro de incêndio costuma pedir o certificado de licenciamento do Corpo de Bombeiros e a documentação técnica das instalações. Se as vagas com recarga não constam do projeto aprovado, essa lacuna aparece.' },
      { p: 'Vocês vendem e instalam o carregador ou só fazem o projeto?', r: 'Os dois. Fornecemos e instalamos as estações, com sistema de gestão dinâmica de carga quando o dimensionamento exigir, e também atuamos só na parte técnica se o condomínio já comprou o equipamento. Nesse caso conferimos se o modelo atende aos graus de proteção IPX4/IP4X e IK08 e aos modos de recarga admitidos.' },
      { p: 'Precisa de assembleia para instalar?', r: 'Precisa. A infraestrutura ocupa área comum e a cobrança individualizada muda a rotina de rateio do condomínio, o que exige deliberação. Entregamos o material técnico, as duas hipóteses de custo e a memória de cálculo para o síndico levar à pauta.' },
    ],
    relacionados: ['alteracao-de-carga-baixa-tensao', 'projeto-multiplas-unidades-baixa-tensao', 'laudo-tecnico'],
    keywords: ['carregador de carro elétrico condomínio', 'recarga de veículos elétricos em edifícios', 'SAVE condomínio RN', 'RT 05 CBMRN carregador', 'NBR 17019 condomínio', 'instalação carregador veicular natal', 'ponto de recarga garagem prédio', 'aumento de carga condomínio carregador'],
    waMsg: 'Olá! Sou síndico(a) e preciso de ajuda com recarga de veículos elétricos na garagem do condomínio.',
  },

  {
    slug: 'projeto-de-energia-solar',
    chamada: 'Projeto elétrico, ART e solicitação de acesso conduzidos até a homologação da usina.',
    nav: 'Projeto solar',
    icone: 'sol',
    titulo: 'Projeto Solar e Acesso na Cosern | Sousa Costa',
    h1: 'Projeto de energia solar e solicitação de acesso na Cosern',
    descricao:
      'Projeto elétrico, ART e solicitação de acesso da sua usina solar na Cosern, até a homologação. Consultoria técnica em todo o Rio Grande do Norte.',
    badge: 'Geração distribuída',
    respostaCurta:
      "Para ligar uma usina solar à rede da Cosern é preciso projeto elétrico com ART, solicitação de acesso protocolada no portal de geração distribuída, parecer de acesso favorável, vistoria e troca do medidor por um bidirecional. Conduzimos todas essas etapas até a homologação, em qualquer município do Rio Grande do Norte. Micro é até 75 kW; acima disso e até 5 MW é minigeração, com documentação e prazos maiores.",
    resumo:
      'Do dimensionamento à troca do medidor: elaboramos o projeto elétrico, emitimos a ART e conduzimos a solicitação de acesso no portal de geração distribuída da Cosern até a homologação da usina.',
    paraQuem: [
      'Integradores que querem terceirizar a parte documental e regulatória',
      'Empresas e produtores rurais instalando a própria geração',
      'Quem teve o projeto reprovado e precisa reapresentar corrigido',
    ],
    entregaveis: [
      'Memorial descritivo e diagrama unifilar assinados',
      'ART de projeto (e de execução, quando contratada)',
      'Formulário de solicitação de acesso protocolado no portal GD',
      'Acompanhamento do parecer de acesso e resposta a pendências',
      'Solicitação de vistoria e acompanhamento até a troca do medidor',
    ],
    documentos: [
      'Fatura recente da unidade consumidora (com o número da UC)',
      'Documento do titular (CPF/CNPJ) e comprovante de posse ou propriedade',
      'Datasheet dos módulos e do inversor a ser instalado',
      'Coordenadas e endereço exato do local da usina',
      'Procuração para representação junto à distribuidora',
    ],
    passos: [
      { t: 'Levantamento', d: 'Conferimos a UC, a classe, o tipo de ligação e a carga instalada para saber o que a distribuidora vai exigir antes de desenhar qualquer coisa.' },
      { t: 'Projeto e ART', d: 'Diagrama unifilar, memorial descritivo e dimensionamento de proteções, com ART registrada no CREA em nome do responsável técnico.' },
      { t: 'Solicitação de acesso', d: 'Protocolo no portal de geração distribuída da Cosern com a documentação completa, no formato que o sistema aceita.' },
      { t: 'Parecer e pendências', d: 'Acompanhamos o parecer de acesso e respondemos exigências. É aqui que a maioria dos processos trava por documento fora do padrão.' },
      { t: 'Vistoria e homologação', d: 'Solicitação de vistoria, acompanhamento da inspeção e conferência da troca do medidor bidirecional.' },
    ],
    prazoNota:
      'A regulação prevê prazos para cada etapa — por exemplo, parecer de acesso em até 15 dias corridos para microgeração quando não há necessidade de obras na rede. O que costuma atrasar não é o prazo, é documentação incompleta ou fora do padrão exigido.',
    faq: [
      { p: 'Qual a diferença entre microgeração e minigeração?', r: 'Microgeração é a central geradora com potência instalada até 75 kW. Acima disso e até 5 MW é minigeração, que exige documentação adicional, estudos e prazos maiores de análise pela distribuidora.' },
      { p: 'Preciso de ART mesmo em sistema residencial pequeno?', r: 'Sim. A distribuidora exige anotação de responsabilidade técnica do profissional habilitado para o projeto, independentemente do porte. Sem ART válida, a solicitação de acesso não avança.' },
      { p: 'Vocês fazem a instalação também?', r: 'A instalação pode ser feita pelo seu integrador de confiança. Nosso escopo é o projeto, a documentação e o processo junto à Cosern — mas fazemos a compatibilização com quem vai executar.' },
      { p: 'Já instalei e a usina não foi homologada. Dá para resolver?', r: 'Dá. Fazemos o diagnóstico do que foi apresentado, corrigimos o projeto e reapresentamos a solicitação. É um caso comum quando o sistema foi instalado antes do parecer de acesso.' },
    ],
    relacionados: ['art-projeto-solar-cosern', 'multiplas-unidades-consumidoras', 'laudo-tecnico'],
    keywords: ['projeto de energia solar natal', 'solicitação de acesso cosern', 'homologação usina solar rn', 'parecer de acesso cosern', 'projeto fotovoltaico rio grande do norte'],
    waMsg: 'Olá! Preciso de projeto e solicitação de acesso de energia solar na Cosern.',
  },

  {
    slug: 'multiplas-unidades-consumidoras',
    chamada: 'Uma usina dividindo créditos entre várias unidades, com o rateio regularizado.',
    nav: 'Múltiplas UCs (EMUC)',
    icone: 'predio',
    titulo: 'Projeto EMUC e Múltiplas UCs na Cosern | Sousa Costa',
    h1: 'Projeto de geração para múltiplas unidades consumidoras (EMUC)',
    descricao:
      'Estruturação de EMUC e geração compartilhada na Cosern: condomínios e grupos de empresas dividindo a energia de uma usina, com rateio regularizado.',
    badge: 'Condomínios e grupos',
    respostaCurta:
      "Uma única usina pode abastecer várias unidades consumidoras por meio de EMUC, geração compartilhada ou autoconsumo remoto — cada arranjo tem requisito próprio de titularidade e vínculo entre as unidades. Fazemos o enquadramento correto, o projeto e o cadastro do rateio na Cosern, para que o crédito chegue em cada UC na proporção definida.",
    resumo:
      'Uma usina, várias unidades consumidoras recebendo crédito. Estruturamos o empreendimento com múltiplas unidades consumidoras (EMUC) e a geração compartilhada dentro das regras da Cosern, do enquadramento ao rateio.',
    paraQuem: [
      'Condomínios residenciais e comerciais com áreas comuns e unidades privativas',
      'Grupos de empresas com o mesmo CNPJ raiz ou sob consórcio/cooperativa',
      'Investidores montando usina para dividir créditos entre vários consumidores',
    ],
    entregaveis: [
      'Análise de enquadramento: EMUC, geração compartilhada ou autoconsumo remoto',
      'Projeto elétrico e ART da central geradora',
      'Estruturação do rateio entre as unidades participantes',
      'Protocolo e acompanhamento do processo junto à Cosern',
      'Orientação sobre a documentação societária/condominial exigida',
    ],
    documentos: [
      'Faturas de todas as unidades que vão receber crédito',
      'Convenção de condomínio ou ato constitutivo do consórcio/cooperativa',
      'Ata de assembleia autorizando a instalação, quando condomínio',
      'CNPJ do condomínio e documento do síndico ou representante',
      'Relação das UCs com os percentuais de rateio pretendidos',
    ],
    passos: [
      { t: 'Enquadramento', d: 'Nem todo grupo de unidades é EMUC. Verificamos se o caso é EMUC, geração compartilhada ou autoconsumo remoto — errar aqui invalida o processo inteiro.' },
      { t: 'Modelagem do rateio', d: 'Definimos os percentuais por unidade a partir do consumo histórico de cada UC, para não gerar crédito preso em unidade que não consome.' },
      { t: 'Projeto e documentação', d: 'Projeto elétrico, ART e a documentação societária ou condominial que comprova o vínculo entre as unidades.' },
      { t: 'Protocolo e acompanhamento', d: 'Solicitação de acesso e cadastro das unidades beneficiárias no sistema de compensação, com resposta às pendências.' },
    ],
    prazoNota:
      'Processos com múltiplas unidades exigem análise mais longa que uma UC única, porque a distribuidora confere o vínculo entre as unidades e a soma dos percentuais. Documentação condominial incompleta é a causa mais frequente de indeferimento.',
    faq: [
      { p: 'Qual a diferença entre EMUC e geração compartilhada?', r: 'No EMUC as unidades estão no mesmo local, sob uma mesma matrícula ou condomínio — típico de prédios. Na geração compartilhada, consumidores de locais diferentes se reúnem em consórcio ou cooperativa para dividir a energia de uma usina.' },
      { p: 'O condomínio precisa de assembleia?', r: 'Na prática, sim. A distribuidora costuma exigir o documento que comprove a decisão e a representação legal de quem assina o processo, além da convenção condominial.' },
      { p: 'Posso incluir uma unidade depois?', r: 'Pode. A inclusão de nova unidade beneficiária é feita por alteração de rateio, que também precisa ser protocolada e aprovada — não basta combinar internamente.' },
      { p: 'A usina precisa ficar no mesmo endereço?', r: 'No EMUC, sim, a geração fica no próprio empreendimento. Nas outras modalidades a usina pode estar em outro local, desde que na mesma área de concessão da Cosern e com o mesmo titular ou vínculo válido.' },
      { p: 'Isso é o projeto elétrico do prédio?', r: 'Não. Aqui tratamos da divisão dos créditos de uma usina solar entre as unidades. A entrada de energia do prédio — centro de medição, prumada e UC da área comum — é outro serviço: projeto de entrada para múltiplas unidades consumidoras.' },
    ],
    relacionados: ['alteracao-de-rateio', 'projeto-multiplas-unidades-baixa-tensao', 'projeto-de-energia-solar'],
    keywords: ['emuc cosern', 'múltiplas unidades consumidoras energia solar', 'geração compartilhada rn', 'energia solar condomínio natal', 'autoconsumo remoto cosern'],
    waMsg: 'Olá! Quero estruturar um projeto de múltiplas unidades consumidoras (EMUC) na Cosern.',
  },

  {
    slug: 'alteracao-de-rateio',
    chamada: 'Crédito indo para a unidade que realmente consome, antes de vencer em 60 meses.',
    nav: 'Alteração de rateio',
    icone: 'divisao',
    titulo: 'Alteração de Rateio na Cosern | Sousa Costa',
    h1: 'Alteração de rateio de créditos na Cosern',
    descricao:
      'Inclusão, exclusão e mudança de percentual das unidades beneficiárias na Cosern. Crédito vai para quem consome, em vez de vencer em 60 meses.',
    badge: 'Créditos de energia',
    respostaCurta:
      "O rateio é o percentual de crédito de energia que cada unidade beneficiária recebe da usina, e ele só muda por pedido formal à distribuidora — a soma precisa fechar 100%. Protocolamos a alteração na Cosern, incluímos ou excluímos unidades e acompanhamos até a nova divisão aparecer na fatura.",
    resumo:
      'Crédito sobrando em uma UC e faltando em outra significa dinheiro parado — e crédito tem validade de 60 meses. Fazemos a alteração de rateio no sistema de compensação da Cosern para o excedente ir onde ele realmente abate a conta.',
    paraQuem: [
      'Quem tem crédito acumulado numa unidade e conta cheia em outra',
      'Empresas que abriram, fecharam ou mudaram de endereço',
      'Condomínios e consórcios que precisam incluir ou excluir participantes',
    ],
    entregaveis: [
      'Diagnóstico do rateio atual e do saldo de créditos por unidade',
      'Simulação do novo rateio com base no consumo real de cada UC',
      'Formulário de alteração de rateio protocolado na Cosern',
      'Acompanhamento até a alteração aparecer na fatura',
    ],
    documentos: [
      'Faturas recentes da unidade geradora e de todas as beneficiárias',
      'Documento do titular da geração e procuração',
      'Relação das UCs com os novos percentuais (somando 100%)',
      'Documento do vínculo, quando houver mudança de participantes',
    ],
    passos: [
      { t: 'Leitura do saldo', d: 'Levantamos o saldo de créditos e o consumo de cada unidade para ver onde o excedente está encalhando e quanto está perto de vencer.' },
      { t: 'Novo rateio', d: 'Calculamos os percentuais para que a geração cubra o consumo de cada UC ao longo do ano, considerando sazonalidade e o custo de disponibilidade que nunca é abatido.' },
      { t: 'Protocolo', d: 'Preenchimento e envio do pedido de alteração no portal, com a documentação de cada unidade envolvida.' },
      { t: 'Conferência na fatura', d: 'Acompanhamos o ciclo seguinte para confirmar que a distribuidora aplicou os percentuais corretos.' },
    ],
    prazoNota:
      'A alteração vale a partir do ciclo de faturamento seguinte ao processamento — não retroage. Por isso, rateio errado descoberto tarde significa créditos que já foram aplicados na unidade errada.',
    faq: [
      { p: 'Com que frequência posso alterar o rateio?', r: 'A regulação permite alteração do rateio, e a distribuidora processa o pedido para os ciclos seguintes. O ponto de atenção é o prazo de processamento: pedido enviado em cima da leitura só vale no mês seguinte.' },
      { p: 'Meus créditos podem vencer?', r: 'Sim. Os créditos de energia têm validade de 60 meses. Rateio mal distribuído é a causa mais comum de crédito expirando sem nunca ter abatido uma conta.' },
      { p: 'Posso ratear para uma UC de outro titular?', r: 'Só dentro das modalidades permitidas — autoconsumo remoto exige mesmo titular (CPF ou CNPJ); geração compartilhada exige consórcio, cooperativa ou outra forma de associação válida.' },
      { p: 'A soma precisa fechar 100%?', r: 'Precisa. O sistema rejeita rateio que não totaliza 100%, e é um dos motivos mais frequentes de pedido devolvido.' },
    ],
    relacionados: ['multiplas-unidades-consumidoras', 'consultoria-de-faturamento', 'analise-de-problemas'],
    keywords: ['alteração de rateio cosern', 'rateio de créditos energia solar', 'créditos de energia vencendo', 'sistema de compensação cosern', 'transferir créditos energia solar rn'],
    waMsg: 'Olá! Preciso alterar o rateio de créditos de energia na Cosern.',
  },

  {
    slug: 'art-projeto-solar-cosern',
    chamada: 'Responsável técnico habilitado para assinar o seu projeto e responder às exigências.',
    nav: 'ART / RT',
    icone: 'selo',
    titulo: 'ART e Responsável Técnico Solar no RN | Sousa Costa',
    h1: 'ART e responsável técnico para projetos na Cosern',
    descricao:
      'ART de projeto, execução e manutenção para sistemas fotovoltaicos no RN, com responsável técnico habilitado para assinar o processo na Cosern.',
    badge: 'Responsabilidade técnica',
    respostaCurta:
      "A ART é a Anotação de Responsabilidade Técnica registrada no CREA que vincula um profissional habilitado ao projeto ou à execução da instalação. A Cosern exige ART válida na solicitação de acesso, independentemente do porte do sistema: sem ela o processo não avança. Emitimos a ART com responsável técnico próprio, inclusive para sistemas já instalados por terceiros.",
    resumo:
      'A distribuidora não aceita projeto sem responsável técnico. Assumimos a responsabilidade técnica do seu processo — ART de projeto, de execução ou de manutenção — com o profissional habilitado que a Cosern exige.',
    paraQuem: [
      'Integradores sem engenheiro no quadro ou com RT indisponível',
      'Empresas que precisam de ART para projeto já pronto',
      'Usinas em operação que precisam de ART de manutenção ou O&M',
    ],
    entregaveis: [
      'ART registrada no CREA com a atividade correta para o processo',
      'Conferência técnica do projeto antes de assinar',
      'Assinatura do memorial descritivo e do diagrama unifilar',
      'Acompanhamento das exigências técnicas do parecer de acesso',
    ],
    documentos: [
      'Projeto elétrico existente, se houver (diagrama e memorial)',
      'Dados do titular e da unidade consumidora',
      'Datasheet dos equipamentos instalados ou a instalar',
      'Endereço da obra e potência do sistema',
    ],
    passos: [
      { t: 'Análise técnica', d: 'Conferimos dimensionamento, proteções, seções de cabo e aterramento. Não assinamos projeto que não passou por essa conferência.' },
      { t: 'Ajustes', d: 'Apontamos e corrigimos o que estiver fora de norma antes do registro — sai mais barato que corrigir depois de uma exigência da distribuidora.' },
      { t: 'Registro da ART', d: 'Emissão no CREA com a atividade compatível: projeto, execução, manutenção ou laudo.' },
      { t: 'Suporte ao processo', d: 'Respondemos às exigências técnicas que aparecerem durante a análise da Cosern.' },
    ],
    prazoNota:
      'A ART é registrada rapidamente; o que define o prazo é a conferência do projeto. Projeto bem feito sai no mesmo dia da análise; projeto com problema de dimensionamento leva o tempo da correção.',
    faq: [
      { p: 'Vocês assinam ART de projeto feito por outra pessoa?', r: 'Sim, desde que o projeto passe pela nossa conferência técnica e esteja adequado às normas e às exigências da distribuidora. Responsabilidade técnica não é carimbo — se houver erro, corrigimos antes de assinar.' },
      { p: 'Qual ART preciso: projeto, execução ou as duas?', r: 'Depende do escopo. A solicitação de acesso exige ART cobrindo o projeto. Se você executa a obra, a ART de execução também é exigida. Em usina já operando, existe a ART de manutenção.' },
      { p: 'A ART cobre a instalação feita pelo meu time?', r: 'A ART de execução responsabiliza tecnicamente quem a assina pela obra. Por isso ela só é emitida com acompanhamento técnico combinado, não apenas com a documentação.' },
      { p: 'Atende fora de Natal?', r: 'Sim. Atendemos os 167 municípios do RN. O que muda é a necessidade de visita presencial, definida caso a caso conforme o porte da usina.' },
    ],
    relacionados: ['projeto-de-energia-solar', 'laudo-tecnico', 'analise-de-problemas'],
    keywords: ['art projeto solar', 'responsável técnico energia solar rn', 'art crea fotovoltaico natal', 'rt para projeto cosern', 'art de manutenção usina solar'],
    waMsg: 'Olá! Preciso de ART e responsável técnico para um projeto solar na Cosern.',
  },

  {
    slug: 'laudo-tecnico',
    chamada: 'Documento técnico com inspeção e análise de geração para seguro, banco ou disputa.',
    nav: 'Laudo técnico',
    icone: 'lupa',
    titulo: 'Laudo Técnico Fotovoltaico no RN | Sousa Costa',
    h1: 'Laudo técnico de sistema fotovoltaico',
    descricao:
      'Laudo técnico com inspeção, termografia e análise de geração para usinas solares no RN. Documento formal para seguro, banco ou disputa com fornecedor.',
    badge: 'Perícia e inspeção',
    respostaCurta:
      "Laudo técnico é o documento assinado por engenheiro que atesta a condição de uma instalação elétrica ou de um sistema fotovoltaico, com inspeção, medições, registro fotográfico e ART. Serve para exigência da distribuidora, seguradora, cartório, financiamento ou disputa com o fornecedor que executou a obra.",
    resumo:
      'Quando é preciso provar tecnicamente o que está acontecendo na usina — para o seguro, para o banco, para a distribuidora ou para cobrar o fornecedor — o laudo técnico é o documento que sustenta a conversa.',
    paraQuem: [
      'Quem comprou sistema que não entrega a geração prometida',
      'Empresas que precisam de laudo para seguro, financiamento ou auditoria',
      'Usinas com exigência técnica aberta pela distribuidora',
      'Compradores avaliando usina de segunda mão antes de fechar negócio',
    ],
    entregaveis: [
      'Inspeção visual e elétrica de módulos, strings, inversores e proteções',
      'Análise de geração real contra a esperada para o local e a potência',
      'Registro fotográfico e apontamento de não conformidades',
      'Laudo assinado por responsável técnico, com ART quando aplicável',
      'Plano de correção priorizado por impacto na geração',
    ],
    documentos: [
      'Faturas dos últimos 12 meses da unidade',
      'Dados de geração do monitoramento (exportação ou acesso ao portal)',
      'Projeto e documentação da instalação, se disponíveis',
      'Contrato com o fornecedor, quando o laudo for para disputa',
    ],
    passos: [
      { t: 'Análise remota', d: 'Antes de ir a campo, cruzamos as faturas com os dados do monitoramento. Boa parte dos problemas já aparece nessa comparação.' },
      { t: 'Inspeção em campo', d: 'Verificação de módulos, conexões, strings, inversores, proteções e aterramento, com registro fotográfico.' },
      { t: 'Diagnóstico', d: 'Comparação da geração medida com a esperada para a irradiação local, identificando perdas por sombreamento, sujidade, degradação ou falha de equipamento.' },
      { t: 'Laudo', d: 'Documento técnico com conclusão objetiva e plano de correção, assinado por responsável técnico.' },
    ],
    prazoNota:
      'O prazo depende do porte e da distância. Um sistema residencial em Natal costuma ser inspecionado em uma visita; usinas maiores ou no interior exigem programação específica.',
    faq: [
      { p: 'Serve para processo contra o fornecedor?', r: 'O laudo é documento técnico assinado por responsável habilitado e descreve o que foi verificado, com evidências. É o insumo técnico da discussão — a estratégia jurídica cabe ao seu advogado.' },
      { p: 'Minha usina gera menos que o prometido. É defeito?', r: 'Nem sempre. Pode ser dimensionamento otimista na venda, sombreamento, sujidade, string desconectada ou inversor operando limitado. O laudo separa o que é falha do que foi promessa irreal.' },
      { p: 'Fazem termografia?', r: 'Sim, quando o caso pede: termografia identifica pontos quentes em módulos e conexões que a inspeção visual não mostra e que costumam anteceder falha.' },
      { p: 'Vale a pena antes de comprar uma usina usada?', r: 'Vale. Uma inspeção antes da compra revela degradação, reparo improvisado e pendência de homologação — problemas que passam a ser seus depois da assinatura.' },
    ],
    relacionados: ['carregador-de-veiculo-eletrico-condominio', 'analise-de-problemas', 'art-projeto-solar-cosern'],
    keywords: ['laudo técnico fotovoltaico', 'laudo energia solar natal', 'perícia sistema fotovoltaico rn', 'inspeção usina solar', 'termografia painel solar natal'],
    waMsg: 'Olá! Preciso de um laudo técnico do meu sistema fotovoltaico.',
  },

  {
    slug: 'analise-de-problemas',
    chamada: 'Descobrir se o problema está na usina, no cadastro da compensação ou na fatura.',
    nav: 'Análise de problemas',
    icone: 'alerta',
    titulo: 'Solar com Conta Alta? Análise Técnica | Sousa Costa',
    h1: 'Análise de problemas na usina e na compensação',
    descricao:
      'Diagnóstico quando a usina gera pouco, os créditos não aparecem na fatura ou a conta segue alta mesmo com energia solar instalada. Atendimento no RN.',
    badge: 'Diagnóstico',
    respostaCurta:
      "Quando a usina está instalada e a conta continua alta, a causa costuma ser uma destas: sistema não homologado, rateio errado, medidor não trocado, classe de consumo incorreta ou geração abaixo do projetado. Fazemos o diagnóstico com base na fatura, no projeto e nos dados de geração, e dizemos o que dá para resolver antes de qualquer proposta.",
    resumo:
      'Instalou solar e a conta não caiu? O problema pode estar na usina, no cadastro da compensação ou na fatura — e o caminho da solução é completamente diferente em cada caso. Começamos identificando qual dos três é.',
    paraQuem: [
      'Quem tem energia solar e continua com fatura alta',
      'Usinas cujos créditos não aparecem ou aparecem a menos',
      'Sistemas com queda de geração sem causa aparente',
      'Casos que já foram tratados no atendimento e não se resolveram',
    ],
    entregaveis: [
      'Diagnóstico separando falha técnica, erro de cadastro e erro de faturamento',
      'Conferência do cadastro no sistema de compensação e do rateio aplicado',
      'Análise da curva de geração contra o histórico de faturas',
      'Plano de ação com o caminho de solução para cada problema encontrado',
      'Condução do processo junto à Cosern quando o problema for da distribuidora',
    ],
    documentos: [
      'Faturas dos últimos 12 meses (todas as UCs envolvidas)',
      'Acesso ou exportação do monitoramento da usina',
      'Parecer de acesso e documentação da homologação',
      'Protocolos já abertos na Cosern, se houver',
    ],
    passos: [
      { t: 'Triagem', d: 'Cruzamos fatura e geração. Se a usina gerou e o crédito não entrou, o problema é cadastral. Se não gerou, é técnico. Essa separação evita semanas perdidas no caminho errado.' },
      { t: 'Verificação cadastral', d: 'Conferimos se a UC está corretamente cadastrada como geradora, se o rateio está aplicado e se o medidor bidirecional foi efetivamente trocado.' },
      { t: 'Verificação técnica', d: 'Quando o indício é de falha, avaliamos inversor, strings, proteções e sombreamento — em campo se necessário.' },
      { t: 'Solução', d: 'Correção técnica, ajuste de cadastro ou abertura e condução do processo na distribuidora, conforme o que o diagnóstico apontar.' },
    ],
    prazoNota:
      'A triagem inicial costuma ser rápida porque é feita sobre documentos. O que varia é a solução: ajuste de cadastro depende do processamento da distribuidora, e correção técnica depende da peça ou do serviço necessário.',
    faq: [
      { p: 'Tenho solar e a conta veio quase igual. Por quê?', r: 'As causas mais comuns são: medidor bidirecional não trocado, UC não cadastrada na compensação, rateio mandando crédito para outra unidade, ou geração real bem abaixo da prometida na venda. O diagnóstico separa qual é.' },
      { p: 'Existe conta que nunca zera?', r: 'Existe. O custo de disponibilidade (30, 50 ou 100 kWh conforme o tipo de ligação), a iluminação pública e a parcela não compensável da TUSD continuam sendo cobrados. Conta zerada não é o objetivo realista.' },
      { p: 'Já reclamei na Cosern e não resolveu.', r: 'Reclamação genérica no atendimento raramente resolve problema técnico de compensação. O que funciona é protocolo específico, com fundamentação e documentação — que é o que montamos.' },
      { p: 'Vocês atendem sistema instalado por outra empresa?', r: 'Atendemos. A maior parte dos diagnósticos que fazemos é de sistema instalado por terceiros.' },
    ],
    relacionados: ['consultoria-de-faturamento', 'demandas-cosern', 'alteracao-de-carga-baixa-tensao'],
    keywords: ['energia solar conta não baixou', 'créditos não aparecem na fatura cosern', 'problema geração distribuída rn', 'usina solar gerando pouco', 'compensação de energia não aplicada'],
    waMsg: 'Olá! Tenho energia solar mas minha conta continua alta. Preciso de uma análise.',
  },

  {
    slug: 'alteracao-de-titularidade',
    chamada: 'Troca de titular sem perder crédito acumulado nem travar em débito antigo.',
    nav: 'Troca de titular',
    icone: 'pessoa',
    titulo: 'Alteração de Titularidade na Cosern | Sousa Costa',
    h1: 'Alteração de titularidade na Cosern',
    descricao:
      'Troca de titular da unidade consumidora na Cosern, inclusive com energia solar e créditos envolvidos. Documentação conferida antes do protocolo.',
    badge: 'Cadastro',
    respostaCurta:
      "A troca de titular da conta de energia na Cosern transfere a responsabilidade pela unidade consumidora para quem passou a ocupar o imóvel — e, quando há usina, exige também a atualização do cadastro de geração distribuída. Sem isso, o crédito continua vinculado ao titular antigo. Protocolamos a alteração e acompanhamos até a fatura sair no nome certo.",
    resumo:
      'Compra, venda, herança, fim de locação ou mudança de CNPJ: a titularidade precisa acompanhar quem de fato usa a energia. Com usina instalada, a troca exige cuidado extra — é possível perder crédito acumulado se for feita do jeito errado.',
    paraQuem: [
      'Quem comprou ou vendeu imóvel com ou sem usina instalada',
      'Locadores e locatários ao início ou fim do contrato',
      'Inventário e sucessão familiar',
      'Empresas em mudança de CNPJ, fusão ou encerramento',
    ],
    entregaveis: [
      'Conferência prévia de débitos e pendências na UC',
      'Montagem do dossiê de documentos no padrão exigido',
      'Protocolo da alteração junto à Cosern e acompanhamento',
      'Quando há geração: revisão do cadastro da usina e do rateio após a troca',
    ],
    documentos: [
      'Documento de identidade e CPF/CNPJ do novo titular',
      'Comprovante de propriedade, posse ou contrato de locação',
      'Fatura recente com o número da unidade consumidora',
      'Documento do titular anterior ou comprovação da sucessão',
      'Procuração para representação junto à distribuidora',
    ],
    passos: [
      { t: 'Conferência da UC', d: 'Verificamos débitos, pendências e situação cadastral. Débito em aberto trava a transferência e é melhor descobrir antes de protocolar.' },
      { t: 'Documentação', d: 'Montagem do dossiê conforme o tipo de vínculo — compra, locação, herança ou alteração societária têm exigências diferentes.' },
      { t: 'Protocolo', d: 'Envio do pedido e acompanhamento até a emissão da fatura no nome do novo titular.' },
      { t: 'Ajuste da geração', d: 'Se a UC gera energia, revisamos o cadastro da usina e o rateio, que não migram automaticamente com a titularidade.' },
    ],
    prazoNota:
      'A troca em si é um processo cadastral. O que mais atrasa é documento de posse incompleto e débito pendente na unidade — os dois pontos que conferimos antes de qualquer protocolo.',
    faq: [
      { p: 'Tenho energia solar. Perco os créditos ao trocar o titular?', r: 'Os créditos são vinculados à unidade consumidora e ao titular do sistema de compensação. Trocar a titularidade sem tratar o cadastro da geração é a forma mais comum de perder saldo acumulado — por isso tratamos as duas coisas juntas.' },
      { p: 'Preciso quitar débito do titular anterior?', r: 'A dívida é do titular que a gerou, mas débito em aberto na unidade costuma travar o processo. Verificamos a situação antes de protocolar para você não ser surpreendido.' },
      { p: 'Serve para imóvel alugado?', r: 'Serve, e é recomendável: com a conta no nome de quem ocupa o imóvel, o consumo e eventuais débitos ficam corretamente atribuídos.' },
      { p: 'E em caso de falecimento do titular?', r: 'É possível transferir mediante documentação da sucessão. Os documentos variam conforme o estágio do inventário, e orientamos qual conjunto atende no seu caso.' },
    ],
    semNos: {
      titulo: "Quando você não precisa contratar ninguém",
      texto:
        "A troca de titular é gratuita na distribuidora. Com o imóvel quite, sem débito, e com o documento do titular anterior ou o contrato de locação em mãos, dá para resolver sozinho pelos canais de atendimento dela, sem pagar nada a ninguém. Somos uma consultoria independente e privada: não somos a distribuidora, não a representamos e não cobramos em nome dela.",
      quando: [
        "Existe débito de um titular anterior sendo cobrado de você",
        "O pedido já foi negado e ninguém explicou o motivo",
        "Imóvel de inventário, espólio, usufruto ou sem escritura regular",
        "A unidade tem geração distribuída e o crédito segue vinculado ao titular antigo",
        "Você é imobiliária ou administradora com volume e não quer alocar equipe nisso",
      ],
    },
    relacionados: ['alteracao-de-dados-cadastrais', 'alteracao-de-modalidade-tarifaria', 'demandas-cosern'],
    keywords: ['alteração de titularidade cosern', 'trocar titular conta de luz natal', 'transferir conta de energia rn', 'mudar nome da conta de luz cosern', 'titularidade unidade consumidora'],
    waMsg: 'Olá! Preciso alterar a titularidade de uma unidade consumidora na Cosern.',
  },

  {
    slug: 'alteracao-de-modalidade-tarifaria',
    chamada: 'Estudo com 12 meses de faturas reais antes de mudar de tarifa ou demanda.',
    nav: 'Modalidade tarifária',
    icone: 'relogio',
    titulo: 'Modalidade Tarifária na Cosern | Sousa Costa',
    h1: 'Alteração de modalidade tarifária na Cosern',
    descricao:
      'Análise e troca de modalidade tarifária no RN: convencional, branca, verde e azul. Estudo com 12 meses de faturas reais antes de pedir a mudança.',
    badge: 'Tarifa',
    respostaCurta:
      "Modalidade tarifária é a regra de cobrança aplicada à unidade — convencional, branca, verde ou azul — e a escolha errada custa dinheiro todo mês. Analisamos o histórico de consumo e demanda dos últimos 12 meses, simulamos as opções cabíveis e protocolamos a mudança na Cosern quando ela é vantajosa.",
    resumo:
      'Modalidade tarifária errada é dinheiro perdido todo mês, sem que nada apareça como erro na fatura. Analisamos o seu perfil de consumo e demanda, calculamos o melhor enquadramento e conduzimos a alteração junto à Cosern.',
    paraQuem: [
      'Empresas do Grupo A pagando ultrapassagem ou demanda ociosa',
      'Comércios e indústrias avaliando migração entre verde e azul',
      'Consumidores do Grupo B avaliando tarifa branca',
      'Quem instalou energia solar e não revisou o enquadramento depois',
    ],
    entregaveis: [
      'Estudo comparativo entre as modalidades aplicáveis ao seu caso',
      'Simulação com 12 meses de faturas reais, não com média estimada',
      'Recomendação de demanda contratada, quando Grupo A',
      'Protocolo da alteração e acompanhamento até a vigência',
    ],
    documentos: [
      'Faturas dos últimos 12 meses da unidade',
      'Contrato de fornecimento atual, quando Grupo A',
      'Informação sobre horário de funcionamento e cargas principais',
      'Documento do titular e procuração',
    ],
    passos: [
      { t: 'Leitura das faturas', d: 'Extraímos consumo por posto horário, demanda medida, ultrapassagens e reativo excedente dos 12 meses.' },
      { t: 'Simulação', d: 'Recalculamos a mesma energia em cada modalidade possível. A recomendação sai do número, não do palpite.' },
      { t: 'Decisão', d: 'Apresentamos a economia estimada e o risco de cada cenário — inclusive quando a resposta é permanecer como está.' },
      { t: 'Protocolo', d: 'Formalização do pedido junto à Cosern e acompanhamento até a modalidade passar a valer na fatura.' },
    ],
    prazoNota:
      'Mudança de modalidade e de demanda contratada tem regras próprias de vigência e permanência. Antes de pedir, vale saber por quanto tempo você fica preso à nova escolha — isso entra no nosso estudo.',
    faq: [
      { p: 'Tarifa branca vale a pena para mim?', r: 'Vale quando o consumo se concentra fora da ponta e do intermediário — típico de quem fica pouco em casa no fim da tarde. Para quem consome muito entre 17h e 21h, costuma sair mais cara. A simulação com as suas faturas responde isso com número.' },
      { p: 'Estou pagando ultrapassagem de demanda. O que fazer?', r: 'Ultrapassagem indica demanda contratada abaixo da necessidade real. A correção pode ser aumentar o contrato, deslocar carga ou revisar o processo produtivo. Analisamos qual sai mais barato no ano.' },
      { p: 'Verde ou azul?', r: 'Depende do consumo e da demanda na ponta. A azul contrata demanda separada para ponta e fora de ponta; a verde tem demanda única e tarifa de consumo mais alta na ponta. A escolha muda conforme o perfil.' },
      { p: 'Tenho energia solar. Muda alguma coisa?', r: 'Muda bastante. Com geração, o que resta a faturar são as parcelas não compensáveis, e o enquadramento ideal pode ser diferente do que era antes da usina. É um dos casos mais frequentes de tarifa desatualizada.' },
    ],
    relacionados: ['alteracao-de-demanda', 'consultoria-de-faturamento', 'analise-de-problemas'],
    keywords: ['modalidade tarifária cosern', 'tarifa branca cosern', 'tarifa verde ou azul', 'demanda contratada rn', 'reduzir conta de energia empresa natal'],
    waMsg: 'Olá! Quero analisar a modalidade tarifária da minha unidade na Cosern.',
  },

  {
    slug: 'consultoria-de-faturamento',
    chamada: 'Auditoria das faturas para achar cobrança indevida e recuperar o que foi pago a mais.',
    nav: 'Consultoria de faturamento',
    icone: 'fatura',
    titulo: 'Revisão de Faturas de Energia | Sousa Costa',
    h1: 'Consultoria de faturamento e revisão de contas',
    descricao:
      'Auditoria das faturas da Cosern: cobrança indevida, tributo errado, compensação incorreta e recuperação de valores pagos a mais. Atendimento no RN.',
    badge: 'Auditoria',
    respostaCurta:
      "A revisão de faturas confere tarifa, bandeira, tributos, demanda faturada, ultrapassagem, reativos e compensação de créditos contra o que a regulação permite cobrar. Quando aparece cobrança indevida, montamos o memorial de cálculo e pedimos a devolução do período à Cosern.",
    resumo:
      'Fatura de energia é um documento cheio de rubricas que quase ninguém confere. Auditamos 12 meses de contas, identificamos cobranças indevidas e conduzimos a contestação junto à Cosern.',
    paraQuem: [
      'Empresas com contas altas e sem ninguém acompanhando as rubricas',
      'Consumidores com salto de consumo sem explicação',
      'Usinas com compensação aplicada de forma incorreta',
      'Quem desconfia de cobrança retroativa ou recuperação de consumo',
    ],
    entregaveis: [
      'Auditoria de 12 meses de faturas, rubrica por rubrica',
      'Identificação de cobranças indevidas e valores estimados a recuperar',
      'Conferência da compensação, do rateio e do custo de disponibilidade',
      'Contestação formal protocolada e acompanhada até a resposta',
      'Relatório com recomendações para reduzir a conta legalmente',
    ],
    documentos: [
      'Faturas dos últimos 12 meses (24 quando houver suspeita de cobrança antiga)',
      'Dados cadastrais da unidade: classe, subgrupo e tipo de ligação',
      'Contrato de fornecimento, quando Grupo A',
      'Procuração para representação junto à distribuidora',
    ],
    passos: [
      { t: 'Coleta', d: 'Reunimos as faturas e os dados cadastrais da unidade. Boa parte dos erros aparece quando se olha a série inteira, não uma conta isolada.' },
      { t: 'Auditoria', d: 'Conferimos classe, subgrupo, tipo de ligação, tributos, bandeiras, iluminação pública, compensação, custo de disponibilidade e demanda.' },
      { t: 'Quantificação', d: 'Calculamos o valor cobrado a mais e o período afetado, com o memorial de cálculo que sustenta o pedido.' },
      { t: 'Contestação', d: 'Protocolo do pedido de revisão e acompanhamento até a resposta formal da distribuidora.' },
    ],
    prazoNota:
      'A distribuidora tem prazos regulatórios para responder a pedidos de revisão. Um pedido bem fundamentado, com memorial de cálculo, tem tratamento diferente de uma reclamação genérica no atendimento.',
    faq: [
      { p: 'Dá para recuperar valores já pagos?', r: 'Dá, quando se comprova cobrança indevida. A regulação prevê devolução de valores cobrados a maior, inclusive em dobro em determinadas situações. O ponto decisivo é o memorial de cálculo que sustenta o pedido.' },
      { p: 'Recebi cobrança retroativa por irregularidade. E agora?', r: 'Recuperação de consumo tem procedimento próprio, com requisitos de apuração e direito de defesa. Avaliamos se o procedimento foi cumprido e o cálculo está correto antes de qualquer pagamento.' },
      { p: 'Minha conta subiu muito de um mês para o outro.', r: 'Pode ser leitura estimada, troca de medidor, mudança de bandeira, carga nova ou falha na compensação. A auditoria da série identifica o ponto exato da virada.' },
      { p: 'Como é a cobrança do serviço?', r: 'Orçamento sob consulta, definido depois de olharmos o porte da unidade e o volume de faturas. Casos de recuperação de valores podem ser combinados com parte vinculada ao resultado.' },
    ],
    semNos: {
      titulo: "Reclamar é de graça. O que cobramos é outra coisa",
      texto:
        "Contestar uma fatura na distribuidora não custa nada: você abre a reclamação pelos canais dela e, se não resolver, pode ir à ouvidoria e à ANEEL, também sem custo. O que cobramos é a análise técnica — conferir tarifa, bandeira, tributos, demanda, ultrapassagem, reativos e compensação de créditos contra o que a regulação permite cobrar — e montar o memorial de cálculo que sustenta o pedido. Reclamação sem memorial costuma voltar negada, e aí o problema continua.",
      quando: [
        "A conta subiu sem explicação e a reclamação já voltou negada",
        "Cobrança de recuperação de consumo, o chamado TOI",
        "Unidade do Grupo A com demanda contratada, ultrapassagem ou reativos",
        "O valor em discussão é alto o bastante para o trabalho técnico se pagar",
        "Empresa com várias unidades consumidoras e nenhuma conferência sistemática",
      ],
    },
    relacionados: ['alteracao-de-modalidade-tarifaria', 'demandas-cosern', 'analise-de-problemas'],
    keywords: ['revisão de fatura cosern', 'cobrança indevida energia rn', 'auditoria conta de luz empresa', 'consultoria faturamento energia natal', 'recuperação de consumo cosern'],
    waMsg: 'Olá! Quero uma revisão das faturas de energia da minha unidade.',
  },

  {
    slug: 'demandas-cosern',
    chamada: 'Condução técnica do processo travado, com fundamentação e controle de prazos.',
    nav: 'Demandas com a Cosern',
    icone: 'escudo',
    titulo: 'Problemas e Demandas com a Cosern | Sousa Costa',
    h1: 'Resolução de demandas com a Cosern',
    descricao:
      'Condução técnica de demandas na Cosern: ligação nova, aumento de carga, danos elétricos, religação e processos travados no atendimento. Todo o RN.',
    badge: 'Representação técnica',
    respostaCurta:
      "Protocolo aberto sem resposta, pedido negado sem fundamentação, obra parada, religação que não acontece: esses casos se resolvem apresentando o pedido com a base regulatória certa e escalando pelos canais próprios, incluindo ouvidoria e ANEEL quando cabível. Assumimos a condução da demanda do início ao desfecho.",
    resumo:
      'Processo parado no atendimento, protocolo sem resposta, exigência que ninguém explica. Assumimos a condução técnica da demanda junto à Cosern, com a linguagem e a documentação que o processo exige.',
    paraQuem: [
      'Quem já abriu protocolo e não teve solução',
      'Empresas com ligação nova ou aumento de carga travado',
      'Consumidores com equipamento queimado por oscilação da rede',
      'Casos com risco de corte, religação pendente ou débito contestado',
    ],
    entregaveis: [
      'Diagnóstico do processo e do que de fato está travando',
      'Montagem da documentação técnica que sustenta o pedido',
      'Abertura e condução dos protocolos junto à distribuidora',
      'Acompanhamento dos prazos regulatórios de cada etapa',
      'Orientação sobre escalonamento à ouvidoria e à ANEEL quando cabível',
    ],
    documentos: [
      'Faturas e dados da unidade consumidora',
      'Protocolos já abertos e respostas recebidas',
      'Registro do problema: fotos, notas fiscais de equipamentos, datas',
      'Procuração para representação junto à distribuidora',
    ],
    passos: [
      { t: 'Diagnóstico', d: 'Lemos o histórico de protocolos e identificamos se o problema é documental, técnico ou de enquadramento do pedido.' },
      { t: 'Reenquadramento', d: 'Muito pedido é negado por ter sido aberto na categoria errada. Reabrimos no caminho certo, com fundamentação regulatória.' },
      { t: 'Condução', d: 'Acompanhamos os prazos de cada etapa e respondemos exigências dentro da janela regulatória.' },
      { t: 'Escalonamento', d: 'Se a distribuidora não cumpre o previsto, orientamos e apoiamos o registro na ouvidoria e na ANEEL.' },
    ],
    prazoNota:
      'Cada tipo de demanda tem prazo regulatório próprio — ressarcimento por danos elétricos, por exemplo, precisa ser solicitado dentro do prazo previsto após o ocorrido. Perder a janela é o erro mais caro, e o mais comum.',
    faq: [
      { p: 'Queimou meu equipamento por causa da rede. Tenho direito?', r: 'A regulação prevê pedido de ressarcimento por danos elétricos, com prazos definidos para solicitar, para a distribuidora inspecionar, responder e pagar. Quanto antes você registrar, maior a chance de a apuração ser conclusiva.' },
      { p: 'Meu protocolo está sem resposta há semanas.', r: 'Cada serviço tem prazo regulatório. Quando ele estoura, o caminho é formalizar com fundamentação e, se necessário, escalonar para ouvidoria e ANEEL — o que muda o tratamento dado ao caso.' },
      { p: 'Vocês são da Cosern?', r: 'Somos consultor autorizado Cosern, habilitados a conduzir processos junto à distribuidora. Não somos a Cosern: representamos você mediante procuração, o que nos permite protocolar e cobrar os prazos em seu nome.' },
      { p: 'Atendem pessoa física?', r: 'Atendemos pessoa física e jurídica. O que define o atendimento é a natureza do problema, não o porte do cliente.' },
    ],
    relacionados: ['alteracao-de-carga-baixa-tensao', 'consultoria-de-faturamento', 'analise-de-problemas'],
    keywords: ['problema com a cosern', 'reclamação cosern natal', 'ressarcimento danos elétricos cosern', 'ligação nova cosern', 'aumento de carga cosern rn'],
    waMsg: 'Olá! Tenho uma demanda travada na Cosern e preciso de ajuda para resolver.',
  },

  {
    slug: 'projeto-unidade-baixa-tensao',
    chamada: 'Projeto de entrada e padrão de ligação em baixa tensão, dentro da norma da distribuidora.',
    nav: 'Projeto em BT',
    icone: 'medidor',
    titulo: 'Projeto de Unidade em Baixa Tensão | Sousa Costa',
    h1: 'Projeto de unidade consumidora em baixa tensão',
    descricao:
      'Projeto de entrada de energia em baixa tensão no RN: padrão de ligação, dimensionamento, ART e protocolo na Cosern para ligação nova ou regularização.',
    badge: 'Ligação e entrada',
    respostaCurta:
      "A ligação nova de uma unidade consumidora em baixa tensão exige projeto do padrão de entrada compatível com a carga instalada, memorial, ART e protocolo de solicitação de ligação na Cosern. Dimensionamos o padrão, elaboramos o projeto e conduzimos o processo até a energia ser ligada.",
    resumo:
      'Toda ligação nova em baixa tensão passa por um padrão de entrada aprovado. Fazemos o projeto conforme a norma da distribuidora, emitimos a ART e protocolamos o pedido — inclusive quando a obra já foi executada fora do padrão e precisa ser regularizada.',
    paraQuem: [
      'Quem vai construir e precisa de ligação definitiva',
      'Obras que precisam de ligação provisória para canteiro',
      'Imóveis com padrão antigo reprovado na inspeção',
      'Comércios e pequenas indústrias atendidos em baixa tensão',
    ],
    entregaveis: [
      'Dimensionamento do padrão: disjuntor, ramal, caixa e aterramento',
      'Projeto e memorial conforme a norma técnica da distribuidora',
      'ART registrada no CREA',
      'Protocolo do pedido de ligação e acompanhamento até a energização',
      'Orientação ao eletricista sobre o que precisa estar pronto na inspeção',
    ],
    documentos: [
      'Documento do titular (CPF/CNPJ) e comprovante de posse ou propriedade',
      'Endereço completo com CEP e ponto de referência',
      'Relação de cargas previstas (ar-condicionado, chuveiro, motores, etc.)',
      'Número de uma UC vizinha, quando o local ainda não tem endereço na base',
      'Procuração para representação junto à distribuidora',
    ],
    passos: [
      { t: 'Levantamento de carga', d: 'Somamos a carga instalada prevista. É esse número que define o tipo de ligação, o disjuntor e o padrão — errar aqui gera reprovação ou padrão subdimensionado em dois anos.' },
      { t: 'Projeto e ART', d: 'Padrão de entrada conforme a norma vigente da distribuidora, com memorial e ART do responsável técnico.' },
      { t: 'Protocolo', d: 'Abertura do pedido de ligação com a documentação completa, no enquadramento correto (definitiva, provisória ou regularização).' },
      { t: 'Inspeção e energização', d: 'Acompanhamos a inspeção e respondemos exigências até a instalação do medidor.' },
    ],
    prazoNota:
      'A regulação estabelece prazos por tipo de atendimento — mais curtos quando não há obra na rede, mais longos quando é necessária extensão. Padrão fora da norma é a causa número um de reprovação na inspeção e de reinício da contagem.',
    faq: [
      { p: 'Preciso de projeto para uma casa simples?', r: 'Para ligações de pequeno porte, muitas vezes basta o padrão executado conforme a norma e o pedido bem instruído. Projeto formal e ART passam a ser exigidos conforme a carga e o tipo de ligação — avaliamos o seu caso antes de cobrar por algo desnecessário.' },
      { p: 'Qual a diferença de ligação provisória para definitiva?', r: 'A provisória atende o canteiro de obra, tem padrão mais simples e prazo determinado. A definitiva é a da edificação concluída. Pedir a errada gera retrabalho e nova inspeção.' },
      { p: 'Meu padrão foi reprovado. E agora?', r: 'A inspeção aponta o que está fora da norma. Fazemos o diagnóstico, corrigimos o projeto e orientamos a execução antes de pedir nova inspeção, para não queimar mais uma visita.' },
      { p: 'Mono, bi ou trifásico: quem decide?', r: 'A carga instalada decide. Acima de certos limites a distribuidora exige mais fases. Dimensionar isso na largada evita ter que fazer alteração de carga logo depois.' },
    ],
    semNos: {
      titulo: "O que é gratuito e o que não é",
      texto:
        "Abrir a solicitação de ligação nova na distribuidora é gratuito e você mesmo faz pelos canais de atendimento dela. O que não é gratuito — nem opcional — é o projeto do padrão de entrada com responsável técnico, que a norma da distribuidora exige e que nenhuma concessionária elabora para você. É isso que fazemos: não cobramos pela solicitação, cobramos pelo projeto e pela condução técnica.",
      quando: [
        "A carga da unidade exige projeto elétrico com responsabilidade técnica",
        "O padrão já foi reprovado na inspeção e você não sabe o que corrigir",
        "Ligação trifásica ou carga acima do padrão residencial simples",
        "Obra, empreendimento, unidade comercial ou rural",
        "Você não tem quem dimensione disjuntor, ramal, aterramento e proteção",
      ],
    },
    relacionados: ['alteracao-de-carga-baixa-tensao', 'projeto-multiplas-unidades-baixa-tensao', 'art-projeto-solar-cosern'],
    keywords: ['projeto de entrada de energia natal', 'padrão de entrada cosern', 'ligação nova cosern rn', 'projeto baixa tensão rn', 'padrão de ligação reprovado'],
    waMsg: 'Olá! Preciso de projeto de entrada em baixa tensão para uma unidade consumidora.',
  },

  {
    slug: 'alteracao-de-carga-baixa-tensao',
    chamada: 'Aumento ou redução de carga, troca de mono para trifásico e adequação do padrão.',
    nav: 'Alteração de carga',
    icone: 'raio',
    titulo: 'Alteração de Carga em Baixa Tensão | Sousa Costa',
    h1: 'Alteração de carga em baixa tensão na Cosern',
    descricao:
      'Aumento ou redução de carga instalada em BT na Cosern: novo dimensionamento, adequação do padrão de entrada, troca de fases e protocolo. Atendimento no RN.',
    badge: 'Carga instalada',
    respostaCurta:
      "Aumento de carga é o pedido formal à Cosern para elevar a carga instalada da unidade quando novos equipamentos — ar-condicionado, motores, carregador de veículo elétrico — passam a exigir mais do que o padrão atual suporta. Envolve novo dimensionamento do padrão de entrada, projeto com ART e protocolo. Acima de 75 kW a unidade migra para média tensão, o que muda todo o escopo da obra.",
    resumo:
      'Instalou ar-condicionado, forno, motor ou carregador de carro elétrico e o disjuntor começou a desarmar? A carga contratada precisa acompanhar. Fazemos o novo dimensionamento, a adequação do padrão e o pedido de alteração de carga.',
    paraQuem: [
      'Quem passou a desarmar disjuntor depois de instalar equipamento novo',
      'Comércios que ampliaram a operação e a instalação não acompanhou',
      'Quem vai instalar carregador de veículo elétrico',
      'Quem precisa migrar de monofásico para bifásico ou trifásico',
      'Quem quer reduzir carga para diminuir o custo de disponibilidade',
    ],
    entregaveis: [
      'Levantamento da carga atual e da carga futura',
      'Definição do tipo de ligação e do disjuntor adequados',
      'Projeto de adequação do padrão de entrada, quando necessário',
      'ART, quando o porte exigir',
      'Protocolo do pedido de alteração de carga e acompanhamento até a execução',
    ],
    documentos: [
      'Fatura recente da unidade consumidora',
      'Relação dos equipamentos novos com potência de cada um',
      'Foto do padrão de entrada atual (caixa, disjuntor e ramal)',
      'Documento do titular e procuração',
    ],
    passos: [
      { t: 'Levantamento', d: 'Somamos a carga existente com a nova. Esse total define se muda só o disjuntor, se muda o número de fases ou se o padrão inteiro precisa ser refeito.' },
      { t: 'Dimensionamento', d: 'Definimos ligação, disjuntor e seção do ramal com folga técnica — não no limite, para não voltar ao mesmo problema na próxima ampliação.' },
      { t: 'Adequação do padrão', d: 'Quando é preciso obra, especificamos exatamente o que o eletricista deve executar antes da inspeção.' },
      { t: 'Protocolo e inspeção', d: 'Pedido de alteração de carga aberto na distribuidora, com acompanhamento até a troca do medidor ou do disjuntor.' },
    ],
    prazoNota:
      'Aumento de carga sem obra na rede tem prazo bem menor do que aquele que exige reforço ou extensão. O diagnóstico prévio serve justamente para você saber, antes de protocolar, em qual dos dois casos está.',
    faq: [
      { p: 'Meu disjuntor vive desarmando. É falta de carga contratada?', r: 'Pode ser, mas nem sempre. Também pode ser curto, sobrecarga em um circuito específico ou disjuntor defeituoso. Verificamos antes de pedir aumento de carga, porque aumentar carga sem necessidade traz custo de disponibilidade maior todo mês.' },
      { p: 'Vou instalar carregador de carro elétrico. Preciso avisar?', r: 'Sim. Carregador é carga relevante e concentrada, e costuma exigir revisão do disjuntor e, às vezes, do número de fases. É um dos pedidos que mais cresce.' },
      { p: 'Passar para trifásico aumenta minha conta?', r: 'Muda o custo de disponibilidade, que é o mínimo faturado mensalmente: 30 kWh no monofásico, 50 no bifásico e 100 no trifásico. Por isso a decisão precisa ser técnica, não por precaução.' },
      { p: 'Dá para reduzir carga?', r: 'Dá, e faz sentido quando a instalação foi superdimensionada — reduzir o tipo de ligação diminui o mínimo faturado. Avaliamos se a carga real permite.' },
    ],
    relacionados: ['carregador-de-veiculo-eletrico-condominio', 'projeto-unidade-baixa-tensao', 'alteracao-de-demanda'],
    keywords: ['aumento de carga cosern', 'alteração de carga baixa tensão', 'trocar para trifásico cosern', 'disjuntor desarmando conta de luz', 'carregador carro elétrico instalação rn'],
    waMsg: 'Olá! Preciso alterar a carga da minha unidade consumidora na Cosern.',
  },

  {
    slug: 'projeto-multiplas-unidades-baixa-tensao',
    chamada: 'Entrada coletiva de prédios e condomínios: centro de medição, prumada e área comum.',
    nav: 'Projeto de múltiplas UCs',
    icone: 'predios',
    titulo: 'Projeto de Múltiplas Unidades em BT | Sousa Costa',
    h1: 'Projeto de entrada para múltiplas unidades consumidoras',
    descricao:
      'Projeto de entrada coletiva para prédios, condomínios e galerias no RN: centro de medição, prumada, área comum e protocolo junto à Cosern.',
    badge: 'Prédios e condomínios',
    respostaCurta:
      "Prédios, condomínios e conjuntos comerciais com várias unidades consumidoras precisam de projeto de entrada coletiva: centro de medição agrupado, ramal, proteções e o dimensionamento de cada medidor mais o da área comum. Elaboramos o projeto com ART e conduzimos a aprovação e a ligação na Cosern.",
    resumo:
      'Prédio, condomínio ou galeria: várias unidades atrás de uma entrada coletiva, com centro de medição, prumada e a UC própria da área comum. Fazemos o projeto conforme a norma da distribuidora e conduzimos o processo até a energização.',
    paraQuem: [
      'Construtoras e incorporadoras com edificação de várias unidades',
      'Condomínios que precisam regularizar ou ampliar a entrada coletiva',
      'Galerias comerciais e centros de lojas',
      'Kitnets e conjuntos residenciais com medição individualizada',
    ],
    entregaveis: [
      'Dimensionamento da entrada coletiva e da demanda do conjunto',
      'Projeto do centro de medição, caixas seccionadoras e prumada',
      'Definição da UC da área comum e das UCs individuais',
      'ART do responsável técnico',
      'Protocolo e acompanhamento até a liberação das medições',
    ],
    documentos: [
      'Projeto arquitetônico com a quantidade e a metragem das unidades',
      'Relação de cargas previstas por unidade e da área comum',
      'Matrícula do imóvel ou documento equivalente',
      'CNPJ do condomínio, quando já constituído',
      'Documento do responsável e procuração',
    ],
    passos: [
      { t: 'Dimensionamento do conjunto', d: 'A carga do prédio não é a simples soma das unidades: entra o fator de demanda previsto em norma. É o que define a entrada coletiva e evita superdimensionar a obra.' },
      { t: 'Projeto', d: 'Centro de medição, seccionamento, prumada, aterramento e a UC da área comum, conforme a norma técnica vigente da distribuidora.' },
      { t: 'Protocolo', d: 'Pedido aberto com a documentação do empreendimento e acompanhamento da análise.' },
      { t: 'Inspeção e energização', d: 'Acompanhamos a vistoria e a liberação das medições individuais.' },
    ],
    prazoNota:
      'Empreendimento com várias unidades entra em análise mais longa que uma ligação simples, e costuma exigir ajustes de projeto. Quanto antes o projeto elétrico entra — de preferência junto com o arquitetônico — menos retrabalho de obra depois.',
    faq: [
      { p: 'Isso é a mesma coisa que EMUC de energia solar?', r: 'Não, e a confusão é comum. Este serviço é a entrada de energia do prédio: como a distribuidora alimenta e mede cada unidade. O EMUC trata de dividir os créditos de uma usina solar entre as unidades. Se o seu caso é geração, veja a página de múltiplas unidades consumidoras (EMUC).' },
      { p: 'A área comum precisa de UC separada?', r: 'Sim. Elevador, bomba, iluminação e portaria ficam numa unidade consumidora própria, faturada em nome do condomínio — e é ela que costuma ser candidata a energia solar.' },
      { p: 'Dá para individualizar a medição de um prédio antigo?', r: 'Depende da infraestrutura existente: espaço para o centro de medição e viabilidade de prumada. Avaliamos em visita antes de prometer qualquer coisa.' },
      { p: 'Quem contrata: a construtora ou o condomínio?', r: 'Na obra, a construtora ou o incorporador. Depois de entregue, o condomínio, representado pelo síndico. O que muda é a documentação exigida no protocolo.' },
    ],
    relacionados: ['carregador-de-veiculo-eletrico-condominio', 'multiplas-unidades-consumidoras', 'projeto-unidade-baixa-tensao'],
    keywords: ['projeto múltiplas unidades consumidoras cosern', 'centro de medição prédio', 'entrada coletiva condomínio natal', 'individualização de medição rn', 'projeto elétrico predial natal'],
    waMsg: 'Olá! Preciso de projeto de entrada para múltiplas unidades (prédio/condomínio).',
  },

  {
    slug: 'alteracao-de-demanda',
    chamada: 'Revisão da demanda contratada do Grupo A para acabar com ultrapassagem e demanda ociosa.',
    nav: 'Alteração de demanda',
    icone: 'tendencia',
    titulo: 'Alteração de Demanda Contratada | Sousa Costa',
    h1: 'Alteração de demanda contratada na Cosern',
    descricao:
      'Revisão e alteração da demanda contratada no Grupo A: fim da multa por ultrapassagem e da demanda paga sem uso. Estudo com 12 meses de faturas reais.',
    badge: 'Grupo A',
    respostaCurta:
      "Demanda contratada é a potência que a unidade do Grupo A reserva na rede — pagar por demanda ociosa ou tomar multa de ultrapassagem são os dois lados do mesmo erro de contrato. Analisamos 12 meses de medição, calculamos a demanda ótima e protocolamos a alteração contratual na Cosern.",
    resumo:
      'Demanda contratada acima do necessário é dinheiro pago sem uso; abaixo, é multa por ultrapassagem. Analisamos 12 meses de medição, calculamos o contrato ideal e conduzimos a alteração junto à Cosern.',
    paraQuem: [
      'Empresas do Grupo A pagando ultrapassagem com frequência',
      'Quem contratou demanda alta e nunca revisou depois',
      'Indústrias e comércios que mudaram o perfil de operação',
      'Quem instalou energia solar e não revisou o contrato depois',
    ],
    entregaveis: [
      'Leitura de 12 meses de demanda medida, ponta e fora de ponta',
      'Cálculo do contrato ideal, com o custo de cada cenário',
      'Identificação de ultrapassagens e de reativo excedente',
      'Protocolo da alteração e acompanhamento até a vigência',
      'Recomendação sobre modalidade (verde ou azul), quando fizer diferença',
    ],
    documentos: [
      'Faturas dos últimos 12 meses',
      'Contrato de uso do sistema de distribuição (CUSD) vigente',
      'Informação sobre ampliações ou reduções previstas na operação',
      'Documento do titular e procuração',
    ],
    passos: [
      { t: 'Leitura da medição', d: 'Extraímos demanda medida mês a mês, por posto horário, junto com ultrapassagens e excedente de reativo.' },
      { t: 'Cálculo', d: 'Simulamos o custo anual em vários níveis de contrato. O ideal quase nunca é a maior demanda registrada: é o ponto onde a economia supera a multa eventual.' },
      { t: 'Decisão', d: 'Apresentamos a economia estimada e o risco de cada cenário, inclusive o de manter como está.' },
      { t: 'Protocolo', d: 'Formalização junto à distribuidora, respeitando as regras contratuais de vigência e permanência.' },
    ],
    prazoNota:
      'Alteração de demanda tem regras próprias de vigência e período mínimo de permanência, previstas no contrato. Antes de pedir, é preciso saber por quanto tempo você fica preso ao novo valor — isso entra no estudo.',
    faq: [
      { p: 'Como funciona a multa por ultrapassagem?', r: 'Quando a demanda medida supera a contratada além da tolerância, a parcela excedente é cobrada com adicional. Ultrapassagem recorrente costuma sair mais cara que simplesmente contratar o valor correto.' },
      { p: 'Contratar demanda alta "por garantia" resolve?', r: 'Não: demanda contratada é faturada mesmo sem ser usada. É o erro mais caro e mais comum do Grupo A — paga-se todo mês por uma folga que nunca é acionada.' },
      { p: 'Instalei energia solar. Preciso rever a demanda?', r: 'Sim. A geração reduz o consumo de energia, mas a demanda medida costuma continuar alta — o pico normalmente não é ao meio-dia. Muita empresa reduz a conta com solar e continua pagando demanda dimensionada para o cenário antigo.' },
      { p: 'Estou pagando reativo excedente. É o mesmo problema?', r: 'É outro, mas anda junto. Excedente de reativo aponta baixo fator de potência e costuma se resolver com banco de capacitores. Identificamos na análise e indicamos o caminho.' },
    ],
    relacionados: ['alteracao-de-modalidade-tarifaria', 'consultoria-de-faturamento', 'alteracao-de-carga-baixa-tensao'],
    keywords: ['alteração de demanda contratada', 'ultrapassagem de demanda cosern', 'demanda contratada grupo a rn', 'reduzir conta de energia indústria natal', 'reativo excedente fatura'],
    waMsg: 'Olá! Quero revisar a demanda contratada da minha unidade na Cosern.',
  },

  {
    slug: 'alteracao-de-dados-cadastrais',
    chamada: 'Correção de classe, endereço e dados do titular — classe errada é tarifa errada todo mês.',
    nav: 'Dados cadastrais',
    icone: 'cartao',
    titulo: 'Alteração de Dados Cadastrais na Cosern | Sousa Costa',
    h1: 'Alteração de dados cadastrais na Cosern',
    descricao:
      'Correção de classe de consumo, endereço, CPF/CNPJ e contatos na Cosern. Cadastro errado gera tarifa errada, entrega de fatura perdida e processo travado.',
    badge: 'Cadastro',
    respostaCurta:
      "Classe de consumo, endereço, CPF/CNPJ e contatos errados no cadastro da Cosern produzem tarifa errada e fatura que não chega. Corrigimos o cadastro com a documentação que comprova o uso real da unidade e pedimos a revisão do que foi cobrado a mais no período.",
    resumo:
      'Cadastro é o que define a tarifa que você paga. Unidade rural classificada como comercial, residência cadastrada como comércio, endereço desatualizado: tudo isso custa dinheiro em silêncio. Corrigimos o cadastro e pedimos a revisão do que foi cobrado a mais.',
    paraQuem: [
      'Propriedades rurais faturadas como comercial',
      'Residências classificadas na classe errada',
      'Empresas que mudaram razão social ou endereço de correspondência',
      'Quem não recebe a fatura no endereço certo',
      'Quem precisa atualizar CPF/CNPJ, telefone ou e-mail da conta',
    ],
    entregaveis: [
      'Conferência da classe e subclasse aplicadas na fatura',
      'Comparação entre o uso real da unidade e o cadastro atual',
      'Protocolo da correção junto à Cosern',
      'Pedido de revisão dos valores cobrados a mais, quando cabível',
      'Acompanhamento até a fatura sair corrigida',
    ],
    documentos: [
      'Faturas recentes da unidade',
      'Documento do titular (CPF/CNPJ)',
      'Comprovante do uso real do imóvel (ITR, CCIR ou inscrição estadual, no caso rural)',
      'Comprovante de endereço atualizado',
      'Procuração para representação junto à distribuidora',
    ],
    passos: [
      { t: 'Auditoria do cadastro', d: 'Comparamos classe, subclasse, tipo de ligação e endereço com o uso real da unidade. É aqui que aparecem os erros que ninguém percebe na fatura.' },
      { t: 'Documentação', d: 'Reunimos a prova do enquadramento correto — no caso rural, é ela que sustenta a mudança de classe.' },
      { t: 'Protocolo', d: 'Pedido de alteração cadastral aberto na distribuidora.' },
      { t: 'Revisão retroativa', d: 'Quando a classe estava errada, pedimos também a revisão dos valores cobrados a mais no período.' },
    ],
    prazoNota:
      'A correção passa a valer nas faturas seguintes. A devolução do que foi cobrado a mais é pedido à parte, com prazo próprio, e exige o memorial de cálculo do período afetado.',
    faq: [
      { p: 'Minha propriedade é rural mas pago como comercial. Dá para mudar?', r: 'Dá, comprovando a atividade e o uso rural do imóvel. A classe rural tem condições tarifárias específicas, e a diferença acumulada ao longo dos meses costuma ser expressiva.' },
      { p: 'Dá para receber de volta o que paguei a mais?', r: 'É possível pedir a revisão dos valores do período em que o enquadramento esteve errado. O que decide o resultado é a documentação que comprova desde quando a situação real era outra.' },
      { p: 'Mudar dado cadastral é a mesma coisa que trocar o titular?', r: 'Não. Alteração cadastral corrige informações do mesmo titular (grafia do nome, endereço, contato, classe). Trocar quem é o responsável pela conta é alteração de titularidade, que tem processo e documentos próprios.' },
      { p: 'Não recebo minha fatura. Resolve?', r: 'Resolve, quando a causa é endereço de correspondência desatualizado. Aproveitamos para cadastrar fatura por e-mail, que elimina o problema de vez.' },
    ],
    semNos: {
      titulo: "Boa parte disso você resolve sozinho",
      texto:
        "Atualizar endereço de correspondência, telefone ou e-mail é gratuito e leva minutos nos canais de atendimento da distribuidora. Não contrate ninguém para isso. O que justifica um serviço técnico é a mudança de classe de consumo, que exige comprovar o uso real do imóvel e, quando cabe, pedir de volta o que foi cobrado a mais no período.",
      quando: [
        "Propriedade rural faturada como comercial ou residencial",
        "Classe de consumo errada há muitos meses, com diferença acumulada relevante",
        "O pedido de correção já foi negado por falta de documentação",
        "Você quer a revisão retroativa, que exige memorial de cálculo do período",
      ],
    },
    relacionados: ['alteracao-de-titularidade', 'consultoria-de-faturamento', 'alteracao-de-modalidade-tarifaria'],
    keywords: ['alteração de dados cadastrais cosern', 'mudar classe de consumo energia', 'tarifa rural cosern', 'atualizar cadastro conta de luz rn', 'classe errada na fatura de energia'],
    waMsg: 'Olá! Preciso corrigir os dados cadastrais da minha unidade consumidora na Cosern.',
  },
];
