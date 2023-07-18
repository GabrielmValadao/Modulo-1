document.getElementById('cepForm').addEventListener('submit', exibirDados)

function exibirDados(event) {
    event.preventDefault()

    const cep = document.getElementById('cep').value;

    fetch('https://viacep.com.br/ws/96810174/json/') 
}