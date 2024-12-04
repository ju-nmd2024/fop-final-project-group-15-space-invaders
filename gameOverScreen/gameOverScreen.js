import { images } from "../game.js";
import Button from "../startScreen/startButton.js";

export default class GameOverScreen {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.playAgainButton = new Button(550, 700, 250, 60, "Play Again");
    this.homeButton = new Button(200, 700, 250, 60, "Home");
  }

  draw() {
    image(images.gameOverBackground, 0, 0, 1000, 1000);
    this.playAgainButton.draw();
    this.homeButton.draw();
  }
}
