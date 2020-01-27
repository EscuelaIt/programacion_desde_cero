var palabraEscogida;
var aciertos = [];
var numFallos = 0;
var maxFallos = 5;

palabraEscogida = sacaPalabraAleatoria();
console.log(palabraEscogida);

do {
  var letraNueva = introducirLetra(palabraEscogida, aciertos, numFallos, maxFallos);
  console.log('letraNueva', letraNueva);
  if(esAcierto(letraNueva, palabraEscogida)) {
    aciertos.push(letraNueva);
  } else {
    numFallos++;
  }
} while(! juegoFinalizado(palabraEscogida, aciertos, numFallos, maxFallos))

if(estanTodasLasLetras(palabraEscogida, aciertos)) {
  alert(`Has ganado!\nLa palabra era ${palabraEscogida}`);
} else {
  alert(`Lo sentimos estás acabado!\nLa palabra era ${palabraEscogida}`);
}