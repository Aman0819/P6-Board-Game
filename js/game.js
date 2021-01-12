// Creating Board objects
var board = new Board(10, 8);

// Adding objects to the Board
board.addObstacle(this.board.grid);
board.addWeapon(this.board.grid);
board.addPlayers(this.board.grid);
console.log(this.board.grid);
board.renderBoard(this.board.grid);

// Movement handler
const movement = function (event) {
  if (
    board.isFreeCell(event.id) === true &&
    board.isWithinAvailableRange(event.id) === true
  ) {
    board.movePlayerTo(event.id);
    board.players.reverse();
    console.log(board.grid);
  }
};

$(".mapSquare").click(function (event) {
  movement(event.target);
});
// Updating Board on change Board
$("#mapGrid").click(function () {
  $("#mapGrid").html("");
  board.renderBoard(board.grid);
  $(".mapSquare").click(function (event) {
    movement(event.target);
  });
  if (board.checkAdjacentPlayer() === true) {
    $("#mapGrid").html("");
    board.fightMode();
  }
});
