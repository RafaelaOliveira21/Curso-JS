const nome = 'Rafaela';
const sobrenome = 'Oliveira';
const idade = 22;

function soma(x, y) {
    return x + y;
}

export default (x, y) => x * y;

export { nome, sobrenome, idade, soma };

export class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}