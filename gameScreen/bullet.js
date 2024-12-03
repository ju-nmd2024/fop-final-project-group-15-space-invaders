export default class Bullet {
  constructor(x, y, width, height, speed) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.velocity = speed;
  }

  draw() {
    push();
    translate(this.x, this.y);
    fill(255);
    rect(0, 0, this.width, this.height);
    pop();

    this.move();
  }

  move() {
    this.y = this.y - this.velocity;
  }
}
