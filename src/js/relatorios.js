// js/relatorios.js

document.addEventListener('DOMContentLoaded', () => {
  const tabelaRelatorios = document.getElementById('tabela-relatorios').querySelector('tbody');
  const campoPesquisa = document.querySelector('.input-pesquisar');
  const btnNovoRelatorio = document.getElementById('btn-novo-relatorio');
  const modalNovoRelatorio = document.getElementById('modal-novo-relatorio');
  const modalPreviewRelatorio = document.getElementById('modal-preview-relatorio');
  const formNovoRelatorio = document.getElementById('form-novo-relatorio');
  const numeroRelatorioPreview = document.getElementById('numero-relatorio-preview');
  const nomeRelatorioPreview = document.getElementById('nome-relatorio-preview');
  const pdfIframe = document.getElementById('pdf-iframe');
  // Removida a declaração da variável downloadRelatorio
  const inputPdfRelatorio = document.getElementById('pdf-relatorio');

  let todosRelatorios = []; // Variável para armazenar todos os relatórios

  // Função para criar uma linha na tabela de relatórios
  function criarLinha(relatorio) {
    const tr = document.createElement('tr');

    tr.innerHTML = `
      <td>${relatorio.numero}</td>
      <td>${relatorio.nome}</td>
      <td>${formatarData(relatorio.dataGeracao)}</td>
      <td class="status-cell" data-id="${relatorio.id}">
        <span class="status-text ${getStatusClass(relatorio.status)}">${relatorio.status}</span>
        <img src="img/down-icon.png" alt="Alterar Status" class="icon-down-arrow" />
        <div class="status-options">
          <div class="status-option" data-status="Em Progresso">Em Progresso</div>
          <div class="status-option" data-status="Concluído">Concluído</div>
          <div class="status-option" data-status="Pendente">Pendente</div>
        </div>
      </td>
      <td>${relatorio.tipo}</td>
      <td>${relatorio.responsavel}</td>
      <td>
        <a href="${relatorio.pdfPath}" download class="download-link button">
          <img src="img/download-icon.png" alt="Ícone de download" />
        </a>
        <button class="btn-modal-preview-relatorio" data-id="${relatorio.id}" title="Visualizar Relatório">
          <img src="img/view-icon.png" alt="Ícone de view" />
        </button>
        <button class="btn-delete-relatorio" data-id="${relatorio.id}" title="Deletar Relatório">
          <img src="img/trash-icon.png" alt="Ícone de delete" />
        </button>
      </td>
    `;

    tabelaRelatorios.appendChild(tr);
  }

  // Função para formatar a data de YYYY-MM-DD para DD/MM/YYYY
  function formatarData(data) {
    const partes = data.split('-');
    return `${partes[2]}/${partes[1]}/${partes[0]}`;
  }

  // Função para obter a classe de status
  function getStatusClass(status) {
    switch (status.toLowerCase()) {
      case 'em progresso':
        return 'Em Progresso';
      case 'concluído':
        return 'Concluído';
      case 'pendente':
        return 'Pendente';
      default:
        return '';
    }
  }

  // Função para buscar os relatórios do JSON Server
  function buscarRelatorios() {
    fetch('http://localhost:3000/relatorios')
      .then(response => response.json())
      .then(relatorios => {
        todosRelatorios = relatorios;
        renderizarTabela(todosRelatorios);
      })
      .catch(error => console.error('Erro ao buscar relatórios:', error));
  }

  // Função para renderizar a tabela de relatórios
  function renderizarTabela(relatorios) {
    tabelaRelatorios.innerHTML = ''; // Limpar a tabela antes de preencher
    relatorios.forEach(relatorio => criarLinha(relatorio));
    inicializarAcoesTabela();
  }

  // Função para inicializar eventos das ações da tabela
  function inicializarAcoesTabela() {
    // Inicializar modais de status
    const statusCells = document.querySelectorAll('.status-cell');
    statusCells.forEach(celula => {
      const seta = celula.querySelector('.icon-down-arrow');
      const optionsContainer = celula.querySelector('.status-options');

      // Toggle display das opções ao clicar na seta
      seta.addEventListener('click', (event) => {
        event.stopPropagation(); // Evita que o clique propague para outros elementos
        fecharTodasAsOpcoes();
        celula.classList.toggle('open');
      });

      // Adicionar event listeners para cada opção de status
      const opcoes = celula.querySelectorAll('.status-option');
      opcoes.forEach(opcao => {
        opcao.addEventListener('click', (event) => {
          event.stopPropagation(); // Evita que o clique propague
          const novoStatus = opcao.getAttribute('data-status');
          const relatorioId = celula.getAttribute('data-id');
          atualizarStatusRelatorio(relatorioId, novoStatus);
          celula.classList.remove('open'); // Fecha as opções após a seleção
        });
      });

      // Evitar que cliques dentro do status cell fechem o menu inadvertidamente
      celula.addEventListener('click', (event) => {
        event.stopPropagation();
      });
    });

    // Inicializar botões de preview
    const botoesPreview = document.querySelectorAll('.btn-modal-preview-relatorio');
    botoesPreview.forEach(botao => {
      botao.addEventListener('click', () => {
        const relatorioId = botao.getAttribute('data-id');
        const relatorio = todosRelatorios.find(r => r.id == relatorioId);
        if (relatorio) {
          abrirModalPreview(relatorio);
        }
      });
    });

    // Inicializar botões de deleção
    const botoesDelete = document.querySelectorAll('.btn-delete-relatorio');
    botoesDelete.forEach(botao => {
      botao.addEventListener('click', () => {
        const relatorioId = botao.getAttribute('data-id');
        deletarRelatorio(relatorioId);
      });
    });
  }

  // Função para fechar todas as opções de status abertas
  function fecharTodasAsOpcoes() {
    const todasOpcoes = document.querySelectorAll('.status-cell.open');
    todasOpcoes.forEach(celula => {
      celula.classList.remove('open');
    });
  }

  // Função para atualizar o status de um relatório
  function atualizarStatusRelatorio(id, novoStatus) {
    fetch(`http://localhost:3000/relatorios/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ status: novoStatus })
    })
      .then(response => response.json())
      .then(relatorioAtualizado => {
        // Atualizar o relatório na variável global
        const index = todosRelatorios.findIndex(r => r.id === relatorioAtualizado.id);
        if (index !== -1) {
          todosRelatorios[index] = relatorioAtualizado;
          renderizarTabela(todosRelatorios);
          alert('Status do relatório atualizado com sucesso!');
        }
      })
      .catch(error => {
        console.error('Erro ao atualizar status do relatório:', error);
        alert('Falha ao atualizar o status do relatório. Por favor, tente novamente.');
      });
  }

  // Função para abrir o modal de preview de relatório
  function abrirModalPreview(relatorio) {
    console.log('Abrindo modal para o relatório:', relatorio); // Debugging
    numeroRelatorioPreview.textContent = relatorio.numero;
    nomeRelatorioPreview.value = relatorio.nome;

    if (relatorio.pdfPath) {
      pdfIframe.src = relatorio.pdfPath;
      // downloadRelatorio.href = relatorio.pdfPath;
      // downloadRelatorio.download = relatorio.pdfPath.split('/').pop(); // Removido
    } else {
      pdfIframe.src = '';
      // downloadRelatorio.href = '#';
      // downloadRelatorio.removeAttribute('download');
      alert('PDF não disponível para este relatório.');
    }

    modalPreviewRelatorio.style.display = 'flex';
  }

  // Função para deletar um relatório
  function deletarRelatorio(id) {
    const confirmar = confirm('Deseja realmente deletar este relatório?');
    if (confirmar) {
      fetch(`http://localhost:3000/relatorios/${id}`, {
        method: 'DELETE'
      })
        .then(response => {
          if (response.ok) {
            // Remover o relatório da variável global
            todosRelatorios = todosRelatorios.filter(r => r.id != id);
            renderizarTabela(todosRelatorios);
            alert('Relatório deletado com sucesso!');
          } else {
            throw new Error('Erro na deleção do relatório');
          }
        })
        .catch(error => {
          console.error('Erro ao deletar relatório:', error);
          alert('Falha ao deletar o relatório. Por favor, tente novamente.');
        });
    }
  }

  // Função para lidar com a submissão do formulário de novo relatório
  formNovoRelatorio.addEventListener('submit', (e) => {
    e.preventDefault();

    const nome = document.getElementById('nome-relatorio').value.trim();
    const dataGeracao = document.getElementById('data-geracao').value;
    const status = document.getElementById('status-relatorio').value;
    const tipo = document.getElementById('tipo-relatorio').value;
    const responsavel = document.getElementById('responsavel-relatorio').value.trim();
    const pdfFile = inputPdfRelatorio.files[0];

    if (!nome || !dataGeracao || !status || !tipo || !responsavel) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    if (!pdfFile) {
      alert('Por favor, selecione um arquivo PDF para o relatório.');
      return;
    }

    // Como o JSON Server não suporta upload de arquivos, faça o upload manualmente na pasta 'relatorios/'
    // e defina o campo 'pdfPath' corretamente.

    const pdfPath = `/relatorios/${pdfFile.name}`; // Caminho absoluto

    // Criar um novo relatório
    const novoRelatorio = {
      numero: gerarNumeroRelatorio(),
      nome: nome,
      dataGeracao: dataGeracao,
      status: status,
      tipo: tipo,
      responsavel: responsavel,
      pdfPath: pdfPath // Atualize conforme a lógica de upload de PDF
    };

    fetch('http://localhost:3000/relatorios', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(novoRelatorio)
    })
      .then(response => response.json())
      .then(relatorioCriado => {
        todosRelatorios.push(relatorioCriado);
        renderizarTabela(todosRelatorios);
        alert('Novo relatório criado com sucesso!');
        formNovoRelatorio.reset();
        modalNovoRelatorio.style.display = 'none';
      })
      .catch(error => {
        console.error('Erro ao criar novo relatório:', error);
        alert('Falha ao criar o relatório. Por favor, tente novamente.');
      });
  });

  // Função para gerar um número de relatório único
  function gerarNumeroRelatorio() {
    const ultimoRelatorio = todosRelatorios[todosRelatorios.length - 1];
    const ultimoNumero = ultimoRelatorio ? parseInt(ultimoRelatorio.numero.replace('#', '')) : 0;
    const novoNumero = ultimoNumero + 1;
    return `#${novoNumero.toString().padStart(4, '0')}`;
  }

  // Função para fechar modais ao clicar no botão de fechar ou fora do modal
  function inicializarFechamentoModais() {
    const modais = document.querySelectorAll('.modal__frame');
    modais.forEach(modal => {
      const botaoFechar = modal.querySelector('.modal__close');
      botaoFechar.addEventListener('click', () => {
        modal.style.display = 'none';
      });

      window.addEventListener('click', (event) => {
        if (event.target === modal) {
          modal.style.display = 'none';
        }
      });
    });
  }

  // Inicializar a funcionalidade de fechamento de modais
  inicializarFechamentoModais();

  // Função para lidar com a pesquisa com debounce
  function debounce(func, delay) {
    let debounceTimer;
    return function () {
      const context = this;
      const args = arguments;
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => func.apply(context, args), delay);
    };
  }

  // Função para configurar a pesquisa
  campoPesquisa.addEventListener('input', debounce(() => {
    const textoPesquisa = campoPesquisa.value.toLowerCase();

    const relatoriosFiltrados = todosRelatorios.filter(relatorio => {
      return (
        relatorio.numero.toLowerCase().includes(textoPesquisa) ||
        relatorio.nome.toLowerCase().includes(textoPesquisa) ||
        relatorio.status.toLowerCase().includes(textoPesquisa) ||
        relatorio.tipo.toLowerCase().includes(textoPesquisa) ||
        relatorio.responsavel.toLowerCase().includes(textoPesquisa)
      );
    });

    renderizarTabela(relatoriosFiltrados);
  }, 300)); // 300ms de atraso para debounce

  // Função para abrir o modal de novo relatório
  btnNovoRelatorio.addEventListener('click', () => {
    modalNovoRelatorio.style.display = 'flex';
  });

  // Função para fechar todos os menus de status ao clicar fora
  document.addEventListener('click', () => {
    fecharTodasAsOpcoes();
  });

  // Inicializar buscando os relatórios
  buscarRelatorios();
});
