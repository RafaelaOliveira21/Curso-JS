// IIFE -> Immediately Invoked Function Expression

(function() {
    const sobrenome = 'Rafaela';
    function criaNome(nome) {
        return nome + " " + sobrenome;
    }
    
    function falaNome() {
        console.log(criaNome('Luiz'));
    }
    
    falaNome();
    console.log(idade, peso, altura);
}) (30, 80, 1.80);


