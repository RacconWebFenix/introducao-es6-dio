function Person (initialName){
    let name = initialName;
    this.getName = function(){
        return name;
    }
    this.setName = function (newName){
        name = newName;
    }
}

const p = new Person ('Marcos')

console.log(p.getName())


p.setName('José')
console.log(p.getName())