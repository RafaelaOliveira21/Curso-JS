/* const pessoa1 = {
    nome: "Luiz",
    sobrenome: "Miranda",
    idade: 25
};

console.log(pessoa1.nome);
console.log(pessoa1.sobrenome); */

// ========================================================

function criaPessoa (nome, sobrenome, idade) {      // parâmetro
    return { nome, sobrenome, idade };
}

const pessoa1 = criaPessoa("Luiz", "Otávio", "25");     // argumento
const pessoa2 = criaPessoa("Maria", "José", "32"); 
const pessoa3 = criaPessoa("Fernando", "Miguel", "36"); 
const pessoa4 = criaPessoa("Gabriel", "Tonhatti", "21"); 
const pessoa5 = criaPessoa("Rafaela", "OLiveira", "22"); 

console.log (pessoa1.nome, pessoa2.nome);

// ==========================================================

const pessoa = {
    nome: "Luiz",
    sobrenome: 'Miranda',
    idade: 25,

    fala () {
        //console.log(`${this.nome} ${this.sobrenome} está falando oi....`);
        console.log(`A minha idade atual é ${this.idade}`);
    },

    incrementaIdade() {
        this.idade++;
    }
};

pessoa.fala();
pessoa.incrementaIdade();
pessoa.fala();