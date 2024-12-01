document.addEventListener('DOMContentLoaded', () => {
  const tabelaCorpo = document.querySelector('table tbody');
  const campoPesquisa = document.getElementById('campo-pesquisa');
  let todosPedidos = []; // Variável para armazenar todos os pedidos

  // Função para criar uma linha na tabela
  function criarLinha(pedido) {
    console.log('Criando linha para pedido:', pedido);
    const tr = document.createElement('tr');

    // Determinar a classe do status
    let statusClass = '';
    switch (pedido.status.toLowerCase()) {
      case 'manutenção':
        statusClass = 'Manutencao';
        break;
      case 'em análise':
        statusClass = 'Em Análise';
        break;
      case 'concluído':
        statusClass = 'Concluído';
        break;
      default:
        statusClass = '';
    }

    tr.innerHTML = `
      <td>${pedido.numero}</td>
      <td>${pedido.nomeCliente}</td>
      <td>${formatarData(pedido.dataCriacao)}</td>
      <td class="status-cell" data-id="${pedido.id}">
        <span class="status-text ${statusClass}">${pedido.status}</span>
        <img src="img/down-icon.png" alt="Alterar Status" class="icon-down-arrow" />
        <div class="status-options">
          <div class="status-option" data-status="Manutenção">Manutenção</div>
          <div class="status-option" data-status="Em Análise">Em Análise</div>
          <div class="status-option" data-status="Concluído">Concluído</div>
        </div>
      </td>
      <td>${formatarData(pedido.dataUltimoStatus)}</td>
      <td>${pedido.tecnico}</td>
      <td>
        <button
          class="btn-modal-detalhes"
          modalTarget="modal-detalhes-pedido"
          data-pedido="${pedido.numero}"
          data-marca="${pedido.marca}"
          data-modelo="${pedido.modelo}"
          data-descricao="${pedido.descricao}"
          data-estimativa="${pedido.estimativa}"
          data-coleta="${pedido.coleta}"
          data-entrega="${pedido.entrega}"
          data-id="${pedido.id}"
        >
          <img src="img/info-icon.png" alt="Ícone de detalhes do pedido" />
        </button>
        <img src="img/edit-icon.png" alt="Ícone de Edição" class="icon-edit" />
        <img src="img/delete-icon.png" alt="Ícone de deletar" class="icon-delete" />
      </td>
    `;

    tabelaCorpo.appendChild(tr);
  }

  // Função para formatar a data de YYYY-MM-DD para DD/MM/YYYY
  function formatarData(data) {
    const partes = data.split('-');
    return `${partes[2]}/${partes[1]}/${partes[0]}`;
  }

  // Função para buscar os pedidos do JSON Server
  function buscarPedidos() {
    console.log('Buscando pedidos...');
    fetch('http://localhost:3000/pedidos')
      .then(response => {
        console.log('Resposta recebida:', response);
        return response.json();
      })
      .then(pedidos => {
        console.log('Pedidos recebidos:', pedidos);
        todosPedidos = pedidos; // Armazenar os pedidos na variável global
        renderizarTabela(todosPedidos);
      })
      .catch(error => console.error('Erro ao buscar pedidos:', error));
  }

  // Função para renderizar a tabela com uma lista de pedidos
  function renderizarTabela(pedidos) {
    console.log('Renderizando tabela com pedidos:', pedidos);
    tabelaCorpo.innerHTML = ''; // Limpar a tabela antes de preencher
    pedidos.forEach(pedido => criarLinha(pedido));
    // Após preencher a tabela, inicializar os modais e ações
    inicializarModais();
    inicializarAcoesTabela();
  }

  // Função para inicializar os eventos dos modais de detalhes, edição e alteração de status
  function inicializarModais() {
    // Eventos para abrir o modal de detalhes
    const botoesDetalhes = document.querySelectorAll('.btn-modal-detalhes');
    botoesDetalhes.forEach(botao => {
      botao.addEventListener('click', () => {
        const modalId = botao.getAttribute('modalTarget');
        const modal = document.getElementById(modalId);

        // Preencher os dados no modal de detalhes
        document.getElementById('modal-pedido-numero').textContent = botao.getAttribute('data-pedido');
        document.getElementById('modal-marca-notebook').textContent = botao.getAttribute('data-marca');
        document.getElementById('modal-modelo-notebook').textContent = botao.getAttribute('data-modelo');
        document.getElementById('modal-descricao-problema').textContent = botao.getAttribute('data-descricao');
        document.getElementById('modal-estimativa-reparo').textContent = botao.getAttribute('data-estimativa');
        document.getElementById('modal-endereco-coleta').textContent = botao.getAttribute('data-coleta');
        document.getElementById('modal-endereco-entrega').textContent = botao.getAttribute('data-entrega');

        // Exibir o modal de detalhes
        modal.style.display = 'flex';
      });
    });

    // Eventos para abrir o modal de edição
    const botoesEditar = document.querySelectorAll('.icon-edit');
    botoesEditar.forEach(botao => {
      botao.addEventListener('click', () => {
        const tr = botao.closest('tr');
        const idPedido = botao.parentElement.querySelector('.btn-modal-detalhes').getAttribute('data-id');

        console.log(`Abrindo modal de edição para o pedido ID: ${idPedido}`);

        // Buscar o pedido pelo ID
        fetch(`http://localhost:3000/pedidos/${idPedido}`)
          .then(response => {
            console.log('Resposta recebida ao buscar pedido para edição:', response);
            if (!response.ok) {
              throw new Error('Pedido não encontrado');
            }
            return response.json();
          })
          .then(pedido => {
            console.log('Pedido para edição:', pedido);
            abrirModalEditar(pedido);
          })
          .catch(error => {
            console.error('Erro ao buscar pedido para edição:', error);
            alert('Erro ao buscar pedido para edição. Tente novamente.');
          });
      });
    });

    // Eventos para abrir/fechar as opções de status
    const statusCells = document.querySelectorAll('.status-cell');
    statusCells.forEach(celula => {
      const seta = celula.querySelector('.icon-down-arrow');
      const optionsContainer = celula.querySelector('.status-options');

      // Toggle display das opções ao clicar na seta
      seta.addEventListener('click', (event) => {
        event.stopPropagation(); // Evita que o clique propague para outros elementos
        // Fecha outras opções abertas
        fecharTodasAsOpcoes();
        // Alterna a visibilidade das opções deste pedido
        celula.classList.toggle('open');
      });

      // Adicionar event listeners para cada opção de status
      const opcoes = celula.querySelectorAll('.status-option');
      opcoes.forEach(opcao => {
        opcao.addEventListener('click', (event) => {
          const novoStatus = opcao.getAttribute('data-status');
          const pedidoId = celula.getAttribute('data-id');

          atualizarStatusPedido(pedidoId, novoStatus);
          celula.classList.remove('open'); // Fecha as opções após a seleção
        });
      });
    });

    // Fechar as opções de status ao clicar fora
    document.addEventListener('click', () => {
      fecharTodasAsOpcoes();
    });

    // Fechar os modais ao clicar no botão de fechar
    const botoesFechar = document.querySelectorAll('.modal__close');
    botoesFechar.forEach(botao => {
      botao.addEventListener('click', () => {
        const modal = botao.closest('.modal__frame');
        modal.style.display = 'none';
      });
    });

    // Fechar os modais ao clicar fora da caixa do modal
    window.addEventListener('click', (event) => {
      const modais = document.querySelectorAll('.modal__frame');
      modais.forEach(modal => {
        if (event.target == modal) {
          modal.style.display = 'none';
        }
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

  // Função para abrir o modal de edição com os dados preenchidos
  function abrirModalEditar(pedido) {
    console.log('Abrindo modal de edição para o pedido:', pedido);
    const modalEditar = document.getElementById('modal-editar-pedido');
    modalEditar.style.display = 'flex';

    // Preencher os campos do formulário de edição
    document.getElementById('editar-pedido-id').value = pedido.id;
    document.getElementById('editar-pedido-numero').value = pedido.numero;
    document.getElementById('editar-pedido-numero-display').textContent = pedido.numero;
    document.getElementById('editar-marca-notebook').value = pedido.marca;
    document.getElementById('editar-modelo-notebook').value = pedido.modelo;
    document.getElementById('editar-descricao-problema').value = pedido.descricao;
    document.getElementById('editar-estimativa-reparo').value = pedido.estimativa;
    document.getElementById('editar-endereco-coleta').value = pedido.coleta;
    document.getElementById('editar-endereco-entrega').value = pedido.entrega;
  }

  // Função para inicializar as ações de deleção na tabela
  function inicializarAcoesTabela() {
    // Ações de Deletar
    const botoesDeletar = document.querySelectorAll('.icon-delete');
    botoesDeletar.forEach(botao => {
      botao.addEventListener('click', () => {
        const tr = botao.closest('tr');
        const numeroPedido = tr.querySelector('td').textContent;
        const idPedido = botao.parentElement.querySelector('.btn-modal-detalhes').getAttribute('data-id');
        const confirmar = confirm(`Deseja realmente deletar o pedido ${numeroPedido}?`);

        if (confirmar) {
          console.log(`Deletando pedido ID: ${idPedido}`);

          // Deletar o pedido
          fetch(`http://localhost:3000/pedidos/${idPedido}`, {
            method: 'DELETE'
          })
            .then(response => {
              console.log('Resposta da deleção:', response);
              if (!response.ok) {
                throw new Error('Erro na deleção do pedido');
              }
              tr.remove();
              alert(`Pedido ${numeroPedido} deletado com sucesso!`);
            })
            .catch(error => {
              console.error('Erro ao deletar pedido:', error);
              alert('Falha ao deletar o pedido. Por favor, tente novamente.');
            });
        }
      });
    });
  }

  // Função para lidar com a submissão do formulário de edição
  function configurarFormularioEditar() {
    const formEditar = document.getElementById('form-editar-pedido');

    if (formEditar) {
      formEditar.addEventListener('submit', (e) => {
        e.preventDefault();

        const idPedido = document.getElementById('editar-pedido-id').value;
        const marca = document.getElementById('editar-marca-notebook').value;
        const modelo = document.getElementById('editar-modelo-notebook').value;
        const descricao = document.getElementById('editar-descricao-problema').value;
        const estimativa = document.getElementById('editar-estimativa-reparo').value;
        const coleta = document.getElementById('editar-endereco-coleta').value;
        const entrega = document.getElementById('editar-endereco-entrega').value;

        console.log(`Atualizando pedido ID: ${idPedido}`);

        // Criar um objeto com apenas os campos que podem ser atualizados
        const camposAtualizados = {
          marca: marca,
          modelo: modelo,
          descricao: descricao,
          estimativa: estimativa,
          coleta: coleta,
          entrega: entrega
        };

        console.log('Campos atualizados:', camposAtualizados);

        // Atualizar o pedido no JSON Server usando PATCH
        fetch(`http://localhost:3000/pedidos/${idPedido}`, {
          method: 'PATCH', // Use 'PATCH' para atualizar apenas alguns campos
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(camposAtualizados)
        })
          .then(response => {
            console.log('Resposta da atualização:', response);
            if (!response.ok) {
              throw new Error('Erro na atualização do pedido');
            }
            return response.json();
          })
          .then(pedido => {
            console.log('Pedido atualizado:', pedido);
            alert('Pedido atualizado com sucesso!');
            // Atualizar a variável global e re-renderizar a tabela
            const index = todosPedidos.findIndex(p => p.id === pedido.id);
            if (index !== -1) {
              todosPedidos[index] = { ...todosPedidos[index], ...pedido };
              renderizarTabela(todosPedidos);
            }
            // Fechar o modal de edição
            const modalEditar = document.getElementById('modal-editar-pedido');
            modalEditar.style.display = 'none';
          })
          .catch(error => {
            console.error('Erro ao atualizar pedido:', error);
            alert('Falha ao atualizar o pedido. Por favor, tente novamente.');
          });
      });
    }
  }

  // Função para lidar com a atualização do status do pedido
  function atualizarStatusPedido(id, novoStatus) {
    console.log(`Atualizando status do pedido ID: ${id} para: ${novoStatus}`);

    // Obter a data atual para atualizar a data do último status
    const dataAtual = obterDataAtual();

    // Enviar a atualização via PATCH
    fetch(`http://localhost:3000/pedidos/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ status: novoStatus, dataUltimoStatus: dataAtual }) // Atualiza também a data do último status
    })
      .then(response => {
        console.log('Resposta da atualização do status:', response);
        if (!response.ok) {
          throw new Error('Erro ao atualizar o status do pedido');
        }
        return response.json();
      })
      .then(pedidoAtualizado => {
        console.log('Pedido atualizado:', pedidoAtualizado);
        alert('Status do pedido atualizado com sucesso!');

        // Atualizar a variável global e re-renderizar a tabela
        const index = todosPedidos.findIndex(p => p.id === pedidoAtualizado.id);
        if (index !== -1) {
          todosPedidos[index] = { ...todosPedidos[index], ...pedidoAtualizado };
          renderizarTabela(todosPedidos);
        }
      })
      .catch(error => {
        console.error('Erro ao atualizar status do pedido:', error);
        alert('Falha ao atualizar o status do pedido. Por favor, tente novamente.');
      });
  }

  // Função para obter a data atual no formato YYYY-MM-DD
  function obterDataAtual() {
    const hoje = new Date();
    const dia = String(hoje.getDate()).padStart(2, '0');
    const mes = String(hoje.getMonth() + 1).padStart(2, '0'); // Janeiro é 0
    const ano = hoje.getFullYear();
    return `${ano}-${mes}-${dia}`;
  }

  // Função para lidar com a pesquisa com debounce
  function debounce(func, delay) {
    let debounceTimer;
    return function() {
      const context = this;
      const args = arguments;
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => func.apply(context, args), delay);
    };
  }

  // Função para configurar a pesquisa
  function configurarPesquisa() {
    campoPesquisa.addEventListener('input', debounce(() => {
      const textoPesquisa = campoPesquisa.value.toLowerCase();
      console.log('Texto de pesquisa:', textoPesquisa);

      const pedidosFiltrados = todosPedidos.filter(pedido => {
        return (
          pedido.numero.toLowerCase().includes(textoPesquisa) ||
          pedido.nomeCliente.toLowerCase().includes(textoPesquisa) ||
          pedido.tecnico.toLowerCase().includes(textoPesquisa) ||
          pedido.status.toLowerCase().includes(textoPesquisa) ||
          pedido.marca.toLowerCase().includes(textoPesquisa) ||
          pedido.modelo.toLowerCase().includes(textoPesquisa) ||
          pedido.descricao.toLowerCase().includes(textoPesquisa) ||
          pedido.coleta.toLowerCase().includes(textoPesquisa) ||
          pedido.entrega.toLowerCase().includes(textoPesquisa)
        );
      });

      console.log('Pedidos filtrados:', pedidosFiltrados);
      renderizarTabela(pedidosFiltrados);
    }, 300)); // 300ms de atraso para debounce
  }

  // Inicializar ao carregar a página
  buscarPedidos();
  configurarFormularioEditar();
  configurarPesquisa();
});
