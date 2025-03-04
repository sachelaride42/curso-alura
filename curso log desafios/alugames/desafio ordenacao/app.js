listaNumeros = [];

alert('Digite 3 números para serem ordenados');
listaNumeros.push(prompt('Digite o primeiro número'));
listaNumeros.push(prompt('Digite o segundo número'));
listaNumeros.push(prompt('Digite o terceiro número'));
ordenar(listaNumeros);
alert(listaNumeros);

function ordenar(lista) {
    let precisaTrocar = false;
    let auxiliar;
    let indiceMenor;

    for(let i = 0; i < lista.length; i++) {
        let menorNumero = lista[i];
        for(let j = i + 1; j < lista.length; j++) {
            if (menorNumero > lista[j]) {
                menorNumero = lista[j];
                indiceMenor = j;
                precisaTrocar = true;
            }
        }
        if (precisaTrocar) {
            auxiliar = lista[i];
            lista[i] = menorNumero;
            lista[indiceMenor] = auxiliar;
            precisaTrocar = false;
        }
    }
}
