const projetos = [
  {
    titulo: "Integração Oracle x C-Cure",
    descricao: "Liderança de projeto para integração de sistemas críticos de RH e Controle de Acesso, conectando Oracle e C-Cure por meio de processos automatizados e base de dados centralizada. A solução automatizou a gestão do ciclo de vida dos colaboradores, desde a admissão até o desligamento, garantindo atualização automática de permissões de acesso, rastreabilidade operacional e conformidade dos dados.",
    duracao: "5 meses",
    atuacao: "Product Owner (PO)",
    atuacaoTexto: "Conduzi a integração entre Oracle e C-Cure, alinhando áreas de RH, Desenvolvimento e Sustentação para definição de regras de negócio, arquitetura da solução e acompanhamento das entregas. Atuei na priorização do backlog, validação dos requisitos e garantia da implementação de uma solução escalável, segura e aderente às necessidades do negócio.",
    entregas: [
      "Integração completa e bidirecional entre Oracle (dados de RH) e C-Cure (controle de acesso), automatizando o fluxo de ida e retorno.",
      "Estrutura de Backend (SQL): criação de tabelas SQL otimizadas para armazenamento e consumo eficiente dos dados de cadastro e log de acesso.",
      "Redução de Falhas: automação completa do ciclo de vida do colaborador, reduzindo falhas e o risco de acessos indevidos em 100%."
    ],
    impacto: [
      "Governança e Rastreabilidade: eliminação de falhas manuais e garantia de 100% de confiabilidade e rastreabilidade nos dados de acesso e colaboradores.",
      "Benefícios Operacionais (RH/Facilities): passaram a consumir logs de acesso para análises estratégicas como Frequência/Ocupação de Trabalho (FOW) e gestão de ocupação predial."
    ]
  },

  {
    titulo: "Migração de Servidores de Aplicação e Banco (Cloud) / Atualização da Aplicação CC9000 da versão 2.8 para 3.10",
    descricao: "Projeto estratégico voltado à modernização da infraestrutura da plataforma de controle de acesso corporativo C-CURE 9000, contemplando a migração dos servidores de aplicação e banco de dados para ambiente Cloud (AWS), além da atualização da solução da versão 2.8 para a versão 3.10 SP1. A iniciativa teve como objetivo aumentar a disponibilidade, segurança e escalabilidade da plataforma, reduzindo riscos associados à obsolescência tecnológica e garantindo suporte contínuo do fabricante. O projeto foi conduzido sem impactos à operação de controle de acesso físico, assegurando a continuidade dos serviços durante todo o processo de migração e atualização.",
    duracao: "2 meses",
    atuacao: "Product Owner (PO)",
    atuacaoTexto: "Liderança do projeto junto às áreas de Facilities, Infraestrutura, Arquitetura e fornecedores. Definição e priorização do backlog de atividades. Planejamento das etapas de migração e atualização da plataforma. Gestão de riscos, cronograma e alinhamento entre times técnicos e áreas de negócio. Validação dos testes funcionais, homologação e entrada em produção. Acompanhamento da estratégia de rollback para mitigação de riscos operacionais.",
    entregas: [
      "Migração do ambiente on-premises para infraestrutura Cloud (AWS).",
      "Upgrade do C-CURE 9000 da versão 2.8 para 3.10 SP1.",
      "Atualização dos componentes de aplicação, serviços e integrações.",
      "Elaboração do plano de migração e contingência.",
      "Homologação junto às áreas usuárias.",
      "Garantia de continuidade operacional durante a transição."
    ],
    impacto: [
      "Modernização Tecnológica.",
      "Plataforma alinhada às versões suportadas pelo fabricante.",
      "Aplicação de correções de segurança e melhorias disponibilizadas nas versões mais recentes.",
      "Melhoria na estabilidade e desempenho do ambiente.",
      "Redução do esforço de sustentação e manutenção da plataforma.",
      "Migração executada sem impacto significativo para os usuários finais."
    ]
  },

  {
    titulo: "Implantação de Software para Gestão de Facilities em Seis (6) Sites (Fracttal One)",
    descricao: "Projeto estratégico voltado à seleção e implantação de uma plataforma corporativa para gestão integrada de Facilities, com foco na centralização de processos, aumento da eficiência operacional e fortalecimento da governança. A iniciativa contemplou o levantamento de requisitos, avaliação técnica de fornecedores, benchmarking de mercado e validação junto às áreas de negócio e parceiros corporativos globais. A plataforma foi projetada para consolidar a gestão de chamados, documentação, estoque, contratos e processos operacionais em um único ambiente, eliminando controles paralelos e proporcionando maior visibilidade sobre as operações.",
    duracao: "1 ano",
    atuacao: "Atuei como Líder Técnico e Especialista de Negócio:",
    atuacaoTexto: "Condução do processo de seleção da solução de Facilities. Levantamento e consolidação dos requisitos funcionais e técnicos. Benchmarking e avaliação comparativa de fornecedores. Definição de critérios técnicos, operacionais e financeiros para tomada de decisão. Gestão e alinhamento com stakeholders das áreas de Arquitetura, Segurança da Informação, Compliance, Procurement e Facilities. Condução das validações técnicas, provas de conceito (POC) e homologações. Apoio na construção do business case e recomendação executiva da solução.",
    entregas: [
      "Levantamento de Requisitos da ferramenta.",
      "Benchmarking de mercado para identificação das melhores soluções de Facilities.",
      "Construção da matriz de avaliação técnica, funcional e financeira.",
      "Realização de workshops, demonstrações e validações com áreas de negócio.",
      "Validação da aderência aos padrões corporativos globais.",
      "Seleção da plataforma mais aderente às necessidades da organização."
    ],
    impacto: [
      "Redução de controles manuais e planilhas descentralizadas.",
      "Padronização dos fluxos operacionais e aumento da produtividade.",
      "Maior rastreabilidade das operações e gestão documental.",
      "Maior visibilidade sobre chamados, contratos, estoque e atividades operacionais.",
      "Modernização da gestão de Facilities por meio da digitalização de processos."
    ]
  },

  {
    titulo: "Travel One View – Visão Executiva de Gastos com Viagens",
    descricao: "Projeto estratégico desenvolvido para centralizar e padronizar a visão corporativa de gastos com viagens (Travel), proporcionando maior visibilidade para a liderança sênior e áreas financeiras. O principal desafio foi identificar e mapear diferentes fontes de dados, estabelecer padrões para cruzamento e consolidação das informações e criar uma estrutura única de reporting por Vice-Presidência. Como resultado, foi desenvolvido um dashboard centralizado no Power BI, com controle de acesso baseado em permissões, permitindo que cada VP e seus respectivos times de BU Finance acompanhem seus indicadores de Travel de forma estruturada e recorrente.",
    duracao: "3 meses",
    atuacao: "Data & Analytics",
    atuacaoTexto: "Atuei na estruturação e consolidação da base de dados, no desenvolvimento do dashboard executivo no Power BI e na criação da Skill utilizada para padronizar e simplificar a geração do report executivo em Claude.",
    entregas: [
      "Travel One View: criação de uma visão única e centralizada dos gastos corporativos com viagens.",
      "Dashboard executivo no Power BI estruturado por Vice-Presidência, com acesso baseado em permissões para VPs e BU Finance.",
      "Estruturação e padronização da base de dados, consolidando diferentes fontes e estabelecendo regras para o cruzamento das informações.",
      "Reporting mensal: distribuição de um resumo de Travel para todos os VPs no dia 15 de cada mês.",
      "Reporte executivo para a CFO utilizando Claude, apoiado por uma Skill criada para simplificar e padronizar a geração do relatório consolidado."
    ],
    impacto: [
      "Visibilidade Executiva: criação de uma visão corporativa centralizada dos gastos com viagens para acompanhamento pela liderança sênior.",
      "Governança e Padronização: estabelecimento de uma base consolidada e de critérios comuns para análise de Travel entre as Vice-Presidências.",
      "Identificação de Oportunidades: análise do comportamento dos usuários e dos padrões de viagens para identificar oportunidades de otimização de gastos.",
      "Gestão Orientada a Dados: acompanhamento mensal de indicadores, boas práticas e metas relacionadas aos gastos com viagens.",
      "Automação do Reporting: simplificação e padronização da geração do reporte executivo por meio do uso de IA generativa.",
      "Tomada de Decisão: maior visibilidade para VPs, BU Finance e CFO na identificação de tendências, desvios e oportunidades."
    ]
  },

  {
    titulo: "ESG One View",
    descricao: "Projeto estratégico desenvolvido para centralizar e padronizar a visão de indicadores ESG da empresa, consolidando mais de 15 bases e temas diferentes em uma única solução. O projeto contemplou desde a estruturação do processo de entrada das informações até a disponibilização de dashboards consolidados e por tema. Para garantir maior qualidade, rastreabilidade e cumprimento dos prazos, foi criado um fluxo de coleta utilizando Microsoft Forms, no qual os colaboradores responsáveis realizam o preenchimento das informações e recebem automaticamente um e-mail de confirmação para validação dos dados enviados. Também foram implementados fluxos automáticos de lembrete e cobrança para acompanhamento dos prazos. Após o envio, automações em Power Automate capturam as respostas e realizam a gravação estruturada das informações em bases no SharePoint.",
    duracao: "3 meses",
    atuacao: "Data & Analytics / Automação de Processos",
    atuacaoTexto: "Atuei na estruturação das bases e do fluxo de coleta de dados, criação dos formulários no Microsoft Forms, desenvolvimento das automações em Power Automate para captura, validação, lembretes, cobrança e gravação das informações no SharePoint e construção dos dashboards utilizando Claude e Python. Também participei da estruturação da experiência de acesso à solução, disponibilizando os dashboards em SharePoint e OneDrive e criando atalhos na área de trabalho dos usuários envolvidos.",
    entregas: [
      "ESG One View: criação de uma visão centralizada para acompanhamento de mais de 15 bases e temas relacionados a ESG.",
      "Processo padronizado de coleta de dados utilizando Microsoft Forms para entrada das informações pelos responsáveis de cada tema.",
      "Double check automático: envio de e-mail de confirmação após o preenchimento, permitindo ao colaborador validar as informações inseridas e solicitar correções em caso de inconsistências.",
      "Fluxos automáticos de lembrete: envio de notificações nas datas preestabelecidas para reforçar os prazos de preenchimento.",
      "Fluxo automático de cobrança: verificação após o prazo definido e envio de nova notificação quando a informação ainda não tiver sido inserida via Microsoft Forms.",
      "Automação com Power Automate para captura das respostas dos formulários e gravação estruturada dos dados nas bases do SharePoint.",
      "Estruturação e padronização de mais de 15 bases de dados e temas ESG.",
      "Desenvolvimento de dashboards utilizando Claude e Python, com visão consolidada e detalhamento individual por tema.",
      "Disponibilização dos dashboards em SharePoint e OneDrive para acesso dos usuários e gestores envolvidos nos processos.",
      "Criação de atalhos na área de trabalho dos usuários, facilitando o acesso rápido à solução."
    ],
    impacto: [
      "Visão Consolidada: centralização de mais de 15 temas ESG em um único ambiente, proporcionando maior visibilidade para gestores e responsáveis pelos processos.",
      "Governança de Dados: padronização do processo de entrada, armazenamento e consumo das informações ESG.",
      "Cumprimento de Prazos: criação de lembretes e cobranças automáticas para aumentar a aderência dos responsáveis às datas estabelecidas para atualização das informações.",
      "Qualidade das Informações: criação de um processo de confirmação dos dados enviados, aumentando a capacidade de identificação e correção de inconsistências.",
      "Automação Operacional: redução da necessidade de acompanhamento manual por meio da automação da coleta, lembretes, cobranças, validação e armazenamento das informações.",
      "Acesso Simplificado: disponibilização dos dashboards por SharePoint, OneDrive e atalhos diretamente na área de trabalho dos usuários.",
      "Gestão Orientada a Dados: disponibilização de visões consolidadas e específicas por tema, facilitando análises, acompanhamento dos indicadores e tomada de decisão."
    ]
  },

  {
    titulo: "Conecta Workplace IA – Assistente de GenAI para Atendimento Interno",
    descricao: "Desenvolvimento de um assistente baseado em Inteligência Artificial Generativa para centralizar e simplificar o acesso dos colaboradores a informações de Workplace. A solução foi criada para responder dúvidas relacionadas a procedimentos, políticas e solicitações internas, funcionando como um ponto único de orientação para o cliente interno. O assistente direciona o usuário para os canais corretos, links de solicitação, responsáveis e lideranças das áreas, reduzindo o tempo necessário para localizar informações e entender como iniciar cada processo.",
    duracao: "2 meses",
    atuacao: "GenAI / Desenvolvimento de Assistente IA",
    atuacaoTexto: "Atuei na estruturação da base de conhecimento do assistente, organização dos conteúdos de Workplace e definição da lógica de respostas e direcionamentos. A solução foi desenvolvida para consultar conteúdos centralizados no Confluence, permitindo uma sustentação mais simples e atualização contínua das informações utilizadas pelo assistente.",
    entregas: [
      "Conecta Workplace IA: criação de um assistente de Inteligência Artificial Generativa como ponto central de atendimento e orientação para colaboradores.",
      "Centralização de procedimentos, políticas, links, responsáveis e canais de atendimento relacionados aos serviços de Workplace.",
      "Estruturação da base de conhecimento no Confluence, permitindo que o assistente consuma uma fonte corporativa centralizada e de fácil manutenção.",
      "Orientação inteligente sobre como solicitar serviços relacionados a Facilities, Logística, Mobilidade, Segurança do Trabalho, Segurança Patrimonial e serviços corporativos.",
      "Direcionamento automático para formulários, sistemas, links, áreas responsáveis e lideranças de acordo com a necessidade apresentada pelo usuário.",
      "Cobertura de processos estratégicos como Permissão de Trabalho (PTR), Catering, Lockers, transporte entre unidades, envio de materiais, manutenção, limpeza, acesso, crachá e demais serviços de Workplace."
    ],
    impacto: [
      "Experiência do Colaborador: criação de um ponto único para esclarecer dúvidas e localizar rapidamente os canais corretos de atendimento.",
      "Agilidade no Atendimento: redução do tempo gasto pelos colaboradores procurando procedimentos, links, formulários e responsáveis por cada serviço.",
      "Centralização do Conhecimento: consolidação das informações de Workplace em uma base estruturada e reutilizável pelo assistente.",
      "Escalabilidade: possibilidade de ampliar continuamente os temas atendidos pelo assistente sem necessidade de criar novos canais de atendimento.",
      "Redução de Demandas Repetitivas: automação de respostas para dúvidas recorrentes sobre procedimentos e solicitações internas.",
      "Governança e Sustentação: utilização do Confluence como fonte central de conhecimento, facilitando atualização, manutenção e evolução das informações consumidas pela IA.",
      "Direcionamento Inteligente: maior assertividade no encaminhamento dos colaboradores para o processo, sistema ou responsável adequado."
    ]
  },

  {
    titulo: "Modernização da Infraestrutura de CFTV – Brasília",
    descricao: "Projeto de modernização da infraestrutura de monitoramento por CFTV do escritório de Brasília. O ambiente operava em modelo stand-alone, utilizando DVR e VLAN dedicada para conexão das câmeras. Com a modernização, o site passou a seguir o mesmo padrão tecnológico adotado nos demais escritórios, com as câmeras integradas à plataforma ExacqVision e conectadas diretamente à infraestrutura de rede corporativa.",
    duracao: "Em andamento",
    atuacao: "Coordenação de Projeto / Infraestrutura e Segurança Física",
    atuacaoTexto: "Atuei na coordenação das atividades de modernização do ambiente de CFTV, realizando o alinhamento entre Facilities, Network e fornecedores responsáveis pela infraestrutura e sustentação da solução. Acompanhei o planejamento das etapas, adequações físicas, disponibilização de endereçamento IP, conexão das câmeras à rede corporativa e integração dos dispositivos à plataforma ExacqVision.",
    entregas: [
      "Adequação da infraestrutura física e passagem de cabeamento para suportar o novo modelo de conexão das câmeras.",
      "Disponibilização de endereçamento IP para integração das câmeras à infraestrutura de rede corporativa.",
      "Conexão e configuração das câmeras na rede corporativa, incluindo parametrização dos respectivos endereços IP.",
      "Integração e configuração das câmeras na plataforma ExacqVision.",
      "Padronização da arquitetura de CFTV do escritório de Brasília em relação aos demais escritórios.",
      "Coordenação das atividades entre Facilities, Network e fornecedores especializados durante a implantação."
    ],
    impacto: [
      "Padronização Tecnológica: alinhamento do ambiente de Brasília ao padrão corporativo de monitoramento utilizado nos demais escritórios.",
      "Centralização do Monitoramento: integração das câmeras à plataforma ExacqVision, eliminando a operação isolada baseada em DVR.",
      "Melhoria da Infraestrutura: conexão das câmeras diretamente à rede corporativa, proporcionando uma arquitetura mais integrada e sustentável.",
      "Governança e Sustentação: simplificação do suporte e manutenção por meio da adoção de uma plataforma e arquitetura padronizadas.",
      "Escalabilidade: criação de uma infraestrutura preparada para futuras expansões e inclusão de novos dispositivos de monitoramento.",
      "Integração entre Áreas: coordenação entre Facilities, Network e fornecedores especializados para execução das atividades de infraestrutura e configuração."
    ]
  },

  {
    titulo: "Automação Emissão Permissão de Trabalho (PTR)",
    descricao: "Este projeto teve como objetivo otimizar e automatizar o processo de emissão de Permissão de Trabalho (PTR), garantindo maior agilidade, conformidade e rastreabilidade. A solução foi desenvolvida utilizando Power Automate, Microsoft Forms, Microsoft Lists e integração com Microsoft Teams, eliminando processos manuais e centralizando as informações. No fim, todas as informações do processo foram conectadas a um relatório no Power BI, permitindo análise e acompanhamento estratégico.",
    duracao: "3 mês",
    atuacao: "Equipe",
    atuacaoTexto: "Liderei o desenvolvimento da solução de workflow, utilizando Power Automate, Forms e Teams, desde a definição das regras de negócio até a validação com a equipe de Segurança do Trabalho. Implementei a inteligência de dados no processo, integrando todas as informações (fluxo e indicadores) ao Power BI para análise em tempo real.",
    entregas: [
      "Workflow End-to-End: formulário, envio automático de relatórios, criação de pastas e aprovações integradas via Microsoft Teams.",
      "Relatório Gerencial no Power BI com indicadores de tempo de aprovação e status das solicitações para acompanhamento estratégico.",
      "Certificação Green Belt: validação da metodologia e do impacto financeiro do projeto de automação na eficiência operacional."
    ],
    impacto: [
      "Governança e Conformidade: garantia de 100% de conformidade e rastreabilidade em todas as etapas da PTR, reduzindo riscos operacionais.",
      "Redução de tempo e burocracia: redução significativa do lead time da emissão da PTR, gerando maior agilidade e transparência."
    ]
  },

  {
    titulo: "Workspace de Facilities e Dashboards Integrados",
    descricao: "Desenvolvimento de uma plataforma centralizada para consolidar indicadores, processos e informações estratégicas da área de Facilities em um único ambiente digital. A solução integrou dados de Logística, Segurança do Trabalho, Segurança Patrimonial, Engenharia, Frota, Catering e demais operações corporativas, eliminando controles descentralizados e proporcionando uma visão unificada do negócio. O projeto contemplou a estruturação da arquitetura de dados, automação dos processos de atualização e construção de dashboards executivos e operacionais, promovendo maior governança, padronização e agilidade na tomada de decisão.",
    duracao: "6 meses",
    atuacao: "Atuei como analista de dados",
    atuacaoTexto: "Mapeando processos, estruturando a arquitetura de dados, automatizando fluxos (Power Automate) e criando dashboards interativos e padronizados no Power BI.",
    entregas: [
      "Workspace unificado.",
      "+20 dashboards integrados.",
      "Automação da atualização das bases.",
      "Indicadores padronizados entre áreas.",
      "Integração entre dados estratégicos e operacionais."
    ],
    impacto: [
      "Decisões mais rápidas e baseadas em dados.",
      "Redução de riscos operacionais.",
      "Escalabilidade e governança.",
      "Transparência e eficiência dos processos."
    ]
  },

  {
    titulo: "Automação de Tratamento de Dados de Segurança Física",
    descricao: "Este projeto teve como objetivo eliminar o processo manual de extração e tratamento de dados dos relatórios de controle de acesso, que demandava horas diárias de trabalho. A solução foi desenvolvida em Python, utilizando VS Code e recursos de IA generativa, criando rotinas automatizadas para extração diária dos relatórios diretamente em formato Excel para um diretório seguro, renomeação automática dos arquivos após a extração, tratamento completo dos dados e consolidação das informações em uma base única.",
    duracao: "1 mês",
    atuacao: "Atuação",
    atuacaoTexto: "Desenvolvi um pipeline robusto em Python e IA Generativa para automatizar 100% a extração, tratamento e consolidação dos dados.",
    entregas: [
      "Automação completa do fluxo: extração > renomeação > tratamento > consolidação em base única.",
      "Redução do tempo de processamento de aproximadamente 3 horas diárias para segundos."
    ],
    impacto: [
      "Eficiência operacional: redução do tempo de processamento de aproximadamente 3 horas diárias para segundos.",
      "Governança e padronização: eliminação de erros manuais, garantindo a qualidade e integridade dos dados."
    ]
  },

  {
    titulo: "Automação de Extração de Comprovante de Pagamento",
    descricao: "Este projeto teve como objetivo reduzir drasticamente o tempo de busca por comprovantes de pagamento em diretórios com múltiplos arquivos PDF. A solução foi desenvolvida em Python, utilizando VS Code e recursos de IA generativa, permitindo localizar comprovantes por nome do fornecedor ou valor do pagamento de forma rápida e precisa.",
    duracao: "2 dias",
    atuacao: "Atuação",
    atuacaoTexto: "Desenvolvedor de rotinas: criei os scripts em Python responsáveis por ler os PDFs e usar a IA para encontrar e extrair os dados principais (valor, CNPJ) de forma precisa.",
    entregas: [
      "Sistema de busca inteligente: um script que processa múltiplos PDFs, extrai dados-chave e os salva em uma tabela de controle.",
      "Indexação rápida: redução do tempo de busca por um comprovante de cerca de 5 minutos para segundos.",
      "Governança de documentos: método automatizado para manter a organização e confiabilidade dos documentos financeiros."
    ],
    impacto: [
      "Eficiência e velocidade: redução de aproximadamente 98% no tempo de procura de documentos, impactando diretamente na agilidade de auditorias e conciliações.",
      "Escalabilidade e confiabilidade: solução preparada para lidar com volume muito maior de documentos, garantindo a governança e rastreabilidade dos pagamentos."
    ]
  },

  {
    titulo: "Automação das Solicitações de Catering",
    descricao: "Digitalização e automação completa do processo de solicitações de catering, substituindo controles manuais por um fluxo inteligente, integrado e rastreável. A solução foi construída com Power Apps, Power Automate, Microsoft Forms e Microsoft Lists, garantindo agilidade, padronização e eliminação de erros operacionais.",
    duracao: "1 semana",
    atuacao: "Atuação",
    atuacaoTexto: "Atuei na estruturação do processo, regras de validação, automações e criação do fluxo integrado entre sistemas, garantindo governança dos dados e fluidez entre as etapas.",
    entregas: [
      "Formulário inteligente no Power Apps.",
      "Integração com Microsoft Lists.",
      "Automação de aprovações e atualizações com Power Automate.",
      "Notificações automáticas aos usuários.",
      "Portal único e intuitivo."
    ],
    impacto: [
      "Eliminação de planilhas manuais.",
      "Redução do tempo de processamento.",
      "Transparência e rastreabilidade.",
      "Escalabilidade do processo.",
      "Governança e padronização dos dados."
    ]
  },

  {
    titulo: "Automação das Solicitações de Lockers",
    descricao: "Digitalização e automação completa do processo de solicitação de lockers, substituindo controles manuais por um fluxo padronizado, rastreável e com comunicação automática ao usuário. A solução integrou Microsoft Forms, Microsoft Lists e Power Automate, garantindo organização, agilidade e visibilidade fim a fim.",
    duracao: "1 semana",
    atuacao: "Atuação",
    atuacaoTexto: "Atuei na definição das regras, validação do processo, criação das automações e estruturação dos dados, garantindo fluidez operacional e governança das solicitações.",
    entregas: [
      "Formulário padronizado no Microsoft Forms.",
      "Registro e acompanhamento no Microsoft Lists.",
      "Atualização automática de status.",
      "Notificações inteligentes para usuários.",
      "Envio automático das instruções de utilização."
    ],
    impacto: [
      "Eliminação de controles manuais.",
      "Processo 100% digital.",
      "Transparência e rastreabilidade.",
      "Melhoria na experiência do usuário.",
      "Escalabilidade e padronização."
    ]
  },

  {
    titulo: "Segurança de Dados de BI (Backup Automático)",
    descricao: "Implementação de um processo automatizado de backup para garantir a integridade, segurança e disponibilidade das bases utilizadas nos dashboards de BI. A solução, construída com Power Automate, assegura que todas as bases sejam copiadas e armazenadas diariamente em um diretório seguro, reforçando a governança e reduzindo riscos operacionais.",
    duracao: "1 semana",
    atuacao: "Atuação",
    atuacaoTexto: "Atuei no mapeamento das bases, validação das fontes, definição da arquitetura do fluxo e construção da automação, garantindo consistência, confiabilidade e controle sobre os dados críticos.",
    entregas: [
      "Diretório seguro para armazenamento.",
      "Automação completa do backup diário.",
      "Padronização das fontes de dados.",
      "Monitoramento e rastreabilidade do processo."
    ],
    impacto: [
      "Governança de dados fortalecida.",
      "Redução de riscos e falhas humanas.",
      "Escalabilidade do processo.",
      "Transparência e rastreabilidade."
    ]
  },

  {
    titulo: "Padronização e Consolidação de Planilhas OPEX",
    descricao: "Este projeto teve como objetivo criar uma dinâmica eficiente para acompanhamento dos gastos OPEX durante o mês e ao longo do ano fiscal. A solução foi a criação de uma planilha padronizada para cada gestão registrar seus faturamentos, com um processo automatizado que realiza o join dessas informações, consolidando aproximadamente 15 planilhas em um único arquivo. Esse consolidado final alimenta um dashboard no Power BI, garantindo visibilidade estratégica para liderança sênior e analistas responsáveis pelo MMC.",
    duracao: "4 meses",
    atuacao: "Atuação",
    atuacaoTexto: "Liderei a padronização e a engenharia de dados, atuando na criação de uma planilha modelo e no desenvolvimento de um processo para a consolidação de dados OPEX. Também fui responsável pela automação do join de aproximadamente 15 planilhas e pela integração do arquivo consolidado com o dashboard do Power BI.",
    entregas: [
      "Planilha padrão: criação de um modelo uniforme de registro de faturamento para todas as gestões.",
      "Processo de consolidação automatizado: rotina que realiza o join eficiente de aproximadamente 15 fontes de dados em um único arquivo.",
      "Dashboard consolidado no Power BI: integração final que transformou dados brutos em indicadores visuais para acompanhamento dinâmico dos gastos."
    ],
    impacto: [
      "Visibilidade estratégica: fornecimento de visibilidade consolidada e centralizada do OPEX para liderança sênior e analistas durante o mês e o ano fiscal.",
      "Otimização de tempo: eliminação do tempo gasto na compilação manual das planilhas mensais, agilizando o ciclo de reporting financeiro."
    ]
  },

  {
    titulo: "Criação de Formulários no ServiceNow para Logística",
    descricao: "Este projeto teve como objetivo digitalizar e padronizar os processos de logística por meio da criação de formulários no ServiceNow, garantindo maior organização, rastreabilidade e eficiência. Junto ao gestor e responsáveis pelos processos, realizamos o mapeamento completo, identificamos necessidades e definimos o escopo para todos os fluxos, solicitando ao time responsável a criação dos formulários.",
    duracao: "3 meses",
    atuacao: "Equipe",
    atuacaoTexto: "Liderança em mapeamento e processos (BPM): conduzi o mapeamento completo dos processos de Logística, alinhando as necessidades com os gestores e responsáveis. Gestão da digitalização: defini o escopo de digitalização e acompanhei a criação dos formulários junto ao time de ServiceNow, garantindo a aderência aos processos mapeados.",
    entregas: [
      "Mapeamento detalhado de processos: definição do escopo e do fluxo de trabalho padronizado para todos os processos de Logística.",
      "Formulários digitais no ServiceNow: criação de formulários eletrônicos para a digitalização das solicitações de Logística.",
      "Redução de erros e centralização: solicitações em uma plataforma única, reduzindo a taxa de erros manuais de 100% dos fluxos."
    ],
    impacto: [
      "Governança e padronização: garantia de um padrão único para todas as solicitações, reduzindo erros manuais e dispersão de informações.",
      "Eficiência operacional: agilização do atendimento e da execução dos serviços de Logística, com foco na organização e eficiência."
    ]
  },

  {
    titulo: "Implantação do Adobe Sign para Assinatura de Documentos",
    descricao: "Este projeto teve como objetivo resolver uma dor crítica da área de Segurança do Trabalho relacionada à assinatura das atas da CIPA, que levava cerca de 4 meses para ser concluída, gerando risco de apontamentos jurídicos por descumprimento de prazos legais. A solução consistiu em implementar o Adobe Sign, ferramenta já disponível na empresa, para digitalizar e agilizar o processo de assinatura eletrônica.",
    duracao: "2 dias",
    atuacao: "Atuação",
    atuacaoTexto: "Liderei a implementação da ferramenta Adobe Sign no setor que tinha essa dor, atuando na identificação da solução adequada e na configuração do workflow de assinatura eletrônica.",
    entregas: [
      "Treinamento e documentação para garantir a correta utilização e compliance do processo de assinatura.",
      "Aproveitamento de ferramenta já existente, garantindo a entrega sem custos adicionais de licenciamento."
    ],
    impacto: [
      "Agilidade e conformidade: redução do tempo de conclusão das atas da CIPA de 4 meses para apenas 2 dias.",
      "Eliminação de risco jurídico: otimização do processo crítico, eliminando o risco de apontamentos jurídicos por atraso no cumprimento da legislação.",
      "Eficiência operacional: melhoria imediata na produtividade e governança na gestão de documentos críticos."
    ]
  }
];


let projetoAtual = 0;

function mostrarProjeto() {
  const projeto = projetos[projetoAtual];

  document.getElementById("project-title").textContent = projeto.titulo;
  document.getElementById("project-description").textContent = projeto.descricao;
  document.getElementById("project-duration").textContent = projeto.duracao;
  document.getElementById("project-role").textContent = projeto.atuacao;
  document.getElementById("project-role-text").textContent = projeto.atuacaoTexto;

  document.getElementById("project-deliveries").innerHTML =
    projeto.entregas.map(item => `<li>${item}</li>`).join("");

  document.getElementById("project-impact").innerHTML =
    projeto.impacto.map(item => `<li>${item}</li>`).join("");

  document.getElementById("project-counter").textContent =
    `${projetoAtual + 1} / ${projetos.length}`;
}

function proximoProjeto() {
  projetoAtual = (projetoAtual + 1) % projetos.length;
  mostrarProjeto();
}

function projetoAnterior() {
  projetoAtual = (projetoAtual - 1 + projetos.length) % projetos.length;
  mostrarProjeto();
}

document.addEventListener("DOMContentLoaded", mostrarProjeto);
