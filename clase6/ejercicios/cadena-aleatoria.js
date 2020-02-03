function aleatorio(inferior, superior) {
  var numPosibilidades = superior - inferior + 1;
  var aleat = Math.random() * numPosibilidades;
  aleat = Math.floor(aleat) + inferior;
  return aleat;
}

function cadenaAleatoria(cadenas) {
  var indice = aleatorio(0, cadenas.length - 1);
  return cadenas[indice];
}

var cadenas = ['dfdsf', 'otra', 'mas', 'menos', 'fssss', '34343', '222qqq'];
console.log(cadenaAleatoria(cadenas));
