let num1 = 9.4999999;

// Math.floor = arredonda o número para uma casa a menos (abaixo);
let num2 = Math.floor(num1); 

// Math.ceil = arredonda o número para uma casa a mais (acima);
let num3 = Math.ceil (num1);

// Math.round = arredonda o número dependendo de seu valor;
let num4 = Math.round (num1);

console.log (num1);
console.log (num2);
console.log (num3);
console.log (num4);

// ----------------------------------------------------------------------------------- //

// Math.max = Pega o maior número da sequência;
console.log (Math.max(1, 2, 3, 4, 5, -10, -50, 1500, 9, 8, 7, 6));

// Math.min = Pega o menor número da sequência;
console.log (Math.min(1, 2, 3, 4, 5, -10, -50, 1500, 9, 8, 7, 6));
// Gera um número aleatório;
console.log (Math.random());

// ----------------------------------------------------------------------------------- //

const aleatorio = Math.round (Math.random() * (10 - 5) + 5);
console.log (aleatorio);

// ----------------------------------------------------------------------------------- //

// Mostra / Gera o numero PI;
console.log (Math.PI);

// ----------------------------------------------------------------------------------- //

// Gera a potenciação de um número
console.log (Math.pow(2, 10));
console.log (2 ** 10);

// ----------------------------------------------------------------------------------- //

let numero = 9;
console.log (numero ** (1/2));
console.log (numero ** 0.5);

// ----------------------------------------------------------------------------------- //

// Tomar cuidado com conta que contenha divisão por 0

console.log (100 / 0);