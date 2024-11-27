export default class StartButton {
  constructor(x, y, width, height, text, callback) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.text = text;
    this.callback = callback;
    this.buttonFillColour = (255, 255, 0);
    this.buttonStrokeColour = (0, 255, 255);
  }

  draw() {
    push();
    translate(this.x, this.y);
    stroke(this.buttonStrokeColour);
    strokeWeight(5);
    fill(this.buttonFillColour);
    rect(0, 0, this.width, this.height, this.height / 2);

    //Text
    noStroke();
    fill(255);
    textSize(this.height / 2);
    textAlign(CENTER);
    text(this.text, 0, this.height / 4, this.width);
    pop();
  }

  hitTest(x, y) {
    return (
      x > this.x &&
      x < this.x + this.width &&
      y > this.y &&
      y < this.y + this.height
    );
  }

  mouseClicked() {
    if (this.hitTest(mouseX, mouseY)) {
      this.callback();
    }
  }
}
