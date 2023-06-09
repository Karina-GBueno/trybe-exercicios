//1- Adicione a tag h1 com o texto TrybeTrip - Agência de Viagens como filho da tag body;

const h1 = document.createElement('h1');
h1.innerText = 'TrybeTrip - Agência de Viagens';
document.body.appendChild(h1);

//2- Adicione a tag main com a classe main-content como filho da tag body;

const mainContent = document.createElement('main');
mainContent.className = 'main-content';
document.body.appendChild(mainContent);

//3- Adicione a tag section com a classe center-content como filho da tag main criada no passo 2;

const centerContent = document.createElement('section');
centerContent.className = 'center-content';
document.mainContent.appendChild(centerContent);

//4- Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;

const sonSection = document.createElement('p');
sonSection.innerText = 'Criando a tag p';
document.centerContent.appendChild(sonSection);

//5- Adicione a tag section com a classe left-content como filho da tag main criada no passo 2;

const leftContent = document.createElement('section');
leftContent.className = 'left-content';
mainContent.appendChild(leftContent);

//6- Adicione a tag section com a classe right-content como filho da tag main criada no passo 2;

const rightContent = document.createElement('section');
rightContent.className = 'right-content';
mainContent.appendChild(leftContent);

//7- Adicione uma imagem com src configurado para valor https://picsum.photos/200 e classe small-image. Esse elemento deve ser filho do section criado no passo 5;

const img = document.createElement('img');
img.src = 'https://picsum.photos/200';
img.className = 'small-image';
leftContent.appendChild(img);

//8- Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um, dois, três, e assim por diante. Essa lista deve ser filha do section criado no passo 6;

const listUl = document.createElement('ul');
const numbers = ['um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez'];

for (let index = 0; index < numbers.length; index += 1) {
  const list = document.createElement('li');
  list.innerText = numbers[index];
  URL.appendChild(li);
}
rightContent.appendChild(ul);  // fiz com a ajuda do gabarito

//9- Adicione 3 tags h3, todas filhas do main criado no passo 2.
for (let index = 0; index < 3; index += 1) {
  const h3 = document.createElement('h3');
  h3.innerText = index;
  mainContent.appendChild(h3);
}



