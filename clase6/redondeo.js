function redondearDosDecimales(valor) {
  valor = Math.round(valor * 100) / 100;  // 10 * 10 --- 3 decimales 10 * 10 * 10
  return valor;
}

var numero = 9.6723;
numeroRedondeado = redondearDosDecimales(numero);
console.log(numeroRedondeado);

var numero = 6.986;
numeroRedondeado = redondearDosDecimales(numero);
console.log(numeroRedondeado);

function redondearDecimales(valor, numeroDecimales) {
  var factorRedondeo = 10 ** numeroDecimales;
  valor =  Math.round(valor * factorRedondeo) / factorRedondeo;
  return valor;
}

var numero = 6.14634;
numeroRedondeado = redondearDecimales(numero, 1);
console.log(numeroRedondeado);
numeroRedondeado = redondearDecimales(numero, 2);
console.log(numeroRedondeado);
numeroRedondeado = redondearDecimales(numero, 3);
console.log(numeroRedondeado);