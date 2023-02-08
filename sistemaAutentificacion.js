export class SistemaAutentificacion {
    static login(empleado, clave) {
        return empleado.clave == clave;
    }
}