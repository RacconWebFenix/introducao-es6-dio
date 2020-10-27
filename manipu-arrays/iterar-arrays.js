const arr = [1, 2, 3, 4, 5];

arr.forEach((value, i) => {
    console.log(`${i}: valor:${value}`)
});

const frutas = ['Laranja', 'Amora', 'Limão', 'Melancia'];

//frutas.forEach((frutas, i, arr)=> console.log(i, frutas, arr));

const ftr = frutas.map((frutas, i) => `${i} - ${frutas}`);
console.log(ftr);

const idades = [20, 34, [55, 60, [78, 90]]];
console.log(idades) 

let id = idades.flat(2)
console.log(id) 