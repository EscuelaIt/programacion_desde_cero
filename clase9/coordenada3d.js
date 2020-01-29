class Coordenada {
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

class Coordenada3D extends Coordenada {

  constructor(x, y, z) {
    super(x, y);
    this.z = z;
  }

  sumate(coordenada3d) {
    super.sumate(coordenada3d);
    this.z += coordenada3d.z;
  }
}

var miCoordenada3d = new Coordenada3D(3, 4, 6);
var miCoordenada3d_2 = new Coordenada3D(1, 2, 3);
miCoordenada3d.sumate(miCoordenada3d_2);
console.log(miCoordenada3d);