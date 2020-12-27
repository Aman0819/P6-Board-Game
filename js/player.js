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
  constructor(name, playerPosX, playerPosY) {
    (this.name = name),
      (this.type = "player"),
      (this.health = 100),
      (this.damage = 10),
      (this.defend = false),
      (this.weapon = "default"),
      (this.playerPosX = playerPosX),
      (this.playerPosY = playerPosY);
  }
  attack(target) {
    if (target.health > 0) {
      const damage = target.defend ? this.damage / 2 : this.damage;
      target.health = target.health - damage;
    }
  }
  defence() {
    this.defend = true;
  }
}
