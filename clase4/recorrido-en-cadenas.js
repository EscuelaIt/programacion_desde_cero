var cadena = 'Hola que tal!';
var reverso = '';

// for(var pos = 0; pos < cadena.length; pos++) {
//   console.log(cadena.charAt(pos));
// }

for(var pos = cadena.length; pos >= 0; pos--) {
  reverso = reverso + cadena.charAt(pos);
}
console.log(reverso);
