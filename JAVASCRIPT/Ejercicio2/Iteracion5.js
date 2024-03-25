// **Iteración #5: Calcular promedio de strings**
// Crea una función que reciba por parámetro un array y cuando es un valor number
// lo sume y de lo contrario cuente la longitud del string y lo sume. Puedes usar este array para probar tu función:

const mixedElements = [6, 1, "Rayo", 1, "vallecano", "10", "upgrade", 8, "hub"];

const averageWord = (param) => {
  let sumaNum = 0;
  let sumaArray = 0;
  for (let i = 0; i < param.length; i++) {
    if (typeof param[i] == "number") {
      sumaNum += param[i];
    } else {
      sumaArray += param[i].length;
    }
  }
  const sumTotal = sumaNum + sumaArray;
  return sumTotal;
};
console.log(averageWord(mixedElements));
