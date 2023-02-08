//La clave es nuestra interfaz (nuestro punto de acceso) que nos permite acceder a la auntentificacion de los diferentes
//tipos de usuario con lo que contamos
export class SistemaAutentificacion {
    static login(usuario, clave) {
        if ("autenticable" in usuario
            && usuario.autenticable instanceof Function)
            return usuario.autenticable(clave);
        else
            return false;
    }
}