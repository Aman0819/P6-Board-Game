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
  // getRandomEmptyCell() {
  //   do {
  //     var x = randomNumber(this.grid.length);
  //     var y = randomNumber(this.grid.length);
  //     if (
  //       grid[x][y].isBlocked == true ||
  //       grid[x][y].hasPlayer == true ||
  //       grid[x][y].hasWeapon == true
  //     ) {
  //     } else {
  //       return grid[x][y];
  //     }
  //   } while (true);
  // }

  addItems(item) {
    this.items.push(item);
    this.setAddItemType(item.type);
  }

  setAddItemType(type) {
    this.hasWeapon = type === "weapon";
    this.hasPlayer = type === "player";
  }

  // setRemoveItemType(type) {
  //   // this.hasWeapon = type !== "weapon";
  //   this.hasPlayer = false;
  // }

  removeItemById(inItem) {
    this.items = this.items.filter((item) => {
      return item.name !== inItem.name;
    });
    // console.log("FROM REMOVEITEMBYID:  ", this);
    this.hasPlayer = false;

    // this.setRemoveItemType();
  }
}
