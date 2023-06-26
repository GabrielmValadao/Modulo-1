const form = document.getElementById('form');

form.addEventListener('submit', function(event) {
    //impede o carregamento da pagina ao colocar os itens
    event.preventDefault();

    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;

    const imc = (weight / (height * height)).toFixed(2);
    
    const value = document.getElementById('value');
    // cria descrição dos valores
    let description = '';
    // remover o hidden e aparecer as infos ocultas 
    document.getElementById('infos').classList.remove('hidden');

    if (imc <= 18.5) {
        description = 'Você está abaixo do peso!'
        value.classList.add('abaixo');
    } else if (imc >= 18.6 && imc <= 24.9){
        description = 'Você está com o peso ideal!'
        value.classList.add('normal');
    } else if (imc >= 25.0 && imc <= 29.9) {
        description = 'Você está levemente acima do peso!'
        value.classList.add('levemente');
    } else if (imc >= 30.0 && imc <= 34.9) {
        description = 'Você está com obesidade grau I'
        value.classList.add('attencion');
    } else if (imc >= 35.0 && imc <= 39.9) {
        description = 'Você está com obesidade grau II'
        value.classList.add('attencion');
    } else {
        description = 'Você está com obesidade grau III'
        value.classList.add('attencion');
    }
    
    
    //replace altera o ponto pela virgula
    value.textContent = imc.replace('.' , ','); 
    document.getElementById('description').textContent = description; 

      
}); 

//limpar os dados 
const refresh = document.querySelector('#limpar') 

refresh.addEventListener('click', () => {
    location.reload()
})

