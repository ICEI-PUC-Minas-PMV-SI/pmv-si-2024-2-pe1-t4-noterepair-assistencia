document.addEventListener("DOMContentLoaded", function () {
  const checkbox = document.querySelector('input[name="mesmo_da_coleta"]');
  const entregaCampos = document.getElementById("endereco-entrega-campos");

  // Função para mostrar/ocultar os campos de entrega
  function toggleEntregaCampos() {
    if (checkbox.checked) {
      entregaCampos.style.display = "none"; // Oculta os campos
    } else {
      entregaCampos.style.display = "block"; // Mostra os campos
    }
  }

  // Adiciona o evento de mudança ao checkbox
  checkbox.addEventListener("change", toggleEntregaCampos);

  // Inicializa o estado dos campos ao carregar a página
  toggleEntregaCampos();
});

document.addEventListener("DOMContentLoaded", function () {
  function maskCEP(value) {
    value = value.replace(/\D/g, "");
    if (value.length > 5) {
      value = value.replace(/^(\d{5})(\d)/, "$1-$2");
    }
    return value;
  }

  const cepColetaInput = document.getElementById("cep-coleta");
  const cepEntregaInput = document.getElementById("cep-entrega");

  cepColetaInput.addEventListener("input", function (e) {
    e.target.value = maskCEP(e.target.value);
  });

  cepEntregaInput.addEventListener("input", function (e) {
    e.target.value = maskCEP(e.target.value);
  });

  // Gerencia a obrigatoriedade dos campos de entrega
  document
    .getElementById("mesmo_da_coleta")
    .addEventListener("change", function (e) {
      const isChecked = e.target.checked;
      const entregaCampos = document.querySelectorAll(
        "#endereco-entrega-campos input",
      );

      entregaCampos.forEach(function (campo) {
        if (isChecked) {
          campo.required = false;
          campo.disabled = true;
        } else {
          campo.required = campo.id !== "complemento-entrega";
          campo.disabled = false;
        }
      });
    });
});

document.addEventListener("DOMContentLoaded", function () {
  // Campos de coleta
  const cepColetaInput = document.getElementById("cep-coleta");
  const bairroColetaInput = document.getElementById("bairro-coleta");
  const logradouroColetaInput = document.getElementById("logradouro-coleta");
  const complementoColetaInput = document.getElementById("complemento-coleta");

  // Campos de entrega
  const cepEntregaInput = document.getElementById("cep-entrega");
  const bairroEntregaInput = document.getElementById("bairro-entrega");
  const logradouroEntregaInput = document.getElementById("logradouro-entrega");
  const complementoEntregaInput = document.getElementById(
    "complemento-entrega",
  );

  // Função para buscar endereço na ViaCEP
  function buscarEndereco(cep, onSuccess, onError) {
    const cepLimpo = cep.replace(/\D/g, "");
    if (cepLimpo.length === 8) {
      fetch(`https://viacep.com.br/ws/${cepLimpo}/json/`)
        .then((response) => response.json())
        .then((data) => {
          if (!data.erro) {
            onSuccess(data);
          } else {
            onError && onError();
          }
        })
        .catch((error) => {
          console.error("Erro ao buscar endereço:", error);
          onError && onError();
        });
    }
  }

  // Ao sair do campo CEP de coleta, busca o endereço
  cepColetaInput.addEventListener("blur", function () {
    const cep = cepColetaInput.value;
    if (cep && cep.length >= 9) {
      buscarEndereco(
        cep,
        (data) => {
          bairroColetaInput.value = data.bairro || "";
          logradouroColetaInput.value = data.logradouro || "";
        },
        () => {
          bairroColetaInput.value = "";
          logradouroColetaInput.value = "";
          console.log("CEP de coleta não encontrado.");
        },
      );
    }
  });

  // Ao sair do campo CEP de entrega, busca o endereço
  cepEntregaInput.addEventListener("blur", function () {
    const cep = cepEntregaInput.value;
    if (cep && cep.length >= 9) {
      buscarEndereco(
        cep,
        (data) => {
          bairroEntregaInput.value = data.bairro || "";
          logradouroEntregaInput.value = data.logradouro || "";
        },
        () => {
          bairroEntregaInput.value = "";
          logradouroEntregaInput.value = "";
          console.log("CEP de entrega não encontrado.");
        },
      );
    }
  });
});

// --- Novas Funcionalidades: Carregar Marcas e Enviar Dados via POST ---

document.addEventListener("DOMContentLoaded", function () {
  const marcaSelect = document.getElementById("marca");
  const formOrcamento = document.getElementById("form-orcamento");

  // Carrega as marcas do db.json
  function carregarMarcas() {
    fetch("http://localhost:3000/marcas")
      .then((response) => response.json())
      .then((marcas) => {
        marcaSelect.innerHTML =
          '<option value="" disabled selected>Selecione a marca</option>';
        marcas.forEach((marca) => {
          const option = document.createElement("option");
          option.value = marca.nome;
          option.textContent = marca.nome;
          marcaSelect.appendChild(option);
        });
      })
      .catch((error) => {
        console.error("Erro ao carregar marcas:", error);
        marcaSelect.innerHTML =
          '<option value="" disabled selected>Erro ao carregar marcas</option>';
      });
  }

  carregarMarcas();

  const dataColeta = document.getElementById("data-coleta").value;
  // Ao enviar o formulário, salva os dados no db.json (via POST em /orcamentos)
  formOrcamento.addEventListener("submit", function (event) {
    event.preventDefault();

    const dados = {
      marca: document.getElementById("marca").value,
      modelo: document.getElementById("modelo").value,
      descricao: document.getElementById("descricao").value,
      coleta: {
        cep: document.getElementById("cep-coleta").value,
        bairro: document.getElementById("bairro-coleta").value,
        logradouro: document.getElementById("logradouro-coleta").value,
        complemento: document.getElementById("complemento-coleta").value,
        data: formatarData(dataColeta),
      },
      entrega: {
        mesmoDaColeta: document.getElementById("mesmo_da_coleta").checked,
        cep: document.getElementById("cep-entrega").value,
        bairro: document.getElementById("bairro-entrega").value,
        logradouro: document.getElementById("logradouro-entrega").value,
        complemento: document.getElementById("complemento-entrega").value,
      },
      status: "em-analise",
      cliente_id: JSON.parse(localStorage.getItem("user")).id,
      tecnico_id: 1,
      data: formatarData(`${new Date().toISOString()}`.substring(0, 10)),
      dataUltimoStatus: formatarData(
        `${new Date().toISOString()}`.substring(0, 10),
      ),
      valor: 0,
      reparo_descricao: "",
    };

    // Se "mesmo da coleta" estiver marcado, sobrescreve os dados de entrega pelos de coleta
    if (dados.entrega.mesmoDaColeta) {
      dados.entrega.cep = dados.coleta.cep;
      dados.entrega.bairro = dados.coleta.bairro;
      dados.entrega.logradouro = dados.coleta.logradouro;
      dados.entrega.complemento = dados.coleta.complemento;
    }

    fetch("http://localhost:3000/orcamentos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dados),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Orçamento salvo com sucesso:", data);
        alert("Orçamento enviado com sucesso!");
        formOrcamento.reset();
      })
      .catch((error) => {
        console.error("Erro ao salvar orçamento:", error);
        alert("Erro ao enviar o orçamento. Por favor, tente novamente.");
      });
  });
});

function formatarData(data) {
  const partes = data.split("-");
  if (partes.length <= 1) return data;
  return `${partes[2]}/${partes[1]}/${partes[0]}`;
}
