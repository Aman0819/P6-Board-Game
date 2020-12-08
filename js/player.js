// let players = [
//   {
//     name: "Player1",
//     type: "player",
//     health: 100,
//     damage: 10,
//     weapon: "default",
//     isActive: true,
//     playerPosX: 0,
//     playerPosY: 0,
//   },
//   {
//     name: "Player2",
//     type: "player",
//     health: 100,
//     damage: 10,
//     weapon: "default",
//     isActive: false,
//     playerPosX: 0,
//     playerPosY: 0,
//   },
// ];

class Player {
  constructor(name, isActive, playerPosX, playerPosY) {
    (this.name = name),
      (this.type = "player"),
      (this.health = 100),
      (this.damage = 10),
      (this.weapon = "default"),
      (this.isActive = isActive),
      (this.playerPosX = playerPosX),
      (this.playerPosY = playerPosY);
  }
}
