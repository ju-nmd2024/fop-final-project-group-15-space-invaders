import StartButton from "./startButton.js";

export default class InstructionsButton extends StartButton {
  constructor(x, y, width, height, text) {
    super(x, y, width, height, text);
    this.backgroundColour = "#000099";
  }

  //   draw ();
  //    push();
  //    translate ( innerWidth/2.5, innerHeight/2);
  //    pop();
}
