let lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

let lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

let lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

//Crie uma função para adicionar o turno da noite na lesson2. Essa função deve ter três parâmetros: o objeto a ser modificado, a chave a ser adicionada e o valor dela.
function newLesson2 (obj, key, value) {
  obj[key] = value;
}
newLesson2(lesson2, 'turno', 'noite');
console.log(lesson2)

console.log('-------------------');

//Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.
function ListKey(obj) {
  return Object.keys(obj);
}
console.log(ListKey(lesson3));

console.log('--------------------');

//Crie uma função para mostrar o tamanho de um objeto. Essa função deve receber um objeto como parâmetro.
function sizeObj(obj) {
  return Object.keys(obj).length;
}
console.log(sizeObj(lesson1));

console.log('--------------------');

//Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.
function listValue(obj) {
  return Object.values(obj);
}
console.log(listValue(lesson2));

console.log('--------------------');

//Crie um objeto de nome allLessons, que deve agrupar todas as aulas por meio do Object.assign. Cada chave desse novo objeto será uma aula, portanto essas chaves serão nomeadas lesson1, lesson2 e lesson3. Ao executar o comando console.log(allLessons), a saída deverá ser a seguinte:

console.log('--------------------');

//Com base no objeto elaborado no tópico anterior, crie uma função que retorne o número total de estudantes em todas as aulas.
let numeroEstudantes = lesson1.numeroEstudantes;
let numeroEstudantes2 = lesson2.numeroEstudantes;
let numeroEstudantes3= lesson3.numeroEstudantes;

let total = numeroEstudantes + numeroEstudantes2 + numeroEstudantes3;

function totalStudent(total) {
  console.log(total);
}
totalStudent(total);

console.log('---------------------');

//Crie uma função que obtenha o valor da chave de acordo com sua posição no objeto. Por exemplo:

function keyValue(obj, num) {
  return Object.values(obj)[num];
}
console.log(keyValue(lesson1, 3));

console.log('-------------------');

//Crie uma função que verifique se o par chave/valor existe na função. Essa função deve possuir três parâmetros:o objeto, o nome da chave e o valor dela. Por exemplo:
function keyValue(obj, key, value) {
  let entries = Object.entries(obj);
  if (entries == key && entries == value) {
    return true;
  }
    return false;
}
console.log(keyValue(lesson2, 'turno', 'noite'));