let listaPessoas = [];
let listaSorteio = [];

let campoListaSorteio = document.getElementById('lista-sorteio');

function adicionar() {
    let novoAmigo = document.getElementById('nome-amigo');
    listaPessoas.push(novoAmigo.value);
    let campoListaAmigos = document.getElementById('lista-amigos');
    if(campoListaAmigos.textContent == '') {
        campoListaAmigos.textContent = novoAmigo.value;
    } else {
        campoListaAmigos.textContent = campoListaAmigos.textContent + ', ' + novoAmigo.value;
    }
    novoAmigo.value = '';
}

function sortear() {
    listaSorteio = listaPessoas.slice();
    do{
        embaralha(listaSorteio);
    }while (!verificarSorteio(listaPessoas, listaSorteio));
    
    for(let i = 0; i < listaPessoas.length; i++) {
        if (i == 0) {
            campoListaSorteio.innerHTML = `${listaPessoas[i]} -> ${listaSorteio[i]}`;
        } else {
            campoListaSorteio.innerHTML += `<br> ${listaPessoas[i]} -> ${listaSorteio[i]}`;
        }
    }
}

function embaralha(lista) {
    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar() {
    document.getElementById('nome-amigo').value = '';
    document.getElementById('lista-amigos').textContent = '';
    campoListaSorteio.innerHTML = '';
    listaPessoas = [];
    listaSorteio = [];
}

function verificarSorteio(lista1, lista2) {
    if(lista1.length == 1){
        return true;
    }
    for(let i = 0; i < lista1.length; i++) {
        if (lista1[i] == lista2[i]){
            return false;
        }
    }
    return true;
}