/*
5- Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. 
A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.
*/

let texto = "";
let arrayLetras = [];
let mayus = false;
let minus = false;

function contieneMayus() {
  let res = false;

  for (i = 0; i < arrayLetras.length; i++) {
    if (arrayLetras[i] === arrayLetras[i].toUpperCase()) {
      res = true;
    }
  }

  if (res === true) {
    return true;
  } else {
    return false;
  }
}

function contieneMinus() {
  let res = false;

  for (i = 0; i < arrayLetras.length; i++) {
    if (arrayLetras[i] === arrayLetras[i].toLowerCase()) {
      res = true;
    }
  }

  if (res === true) {
    return true;
  } else {
    return false;
  }
}

do {
  texto = prompt("Ingresa una cadena de texto");

  if (texto === null || texto.trim() === "") {
    alert("No ingreso nada");
  } else {
    break;
  }
} while (true);

arrayLetras = Array.from(texto);

mayus = contieneMayus();
minus = contieneMinus();

if (mayus === true && minus === true) {
  alert("La cadena de texto contiene mayusculas y minusculas");
} else if (mayus === true) {
  alert("La cadena de texto contiene solo mayusculas");
} else {
  alert("La cadena de texto contiene solo minusculas");
}
