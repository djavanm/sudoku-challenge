var input = [
  [4, 3, 5], [2, 6, 9], [7, 8, 1],
  [6, 8, 2], [5, 7, 1], [4, 9, 3],
  [1, 9, 7], [8, 3, 4], [5, 6, 2],
  [8, 2, 6], [1, 9, 5], [3, 4, 7], 
  [3, 7, 4], [6, 8, 2], [9, 1, 5],
  [9, 5, 1], [7, 4, 3], [6, 2, 8],
  [5, 1, 9], [3, 2, 6], [8, 7, 4],
  [2, 4, 8], [9, 5, 7], [1, 3, 6],
  [7, 6, 3], [4, 1, 8], [2, 5, 9]
];

const isValidSudoku = (matrix) => {
  let isValid = true;
  let rows = matrix.reduce((acc, cv, i, arr) => {
    if( i % 3 === 0) {
      let newRow = [...arr[i], ...arr[i+1], ...arr[i+2]];
      acc = [...acc, newRow]
    }
    return acc;
  }, []);
  rows.forEach(row => {
    row.forEach((digit, i) => {
      row[i] = 0;
      if(row.includes(digit)) {
        isValid = false;
      }
    })
  });

  let columns = [];
  matrix.forEach((trio, i, arr) => {
    if ( i % 3 === 0) {
      trio.forEach((digit, i) => {
        let column = [];
        // ran out of time, here
      })
    }
  });
  return isValid;
};

isValidSudoku(input);