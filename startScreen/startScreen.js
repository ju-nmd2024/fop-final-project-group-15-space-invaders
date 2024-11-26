//Alva Norberg
import StartButton from "./startButton";

export default class StartScreen {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.button = new StartButton(170, 150, 250, 60, "Start Game");
  }

  draw() {
    fill(255, 200, 100);
    rect(100, 100, 200, 200);
    this.button.draw();
  }
}

const startScreen = new StartScreen(0, 0);

function setup() {
  createCanvas(500, 500);
}

// window.setup = setup;
// window.draw = draw;
