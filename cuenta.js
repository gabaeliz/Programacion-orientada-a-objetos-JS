export class Cuenta {
    #cliente;
    #saldo;

    constructor(tipo, cliente, numero, agencia, saldo) {
        this.tipo = tipo;
        this.numero = numero;
        this.agencia = agencia;
        this.#cliente = cliente;
        this.#saldo = saldo;
    }

    depositoEnCuenta(valor) {
        if (valor > 0)
            this.#saldo += valor;
        return this.#saldo;
    }

    //La comision del 5% unicamente se esta aplicando a la cuenta corriente
    retirarDeCuenta(valor) {
        if (this.tipo == 'Corriente')
            valor = valor * 1.05;
        else if (this.tipo == 'Ahorro')
            valor = valor * 1.02;
        if (valor <= this.#saldo)
            this.#saldo -= valor;
        return valor;
    }

    verSaldo() {
        return this.#saldo;
    }

    transferirParaCuenta(valor, cuentaDestino) {
        this.retirarDeCuenta();
        cuentaDestino.depositoEnCuenta(valor);
    }
}