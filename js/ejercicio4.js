/*
4- Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una cadena de texto que indica si el número es par o impar. 
Mostrar por pantalla el resultado devuelto por la función.
*/

let res = "";
let entero = "";

function par(numero) {
  if (numero % 2 === 0) {
    return "El numero es par";
  } else {
    return "El numero es impar";
  }
}

do {
  entero = prompt("Ingresa un numero");

  if (isNaN(entero)) {
    alert("No ingreso un numero");
  } else if (entero === null || entero === "") {
    alert("No ingreso nada");
  } else {
    break;
  }
} while (true);

res = par(entero);
alert(res);
