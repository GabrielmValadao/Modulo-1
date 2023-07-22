const regexTelefone = /^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/;
const regexEMail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const campoNomeCompleto = document.getElementById("campo-nome-completo");
const campoSenha = document.getElementById("campo-senha");
const campoTelefone = document.getElementById("campo-telefone");
const campoEmail = document.getElementById("campo-email");

document
  .getElementById("form-cadastro")
  .addEventListener("submit", fazerCadastro);

function fazerCadastro(event) {
  event.preventDefault();

  const nome = campoNomeCompleto.value;
  const senha = campoSenha.value;
  const telefone = campoTelefone.value;
  const email = campoEmail.value;

  campoNomeCompleto.classList.remove("input-error");
  document.getElementById("error-nome").hidden = true;

  campoSenha.classList.remove("input-error");
  document.getElementById("error-senha").hidden = true;

  campoTelefone.classList.remove("input-error");
  document.getElementById("error-telefone").hidden = true;

  campoEmail.classList.remove("input-error");
  document.getElementById("error-email").hidden = true;

  if (nome === "") {
    campoNomeCompleto.classList.add("input-error");
    campoNomeCompleto.focus();
    document.getElementById("error-nome").hidden = false;
    document.getElementById("error-nome").innerText = "O nome é obrigatório";
  } else if (senha.length < 9) {
    campoSenha.classList.add("input-error");
    document.getElementById("error-senha").hidden = false;
    document.getElementById("error-senha").innerText =
      "A senha deve no minimo 8 caracteres";
  } else if (regexTelefone.test(telefone) === false) {
    campoTelefone.classList.add("input-error");
    document.getElementById("error-telefone").hidden = false;
    document.getElementById("error-telefone").innerText =
      "Digite um telefone válido";
  } else if (regexEMail.test(email) === false) {
    campoEmail.classList.add("input-error");
    document.getElementById("error-email").hidden = false;
    document.getElementById("error-email").innerText = "Digite um email válido";
  } else {
    // cadastrar os dados que foram digitados no formulario

    /*      
            GET - lista varias informações 
            POST - cadastra uma novo recurso
            DELETE - deletar um recurso
            PUT - Atualiza todas as informacoes 
            PATCH - Atualiza uma informação 
        */

    document.getElementById("login-button").style.opacity = 0.5;
    document.getElementById("login-button").innerText = "Cadastrando ....";
    document.getElementById("login-button").disabled = true;

    // 1 - informar a url da api
    // 2 - informar o método
    // 3 - informar o corpo da requisição
    // 4 - colocar o JSON.stringify, para converter os itens em strings
    // 5 - colocar o headers
    // 6 - implementar o cenario feliz, sucesso da requisição .then
    // 7 - implementar o cenario infeliz, rejeicão da requisição .catch

    /* 1 */ fetch("http://localhost:3333/usuarios", {
      /* 2 */ method: "POST",
      /* 4 */ body: JSON.stringify({
        /* 3 */ nome: nome,
        senha: senha,
        telefone: telefone,
        email: email,
      }),
      /* 5 */ headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
        
      /* 6 */ .then(() => {
        alert("Cadastrado com sucesso");
        window.location.href = "index.html"; //não é obrigatório 
      })
      /* 7 */ .catch(() => {
        alert("Desculpe. Houve um erro ao cadastrar o usuario");
      });
  }
}
