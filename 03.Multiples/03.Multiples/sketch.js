let thetext = ["Click", "to", 'change', 'colours!']
let word = thetext[0]
let i = 0;

let rgb= [25, 25, 50]





function setup() {
  createCanvas(400, 400);
  frameRate(8)
 
}

function draw() {
  background(rgb)
  
  //text display// 
  textSize(60)
  text(word, 20, height/2);

  word = thetext[i]

  i=i+1
  if (i> thetext.length){
    i=0;
  }
  console.log(i)
}


function mouseClicked() {
 rgb = [random(255), random(255), random(255)]; 
}
