// Global

function retornaFuncao() {
    const nome = 'Luiz';
    return function() {
        return nome;
    };
}

const funcao = retornaFuncao('Rafaela');
const funcao2 = retornaFuncao('Oliveira');

console.dir(funcao);
console.dir(funcao2);

console.log(funcao(), funcao2());