import StartScreen from "./startScreen/startScreen.js";
import InstructionScreen from "./instructionsScreen/instructionScreen.js";
import GameScreen from "./gameScreen/gameScreen.js";

let state = "playGame";
let startScreen = new StartScreen(0, 0);
let instructionScreen = new InstructionScreen(0, 0);
let gameScreen = new GameScreen(0, 0);

export let images;

function preload() {
  images = {
    invader1: loadImage("images/spaceinvader_mushroomalive.png"),
    invader2: loadImage("images/Space-Invader---Purpule.png"),
    invader3: loadImage("images/spaceinvader_octopuss.png"),
    // invader4: loadImage()
    // invader5: loadImage
  };
}
window.preload = preload;

function setup() {
  gameScreen.setup();
  createCanvas(1000, 1000);
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

//   if (mouseIsPressed) {
//     if (myButton.hitTest(mouseX, mouseY)) {
//       startScreen();

// function mouseClicked() {
//   startScreen.mouseClicked();
// }

function draw() {
  if (state === "start") {
    startScreen.draw();
  } else if (state === "instructions") {
    instructionScreen.draw();
  } else if (state === "playGame") {
    gameScreen.draw();
  }
}

// } else if (state === "instructions") {
//   rulesScreen();
// } else if (state === "playGame") {
//   gameScreen();
// } else if (state === "gameOver") {
//   gameOverScreen();
// } else if (state === "youWin") {
//   youWinScreen();

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

// function keyPressed() {
//   if (keyCode === LEFT_ARROW) {
//     snake.direction.turnLeft();
//   }
//   if (keyCode === RIGHT_ARROW) {
//     snake.direction.turnRight();
//   }
//   if (keyCode === UP_ARROW) {
//     snake.direction.turnUp();
//   }
//   if (keyCode === DOWN_ARROW) {
//     snake.direction.turnDown();
//   }
//   return false;
// }
