class EntradaDatos {
  static entrarEntero() {
    do {
      var entero = prompt('Dame número entero');
      var convertido = parseInt(entero);
    } while( isNaN(convertido) || entero != convertido)
    return convertido;
  }
}

var numero = EntradaDatos.entrarEntero();
console.log(numero);