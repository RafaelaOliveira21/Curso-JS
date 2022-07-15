// O método Splice = Ele reproduz praticamente todos os métodos de array que tem no JS
// Método pop, push, unshift, shift

//nomes.splice(índice atual, delete, elem1, elem2, elem3);
// pop
//               -5       -4       -3        -2          -1
//                0        1        2         3           4
const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Rafaela'];

// const removidos = nomes.splice(3, 2);
const removidos = nomes.splice(3, 2, 'Fernando', 'Jonas');
// const removidos = nomes.splice(-3, Number.MAX_VALUE);
console.log(nomes, removidos);
// console.log(Number.MAX_VALUE);