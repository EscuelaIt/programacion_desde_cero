class Tabla {
  constructor(numero) {
    this.numero = numero;
  }

  muestraTabla() {
    this.muestraTablaHastaNum(10);
  }

  muestraTablaHastaNum(destino) {
    for(var i = 1; i <= destino; i++) {
      console.log(`${this.numero} x ${i} = ${this.numero * i}`);
    }
  }
}

var tabla9 = new Tabla(9);
tabla9.muestraTabla();
tabla9.muestraTablaHastaNum(25);
