const user = {
    name: 'Marcos',
    lastName: 'Domingues'
}

//Recupera as chaves do objeto
console.log('Propriedades do objeto user: ', Object.keys(user));

// Recupera os valores das chaves do objeto
console.log('\nValores das propriedades do objeto user: ', Object.values(user));

// Retorna um array de arrays contendo [ nome_prop, valor_prop ]
console.log('\nLista de propriedades e valores do objeto user: ', Object.entries(user));

// Mergear propriedades de objetos
Object.assign(user, {fullName: 'Marcos César Domingues'});
console.log('\nAdiciona a propriedade fullName ao objeto user', user);
console.log('\nRetorna um novo objeto margeando dois ou mais objetos', Object.assign({}, user, {age:36}));
console.log(user);
//Previne todas as alterações de um objeto
const newObj = {foo: 'bar' };
Object.freeze(newObj);

newObj.foo = 'new changes';
delete newObj.foo;
newObj.bar = 'foo';

console.log('\nVariavel newObject após as alterações: ', newObj);

//Permite apenas a alteração de propriedades existentes de um objeto
const person = {name: 'Marcos'};
Object.seal(person);

person.name = 'Marcos César Domingues';
delete person.name;
person.age = 36;

console.log('\nVariável person após as alterações', person);
