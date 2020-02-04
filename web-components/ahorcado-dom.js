document.addEventListener('DOMContentLoaded', function() {

  // DECLARACIÓN DE VARIABLES
  var abecedario = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var palabras = ['ahorcado', 'lavadora', 'invierno', 'plastico', 'ordenador', 'colador', 'guantera', 'alimentador', 'calculos'];
  var aciertos, numFallos, maxFallos, palabraEscogida;

  // INICIALIZACIÓN DEL JUEGO
  crearBotonesLetras();
  iniciarJuego();

  document.getElementById('reiniciar').addEventListener('click', function() {
    iniciarJuego();
  }); 

  function crearBotonesLetras() {
    var letrasContainer = document.getElementById('letras');

    abecedario.forEach(function(letra) {
      var boton = document.createElement('button');
      boton.addEventListener('click', seleccionaLetra);
      boton.innerText = letra;
      letrasContainer.appendChild(boton);
    });
  }

  function iniciarJuego() {
    aciertos = [];
    numFallos = 0;
    maxFallos = 5;

    document.getElementById('juego').style.display = 'block';
    document.getElementById('reiniciar').style.display = 'none';
    document.getElementById('mensajeFinal').innerText = '';

    palabraEscogida = palabras[aleatorio(0,palabras.length - 1)];
    console.log(palabraEscogida);
    muestraCodigoPalabra();
    muestraFallos();
  }

  function muestraCodigoPalabra() {
    // var palabraContainer = document.getElementById('palabra');
    // var codigo = codificaPalabra(palabraEscogida, aciertos);
    // palabraContainer.innerText = codigo;
    document.querySelector('mostrar-palabra').muestra(palabraEscogida, aciertos);
  }

  function muestraFallos() {
    var fallosContainer = document.getElementById('fallos');
    if(numFallos == 0) {
      fallosContainer.innerText = 'Aún no has fallado nada';  
    } else {
      fallosContainer.innerText = `Tienes ${numFallos} fallos acumulados de ${maxFallos} posibles`;
    }
  }

  function seleccionaLetra(e) {
    var letraNueva = e.target.innerText;
    letraNueva = letraNueva.toLowerCase();
    console.log(letraNueva);
    if(esAcierto(letraNueva, palabraEscogida)) {
      aciertos.push(letraNueva);
      muestraCodigoPalabra();
    } else {
      numFallos++;
      muestraFallos();
    }
    if(juegoFinalizado(palabraEscogida, aciertos, numFallos, maxFallos)) {
      if(estanTodasLasLetras(palabraEscogida, aciertos)) {
        mostrarMensajeFinal(`Has ganado!\nLa palabra era ${palabraEscogida}`);
      } else {
        mostrarMensajeFinal(`Lo sentimos estás acabado!\nLa palabra era ${palabraEscogida}`);
      }
    }
  }

  function mostrarMensajeFinal(msg) {
    var mensajeFinal = document.getElementById('mensajeFinal');
    mensajeFinal.innerText = msg;
    document.getElementById('juego').style.display = 'none';
    document.getElementById('reiniciar').style.display = 'inline-block';
  }

});

// (function($) {
//   // $ siembre equivale a jQuery
// })(jQuery);
