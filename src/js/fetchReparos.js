const STATUS = {
  "em-analise": "Em análise",
  "em-manutencao": "Em Manutenção",
  enviado: "Enviado",
  concluido: "Concluído",
};

const tabelaReparos = document.querySelector("table tbody");

// Função para buscar os dados do JSON Server
async function carregarReparos() {
  try {
    const resposta = await fetch("http://localhost:3000/reparos");
    if (!resposta.ok) throw new Error("Erro ao carregar os reparos");

    const reparos = await resposta.json();

    // Gera dinamicamente as linhas da tabela
    tabelaReparos.innerHTML = ""; // Limpa o conteúdo existente
    reparos.forEach((reparo) => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>#${reparo.id}</td>
        <td>${reparo.cliente}</td>
        <td>${reparo.data}</td>
        <td>${STATUS[reparo.status]}</td>
        <td>R$ ${reparo.orcamento_valor}</td>
        <td>
          <a href="status_reparo_tecnico.html?id=${reparo.id}">
            <img src="img/info-icon.png" alt="Ícone de detalhes do pedido" />
          </a>
        </td>
      `;
      tabelaReparos.appendChild(tr);
    });
  } catch (erro) {
    console.error(erro);
    tabelaReparos.innerHTML = `<tr><td colspan="6">Erro ao carregar os dados</td></tr>`;
  }
}

// Chama a função ao carregar a página
carregarReparos();
