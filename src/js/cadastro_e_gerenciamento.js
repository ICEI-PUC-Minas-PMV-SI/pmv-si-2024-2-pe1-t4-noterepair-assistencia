// Load Table
const tabelaColaboradores = document.querySelector(
  "#tabela-colaboradores tbody",
);

const loadTable = async () => {
  const response = await fetch(
    "http://localhost:3000/users?tipo=tecnico&tipo=gestor",
  );
  const data = await response.json();

  tabelaColaboradores.innerHTML = "";

  data.forEach((colaborador) => {
    let tipo = {
      cliente: "Cliente",
      tecnico: "Técnico",
      gestor: "Gestor",
    }[colaborador.tipo];

    tabelaColaboradores.innerHTML += `
      <tr>
      <td class="nome">${colaborador.nome}</td>
      <td class="email">${colaborador.email}</td>
      <td class="permissao">${tipo}</td>
      <td>
      <img onclick="editUser(this, ${colaborador.id})"
    src="img/edit-icon.png"
      />
      <img onclick="deleteUser(${colaborador.id})"
    src="img/trash-icon.png"
      />
      </td>
      </tr>
      `;
  });
};

loadTable();

// Cadastro Colaborador
const formCadastroColaborador = document.querySelector(
  "#form-cadastro-colaborador",
);

formCadastroColaborador.addEventListener("submit", (e) => {
  e.preventDefault();

  const data = new FormData(formCadastroColaborador);

  if (!validarNome(data.get("nome"))) {
    alert("O nome deve ter pelo menos 3 caracteres");
    return;
  }

  if (!validarEmail(data.get("email"))) {
    alert("O email deve ser válido");
    return;
  }

  jsonData = {
    nome: data.get("nome"),
    email: data.get("email"),
    password: "NoteRepair123",
    tipo: data.get("permissao"),
  };

  fetch("http://localhost:3000/register", {
    method: "POST",
    body: JSON.stringify(jsonData),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(async (response) => {
      if (response.status != 201) {
        alert("Erro ao cadastrar usuário. O email já está em uso!");
        return;
      }

      alert("Cadastro realizado com sucesso");
    })
    .catch((error) => {
      alert(error);
    });

  formCadastroColaborador.reset();
  loadTable();
});

const validarNome = (name) => {
  return name.trim().length >= 3;
};

const validarEmail = (email) => {
  return email
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    );
};

// Delete User
const deleteUser = (id) => {
  fetch(`http://localhost:3000/users/${id}`, {
    method: "DELETE",
  })
    .then(() => {
      loadTable();
    })
    .catch((error) => {
      alert(error);
    });
};

// Edit User
const editUser = (e, id) => {
  const nome = e.parentNode.parentNode.querySelector(".nome").textContent;
  const email = e.parentNode.parentNode.querySelector(".email").textContent;
  const permissao =
    e.parentNode.parentNode.querySelector(".permissao").textContent;

  e.parentNode.parentNode.innerHTML = `
    <td class="nome"><input type="text" name="nome" value="${nome}" form="form-editar-colaborador" /></td>
    <td class="email"><input type="text" name="email" value="${email}" form="form-editar-colaborador" /></td>
    <td class="permissao">
    <select name="permissao" form="form-editar-colaborador">
    <option value="gestor" ${permissao == "Gestor" ? "selected" : ""}>Gestor</option>
    <option value="tecnico" ${permissao == "Técnico" ? "selected" : ""}>Técnico</option>
    </select>
    <td>
    <img onclick="saveUser(${id})" form="form-editar-colaborador" type="submit"
  style="width: 28px;height: 28px;vertical-align: middle;"
  src="img/save-icon.png"
    />
    <img onclick="loadTable()" type="submit"
  style="width: 28px;height: 28px;vertical-align: middle;"
  src="img/close-black-icon.png"
    />
    </td>
    `;
};

const saveUser = (id) => {
  const data = new FormData(document.querySelector("#form-editar-colaborador"));

  if (!validarNome(data.get("nome"))) {
    alert("O nome deve ter pelo menos 3 caracteres");
    return;
  }

  if (!validarEmail(data.get("email"))) {
    alert("O email deve ser válido");
    return;
  }

  jsonData = {
    nome: data.get("nome"),
    email: data.get("email"),
    tipo: data.get("permissao"),
  };

  fetch(`http://localhost:3000/users/${id}`, {
    method: "PATCH",
    body: JSON.stringify(jsonData),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(() => {
      loadTable();
    })
    .catch((error) => {
      alert(error);
    });
};
