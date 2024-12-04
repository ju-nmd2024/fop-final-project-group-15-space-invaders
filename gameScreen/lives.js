import { images } from "../game.js";
export default class Life {
  constructor(x, y, width, height, image) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  draw() {
    push();
    translate(this.x, this.y);
    image(images.lives, 0, 0, 40, 40);
    pop();
  }
}
