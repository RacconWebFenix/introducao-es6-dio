const persons = Array.of('John', 'Cris', 'Jenny');

console.log(persons);

const numbersAndStrings = Array.of(1,2, 'strings', 'texto');

console.log(numbersAndStrings);

const arrayWithpositions = Array(3);
console.log(arrayWithpositions);

const personsList = Array('John', 'Cris', 'Jenny');
console.log(personsList);


const frutas = ['Mamão','Laranja','Limão'];
const salgados = ['Coxinha','Kibe'];

const alimentos= salgados.concat(frutas);

console.log(alimentos);

const arr = [1,2,3,4,5];

const sliced = arr.slice(-2);

console.log(sliced);

const arr = [1,2,3,4,5];

const spliced = arr.splice(0, 4, 'first');

console.log(arr);

const frutas= ['melancia', 'laranja'];

frutas.splice(1, 0, 'acerola');

console.log(frutas)

const frutas= ['melancia', 'acerola', 'laranja'];

frutas.splice(2, 1, 'banana');

console.log(frutas)