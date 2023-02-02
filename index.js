/*Importacion de clases*/
import { Cliente } from './cliente.js'
import { CuentaCorriente } from './cuentaCorriente.js'
import { CuentaAhorro } from './cuentaAhorro.js'

const cliente = new Cliente('Elizabeth', '165498795', '654679865');
console.log(cliente);

const cuentaDeEli = new CuentaCorriente(cliente, '1', '001');
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

const cuentaDePablo = new CuentaCorriente(cliente02, '2', '002');
console.log(cuentaDePablo);

cuentaDePablo.cliente = 0;
console.log(cuentaDePablo.cliente);

// cuentaDeEli.transferirParaCuenta(100, cuentaDePablo);

// const saldoPablo = cuentaDePablo.verSaldo();

// console.log('El saldo actual (Cuenta Pablo) ' + saldoPablo);

// const saldoEli = cuentaDeEli.verSaldo();
// console.log('El saldo actual (cuenda de Eli ' + saldoEli);

// console.log(cuentaDePablo);

console.log(CuentaCorriente.cantidadCuentas);

const cuentaAhorroEli = new CuentaAhorro (cliente, '5462264', '001', 0);
console.log(cuentaDeEli);
console.log(cuentaAhorroEli);