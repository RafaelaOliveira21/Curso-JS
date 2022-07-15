/* let a = 'A';    // B
let b = 'B';    // C
let c = 'C';    // A

const letras = [b, c, a];
[a, b, c] = letras;

console.log (a, b, c); */

//==========================================================

// ...rest, ...spread

// const numeros = [1258, 214, 374, 423, 574, 6412, 796, 8258, 917];

// const [um, dois, tres, ...resto] = numeros;
// console.log(um, dois, tres, resto);

//==========================================================

/* const numeros = [1258, 214, 374, 423, 574, 6412, 796, 8258, 917];

const [um, , tres, cinco, , sete] = numeros;
console.log(um, tres, cinco); */

//===========================================================

//                    0          1          2
//                 0  1  2    0  1  2    0  1  2
const numeros = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];
// const [,[, ,seis]] = numeros;
const [lista1, lista2, lista3] = numeros;
//console.log(seis);
console.log(lista3[2]);