var GameOfLife = {
  createEmptyBoard: function(rows, cols) {
    var newBoard = [];
    for (var i = 0; i < rows; i++) {
      var row = [];
      for (var j = 0; j < cols; j++) {
        row.push(false);
      }
      newBoard.push(row);
    }
    return newBoard;
  },
  getBoardFromHTML: function(cells, cols) {
    var board = [];
    var row = [];
    for(var i = 0; i < cells.length; i++) {
      var cell = cells[i];
      var isAlive = cell.className === 'alive';
      row.push(isAlive);
      if(i % cols === (cols-1)) {
        board.push(row);
        row = [];
      }
    }
    return board;
  },
  getNextStep: function(a, b) {
    for (var i = 0; i < a.length; i++) {
      var row = a[i];
      for (var j = 0; j < row.length; j++) {
        var cell = row[j];
        var willBeAlive = GameOfLife.applyRule(a, i, j);
        if(willBeAlive) {
          b[i][j] = true;
        }
      }
    }
  },
  applyRule: function(board, posY, posX) {
   var cell = board[posX][posY];
   console.log(cell);
   var count = 0;
   if (board[posY-1] && board[posY-1][posX-1]) ++count;
   if (board[posY-1] && board[posY-1][posX]) ++count;
   if (board[posY-1] && board[posY-1][posX+1]) ++count;
   if (board[posY] && board[posY][posX-1]) ++count;
   if (board[posY] && board[posY][posX+1]) ++count;
   if (board[posY+1] && board[posY+1][posX-1]) ++count;
   if (board[posY+1] && board[posY+1][posX]) ++count;
   if (board[posY+1] && board[posY+1][posX+1]) ++count;
   var rule1 = !cell && count >=3;
   var rule2 = cell && (count === 2 || count == 3);
   return rule1 || rule2;



   return true;
  }
};
