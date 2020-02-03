
var intentos = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

var numIntentos = 0;
do {
  numIntentos++;
  var aleat = Math.random() * 10;
  aleat = Math.floor(aleat) + 1;
  console.log(aleat);
  if(intentos[aleat - 1] == 0) {
    intentos[aleat - 1] = numIntentos;
  }
} while(intentos.indexOf(0) != -1);

console.log(intentos);