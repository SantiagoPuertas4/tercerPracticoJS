/*1- Crear un array llamado meses y que almacene el nombre de los doce meses del año. Mostrar por pantalla en forma de lista los doce nombres del arreglo.
 */

let meses = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

function armarListado(meses) {
  let listado = "";

  for (i = 0; i < meses.length; i++) {
    listado += `${i + 1}. ${meses[i]} \n`;
  }

  return listado;
}

alert(armarListado(meses));
