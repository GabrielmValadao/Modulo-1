//validação do que o usuario vai digitar
//criação de um array de objetos
const usuarios = [
    {email: 'henrique@gmail.com', password: 'devinhouse123'},
    {email: 'douglas@gmail.com', password: 'devinhouse321'},
    {email: 'cavalcante@gmail.com', password: 'senha'}
]

function clicarNoBotao () {
    const email = document.getElementById("campo-email").value 
    const senha = document.getElementById("campo-senha").value

    document.getElementById("campo-email").classList.remove("input-error")
    //remove a classe de erro do input, ao recarregar
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
        document.getElementById("login-button").innerText = "Logando..."

        // const para validação de find 
        const usuarioEncontrado = usarios.find(usuario => usuario.email === email && usuario.password === senha)

        if (usuarioEncontrado) {
            /*redireciona para outra pagina de minha aplicação*/
            window.location.href = "./home.html";
        } else {
            alert("Usuário não encontrado!")
        }
        
    }

    




}


