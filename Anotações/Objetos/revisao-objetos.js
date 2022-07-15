/* const pessoa1 = new Object();
pessoa1.nome = 'Rafaela';
pessoa1.sobrenome = 'Oliveira';
pessoa1.idade = 23;
pessoa1.falarNome = function() {
    return (`${this.nome} está falando seu nome.`)
}
pessoa1.getDataNascimento = function() {
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
}; */

/* const pessoa2 = {
    nome: 'Rafaela',
    sobrenome: 'Oliveira'
}; */

// delete pessoa1.nome;
//console.log(pessoa1);

// console.log(pessoa1.getDataNascimento());
// pessoa1.falarNome();

/* for (let chave in pessoa1) {
    console.log(pessoa1[chave]);
} */

//=================================================

// Factory Function // 

/* function criaPEssoa(nome, sobrenome) {
    return {
        nome,
        sobrenome,
        nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        }
    };
}

const p1 = criaPEssoa('Rafaela', 'Oliveira');
console.log(p1.nomeCompleto()); */

//====================================================

// Constructor Functions //

function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;

    // return this; 
}

// {} <- this -> this

// p1 = (ENDERECO DE MEMORIA) -> 'Valor'

Object.freeze(this);

const p1 = new Pessoa('Rafaela', 'Oliveira');
delete p1.nome;
// p1.nome = 'Outra coisa';
// p1.sobrenome = 'QLQ';
// p1.fala = function() {console.log('oi');};
// p1.fala();
const p2 = new Pessoa('Gabriel', 'Tonhatti');


console.log(p1);
console.log(p2);