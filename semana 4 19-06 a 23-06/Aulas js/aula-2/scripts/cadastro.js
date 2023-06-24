// validação dos dados do telefone como padrão no brasil, atraves de rejects, solicitar rejects sobre o que quero validar atraves do chatgpt 
var regexTelefone = /^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/;
var regexEMail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

function fazerCadastro() {
    var nome = document.getElementById("nome-completo").value
    var senha = document.getElementById("campo-senha").value
    var telefone = document.getElementById("telefone").value
    var email = document.getElementById("campo-email").value

document.getElementById("nome-completo").classList.remove("input-error")
document.getElementById("error-nome").hidden = true

document.getElementById("campo-senha").classList.remove("input-error")
document.getElementById("error-senha").hidden = true

document.getElementById("telefone").classList.remove("input-error")
document.getElementById("error-telefone").hidden = true

document.getElementById("campo-email").classList.remove("input-error")
document.getElementById("error-email").hidden = true



    if (nome === "") {
        document.getElementById("nome-completo").classList.add("input-error")
        document.getElementById("nome-completo").focus()
        document.getElementById("error-nome").hidden = false
        /* Length vai me informar o numero de caracteres */
    } if (senha.length < 8) { 
        document.getElementById("campo-senha").classList.add("input-error")
        document.getElementById("error-senha").hidden = false
    } if (regexTelefone.test(telefone) === false) {
        document.getElementById("telefone").classList.add("input-error")
        document.getElementById("error-telefone").hidden = false
        //aviso ao usuario embaixo do input
        document.getElementById("error-telefone").innerText = "Digite um telefone válido"
    } if (regexEMail.test(campo-email) === false){
        document.getElementById("campo-email").classList.add("input-error")
        document.getElementById("error-email").hidden = false
        document.getElementById("error-email").innerText = "Digite um e-mail válido"
    }
        
}