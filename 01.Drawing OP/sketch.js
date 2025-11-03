function setup() {
  createCanvas(400, 400); 
 
}

function draw() {
  background(220); // Grey background

  //Face
  fill(255); // white fill for head
  stroke(255, 0, 0); // r, g, b
  circle(200, 200, 250) //x, y, d


  // eyes
  fill(255, 0, 0); // r, g, b
  circle(150, 170, 50); //  x, y, d. left eye
  circle(250, 170, 50) // x, y, ,d . right eye
 
  //blood tears

  fill(255, 0, 0)
  ellipse(145,180, 20, 60 ) //x, y, w, h
  ellipse(255,180, 20, 65 )
 
 
  // smile
  stroke(255, 0, 0); // red color for the stroke
  strokeWeight(10); // the thickness of the circle
  noFill(); // I discovered I dont actually need fill for the arc/smile, because including a fill makes it look like a semi-circle, not an arc
  arc(width / 2, height / 2 + 30, 120, 100, 0, PI); // smile/arc (I had to search up how to do this)
}
