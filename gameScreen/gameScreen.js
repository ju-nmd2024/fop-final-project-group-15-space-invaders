import Invader1 from "./invader.js";

export default class GameScreen {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.invader1 = new Invader1(150, 150, 150, 150);
    this.count = 0;
    // this.invaders = [];
  }

  draw() {
    background(0, 0, 0);
    while (count < 8) {
      this.invader1.draw(count * x + 100, y, s);
      count = count + 5;
    }
    // for (let i = 0; i < 5; i++) {
    //   this.invader1.draw(this.x + i * 100, this.y);
    // }

    // //taken from ChatGPT
    // for (let i = 0; i < 5; i++) {
    //   let invader = new Invader1(150, 150, 150, 150);
    //   this.invader.push(invader);
    // }
    // for (let i = 0; i < this.invaders.legnth; i++) {
    //   let invader = this.invaders[i];
    //   invader.draw(this.x + i * 100, this.y);
    // } //taken from ChatGPT

    // for (let i = 0; i < 5; i++) {
    //   this.invader.draw(this.x + i * 100, this.y);
    // }

    //     this.x = this.x + velocity;
    //     if (this.x > 200) {
    //       this.velocity = 5;
    //     } else if (this.x < 1000) {
    //       this.velocity = -5;
    //     }
    //   }
  }
}
