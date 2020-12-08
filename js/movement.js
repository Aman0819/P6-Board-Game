function isWithinAvailableRange(clickedID) {
  const pos = clickedID.id.split("-");
  const checkObj = this.grid[pos[0]][pos[1]];
  const player = this.players[0];

  const yfirstBlockMinus = this.grid[player.playerPosX][player.playerPosY - 1];
  const ysecondBlockMinus = this.grid[player.playerPosX][player.playerPosY - 2];
  const ythirdBlockMinus = this.grid[player.playerPosX][player.playerPosY - 3];
  //
  const yfirstBlockPlus = this.grid[player.playerPosX][player.playerPosY + 1];
  const ysecondBlockPlus = this.grid[player.playerPosX][player.playerPosY + 2];
  const ythirdBlockPlus = this.grid[player.playerPosX][player.playerPosY + 3];

  //
  const xfirstBlockMinus = this.grid[player.playerPosX - 1][player.playerPosY];
  const xsecondBlockMinus = this.grid[player.playerPosX - 2][player.playerPosY];
  const xthirdBlockMinus = this.grid[player.playerPosX - 3][player.playerPosY];
  //
  const xfirstBlockPlus = this.grid[player.playerPosX + 1][player.playerPosY];
  const xsecondBlockPlus = this.grid[player.playerPosX + 2][player.playerPosY];
  const xthirdBlockPlus = this.grid[player.playerPosX + 3][player.playerPosY];

  // 1st
  if (
    player.playerPosY - 1 >= 0 &&
    yfirstBlockMinus.posX === checkObj.posX &&
    yfirstBlockMinus.posY === checkObj.posY
  ) {
    return true;
  } else if (
    player.playerPosY + 1 <= this.grid.length - 1 &&
    yfirstBlockPlus.posX === checkObj.posX &&
    yfirstBlockPlus.posY === checkObj.posY
  ) {
    return true;
  } else if (
    player.playerPosX - 1 >= 0 &&
    xfirstBlockMinus.posX === checkObj.posX &&
    xfirstBlockMinus.posY === checkObj.posY
  ) {
    return true;
  } else if (
    player.playerPosX + 1 <= this.grid.length - 1 &&
    xfirstBlockPlus.posX === checkObj.posX &&
    xfirstBlockPlus.posY === checkObj.posY
  ) {
    return true;
  }

  // 2nd
  if (
    player.playerPosY - 2 >= 0 &&
    ysecondBlockMinus.posX === checkObj.posX &&
    ysecondBlockMinus.posY === checkObj.posY
  ) {
    if (yfirstBlockMinus.isBlocked === false) return true;
  } else if (
    player.playerPosY + 2 <= this.grid.length - 1 &&
    ysecondBlockPlus.posX === checkObj.posX &&
    ysecondBlockPlus.posY === checkObj.posY
  ) {
    if (yfirstBlockPlus.isBlocked === false) return true;
  } else if (
    player.playerPosX - 2 >= 0 &&
    xsecondBlockMinus.posX === checkObj.posX &&
    xsecondBlockMinus.posY === checkObj.posY
  ) {
    if (xfirstBlockMinus === false) return true;
  } else if (
    player.playerPosX + 2 <= this.grid.length - 1 &&
    xsecondBlockPlus.posX === checkObj.posX &&
    xsecondBlockPlus.posY === checkObj.posY
  ) {
    if (xfirstBlockPlus === false) return true;
  }

  // 3 rd
  if (
    player.playerPosY - 3 >= 0 &&
    ythirdBlockMinus.posX === checkObj.posX &&
    ythirdBlockMinus.posY === checkObj.posY
  ) {
    return true;
  } else if (
    player.playerPosY + 3 <= this.grid.length - 1 &&
    ythirdBlockPlus.posX === checkObj.posX &&
    ythirdBlockPlus.posY === checkObj.posY
  ) {
    return true;
  } else if (
    player.playerPosX - 3 >= 0 &&
    xthirdBlockMinus.posX === checkObj.posX &&
    xthirdBlockMinus.posY === checkObj.posY
  ) {
    return true;
  } else if (
    player.playerPosX + 3 <= this.grid.length - 1 &&
    xthirdBlockPlus.posX === checkObj.posX &&
    xthirdBlockPlus.posY === checkObj.posY
  ) {
    return true;
  }
}
