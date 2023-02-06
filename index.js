/*Importacion de clases*/
import { Cliente } from './cliente.js'
import { CuentaCorriente } from './cuentaCorriente.js'
import { CuentaAhorro } from './cuentaAhorro.js'


const cliente = new Cliente('Elizabeth', '165498795', '654679865');
console.log(cliente);

const cuentaDeEli = new CuentaAhorro(cliente, '1', '001', 0);
console.log(cuentaDeEli);

let saldo = cuentaDeEli.verSaldo();

saldo = cuentaDeEli.depositoEnCuenta(500);

const cliente02 = new Cliente('Pablo', '165498568', '654687942');
console.log(cliente02);

const cuentaDePablo = new CuentaCorriente( cliente02, '2', '002');
console.log(cuentaDePablo);

cuentaDePablo.cliente = 0;
console.log(cuentaDePablo.cliente);

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