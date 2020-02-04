class MostarPalabra extends HTMLElement {

  codificaPalabra(palabra, aciertos) {
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

  muestra(palabraEscogida, aciertos) {
    var texto = this.codificaPalabra(palabraEscogida, aciertos);
    this.innerHTML = texto;
  }
}

customElements.define('mostrar-palabra', MostarPalabra);