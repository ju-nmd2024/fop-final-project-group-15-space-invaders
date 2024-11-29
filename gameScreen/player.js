export default class Player {
  constructor(x, y, width, height, image) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.colour = (255, 255, 255);
    this.velocity = 1;
    this.image = image;
  }

  //   turnLeft() {
  //     this.x = -1;
  //     this.y = 0;
  //   }

  //   turnRight() {
  //     this.x = 1;
  //     this.y = 0;
  //   }

  draw() {
    push();
    translate(this.x, this.y);
    fill(this.colour);
    image(this.image, 0, 0, 50, 50);
    pop();

    // this.turnLeft();
    // this.turnRight();
  }
}

//function keyPressed() {
//   if (keyCode === LEFT_ARROW) {
//     player.turnLeft();
//   }
//   if (keyCode === RIGHT_ARROW) {
//     player.turnRight();
//   }
