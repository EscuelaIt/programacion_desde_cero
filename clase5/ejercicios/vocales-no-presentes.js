var vocales = ['a', 'e', 'i', 'o', 'u'];

var cadena = 'Esto es una prueba';

for(var i = 0; i < cadena.length; i++) {
  var actual = cadena[i].toLowerCase();
  var posibleIndice = vocales.indexOf(actual);
  console.log(posibleIndice);
  if(posibleIndice != -1) {
    vocales.splice(posibleIndice, 1);
    console.log(vocales);
  }
}

console.log(vocales);
