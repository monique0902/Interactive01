

function setup () {
  createCanvas (windowWidth, windowHeight);
  background (0);
}


function draw () {
    display();
}

function display() {
  noFill();
  stroke (random (255), random(255), random(255)); 

  translate(width/2, height/2); 
  for (var i = 0; i <10; i ++) {
  rotate(radians(60));
  rect(-26, -26, 52, 52); 

  ellipse (mouseX, mouseY, 40, 40);
 
}
}





  
