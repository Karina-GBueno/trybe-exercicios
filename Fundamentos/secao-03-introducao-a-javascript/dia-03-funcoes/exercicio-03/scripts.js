/*Refatore a função removeCliente para diminuir sua complexidade e quebrá-la em funções menores.*/

let clientesTrybeBank = ['Ada', 'John', 'Gus'];

// function removeCliente(cliente) {
//   if (typeof cliente === 'string') {
//     let clienteEncontrado = false;
//     for (let index = 0; index < clientesTrybeBank.length; index += 1) {
//       if (cliente === clientesTrybeBank[index]) {
//         clientesTrybeBank.splice(index, 1);
//         clienteEncontrado = true;
//         return 'Cliente excluída(o) com sucesso.';
//       }
//     }

//     if (clienteEncontrado === false) {
//       return 'Cliente não encontrado'
//     }
//   } else {
//     return 'O parâmetro passado deve ser do tipo "string"!';
//   }
// };

function validaCliente(cliente) {
  if (typeof cliente !== 'string') {
    return 'O parametro não é uma 'string'';
  } else {
    return true;
  }
}

function clienteIndex(cliente) {
  for (let index = 0; index < clientesTrybeBank.length; index += 1) {
    if (cliente === clientesTrybeBank[index]) {
      return index;
    }
  }
  return false;
}

function removeCliente(cliente) {
  let validacao = validaCliente(cliente);
  if (validacao !== true) {
    return validacao;
  }
}

let index = clienteIndex(cliente);
if (index === false) {
  return 'cliente não encontrado.'
}

clientesTrybeBank.splice(index, 1);
return 'cliente excluido.'

console.log(removeCliente(false));
console.log(removeCliente('Barney'));
console.log(removeCliente('John'));
console.log(clientesTrybeBank);