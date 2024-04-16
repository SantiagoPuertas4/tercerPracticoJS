/*
3- Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la función Math.random para obtener números aleatorios entre 1 y 6 para cada uno de los lanzamientos de los dados. 
Sumar el resultado de lanzar dos dados y anotar en un array el número de apariciones de dicha suma, repitiendo 50 veces esta operación.
*/

let resultados = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let resultadosTexto = "";
let num = 0;

function numeroAleatorio() {
  let numero = 0;
  numero = Math.random() * 6;

  return numero;
}

function dados() {
  let dado1 = 0;
  let dado2 = 0;
  let res = 0;

  dado1 = numeroAleatorio();
  dado2 = numeroAleatorio();
  res = dado1 + dado2;

  res = Math.round(res);

  return res;
}

for (i = 0; i < 50; i++) {
  num = dados();

  resultados[num] = resultados[num] + 1;
}

for (i = 0; i < 12; i++) {
  resultadosTexto += `Resultado ${i + 1} : ${resultados[i]} veces \n`;
}

alert(resultadosTexto);
