const fruit = 'mamão';

switch (fruit) {
    case 'banana':
        console.log('R$ 3,00 /kg');
        break;
    case 'mamão':
    case 'melancia':
        console.log('R$ 3,00 /kg');
        break;
    case 'pera':
        console.log('R$ 2,00 /kg');
        break;
    default:
        console.log('Este produto não existe');
        break;
}