let state = "start";

function setup() {
  createCanvas(800, 600);
}

function startScreen() {
  background(0, 140, 0);
}

function gameScreen() {
  background(0, 140, 255);
}

function youWinScreen() {
  background(255, 0, 0);
}
function gameOverScreen() {
  background(255, 0, 140);
}

function draw() {
  if (state === "start") {
    startScreen();
  } else if (state === "playGame") {
    gameScreen();
  } else if (state === "gameOver") {
    gameOverScreen();
  } else if (state === "youWin") {
    youWinScreen();
  }
}

function mouseClicked() {
  if (state === "start") {
    state = "playGame";
  } else if (state === "playGame") {
    state = "gameOver";
  } else if (state === "gameOver") {
    state = "start";
  }
}
