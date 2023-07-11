import {seguidores} from '../constantes/seguidores.js'


document.getElementById('form-pesquisa').addEventListener('submit', (event) => {
    event.preventDefault() //cancela o reload ao clicar no enter
    
    const valorDigitadoPesquisa = document.getElementById('input-pesquisa').value

    const seguidoresFiltrados = seguidores.filter((seguidor) => seguidor.nome === valorDigitadoPesquisa)

    document.getElementById('corpo-tabela').innerHTML = ''

    
})

function criarLinhasTabela () {

    const seguidoresFormatados = seguidores.map(seguidor => {
        return {
            ...seguidor,
            apelido: "#" + seguidor.nome.toLowerCase().replace(" ", "_")
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, '')
        }
    })

    seguidoresFormatados.map((seguidor) => { 
    //inicio do loop

    //criar uma linha do html de cada vez
        const tr = document.createElement('tr') //criação tr

        const tdFoto = document.createElement('td') // criação do td da foto

        /* exemplo para uma utilização de codigo mais complexo
        const image = document.createElement('img')
        image.setAttribute('src', seguidor.url)
        td.Foto.appendChild(image)
        */

        tdFoto.innerHTML = `<img src=${seguidor.url}/>`
        tr.appendChild(tdFoto) //vai incluir o td dentro do tr <tr><td> </td></tr>

        const tdNome = document.createElement('td') //crio o elemento
        tdNome.innerHTML = seguidor.nome //coloco o valor dentro dele
        tr.appendChild(tdNome) //jogo o valor dentro do tr

        const tdSeguidores = document.createElement('td') //crio o elemento
        tdSeguidores.innerHTML = seguidor.quantidade_seguidores //coloco o valor dentro dele
        tr.appendChild(tdSeguidores) //jogo o valor dentro do tr

        const tdPublicacoes = document.createElement('td') //crio o elemento
        tdPublicacoes.innerHTML = seguidor.quantidade_publicacoes //coloco o valor dentro dele
        tr.appendChild(tdPublicacoes) //jogo o valor dentro do tr

        document.getElementById('corpo-tabela').appendChild(tr)
    })
}

function gerarLinhasDaTabela() {
    
}

window.onload = criarLinhasTabela