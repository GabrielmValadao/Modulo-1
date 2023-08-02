const usuario = {
    username: 'douglas#Cavalcante',
    qtd_seguidores: 20,
    qtd_pessoas_seguindo: 20,
    nome: 'Henrique Douglas C. Costa',
    qtd_publicacoes: 1000,
    foto: 'https://avatars.githubusercontent.com/u/38563983?v=4',
}

const nomes = [
    'https://http.cat/images/202.jpg',
    'https://http.cat/images/202.jpg',
    'https://http.cat/images/202.jpg',
    'https://http.cat/images/301.jpg',
    'https://http.cat/images/404.jpg',
    'https://http.cat/images/408.jpg',
    'https://http.cat/images/417.jpg',
    'https://http.cat/images/498.jpg',
    'https://http.cat/images/498.jpg',
    'https://http.cat/images/500.jpg'
]

function exibirImage() {

    const galeria = document.getElementById('galeria')

    nomes.forEach(item => {
       const image = document.createElement('img')
       const div = document.createElement('div')
        div.classList.add('grid-item')

        image.setAttribute('src', item)
        div.appendChild(image)

        galeria.appendChild(div)
    })
}


function mostrarInformacoes() {
    document.getElementById('nome').innerText = usuario.qtd_pessoas_seguindo
    document.getElementById('username').innerText = usuario.username
    document.getElementById('qtd_seguidores').innerText = usuario.qtd_seguidores
    document.getElementById('qtd_publicacoes').innerText = usuario.qtd_publicacoes
    exibirImage()
}


function gerarTextoBemVindo(){
    const nome = localStorage.getItem("nome_usuario")
    
    if(!nome) {
      window.location.href = "./index.html";
    } else {
      document.getElementById('bem_vindo_usuario').innerText = "Bem-vindo " + nome
    }
   
  }
  
  gerarTextoBemVindo()

window.onload = mostrarInformacoes