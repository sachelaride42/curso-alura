let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';

function exibeConsole() {
    console.log('O botão foi clicado.');
}

function exibeAlerta() {
    alert('Eu amo JS');
}

function exibePrompt() {
    let cidade = prompt('Digite o nome de uma cidade');
    alert(`Estive em ${cidade} e lembrei de você`);
}

function realizaSoma() {
    let numero1 = prompt('Digite um número');
    let numero2 = prompt('Digite outro número');
    numero1 = parseInt(numero1);
    numero2 = parseInt(numero2);
    let resultado = numero1 + numero2;
    alert(`O resultado da soma de ${numero1} com ${numero2} é ${resultado}`);
}