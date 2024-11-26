//Alva Norberg
import StartButton from "./startButton";

export default class StartScreen {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.button = new Button(170, 150, 250, 60, "Start Game");
  }

  draw() {
    // fill
    // rect
    this.button.draw();
    if (MouseIsPressed) {
      if (this.button.hitTest(mouseX, mouseY)) {
        background(200);
      }
    }
  }
}

const startScreen = new StartScreen(0, 0);

function setup() {
  createCanvas(500, 500);
}

window.setup = setup;
window.draw = draw;
