for (let i = 0; i <= 10; i++) {
    const par = i % 2 === 0 ? 'par' : 'impar';
    console.log(i, par);
}

const frutas = ['Maçã', 'Pêra', 'Uva', 'Banana', 'Melancia', 
    'Manga', 'Tamarindo'];
    // console.log(frutas.length);  // Tamanho do Array

for (let i = 0; i < frutas.length; i++) {
    console.log(`Índice ${i}`, frutas[i]);
}
