//break
console.log('Exemplo utilização de Break');

var index = 0;

while (true) {
    index++
    if (index > 2) {
        break;
    }
    console.log(index);
}

//cotinue
console.log('\nExemplo utilização de continue');

const array = ['1', '2', '3', '4', '5', '6'];

for (i = 0; i < array.length; i++){
    const element =  array[i];
    if(element %2 === 0){
        continue
    }
    console.log(element)
}