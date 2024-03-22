// Completa la función que tomando dos números como argumento devuelva el más alto.

function sum(numberOne, numberTwo) {
  if (numberOne > numberTwo) {
    return numberOne;
  } else {
    return numberTwo;
  }
}
console.log(sum(10, 5));

// OTRA RESOLUCION!!!!

// const sum = (numberOne, numberTwo) => {
//   return Math.max(numberOne, numberTwo);
// };
// console.log(sum(2, 6));

// **Iteración #2: Buscar la palabra más larga**

// Completa la función que tomando un array de strings como argumento devuelva el más largo, en caso de que dos strings tenga la misma longitud deberá devolver el primero.

// Puedes usar este array para probar tu función:

const avengers = [
  "Hulk",
  "Thor",
  "IronMan",
  "Captain A.",
  "Spiderman",
  "Captain M.",
];

const pokemons = ["Pikachu", "charmander", "bulbasur", "ditto"];

function findLongestWord(array) {
  let mayor = array[0];
  for (i = 1; i < array.length; i++) {
    if (array[i].length > mayor.length) {
      mayor = array[i];
    }
  }
  return mayor;
}
console.log(findLongestWord(avengers));

console.log(findLongestWord(pokemons));

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

// **Iteración #4: Calcular el promedio**

// Calcular un promedio es una tarea extremadamente común. Puedes usar este array para probar tu función:

const numbers1 = [12, 21, 38, 5, 45, 37, 6];

function average(promedio) {
  let suma = 0;
  for (let i = 0; i < promedio.length; i++) {
    suma = suma + promedio[i];
  }
  return suma / promedio.length;
  // insert code
}
console.log(average(numbers1));

// insert code
