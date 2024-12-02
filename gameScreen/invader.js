export default class Invader {
  constructor(x, y, width, height, image) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.colour = (255, 255, 0);
    this.velocity = 1;
    this.image = image;
    this.alive = true;
  }
  // // Mark the invader as dead
  // die() {
  //   this.alive = false;
  //}

  move() {
    this.x = this.x + this.velocity;
  }

  draw() {
    push();
    translate(this.x, this.y);
    fill(this.colour);
    image(this.image, 0, 0, 50, 50);
    pop();

    this.move();
  }
}
