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
    slug: 'projeto-de-energia-solar',
    chamada: 'Projeto elétrico, ART e solicitação de acesso conduzidos até a homologação da usina.',
    nav: 'Projeto solar',
    icone: 'sol',
    titulo: 'Projeto Solar e Acesso na Cosern | Sousa Costa',
    h1: 'Projeto de energia solar e solicitação de acesso na Cosern',
    descricao:
      'Projeto elétrico, ART e solicitação de acesso da sua usina solar na Cosern, até a homologação. Consultoria técnica em todo o Rio Grande do Norte.',
    badge: 'Geração distribuída',
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
    ],
    relacionados: ['alteracao-de-rateio', 'projeto-de-energia-solar', 'consultoria-de-faturamento'],
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
    relacionados: ['analise-de-problemas', 'art-projeto-solar-cosern', 'projeto-de-energia-solar'],
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
    relacionados: ['consultoria-de-faturamento', 'demandas-cosern', 'laudo-tecnico'],
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
    relacionados: ['alteracao-de-modalidade-tarifaria', 'demandas-cosern', 'alteracao-de-rateio'],
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
    relacionados: ['consultoria-de-faturamento', 'analise-de-problemas', 'alteracao-de-titularidade'],
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
      { p: 'Vocês são da Cosern?', r: 'Não. Somos uma consultoria técnica independente que representa o cliente perante a distribuidora, mediante procuração. Não temos vínculo societário com a Neoenergia Cosern.' },
      { p: 'Atendem pessoa física?', r: 'Atendemos pessoa física e jurídica. O que define o atendimento é a natureza do problema, não o porte do cliente.' },
    ],
    relacionados: ['consultoria-de-faturamento', 'analise-de-problemas', 'alteracao-de-titularidade'],
    keywords: ['problema com a cosern', 'reclamação cosern natal', 'ressarcimento danos elétricos cosern', 'ligação nova cosern', 'aumento de carga cosern rn'],
    waMsg: 'Olá! Tenho uma demanda travada na Cosern e preciso de ajuda para resolver.',
  },
];
