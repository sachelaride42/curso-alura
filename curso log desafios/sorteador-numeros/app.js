let jaSorteado = false;

function sortear() {
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);
    let diferenca = ate - de;

    if(de > ate) {
        alert('Por favor, verifique: o campo "Do número" precisa ser menor ou igual ao "Até o número"');
        return;
    }

    if ((diferenca + 1) < quantidade) {
        alert('Verifique o campo "Quantidade de números": a quantidade de números sorteados deve caber no intervalo fornecido');
        return;
    }

    if (jaSorteado){
        return;
    }

    let sorteados = [];
    let numeroSorteado;
    for(let i = 0; i < quantidade; i++) {
        do{
        numeroSorteado = sortearNumeroAleatorio(de, ate);
        }while(sorteados.includes(numeroSorteado));
        sorteados.push(numeroSorteado);
    }

    
    let campoResultado = document.getElementById('resultado');
    campoResultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`;
    
    jaSorteado = true;
    alterarStatusBotao();
    let botao = document.getElementById('btn-reiniciar');
}

function sortearNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function reiniciar() {
    if (!jaSorteado){
        return;
    }
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    let campoResultado = document.getElementById('resultado');
    campoResultado.innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';

    jaSorteado = false;
    alterarStatusBotao();
    let botao = document.getElementById('btn-reiniciar');
}

function alterarStatusBotao() {
    let botao = document.getElementById('btn-reiniciar');
    if(botao.classList.contains('container__botao-desabilitado') && jaSorteado) {
        botao.classList.replace('container__botao-desabilitado', 'container__botao');
        botao.removeAttribute('disabled');
    } else if (!jaSorteado) {
        botao.classList.replace('container__botao', 'container__botao-desabilitado');
        botao.setAttribute('disabled');
    }
}