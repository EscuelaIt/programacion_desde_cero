class Perro {
  constructor(nombre) {
    this.nombre = nombre;

  }

  ladra() {
    console.log('guau guau!!');
  }
}

class PerroGuia extends Perro {

  constructor(nombre, dueno) {
    super(nombre);
    this.dueno = dueno;
  }

  guiarPersonaInvidente() {
    console.log('soy ' + this.nombre + ' y estoy paseando ' + this.dueno);
  }
}

var perroGuia1 = new PerroGuia('Tobi', 'Maria');
perroGuia1.ladra();
perroGuia1.guiarPersonaInvidente();