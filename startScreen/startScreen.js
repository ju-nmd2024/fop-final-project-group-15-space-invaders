//Inspired by Alva Norberg, first year NMD student
import { images } from "../game.js";
import StartButton from "./startButton.js";
import InstructionsButton from "./instructionsButton.js";

export default class StartScreen {
  constructor(x, y) {
    this.x = x;
    this.y = y;

    this.startButton = new StartButton(
      1000 / 2,
      1000 / 2.2,
      250,
      60,
      "Start Game"
    );
    this.instructionsButton = new InstructionsButton(
      1000 / 2,
      1000 / 1.65,
      250,
      60,
      "Instructions",
      () => {
        state = "instructions";
      }
    );
  }

  draw() {
    background(0, 0, 0);
    image(images.startBackground, 0, 0, 1000, 1000);
    this.startButton.draw();
    this.instructionsButton.draw();
  }

  mouseClicked() {
    this.instructionsButton.mouseClicked;
  }
}

// const startScreen = new StartScreen(0, 0);

// function setup() {
//   createCanvas(500, 500);
// }

// window.setup = setup;
// window.draw = draw;
