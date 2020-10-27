function Pessoa(){
    if(!Pessoa.instance){
        Pessoa.instance = this;
    }
    return Pessoa.instance;
}


const p = Pessoa.call({name: 'Marcos'});
const p2 = Pessoa.call({name: 'Raccon'});
console.log(p);
console.log(p2);
