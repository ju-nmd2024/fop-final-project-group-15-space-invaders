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
    translate(this.x, this.y);

    //Box
    noFill();
    stroke(255);
    strokeWeight(6);
    rect(0, 0, this.height, this.width);

    //Text
    fill(255);
    noStroke();
    textAlign(CENTER);
    textSize(22);
    text(this.text, 50, this.y, this.height / 1.2, this.width);
    pop();
  }
}
