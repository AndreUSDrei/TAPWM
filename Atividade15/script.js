function abrirCurso() {
  const select = document.getElementById("cursoSelect");
  const curso = select.value;
  if (!curso) return;

  const confirmar = confirm("Deseja abrir informações sobre o curso selecionado?");
  if (!confirmar) return;

  let conteudo = "";
  switch (curso) {
    case "ads":
      conteudo = `
        <h2>Análise e Desenvolvimento de Sistemas</h2>
        <p><strong>Duração:</strong> 6 a 8 semestres (Presencial)</p>
        <p><strong>Área:</strong> Tecnologia da Informação</p>
        <p><strong>Descrição:</strong> Forma profissionais para desenvolver, analisar, projetar, implementar e atualizar sistemas de informação. Foco em programação, bancos de dados, redes e metodologias ágeis.</p>
        <p><strong>Mercado:</strong> Desenvolvedor de software, analista de sistemas, gestor de projetos de TI, administrador de banco de dados.</p>
      `;
      break;

    case "log":
      conteudo = `
        <h2>Logística</h2>
        <p><strong>Duração:</strong> 6 semestres (Presencial)</p>
        <p><strong>Área:</strong> Gestão e Negócios</p>
        <p><strong>Descrição:</strong> Curso voltado à gestão da cadeia de suprimentos, transporte, armazenagem e distribuição.</p>
        <p><strong>Mercado:</strong> Atuação em transportadoras, indústrias, operadores logísticos e comércio internacional.</p>
      `;
      break;

    case "eletronica":
      conteudo = `
        <h2>Eletrônica Automotiva</h2>
        <p><strong>Duração:</strong> 6 semestres (Presencial)</p>
        <p><strong>Área:</strong> Controle e Processos Industriais</p>
        <p><strong>Descrição:</strong> Forma profissionais para projetar, integrar e manter sistemas eletrônicos aplicados em veículos.</p>
        <p><strong>Mercado:</strong> Montadoras, autopeças, oficinas de diagnóstico e centros de pesquisa automotiva.</p>
      `;
      break;

    case "gestao":
      conteudo = `
        <h2>Gestão da Qualidade</h2>
        <p><strong>Duração:</strong> 6 semestres (Presencial)</p>
        <p><strong>Área:</strong> Gestão e Negócios</p>
        <p><strong>Descrição:</strong> Focado em sistemas de gestão da qualidade, auditorias, processos de certificação e melhoria contínua.</p>
        <p><strong>Mercado:</strong> Indústrias, consultorias de qualidade, certificadoras e empresas de serviços.</p>
      `;
      break;

    case "fabricacao":
      conteudo = `
        <h2>Fabricação Mecânica</h2>
        <p><strong>Duração:</strong> 6 semestres (Presencial)</p>
        <p><strong>Área:</strong> Produção Industrial</p>
        <p><strong>Descrição:</strong> Envolve processos de usinagem, soldagem, planejamento e controle da produção mecânica.</p>
        <p><strong>Mercado:</strong> Indústrias metalúrgicas, automotivas, aeroespaciais e ferramentarias.</p>
      `;
      break;

    case "sistemasbio":
      conteudo = `
        <h2>Sistemas Biomédicos</h2>
        <p><strong>Duração:</strong> 6 semestres (Presencial)</p>
        <p><strong>Área:</strong> Ambiente e Saúde</p>
        <p><strong>Descrição:</strong> Curso que integra tecnologia e saúde, trabalhando com equipamentos médicos e hospitalares.</p>
        <p><strong>Mercado:</strong> Hospitais, clínicas, fabricantes e distribuidoras de equipamentos médicos.</p>
      `;
      break;

    case "projetosmec":
      conteudo = `
        <h2>Projetos Mecânicos</h2>
        <p><strong>Duração:</strong> 6 semestres (Presencial)</p>
        <p><strong>Área:</strong> Produção Industrial</p>
        <p><strong>Descrição:</strong> Forma profissionais para projetar componentes e sistemas mecânicos utilizando softwares CAD/CAE.</p>
        <p><strong>Mercado:</strong> Indústrias automotivas, metalúrgicas e de bens de capital.</p>
      `;
      break;

    case "processosmetal":
      conteudo = `
        <h2>Processos Metalúrgicos</h2>
        <p><strong>Duração:</strong> 6 semestres (Presencial)</p>
        <p><strong>Área:</strong> Controle e Processos Industriais</p>
        <p><strong>Descrição:</strong> Curso focado em fundição, tratamentos térmicos e análise de materiais metálicos.</p>
        <p><strong>Mercado:</strong> Siderúrgicas, fundições, indústrias automotivas e aeroespaciais.</p>
      `;
      break;

    case "polimeros":
      conteudo = `
        <h2>Polímeros</h2>
        <p><strong>Duração:</strong> 6 semestres (Presencial)</p>
        <p><strong>Área:</strong> Produção Industrial</p>
        <p><strong>Descrição:</strong> Estuda materiais poliméricos (plásticos e borrachas), sua produção e transformação.</p>
        <p><strong>Mercado:</strong> Indústrias de embalagens, automotiva, construção civil e eletroeletrônica.</p>
      `;
      break;

    case "gestaoead":
      conteudo = `
        <h2>Gestão Empresarial (EaD)</h2>
        <p><strong>Duração:</strong> 6 semestres (EaD)</p>
        <p><strong>Área:</strong> Gestão e Negócios</p>
        <p><strong>Descrição:</strong> Curso a distância que prepara profissionais para gestão de empresas, finanças, marketing e RH.</p>
        <p><strong>Mercado:</strong> Empresas de todos os portes, consultorias e empreendedorismo.</p>
      `;
      break;

    default:
      conteudo = "<h2>Curso não encontrado</h2>";
  }

  const novaJanela = window.open("", "Curso", "width=600,height=400");
  novaJanela.document.write(`
    <html>
      <head>
        <title>Informações do Curso</title>
        <style>
          body { font-family: Arial, sans-serif; background: #121212; color: #fff; padding: 20px; }
          h2 { color: #00adb5; margin-bottom: 10px; }
          p { margin: 6px 0; }
          strong { color: #ffaa00; }
        </style>
      </head>
      <body>
        ${conteudo}
      </body>
    </html>
  `);
}
