const nomes = ['Rafaela', 'Gabriel', 'Fernanda', 'Eduardo'];

// For clássico -> Geralmente com iteráveis (array ou strings)

 for (let i = 0; i < nomes.length; i++) {
    console.log(nomes[i]);
}

// For in -> Retorna o índice ou chave (string, array ou objetos)

console.log('============================');

for (let i in nomes) {
    console.log(nomes[i]);
}

// For of -> Retorna o valor em si (iteráveis, arrays ou strings)

console.log('============================');

for (let valor of nomes) {
    console.log(valor);
}

console.log('============================');

nomes.forEach(function(valor, indice, array) {
    console.log(valor, indice, array);
});

const pessoa = {
    nome: "Rafaela",
    sobrenome: 'Oliveira'
};

console.log('============================');

for (let i in pessoa) {
    console.log(i, pessoa[i]);
}