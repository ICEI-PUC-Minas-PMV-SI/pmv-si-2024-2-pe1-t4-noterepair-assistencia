const formCadastro = document.querySelector("#form-cadastro");
const formLogin = document.querySelector("#form-login");

formCadastro.addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = new FormData(e.target);

  if (!validarNome(data.get("nome"))) {
    alert("O nome deve ter pelo menos 3 caracteres");
    return;
  }

  if (!validarEmail(data.get("email"))) {
    alert("O email deve ser válido");
    return;
  }

  if (!validarSenha(data.get("senha"), data.get("confirmarSenha"))) {
    alert("As senhas devem ser iguais e ter pelo menos 8 caracteres");
    return;
  }

  jsonData = {
    nome: data.get("nome"),
    email: data.get("email"),
    password: data.get("senha"),
    tipo: "cliente",
  };

  fetch("http://localhost:3000/register", {
    method: "POST",
    body: JSON.stringify(jsonData),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(async (response) => {
      if (!response.ok) {
        alert("Erro ao cadastrar usuário. O email já está em uso!");
        return;
      }

      formCadastro.reset();
      alert("Cadastro realizado com sucesso");
    })
    .catch((error) => {
      console.log(error);
    });
});

formLogin.addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = new FormData(e.target);

  if (!validarEmail(data.get("email"))) {
    alert("O email deve ser válido");
    return;
  }

  const jsonData = {
    email: data.get("email"),
    password: data.get("senha"),
  };

  fetch("http://localhost:3000/login", {
    method: "POST",
    body: JSON.stringify(jsonData),
    headers: {
      "Content-Type": "application/json",
    },
  }).then(async (response) => {
    if (response.ok) {
      const data = await response.json();

      localStorage.setItem("token", data.accessToken);
      localStorage.setItem("user", JSON.stringify(data.user));

      if (data.user.tipo == "cliente") {
        window.location.href = "lista_de_reparos_cliente.html";
      } else if (data.user.tipo == "tecnico") {
        window.location.href = "lista_de_reparos_tecnico.html";
      } else if (data.user.tipo == "gestor") {
        window.location.href = "cadastro_e_gerenciamento.html";
      } else {
        alert("Erro ao logar. Tente novamente");
      }
    }
    alert(await response.text());
  });
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

const validarSenha = (senha, confirmarSenha) => {
  return (
    senha.length >= 8 && confirmarSenha.length >= 8 && senha === confirmarSenha
  );
};
