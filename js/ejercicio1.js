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

// function obtenerListado() {
//   let texto = "";

//   for (i = 0; i < listaTareas.length - 1; i++) {
//     texto += `${i + 1}. ${listaTareas[i + 1]} \n`;
//   }

//   return texto;
// }

// function listarTareas() {
//   let texto = obtenerListado();
//   alert(texto);
// }
