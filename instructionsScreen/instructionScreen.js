import { images } from "../game.js";
import Button from "../startScreen/button.js";
import globals from "../globals.js";

export default class InstructionScreen {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.homeButton = new Button(50, 900, 250, 60, "Home");
  }

  draw() {
    background(0, 0, 0);
    image(images.instructionsBackground, 0, 0, 1000, 1000);
    this.homeButton.draw();
    this.mousePressed();
  }

  mousePressed() {
    if (mouseIsPressed) {
      if (this.homeButton.hitTest(mouseX, mouseY)) {
        globals.state = "start";
      }
    }
  }
}
