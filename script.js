/**
 * Project 3 versions 0-4 - 2D Web Game
 * Name: summer loring 
 * 
 * Use this template to get started creating a simple 2D game for the web using P5.js. 
 */
var gameState = "splash"
var player1;
var gameTimer;
var testBox; // a box to preview on the splash screen
var dropTimer; // regulate box drops
var presents = new Array(0); // an empty array called "presents"
var score = 0; // keep track of points (starting at 0)

function setup() {
  createCanvas(600, 400);
timer = new Timer(25000); // 25 second timer
  createCanvas(600, 400);
player1 = new Player(width/2, height/2)
dropTimer = new Timer(1000);
testBox = new Box(width/2, height/3);

} 

function draw() {
  background(200);
  /* un-comment each line to see it work */
  splash(); // call the splash screen function (below)
  play(); // call the play screen function (below)
  gameOver(); // call the gameOver screen function (below)
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
  testBox.display();
testBox.spin();
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
    if(dropTimer.isFinished()) {
      let p = new Box(random(width), -40);
      // new box, anywhere across the width of the canvas, but 40px above the canvas
      presents.push(p); // add object 'p' to the 'presents' Array
      dropTimer.start(); // restart timer for next drop
    }
    for (let i = 0; i < presents.length; i++) {
      presents[i].display();
      presents[i].move();
      presents[i].spin();
    
      if (presents[i].y > height) {
        presents.splice(i, 1); // remove from array
        score--; // decrement score by 1
      }
    
      let d = dist(presents[i].x, presents[i].y, player1.x, player1.y);
      // d is now the distance in pixels between presents[i] and player1
      if (d < 50) {
        presents.splice(i, 1); // remove the present from the array
  
      }
      if (d < 50) {
        presents.splice(i, 1);
        score ++; // add 1 point!
      
      
      }
    } // end of for() loop
  
textAlign(LEFT);
text("Elapsed time: " + timer.elapsedTime, 20, 20); //show elapsed time in ms
text("Score: " + score, 20, 40);
    
}
  



function gameOver() {
  // this is what you see when the game ends
  background(0);
  fill(255, 0, 0)
  textAlign(CENTER);
  textSize(16);
  text("Game Over!", width / 2, height / 2);
  text("Your final score: " + score, width/2, height * 2/3);
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
  dropTimer.start(); // start the drop timer for presents
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


