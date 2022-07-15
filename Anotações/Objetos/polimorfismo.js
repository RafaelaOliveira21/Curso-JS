// Superclass
function Conta(agencia, conta, saldo) {
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}

Conta.prototype.sacar = function(valor) {
    if(valor > this.saldo) {
        console.log(`Saldo insuficiente: ${this.saldo}`);
        this.verSaldo()
        return;
    }

    this.saldo -= valor;
    this.verSaldo();
};

Conta.prototype.depositar = function(valor) {
    this.saldo += valor;
    this.verSaldo();
};
Conta.prototype.verSaldo = function() {
    console.log(
        `Agência/Conta: ${this.agencia}/${this.conta} | ` +
        `Saldo: R$ ${this.saldo.toFixed(2)}`
    );
};

function ContaCorrente(agencia, conta, saldo, limite) {
    Conta.call(this, agencia, conta, saldo);
    this.limite = limite;
}

ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.constructor = ContaCorrente;

ContaCorrente.prototype.sacar = function(valor) {
    if(valor > (this.saldo + this.limite)) {
        console.log(`Saldo insuficiente: ${this.saldo}`);
        this.verSaldo()
        return;
    }

    this.saldo -= valor;
    this.verSaldo();
};

function ContaPoupanca(agencia, conta, saldo, limite) {
    Conta.call(this, agencia, conta, saldo);
    this.limite = limite;
}

ContaPoupanca.prototype = Object.create(Conta.prototype);
ContaPoupanca.constructor = ContaPoupanca;

const contaCorrent = new ContaCorrente(11, 22, 0, 100);
contaCorrent.depositar(10);
contaCorrent.sacar(10);
contaCorrent.sacar(1);

console.log('====================================')

const contaPoupa = new ContaPoupanca(11, 22, 0, 100);
contaPoupa.depositar(10);
contaPoupa.sacar(110);
contaPoupa.sacar(1);

// console.log(conta1);

/* const conta1 = new Conta(11, 22, 10);
conta1.depositar(11);
conta1.depositar(10);
conta1.sacar(30);
conta1.sacar(0.01); */

/* const contaCorrent = new ContaCorrente(11, 22, 0, 100);
contaCorrent.depositar(10);
contaCorrent.sacar(110);
contaCorrent.sacar(1); */
