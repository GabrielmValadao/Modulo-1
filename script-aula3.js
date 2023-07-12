console.log("m1_s07_a3");

const elemLista = document.getElementById("lista-itens");

const dadosLista = [
    "Item 1",
    "Item 2",
    "Item 3",
];

function criaItem (item) {
    const li = document.createElement("li");
    li.innerHTML = item;
    return li;
}

function atualizaTela() {
    elemLista.innerHTML = "";

    dadosLista.forEach((item) => {
        const li = document.createElement("li");
        li.innerHTML = item;

        elemLista.appendChild(li);
    })
}


atualizaTela();