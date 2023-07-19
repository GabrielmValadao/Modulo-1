document.getElementById('cepForm').addEventListener('submit', exibirDados)

function exibirDados(event) {
    event.preventDefault()

    const cep = document.getElementById('cep').value;

    if (cep.length > 8 )    
    fetch(`https://viacep.com.br/ws/${cep}/json/`) 
    // captura a resposta 
    .then ((response) => response.json())
    .then ((data) => {
        const resultDiv = document.getElementById('result');
        
            resultDiv.innerHTML =
            <p>Endereco: ${data.logradouro}</p>
            <p>Bairro: ${data.bairro}</p>
            <p>Cidade: ${data.localidade}</p>
            <p>UF: ${data.uf}</p>
            <p>DDD: ${data.ddd}</p>
    })
    // pega um erro que acaba acontecendo dentro de then
    .catch(() => {
        alert("Erro ao fazer a solicitação");
    })
}

