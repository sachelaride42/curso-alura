// Exercícios sobre loops

// Exercicio loops 3

let numero = prompt('Informe um número:');
while (numero >= 0) {
    console.log(numero);
    numero = numero - 1;
}

// Exercicio loops 4
let numero = prompt ('Informe um numero:');
contador = 0;
while (contador <= numero){
    console.log(contador);
    contador++;
}

//###########################
// Exercícios de boas práticas

//Exercício 1
console.log('Boas vindas');

// 2
let nome = 'Mateus';
console.log(`Olá, ${nome}!`);

// 3
let nome = 'Mateus';
alert(`Olá, ${nome}`);

// 4
let linguagemPreferida = prompt('Qual linguagem de programação você mais gosta');
console.log('Linguagem preferida: ' + linguagemPreferida);

// 5
let valor1 = 10;
let valor2 = 14;
let resultado = valor1 + valor2;

console.log(`A soma de ${valor1} e ${valor2} é igual a ${resultado}`);

// 6
let valor1 = 20;
let valor2 = 14;
let resultado = valor1 - valor2;

console.log(`A diferença de ${valor1} e ${valor2} é igual a ${resultado}`);

// 7
let idade = prompt('Insira a sua idade');
if (idade >= 18) {
    console.log('Você é maior de idade');
}else {
    console.log('Você é menor de idade');
}

// 8
let numero = prompt('Digite um número');
if (numero > 0) {
    console.log(numero + ' é positivo');
} else {
    if (numero < 0) {
        console.log(numero + ' é negativo');
    }else {
        console.log('Você digitou o número zero');
    }

}

// 9
let numero = 1;
while (numero <= 10) {
    console.log(numero);
    numero++;
}

// 13
let numero = parseInt(Math.random() * 1000 + 1);
console.log(numero);
