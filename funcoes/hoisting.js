/* Hoisting = Levantar => suspender algo =>
2 tipos => Variaveis e funções.
A diferença é que o hoisting de variável só eleva a criação da variável e não a sua atribuição.
A função é elevada como um todo.
*/

//Hoisting de Variáveis.

/*
function fn() {
    console.log(text);

    var text = 'exemplo';
  
    console.log(text);
}
fn();
*/

/*
function fn(){
    var text;
    console.log(text);

    text = 'exemplo';

    console.log(text)
} 
*/

// Hoisting de Função

function fn() {
    log('Hoisting de função ');

    function log(value) {
        console.log(value);
    }
}

fn();
/* Boa pratica declarar a função antes de usar
function fn() { 
    function log(value) {
        console.log(value);
    }

    log('Hoisting de função ');

}
*/