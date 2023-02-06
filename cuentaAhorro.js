import { Cuenta } from "./cuenta.js";

export class CuentaAhorro extends Cuenta {
    constructor(cliente, numero, agencia, saldo) {
        super(cliente, numero, agencia, saldo);
    }
}