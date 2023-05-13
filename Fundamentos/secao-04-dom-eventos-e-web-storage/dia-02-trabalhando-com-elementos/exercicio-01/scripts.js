// Acesse o elemento where-are-you.
const accessElement = document.getElementById('where-are-you');

// Acesse parent a partir de where-are-you e adicione uma color a ele.
const parent = accessElement.parentElement;
parent.style.color = 'red';

// Acesse o first-child-of-child e adicione um texto a ele. Você se lembra dos vídeos da aula anterior? Eles ensinam como fazer isso.
const accessFirstChildOfChild = document.getElementById('first-child-of-child').firstElementChild;
accessFirstChildOfChild.innerText = 'First child of child';

// Acesse o first-child a partir de parent.
const accessFirstChild = document.getElementById('first-child').firstElementChild; 

// Acesse o first-child a partir de where-are-you.
const firstChild = document.getElementById('where-are-you').previousElementSibling;

// Acesse o texto Attention! a partir de where-are-you.
const textAttention = document.getElementById('where-are-you').nextSibling;

// Acesse o third-child a partir de where-are-you.
const thirdChild = document.getElementById('where-are-you').nextElementSibling;

// Acesse o third-child a partir de parent.
const thirdChildParent = document.getElementById('parent').lastElementChild.previousElementSibling;