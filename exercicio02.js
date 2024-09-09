class ContaCorrente {
    constructor(numeroConta, saldo) {
        this.numeroConta = numeroConta;
        this.saldo = saldo;
    }

    get saldo() {
        return this._saldo;
    }

    set saldo(valor) {
        this._saldo = valor;
    }

    depositar(valor) {
        this._saldo += valor;
    }

    sacar(valor) {
        if (valor <= this._saldo) {
            this._saldo -= valor;
        } else {
            throw new Error("Saldo insuficiente!");
        }
    }

    toString() {
        return `Conta: ${this.numeroConta}\nSaldo: R$ ${this._saldo.toFixed(2)}`;
    }
}