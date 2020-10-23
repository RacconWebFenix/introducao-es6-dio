const name = 'Marcos';

//Não podemos alterar o valor
//name = "Domingues";

const user = {
    name:'Marcos'
};

//Se for um objeto podemos trocar suas propriedades
user.name = 'Outro Valor';

//não podemos fazer o objeto apontar para outro lugar
/*
user = {
    name: 'Marcos'
}
*/
const persons = ['Marcos', 'Pedro', 'Jenifer'];

//podemos adicionar novos itens
persons.push('João');

//podemos remover
persons.shift();

//podemos alterar diretamente
persons[1] = 'james';

console.log('\nArray após as alterações: ', persons);
