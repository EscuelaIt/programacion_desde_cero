class Examen {
  constructor(nombre, nota) {
    this.nombre = nombre;
    this.nota = nota;
  }

  esAprobado() {
    // if(this.nota >= 5) {
    //   return true;
    // }
    // return false;
    // return (this.nota >= 5) ? true : false; 
    return this.nota >= 5;
  }

  muestrate() {
    console.log(`Examen ${this.nombre} ha obtenido nota ${this.nota}`);
  }
}

var ex1 = new Examen('mates', 4);
ex1.muestrate();
console.log(ex1.esAprobado());

class Evaluacion {
  constructor() {
    this.examenes = [];
  }

  anadirExamen(nombre, nota) {
    var examen = new Examen(nombre, nota);
    this.examenes.push(examen);
  }

  mostrarCalificaciones() {
    this.examenes.forEach( function(examen) {
      examen.muestrate();
    });
  }
}

var trimestre = new Evaluacion();
trimestre.anadirExamen('Lengua', 4);
trimestre.anadirExamen('Matemáticas', 9);
trimestre.anadirExamen('Sociales', 6);
trimestre.anadirExamen('Naturales', 7);
trimestre.mostrarCalificaciones();