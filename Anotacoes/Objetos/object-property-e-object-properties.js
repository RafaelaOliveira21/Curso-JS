// defineProperty -> define uma
// defineProperties -> define várias

function Produto(nome, preco, estoque) {
    // this.nome = nome;
    // this.preco = preco;
    // this.estoque = estoque;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave
        /* value: function() {
            return estoque;
        }, // valor */
        value: estoque, // valor
        writable: true, // pode alterar
        configurable: true // configurável
    });

    //Object.defineProperties(this, {
        //nome: {
            //enumerable: true, // mostra a chave
            /* value: function() {
                return estoque;
            }, // valor */
            //value: estoque, // valor
            //writable: true, // pode alterar
            //configurable: true // configurável
        //},

        //preco: {
            //enumerable: true, // mostra a chave
            /* value: function() {
                return estoque;
            }, // valor */
            //value: estoque, // valor
            //writable: false, // pode alterar
            //configurable: true // configurável
        //},
    //});
}



const p1 = new Produto('camiseta', 20, 3);
p1.estoque = 5000;
// delete p1.estoque
// console.log(p1.estoque());

console.log(p1);
// console.log(Object.keys(p1)) // Consegue ver as chaves do objeto

for (let chave in p1) {
    console.log(chave);
}