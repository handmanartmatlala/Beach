
let fingers;

function setup() {
  createCanvas(windowWidth, windowHeight);
  // specify multiple formats for different browsers
  fingers = createVideo(['Beach - 9888.mp4']);
  fingers.hide(); // by default video shows up in separate dom
  // element. hide it and draw it to the canvas
  // instead
}

function draw() {
  background(0);
  
  scale(1.4);
  //tint(126, 204, 182);
  image(fingers, 0, 0); // draw a second copy to canvas
}


function mousePressed() {
  fingers.loop(); // set the video to loop and start playing
}