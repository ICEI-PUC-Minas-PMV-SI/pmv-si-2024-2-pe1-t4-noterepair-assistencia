// Abrir Modal
const modalButtons = document.querySelectorAll(".btn-modal");
modalButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const target = btn.getAttribute("modalTarget");
    const modal = document.querySelector(`#${target}`);
    modal.classList.toggle("modal-active");

    // Se for o modal de visualização de relatório
    if (target === "modal-preview-relatorio") {
      // Obter os dados do relatório a partir dos atributos data
      const pdfPath = btn.getAttribute("data-pdf-path");
      const reportName = btn.getAttribute("data-report-name");
      const reportNumber = btn.getAttribute("data-report-number");

      // Atualizar o src do iframe
      const iframe = modal.querySelector(".pdf-iframe");
      iframe.src = pdfPath;

      // Atualizar o nome do relatório
      const reportNameInput = modal.querySelector("#nome-relatorio-preview");
      reportNameInput.value = reportName;

      // Atualizar o número do relatório
      const reportNumberElement = modal.querySelector(
        "#numero-relatorio-preview"
      );
      reportNumberElement.textContent = reportNumber;
    }
  });
});

// Fechar Modal Opções
const closeModalButtons = document.querySelectorAll(".modal__close");
closeModalButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.parentElement.parentElement.classList.remove("modal-active");

    // Limpa o src do iframe ao fechar o modal
    const iframe = btn.parentElement.parentElement.querySelector(".pdf-iframe");
    if (iframe) {
      iframe.src = "";
    }
  });
});

const modalFrame = document.querySelectorAll(".modal__frame");
modalFrame.forEach((frame) => {
  frame.addEventListener("click", (e) => {
    if (frame !== e.target) return;
    frame.classList.remove("modal-active");

    // Limpa o src do iframe ao fechar o modal
    const iframe = frame.querySelector(".pdf-iframe");
    if (iframe) {
      iframe.src = "";
    }
  });
});

//Modal de detalhes do pedido
document.addEventListener("DOMContentLoaded", function () {
  const modalButtonsDetalhes = document.querySelectorAll(".btn-modal-detalhes");

  modalButtonsDetalhes.forEach(function (btn) {
    btn.addEventListener("click", function () {
      const modalId = this.getAttribute("modalTarget");
      const modal = document.getElementById(modalId);

      // Popula o conteúdo do modal com os dados do botão
      document.getElementById("modal-pedido-numero").innerText =
        this.getAttribute("data-pedido");
      document.getElementById("modal-marca-notebook").innerText =
        this.getAttribute("data-marca");
      document.getElementById("modal-modelo-notebook").innerText =
        this.getAttribute("data-modelo");
      document.getElementById("modal-descricao-problema").innerText =
        this.getAttribute("data-descricao");
      document.getElementById("modal-estimativa-reparo").innerText =
        this.getAttribute("data-estimativa");
      document.getElementById("modal-endereco-coleta").innerText =
        this.getAttribute("data-coleta");
      document.getElementById("modal-endereco-entrega").innerText =
        this.getAttribute("data-entrega");

      modal.classList.add("modal-active");
    });
  });
});
