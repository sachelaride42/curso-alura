function mostrarSaudacao() {
    console.log('Olá, mundo!');
}

function mostrarCumprimento(nome) {
    console.log(`Olá, ${nome}!`);
}

function dobrarNumero(numero) {
    return 2 * numero;
}

function obterMedia(numero1, numero2, numero3) {
    let media = (parseInt(numero1) + parseInt(numero2) + parseInt(numero3)) / 3;
    return media;
}

function obterMaiorNumero(numero1, numero2) {
    let maiorNumero;
    if (numero1 > numero2) {
        maiorNumero = numero1;
    } else {
        maiorNumero = numero2;
    }
    return maiorNumero;
}

function quadrado(numero) {
    return numero * numero;
}

let numero1 = prompt('numero1');
let numero2 = prompt('numero2');
let numero3 = prompt('numero3');
resultado = obterMedia(numero1, numero2, numero3);
alert(resultado);