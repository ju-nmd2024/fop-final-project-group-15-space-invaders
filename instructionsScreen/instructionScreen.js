// import GameInstructions from "./gameInstructionsClass.js";
import { images } from "../game.js";

export default class InstructionScreen {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    // this.instructions = new GameInstructions(150, 150, 550, 550);
  }

  draw() {
    background(0, 0, 0);
    image(images.instructionsBackground, 0, 0, 1000, 1000);
    // this.instructions.draw();
  }
}

// // Information box
// push();
// fill(0, 0, 0);
// stroke(255, 255, 255);
// rect(80, 50, 60, 80);
// pop();

// push();
// text(

//   50,
//   [60, 30]
// );
// pop();
