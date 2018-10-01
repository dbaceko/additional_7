module.exports = function solveSudoku(matrix){

  function mainRec(matrix){
  let row, col, numb;
    for (row=0; row<9; row++) {
        for (col=0; col<9; col++) {
            if (matrix[row][col]===0) {
                for (numb=1; numb<10; numb++){
                  if(rowIsTrue(row, numb) && colIsTrue(col, numb) && sqareIsTrue(row, col, numb)){
                  matrix[row][col]=numb;
                  if(mainRec(matrix)) return true;
                  matrix[row][col]=0
                  }
                }
                return false;
            }
        }
    }
    return true;
  }
  
  function rowIsTrue(row, numb){
    for (col=0; col<9; col++){
        if (matrix[row][col]===numb) return false;
    }
    return true;
  }
  
  function colIsTrue(col, numb){
    for (row=0; row<9; row++){
        if (matrix[row][col]===numb) return false;
    }
    return true;
  }
  
  function sqareIsTrue(row, col, numb){
      row = Math.floor(row/3)*3;
      col = Math.floor(col/3)*3;
      for (let i=0; i<3; i++){
        for (let j=0; j<3; j++){
          if (matrix[row+i][col+j]===numb) return false;
        }
      }
      return true;
  }
  
  mainRec(matrix);
  return matrix;
}
     