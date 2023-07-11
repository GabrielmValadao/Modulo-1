
//recebe um elemento
const listaA = document.getElementById("lista");

//recebe um HTMLCollection (similar a Array)
const itens = document.getElementsByTagName("li");

//converte um HTMLCollenction em Array
const itensArray = [...itens];

//itensArray.forEach((item) => {
    //console.log(item);
//});

console.log(listaA, itens);

// pegando somente um item do array
console.log(itens[0]);

