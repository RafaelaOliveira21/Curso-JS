const numero = Number (prompt("Digite um número:")); 
const numeroTitulo = document.getElementById("numero-titulo");
const texto = document.getElementById("texto");

numeroTitulo.innerHTML = numero;

// texto.innerHTML = `<p> Seu numero + 2 é ${numero + 2}. </p>`;

texto.innerHTML = "" ;
texto.innerHTML += `<p> Raiz Quadrada: ${numero ** 0.5}.</p>` ;
texto.innerHTML += `<p> É NaN: ${Number.isNaN(numero)}.</p>` ;
texto.innerHTML += `<p> ${numero} É um Número Inteiro: ${Number.isInteger(numero)}.</p>` ;
texto.innerHTML += `<p> Arredondando Para Baixo: ${Math.floor(numero)}.</p>` ;
texto.innerHTML += `<p> Arredondando Para Cima: ${Math.ceil(numero)}.</p>` ;
texto.innerHTML += `<p> Com Duas Casas Decimais: ${numero.toFixed(2)}.</p>` ;
