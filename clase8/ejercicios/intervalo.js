class Intervalo {

  constructor(min, max) {
    this.min = min;
    this.max = max;
  }

  contieneA(valor) {
    return (valor >= this.min && valor <= this.max);
  }
}

var intervalo = new Intervalo(5, 10);
console.log(intervalo.contieneA(23));
console.log(intervalo.contieneA(7));