// const tresHoras = 60 * 60 * 3 * 1000;
// const umDia = 60 * 60 * 24 * 1000;
// const data = new Date(0 + tresHoras + umDia);   // 01/01/1970 Timestamp unix ou época unix
// console.log(data.toString());

// Ano, Mes, Dia, Hora, Minuto, Segundo, Milissegundo
// const data = new Date(2022, 5, 20, 8, 47, 45, 500);
// const data = new Date('2022-04-20 20:20:59');
// console.log(data.toString(1655726750009))

// console.log('Dia', data.getDate());
// console.log('Mês', data.getMonth() + 1); // Mês começa no zero
// console.log('Ano', data.getFullYear());
// console.log('Hora', data.getHours());
// console.log('Min', data.getMinutes());
// console.log('Seg', data.getSeconds());
// console.log('ms', data.getMilliseconds());
// console.log('Dia Semana', data.getDay()); // 0 - Domingo, 6 - Sábado
// console.log(data.toString()); 
// console.log(Date.now());

function zeroAEsquerda (num) {
    return num >= 10 ? num : `0${num}`;
}

function formataData(data) {
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1); 
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`
}

const data = new Date();
const dataBrasil = formataData(data);
console.log (dataBrasil);