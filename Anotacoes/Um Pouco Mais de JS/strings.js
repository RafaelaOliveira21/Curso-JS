let primeiraString = "Um \"texto\"";    // Resultado: Um "texto".
let segundaString = "Um \texto";        // Resultado: Um exto (\t vira uma tecla de escape).
let terceiraString = "Um \\texto";      // Resultado: Um \texto
let umaString = "Um Texto";

console.log (primeiraString, "\n", segundaString, "\n", terceiraString);

// Métodos de concatenação

console.log (umaString.concat(' em um lindo dia.'));        // Novo modo de concatenar uma String.
console.log (umaString + ' em um lindo dia.');                    // Concatenação normal.
console.log (`${umaString} em um lindo dia.`);                 // Template String.
console.log(umaString.indexOf ("e", 3));                            // Busca a posição da letra/palavra pelo numero que vem depois da virgula.
console.log(umaString.lastIndexOf("e", 7));                     // Faz a mesma coisa que o "indexOf", porém, ao contrário.
console.log(umaString.search(/[aA-zZ]/));                        // Retorna o numero do índice.

// Um pouquinho de Regex

umaString = "Rafaela";
console.log(umaString.match(/[aA-zZ]/g));       // Resultado do Match = [ 'R', 'a', 'f','a', 'e', 'l','a' ]

umaString = "Rafaela Aparecida Alexandre Oliveira";
console.log(umaString.replace(/a/g, "4"));      // Resultado do Replace = "R4f4el4 Ap4recid4 Alex4ndre Oliveir4"

console.log(umaString.slice(-5, -1));       // Resultado do Slice = "veir"

console.log(umaString.split(" "));      // Resultado do Split  =  [ 'Rafaela', 'Aparecida', 'Alexandre', 'Oliveira' ]


// Métodos para deixar o texto em modo Maiúsculo ou Minúsculo

console.log(umaString.toUpperCase());

console.log(umaString.toLowerCase());