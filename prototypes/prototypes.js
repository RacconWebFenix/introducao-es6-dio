function Pessoa(){
    this.name = name;
}

const p = new Pessoa(name = 'Marcos');

console.log(p);

function Pessoa(name){
    this.name = name;
    return {
        name: 'Teste'
    };
};

const p2 = new Pessoa('Marcos')

console.log(p2)