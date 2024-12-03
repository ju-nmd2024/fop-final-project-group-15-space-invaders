import StartScreen from "./startScreen/startScreen.js";
import InstructionScreen from "./instructionsScreen/instructionScreen.js";
import GameScreen from "./gameScreen/gameScreen.js";

let state = "instructions";
let startScreen = new StartScreen(0, 0);
let instructionScreen = new InstructionScreen(0, 0);
let gameScreen = new GameScreen(0, 0);

export let images;

// Window
window.setup = setup;
window.draw = draw;
window.preload = preload;

function preload() {
  images = {
    invader1: loadImage("images/spaceinvader_1.png"),
    invader2: loadImage("images/spaceinvader_2.png"),
    invader3: loadImage("images/spaceinvader_3.png"),
    invader4: loadImage("images/spaceinvader_4.png"),
    player: loadImage("images/spaceinvaders_player.png"),
    startBackground: loadImage("images/spaceinvaders_background.png"),
    instructionsBackground: loadImage("images/spaceinvaders_instructions.png"),
  };
}

function setup() {
  gameScreen.setup();
  createCanvas(1000, 1000);
}

//const player = new Player(500, 900, 50, 50, images.player);

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
    //player.draw();
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
