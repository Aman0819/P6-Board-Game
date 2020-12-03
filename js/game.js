var board = new Board(10, 10);

// Adding objects to the Board
board.addObstacle(this.board.grid);
board.addWeapon(this.board.grid);
board.addPlayers(this.board.grid);

// Rendering Board
board.renderBoard(this.board.grid);

// Movement
var elements = document.getElementsByClassName("mapSquare");

var myFunction = function () {
  const clickedId = document.getElementById(event.srcElement.id);
  movePlayerTo(clickedId);
};

for (var i = 0; i < elements.length; i++) {
  elements[i].addEventListener("click", myFunction, false);
}
