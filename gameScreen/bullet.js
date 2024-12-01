export default class Bullet {
  constructor(x, y, width, height, speed) {
    this.x = x;
    this.y = y;
    // this.position = 0; // Where the bullet currently is
    this.width = 10;
    this.height = 20;
    this.speed = this.speed;
    // this.fire = false;
  }

  move() {
    this.speed = this.speed;
  }

  draw() {
    push();
    translate(this.x, this.y);
    fill(this.colour);
    rect(this.x, this.y, this.width, this.height);
    pop();

    this.move();
  }

  // Check if bullet is out ouf the screen
  edgeReached() {
    this.y < 0;
  }

  //   // Check for collision with an invader
  //   hits(invader) {
  //     return (
  //       this.x < invader.x + invader.width &&
  //       this.x + this.width > invader.x &&
  //       this.y < invader.y + invader.height &&
  //       this.y + this.height > invader.y
  //     );
  //   }
}
