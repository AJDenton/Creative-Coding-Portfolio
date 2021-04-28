let cWidth = 600;
let numOfShapes = 15;
let shapeSize = cWidth/numOfShapes;

function setup(){
  createCanvas(cWidth, cWidth);
  colorMode(RGB,numOfShapes,numOfShapes,numOfShapes);
  rectMode(CENTER);

}

function draw() {
  background(0);

for(let j = 0; j < numOfShapes; j++){
  for(let i = 0; i < numOfShapes; i++){
    let transX = i*shapeSize+shapeSize/2;
    let transY = j*shapeSize+shapeSize/2;


    let col = color(i,numOfShapes-j,numOfShapes-j);
    push();
    translate(transX,transY);

    //Calculate the angle between the mouse and object
    let rotValue = atan2(mouseY-transY, mouseX-transX);
    rotate(rotValue);

    noStroke();
    fill(col);
    ellipse(0, 0, shapeSize, shapeSize);

    fill(0);
    ellipse(10,0,shapeSize/4,shapeSize/4);
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
