let cWidth = 600;
let numOfSquares = 15;
let squareSize = cWidth/numOfSquares;

function setup(){
  createCanvas(cWidth, cWidth);
  colorMode(RGB,numOfSquares,numOfSquares,numOfSquares);
  rectMode(CENTER);

}

function draw() {
  background(0);

for(let j = 0; j < numOfSquares; j++){
  for(let i = 0; i < numOfSquares; i++){
    let transX = i*squareSize+squareSize/2;
    let transY = j*squareSize+squareSize/2;


    let col = color(i,numOfSquares-j,numOfSquares-j);
    push();
    translate(transX,transY);

    //Calculate the angle between the mouse and object
    let rotValue = atan2(mouseY-transY, mouseX-transX);
    rotate(rotValue);

    noStroke();
    fill(col);
    ellipse(0, 0, squareSize, squareSize);

    fill(0);
    ellipse(10,0,squareSize/4,squareSize/4);
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
