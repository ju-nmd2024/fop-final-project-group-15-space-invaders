import StartScreen from "./startScreen/startScreen.js";
import InstructionScreen from "./instructionsScreen/instructionScreen.js";
import GameScreen from "./gameScreen/gameScreen.js";
import GameOverScreen from "./gameOverScreen/gameOverScreen.js";
import globals from "./globals.js";

// let state = "playGame";
let startScreen = new StartScreen(0, 0);
let instructionScreen = new InstructionScreen(0, 0);
let gameScreen = new GameScreen(0, 0);
let gameOverScreen = new GameOverScreen(0, 0);

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
    lives: loadImage("images/spaceinvaders_lives.png"),
    startBackground: loadImage("images/spaceinvaders_background.png"),
    instructionsBackground: loadImage("images/spaceinvaders_instructions.png"),
    gameOverBackground: loadImage("images/spaceinvaders_gameOver.png"),
  };
}

function setup() {
  gameScreen.setup();
  createCanvas(1000, 1000);
}

//const player = new Player(500, 900, 50, 50, images.player);

//   if (mouseIsPressed) {
//     if (myButton.hitTest(mouseX, mouseY)) {
//       startScreen();

// function mouseClicked() {
//   startScreen.mouseClicked();
// }

function draw() {
  if (globals.state === "start") {
    startScreen.draw();
  } else if (globals.state === "instructions") {
    instructionScreen.draw();
  } else if (globals.state === "playGame") {
    gameScreen.draw();
  } else if (globals.state === "gameOver") {
    gameOverScreen.draw();
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
