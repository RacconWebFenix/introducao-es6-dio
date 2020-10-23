function getName(){
    return 'Marcos César Domingues';
}

function logFn(fn){
    console.log(fn(fn));
}

const logFnResult = logFn;

logFnResult(getName);

/*Funçoes de Primeira classe de ordem maior significa que a função pode ser atribuída a uma variável,
pode ser atribuida a uma estrutura de dados, pode ser passadas como argumentos e retornadas com outras
funções */


