/*El atributo estatico va a estar accesible a todas las instancias, se atribuye su valor directo en el metodo*/
import { Cliente } from "../cliente.js";
import { Cuenta } from "./Cuenta.js";

export class CuentaCorriente extends Cuenta {
    static cantidadCuentas = 0;

    constructor(cliente, numero, agencia) {
        super(cliente, numero, agencia, 0);//llamamos al constructor de la clase padre (Cuenta)
        CuentaCorriente.cantidadCuentas++;
    }

    retirarDeCuenta(valor) {
        super._retirarDeCuenta(valor, 5);
    }
}