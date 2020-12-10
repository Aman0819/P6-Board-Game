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
      } else randomCell.addItems(weapons[i]);
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
        randomCell.addItems(player);
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

  // Checks if the clicked cell is within allowed range of movement
  isWithinAvailableRange(clickedID) {
    const pos = clickedID.id.split("-");
    const checkObj = this.grid[pos[0]][pos[1]];
    const player = this.players[0];

    // 1st
    if (
      player.playerPosY - 1 >= 0 &&
      this.grid[player.playerPosX][player.playerPosY - 1].posX ===
        checkObj.posX &&
      this.grid[player.playerPosX][player.playerPosY - 1].posY === checkObj.posY
    ) {
      return true;
    } else if (
      player.playerPosY + 1 <= this.grid.length - 1 &&
      this.grid[player.playerPosX][player.playerPosY + 1].posX ===
        checkObj.posX &&
      this.grid[player.playerPosX][player.playerPosY + 1].posY === checkObj.posY
    ) {
      return true;
    } else if (
      player.playerPosX - 1 >= 0 &&
      this.grid[player.playerPosX - 1][player.playerPosY].posX ===
        checkObj.posX &&
      this.grid[player.playerPosX - 1][player.playerPosY].posY === checkObj.posY
    ) {
      return true;
    } else if (
      player.playerPosX + 1 <= this.grid.length - 1 &&
      this.grid[player.playerPosX + 1][player.playerPosY].posX ===
        checkObj.posX &&
      this.grid[player.playerPosX + 1][player.playerPosY].posY === checkObj.posY
    ) {
      return true;
    }

    // 2nd
    if (
      player.playerPosY - 2 >= 0 &&
      this.grid[player.playerPosX][player.playerPosY - 2].posX ===
        checkObj.posX &&
      this.grid[player.playerPosX][player.playerPosY - 2].posY === checkObj.posY
    ) {
      if (
        this.grid[player.playerPosX][player.playerPosY - 1].isBlocked ===
          false &&
        this.grid[player.playerPosX][player.playerPosY - 1].hasPlayer === false
      ) {
        return true;
      }
    } else if (
      player.playerPosY + 2 <= this.grid.length - 1 &&
      this.grid[player.playerPosX][player.playerPosY + 2].posX ===
        checkObj.posX &&
      this.grid[player.playerPosX][player.playerPosY + 2].posY === checkObj.posY
    ) {
      if (
        this.grid[player.playerPosX][player.playerPosY + 1].isBlocked ===
          false &&
        this.grid[player.playerPosX][player.playerPosY + 1].hasPlayer === false
      ) {
        return true;
      }
    } else if (
      player.playerPosX - 2 >= 0 &&
      this.grid[player.playerPosX - 2][player.playerPosY].posX ===
        checkObj.posX &&
      this.grid[player.playerPosX - 2][player.playerPosY].posY === checkObj.posY
    ) {
      if (
        this.grid[player.playerPosX - 1][player.playerPosY].isBlocked ===
          false &&
        this.grid[player.playerPosX - 1][player.playerPosY].hasPlayer === false
      ) {
        return true;
      }
    } else if (
      player.playerPosX + 2 <= this.grid.length - 1 &&
      this.grid[player.playerPosX + 2][player.playerPosY].posX ===
        checkObj.posX &&
      this.grid[player.playerPosX + 2][player.playerPosY].posY === checkObj.posY
    ) {
      if (
        this.grid[player.playerPosX + 1][player.playerPosY].isBlocked ===
          false &&
        this.grid[player.playerPosX + 1][player.playerPosY].hasPlayer === false
      ) {
        return true;
      }
    }

    // 3 rd
    if (
      player.playerPosY - 3 >= 0 &&
      this.grid[player.playerPosX][player.playerPosY - 3].posX ===
        checkObj.posX &&
      this.grid[player.playerPosX][player.playerPosY - 3].posY === checkObj.posY
    ) {
      if (
        this.grid[player.playerPosX][player.playerPosY - 2].isBlocked ===
          false &&
        this.grid[player.playerPosX][player.playerPosY - 1].isBlocked ===
          false &&
        this.grid[player.playerPosX][player.playerPosY - 2].hasPlayer ===
          false &&
        this.grid[player.playerPosX][player.playerPosY - 1].hasPlayer === false
      ) {
        return true;
      }
    } else if (
      player.playerPosY + 3 <= this.grid.length - 1 &&
      this.grid[player.playerPosX][player.playerPosY + 3].posX ===
        checkObj.posX &&
      this.grid[player.playerPosX][player.playerPosY + 3].posY === checkObj.posY
    ) {
      if (
        this.grid[player.playerPosX][player.playerPosY + 2].isBlocked ===
          false &&
        this.grid[player.playerPosX][player.playerPosY + 1].isBlocked ===
          false &&
        this.grid[player.playerPosX][player.playerPosY + 2].hasPlayer ===
          false &&
        this.grid[player.playerPosX][player.playerPosY + 1].hasPlayer === false
      ) {
        return true;
      }
    } else if (
      player.playerPosX - 3 >= 0 &&
      this.grid[player.playerPosX - 3][player.playerPosY].posX ===
        checkObj.posX &&
      this.grid[player.playerPosX - 3][player.playerPosY].posY === checkObj.posY
    ) {
      if (
        this.grid[player.playerPosX - 2][player.playerPosY].isBlocked ===
          false &&
        this.grid[player.playerPosX - 1][player.playerPosY].isBlocked ===
          false &&
        this.grid[player.playerPosX - 2][player.playerPosY].hasPlayer ===
          false &&
        this.grid[player.playerPosX - 1][player.playerPosY].hasPlayer === false
      ) {
        return true;
      }
    } else if (
      player.playerPosX + 3 <= this.grid.length - 1 &&
      this.grid[player.playerPosX + 3][player.playerPosY].posX ===
        checkObj.posX &&
      this.grid[player.playerPosX + 3][player.playerPosY].posY === checkObj.posY
    ) {
      if (
        this.grid[player.playerPosX + 2][player.playerPosY].isBlocked ===
          false &&
        this.grid[player.playerPosX + 1][player.playerPosY].isBlocked ===
          false &&
        this.grid[player.playerPosX + 2][player.playerPosY].hasPlayer ===
          false &&
        this.grid[player.playerPosX + 1][player.playerPosY].hasPlayer === false
      ) {
        return true;
      }
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
      this.grid[pos[0]][pos[1]].addItems(this.players[0]);
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

        if (grid[i][j].hasWeapon === true) {
          mapSquare.className = `mapSquare weapon ${grid[i][j].items[0].name}`;
          mapSquare.id = `${[i]}-${[j]}`;
          mapGridRow.appendChild(mapSquare);
        } else if (grid[i][j].hasPlayer === true) {
          mapSquare.className = `mapSquare ${grid[i][j].items[0].name}`;
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
