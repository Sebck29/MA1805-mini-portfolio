

function setup() {
  createCanvas(windowWidth, windowHeight);
}
let i = 0;
let words = ['The Mentalist', 'is pretty', 'good'];
let nums = [   1,       20,     66,       88]


function draw() {
  background(200);
  textSize(50);
  textAlign(CENTER);
  text(words[0], 200, 200);  
  //text(nums[0], 200, 255);  
}

function mouseClicked() {
  //i++;
  //if(i>=words.length){
  //  i = 0;
  //}
}
