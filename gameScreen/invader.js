export default class Invader1 {
  constructor(x, y, width, height, scale) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.scale = scale;
    this.colour = (255, 0, 0);
  }

  draw() {
    push();
    translate(this.x, this.y);
    rect(0, 0, this.width, this.height, this.scale);
    fill(this.colour);
    pop();
  }
}
