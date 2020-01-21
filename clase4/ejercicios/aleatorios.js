var cuenta = 1000;
var intentos = 0;
do {
  var aleat = Math.random() * 10;
  aleat = Math.floor(aleat) + 1;
  if(cuenta < aleat) {
    console.log('voy a deshechar ' + aleat);
    intentos ++;
    if(intentos == 3) {
      break;
    }
    continue;
  } else {
    intentos = 0;
  }
  cuenta -= aleat;
  console.log(cuenta);
} while(cuenta > 0);

