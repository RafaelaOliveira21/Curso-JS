// const frutas = [ 'Pera', 'Maçã', 'Uva'];

/* for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
} */

// For in -> Lê os índices ou chaves do objetos
// 

/* for (let indice in frutas) {
    console.log(frutas[indice]);
} */

const pessoa = {
    nome: 'Rafaela',
    sobrenome: 'Oliveira',
    idade: 22
};

// for (let i in pessoa) {
//    console.log(i);
// }

for ( let chave in pessoa) {
    console.log(chave, pessoa[chave]);
}