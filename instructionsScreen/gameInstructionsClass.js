export default class GameInstructions {
  constructor(x, y, width, height, text) {
    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width;
    this.text = text;
  }

  draw() {
    push();
    translate();
    noFill();
    stroke(255);
    strokeWeight(6);
    rect(0, 0, this.height, this.width);
    textSize(27);
    textColour(255);
    pop();
  }
}
