let varA = 'A';     // B
let varB = 'B';    // C
let varC = 'C';    // A
let varD = 'A';    // Variável Temporária

// Primeira Solução

varA = varB; 
varB = varC;
varC = varD; 

// Segunda Solução

[varA, varB, varC] = [varB, varC, varA]

console.log ( varA, varB, varC)