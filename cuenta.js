import { Cliente } from "./cliente.js";
export class Cuenta {
    #cliente;
    #saldo;

    constructor(cliente, numero, agencia, saldo) {

        // if(this.constructor == Cuenta){
        //     throw new error("No se puede isntanciar objetos de la clase Cuenta");
        // }
        this.numero = numero;
        this.agencia = agencia;
        this.#cliente = cliente;
        this.#saldo = saldo;
    }

    set cliente(valor) {
        if (valor instanceof Cliente)
            this.#cliente = valor;
    }

    get cliente() {
        return this.#cliente;
    }

    depositoEnCuenta(valor) {
        if (valor > 0)
            this.#saldo += valor;
        return this.#saldo;
    }

    //La comision del 5% unicamente se esta aplicando a la cuenta corriente
    retirarDeCuenta(valor) {
        //Se convirtio en un metodo abstracto
        throw new Error('Debe implementar el metodo retirarDeCuenta en su clase');
    }

    //Se define que el metodo es privado
    _retirarDeCuenta(valor, comision) {
        valor = valor * (1 + comision / 100);
        if (valor <= this.#saldo)
            this.#saldo -= valor;
        return this.#saldo;
    }

    verSaldo() {
        return this.#saldo;
    }

    transferirParaCuenta(valor, cuentaDestino) {
        this.retirarDeCuenta(valor);
        cuentaDestino.depositoEnCuenta(valor);
        valor = 200;
        valor = valor * 1000;
    }

    prueba() {
        console.log('Metodo padre');
    }
}