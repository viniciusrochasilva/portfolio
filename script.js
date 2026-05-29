const projetos = [
  {
    titulo: "Integração Oracle x C-Cure",
    descricao:
      "Liderança de projeto para integração de sistemas críticos de RH e Controle de Acesso, conectando Oracle e C-Cure por meio de processos automatizados e base de dados centralizada.",
    duracao: "5 meses",
    atuacao: "Product Owner (PO)",
    atuacaoTexto:
      "Conduzi a integração entre Oracle e C-Cure, alinhando áreas de RH, Desenvolvimento e Sustentação para definição de regras de negócio, arquitetura da solução e acompanhamento das entregas.",
    entregas: [
      "Integração completa e bidirecional entre Oracle e C-Cure.",
      "Estrutura de backend SQL para armazenamento e consumo eficiente dos dados.",
      "Automação completa do ciclo de vida do colaborador.",
      "Redução de falhas e risco de acessos indevidos."
    ],
    impacto: [
      "Eliminação de falhas manuais.",
      "Maior confiabilidade e rastreabilidade dos dados.",
      "Redução de acessos indevidos.",
      "Uso dos logs para análises estratégicas."
    ]
  },
  {
    titulo: "Migração de Servidores de Aplicação e Banco (Cloud)",
    descricao:
      "Projeto estratégico voltado à modernização da infraestrutura da plataforma de controle de acesso corporativo C-CURE 9000, contemplando migração para ambiente Cloud AWS e atualização da aplicação.",
    duracao: "2 meses",
    atuacao: "Product Owner (PO)",
    atuacaoTexto:
      "Liderei o projeto junto às áreas de Facilities, Infraestrutura, Arquitetura e fornecedores, priorizando backlog, riscos, cronograma, testes, homologação e entrada em produção.",
    entregas: [
      "Migração do ambiente on-premises para infraestrutura Cloud AWS.",
      "Upgrade do C-CURE 9000 da versão 2.8 para 3.10 SP1.",
      "Atualização dos componentes de aplicação, serviços e integrações.",
      "Plano de migração, contingência, homologação e transição."
    ],
    impacto: [
      "Modernização tecnológica.",
      "Ambiente alinhado às versões suportadas pelo fabricante.",
      "Melhoria na estabilidade e desempenho.",
      "Migração sem impacto significativo aos usuários finais."
    ]
  },
  {
    titulo: "Implantação de Software para Gestão de Facilities (Fracttal One)",
    descricao:
      "Projeto estratégico voltado à seleção e implantação de uma plataforma corporativa para gestão integrada de Facilities, com foco na centralização de processos, eficiência operacional e governança.",
    duracao: "1 ano",
    atuacao: "Líder Técnico e Especialista de Negócio",
    atuacaoTexto:
      "Conduzi o processo de seleção da solução de Facilities, levantamento de requisitos, benchmarking, avaliações técnicas, funcionais e financeiras, além da validação com áreas de negócio e fornecedores.",
    entregas: [
      "Levantamento de requisitos da ferramenta.",
      "Benchmarking de mercado para identificação das melhores soluções.",
      "Construção da matriz de avaliação técnica, funcional e financeira.",
      "Validação da aderência aos padrões corporativos globais."
    ],
    impacto: [
      "Redução de controles manuais e planilhas descentralizadas.",
      "Padronização dos fluxos operacionais.",
      "Maior rastreabilidade das operações e gestão documental.",
      "Maior visibilidade sobre chamados, contratos, estoque e atividades."
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
}

function proximoProjeto() {
  projetoAtual++;

  if (projetoAtual >= projetos.length) {
    projetoAtual = 0;
  }

  mostrarProjeto();
}

function projetoAnterior() {
  projetoAtual--;

  if (projetoAtual < 0) {
    projetoAtual = projetos.length - 1;
  }

  mostrarProjeto();
}

document.addEventListener("DOMContentLoaded", mostrarProjeto);
