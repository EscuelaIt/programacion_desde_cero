function aleatorio(inferior, superior) {
  var numPosibilidades = superior - inferior + 1;
  var aleat = Math.random() * numPosibilidades;
  aleat = Math.floor(aleat) + inferior;
  return aleat;
}

function solicitarEntero() {
  do {
    var entero = prompt('Dame un número entero');
    var enteroConvertido = parseInt(entero);  // '45' => 45 --- '45,3' ==> 45 --- 'hlhhll' ==> NaN --- '34dkdkd' ==> 34
    var valido;

    if(entero != enteroConvertido) {
      alert('No era un número entero');
      valido = false;
    } else {
      valido = true;
    }
  } while(! valido);
  return enteroConvertido;
}

function jugar() {
  var intentos = 0;
  var numeroObjetivo = aleatorio(1, 1000);
  console.log(numeroObjetivo);
  do {
    intentos++;
    var numeroPropuesto = solicitarEntero();
    if(numeroObjetivo - numeroPropuesto > 300) {  // 900 100?
      alert("Es mucho mayor");
      continue;
    }
    if(numeroObjetivo - numeroPropuesto < -200) {  // 100 900?
      alert("Es mucho menor");
      continue;
    }
    if(numeroObjetivo > numeroPropuesto) {
      alert("Es mayor");
      continue;
    } 
    if(numeroObjetivo < numeroPropuesto) {
      alert("Es menor");
      continue;
    }
  } while(numeroPropuesto != numeroObjetivo);
  
  alert(`Bien!! era ${numeroObjetivo}
  Lo adivinaste en ${intentos} intentos.`);
  return intentos;
}

var record = 0;
while(confirm('¿Quieres jugar a adivinar un número?')) {
  var intentosEnElJuego = jugar();
  if(record == 0 || record > intentosEnElJuego) {
    record = intentosEnElJuego;
    alert(intentosEnElJuego + ' es el record actual');
  }
}

