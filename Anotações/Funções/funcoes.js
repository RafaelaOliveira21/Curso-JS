// function saudacao(nome) {
 //   return `Bom dia ${nome}`;
// }

// const variavel = saudacao ("Luiz");
// saudacao("Maria");
// saudacao("Everton");

// console.log(variavel);

// ============================================

function soma(x, y){
    const resultado = x + y;
   // console.log("Olá mundo"); // é exibido porque está antes do return
    return resultado;
    // console.log("Olá mundo");  // não é exibido porque está depois do return
}

const resultado = soma(5, 10); //Funciona com strings, no caso delas, serão concatenadas
console.log(resultado);

// console.log (2, 2);
// console.log (6, 2);
// console.log (7, 2);

// ============================================

const raiz = function (n) {
    return n ** 0.5;
};

console.log(raiz(9));

// ============================================

// Arrow function

const raizes = n => n ** 0.5; 

console.log(raiz(16));
console.log(raiz(25));
