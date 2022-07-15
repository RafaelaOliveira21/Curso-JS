/*
    Object.values
    Object.entries
    Object.assing (des, any)
    Object.getOwnPropertyDescriptor (o, 'prop')
    ...(spread)

    // Já vimos

    Object.keys (retorna as chaves)
    Object.freeze (congela o objeto)
    Object.defineProperties (define várias propriedades)
    Object.defineProperty (define uma propriedade)
*/

const produto = { nome: 'Produto', preco: 1.8, material: 'porcelana' };
// const caneca = {...produto, material: 'porcelana'};
// const caneca = Object.assign({}, produto, {material: 'porcelana'});

// caneca.nome = 'Luiz Otávio';
// caneca.preco = 2.5;
// produto.nome = 'Luiz Otávio';

// console.log(produto);
// console.log(caneca);

/* Object.defineProperty(produto, 'nome', {
    writable: false,
    configurable: false,
    value: 'Qualquer outra coisa'
}); */

// console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));
// produto.preco = 'Outra coisa';
// delete produto.preco;
// console.log(produto);

// console.log(Object.values(produto));

// console.log(Object.entries(produto));

for(let valor of Object.entries(produto)) {
    console.log(valor[0], valor[1]);
}