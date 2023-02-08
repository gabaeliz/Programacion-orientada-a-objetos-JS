import { Empleado } from "./empleado.js";

export class Director extends Empleado {
    constructor(nombre, dni) {
        super(nombre, dni);
    }
}