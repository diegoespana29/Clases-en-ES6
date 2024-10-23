import Impuestos from './Impuestos.js';

export default class Cliente {
  constructor(nombre, impuesto) {
    this._nombre = nombre;
    this._impuesto = impuesto;
  }


  get nombre() {
    return this._nombre;
  }

  set nombre(value) {
    this._nombre = value;
  }

  calcularImpuesto() {
    const { montoBrutoAnual, deducciones } = this._impuesto;
    return (montoBrutoAnual - deducciones) * 0.21;
  }
}
