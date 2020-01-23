function solicitarEntero() {
  do {
    var entero = prompt('Dame un número entero');
    var enteroConvertido = parseInt(entero);  // '45' => 45 --- '45,3' ==> 45 --- 'hlhhll' ==> NaN --- '34dkdkd' ==> 34
    var valido;

    if(entero != enteroConvertido) {
      alert('No era un número entero');
      valido = false;
    } else {
      valido = true;
    }
  } while(! valido);
  return enteroConvertido;
}