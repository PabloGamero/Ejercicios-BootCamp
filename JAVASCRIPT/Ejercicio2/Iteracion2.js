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
