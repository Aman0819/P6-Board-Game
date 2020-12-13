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

  addItemsWeapon(item) {
    this.items.push(item);
    this.setAddItemTypeWeapon(item.type);
  }
  addItemsPlayer(item) {
    this.items.push(item);
    this.setAddItemTypePlayer(item.type);
  }

  setAddItemTypeWeapon(type) {
    this.hasWeapon = type === "weapon";
  }
  setAddItemTypePlayer(type) {
    this.hasPlayer = type === "player";
  }

  setRemoveItemTypePlayer(type) {
    // this.hasWeapon = type === "weapon";
    this.hasPlayer = type === "player";
  }

  removeItemById(inItem) {
    this.items = this.items.filter((item) => {
      return item.name !== inItem.name;
    });
    this.hasPlayer = false;

    this.setRemoveItemTypePlayer();
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
