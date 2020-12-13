let cWidth = 600;
let numOfSquares = 15;
let squareSize = cWidth/numOfSquares;

function setup(){
  createCanvas(cWidth, cWidth);
  colorMode(RGB,numOfSquares,numOfSquares,numOfSquares);
  rectMode(CENTER);
  noLoop();
}

function draw() {
  background(0);

for(let j = 0; j < numOfSquares; j++){
  for(let i = 0; i < numOfSquares; i++){
    let transX = i*squareSize;
    let transY = j*squareSize;
    let col = color(i,numOfSquares-j,numOfSquares-j);
    let colDark = color(i/2,numOfSquares/j,numOfSquares/j);
    push();
    translate(transX,transY);

    //Calculate the angle between the mouse and object
    let rotValue = atan2(mouseY-transY, mouseX-transX);
    let distance = dist(mouseX, mouseY, transX, transY);
    let scale = map(distance, 0, width, 1, 5);
    let scaleSmall = map(distance, 0, 200, 1, 20);

    stroke(col);
    strokeWeight(5);
    let rand = round(random(0,1));

if(rand == 0){
    line(0,squareSize,squareSize,0);
    } else{
    noStroke();
    fill(col);
    triangle(0,0,0,squareSize,squareSize,0);
    fill(colDark);
    triangle(squareSize,squareSize,0,squareSize,squareSize,0);
    }
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
