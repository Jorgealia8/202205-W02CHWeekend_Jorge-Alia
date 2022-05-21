// let rows = 5;
// let columns = 5;

// let array = new Array(rows);
// let secondArray = new Array(columns);

let array = [
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [1, 1, 1, 0, 0],
];

let secondArray = [
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
];
let countAlive = 0;
function tourArray(array) {
  for (let j = 0; j < array.length; j++) {
    for (let i = 0; i < array.length; i++) {
      countAlive = 0;
      //CUATRO ESQUINAS
      if (i === 0 && j === 0) {
        if (array[j + 1][i] === 1) {
          countAlive++;
        }
        if (array[j][i + 1] === 1) {
          countAlive++;
        }
        if (array[j + 1][i + 1] === 1) {
          countAlive++;
        }
      } else if (i === 0 && j === array[j].length - 1) {
        if (array[j - 1][i] === 1) {
          countAlive++;
        }
        if (array[j - 1][i - 1] === 1) {
          countAlive++;
        }
        if (array[j][i + 1] === 1) {
          countAlive++;
        }
      } else if (i === array[i].length - 1 && j === 0) {
        if (array[j][i - 1] === 1) {
          countAlive++;
        }
        if (array[j + 1][i - 1] === 1) {
          countAlive++;
        }
        if (array[j + 1][i] === 1) {
          countAlive++;
        }
      } else if (i === array[i].length - 1 && j === array[j].length - 1) {
        if (array[j - 1][i] === 1) {
          countAlive++;
        }
        if (array[j - 1][i - 1] === 1) {
          countAlive++;
        }
        if (array[j][i - 1] === 1) {
          countAlive++;
        }
      }

      //    CUATRO BORDES
      //BORDE IZQUIERDO
      else if (i === 0 && j !== 0 && j !== array[j].length - 1) {
        if (array[j - 1][i] === 1) {
          countAlive++;
        }
        if (array[j - 1][i + 1] === 1) {
          countAlive++;
        }
        if (array[j][i + 1] === 1) {
          countAlive++;
        }
        if (array[j + 1][i + 1] === 1) {
          countAlive++;
        }
        if (array[j + 1][i] === 1) {
          countAlive++;
        }
      }
      //BORDE DERECH0
      else if (
        i === array[i].length - 1 &&
        j !== 0 &&
        j !== array[j].length - 1
      ) {
        if (array[j - 1][i] === 1) {
          countAlive++;
        }
        if (array[j - 1][i - 1] === 1) {
          countAlive++;
        }
        if (array[j][i - 1] === 1) {
          countAlive++;
        }
        if (array[j + 1][i - 1] === 1) {
          countAlive++;
        }
        if (array[j + 1][i] === 1) {
          countAlive++;
        }
      }
      //BORDE SUPERIOR
      else if (j === 0 && i !== 0 && i !== array[i].length - 1) {
        if (array[j][i - 1] === 1) {
          countAlive++;
        }
        if (array[j + 1][i - 1] === 1) {
          countAlive++;
        }
        if (array[j + 1][i] === 1) {
          countAlive++;
        }
        if (array[j + 1][i + 1] === 1) {
          countAlive++;
        }
        if (array[j][i + 1] === 1) {
          countAlive++;
        }
      }

      // BORDE INFERIOR
      else if (
        j === array[j].length - 1 &&
        i !== 0 &&
        i !== array[i].length - 1
      ) {
        if (array[j][i - 1] === 1) {
          countAlive++;
        }
        if (array[j - 1][i - 1] === 1) {
          countAlive++;
        }
        if (array[j - 1][i] === 1) {
          countAlive++;
        }
        if (array[j - 1][i + 1] === 1) {
          countAlive++;
        }
        if (array[j][i + 1] === 1) {
          countAlive++;
        }
      } else {
        if (array[j - 1][i - 1] === 1) {
          countAlive++;
        }
        if (array[j - 1][i] === 1) {
          countAlive++;
        }
        if (array[j - 1][i + 1] === 1) {
          countAlive++;
        }
        if (array[j][i - 1] === 1) {
          countAlive++;
        }
        if (array[j][i + 1] === 1) {
          countAlive++;
        }
        if (array[j + 1][i - 1] === 1) {
          countAlive++;
        }
        if (array[j + 1][i] === 1) {
          countAlive++;
        }
        if (array[j + 1][i + 1] === 1) {
          countAlive++;
        }
      }

      // EJECUCIONES PARA EL NUEVO ARRAY

      if (array[j][i] === 1) {
        if (countAlive < 2 || countAlive > 3) {
          secondArray[j][i] = 0;
        }
        if (countAlive === 2 || countAlive === 3) {
          secondArray[j][i] = 1;
        }
      } else {
        if (countAlive < 3) {
          secondArray[j][i] = 0;
        }
        if (countAlive === 3) {
          secondArray[j][i] = 1;
        }
      }
    }
  }
}

tourArray(array);

console.log(secondArray);
