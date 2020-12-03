class Board {
  constructor(size, blocks) {
    this.size = size;
    this.grid = this.createGrid();
    this.blocks = blocks;
  }

  createGrid() {
    var grid = new Array();
    for (var i = 0; i < this.size; i++) {
      grid[i] = new Array();
      for (var j = 0; j < this.size; j++) {
        var id = j + "-" + i;
        var cell = new Cell(id, false, false, false, j, i);
        grid[i].push(cell);
      }
    }
    return grid;
  }

  addObstacle(grid) {
    for (var i = 0; i < this.blocks; i++) {
      // var x = randomNumber(this.size);
      // var y = randomNumber(this.size);
      // if (grid[x][y].isBlocked == true) {
      //   i--;
      // } else {
      //   grid[x][y].isBlocked = true;
      grid[0][0].getRandomEmptyCell(grid).isBlocked = true;
    }
  }

  addWeapon(grid) {
    console.log("%cWeapons", "color:blue; font-size: 12px; font-weight: bold");
    for (var i = 0; i < 4; i++) {
      var x = randomNumber(this.size);
      var y = randomNumber(this.size);
      if (grid[x][y].isBlocked == false) {
        grid[x][y].hasWeapon = true;
        grid[x][y].addItems(weapons[i]);
        // console.log(weapons[i]);
        console.log(grid[x][y]);
      } else {
        i--;
      }
    }
  }

  addPlayers(grid) {
    console.log("%cPlayers", "color:green; font-size: 12px; font-weight: bold");
    for (var i = 0; i < 2; i++) {
      var x = randomNumber(this.size);
      var y = randomNumber(this.size);
      if (
        // grid[x][y].checkAdjacentBlock(grid) ||
        grid[x][y].isBlocked == true ||
        grid[x][y].hasWeapon == true ||
        grid[x][y].hasPlayer == true
      ) {
        i--;
      } else {
        grid[x][y].hasPlayer = true;
        grid[x][y].addItems(players[i]);
        console.log(grid[x][y]);
      }
    }
  }

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
