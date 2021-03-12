let size = 50;
let rotVal;
let startCol;
let endCol;

function setup(){
  createCanvas(600,600);
  background(0);
  colorMode(HSB, 360, 100, 100);
  rectMode(CENTER);
  //noStroke();
}

function draw(){
  startCol = color(360, 100, 100);
  endCol = color(50,100,100);

  background(0);

  for(let j = 0; j<height;j+=size){
    for(let i = 0; i<width;i+=size){
      push();
        translate(i+size/2, j+size/2);
        rotVal = atan2(mouseY - j ,mouseX - i);
        rotate(rotVal);
        stroke(lerpColor(startCol, endCol, i/j-1));
        strokeWeight(2);

        noFill();
        //fill(i,j,100);
        rect(0,0,size,size);
      pop();
      }
    }
  }

  //function keyPressed to take images of canvas.
function keyPressed() {
    if (key == 's' || key == 'S') {
        saveCanvas(gd.timestamp(), 'png');
    }
}
