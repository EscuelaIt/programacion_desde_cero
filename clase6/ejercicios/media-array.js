
function mediaArray(array) {
  var suma = 0;
  for( var i = 0; i < array.length; i++) {
    suma += array[i];
  }
  return suma / array.length;
}

var arrayNumeros = [30, 10, 60];
console.log(mediaArray(arrayNumeros));