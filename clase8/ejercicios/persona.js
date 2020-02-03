class Persona {
  constructor(nombre, edad, paisNacimiento) {
    this.nombre = nombre;
    this.edad = edad;
    this.paisNacimiento = paisNacimiento;
  }

  presentarse() {
    console.log(`Hola soy ${this.nombre}, tengo ${this.edad} años y soy de ${this.paisNacimiento}`);
  }

  esMasViejo(persona) {
    if(this.edad > persona.edad) {
      return true;
    }
    return false;
  }

  esTocayo(persona) {
    if(this.nombre == persona.nombre) {
      return true;
    }
    return false;
  }

  viveEnPaisIberico() {
    var paises = ['España', 'Portugal', 'Andorra'];
    if(paises.indexOf(this.paisNacimiento) == -1) {
      return false;
    }
    return true;
  }
}

var persona1 = new Persona('Pepe', 43, "Argentina");
var persona2 = new Persona('Luis', 31, "España");

persona1.presentarse();
persona2.presentarse();
if(persona1.esMasViejo(persona2)) {
  console.log(persona1.nombre + ' es más viejo que ' + persona2.nombre);
} else {
  console.log(persona1.nombre + ' NO!! es más viejo que ' + persona2.nombre);
}

if(persona1.esTocayo(persona2)) {
  console.log(persona1.nombre + ' se llama igual que ' + persona2.nombre);
} else {
  console.log(persona1.nombre + ' tiene un nombre distinto que ' + persona2.nombre);
}

if(persona2.viveEnPaisIberico()) {
  console.log(persona1.nombre + ' vive en península');
} else {
  console.log(persona1.nombre + ' NO vive en península');
}
