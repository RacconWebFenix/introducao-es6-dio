this.name = 'Arrow Function';
const getNameArrowFn = () => this.name;
console.log(getNameArrowFn());

function getName(){
    return this.name;
}

const user = {
    name: 'Nome do objeto de execução',
    getNameArrowFn,
    getName
}

console.log(user.name)
console.log(user.getNameArrowFn());
console.log(user.getName());

//this referencia o objeto user e o name a propriedade do objeto user.name = "Nome do bojeto... "
/*
Lexical this
Ele captura o valor de this do contexto vinculado, ou seja do scopo em que ele se encontra.
Funções não nomeadas “anonymous-function” não podem ser hoisted, 
e como arrow functions são apenas anônimas ou seja só podem ser atribuídas a uma variável, 
então consequentemente não é possível usa-las antes de sua declaração. 
*/