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
