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
    titulo: "MIGRAÇÃO DE SERVIDORES DE APLICAÇÃO e BANCO (Cloud) / ATUALIZAÇÃO DA APLICAÇÃO",
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
    titulo: "Implantação de Software para Gestão de Facilities (Fracttal One)",
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
