/* Escreva um algoritmo que faça conversão de temperatura em graus Celsius para graus Fahrenheit.
DICA: A conversão deve ser a temperatura em graus Celsius dividido por 5, o resultado multiplicado por 9 somado com 32.
Exiba o resultado no console. */

let grausCelsius = 30;
let conversaoFahrenheit = (grausCelsius / 5) * 9 + 32;

console.log(conversaoFahrenheit);

/* Ana começou a ler o livro "O guia do mochileiro das galáxias", que tem 208 páginas. Após 2 minutos ela leu 4 páginas. 
Crie um algoritmo que calcula e imprime o tempo em minutos que Ana levará para ler todo o livro seguindo o formato:
Ana levará X minutos para ler o livro todo. */

let paginas = 208;
let minutos = 2;
let resultado = (paginas * minutos) / 4;

console.log(resultado);

/* Você foi jantar em um restaurante chique, em uma cidade turística. O prato que você pediu custou R$100,00. Porém o restaurante possui uma taxa de 10% sobre o valor da conta por ser um lugar turístico.
Crie uma solução para calcular o valor final da conta sendo que você também quis dar 5% de gorjeta para a pessoa que lhe atendeu. */

let pratoCusto = 100;
let taxa = 10;
let gorjeta = 5.5;
let contaFinal = pratoCusto + taxa + gorjeta;

console.log(contaFinal);


/* Você está planejando uma viagem até a praia com colegas.
Uma das tarefas para a viagem acontecer é calcular quantos dias ela irá levar.
Você está em São Paulo, o João está em Belo Horizonte e a Joana está em Salvador.
Levando em conta que o destino do grupo é Natal, no Rio Grande do Norte, crie um algoritmo que calcula a duração de dias de uma viagem levando em conta a quantidade total de horas.
O total de dias deve ter precisão de 3 dígitos.
Informações: 
São Paulo até Belo Horizonte = 7 horas e 23 minutos;
Belo Horizonte até Salvador = 19 horas e 57 minutos;
Salvador até Natal = 15 horas e 32 minutos. */
let spBh = 443;
let bhSal = 1194;
let salNat = 932;
let soma = (spBh + bhSal + salNat) / 60;
soma = soma / 24;

console.log(soma );