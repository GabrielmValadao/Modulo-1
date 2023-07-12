export default class Pessoa {
    constructor(nome, idade) {
        this.nome=  nome;
        this.idade= idade;
    }

    mostraIdade() {
        console.log(this.idade);
    }
}

//class sempre precisam começar com letra maiuscula 