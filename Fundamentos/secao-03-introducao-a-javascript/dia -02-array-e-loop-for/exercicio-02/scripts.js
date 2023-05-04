/*1- Percorra o array imprimindo todos os valores contidos nele com a função console.log().*/
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 0; index < numbers.length; index += 1) {
  console.log(numbers[index]);
}

console.log("---------------------");

/*2- Some todos os valores contidos no array e imprima o resultado.*/

let sum = 0;

for (let index = 0; index < numbers.length; index += 1) {
  sum += numbers[index];
}

console.log(sum);

console.log("---------------------");

/*3- Calcule e imprima a média aritmética dos valores contidos no array.*/

let arithmetic = sum / numbers.length;

console.log(arithmetic);

console.log("---------------------");

/*4- Com base no código que acabou de gerar, referente ao calculo da média aritmética, faça com que: caso o valor final seja maior que 20, imprima a mensagem “O valor da média aritmética é maior que 20”; e, caso não seja maior que 20, imprima a mensagem “O valor da média aritmética é menor ou igual a 20”.*/

if (sum > 10) {
  console.log("O valor da média aritmética é maior que 20");
} else {
  console.log("O valor da média aritmética é menos ou igual a 20");
}

console.log("---------------------");

/*6- Utilizando for, descubra o maior valor contido no array e imprima-o.*/

let highestValue = 0;

for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] > highestValue) {
    highestValue = numbers[index];
  }
}
console.log(highestValue);

console.log("---------------------");

/*7- Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “Nenhum valor ímpar encontrado”.*/
let result = 0;

for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] % 2 !== 0) {
    result += 1;
  }
}

if (result === 0) {
  console.log("Nenhum valor impar encontrado.");
} else {
  console.log(result);
}

console.log("---------------------");

/*9- Utilizando for, crie um array que vá de 1 a 25 e imprima o resultado.*/

let num = [];

for (let index = 1; index <= 25; index += 1) {
  num.push(index);
}
console.log(num);

console.log("---------------------");

/*10- Utilizando o array que acabou de criar, imprima o resultado da divisão de cada um dos elementos por 2.*/

for (let index = 1; index <= 25; index += 1) {
  console.log(index / 2);
}

console.log('---------------------');

/*crie um algoritmo que imprima na tela o fatorial de 10.*/

let factorial = 10;

for (let index = 10; index > 0; index -= 1) {
  factorial = factorial * index;
}
console.log(factorial);

console.log('---------------------');

/*Utilize a estrutura de repetição for para desenvolver um algoritmo que seja capaz de inverter uma palavra, como a palavra “banana” para “ananab”. Utilize a string abaixo como exemplo. Depois, troque-a por outras para verificar se seu algoritmo está funcionando corretamente.*/

// let reverse = 'trybe';

// for (let index = 1; index = reverse.length; index -= 1) {
//   reverse.push(index);
// }
// console.log(reverse);