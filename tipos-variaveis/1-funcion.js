function fn() {
    return 'Code Here';
};

const arrowFn = () => 'Code Here';
const arrowFn2 = () => {
    //mais de uma expressão 
    return 'Code Here';
};

// Funções tabém são objetos
fn.prop = 'Posso criar Propriedades';

console.log(fn());
console.log(fn.prop);

// Receber Parâmetros
const logValue = value => console.log(value);
const logFnResult = fnParam => console.log(fnParam());

logFnResult(fn);

//Receber e Retornar funções
const controlFnExec => fnParam => allowed => {
    if(allowed){
        fnParam();
    }
}

const handleFnExecution = controlFnExec(fn);

handleFnExecution(true); //Ececutará a função fn
handleFnExecution(); // não executará a função fn

// controlFnExec como função
function controlFnExec(fnParam){
    return function(allowed){
        if (allowed){
            fnParam();
        }
    }
}