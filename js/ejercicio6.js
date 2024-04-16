/*
6- Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, luego crear una función para calcular su perímetro y mostrarlo por pantalla.
 */

let altura = 0;
let largo = 0;
let perimetro = 0;

function ingresoNum(msg) {
  let num = 0;

  do {
    num = prompt(msg);

    if (num === null) {
      ("No ingreso nada");
    } else if (isNaN(num) || num.trim() === "") {
      ("No ingreso un numero");
    } else {
      break;
    }
  } while (true);

  return num;
}

altura = ingresoNum("Ingresa la altura del rectangulo");
largo = ingresoNum("Ingresa el largo del rectangulo");

perimetro = altura * 2 + largo * 2;

alert(`El perimetro del rectangulo es de ${perimetro}`);
