/*Importacion de clases*/
import { Cliente } from './cliente.js'
import { CuentaCorriente } from './cuentaCorriente.js'
import { CuentaAhorro } from './cuentaAhorro.js'
import { Cuenta } from './cuenta.js';
import { CuentaNomina } from './cuentaNomina.js';

const cliente = new Cliente('Elizabeth', '165498795', '654679865');
const cuentaDeEli = new CuentaAhorro(cliente, '1', '001', 0);

let saldo = cuentaDeEli.verSaldo();
saldo = cuentaDeEli.depositoEnCuenta(500);

const cliente02 = new Cliente('Pablo', '165498568', '654687942');
const cuentaDePablo = new CuentaCorriente( cliente02, '2', '002');
cuentaDePablo.cliente = 0;

const cuentaAhorroEli = new CuentaAhorro(cliente, '5462264', '001', 0);
console.log(cuentaAhorroEli);

/*Cuenta corriente*/
cuentaDeEli.depositoEnCuenta(1000);
console.log(cuentaDeEli.verSaldo());
cuentaDeEli.retirarDeCuenta(150);
console.log(cuentaDeEli.verSaldo());

/*Cuenta de ahorro*/
cuentaAhorroEli.depositoEnCuenta(400);
console.log(cuentaAhorroEli.verSaldo());
cuentaAhorroEli.retirarDeCuenta(50);
console.log(cuentaAhorroEli.verSaldo());

const cuentaSimple = new Cuenta(cliente, '098', '003');
console.log(cuentaSimple);

const cuentaNominaEli = new CuentaNomina(cliente, '9854', '001', 100);
cuentaNominaEli.depositoEnCuenta(150);
console.log(cuentaNominaEli.verSaldo());

cuentaNominaEli.retirarDeCuenta(50);
console.log(cuentaNominaEli.verSaldo());