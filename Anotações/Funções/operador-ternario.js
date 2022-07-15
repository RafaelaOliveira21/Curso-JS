// (Condição) ? 'Valor para verdadeiro' : 'Valor para falso';

/* const pontuacaoUsuario = 999;

if (pontuacaoUsuario >=1000) {
    console.log('Usuario VIP');
}
else {
    console.log('Usuario Normal');
} */

const pontuacaoUsuario = 1000;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuario VIP' : 'Usuario Normal';

// ===================================================

const corUsuario = 'Cor Pink';
const corPadrao = corUsuario || 'Cor Preta';

console.log(nivelUsuario, corPadrao)