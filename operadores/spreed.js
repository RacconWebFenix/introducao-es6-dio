//Spread muito usado para concatenar arrays

var partes = ['ombro', 'joelho'];
var musica = ['cabeca', ...partes, 'e', 'pés'];

//var musica = ['cabeca', 'ombro', 'joelho', 'e', 'pés'];


function fn(x, y, z) { }
var args = [0, 1, 2];
fn(...args);
//fn(x=0,y=1,z=2) 