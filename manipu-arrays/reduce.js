const dragons = [
    {
        id: 1,
        name: 'Emerald',
        power: 'Gáz Venenoso',
        cor: 'Verde',
        estrelas: [1, 2, 3],
        pw: 300
    },
    {
        id: 2,
        name: 'Ruby',
        power: 'Fogo',
        cor: 'Vermelho',
        estrelas: [1, 2, 3, 4],
        pw: 400
    },
    {
        id: 3,
        name: 'Pantanoso',
        power: 'Ácido', 
        cor: 'Preto',
        estrelas: [1, 2, 3, 4],
        pw: 400
    },
    {
        id: 4,
        name: 'Albino',
        power: 'Gelo',
        cor: 'Branco',
        estrelas: [1, 2, 3],
        pw: 300
    },
    {
        id: 5,
        name: 'Montanhoso',
        power: 'Raio',
        cor: 'Azul',
        estrelas: [1, 2, 3, 4, 5],
        pw: 500
    }
]

const totalpw = dragons.reduce((tpw, value) => tpw += value.pw, 0) / dragons.length;

console.log(totalpw)

const cores = dragons.reduce((corD, dragon) => corD += dragon.cor + ' ', '');

console.log(cores)
