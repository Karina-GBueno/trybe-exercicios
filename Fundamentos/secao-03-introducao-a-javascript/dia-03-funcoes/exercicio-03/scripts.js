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


//responsável por validar se o parâmetro é do tipo string.
function validaCliente(cliente) {
  if (typeof cliente !== 'string') {
    return 'O parametro não é uma string';
  } else {
    return true;
  }
}

//responsável por percorrer o array de clientes e encontrar o respectivo index. Caso não encontre nenhum(a) cliente, a função retornará false.
function clienteIndex(cliente) {
  for (let index = 0; index < clientesTrybeBank.length; index += 1) {
    if (cliente === clientesTrybeBank[index]) {
      return index;
    }
  }
  return false;
}

//implemente a validação do parâmetro cliente. Armazene o retorno da função validaCliente em uma variável.
function removeCliente(cliente) {
  let validacao = validaCliente(cliente);
  if (validacao !== true) {
    return validacao;
  }

  //chame a função clienteIndex para encontrar o indíce do(a) cliente no array. Caso o(a) cliente não seja encontrado(a), será retornada a mensagem de erro.
  let index = clienteIndex(cliente);
  if (index === false) {
  return 'cliente não encontrado.'
  }

  //Caso o parâmetro seja do tipo string e o índice do(a) cliente seja encontrado, a função deverá remover o(a) cliente do array.
  clientesTrybeBank.splice(index, 1);
  return 'cliente excluido.'
}
console.log(removeCliente(false));
console.log(removeCliente('Barney'));
console.log(removeCliente('John'));
console.log(clientesTrybeBank);


let usuario = {
  id: 99,
  email: 'jakeperalta@gmail.com',
  infoPessoal: {
    nome: 'Jake',
    sobrenome: 'Peralta',
    endereco: {
      rua: 'Smith Street',
      bairro: 'Brooklyn',
      cidade: 'Nova Iorque',
      estado: 'Nova Iorque',
    },
  },
};

console.log(usuario['id']); // 99
console.log(usuario['email']); // jakeperalta@gmail.com

console.log(usuario.infoPessoal.endereco.rua); // Smith Street
console.log(usuario['infoPessoal']['endereco']['cidade']); // Nova Iorque