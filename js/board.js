class Board {
  constructor(size, blocks) {
    this.size = size;
    this.grid = this.createGrid();
    this.players = [];
    this.blocks = blocks;
  }

  // Creating a 2-D Grid
  createGrid() {
    var grid = new Array();
    for (var i = 0; i < this.size; i++) {
      grid[i] = new Array();
      for (var j = 0; j < this.size; j++) {
        var id = i + "-" + j;
        var cell = new Cell(id, false, false, false, i, j);
        grid[i].push(cell);
      }
    }
    return grid;
  }

  // Adding obstacles in grid objects
  addObstacle() {
    for (var i = 0; i < this.blocks; i++) {
      const randomCell = this.getRandomEmptyCell();
      if (randomCell.checkAdjacentBlocked(this.grid) === true) {
        i--;
      } else {
        randomCell.isBlocked = true;
      }
    }
  }

  // Adding weapons in grid objects
  addWeapon() {
    for (var i = 1; i <= 4; i++) {
      const randomCell = this.getRandomEmptyCell();
      if (randomCell.checkAdjacentWeapon(this.grid) === true) {
        i--;
      } else randomCell.addItemsWeapon(weapons[i]);
    }
  }

  // Adding Players in grid objects
  addPlayers() {
    for (var i = 1; i <= 2; i++) {
      const randomCell = this.getRandomEmptyCell();
      if (randomCell.checkAdjacentPlayer(this.grid) === true) {
        i--;
      } else {
        const player = new Player(
          `Player${i}`,
          false,
          randomCell.posX,
          randomCell.posY
        );
        randomCell.addItemsPlayer(player);
        this.players.push(player);
      }
    }
  }

  //! Cell Check-Helper Methods
  // Returns Random Empty Cell
  getRandomEmptyCell() {
    do {
      var x = randomNumber(this.grid.length);
      var y = randomNumber(this.grid.length);
      if (
        this.grid[x][y].isBlocked == true ||
        this.grid[x][y].hasPlayer == true ||
        this.grid[x][y].hasWeapon == true
      ) {
      } else {
        return this.grid[x][y];
      }
    } while (true);
  }

  // Checks if the clicked cell is Available
  isFreeCell(clickedID) {
    const pos = clickedID.id.split("-");
    const checkObj = this.grid[pos[0]][pos[1]];
    if (checkObj.isBlocked === true || checkObj.hasPlayer === true) {
      return false;
    } else return true;
  }

  // !
  isWithinAvailableRange(clickedID) {
    const pos = clickedID.id.split("-");
    const x = this.players[0].playerPosX;
    const y = this.players[0].playerPosY;
    const nextX = parseInt(pos[0]);
    const nextY = parseInt(pos[1]);
    const checkobj = this.grid[nextX][nextY];
    let result = false;
    let direction = "";
    const maxRange = 3;
    const player = this.players[0];

    if (nextY > y) {
      direction = {
        dist: nextY - y,
        name: "right",
      };
    } else if (nextY < y) {
      direction = {
        dist: y - nextY,
        name: "left",
      };
    } else if (nextX > x) {
      direction = {
        dist: nextX - x,
        name: "down",
      };
    } else if (nextX < x) {
      direction = {
        dist: x - nextX,
        name: "up",
      };
    }

    if (direction.dist <= maxRange) {
      if (direction.name === "right") {
        for (let i = 1; i <= direction.dist; i++) {
          if (
            this.grid[x][y + i].posX === checkobj.posX &&
            this.grid[x][y + i].posY === checkobj.posY
          ) {
            result = true;
          }
          if (
            this.grid[x][y + i].isBlocked === true ||
            this.grid[x][y + i].hasPlayer === true
          ) {
            return false;
          }
          if (this.grid[x][y + i].hasWeapon === true) {
            if (player.weapon === "default") {
              player.weapon = this.grid[x][y + i].items[0];
              this.grid[x][y + i].hasWeapon = false;
              this.grid[x][y + i].items.pop();
            } else {
              const swap = player.weapon;
              player.weapon = this.grid[x][y + i].items[0];
              this.grid[x][y + i].items[0] = swap;
            }
          }
        }
      }

      if (direction.name === "left") {
        for (let i = 1; i <= direction.dist; i++) {
          if (
            this.grid[x][y - i].posX === checkobj.posX &&
            this.grid[x][y - i].posY === checkobj.posY
          ) {
            result = true;
          }
          if (
            this.grid[x][y - i].isBlocked === true ||
            this.grid[x][y - i].hasPlayer === true
          ) {
            return false;
          }
          if (this.grid[x][y - i].hasWeapon === true) {
            if (player.weapon === "default") {
              player.weapon = this.grid[x][y - i].items[0];
              this.grid[x][y - i].hasWeapon = false;
              this.grid[x][y - i].items.pop();
            } else {
              const swap = player.weapon;
              player.weapon = this.grid[x][y - i].items[0];
              this.grid[x][y - i].items[0] = swap;
            }
          }
        }
      }

      if (direction.name === "down") {
        for (let i = 1; i <= direction.dist; i++) {
          if (
            this.grid[x + i][y].posX === checkobj.posX &&
            this.grid[x + i][y].posY === checkobj.posY
          ) {
            result = true;
          }
          if (
            this.grid[x + i][y].isBlocked === true ||
            this.grid[x + i][y].hasPlayer === true
          ) {
            return false;
          }
          if (this.grid[x + i][y].hasWeapon === true) {
            if (player.weapon === "default") {
              player.weapon = this.grid[x + i][y].items[0];
              this.grid[x + i][y].hasWeapon = false;
              this.grid[x + i][y].items.pop();
            } else {
              const swap = player.weapon;
              player.weapon = this.grid[x + i][y].items[0];
              this.grid[x + i][y].items[0] = swap;
            }
          }
        }
      }

      if (direction.name === "up") {
        for (let i = 1; i <= direction.dist; i++) {
          if (
            this.grid[x - i][y].posX === checkobj.posX &&
            this.grid[x - i][y].posY === checkobj.posY
          ) {
            result = true;
          }
          if (
            this.grid[x - i][y].isBlocked === true ||
            this.grid[x - i][y].hasPlayer === true
          ) {
            return false;
          }
          if (this.grid[x - i][y].hasWeapon === true) {
            if (player.weapon === "default") {
              player.weapon = this.grid[x - i][y].items[0];
              this.grid[x - i][y].hasWeapon = false;
              this.grid[x - i][y].items.pop();
            } else {
              const swap = player.weapon;
              player.weapon = this.grid[x - i][y].items[0];
              this.grid[x - i][y].items[0] = swap;
            }
          }
        }
      }

      return result;
    }
  }
  checkAdjacentPlayer() {
    const player = this.players[0];
    if (
      player.playerPosY - 1 >= 0 &&
      this.grid[player.playerPosX][player.playerPosY - 1].hasPlayer === true
    ) {
      return true;
    }
    if (
      player.playerPosY + 1 <= this.grid.length - 1 &&
      this.grid[player.playerPosX][player.playerPosY + 1].hasPlayer === true
    ) {
      return true;
    }
    if (
      player.playerPosX - 1 >= 0 &&
      this.grid[player.playerPosX - 1][player.playerPosY].hasPlayer === true
    ) {
      return true;
    }
    if (
      player.playerPosX + 1 <= this.grid.length - 1 &&
      this.grid[player.playerPosX + 1][player.playerPosY].hasPlayer === true
    ) {
      return true;
    }
  }

  //! Movement
  movePlayerTo(clickedID) {
    console.log(clickedID.id);
    // board.movePlayerTo(clickedID.id);
    const pos = clickedID.id.split("-");
    this.grid[board.players[0].playerPosX][
      this.players[0].playerPosY
    ].removeItemById(board.players[0]);
    this.players[0].playerPosX = parseInt(pos[0]);
    this.players[0].playerPosY = parseInt(pos[1]);
    this.grid[pos[0]][pos[1]].isBlocked === false &&
      this.grid[pos[0]][pos[1]].addItemsPlayer(this.players[0]);
    console.log(this.players);
  }

  // Rendering Game Board
  renderBoard(grid) {
    let mapGrid = document.getElementById("mapGrid");
    for (var i = 0; i < this.size; i++) {
      let mapGridRow = document.createElement("div");
      mapGridRow.className = "mapGridRow";
      mapGrid.appendChild(mapGridRow);
      for (var j = 0; j < this.size; j++) {
        let mapSquare = document.createElement("div");

        if (grid[i][j].hasWeapon === true && grid[i][j].hasPlayer === true) {
          mapSquare.className = `mapSquare weapon ${grid[i][j].items[1].name}`;
          mapSquare.id = `${[i]}-${[j]}`;
          mapGridRow.appendChild(mapSquare);
        } else if (grid[i][j].hasWeapon === true) {
          mapSquare.className = `mapSquare weapon ${grid[i][j].items[0].name}`;
          mapSquare.id = `${[i]}-${[j]}`;
          mapGridRow.appendChild(mapSquare);
        } else if (grid[i][j].hasPlayer === true) {
          if (grid[i][j].items.length === 2) {
            mapSquare.className = `mapSquare ${grid[i][j].items[1].name}`;
          } else {
            mapSquare.className = `mapSquare ${grid[i][j].items[0].name}`;
          }
          mapSquare.id = `${[i]}-${[j]}`;
          mapGridRow.appendChild(mapSquare);
        } else if (grid[i][j].isBlocked === false) {
          mapSquare.className = "mapSquare ";
          mapSquare.id = `${[i]}-${[j]}`;
          mapGridRow.appendChild(mapSquare);
        } else if (grid[i][j].isBlocked === true) {
          mapSquare.className = "mapSquare blockedSquare";
          mapSquare.id = `${[i]}-${[j]}`;
          mapGridRow.appendChild(mapSquare);
        }
      }
    }
  }
}
