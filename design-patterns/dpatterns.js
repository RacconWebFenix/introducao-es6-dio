//factory
function Pessoa(customProperties){
    return {
        name: 'Marcos',
        lastName: 'Domingues',
        ...customProperties
    }
}

const p = new Pessoa({name: 'custom name' , lastName: 'Custom lastName', age: 36 });

console.log(p);