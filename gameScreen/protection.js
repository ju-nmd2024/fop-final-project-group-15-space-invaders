export default class Protection {
  constructor(x, y, width, height, speed) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  draw() {
    push();
    translate(this.x, this.y);
    fill(144, 144, 144);
    rect(0, 0, this.width, this.height);
    pop();
  }
}
