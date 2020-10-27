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
        pw: 400
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

const pw = dragons.some(d => d.pw >= 500);
const pw1 = dragons.find(d => d.pw >= 500);
const pw3 = dragons.findIndex(d => d.pw >= 500);
const pw5 = dragons.every(d => d.pw >= 500);
const pw6 = dragons.find(d => d.pw === 400);



console.log(pw6);