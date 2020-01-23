// var aleat = Math.random() * 10;
// aleat = Math.floor(aleat) + 1;

function aleatorio(inferior, superior) {
  var numPosibilidades = superior - inferior + 1;
  var aleat = Math.random() * numPosibilidades;
  aleat = Math.floor(aleat) + inferior;
  return aleat;
}

// var numero = aleatorio(5, 9);
// console.log(numero);

var aleatorios = [];
for(var i = 1; i <= 1000; i++) {
  var aleat = aleatorio(1, 2);
  aleatorios.push(aleat);
}

var apariciones = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
for(var i = 0; i < aleatorios.length; i++) {
  var actual = aleatorios[i]; // 1 , 2 ... 9,  10
  var indice = actual - 1; // 0, 1, 2 ... 9
  apariciones[indice]++;
}

console.log(apariciones);