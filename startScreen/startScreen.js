//Alva Norberg
import StartButton from "./startButton.js";
import InstructionsButton from "./instructionsButton.js";

export default class StartScreen {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.startButton = new StartButton(
      innerWidth / 2.5,
      innerHeight / 2.5,
      250,
      60,
      "Start Game"
    );
    this.instructionsButton = new InstructionsButton(
      innerWidth / 2.5,
      innerHeight / 1.85,
      250,
      60,
      "Instructions"
    );
  }

  draw() {
    background(0, 0, 0);
    this.startButton.draw();
    this.instructionsButton.draw();
  }
}

// const startScreen = new StartScreen(0, 0);

// function setup() {
//   createCanvas(500, 500);
// }

// window.setup = setup;
// window.draw = draw;
