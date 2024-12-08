const STATUS = {
  "em-analise": "Em análise",
  "em-manutencao": "Em Manutenção",
  enviado: "Enviado",
  concluido: "Concluído",
};

const tabelaClientes = document.querySelector("table tbody");

// Função para buscar os dados dos clientes
async function carregarClientes() {
  try {
    const user_id = JSON.parse(localStorage.getItem("user"))["id"];
    const resposta = await fetch(
      `http://localhost:3000/orcamentos?cliente_id=${user_id}`,
    );
    if (!resposta.ok) throw new Error("Erro ao carregar os clientes");

    const reparos = await resposta.json();

    // Gera dinamicamente as linhas da tabela
    tabelaClientes.innerHTML = ""; // Limpa o conteúdo existente

    if (reparos.length === 0) {
      tabelaClientes.innerHTML = `<tr><td colspan="6">Nenhum reparo encontrado</td></tr>`;

      return;
    }

    reparos.forEach((reparo) => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>#${reparo.id}</td>
        <td>${reparo.data}</td>
        <td>${STATUS[reparo.status]}</td>
        <td>R$ ${reparo.valor}</td>
        <td>
          <a href="status_reparo_cliente.html?id=${reparo.id}">
            <img src="img/info-icon.png" alt="Ícone de detalhes do pedido" />
          </a>
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
