//Child of button
// Super = sträcker sig till "parent class", vilket innebär
// alla variabler i class1 översätts till class2

import Button from "./button.js";

export default class BlueButton extends Button {
  constructor(x, y, width, height, text) {
    super(x, y, width, height, text);
    this.backgroundColour = "#000099";
  }
}
