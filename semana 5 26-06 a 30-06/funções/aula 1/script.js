console.log("aula 1");

// exemplo de funções
// f(x, y) = x * 2 - y
// f(2, 3) = 2 *2 - 3
// f(2, 3) = 4 - 3
// f(2, 3) = 1

// exemplo função comum
function f(x, y) {
  const resultado = x * 2 - y;
  // return vai informar o resultado
  return resultado;
}

const retorno = f(2, 3);

console.log(retorno);

// exemplo função efemera 
(function () {
    console.log("Função!");
})();
// o "()" puxa essa função automaticamente, consideros usar ela para momentos que fazemos uma unica execução ao carregar a pagina

//exemplo função arrow functions, maneira mais compacta de declarar uma função, utilizada em funções dentro de outras funções

//comparações
//função comum:
function funcaoComum(a) {
    return "Função comum " + a;
}
console.log(funcaComum("Gabriel"));

//função arrow:
const funcaoArrow = (a) => {
    return "Função arrow " + a;
};
console.log(funcaoArrow ("Milena")); 

// exemplo de equivalencias 
// função comum passada por parametro
executaEssa(function (a) {
    return a * 2;
});
// arrow function passada por parametro
executaEssa ((a) => a * 2);

// maneira depreciada de declarar variáveis 
var a = 5; // pode ser reatribuida

// padrao atual de declaração de variáveis
const b = 6; // não pode ser reatribuida
let c = 7; // pode ser reatribuida 

a = 9;
c = 8;

console.log(a, b, c);