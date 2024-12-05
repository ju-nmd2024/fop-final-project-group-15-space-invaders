import StartScreen from "./startScreen/startScreen.js";
import InstructionScreen from "./instructionsScreen/instructionScreen.js";
import GameScreen from "./gameScreen/playGameScreen.js";
import GameOverScreen from "./gameOverScreen/gameOverScreen.js";
import globals from "./globals.js";
import WinScreen from "./winScreen/winScreen.js";

let startScreen = new StartScreen(0, 0);
let instructionScreen = new InstructionScreen(0, 0);
let gameScreen = new GameScreen(0, 0);
let gameOverScreen = new GameOverScreen(0, 0);
let youWinScreen = new WinScreen(0, 0);

export let images;

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
    youWinBackground: loadImage("images/spaceinvaders_winscreen.png"),
  };
}

function setup() {
  gameScreen.setup();
  createCanvas(1000, 1000);
}

function draw() {
  if (globals.state === "start") {
    startScreen.draw();
  } else if (globals.state === "instructions") {
    instructionScreen.draw();
  } else if (globals.state === "playGame") {
    gameScreen.draw();
  } else if (globals.state === "gameOver") {
    gameOverScreen.draw();
  } else if (globals.state === "youWin") {
    youWinScreen.draw();
  }
}
