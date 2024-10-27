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

  // Aplica a máscara aos campos de CEP
  document.getElementById("cep-coleta").addEventListener("input", function (e) {
    e.target.value = maskCEP(e.target.value);
  });

  document
    .getElementById("cep-entrega")
    .addEventListener("input", function (e) {
      e.target.value = maskCEP(e.target.value);
    });

  // Gerencia a obrigatoriedade dos campos de entrega
  document
    .getElementById("mesmo_da_coleta")
    .addEventListener("change", function (e) {
      const isChecked = e.target.checked;
      const entregaCampos = document.querySelectorAll(
        "#endereco-entrega-campos input"
      );

      entregaCampos.forEach(function (campo) {
        if (isChecked) {
          campo.required = false;
          campo.disabled = true;
        } else {
          campo.required = campo.id !== "complemento-entrega"; // Complemento não é obrigatório
          campo.disabled = false;
        }
      });
    });
});
