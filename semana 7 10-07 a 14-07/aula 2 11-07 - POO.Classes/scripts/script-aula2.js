console.log("m1_s07_a2");

import pessoas from "./pessoas.js"

// maneira de criar objetos com o mesmo formato
function PessoaFunc(nome, idade) {
    return {
        nome: nome,
        idade: idade,
        mostraIdade() {
            console.log(this.idade);
        },
    };
}

const romeu = PessoaFunc("Romeu", 30);
const gabriel = PessoaFunc("Gabriel", 25);

romeu.mostraIdade();
gabriel.mostraIdade();

//VAMOS USAR ESSA PARA OBJETOS A PARTIR DE AGORA, CONSIDERADO BOAS PRATICAS

//equivalente ao codigo a cima em Classe:
// classe sempre tem letra maiuscula o começo

// após importar o arquivo pessoas.js
// criamos a instancia de Pessoa

const jose = PessoaFunc("Jose", 35);
const maria = PessoaFunc("Maria", 29);

console.log(jose); 
console.log(maria);

jose.mostraIdade();
maria.mostraIdade();


//exemplo video aula 
// criação básica de uma class
class Nome{
    constructor(name) {
        this.name = name
    }
}

const pessoa = new Nome('Gabriel');

console.log(pessoa.name);





