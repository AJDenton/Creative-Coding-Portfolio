let numOfLines;
let stepAngle;
let lineSize;

function setup() {
  createCanvas(500, 500);
  colorMode(HSB,360,100,100);
  background(0);
  angleMode(RADIANS);
}

function draw() {
  rad = TWO_PI;
  numOfLines = map(mouseX, 0, width, 10, 50);
  background(0);
  stepAngle = rad/numOfLines;
  lineSize = 100;

  stroke(360,0,100);
  strokeWeight(5);

for(let i=0; i<=rad; i+= stepAngle){
  push();
  translate(width/2,height/2);
  rotate(i);
  line(0,0,lineSize,lineSize);
  pop();
  }

}

//function keyPressed to take images of canvas.
function keyPressed() {
    if (key == 's' || key == 'S') {
        saveCanvas(gd.timestamp(), 'png');
    }
}
