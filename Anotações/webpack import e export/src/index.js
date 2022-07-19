// import * as MeuModulo from './modulo1';
// console.log(MeuModulo);

// console.log(nome2, sobrenome, idade);
// console.log(soma(5, 5));

// const p1 = new Pessoa('Rafaela', 'Oliveira');
// console.log(p1);

// import multiplica, { nome, sobrenome, idade, soma } from './modulo1';
// console.log(multiplica(5, 40));
// console.log(nome, sobrenome, idade, soma(4, 4));

import Pessoa, { nome, sobrenome } from './modulo1';
const p1 = new Pessoa(nome, sobrenome);
console.log(p1);