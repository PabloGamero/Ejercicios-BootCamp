// **Iteration #8: Contador de repeticiones**

// Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma.
// Puedes usar este array para probar tu función:

const counterWords = [
  "code",
  "repeat",
  "eat",
  "sleep",
  "code",
  "enjoy",
  "sleep",
  "code",
  "enjoy",
  "upgrade",
  "code",
];

function palabrasRepetidas(counterWords) {
  let contadorDePalabras = {};

  for (let i = 0; i < counterWords.length; i++) {
    let palabraComprobar = counterWords[i];

    // contadorDePalabras = code

    if (contadorDePalabras[palabraComprobar] === undefined) {
      contadorDePalabras[palabraComprobar] = 1;
    } else contadorDePalabras[palabraComprobar]++;
  }
  return contadorDePalabras;
}

let resultado = palabrasRepetidas(counterWords);
console.log(resultado);
// insert code
