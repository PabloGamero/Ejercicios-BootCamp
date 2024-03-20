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
