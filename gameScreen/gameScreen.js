// Import
import { images } from "../game.js";
import Invader from "./invader.js";
import Player from "./player.js";
import Bullet from "./bullet.js";

export default class GameScreen {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.count = 0;
    this.player = new Player(450, 900, 50, 50);
    this.invaders = [];
    this.bullet = [];
    this.moveDirection = 1; // 1 for right, -1 for left
    this.invaderSpeed = 1; // Speed for invaders
  }

  setup() {
    for (let x = 0; x < 8; x++) {
      this.invaders.push(
        new Invader(150 + x * 75, 150, 50, 50, images.invader4)
      );
      this.invaders.push(
        new Invader(150 + x * 75, 225, 50, 50, images.invader3)
      );
      this.invaders.push(
        new Invader(150 + x * 75, 300, 50, 50, images.invader2)
      );
      this.invaders.push(
        new Invader(150 + x * 75, 375, 50, 50, images.invader1)
      );
      this.invaders.push(
        new Invader(150 + x * 75, 455, 50, 50, images.invader1)
      );
    }
  }

  draw() {
    background(0, 0, 0);

    this.bullet.forEach((bullet) => {
      bullet.draw(); //drawing the bullet
    });

    // SAME AS THE THIS.INVADERS BELOW, which one do we prefere?
    // for (let i = 0; i < this.invaders.length; i++) {
    //   const invader = this.invaders[i];

    //   invader.draw();

    this.invaders.forEach((invader) => {
      invader.draw(); // Drawing the invader
    });
    // Begin help from chatGTP
    // Check if an invader has retched the edge
    this.checkInvaderMovement();
    //Check if an invader has retched the edge

    // Update the movement for the hole group
    this.invaders.forEach((invader) => {
      invader.move();
    });

    // Drawing the player
    this.player.draw();
    let edgeReached = this.checkPlayerMovement();

    // Moving the player
    if (edgeReached === false) {
      if (keyIsDown(37)) {
        this.player.turnLeft();
      }
      if (keyIsDown(39)) {
        this.player.turnRight();
      }
    }

    //Moving the bullet
    if (keyIsDown(32)) {
      this.bullet.push(new Bullet(this.player.x, this.player.y, 5, 10));
    }
  }

  // if (keyIsDown(32)) { // Spacebar
  //   game.addBullet();
  // }

  checkInvaderMovement() {
    let edgeReached = false;

    // Check if an invader has reached the edge
    for (let invader of this.invaders) {
      if (invader.x < 0 || invader.x > width - 50) {
        // You always count at the left, upper corner.
        edgeReached = true;
        break;
      }
    }

    // If a edge is reached, switch direction for all invaders
    if (edgeReached) {
      for (let invader of this.invaders) {
        invader.velocity *= -1; // Switch direction
        invader.y += 5; // Move down the hole row of invaders
      }
    }
    // End help from chatGTP
  }

  checkPlayerMovement() {
    // Check if the player has reached the edge and return
    if (this.player.x < 0) {
      this.player.x = 0;
      return true;
    }
    if (this.player.x > width - 50) {
      this.player.x = width - 50;
      return true;
    }

    return false;
  }

  // Collison
  update() {
    //  // Remove bullet if it goes off-screen
    //  if (bullet.isOffScreen()) {
    //   this.bullets.splice(i, 1);
    // }
  }
}
