//my new code

let maxColumn = function (matrix) {
  let height = matrix.length;
  let width = matrix[0].length;

  let maxColumns = [];
  for (let i = 0; i < matrix[0].length; i++) { //matrix[0] is just the first subarray
    // establish a variable to push into answer array
    // use 2D array for loop to scan for places where a value will have the same "column" (i value) because column is the [position within the subarray] or : column = subarry[position]
    // but different ROW or position within the original matrix [j] or : row = matrix[pos] our value needs to be the highest value at specific i and pushed into array
    //
    let currentHighest = matrix[i][0]
    for (let j = 1; j < matrix.length; j++) {
      if (matrix[i][j] > currentHighest) {
        currentHighest = matrix[i][j]
      }
    }
    maxColumns.push(currentHighest);
  }
  return maxColumns;
}

//the solution tab at AAD
function maxColumn(matrix) {
  const height = matrix.length;
  const width = matrix[0].length;

  const maxColumns = [];
  for (let col = 0; col < width; col++) {
    let colMax = matrix[0][col];
    for (let row = 1; row < height; row++) {
      if (matrix[row][col] > colMax) {
        colMax = matrix[row][col];
      }
    }
    maxColumns.push(colMax);
  }


  return maxColumns;
}


matrix = [[5, 9, 21],
[9, 19, 6],
[12, 14, 15]]

/* my old code: or snippets
analysis:
*function maxColumn(matrix) {
  let n1 = 0; was trying to identify a variable that can track the maximum value

  for (let i = 0; i < matrix.length; i++) { <--- this was trying to iterate through the top level, I was going to add a j when I realized
  that I didn't know where it was going;

    let subArr = matrix[i];  having a variable for the subarray. This is where it gets murky for me
    if (subArr[
}
*/

/*Write a function luckyNumbers(matrix) that takes in a 2-dimensional array (matrix)
and returns all lucky numbers in any order. A lucky number is the minimum element in
its row and the maximum in its column.*/

function luckyNumbers(matrix) {
  let minRow = matrix[j][i]
  let maxCol = matrix[i][j]
  let cols = []
  let rows = []
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (minrow > matrix[j][i]) {
        minRow = matrix[j][i];
      }
      if (maxrow < matrix) {
        maxCol = matrix[i][j];
      }
    }
    cols.push(maxCol);
    rows.push(maxRows);
  }
  for (x = 0; x < maxCol.length; x++) {
    for (y = 0; y < maxRows.length; y++) {
      if (maxCol[x] === maxRows[y]) {
        return maxCol[x]
      }
    }
  }

}


matrix = [[5, 9, 21],
[9, 19, 6],
[12, 14, 15]]

console.log(luckyNumbers(matrix)); // [12]

matrix = [[5, 10, 8, 6],
[10, 2, 7, 9],
[21, 15, 19, 10]]

console.log(luckyNumbers(matrix)); // [10]

// second attempt

function luckyNumbers(matrix) {
  let cols = []
  let rows = []
  for (let i = 0; i < matrix.length; i++) {
    let minRow = matrix[0][i];
    let maxCol = matrix[i][0];
    for (let j = 0; j < matrix[0].length; j++) {
      if (minrow > matrix[j][i]) {
        minRow = matrix[j][i];
      }
      if (maxrow < matrix) {
        maxCol = matrix[i][j];
      }
    }
    cols.push(maxCol);
    rows.push(maxRows);
  }
  for (x = 0; x < maxCol.length; x++) {
    for (y = 0; y < maxRows.length; y++) {
      if (maxCol[x] === maxRows[y]) {
        return maxCol[x]
      }
    }
  }

}

// third attempt

function luckyNumbers(matrix) {
  rows = [];
  cols = [];
  for (let i =0; i < matrix.length; i++) {
    let minRow=1000; // high number so that all values in matrix will be less
    for (let j = 0; j < matrix[i].length; j++) {
      minRow = Math.min(minRow, matrix[i][j]); // finds minimum between given value and 2D index
    }
    rows.push(minRow);
  }
  for (let j = 0; j < matrix[0].length; j++) {
    let maxCol = 0;
    for (let i = 0; i <matrix.length; i++) {
      maxCol = Math.max(maxCol, matrix[i][j]);
    }
    cols.push(maxCol)
  }
}

// spiral
function spiralOrder(matrix) {
  let resArr = [];
  for (let i = 0; i < 1; i++) {
    for (let j = 0; j<matrix[i].length; j++) {
      resArr.push(matrix[i][j]);
    }
  }
  for (let i = 1; i < matrix.length; i++) {
    	for (let j = matrix[i].length - 1; j < matrix[i].length; j++) {
          resArr.push(matrix[i][j]);
    }
  }

  // this is where it stops working

  for (let i = matrix.length - 1; i < matrix.length; i++) {
    for (let j = matrix[i].length - 2; j > -1; j--) {
      resArr.push(matrix[i][j]);
    }
  }
  for (let i = 1; i < matrix.length -1; i++) {
    for (let j = 0; j < matrix[i].length -1; j++) {
      resArr.push(matrix[i][j]);
    }
  }
  return resArr;
}
