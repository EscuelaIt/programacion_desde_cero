
class Coordenada {

  // código de la clase

  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  definete() {
    console.log('Soy una coordenada! estoy en ' + this.x + ' , ' + this.y);
  }

  irA(x, y) {
    this.x = x;
    this.y = y;
  }

  irACoordenada(coordenada) {
    this.x = coordenada.x;
    this.y = coordenada.y;
  }

  sumate(coordenada) {
    this.x += coordenada.x;
    this.y += coordenada.y;
  }
}

var coordenada1 = new Coordenada(34, 78);
var coordenada2 = new Coordenada(7, 0);

coordenada1.irA(3, 999);
console.log(coordenada1);

coordenada1.irACoordenada(coordenada2);
console.log(coordenada1);

coordenada1.sumate(coordenada2);
console.log('resultado de la suma', coordenada1);

coordenada1.definete();
coordenada2.definete();

var miArrayCoordenadas = [new Coordenada(4, 6), new Coordenada(9, 1)];
console.log(miArrayCoordenadas);


// como se haría en prog. estructurada
var c1 = [7, 0];
var c2 = [1, 1];
function suma(c1, c2) {
  return [ c1[0] + c2[0], c1[1] + c2[1]];
}
var resultado = suma(c1, c2);
console.log(resultado);

