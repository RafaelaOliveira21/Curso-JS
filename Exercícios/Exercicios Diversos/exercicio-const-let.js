/*
Rafaela Oliveira tem 23 anos, pesa 44 kg
tem 1,57 de altura e seu IMC é de 17,85. 
Rafaela nasceu em 1999.
*/

const nome = 'Rafaela';
const sobrenome = 'Oliveira';
const idade = 23;
const peso = 44;
const altura = 1.57;
let indiceMassaCorporal = 0;
let anoNascimento = 0;
let anoAtual = 2022

indiceMassaCorporal = peso / (altura * altura);
anoNascimento = anoAtual - idade;

// Modo tradicional

/* console.log (nome, sobrenome, 'tem', idade,'anos, pesa', peso, 'kg');
console.log ('Tem', altura, 'de altura e seu Índice de Massa Corporal é de' , indiceMassaCorporal);
console.log (nome, 'nasceu em', anoNascimento);
*/

// Modo Concatenação

/* console.log (nome + ' ' + sobrenome + ' tem ' + idade + ' anos, pesa ' + peso + ' kg ');
console.log ('Tem ' + altura + ' de altura e seu Índice de Massa Corporal é de ' + indiceMassaCorporal); 
console.log (nome + ' nasceu em ' + anoNascimento);
*/

// Modo Template String (Melhor forma)

console.log (`${nome} ${sobrenome} tem ${idade} anos pesa ${peso} kg.`); 
console.log (`Tem altura de ${altura} e seu Índice de Massa Corporal é de ${indiceMassaCorporal}.`);
console.log (`${nome} nasceu em ${anoNascimento}.`);
