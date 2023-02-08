/*Importacion de clases*/
import { Cliente } from './cliente.js';
import { CuentaCorriente } from './cuentas/cuentaCorriente.js';
import { CuentaAhorro } from './cuentas/cuentaAhorro.js';
import { Cuenta } from './cuentas/cuenta.js';
import { CuentaNomina } from './cuentas/cuentaNomina.js';
import { Gerente } from './empleados/gerente.js';
import { Director } from './empleados/director.js';
import { Empleado } from './empleados/empleado.js';
import { SistemaAutentificacion } from './sistemaAutentificacion.js';


const cliente = new Cliente('Elizabeth', '165498795', '654679865');
cliente.asignarClave('12548');
const cuentaDeEli = new CuentaAhorro(cliente, '1', '001', 0);

let saldo = cuentaDeEli.verSaldo();
saldo = cuentaDeEli.depositoEnCuenta(500);

const cliente02 = new Cliente('Pablo', '165498568', '654687942');
const cuentaDePablo = new CuentaCorriente( cliente02, '2', '002');
cuentaDePablo.cliente = 0;

const cuentaAhorroEli = new CuentaAhorro(cliente, '5462264', '001', 0);
console.log(cuentaAhorroEli);

/*Cuenta corriente*/
// cuentaDeEli.depositoEnCuenta(1000);
// console.log(cuentaDeEli.verSaldo());
// cuentaDeEli.retirarDeCuenta(150);
// console.log(cuentaDeEli.verSaldo());

/*Cuenta de ahorro*/
// cuentaAhorroEli.depositoEnCuenta(400);
// console.log(cuentaAhorroEli.verSaldo());
// cuentaAhorroEli.retirarDeCuenta(50);
// console.log(cuentaAhorroEli.verSaldo());

// const cuentaSimple = new Cuenta(cliente, '098', '003');
// console.log(cuentaSimple);

// const cuentaNominaEli = new CuentaNomina(cliente, '9854', '001', 100);
// cuentaNominaEli.depositoEnCuenta(150);
// console.log(cuentaNominaEli.verSaldo());

// cuentaNominaEli.retirarDeCuenta(50);
// console.log(cuentaNominaEli.verSaldo());



const empleado = new Empleado ('Adhara Bravo', '132457878', 10000);
empleado.asignarClave('15478');
const gerente = new Gerente ('Anali Bravo', '7897987987', 15000);
gerente.asignarClave('65421');
const director = new Director ('Ximena Garcia', '56879892', 25000);
director.asignarClave('89654');
console.log(empleado.verBonificacion());
console.log(gerente.verBonificacion());
console.log(director.verBonificacion());

console.log(SistemaAutentificacion.login(empleado, '15478'));
console.log(SistemaAutentificacion.login(gerente, '65421'));
console.log(SistemaAutentificacion.login(director, '65421'));
console.log(SistemaAutentificacion.login(cliente, '12548'));

