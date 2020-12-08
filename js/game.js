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
    console.log(board.grid);

    board.renderBoard(board.grid);
    for (var i = 0; i < elements.length; i++) {
      elements[i].addEventListener("click", myFunction, false);
    }
  });
} while (false);

// Movement
var elements = document.getElementsByClassName("mapSquare");
var myFunction = function () {
  const clickedID = document.getElementById(event.srcElement.id);

  console.log(clickedID.id);
  // board.movePlayerTo(clickedID.id);
  pos = clickedID.id.split("-");
  board.grid[players[0].playerPosX][players[0].playerPosY].removeItemById(
    players[0]
  );
  players[0].playerPosX = pos[0];
  players[0].playerPosY = pos[1];

  board.grid[pos[0]][pos[1]].isBlocked === false &&
    board.grid[pos[0]][pos[1]].addItems(players[0]);
};
for (var i = 0; i < elements.length; i++) {
  elements[i].addEventListener("click", myFunction, false);
}
