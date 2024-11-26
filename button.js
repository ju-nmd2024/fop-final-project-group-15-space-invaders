class Button {
  constructor(x, y, width, height, text) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.text = text;
    //this.backgroundColour = "#cccccc";
  }

  //Färger med hexkod
  draw() {
    push();
    translate(this.x, this.y);
    stroke("#4d4d4d");
    strokeWeight(4);
    fill("#cccccc");
    rect(0, 0, this.width, this.height, this.height / 2);

    // Define text
    noStroke();
    fill("4d4d4d");
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
}

//Child of button
// Super = sträcker sig till "parent class", vilket innebär
// alla variabler i class1 översätts till class2
class BlueButton extends Button {
  cosntructor(x, y, width, height, text) {
    super(x, y, width, height, text);
    this.backgroundColour = "#0000ff";
  }
}

const myButton = new Button(100, 100, 160, 60, "Hello");
const worldButton = new BlueButton(100, 300, 260, 60, "World");

function draw() {
  background(255);
  if (mouseIsPressed) {
    if (myButton.hitTest(mouseX, mouseY)) {
      background(255, 0, 0);
    } else if (worldButton.hitTest(mouseX, mouseY)) {
      background(0, 255, 0);
    }
  }

  myButton.draw();
  worldButton.draw();
}
