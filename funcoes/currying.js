/* Currying = Técnica para transformar uma função com n parametros em apenas uma função recebendo um
parametro que por sua vez retorna uma função por parâmetro.
Para cada parâmetro é criada uma nova função */

/* função comum

function soma(a, b){
    return a + b;
}

soma(2, 2);
soma(2, 3);
soma(2, 4);
soma(2, 5); 
*/

//Currying

function soma(a) {
   return function (b) {
    return a + b;
    }
}

const soma2 = soma(2);

console.log(soma2(2));
console.log(soma2(3));
console.log(soma2(4));
console.log(soma2(5));



