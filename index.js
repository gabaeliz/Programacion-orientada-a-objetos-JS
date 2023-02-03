/*Importacion de clases*/
import { Cliente } from './cliente.js'
//import { CuentaCorriente } from './cuentaCorriente.js'
//import { CuentaAhorro } from './cuentaAhorro.js'
import { Cuenta } from './cuenta.js';

const cliente = new Cliente('Elizabeth', '165498795', '654679865');
console.log(cliente);

const cuentaDeEli = new Cuenta('Corriente', cliente, '1', '001', 0);
console.log(cuentaDeEli);

//cuentaDeEli.#saldo = 150;
let saldo = cuentaDeEli.verSaldo();
//console.log('El saldo actual es ' + saldo);

saldo = cuentaDeEli.depositoEnCuenta(500);
//console.log('El saldo actual es ' + saldo);

/*saldo = cuentaDeEli.retirarDeCuenta(300);
console.log('El saldo actual es ' + saldo);*/

const cliente02 = new Cliente('Pablo', '165498568', '654687942');
console.log(cliente02);

const cuentaDePablo = new Cuenta('Corriente', cliente02, '2', '002', 0);
console.log(cuentaDePablo);

cuentaDePablo.cliente = 0;
console.log(cuentaDePablo.cliente);

// cuentaDeEli.transferirParaCuenta(100, cuentaDePablo);

// const saldoPablo = cuentaDePablo.verSaldo();

// console.log('El saldo actual (Cuenta Pablo) ' + saldoPablo);

// const saldoEli = cuentaDeEli.verSaldo();
// console.log('El saldo actual (cuenda de Eli ' + saldoEli);

// console.log(cuentaDePablo);

//console.log(CuentaCorriente.cantidadCuentas);

const cuentaAhorroEli = new Cuenta('Ahorro', cliente, '5462264', '001', 0);
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