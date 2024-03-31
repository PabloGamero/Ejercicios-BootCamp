// Haz un bucle y muestra por consola todos aquellos
// valores del array que incluyan la palabra "Camiseta". Usa la función .includes de javascript.

const products = [
  "Camiseta de Pokemon",
  "Pantalón coquinero",
  "Gorra de gansta",
  "Camiseta de Basket",
  "Cinrurón de Orión",
  "AC/DC Camiseta",
];

const mostrarCamiseta = (array) => {
  for (i = 0; i < products.length; i++) {
    if (array[i].includes("Camiseta")) {
      console.log(array[i]);
    }
  }
};
mostrarCamiseta(products);
