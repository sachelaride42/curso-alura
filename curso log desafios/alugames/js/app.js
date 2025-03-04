let numeroJogosAlugados = 1;
console.log(`Número de jogos alugados: ${numeroJogosAlugados}`);

function alterarStatus(numeroJogo) {
    let imagem = document.getElementById(`game-${numeroJogo}`).querySelector('div');
    let botao = document.getElementById(`game-${numeroJogo}`).querySelector('a');

    if(imagem.classList.contains('dashboard__item__img--rented')) {
        let confirmacao = prompt("Digite 'confirmar' para confirmar a devolução");
        if(confirmacao != 'confirmar') {
            return;
        }
        imagem.classList.remove('dashboard__item__img--rented');
        botao.classList.remove('dashboard__item__button--return');
        botao.innerText = 'Alugar';

        numeroJogosAlugados--;
        console.log(`Número de jogos alugados: ${numeroJogosAlugados}`);
    } else {
        imagem.classList.add('dashboard__item__img--rented');
        botao.classList.add('dashboard__item__button--return');
        botao.innerText = 'Devolver';
        
        numeroJogosAlugados++;
        console.log(`Número de jogos alugados: ${numeroJogosAlugados}`);
    }
}