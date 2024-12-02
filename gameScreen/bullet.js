export default class Bullet {
  constructor(x, y, width, height, speed) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.velocity = 5;
  }

  draw() {
    push();
    translate(this.x, this.y);
    fill(255);
    rect(0, 0, this.width, this.height);
    pop();

    this.move();
  }

  move() {
    this.y = this.y - this.velocity;
  }
  //video end help

  // Check if bullet is out ouf the screen
  // edgeReached(){
  //   this.y < 0;
  // }

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
