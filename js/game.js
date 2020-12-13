var board = new Board(10, 8);

// Adding objects to the Board
board.addObstacle(this.board.grid);
board.addWeapon(this.board.grid);
board.addPlayers(this.board.grid);
console.log(this.board.grid);
board.renderBoard(this.board.grid);

const elements = document.getElementsByClassName("mapSquare");
const movement = function () {
  const clickedID = document.getElementById(event.srcElement.id);
  if (
    board.isFreeCell(clickedID) === true &&
    board.isWithinAvailableRange(clickedID) === true
  ) {
    board.movePlayerTo(clickedID);

    board.players.reverse();
    console.log(board.grid);
  }
};

// Updating Board on change Board
do {
  document.getElementById("mapGrid").addEventListener("click", function () {
    document.getElementById("mapGrid").innerHTML = "";
    board.renderBoard(board.grid);
    for (var i = 0; i < elements.length; i++) {
      elements[i].addEventListener("click", movement, false);
    }
    if (board.checkAdjacentPlayer() === true) {
      document.getElementById("mapGrid").innerHTML = "<h1>Fight Mode</h1>";
    }
  });
} while (false);
for (var i = 0; i < elements.length; i++) {
  elements[i].addEventListener("click", movement, false);
}
