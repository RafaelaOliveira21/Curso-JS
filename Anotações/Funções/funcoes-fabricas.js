// Factory function (FUnção fábrica)
// Constructor function (Função construtora)

function criaPessoa(nome, sobrenome, a, p) {
    return {
        nome, 
        sobrenome,

        // Getter
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        },

        // Setter
        set nomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
            // console.log(valor);
        },

        fala(assunto = 'falando sobre NADA..') {
        //fala: function(assunto) {
            // return `${nome} está ${assunto}.`;
            return `${this.nome} está ${assunto}.`;
        },

        altura: a,
        peso: p,

        // Getter
        get imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}

const p1 = criaPessoa('Fabiana', 'Garcia', 1.57, 44);
p1.nomeCompleto = 'Rafaela Aparecida Alexandre Oliveira';
console.log(p1.nome);
console.log(p1.sobrenome);
console.log(p1.fala());

const p2 = criaPessoa('Luiz', 'Otávio', 1.80, 80);
const p3 = criaPessoa('João', 'Miguel', 1.70, 66);
const p4 = criaPessoa('Junior', 'Mesquita', 1.90, 115);

console.log(p2.imc);
console.log(p3.imc);
console.log(p4.imc);

// console.log(p1.nome);
// console.log(p1.sobrenome);
// p1.imc = 29
// console.log(p1.imc);
// console.log(p1.imc());
// const p2 = criaPessoa('Fernanda', 'Fernandes', 1.65, 50);
// console.log(p2.fala('estudando JS'));
// console.log(p2.imc());
