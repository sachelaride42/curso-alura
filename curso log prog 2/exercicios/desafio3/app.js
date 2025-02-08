function calcularIMC(altura, peso) {
    let IMC = peso / (altura * altura);
    return IMC;
}

function calcularFatorial(numero) {
    let resultado = 1;
    let contador = numero;
    while (contador >= 1) {
        resultado = resultado * contador;
        contador--;
    }
    return resultado;
}

function converterParaReais(valorEmDolares) {
    return parseFloat(valorEmDolares) * 4.8;
}

function mostrarAreaPerimetroRetangulo(altura, largura) {
    let area = altura * largura;
    let perimetro = 2 * (altura + largura);
    alert(`A area do retangulo é ${area} e o perímetro é ${perimetro}`);
}

const pi = 3.14;
function mostrarAreaPerimetroCirculo(raio) {
    let area = pi * raio * raio;
    let perimetro = 2 * pi * raio;
    alert(`A área do círculo é ${area} e o perímetro é ${perimetro.toFixed(2)}`);
}

function mostrarTabuada(numero) {
    contador = 1;
    while(contador <= 10) {
        resultado = contador * numero;
        console.log(`${contador} * ${numero} = ${resultado}`);
        contador++;
    }
}

mostrarAreaPerimetroCirculo(10);