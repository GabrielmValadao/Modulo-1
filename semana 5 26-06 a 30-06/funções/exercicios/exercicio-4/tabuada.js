console.log("m1-s05-e4");

const numero = prompt("Informe um número:");

function tabuada(numero) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} * ${i} = ${numero * i}`);
        //mostra a conta completa no console 
    }
};

tabuada(numero);