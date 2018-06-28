var play = function(){
  var liAlives = Board.getCells();
  Board.updateCells(liAlives);
}

// Se ejecuta luego de que se cargue todo el html

var init = function() {
  Game.init();
  Game.start();
  
}

window.onload = init;
