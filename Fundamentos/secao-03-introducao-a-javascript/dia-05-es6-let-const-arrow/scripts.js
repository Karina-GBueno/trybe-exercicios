const ligarDesligar = (status) => {
  if (status === 'desligado') {
    return 'ligado';
  } else {
    return 'desligado';
  }
  console.log(`O motor está ${status}`);
};
console.log(ligarDesligar('desligado'));

//Crie uma função que calcule a área de um círculo

const circleArea = (radiusValue) => {
  const pi = 3.14;
  const area = pi * (radiusValue ** 2);

  if (typeof radiusValue !== 'number') {
    return 'O parâmetro radius deve ser um número';
  } 
  return `Essa é a área do circulo: ${area}`;
}
console.log(circleArea(10));

//Crie uma função que receba uma frase como parâmetro e retorne a maior palavra da frase.
const longestWord = (phrase) => {
  let result = '';
  phrase = phrase.split(' ');
  phraseLenght = 0;
 
  for (const currentSentence of phrase) {
    if (currentSentence.length > phraseLenght) {
      phraseLenght = currentSentence.length;
      result = currentSentence;
    }
  }
  return result;
}
console.log(longestWord('Antonio foi ao banheiro e não sabemos o que aconteceu'));