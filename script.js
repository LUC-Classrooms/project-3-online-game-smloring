/**
 * Project 3 versions 0-4 - 2D Web Game
 * Name: summer loring 
 * 
 * Use this template to get started creating a simple 2D game for the web using P5.js. 
 */
var gameState = "splash"
var player1;
var gameTimer;
function setup() {
  timer = new Timer(25000); // 25 second timer
  createCanvas(600, 400);
player1 = new Player(width/2, height/2)
} 

function draw() {
  background(200);
  /* un-comment each line to see it work */
  //splash(); // call the splash screen function (below)
  //play(); // call the play screen function (below)
  //gameOver(); // call the gameOver screen function (below)
  switch (gameState)  {
    case "splash" :
      splash(); // go to the "splash" screen
      break;
    case "play" :
      play(); // go to the "play" screen
      break;
    case "gameOver" :
      gameOver(); // go to the "game over" screen
      break;
    default :
      console.log("no match found - check your mousePressed() function!");
  }
  }


function splash() {
  // this is what you would see when the game starts
  background(200);
  textAlign(CENTER);
  textSize(16);
  text("Let's Play a Game!", width / 2, height / 2);
  textSize(12);
  text("(click the mouse to continue)", width / 2, height / 2 + 30);
}

function play() {
  // this is what you see when the game is running 
  background(0, 200, 0);
  fill(0, 0, 200)
  textAlign(CENTER);
  textSize(16);
  text("This is where the Game happens", width / 2, height / 2);
player1.x = mouseX;
  player1.display();
  if (timer.isFinished()) {
    gameState = "gameOver"
  }
  textAlign(LEFT);
text("elapsed time: " + timer.elapsedTime, 40, 100);
// show elapsed time in top left corner
 
}

function gameOver() {
  // this is what you see when the game ends
  background(0);
  fill(255, 0, 0)
  textAlign(CENTER);
  textSize(16);
  text("Game Over!", width / 2, height / 2);
}

function mousePressed(){
  if(gameState == "splash") { 
    gameState = "play"; 
} // go to "play"
else if(gameState == "play") { 
    gameState = "gameOver"; 
} // go to "gameOver"
else if(gameState == "gameOver") { 
    gameState = "splash"; 
} // go to "splash"
if (gameState == "splash") {
  gameState = "play"; // go to the play() screen
  timer.start(); // starts the timer
}
else if (gameState == "play") {
  // gameState = "gameOver";
}
}

function keyPressed() {
  switch(keyCode) {
    case UP_ARROW :
      
      break;
    case DOWN_ARROW :
      
      break;
// add more cases for more keys ...
    default : // do this if the key doesn't match the list ...
      console.log("press the arrow keys to move player1");
  }
}

