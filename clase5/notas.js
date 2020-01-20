var notas = [9, 8.5, 7.1, 6, 4, 9, 9.5, 10, 6.9];

var suma = 0;
for(var i = 0; i < notas.length; i++) {
  suma += notas[i];
  console.log('suma parcial: ', suma);
}
var media = suma / notas.length;
media = Math.round(media * 10) / 10;

console.log(media);

var suspenso = false;
var i = 0;
do {
  if(notas[i] < 5) {
    suspenso = true;
  }
  i++;
} while(! suspenso && i < notas.length);


// for(var i = 0; i < notas.length; i++) {
//   if(notas[i] < 5) {
//     suspenso = true;
//     break;
//   }
// }


//if(suspenso == false) {
if(! suspenso) {
  console.log('El alumno está aprobado');
} else {
  console.log('El alumno está suspenso');
}
