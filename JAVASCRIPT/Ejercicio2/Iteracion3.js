// **Iteración #3: Calcular la suma**

// Calcular una suma puede ser tan simple como iterar sobre un array y sumar cada uno de los elementos.
// Implemente la función denominada sumNumbers que toma un array de números como argumento y devuelve la suma de todos los números de la matriz.

// const array = [1, 2, 3, 5, 45, 37, 58];

// const suma1 = array.reduce((valorAnterior, valorActual) => {
//   return valorAnterior + valorActual;
// }, 0);

// console.log(suma1);

const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumAll(numbers) {
  let suma = 0;
  for (let i = 0; i < numbers.length; i++) {
    suma = suma + numbers[i];
  }
  console.log(suma);
}
sumAll(numbers);
