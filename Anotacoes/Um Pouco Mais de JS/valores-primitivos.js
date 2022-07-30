/*  Tipos de dados Primitivos (imutáveis [não se pode mudar]) - 
String, Number, Undefined, Null (bigint, symbol) - Valores copiados
 
Referências (mutável) - array, object, function - Passados por referência
*/

// Valores Primitivos

let letraA = 'A';
let letraB = letraA;    // Cópia
console.log(letraA, letraB);

letraA = 'Outra coisa';
console.log(letraA, letraB);

// ==========================================================

// Valores Referenciados

let a = [1, 2, 3];
let b = [...a];
let c = b;

console.log (a, b);

a.push(4);
console.log(a, b);

b.pop();
console.log(a, b);

a.push("Rafaela");
console.log(a, c);

const d = {
    nome: "Rafaela",
    sobrenome: "Oliveira"
};

const e = {...d};

e.nome = "João";
console.log(d);
console.log(e);