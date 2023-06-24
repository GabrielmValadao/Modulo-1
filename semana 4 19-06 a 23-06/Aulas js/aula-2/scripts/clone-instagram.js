function clicarNoBotao () {
    var email = document.getElementById("campo-email").value 
    var senha = document.getElementById("campo-senha").value

    document.getElementById("campo-email").classList.remove("input-error")
    document.getElementById("campo-senha").classList.remove("input-error")

    console.log(email)
    console.log(senha)

    if (email === "") {
        /* mudando estilo do input após não colocar um informação */
        /*adiciona um estilo inline
        document.getElementById('campo-email').style = "border-color: red"
        alert("E-mail é obrigatório") */

        /*adiciona um estilo direto no ob 
        document.getElementById("campo-email").style.backgroundColor = 'red'
        */

        /* estlio recomendado de se usar, linkando css com js */
        document.getElementById("campo-email").classList.add("input-error")
        document.getElementById("campo-email").focus()
    }

    else if (senha === "") {
        document.getElementById("campo-senha").classList.add("input-error")
        document.getElementById("campo-senha").focus() 
    }

    else {
        /*codigo de feedback visual ao clicar no button */
        document.getElementById("login-button").disabled = true
        document.getElementById("login-button").style.opacity = 0.5
        /*valor ideial para opacidade é o 0.5 */
        document.getElementById("login-button").innerText = "Entrando..."

        /*redireciona para outra pagina de minha aplicação*/

        window.location.href = "home.html";
    }

    




}


