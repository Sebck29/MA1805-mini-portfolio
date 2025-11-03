let beat;
let isPaused = true; 
let capture;
let video; 
let thetext = ["Click", "for", "a", "fun", "Time"] //I've tried to implement multiples in this file aswell, asking to click to play the music but i can't work out how to do both

function preload(){
  beat = loadSound("summer-disco-362344.mp3");
  video = createVideo('Disco Ball.mp4');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  capture = createCapture(VIDEO);
  capture.size(800, 800);
  capture.hide();
  frameRate(10)


  if (isPaused === true) {
    text('Click to play', 50, 50);
  } else {
    text('Click to pause', 50, 50);
  }

  
  video.hide(); // Required to hide HTML  vid
  video.play();
}

function draw() {
  image(capture, 0, 0, 320, 240);

  image(video, 400, 0, 350, 240);

   //text
  textSize(60)
  text(word, 20, height/2);

  word = thetext[i]

  i=i+1
  if (i> thetext.length){
  i=0;
  }
  console.log(i)
}

function mouseClicked(){
 if (isPaused === true) {
    // If the beat is paused,
    // play it.
    beat.play();
    isPaused = false;
  } else {
    // If the beat is playing,
    // the pause button.
    beat.pause();
    isPaused = true;

    // I tried to get the Click to play button 
  }
}

//for the entire Pause/Play section I had to go to p5.js website for help.
