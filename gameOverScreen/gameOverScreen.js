import { images } from "../game.js";
import Button from "../startScreen/button.js";
import globals from "../globals.js";
import GameScreen from "../gameScreen/gameScreen.js";

export default class GameOverScreen {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    // this.image = image;
    this.playAgainButton = new Button(550, 700, 250, 60, "Play Again");
    this.homeButton = new Button(200, 700, 250, 60, "Home");
  }

  draw() {
    // image(this.image, 0, 0, 1000, 1000);
    image(images.gameOverBackground, 0, 0, 1000, 1000);
    // image(images.winScreen, 0, 0, 1000, 1000);
    this.playAgainButton.draw();
    this.homeButton.draw();
    this.mouseClicked();
  }

  mouseClicked() {
    if (this.playAgainButton.hitTest(mouseX, mouseY)) {
      globals.state = "playGame";
      this.score = 0;
      this.lives = [];
      this.invaders = [];
    }
    if (this.homeButton.hitTest(mouseX, mouseY)) {
      globals.state = "start";
    }
  }
}
