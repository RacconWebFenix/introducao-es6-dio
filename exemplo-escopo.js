/*
var test = 'exemplo';

(() => {
    console.log(`Valor dentro da função "${test}"`);

    if(true){
        var test = 'exemplo'; //var nao entende escopo de bloco, somente função ou global
        console.log(`Valor dentro if "${test}"`);
    }

    console.log(`Valor após a execução do IF "${test}"`);
})();
*/


//let e const respeita o escopo de bloco
(() => {
    let test = 'valor função';
    console.log(`Valor dentro da função "${test}"`); //hoisting 

    if(true){
        let test = 'valor do if'; 
        console.log(`Valor dentro if "${test}"`);
    }

    if(true){
        let test = 'valor de outro if'
        console.log(`Valor ade outro IF "${test}"`);
    }

    console.log(`Valor após a execução do IF "${test}"`);// retorna o valor da função
})();