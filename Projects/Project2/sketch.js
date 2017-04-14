var song;

function preload() {
  song = loadSound("music.mp3");
}

function setup () {
  createCanvas (windowWidth, windowHeight);
  background (0);
  smooth();
  song.play();
}


function draw () {
  keyTyped(); 
  odesza(); 
}



function keyTyped() {
   if (key === 'a') {
    centerShape();
  } else if (key === 's') {
    randLines(); 
  } else if (key === 'd') {
    clear(); 
    background(0); }
}



function odesza() {
  textAlign (CENTER); 
  noStroke();
  fill(random(255), random(255), random(255));
  textFont("Helvetica");
  textSize (50);
  var v= "ODESZA";
  text (v, width * 0.88, height-60);

  noStroke();
  fill(255);
  textSize(12);


  var t= "SF PUBLIC LIBRARY | MAY 30, 2017";
  text (t, width * 0.88, height-40);

}

function centerShape() {
  // fill (0,30); 
  // rect (0,0, width, height);
  noFill();
  stroke (random (255), random(255), random(255)); 

  translate(width/2, height/2); 
  for (var i = 0; i <10; i ++) {
  rotate(radians(60));
  rect(-26, -26, 52, 52); 

  // pop();

  ellipse (mouseX, mouseY, 40, 40);
 
}
}





function randLines() {

  background(0);
  stroke(random(255),random (255), random(255));
  strokeWeight(2);
  line(random(width), random(height), random(width), random(height));
  line(random(width), random(height), random(width), random(height));

}



function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(0);
}


  
