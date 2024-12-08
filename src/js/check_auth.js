const role = document.currentScript.getAttribute("role");
const currentRole = JSON.parse(localStorage.getItem("user")).tipo;

if (role !== currentRole) {
  alert("Voce não tem permissão para acessar essa página.");

  if (currentRole == undefined) {
    window.location.href = "index.html";
  } else if (currentRole == "cliente") {
    window.location.href = "lista_de_reparos_cliente.html";
  } else if (currentRole == "tecnico") {
    window.location.href = "lista_de_reparos_tecnico.html";
  } else if (currentRole == "gestor") {
    window.location.href = "cadastro_e_gerenciamento.html";
  }
}
