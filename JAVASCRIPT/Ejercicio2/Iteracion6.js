// **Iteración #6: Valores únicos**

// Crea una función que reciba por parámetro un array y compruebe si existen elementos duplicados,
// en caso que existan los elimina para retornar un array sin los elementos duplicados.

const duplicates = [
  "sushi",
  "pizza",
  "burger",
  "potatoe",
  "pasta",
  "ice-cream",
  "pizza",
  "chicken",
  "onion rings",
  "pasta",
  "soda",
];

const removeDuplicates = (array) => {
  const comidas = [];

  for (i = 0; i < array.length; i++) {
    if (!comidas.includes(array[i])) {
      comidas.push(array[i]);
    }
  }
  return comidas;
};

console.log(removeDuplicates(duplicates));
