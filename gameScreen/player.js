import { images } from "../game.js";
import Bullet from "./bullet.js";

export default class Player {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.colour = (255, 255, 255);
    this.velocity = 5;
    this.lives = 3;
  }

  turnLeft() {
    this.x += -this.velocity;
  }

  turnRight() {
    this.x += this.velocity;
  }

  draw() {
    push();
    translate(this.x, this.y);
    fill(this.colour);
    image(images.player, 0, 0, 50, 50);
    pop();
  }

  // lives() {
  // this.playerLives = Player * 3;

  // if (
  //   bullet.x > this.x &&
  //   bullet.x < this.x + this.width &&
  //   bullet.y > this.y &&
  //   bullet.y < this.y + this.height
  // ) {
  //   this.playerLives = true;
  // } else {
  //   this.playerLives = false;
  // }
}
