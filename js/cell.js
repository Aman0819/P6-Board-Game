class Cell {
  constructor(id, isBlocked, hasPlayer, hasWeapon, posX, posY) {
    this.id = id;
    this.isBlocked = isBlocked;
    this.hasPlayer = hasPlayer;
    this.hasWeapon = hasWeapon;
    this.posX = posX;
    this.posY = posY;
    this.items = [];
  }

  // Methods
  getRandomEmptyCell(grid) {
    do {
      var x = randomNumber(grid.length);
      var y = randomNumber(grid.length);
      if (
        grid[x][y].isBlocked == true ||
        grid[x][y].hasPlayer == true ||
        grid[x][y].hasWeapon == true
      ) {
      } else {
        return grid[x][y];
      }
    } while (true);
  }

  addItems(item) {
    this.items.push(item);
    this.setAddItemType(item.type);
  }

  setAddItemType(type) {
    this.hasWeapon = type === "weapon";
    this.hasPlayer = type === "player";
  }

  setRemoveItemType(type) {
    this.hasWeapon = type === "weapon";
    this.hasPlayer = type === "player";
  }

  removeItemById(name) {
    this.items = this.items.filter((item) => {
      item.name !== name;
      console.log(item);
    });
    this.setRemoveItemType(name.type);
  }
}
