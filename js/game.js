var Game = {
  next: null,
  board: null,
  cells: null,
  init: function() {
    Board.createCells();
    Game.board = Board.getBoard();
    Game.cells = Board.getCells();
    Game.next = document.getElementById('next');
  },
  start: function() {
    for (var i = 0; i < Game.cells.length; i++) {
      Game.cells[i].onclick = Cell.toggle;
    }
    Game.next.onclick = Board.nextStep;
  },
  update: function() {

  }
};
