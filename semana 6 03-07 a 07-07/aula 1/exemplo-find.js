const nomes = [
    {nome: 'jose', cpf: '23456787636'},
    {nome: 'joana', cpf: '23456787633'},
    {nome: 'guilherme', cpf: '23456787632'},
]

//usamos a const para poder utilizar o if
const usuario = nomes.find((item) => item.nome.includes('joana'))
                 // vai retornar o primeiro dado encontrado

