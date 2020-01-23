function areaCuadrado(lado) {
  lado *= lado;
  console.log(lado);
}

var lado = 5;
areaCuadrado(lado);
console.log('el lado vale ' + lado);

function areaRectangulo(lado1, lado2) {
  var area = lado1 * lado2;
  console.log(area);
}

areaRectangulo(12, 3);