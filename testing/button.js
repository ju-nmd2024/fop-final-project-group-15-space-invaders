// class Button {
//   constructor(x, y, width, height, text, callback) {
//     this.x = x;
//     this.y = y;
//     this.width = width;
//     this.height = height;
//     this.text = text;
//     this.backgroundColour = "#cccccc";
//     this.callback = callback;
//   }

//   //Färger med hexkod
//   draw() {
//     push();
//     translate(this.x, this.y);
//     stroke("#4d4d4d");
//     strokeWeight(4);
//     fill(this.backgroundColour);
//     rect(0, 0, this.width, this.height, this.height / 2);

//     // Define text
//     noStroke();
//     fill("4d4d4d");
//     textSize(this.height / 2);
//     textAlign(CENTER);
//     text(this.text, 0, this.height / 4, this.width);
//     pop();
//   }

//   hitTest(x, y) {
//     return (
//       x > this.x &&
//       x < this.x + this.width &&
//       y > this.y &&
//       y < this.y + this.height
//     );
//   }

//   mouseClicked() {
//     if (this.hitTest(mouseX, mouseY)) {
//       this.callback();
//     }
//   }
// }

// //Child of button
// // Super = sträcker sig till "parent class", vilket innebär
// // alla variabler i class1 översätts till class2

// const myButton = new Button(170, 150, 250, 60, "Start Game", () => {
//   console.log("Start Game was clicked");
// });
// const rulesButton = new rulesButton(170, 300, 250, 60, "Instrucitons", () => {
//   console.log("Instructions was clicked");
// });

// function draw() {
//   myButton.draw();
//   rulesButton.draw();
// }

// function mouseClicked() {
//   myButton.mouseClicked();
//   rulesButton.mouseClicked();
// }
