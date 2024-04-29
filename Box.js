function Box(_x, _y){
  this.x = _x;
  this.y = _y;

  this.xSpeed = 0;
  this.ySpeed = random(1, 2); // 1 - 2 (falling)
  this.rSpeed = random(-.02, .02); // rotation speed

  this.angle = 0;

  /* choose a color scheme at random */
  if(random(100) > 50){ // 50-50 chance
    this.boxColor = color(random(180, 230), random(200, 230), 255); //blue
    
  } else {
    this.boxColor = color(255, 255, random(180, 230)); //yellow
    
  }

  this.display = function(){

    push();
    translate(this.x, this.y);
    rotate(this.angle);

    fill(this.boxColor);
    ellipse(0, -20, 40, 40); // Center circle
    ellipse(0, 20, 40, 40); // Bottom circle
    ellipse(-20, 0, 40, 40); // Left circle
    ellipse(20, 0, 40, 40); // Right circle
    fill(255); // Set fill color to white for the center of the flower
    ellipse(0, 0, 20, 20); // Center of the flower

    

    pop();

  }

  this.move = function() {
    this.y += this.ySpeed; // spin
  }

  this.spin = function() {
    this.angle += this.rSpeed; // spin
  }



}