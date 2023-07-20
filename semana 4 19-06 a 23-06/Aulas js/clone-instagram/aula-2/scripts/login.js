import {usuarios} from '../constantes/usuarios.js'

document.getElementById("form-login").addEventListener("submit", realizarLogin);

const campoEmail = document.getElementById('campo-email');
const campoSenha = document.getElementById('campo-senha');
const loginButton = document.getElementById("login-button");

function realizarLogin (event) {
     event.preventDefault() //impede a tela de recarregar ao clicar no botão

    const email = campoEmail.value 
    const senha = campoSenha.value

    campoEmail.classList.remove("input-error")
    //remove a classe de erro do input, ao recarregar
    campoSenha.classList.remove("input-error")

    console.log(email)
    console.log(senha)

    if (email === "") {
        /* mudando estilo do input após não colocar uma informação */
        /*adiciona um estilo inline
        document.getElementById('campo-email').style = "border-color: red"
        alert("E-mail é obrigatório") */

        /*adiciona um estilo direto no ob 
        document.getElementById("campo-email").style.backgroundColor = 'red'
        */

        /* estlio recomendado de se usar, linkando css com js */
        campoEmail.classList.add("input-error")
        campoEmail.focus()
    }

    else if (senha === "") {
        campoSenha.classList.add("input-error")
        campoSenha.focus() 
    }

    else {
        /*codigo de feedback visual ao clicar no button */
        loginButton.disabled = true
        loginButton.style.opacity = 0.5
        /*valor ideial para opacidade é o 0.5 */
        loginButton.innerText = "Logando..."

        // const para validação de find 
        const usuarioEncontrado = usuarios.find(usuario => usuario.email === email && usuario.password === senha)

        if (usuarioEncontrado) {
            /*redireciona para outra pagina de minha aplicação*/
            window.location.href = "./home.html";
        } else {

            //comando para informar a o botão de não mudar seu nome para ''logando'' ao clicar e estiver errada a validação
            loginButton.disabled = false
            loginButton.style.opacity = 1
            loginButton.innerText = "Entrar"

            alert("Usuário não encontrado!")
        }
        
    }
}