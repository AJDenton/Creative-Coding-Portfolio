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
    let distance = dist(mouseX, mouseY, transX, transY);
    let scale = map(distance, 0, width, 1, 10);
    let scaleSmall = map(distance, 0, 200, 1, 20);

    rotate(rotValue);
    fill(col);
    noStroke();
    ellipse(0, 0, shapeSize/scale, shapeSize/scale);

    fill(255);
    ellipse(15,0,shapeSize/scaleSmall,shapeSize/scaleSmall);
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
