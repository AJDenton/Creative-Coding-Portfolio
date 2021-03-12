let cWidth = 700;
let stepSize = 1;
let vPoints = [];
let numOfSeg = 5;
let r = 250;

function setup() {
    createCanvas(cWidth, cWidth);
    background(0);
    let angle = radians(360/numOfSeg);
    //Obtaining the required points to draw the cirlce using
    for(let i=0; i<=numOfSeg; i++){
      let vx = cos(angle*i)*r;
      let vy = sin(angle*i)*r;
      vPoints.push(createVector(vx,vy));
    }
}

function draw(){
  background(0);
  translate(cWidth/2,cWidth/2);
//Calling function to draw
  drawPoints();
}

function drawPoints(){
  //push();
  //These draw through every point stored within the array
    for(let i = 0; i<vPoints.length; i++){
      //strokeWeight(10);
      noStroke();
      fill(255,0,0);
      ellipse(vPoints[i].x, vPoints[i].y,10,10);
    }

  //These
    for(let i = 0; i<vPoints.length - 1; i++){
      stroke(255);
      strokeWeight(2);
      line(vPoints[i].x, vPoints[i].y, vPoints[i + 1].x, vPoints[i + 1].y);
    }

    line(vPoints[vPoints.length - 1].x, vPoints[vPoints.length - 1].y, vPoints[0].x, vPoints[0].y);
    //pop();
}

//function keyPressed to take images of canvas.
function keyPressed() {
    if (key == 's' || key == 'S') {
        saveCanvas(gd.timestamp(), 'png');
    }
}
