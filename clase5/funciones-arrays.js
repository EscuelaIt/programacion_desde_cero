var lenguajes = [];
lenguajes.push('Java');
lenguajes.push('Javascript');
lenguajes.push('CSS');
lenguajes.push('HTML');

console.log(lenguajes.indexOf('Java'));

console.log(lenguajes.join('-'));

var aleatorios = [];
for(var i = 1; i <= 100000; i++) {
  var aleat = Math.random() * 10;
  aleat = Math.floor(aleat) + 1;
  
  aleatorios.push(aleat);
}

var apariciones = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
for(var i = 0; i < aleatorios.length; i++) {
  var actual = aleatorios[i]; // 1 , 2 ... 9,  10
  var indice = actual - 1; // 0, 1, 2 ... 9
  apariciones[indice]++;
}

console.log(apariciones);
