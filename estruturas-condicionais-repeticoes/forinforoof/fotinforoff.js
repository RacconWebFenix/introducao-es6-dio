let arr = ['3','5','7'];
arr.foo = 'hello';

for (let i in arr){
    console.log(i) // logs 0 1 2  foo exibe os indices do array
}

for (let i of arr){
    console.log(i) // logs 3 5 7 exibe os valores numericos do array
}