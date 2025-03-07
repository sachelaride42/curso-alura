let qtdPista = 100;
let qtdSuperior = 200;
let qtdInferior = 400;
let resultado;
let sessao;

let campoQtdPista = document.getElementById('qtd-pista');
let campoQtdSuperior = document.getElementById('qtd-superior');
let campoQtdInferior = document.getElementById('qtd-inferior');

campoQtdPista.innerHTML = qtdPista;
campoQtdSuperior.innerHTML = qtdSuperior;
campoQtdInferior.innerHTML = qtdInferior;

function comprar() {
    let tipoIngresso = document.getElementById('tipo-ingresso').value;
    let quantidade = parseInt(document.getElementById('qtd').value);

    if (isNaN(quantidade) || quantidade <= 0) {
        alert('Quantidade digitada inválida');
        return;
    }

    switch (tipoIngresso) {
        case 'pista':
            resultado = qtdPista - parseInt(quantidade);
            qtdPista = resultado >= 0 ? resultado : qtdPista;
            sessao = 'pista';
            break;
        case 'superior':
            resultado = qtdSuperior - parseInt(quantidade);
            qtdSuperior = resultado >= 0 ? resultado : qtdSuperior;
            sessao = 'superior';
            break;
        case 'inferior':
            resultado = qtdInferior - parseInt(quantidade);
            qtdInferior = resultado >= 0 ? resultado : qtdInferior;
            sessao = 'inferior';
            break;
    }

    if (resultado >= 0) {
        alert('Compra realizada com sucesso!');
        campoQtdPista.innerHTML = qtdPista;
        campoQtdSuperior.innerHTML = qtdSuperior;
        campoQtdInferior.innerHTML = qtdInferior;
    } else {
        alert(`Quantidade indisponível ${sessao}`);
    }
}