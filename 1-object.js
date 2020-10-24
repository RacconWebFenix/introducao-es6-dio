let user = {
    name: 'Marcos'
};
console.log(user)
//Alterando a Propriedade de um objeto
user.name = 'Outro nome 1';
console.log(user)
user['name'] = 'Outro nome 2';
console.log(user)

const prop = 'name';
user[prop] = 'Outro nome 3';
console.log(user)
/* Quando for pegar a propriedade em uma função
function getProp(prop){
    return user[prop];
}
*/
//Criando uma propriedade
user.lastName = 'Domingues';
console.log(user)
//Excluindo uma propriendade
delete user.name;
console.log(user)
