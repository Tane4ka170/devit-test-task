function processMatrix(matrix) {
  let minValue = Infinity;
  for (const row of matrix) {
    for (const value of row) {
      if (value < minValue) {
        minValue = value;
      }
    }
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] % 2 !== 0) {
        matrix[i][j] *= minValue;
      }
    }
  }

  return matrix;
}
