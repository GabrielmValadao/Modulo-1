console.log("m1_s07_a2");

// const romeu = {
    //nome: "Romeu",
    //idade: "39",
    //mostraIdade() {
        //console.log(romeu.idade);
    //},
// };

//const gabriel = {
    //nome: "Gabriel",
    //idade:"25",

    //mostraIdade() {
       // console.log(gabriel.idade);
   // },
//};

//romeu.mostraIdade();
//gabriel.mostraIdade();

//equivalente a:
// maneira de criar objetos com o mesmo formato
function pessoa(nome, idade) {
    return {
        nome: nome,
        idade: idade,
        mostraIdade() {
            console.log(this.idade);
        },
    };
}

const romeu = pessoa("Romeu", 30);
const gabriel = pessoa("Gabriel", 25);

romeu.mostraIdade();
gabriel.mostraIdade();

//equivalente ao codigo a cima em Classe:
// classe sempre tem letra maiuscula o começo
class Pessoa {
    constructor(nome, idade) {
        //sempre dentro da classe, quando fizer referencia ao this, vou me referir a instancia 
        this.nome = nome;
        this.idade= idade;
        console.log("Executou construtor!", {nome, idade});
    }
}

const jose = new Pessoa("Jose", 30);
const maria = new Pessoa("Maria", 25);

console.log(jose); 
console.log(maria);