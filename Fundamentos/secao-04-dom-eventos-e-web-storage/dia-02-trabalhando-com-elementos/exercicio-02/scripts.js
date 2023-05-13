// Crie um irmão para elementoOndeVoceEsta.
const father = document.getElementById('pai');
const brother = document.createElement('section');
brother.id = 'irmaoElementoOndeVoceEsta';

father.appendChild(brother);

// Crie um filho para elementoOndeVoceEsta.
const son = document.getElementById('elementoOndeVoceEsta')
const sonOfSon = document.createElement('section');
sonOfSon.id = 'terceiroFilhoDoFilho';

son.appendChild(sonOfSon);

// Crie um filho para primeiroFilhoDoFilho
const firstSon = document.getElementById('primeiroFilhoDoFilho');
const sonFirstChild = document.createElement('section');
sonFirstChild.id = 'primeiroFilhoDoPrimeiroFilho';

sonFirstChild.appendChild(sonFirstChild);

// A partir desse filho criado, acesse terceiroFilho.
const thirdSon = sonFirstChild.parentElement.parentElement.nextElementSibling;

console.log(thirdSon);


