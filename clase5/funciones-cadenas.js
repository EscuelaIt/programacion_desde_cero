
var cadena = 'Hola EscuelaIT escuelait';
cadena = cadena.toUpperCase();
console.log(cadena);
cadena = cadena.toLowerCase();
console.log(cadena);
cadena = cadena.replace('escuelait', 'Escuela IT');
console.log(cadena);
console.log(cadena.indexOf('Escuela'));

var palabras = cadena.split(' ');
console.log(palabras);
console.log(palabras.join('-'));

var cadenaAlterada = cadena.split('a').join('u');
console.log(cadenaAlterada);
