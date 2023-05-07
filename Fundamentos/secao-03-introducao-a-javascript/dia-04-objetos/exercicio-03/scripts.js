let student = {};

function addProperty(object, key, value) {
  object[key] = value;
};

addProperty(student, `nome`, `Fulano da Silva`);
addProperty(student, `email`, `exemplo-fulano.silva@email.com`);
addProperty(student, `telefone`, `11 1111-1111`);
addProperty(student, `github`, `github.com/exemplo-fulano-da-silva`);
addProperty(student, `linkedIn`, `linkedin.com/exemplo-fulano-da-silva`);

console.log(student);

console.log('----------------');

let object = { a: 1, b: 2, c: 3 };

for (let property in object) {
  console.log(property + ' = ' + object[property]);
}

console.log('--------------------');

let starships = {
  option1: "Tardis",
  option2: "Millennium Falcon",
  option3: "Enterprise",
  option4: "Heart of Gold"
};

console.log(Object.values(starships));

console.log('-----------------');

let top3Albums = {
  1: 'Nightfall in Middle-Earth',
  2: 'Imaginations from the Other Side',
  3: 'Somewhere Far Beyond',
};
console.log(Object.entries(top3Albums));

console.log('--------------');

let band = {
  name: 'Blind Guardian',
  formedIn: 1986,
  lastAlbum: 'Beyond the Red Mirror',
};

let info = {
  genre: 'Power Metal',
  lastAlbum: 'Twilight Orchestra: Legacy of the Dark Lands',
};

console.log(Object.assign(band, info));

console.log('-------------------');

let objeto = {
  chave1: "a", 
  chave2: "b", 
  chave3: "c"
}

console.log(objeto.chave1);