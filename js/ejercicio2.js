/* 2-  Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo, cuando el usuario selecciona cancelar se debe mostrar el arreglo 
generado, luego realizar las siguientes acciones:

Mostrar la longitud del arreglo.
Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
Añade en última posición la ciudad de París.
Escribe por pantalla el elemento que ocupa la segunda posición.
Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.
 */

let ciudades = [];
let ciudad = "";

function ingreso() {
  do {
    ciudad = prompt("Ingresa el nombre de una ciudad");

    if (ciudad.trim() === "") {
      alert("Nombre vacio");
    } else {
      break;
    }
  } while (true);

  return ciudad;
}

do {
  ciudad = prompt("Ingresa el nombre de una ciudad");

  if (ciudad !== null) {
    ciudades.push(ciudad);
  }
} while (ciudad !== null);

document.write(`El arreglo tiene ${ciudades.length} ciudades </br>`);

if (ciudades.length > 0) {
  document.write(`Elemento primer posicion: ${ciudades[0]} </br>`);

  if (ciudades.length > 2) {
    document.write(`Elemento tercer posicion: ${ciudades[2]} </br>`);
  } else {
    document.write(`No existe tercera posicion </br>`);
  }

  document.write(
    `Elemento ultima posicion: ${ciudades[ciudades.length - 1]}</br>`
  );

  ciudades.pop();
  ciudades.push("París");

  document.write(
    `Elemento ultima posicion: ${ciudades[ciudades.length - 1]}</br>`
  );

  if (ciudades.length > 1) {
    document.write(`Elemento segunda posicion: ${ciudades[1]}</br>`);
    ciudades.slice(1, 1);
    ciudades[1] = "Barcelona";
    document.write(`Elemento segunda posicion: ${ciudades[1]}</br>`);
  } else {
    document.write(`No existe segunda posicion </br>`);
  }
}
