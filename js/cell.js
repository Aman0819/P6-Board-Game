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

  checkAdjacentBlocked(grid) {
    if (
      this.posY - 1 >= 0 &&
      grid[this.posX][this.posY - 1].isBlocked == true
    ) {
      return true;
    } else if (
      this.posY + 1 <= grid.length - 1 &&
      grid[this.posX][this.posY + 1].isBlocked == true
    ) {
      return true;
    } else if (
      this.posX - 1 >= 0 &&
      grid[this.posX - 1][this.posY].isBlocked == true
    ) {
      return true;
    } else if (
      this.posX + 1 <= grid.length - 1 &&
      grid[this.posX + 1][this.posY].isBlocked == true
    ) {
      return true;
    } else if (
      this.posY - 1 >= 0 &&
      this.posX - 1 >= 0 &&
      grid[this.posX - 1][this.posY - 1].isBlocked == true
    ) {
      return true;
    } else if (
      this.posY - 1 >= 0 &&
      this.posX + 1 <= grid.length - 1 &&
      grid[this.posX + 1][this.posY - 1].isBlocked == true
    ) {
      return true;
    } else if (
      this.posY + 1 <= grid.length - 1 &&
      this.posX - 1 >= 0 &&
      grid[this.posX - 1][this.posY + 1].isBlocked == true
    ) {
      return true;
    } else if (
      this.posY + 1 <= grid.length - 1 &&
      this.posX + 1 <= grid.length - 1 &&
      grid[this.posX + 1][this.posY + 1].isBlocked == true
    ) {
      return true;
    }
  }

  checkAdjacentWeapon(grid) {
    if (
      this.posY - 1 >= 0 &&
      grid[this.posX][this.posY - 1].hasWeapon === true
    ) {
      return true;
    } else if (
      this.posY + 1 <= grid.length - 1 &&
      grid[this.posX][this.posY + 1].hasWeapon === true
    ) {
      return true;
    } else if (
      this.posX - 1 >= 0 &&
      grid[this.posX - 1][this.posY].hasWeapon === true
    ) {
      return true;
    } else if (
      this.posX + 1 <= grid.length - 1 &&
      grid[this.posX + 1][this.posY].hasWeapon === true
    ) {
      return true;
    } else if (
      this.posY - 1 >= 0 &&
      this.posX - 1 >= 0 &&
      grid[this.posX - 1][this.posY - 1].hasWeapon === true
    ) {
      return true;
    } else if (
      this.posY - 1 >= 0 &&
      this.posX + 1 <= grid.length - 1 &&
      grid[this.posX + 1][this.posY - 1].hasWeapon === true
    ) {
      return true;
    } else if (
      this.posY + 1 <= grid.length - 1 &&
      this.posX - 1 >= 0 &&
      grid[this.posX - 1][this.posY + 1].hasWeapon === true
    ) {
      return true;
    } else if (
      this.posY + 1 <= grid.length - 1 &&
      this.posX + 1 <= grid.length - 1 &&
      grid[this.posX + 1][this.posY + 1].hasWeapon === true
    ) {
      return true;
    }
  }

  checkAdjacentPlayer(grid) {
    if (
      this.posY - 1 >= 0 &&
      grid[this.posX][this.posY - 1].hasPlayer === true
    ) {
      return true;
    } else if (
      this.posY + 1 <= grid.length - 1 &&
      grid[this.posX][this.posY + 1].hasPlayer === true
    ) {
      return true;
    } else if (
      this.posX - 1 >= 0 &&
      grid[this.posX - 1][this.posY].hasPlayer === true
    ) {
      return true;
    } else if (
      this.posX + 1 <= grid.length - 1 &&
      grid[this.posX + 1][this.posY].hasPlayer === true
    ) {
      return true;
    } else if (
      this.posY - 1 >= 0 &&
      this.posX - 1 >= 0 &&
      grid[this.posX - 1][this.posY - 1].hasPlayer === true
    ) {
      return true;
    } else if (
      this.posY - 1 >= 0 &&
      this.posX + 1 <= grid.length - 1 &&
      grid[this.posX + 1][this.posY - 1].hasPlayer === true
    ) {
      return true;
    } else if (
      this.posY + 1 <= grid.length - 1 &&
      this.posX - 1 >= 0 &&
      grid[this.posX - 1][this.posY + 1].hasPlayer === true
    ) {
      return true;
    } else if (
      this.posY + 1 <= grid.length - 1 &&
      this.posX + 1 <= grid.length - 1 &&
      grid[this.posX + 1][this.posY + 1].hasPlayer === true
    ) {
      return true;
    }
  }
}
