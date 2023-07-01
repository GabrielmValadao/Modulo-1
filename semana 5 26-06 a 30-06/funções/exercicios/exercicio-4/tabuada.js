console.log("m1-s05-e4");


function tabuada(numero) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} * ${i} = ${numero * i}`);
        //mostra a conta completa no console 
    }
};

const numero = prompt("Informe um número:");
tabuada(numero);