const STATUS = {
  "em-analise": [0, "etapa-em-analise"],
  "em-manutencao": [1, "etapa-manutencao"],
  enviado: [2, "etapa-enviado"],
  concluido: [3, "etapa-concluido"],
};
let currentStatus;

const getParams = () => {
  const params = new URLSearchParams(window.location.search);
  const map = new Map();

  params.forEach((value, key) => {
    map.set(key, value);
  });

  return map;
};

const params = getParams();
const reparoId = params.get("id");

// Replace reparo id
document
  .querySelectorAll(".reparo-id")
  .forEach((element) => (element.innerText = `#${reparoId}`));

// Replace status
const loadStatus = async () => {
  const response = await fetch(`http://localhost:3000/reparos/${reparoId}`);
  if (response.status != 200) {
    alert("Reparo não encontrado. Retornando para a Lista de Reparos.");
    window.location.href = "lista_de_reparos_cliente.html";
    return;
  }

  const data = await response.json();

  // Clear
  for (const [_, value] of Object.entries(STATUS)) {
    document
      .querySelector(`#${value[1]}`)
      .classList.remove("em_progresso", "concluida");
  }

  // Update current status
  const isLastStatus = STATUS[data.status][0] == 3;
  if (!isLastStatus) {
    document
      .querySelector(`#${STATUS[data.status][1]}`)
      .classList.add("em_progresso");
  } else {
    document
      .querySelector(`#${STATUS[data.status][1]}`)
      .classList.add("concluida");
  }

  // Update all other status
  for (const [_, value] of Object.entries(STATUS)) {
    if (value[0] < STATUS[data.status][0])
      document.querySelector(`#${value[1]}`).classList.add("concluida");
  }

  // Save current status
  currentStatus = data.status;
};

loadStatus();

// Chat
const containerMensagens = document.querySelector("#container-mensagens");
containerMensagens.addEventListener("scroll", (e) => {
  e.stopPropagation();
});

const loadChat = async () => {
  const chatId = await getChatId();
  const messages = await getChatMessages(chatId);

  const userId = JSON.parse(localStorage.getItem("user")).id;
  const messageElements = [];
  messages.forEach((message) => {
    const messageElement = document.createElement("div");
    messageElement.classList.add("mensagem");

    if (message.sender_id == userId)
      messageElement.classList.add("alinhado-direita");

    messageElement.innerText = message.message;
    messageElements.push(messageElement);
  });

  // Clear and append quickly to avoid delay
  clearChat();
  messageElements.forEach((messageElement) => {
    containerMensagens.appendChild(messageElement);
  });

  setTimeout(loadChat, 1500);
};

const getChatId = async () => {
  const response = await fetch(
    `http://localhost:3000/chats?reparo_id=${reparoId}`,
  );
  return (await response.json())[0].id;
};

const getChatMessages = async (chatId) => {
  const response = await fetch(
    `http://localhost:3000/messages?chat_id=${chatId}`,
  );
  return await response.json();
};

const clearChat = () => {
  document.querySelector("#container-mensagens").innerHTML = "";
};

// Start at the bottom

(async () => {
  await loadChat();
  containerMensagens.scrollTop = containerMensagens.scrollHeight;
})();

// Send Messages Form
const form = document.querySelector("#formulario-mensagem");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = new FormData(e.target);

  const response = await fetch("http://localhost:3000/messages", {
    method: "POST",
    body: JSON.stringify({
      message: data.get("mensagem"),
      sender_id: JSON.parse(localStorage.getItem("user")).id,
      chat_id: await getChatId(),
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.status == 201) {
    form.reset();
    await loadChat();
    containerMensagens.scrollTop = containerMensagens.scrollHeight;
  }
});

// Handle Status
const botaoVoltarStatus = document.querySelector("#botao-voltar-status");
const botaoProximoStatus = document.querySelector("#botao-proximo-status");

if (botaoVoltarStatus) {
  botaoVoltarStatus.addEventListener("click", async () => {
    let newStatus;
    for (const [i, v] of Object.entries(STATUS)) {
      if (i == currentStatus) {
        if (v[0] == 0) {
          alert("Não pode voltar mais");
          return;
        }
        newStatus = Object.entries(STATUS)[v[0] - 1][0];
      }
    }

    await fetch("http://localhost:3000/reparos/" + reparoId, {
      body: JSON.stringify({
        reparo_id: reparoId,
        status: newStatus,
      }),
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
    });

    loadStatus();

    alert("Status alterado com sucesso!");
  });
}

if (botaoProximoStatus) {
  botaoProximoStatus.addEventListener("click", async () => {
    let newStatus;
    for (const [i, v] of Object.entries(STATUS)) {
      if (i == currentStatus) {
        if (v[0] == 3) {
          alert("Reparo já concluido!");
          return;
        }
        newStatus = Object.entries(STATUS)[v[0] + 1][0];
      }
    }

    await fetch("http://localhost:3000/reparos/" + reparoId, {
      body: JSON.stringify({
        reparo_id: reparoId,
        status: newStatus,
      }),
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
    });

    loadStatus();

    alert("Status alterado com sucesso!");
  });
}

const formularioOrcamento = document.querySelector("#formulario-orcamento");

if (formularioOrcamento) {
  formularioOrcamento.addEventListener("submit", async (e) => {
    e.preventDefault();

    const data = new FormData(e.target);

    const response = await fetch(`http://localhost:3000/reparos/${reparoId}`, {
      method: "PATCH",
      body: JSON.stringify({
        orcamento_descricao: data.get("orcamento-descricao"),
        orcamento_valor: data.get("orcamento-valor"),
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.status == 200) {
      alert("Orcamento enviado com sucesso!");
    }
  });

  (async () => {
    const response = await fetch(`http://localhost:3000/reparos/${reparoId}`);
    const reparo = await response.json();
    formularioOrcamento.querySelector("#orcamento-valor").value =
      reparo.orcamento_valor || "0,00";
    formularioOrcamento.querySelector("#orcamento-descricao").value =
      reparo.orcamento_descricao || "";
  })();
}
