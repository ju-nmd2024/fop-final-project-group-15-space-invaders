export default class Player {
  constructor(x, y, width, height, image) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.colour = (255, 255, 255);
    this.velocity = 5;
    this.image = image;
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
    image(this.image, 0, 0, 50, 50);
    pop();
  }
}
