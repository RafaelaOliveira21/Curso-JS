// Não podemos criar constantes com palavras reservadas
// Contantes precisam ter nomes significativos
// Não pode começar o nome de uma contante com um número
// Não podem conter espaços ou traços
// Utilizamos camelCase
// Case-sensitive
// Não pode modificar o valor de uma constante
// NÃO UTILIZE VAR, UTILIZE CONST.

const numero = '2';
const primeiroNumero = 5;
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;
const resultadoDuplicado = resultado * 2;
let resultadoTriplicado = resultado * 3;
resultadoTriplicado = resultado + 5;

console.log( typeof (numero + primeiroNumero));

// Typeof = Tipo da variável (String ou Number)