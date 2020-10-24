//retorna o tamanho de uma string
const textSize = 'Texto'.length;
console.log(`Quantidade de Letras: ${textSize}`);

//retorna um array quebrando a string por um delimitador
const splittedText = 'Texto'.split('x');
console.log('\n Array com as posições separadas pelo delimitador: ', splittedText);

//Busca um valor e substitui por outro
const replacedText = 'Texto'.replace('Text', 'txeT');
console.log('\nSubstituição de valor: ', replacedText);

//retorna a fatia de um valor
const lastChar = 'Texto'.slice(-1);
console.log('\nÚltima letra de uma string: ', lastChar);

const allWithoutLastChar = 'Texto'.slice(0, -1);
console.log('\nValor da string da primeira letra com menos a última: ', allWithoutLastChar);

const secondToEnd = 'Texto'.slice(1);
console.log('\nValor da string da segunda letra até a última: ', secondToEnd);

// Retorna N caracteres apartir de uma posição 
const twoCharsBeforeFistPos = 'Texto'.substr(0, 2);
console.log('\nAs duas primeiras letras são: ', twoCharsBeforeFistPos);




