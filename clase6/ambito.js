function ambito() {
  var local = 10;
  console.log('Dentro de la función ', local);
  console.log('dentro de la función (accedo a global)', global);
  global = 100;
  otra = 'hola';
}

var global = 60;
console.log(global);

ambito();

console.log(global);
console.log(otra);

for(let x = 10; x < 20; x += 3) {
  console.log(x);
}

var z = 10;
while(z < 100) {
  let entero = 23;
  z += entero;
}

// Estas dos variables declaradas con let no son accesibles
// console.log('---', x);
// console.log('-----', entero);
