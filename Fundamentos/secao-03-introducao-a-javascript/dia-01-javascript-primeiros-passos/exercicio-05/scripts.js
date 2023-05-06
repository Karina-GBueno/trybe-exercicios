/*1 - Elabore alguns códigos e imprima o resultado no console usando o console.log, um para cada operação aritmética básica. Seu código deve ter duas variáveis, a e b, definidas no começo com os valores que serão operados. Escreva códigos para:
Adição (a + b)
Subtração (a - b)
Multiplicação (a * b)
Divisão (a / b)
Módulo (a % b)*/

let a = 6;
let b = 33;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

console.log('-----------------------'); 

/*2 - Utilize if/else para escrever um código que retorne o maior de dois números. Defina, no começo do seu código, duas variáveis com os valores que serão comparados.*/

let num1 = 30;
let num2 = 90;

if (num1 > num2) {
  console.log(num1);
} else {
  console.log(num2);
}

console.log('-----------------------'); 

/*3 - Utilize if/else para escrever um código que retorne o maior de três números. Defina, no começo do seu código, três variáveis com os valores que serão comparados.*/

let num3 = 34838;
let num4 = 1394;
let num5 = 120048;

if (num3 > num4 && num3 > num5) {
  console.log(num3);
}else if (num4 > num3 && num4 > num5) {
  console.log(num4);
} else {
  console.log(num5);
}

console.log('-----------------------'); 

/*4 - Utilize if/else para escrever um código que, dado um valor recebido como parâmetro, retorne: “positive”, se esse valor for positivo; “negative”, se esse valor for negativo, e “zero”, caso esse valor não seja nem positivo nem negativo.*/

let valor = 0;

if (valor > 0) {
  console.log('O valor é positivo');
} else if (valor < 0){
  console.log('O valor é negativo');
} else {
  console.log('O valor é 0');
}


console.log('-----------------------');

/*Utilize if/else para escrever um código que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, você deve retornar uma mensagem de erro.*/

let lado1 = 3;
let lado2 = 3;
let lado3 = -1;
let soma = lado1 + lado2 + lado3; 

if (lado1 > 0 && lado2 > 0 && lado3 > 0) {
  if (soma === 180) {
    console.log(true);
  } if (lado1 < 0 || lado2 < 0 || lado3 < 0) {
    console.log(false);  
  } else {
    console.log('Ãngulo inválido!' );
  }
}

console.log('-----------------------');

/*Utilize switch/case para escrever um código que receba o nome de uma peça de xadrez e retorne os movimentos que ela pode fazer.
Como desafio, escreva um código para funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
Como dica, você pode pesquisar uma função que faça uma string ficar com todas as letras minúsculas (lower case).
Se a peça passada for inválida, o código deve retornar uma mensagem de erro.
Exemplo: bishop (bispo) -> diagonals (diagonais)*/

let pecaXadrex = 'cavalo';

switch (pecaXadrex.toLowerCase()) {
  case 'bispo': 
    console.log('Move-se na diagonal');
    break;
  case 'cavalo':
    console.log('Salta sobre outras peças, em L');
    break;
  case 'dama':
    console.log('Pode mover-se em qualquer direção');
    break;
  case 'peao':
    console.log('Move-se sempre uma casa para frente');
    break;
  case 'torre':
    console.log('Move-se em linha reta');
    break;
  case 'rei':
    console.log('Pode mover-se em qualquer direção');
    break;

  default:
    console.log('Peça inválida');
    break;
}

console.log('-------------------');

/*Utilize if/else para escrever um código que converta uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga as seguintes regras:
Porcentagem >= 90 -> A
Porcentagem >= 80 -> B
Porcentagem >= 70 -> C
Porcentagem >= 60 -> D
Porcentagem >= 50 -> E
Porcentagem < 50 -> F
O código deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100. */

let nota = -40;

if (nota >= 90 && nota == 100) {
  console.log('Sua nota é A');
} else if (nota >= 80 && nota < 90) {
  console.log('Sua nota é B');
} else if (nota >= 70 && nota < 80) {
  console.log('Sua nota é C');
} else if (nota >= 60 && nota < 70) {
  console.log('Sua nota é D');
} else if (nota >= 50 && nota < 60) {
  console.log('Sua nota é E');
} else if (nota < 50 && nota == 0) {
  console.log('Sua nota é F');
} else {
 console.log('Valor inválido');
} 

console.log('-----------------------');

/*Utilize if/else para escrever um código que defina três números em variáveis e retorne true se pelo menos uma das três for par. Caso contrário, o código deve retornar false.*/

let n1 = 1;
let n2 = 5;
let n3 = 7;

if (n1 % 2 == 0 || n2 % 2 == 0 || n3 % 2 == 0) {
  console.log(true);
} else {
  console.log(false);
}

console.log('--------------------');


/*Utilize if/else para escrever um código que se inicie com dois valores em duas variáveis diferentes: o custo de um produto e seu valor de venda. A partir dos valores, o código deve calcular o lucro (ou seja, o valor de venda menos o custo do produto) da empresa ao vender mil produtos.
Atente para o fato de que um imposto de 20% incide sobre o custo do produto.
Seu código deve emitir uma mensagem de erro e encerrar caso algum dos valores de entrada seja menor que zero.
O lucro de um produto é o resultado da subtração do valor de venda pelo custo e deve considerar que o imposto de 20% faz parte do valor de custo.
valorCustoTotal = valorCusto + impostoSobreOCusto;
lucro = valorVenda - valorCustoTotal (lucro de um produto);*/

let valorCusto = 100;
let valorVenda = 199.99;
let produto = 1000;
valorCusto = valorCusto -
 
if (produto >= 1000) {
  let valorCustoTotal = valorCusto ;
  let lucro = valorVenda - valorCustoTotal;
  console.log(lucro);
}