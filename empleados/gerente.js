import { Empleado } from "./empleado.js";

export class Gerente extends Empleado {
    constructor(nombre, dni) {
        super(nombre, dni);
    }
}