/*
Entre 0 - 11 - Bom Dia
Entre 12 - 17 - Boa Tarde
Entre - 18 - 23 - Boa Noite

If pode ser usado sozinho
Sempre que utilizar a palavra else, precisa-se de um if antes
Pode-se ter vários if's na checagem
Podemos usar condições sem else if, utilizado oapenas if e else 
*/

const hora = 50;

if (hora >= 0 && hora <= 11) {
    console.log('Bom dia');
}
else if (hora >= 12 && hora <= 17) {
    console.log('Boa Tarde');
} 
else if (hora >= 18 && hora <= 23) {
    console.log('Boa Noite');
}
else {
    console.log("Olá, o Horario digitado é Inválido");
}

// =====================================================

const tenhoGrana = true;

if (tenhoGrana) {
    console.log ("Vou sair de casa");
}
else {
    console.log ("Não vou sair de casa");
}

// =======================================================

/*
Se (numero >= 0 && numero <= 5) ocorrer, faça isso {código}
Se não, faça isso {código}
*/

const numero = 10;

if (numero >= 0 && numero <= 5) {
    console.log("O número está entre 0 e 5");
}
else if (numero >= 6 && numero <= 8) {
    console.log("O número está entre 6 e 8");
}
else if (numero >= 9 && numero <= 11) {
    console.log("O número está entre 9 e 11");
}
else {
    console.log("O número não está entre 0 e 11");
}