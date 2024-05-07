/*
5- Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. 
A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.
*/

let texto = "";

do {
  texto = prompt("Ingresa una cadena de texto");

  if (texto === null || texto.trim() === "") {
    alert("No ingreso nada");
  } else if (!isNaN(texto)) {
    alert("Ingreso solo numeros");
  } else {
    break;
  }
} while (true);

if (texto === texto.toUpperCase()) {
  alert("La cadena de texto contiene solo mayusculas");
} else if (texto === texto.toLowerCase()) {
  alert("La cadena de texto contiene solo minusculas");
} else {
  alert("La cadena de texto contiene mayusculas y minusculas");
}
