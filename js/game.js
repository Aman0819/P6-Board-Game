var board = new Board(10, 10);

// Adding objects to the Board
board.addObstacle(this.board.grid);
board.addWeapon(this.board.grid);
board.addPlayers(this.board.grid);
console.log(this.board.grid);
board.renderBoard(this.board.grid);

// Updating Board on change Board
do {
  document.getElementById("mapGrid").addEventListener("click", function () {
    document.getElementById("mapGrid").innerHTML = "";
    board.renderBoard(board.grid);
    for (var i = 0; i < elements.length; i++) {
      elements[i].addEventListener("click", movement, false);
    }
  });
} while (false);

// Movement
var elements = document.getElementsByClassName("mapSquare");
var movement = function () {
  const clickedID = document.getElementById(event.srcElement.id);
  if (board.isFreeCell(clickedID) === true) {
    board.movePlayerTo(clickedID);
  }
};
for (var i = 0; i < elements.length; i++) {
  elements[i].addEventListener("click", movement, false);
}
