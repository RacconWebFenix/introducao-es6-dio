/* Escopo lexico - É a capacidade de uma função lembrar do ambiente em que ela foi criada */
function init() {
    const exemplo = 'Essa Variável';

    return function () {
        console.log(`1 - O valor da variável exemplo é: ${exemplo}.`);

        return function () {
            console.log(`2 - O valor da variável exemplo é: ${exemplo}.`);

            return function () {
                console.log(`3 - O valor da variável exemplo é: ${exemplo}.`);
            }
        }
    }
}
/* 
O ideal seria a funçao receber a variavel de parametro.
function init() {
    const exemplo = 'Essa Variável';

    return function (exemplo) {
        console.log(`1 - O valor da variável exemplo é: ${exemplo}.`);

        return function (exemplo) {
            console.log(`2 - O valor da variável exemplo é: ${exemplo}.`);

            return function (exemplo) {
                console.log(`3 - O valor da variável exemplo é: ${exemplo}.`);
            }
        }
    }
}

*/
/* Primeiro exemplo de como chamar as funçoes dentro de variáveis
const initFn1 = init();

const initFn2 = initFn1();

const initFn3 = initFn2();

initFn3();
*/ 

//chamando as funções uma vez
init()()()(); 
