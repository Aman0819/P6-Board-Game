class Board {
  constructor(size, blocks) {
    this.size = size;
    this.grid = this.createGrid();
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
      this.getRandomEmptyCell().isBlocked = true;
    }
  }

  // Adding weapons in grid objects
  addWeapon() {
    for (var i = 1; i <= 4; i++) {
      this.getRandomEmptyCell().addItems(weapons[i]);
    }
  }

  // Adding Players in grid objects
  addPlayers() {
    for (var i = 0; i <= 1; i++) {
      const playerObj = this.getRandomEmptyCell();
      console.log(playerObj);
      players[i].playerPosX = playerObj.posX;
      players[i].playerPosY = playerObj.posY;
      playerObj.addItems(players[i]);
    }
    console.log(players);
  }

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

  // Movement
  movePlayerTo(clickedID) {}

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
