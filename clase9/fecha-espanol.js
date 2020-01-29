class FechaEspanol {
  constructor() {
    this.fecha = new Date();
  }

  seteaFechaIncorrecto(fecha) {
    if(fecha.anio !== undefined) {
      this.fecha.setFullYear(fecha.anio);
    }
    // he movido el cambio de día a esta posición para evitar lo que me pasó en la clase
    // era lo siguiente: hoy es día 29. Al cambiar el mes primero a febrero del año 1999 (q no es bisiesto)
    // se generaba una fecha no válida (29/02/1999) que equivale a 1 de marzo.
    // Ahora moviendo el cambio de día antes, no me ocurre, porque primero cambio el día a 10 y luego cambio el mes y no se me va a marzo
    // De todos modos esta manera de operar también puede dar problemas, por cambiar primero el día estando un mes que no tenga válidez
    // Habría que cambiar todos los valores a la vez para no tener problemas de este estilo
    if(fecha.dia) {
      this.fecha.setDate(fecha.dia);
    }
    if(fecha.mes !== undefined) {
      this.fecha.setMonth(fecha.mes);
    }
  }

  seteaFecha(fecha) {
    if(fecha.anio === undefined) {
      fecha.anio = this.fecha.getFullYear();
    }
    if(fecha.mes === undefined) {
      fecha.mes = this.fecha.getMonth();
    }
    if(fecha.dia === undefined) {
      fecha.dia = this.fecha.getDate();
    }
    this.fecha = new Date(fecha.anio, fecha.mes, fecha.dia, this.fecha.getHours(), this.fecha.getMinutes(), this.fecha.getSeconds());
  }

  // 29/1/2020
  obtenerFechaResumida() {
    var dia = this.fecha.getDate();
    var mes = this.fecha.getMonth() + 1;
    var anio = this.fecha.getFullYear();
    return `${dia}/${mes}/${anio}`;
  }

  obtenerFechaEscrita() {
    var diasSemana = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'];
    var meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

    var diaSemana = diasSemana[this.fecha.getDay()];
    diaSemana = diaSemana[0].toUpperCase() + diaSemana.slice(1);
    var mes = meses[this.fecha.getMonth()];
    mes = mes.toLowerCase();
    return `${diaSemana} ${this.fecha.getDate()} de ${mes} de ${this.fecha.getFullYear()}`;
  }
}

var fecha = new FechaEspanol();

var objetoLiteralCofiguracionFecha = {
  anio: 1999,
  mes: 2
}
fecha.seteaFecha(objetoLiteralCofiguracionFecha);

console.log('fecha resumida: ', fecha.obtenerFechaResumida());
console.log('fecha escrita: ', fecha.obtenerFechaEscrita());


