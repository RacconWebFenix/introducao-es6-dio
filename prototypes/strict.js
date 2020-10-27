'use strict';

function Animal() { }

Animal.prototype.qtdpatas = 0;
Animal.prototype.movimentar = function () { };

function Cachorro(morde) {
    this.qtdpatas = 4;
    this.morde = morde;
}

Cachorro.prototype = Object.create(Animal);
Cachorro.prototype.latir = function(){
    console.log('au au');
}

const pug = new Cachorro(false);
const pitbull = new Cachorro(true);

console.log(pug, pitbull)