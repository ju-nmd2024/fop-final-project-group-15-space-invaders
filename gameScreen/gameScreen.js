import Invader1 from "./invader1.js";
import Invader2 from "./invader2.js";

export default class GameScreen {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.count = 0;
    this.invaders = [];
    this.moveDirection = 1; // 1 for right, -1 for left
    this.invaderSpeed = 1; // Velocity for invaders
  }

  setup() {
    for (let x = 0; x < 8; x++) {
      this.invaders.push(new Invader1(150 + x * 75, 150, 50, 50));
      this.invaders.push(new Invader2(150 + x * 75, 225, 50, 50));
    }
  }

  draw() {
    background(0, 0, 0);

    // SAME AS THE THIS.INVADERS BELOW, which one do we prefere?
    // for (let i = 0; i < this.invaders.length; i++) {
    //   const invader = this.invaders[i];

    //   invader.draw();
    // }

    this.invaders.forEach((invader) => {
      invader.draw();
    });

    // Begin help from chatGTP
    // Check if an invader has retched the edge
    this.checkInvaderMovement();

    // Update the movement for the hole group
    this.invaders.forEach((invader) => {
      invader.move();
    });
    // End help from chatGTP
  }

  checkInvaderMovement() {
    let edgeReched = false;

    // Check if an invader has retched the edge
    for (let invader of this.invaders) {
      if (invader.x < 0 || invader.x > width - 50) {
        // You always count at the left, upper corner.
        edgeReched = true;
        break;
      }
    }

    // If a edge is retched, switch direction for all invaders
    if (edgeReched) {
      for (let invader of this.invaders) {
        invader.velocity *= -1; // Switch direction
        invader.y += 1; // Move down the hole row of invaders
      }
    }

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
  }
}
