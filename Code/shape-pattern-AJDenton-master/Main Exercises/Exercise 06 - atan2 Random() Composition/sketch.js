let cWidth = 600;
let numOfSquares = 6;
let squareSize = cWidth/numOfSquares;

function setup(){
  createCanvas(cWidth, cWidth);
  colorMode(RGB,numOfSquares,numOfSquares,numOfSquares);
  rectMode(CENTER);
  noLoop();
}

function draw() {
  background(255);

for(let j = 0; j < numOfSquares; j++){
  for(let i = 0; i < numOfSquares; i++){
    let transX = i*squareSize+squareSize/2;
    let transY = j*squareSize+squareSize/2;
    let col = color(numOfSquares/6,numOfSquares/6,numOfSquares/5);
    push();
    translate(transX,transY);

    //Center ellipses
    fill(col);
    noStroke();
    ellipse(0,0,squareSize/20,squareSize/20,5);

    noFill();
    stroke(col);
    strokeWeight(4);
    ellipse(0,0,squareSize/3,squareSize/3);

    //random number return
    let rand = round(random(0,3));
    //Random rotation
    let randRot = random(0,360);

    noFill();
    stroke(col);

    //Going through if else statements and drawing arcs based on random number returned
    if(rand == 0){
      arc(0,0,squareSize,squareSize,0,PI);
    }else if (rand == 1){
      rotate(HALF_PI);
      arc(0,0,squareSize,squareSize,0,PI);

      //Inner Arc
      rotate(randRot);
      arc(0,0,squareSize/1.5,squareSize/1.5,0,QUARTER_PI);
    }else if (rand == 2){
      rotate(PI);
      arc(0,0,squareSize,squareSize,0,PI);

      //Inner Arc
      rotate(randRot);
      arc(0,0,squareSize/1.5,squareSize/1.5,0,random(QUARTER_PI,PI+TWO_PI));
    }else{
      rotate(PI+HALF_PI);
      arc(0,0,squareSize,squareSize,0,PI);

      //Inner Arc (Randomly sized between QUARTER_PI and PI+HALF_PI)
      rotate(randRot);
      arc(0,0,squareSize/1.5,squareSize/1.5,0,random(QUARTER_PI,PI+HALF_PI));
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
