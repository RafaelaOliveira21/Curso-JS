const pessoa = {
    nome: 'Rafaela',
    sobrenome: 'Oliveira',
    idade: 30,
    endereco: {
        rua: 'Welton Araújo Cintra',
        numero: 1019
    }
};

// const nome = pessoa.nome;
// console.log(pessoa.nome);

// Atribuição via desestruturação
// const { nome = '', sobrenome, idade } = pessoa;
// console.log(nome, sobrenome);

// const { nome: teste = '', sobrenome } = pessoa;
// console.log(teste, sobrenome);

// const { endereco: {rua, numero}, endereco } = pessoa;
// console.log(rua, numero, endereco);

const { nome, sobrenome,...resto } = pessoa;
console.log(nome, sobrenome, resto);