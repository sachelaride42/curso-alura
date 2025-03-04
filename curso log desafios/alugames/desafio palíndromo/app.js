let palavra = prompt('Digite a palavra para verificar se é um palíndromo');
palindromo = verificarPalidromo(palavra);
if (palavra != null) {
    let resposta = palindromo ? 'É um palíndromo': 'Não é um palíndromo';
    alert(resposta);
} else {
    alert('Por favor, preencha o campo');
}

function verificarPalidromo(palavra) {
    palindromo = true;
    j = palavra.length - 1;
    for(let i = 0; i < palavra.length; i++) {
        if(palavra.charAt(i) != palavra.charAt(j)) {
            palindromo = false;
        }
        j--;
    }
    return palindromo;
}