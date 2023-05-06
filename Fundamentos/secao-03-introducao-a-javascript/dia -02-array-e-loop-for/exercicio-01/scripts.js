/*Obtenha o valor “Serviços” do array menu:*/

let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu [1];

console.log(menuServices);


console.log('---------------------');

/*Procure o índice do valor “Portfólio” do array menu:*/

let menu2 = ['Home', 'Serviços', 'Portfólio', 'Links'];
let indexOfPortfolio = menu2.indexOf('Portifólio');

console.log(indexOfPortfolio);

console.log('-----------------------');

/*Adicione o valor “Contato” no final do array menu.*/

let menu3 = ['Home', 'Serviços', 'Portfólio', 'Links'];
menu3.push('Contato');
 
console.log(menu3);

console.log('--------------------------');

/*Utilize o for para imprimir os elementos da lista groceryList com o console.log():*/

let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

for (let index = 0; index < groceryList.length; index += 1) {
  console.log(groceryList[index]);
  
}

console.log('---------------------');

/*Utilize o for/of para imprimir os elementos da lista names com o console.log():*/

let names = ['João', 'Maria', 'Antônio', 'Margarida'];

for (let name of names) {
  console.log(name);
}


console.log('---------------------------');

/*Para o exercício a seguir, simule um jogo com dois dados de seis lados. O objetivo é rolar o segundo dado até que o número sorteado seja igual ao do primeiro dado. Assim, utilize o código Math.ceil(Math.random() * 6) para gerar um número aleatório entre 01 e 06. Não se preocupe em entender como funciona o código; por enquanto, é importante entender apenas que, toda vez que o executar, um número aleatório será gerado.
Geralmente o while é utilizado quando não se sabe o início e o fim do laço, algo de que se tem pouco controle (até quando deverá se repetir). Aqui, o objetivo é que o número da variável dado1 seja igual ao número armazenado na variável dado2.*/

let dado1 = Math.ceil(Math.random() * 6);
console.log('resultado dado 1:', dado1);
let dado2 = Math.ceil(Math.random() * 6);

while (dado1 !== dado2) {
  dado2 = Math.ceil(Math.random() * 6);
  console.log('resultado dado 2:', dado2);
}

console.log('------------------------');

let n = 9;

let resultado = 100;
for (let index = 0; index <= 9; index += 1) {
  resultado -= index;
};
console.log(resultado);

