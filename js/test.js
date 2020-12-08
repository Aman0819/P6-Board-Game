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
    return true;
  } else if (
    player.playerPosY + 2 <= this.grid.length - 1 &&
    this.grid[player.playerPosX][player.playerPosY + 2].posX ===
      checkObj.posX &&
    this.grid[player.playerPosX][player.playerPosY + 2].posY === checkObj.posY
  ) {
    return true;
  } else if (
    player.playerPosX - 2 >= 0 &&
    this.grid[player.playerPosX - 2][player.playerPosY].posX ===
      checkObj.posX &&
    this.grid[player.playerPosX - 2][player.playerPosY].posY === checkObj.posY
  ) {
    return true;
  } else if (
    player.playerPosX + 2 <= this.grid.length - 1 &&
    this.grid[player.playerPosX + 2][player.playerPosY].posX ===
      checkObj.posX &&
    this.grid[player.playerPosX + 2][player.playerPosY].posY === checkObj.posY
  ) {
    return true;
  }

  // 3 rd
  if (
    player.playerPosY - 3 >= 0 &&
    this.grid[player.playerPosX][player.playerPosY - 3].posX ===
      checkObj.posX &&
    this.grid[player.playerPosX][player.playerPosY - 3].posY === checkObj.posY
  ) {
    return true;
  } else if (
    player.playerPosY + 3 <= this.grid.length - 1 &&
    this.grid[player.playerPosX][player.playerPosY + 3].posX ===
      checkObj.posX &&
    this.grid[player.playerPosX][player.playerPosY + 3].posY === checkObj.posY
  ) {
    return true;
  } else if (
    player.playerPosX - 3 >= 0 &&
    this.grid[player.playerPosX - 3][player.playerPosY].posX ===
      checkObj.posX &&
    this.grid[player.playerPosX - 3][player.playerPosY].posY === checkObj.posY
  ) {
    return true;
  } else if (
    player.playerPosX + 3 <= this.grid.length - 1 &&
    this.grid[player.playerPosX + 3][player.playerPosY].posX ===
      checkObj.posX &&
    this.grid[player.playerPosX + 3][player.playerPosY].posY === checkObj.posY
  ) {
    return true;
  }
}