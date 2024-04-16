/*
7- Escriba un script que muestre la tabla de multiplicar de un número ingresado por pantalla,
 la creación de la tabla debe ser realizada con una función y mostrar solo los resultados del 1 al 10 del número elegido por el usuario.
*/

let tablaTexto = "";
let numero = 0;
let resultado = 0;

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

function multiplicacion(num, i) {
  let res = 0;
  res = num * i;
  return res;
}

numero = ingresoNum("Ingresa un numero");

for (i = 0; i < 10; i++) {
  resultado = multiplicacion(numero, i + 1);
  tablaTexto += `${numero} * ${i + 1} = ${resultado}\n`;
}
alert(tablaTexto);
