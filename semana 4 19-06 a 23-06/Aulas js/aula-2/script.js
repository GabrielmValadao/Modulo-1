function clicarNoBotao () {
    var email = document.getElementById("campo-email").value 
    var senha = document.getElementById("campo-senha").value

    console.log(email)
    console.log(senha)

    if (email === "") {
        alert("E-mail é obrigatório")
    }

    if (senha === "") {
        alert("Senha é obrigatória")
    }
}
