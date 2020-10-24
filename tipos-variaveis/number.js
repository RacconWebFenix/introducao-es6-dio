const myNumber = 12.4032;

//Transformar numero para string
const numberAsString = myNumber.toString();
console.log('\nNúmero transformado em string: ', numberAsString, typeof numberAsString);

// Retorna número com o numero de casas decimais
const fixedTwoDecimals = myNumber.toFixed(2);
console.log('\nNúmero com duas casas decimais: ', fixedTwoDecimals);

//Tranforma uma String em Float
console.log('\nString Parseada em float: ',  parseFloat('13.22'));

//Transforma uma string em int
console.log('\nString Parseada em Int: ',  parseInt('13.22'));



