export class Cuenta {
    #cliente;
    #saldo;

    constructor(cliente, numero, agencia, saldo) {
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
        _retirarDeCuenta(valor, 0);
    }

    //Se define que el metodo es privado
    _retirarDeCuenta(valor, comision) {
        valor = valor * (1 + comision / 100);
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