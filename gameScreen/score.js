//taken from video  - space invaders in p5.js part 5 - creating a scoreboard https://www.youtube.com/watch?v=W_CmwdgBpG0

export default class Score {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.scoreText = this.scoreText;
  }

  draw() {
    push();
    translate(this.x, this.y);
    fill(255);
    textSize(25);
    text("Score:", 0, 0);
    pop();
  }
}
