const users = ['Marcos', 'Jenifer', 'Pedro'];

const gender = {
    MAN: Symbol('M'),
    WOMAN: Symbol('W')
}

const persons = [
    {
        name: 'Marcos',
        age: 36,
        gender: gender.MAN
    },
    {
        name: 'Jenifer',
        age: 18,
        gender: gender.WOMAN
    },
    {
        name: 'Pedro',
        age: 43,
        gender: gender.MAN
    },
]
// Retornar a quantidade de itens de um array;
console.log('Items:', persons.length);

// Verificar se é array
console.log('A variável persons é um array', Array.isArray(persons));

//Iterar os itens do array
persons.forEach((p, index, arr) => {
    console.log(`Nome: ${p.name} index: ${index}`, arr);
});

//Filtrar arrayidade
const mens = persons.filter(p => p.gender === gender.MAN);
console.log('\nNova lista com homens: ', mens);

//Retornar um novo
const personsWithCouse = persons.map(p => {
    p.course = 'Introdução ao Java Script';
    return p;
});

console.log('\nPessoas com a adição do course: ', personsWithCouse)

//Transformar um array em outro tipo
const totalAge = persons.reduce((idade, p) =>{
    idade += p.age;
    return idade;
}, 0);

console.log('\nSoma de idade das pessoas', totalAge);

//Juntando operações

const totalEvents = persons
                            .filter(p => p.age %2 === 0)
                            .reduce((age, p) =>{
                                age += p.age;
                                return age;
                            }, 0);
console.log('\nSoma da idade das pessoas ue possuem idades par: ', totalEvents);
