const tabelaClientes = document.querySelector("table tbody");

// Função para buscar os dados dos clientes
async function carregarClientes() {
  try {
    const resposta = await fetch("http://localhost:3000/clientes");
    if (!resposta.ok) throw new Error("Erro ao carregar os clientes");

    const clientes = await resposta.json();

    // Gera dinamicamente as linhas da tabela
    tabelaClientes.innerHTML = ""; // Limpa o conteúdo existente
    clientes.forEach((cliente) => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${cliente.id_reparo}</td>
        <td>${cliente.cliente}</td>
        <td>${cliente.data}</td>
        <td>${cliente.status}</td>
        <td>${cliente.valor}</td>
        <td>
          <img src="img/info-icon.png" alt="Ícone de detalhes do pedido" />
          <img src="img/edit-icon.png" alt="Ícone de edição" />
        </td>
      `;
      tabelaClientes.appendChild(tr);
    });
  } catch (erro) {
    console.error(erro);
    tabelaClientes.innerHTML = `<tr><td colspan="6">Erro ao carregar os dados</td></tr>`;
  }
}

// Chama a função ao carregar a página
carregarClientes();
