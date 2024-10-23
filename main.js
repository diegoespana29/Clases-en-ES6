
import Cliente from './Cliente.js';
import Impuestos from './Impuestos.js';


const impuestos = new Impuestos(100000, 20000);


const cliente = new Cliente('Juan Pérez', impuestos);


console.log(`Cliente: ${cliente.nombre}`);
console.log(`Impuesto calculado: ${cliente.calcularImpuesto()}`);
