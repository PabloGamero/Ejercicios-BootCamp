import "./TresEnRaya.css";

const template = () => {
  return `
      
   
    <div class="game">
    <h1>3 en raya</h1>
      <div class="table">
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
      </div>
    </div>`;
};

// comprueba si hay una combinacion ganadora con los movimientos utilizados a partir de los indices i,j,k.
function win(movesArray, i, j, k) {
  if (
    movesArray[i] == movesArray[j] &&
    movesArray[j] == movesArray[k] &&
    movesArray[i] != null
  )
    return true;
  return false;
}
// comprueba todas la combinaciones ganadoras, para asi devolver un numero que nos servira para pintar un estilo de linea ganadora u otra.
function numberWin(movesArray) {
  if (win(movesArray, 0, 1, 2)) {
    return 1;
  }
  if (win(movesArray, 3, 4, 5)) {
    return 2;
  }
  if (win(movesArray, 6, 7, 8)) {
    return 3;
  }
  if (win(movesArray, 0, 3, 6)) {
    return 4;
  }
  if (win(movesArray, 1, 4, 7)) {
    return 5;
  }
  if (win(movesArray, 2, 5, 8)) {
    return 6;
  }
  if (win(movesArray, 0, 4, 8)) {
    return 7;
  }
  if (win(movesArray, 2, 4, 6)) {
    return 8;
  }
  return null;
}

const start = () => {
  // Control de turnos de X y O
  let turn = true;
  //crea un listener para cada una de las 9 celdas del juego, para asi identificar de quien es el turno.
  const boxList = document.querySelectorAll(".table .box");
  const movesArray = new Array(9).fill(null);
  boxList.forEach(function (box, index) {
    // "escucha" al hacer click en la celda del juego para pinta una O u X segun corresponda el valor true o false.
    box.addEventListener(
      "click",
      function () {
        if (turn) {
          box.classList.add("mark-x");
        } else {
          box.classList.add("mark-o");
        }
        movesArray[index] = turn;
        const mayWinner = numberWin(movesArray);
        // mira si el mayWinner es true para determinar un ganador y pintar la linea ganadora en caso de que haya.
        if (mayWinner) {
          const lineWinner = document.createElement("div");
          lineWinner.classList.add("line");
          lineWinner.classList.add("line-winner-" + mayWinner);
          document.querySelector(".table").append(lineWinner);
        }
        turn = !turn;
      },
      { once: true }
    );
  });
};

// exporta el template de arriba para pintarlo.

export const printTresEnRaya = () => {
  document.querySelector("main").innerHTML = template();
  start();
};
