class Animal {
    constructor(qtdpatas) {
        this.qtdpatas = 0;
    }

    movimentar(){}
}

class Cachorro extends Animal{
    constructor(morde){
        super();
        this.qtdpatas = 4;
        this.morde = morde;
    }
    latir (){
        console.log('Au! Au!');
    }
}

const pug = new Cachorro(false);
const pitbull = new Cachorro(false);


console.log(pug, pitbull);