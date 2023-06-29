console.log("Aula 3 - 28/06");

// Estruturas CONDICIONAIS

// Valores equivalentes a FALSO
// false, 0, "", null, undefined, NaN

// Valores equivalentes a TRUE
// true, numeros (posiotivos ou negativos), "abc", [], {}

// Exemplo if simples
const idadeA = 20;

if (idadeA >= 18) {
  //console.log("É maior de idade");
}

// Exemplo if com else
const idadeB = 17;

if (idadeB >= 18) {
  //console.log("É maior de idade");
} else {
  //console.log("É menor de idade");
}

// Exemplo else if
const idadeC = 20;

if (idadeC === 18) {
  //console.log("Acabou de ser maior idade");
} else if (idadeC > 18) {
  //console.log("É maior de idade");
} else {
  //console.log("É menor de idade");
}

// Exemplo vários casos mesma variável
const numeroA = 1;

if (numeroA === 0) {
  //console.log("zero");
} else if (numeroA === 1) {
  //console.log("um");
} else if (numeroA === 2) {
  //console.log("dois");
} else {
  //console.log("outro");
}

// equivalente em switch
const numeroB = 1;

switch (numeroB) {
  case 0:
    console.log("zero");
    break;

  case 1:
    console.log("um");
    break;

  case 2:
    console.log("dois");
    break;

  default:
    console.log("outro");
}

// Estruturas de repetição
// exemplo for
// ([codigo inicial]; [condição]; [incremento])
for (let i = 0 ; i < 10; i++ ) {
    console.log(i);
}

// exemplo for em array
const listaA = ["banana", "mamão", "abacate"] 
    for (let i = 0; i < listaA.length; i++) {
        console.log(`${i}: ${listaA[i]}`);
    }

// exemplo while
let entradaA = "";

while (entradaA !== "fim") {
    entradaA = prompt("Digite um comando:");
    console.log(entradaA);
}



// exemplo while
let entradaB = "";

do {
entradaB = prompt("Digite um comando:");
console.log(entradaB);
} while (entradaB !== "fim");

// exemplo forEach
const listaB = ["banana", "mamao", "abacate"];

listaB.push("manga");

function nomeDaFuncao (item, indice, lista) {
    console.log (item, indice, lista);
}

//forEach com arrow fuction 
listaB.forEach((item,indice,lista) => {
    console.log(item, indice,lista);

});