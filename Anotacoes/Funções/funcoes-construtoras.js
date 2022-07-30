// Função construtora -> objetos (constói objetos)
// Função fábrica -> objetos (fabrica objetos)
// Na função factory, usa-se camelCase = criaPessoa
// Já na função constructor, utiliza-se letra maiúscula = Pessoa (new). 
// Eliminamos a parte "cria".

function Pessoa(nome, sobrenome) {  
    // Atributos ou métodos privados

    const ID = 123456;

    const metodoInterno = () => {
        
    };

    // Atributos ou métodos públicos
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = () => {
        console.log(this.nome + ': sou um método');
    };
}

const p1 = new Pessoa('Luiz', 'Otávio');
const p2 = new Pessoa('Maria', 'Oliveira');

console.log(p1.nome);
p1.metodo()