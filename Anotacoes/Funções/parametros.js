// Argumentos que sustenta todos os argumentos enviados

/* function funcao(a, b, c) {
    let total = 0;
    for (let argumento of arguments) {
        total += argumento;
    }

    console.log(total, a, b, c);
}

funcao(1, 2, 3, 4, 5, 6, 7, 8, 9); */

//=======================================================

/* function funcao (a, b = 2, c = 4) {
    console.log(a + b + c);
}
funcao (2, null, 20); */

//=======================================================

/* function funcao({ nome, sobrenome, idade }) {
    console.log(nome, sobrenome, idade);
}

let obj = { nome: 'Rafaela', sobrenome: 'Oliveira', idade: 22};
funcao(obj); */

//=========================================================

function funcao ([valor1, valor2, valor3]) {
    console.log(valor1, valor2, valor3);
}

funcao(['Rafaela Aparecida', 'Oliveira', 22])

//==========================================================

/* function conta(operador, acumulador, ...numeros) {
    console.log(operador, acumulador, numeros);
}
conta('+', 0, [20, 30, 40, 50]); */

//===========================================================

// Arguments não funciona em Arrow Function como funciona em função normal.

const conta = (operador, acumulador, ...numeros) => {
    console.log(arguments);
};
conta('+', 1, 20, 30, 40, 50);