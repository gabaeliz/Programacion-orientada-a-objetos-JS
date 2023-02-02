/*El atributo estatico va a estar accesible a todas las instancias, se atribuye su valor directo en el metodo*/

import { Cliente } from "./cliente.js";

export class CuentaCorriente {
    #cliente;
    numero;
    agencia;
    #saldo;
    static cantidadCuentas = 0;

    set cliente(valor) {
        if (valor instanceof Cliente) //Si el valor recibido es una isntancia del valor cliente, solo en ese punto, se le atribuye la referencia de cliente
            this.#cliente = valor;//asi se protege el atributo cliente, que es un atribut9o privado
    } //No es una funcion como tal

    get cliente() {
        return this.#cliente;
    }//No es una funcion como tal pero en combinacion con un get se puede crear una pseudofuncion

    constructor(cliente, numero, agencia) {//Se ejecuta cada vez que ejecutas una isntancia
        this.cliente = cliente; /*Este cliente va a ser creado en otro punto del codigo y nada mas va a ser relacionado*/
        this.numero = numero;
        this.agencia = agencia;
        this.#saldo = 0;
        CuentaCorriente.cantidadCuentas++;
    }

    depositoEnCuenta(valor) {
        if (valor > 0)
            this.#saldo += valor;
        return this.#saldo;
    }

    retirarDeCuenta(valor) {
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