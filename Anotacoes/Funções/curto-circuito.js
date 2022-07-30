/*
&& -> false && true -> false "o valor mesmo"
|| -> true && false -> vai retornar "o valor verdadeiro"

FALSY
false
0
' '  " "  ` `
null / undefined
NaN
*/


function falaOi () {
    return 'oi';
}

const vaiExecutar = 'Oi';

console.log(vaiExecutar && falaOi());

// ====================================================

const corUsuario = 'vermelho';
const corPadrao = corUsuario || 'preto';

console.log(corPadrao);  