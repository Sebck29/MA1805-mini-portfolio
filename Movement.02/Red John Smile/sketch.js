function setup() {
    createCanvas(600, 600);
    background(250, 250, 250);
}

function draw() {
    
    stroke(250, 0, 0); // outline for the cricle
    strokeWeight(4);
    fill(250, 250, 250);
    ellipse(200, 200, 300, 300); 

    
    // Face^^

    
    noStroke();
    fill(250, 0, 0); // red 
    ellipse(150, 150, 50, 50); // Left eye
    ellipse(250, 150, 50, 50); // Right eye

    //eyes^^

    
    noFill();
    stroke(255, 0, 0); // red 
    strokeWeight(5);
    arc(200, 250, 200, 150, 0, PI); // Smile 

    //smile^^
}
