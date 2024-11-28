import { images } from "../game.js";

export default class Invader1 {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.colour = (255, 255, 255);
    this.velocity = 1;
  }

  move() {
    this.x = this.x + this.velocity;
  }

  draw() {
    push();
    translate(this.x, this.y);
    fill(this.colour);
    image(images.invader1, 0, 0, 50, 50);
    pop();

    this.move();
  }
}
