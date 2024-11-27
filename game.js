import StartScreen from "./startScreen/startScreen.js";

let state = "start";
let startScreen = new StartScreen(0, 0);

function preload() {}
window.preload = preload;

function setup() {
  createCanvas(innerWidth, innerHeight);
}
window.setup = setup;

// function startScreen() {
//   background(0, 140, 0);
// }

// function rulesScreen() {
//   background(0, 0, 0);
// }

// function gameScreen() {
//   background(0, 140, 255);
// }

// function youWinScreen() {
//   background(255, 0, 0);
// }
// function gameOverScreen() {
//   background(255, 0, 140);
// }

function draw() {
  if (state === "start") {
    startScreen.draw();
    //   } else if (state === "instructions") {
    //     rulesScreen();
    //   } else if (state === "playGame") {
    //     gameScreen();
    //   } else if (state === "gameOver") {
    //     gameOverScreen();
    //   } else if (state === "youWin") {
    //     youWinScreen();
  }
}
window.draw = draw;

// function mouseClicked() {
//   if (state === "start") {
//     state = "playGame";
//   } else if (state === "playGame") {
//     state = "gameOver";
//   } else if (state === "gameOver") {
//     state = "start";
//   }
// }
