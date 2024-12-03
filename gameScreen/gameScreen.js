// Links
//

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
    this.bullets = [];
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

    //Drawing the bullet
    this.checkInvaderCollision();

    this.bullets.forEach((bullet) => {
      bullet.draw(); //drawing the bullet
    });

    //Start help Erik
    //Moving the bullet
    if (keyIsDown(32) && this.bullets.length === 0) {
      //if key is down shoot, and if a bullet is already flying, you can't shoot another bullet
      this.bullets.push(new Bullet(this.player.x, this.player.y, 5, 10, 10));
    } //end help Erik

    this.ofScreen();

    // Math random, bullets shooting from the invaders
    if (Math.random() * 100 > 99) {
      this.invaderShoot();
    }

    //Drawing the invader
    this.invaders.forEach((invader) => {
      invader.draw();
    });

    //Moving invaders
    // Begin help from chatGTP - all code not copied but used as guide/starting point/explanaiton
    //some parts are copied, bur variables have been changed - ask on lab
    this.checkInvaderMovement(); // Check if an invader has retched the edge

    this.invaders.forEach((invader) => {
      invader.move(); // Update the movement for the hole group
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
  } // draw ends

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
  } // End help from chatGTP

  //start help Erik Second Year NMD Student
  //for loops index formula taken from stack overflow

  checkInvaderCollision() {
    for (let [index, bullet] of this.bullets.entries()) {
      //Defines
      for (let [indexInvader, invader] of this.invaders.entries()) {
        if (
          //start taken directly from chatGPT
          bullet.x > invader.x &&
          bullet.x < invader.x + invader.width &&
          bullet.y > invader.y &&
          bullet.y < invader.y + invader.height
        ) {
          ////end taken directly from ChatGPT
          this.bullets.splice(index, 1);
          console.log(this.bullets);
          this.invaders.splice(indexInvader, 1);
          break;
        }
      }
    }
  } //end help erik Second Year NMD student

  ofScreen() {
    //check if bullet goes of screen top edge or out of bounds
    //Start help chat gpt
    for (let [index, bullet] of this.bullets.entries()) {
      if (
        bullet.x < 0 ||
        bullet.x > width ||
        bullet.y < 0 ||
        bullet.y > height
      ) {
        this.bullets.splice(index, 1); // remove bullet from screen
      }
    }
  }

  invaderShoot() {
    // Invader shooting at player at random
    let sortedInvaders = [];

    // First, sort the invaders based on their x position
    this.invaders.forEach((invader) => {
      let foundList = sortedInvaders.find((list) => invader.x === list[0].x);

      if (foundList) {
        foundList.push(invader); // If the list for this x exists, add to it
      } else {
        sortedInvaders.push([invader]); // If not, create a new list for this x
      }
    });

    sortedInvaders.forEach((list) => {
      list.sort((a, b) => b.y - a.y); // Sort invaders within each group by y value in descending order
    });

    let chosenInvader =
      sortedInvaders[Math.floor(Math.random() * sortedInvaders.length)][0];

    this.bullets.push(
      new Bullet(
        chosenInvader.x + chosenInvader.width / 2,
        chosenInvader.y + chosenInvader.height,
        5,
        10,
        -10
      )
    );
  } //end help ChatGpt

  playerHit() {
    if (
      bullet.x > player.x &&
      bullet.x < player.x + player.width &&
      bullet.y > player.y &&
      bullet.y < player.y + player.height
    ) {
    }
  }
}
