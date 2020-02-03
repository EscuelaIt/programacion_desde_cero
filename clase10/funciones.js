function aleatorio(inferior, superior) {
  var numPosibilidades = superior - inferior + 1;
  var aleat = Math.random() * numPosibilidades;
  aleat = Math.floor(aleat);
  return inferior + aleat;
}

function sacaPalabraAleatoria(palabras) {
  var palabras = ['ahorcado', 'lavadora', 'invierno', 'plastico', 'ordenador', 'colador', 'guantera', 'alimentador', 'calculos'];
  var numeroAleatorio = aleatorio(0, palabras.length - 1);
  return palabras[numeroAleatorio];
}

function introducirLetra(palabraEscogida, aciertos, numFallos, maxFallos) {
  var mensaje = componerMensaje(palabraEscogida, aciertos, numFallos, maxFallos);
  console.log(mensaje);
  do {
    var letra = prompt(mensaje);
  } while(! esValida(letra));
  letra = letra.toLowerCase();
  return letra;
}

function codificaPalabra(palabra, aciertos) {
  var texto = '';
  for(var i = 0; i < palabra.length; i++) {
    var letraActual = palabra[i];
    if(aciertos.indexOf(letraActual) != -1) {
      texto += letraActual + ' ';
    } else {
      texto += '_ ';
    }
  }
  return texto;
}

function esValida(letra, abecedario) {
  if(! letra) {
    // estoy asegurando que la letra no sea null
    return false;
  }
  letra = letra.toUpperCase();
  if(abecedario.indexOf(letra) != -1) {
    return true;
  }
  return false;
}

function esAcierto(letra, palabra) {
  if(palabra.indexOf(letra) == -1) {
    return false;
  }
  return true;
}

function juegoFinalizado(palabraEscogida, aciertos, numFallos, maxFallos) {
  if(numFallos == maxFallos) {
    return true;
  }
  if(estanTodasLasLetras(palabraEscogida, aciertos)) {
    return true;
  }
  return false;
}

function estanTodasLasLetras(palabra, arrayLetras) {
  for(var i = 0; i < palabra.length; i++) {
    var letraActualDePalabra = palabra[i];
    if(arrayLetras.indexOf(letraActualDePalabra) == -1) {
      return false;
    }
  }
  return true;
}
