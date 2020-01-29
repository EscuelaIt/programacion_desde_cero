class FechaEspanol {
  constructor() {
    this.fecha = new Date(2018, 5, 6);
  }

  seteaFecha(fecha) {
    if(fecha.anio !== undefined) {
      this.fecha.setFullYear(fecha.anio);
    }
    console.log(fecha.mes);
    if(fecha.mes !== undefined) {
      this.fecha.setMonth(fecha.mes);
    }
    console.log('---', this.fecha.getMonth());
    if(fecha.dia) {
      this.fecha.setDate(fecha.dia);
    }

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
  dia: 10,
  mes: 0
}
fecha.seteaFecha(objetoLiteralCofiguracionFecha);

console.log(fecha.obtenerFechaResumida());
console.log(fecha.obtenerFechaEscrita());


