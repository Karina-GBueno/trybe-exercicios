/*Faça um programa para adicionar clientes ao array de clientes do TrybeBank. Certifique-se de que a função deve receber um parâmetro do tipo string e imprimir uma mensagem de erro caso o parâmetro não seja do tipo string.*/

let clientesTrybeBank = ['Ada', 'John', 'Gus'];
  
function addClient(cliente) {
  if (typeof cliente === 'string') {
    clientesTrybeBank.push(cliente);
    return 'Cliente adicionado';
  } else {
    return 'O parâmetro não é uma string';
  }
}
console.log(addClient());
console.log(clientesTrybeBank);