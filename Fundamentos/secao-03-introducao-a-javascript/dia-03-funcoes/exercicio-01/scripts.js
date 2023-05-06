let balance = 1000;

/*Adicione um valor ao saldo.*/

function sumBalance (addsValue) {
  return balance + addsValue;
}

console.log(sumBalance(500));


console.log('------------------');

/*Subtraia um valor do saldo.*/

function subtractBalance(subtractValue) {
  return balance - subtractValue;
}

console.log(subtractBalance(278));

console.log('-------------------');

/*Multiplique o valor do saldo por uma taxa.*/

function multiplyValue (rate) {
  return balance * rate;
}

console.log(multiplyValue(1.5));

console.log('---------------------');

/*Divida o valor do saldo.*/

function divideValue (toDivide) {
  return balance / toDivide;
}

console.log(divideValue(2));

