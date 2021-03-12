let cWidth = 800;
let stepSize = 1;
let vPoints = [];
let numOfSeg = 15;
let r = 150;
let pointRadius = 10;

function setup() {
    createCanvas(cWidth, cWidth);
    background(0);
    let angle = radians(360/numOfSeg);
    //Obtaining the required points to draw the cirlce using lines and points
    for(let i=0; i<=numOfSeg; i++){
      let vx = cos(angle*i)*r;
      let vy = sin(angle*i)*r;
      vPoints.push(createVector(vx,vy));
    }
}

function draw(){

  translate(mouseX,mouseY);

  //Creating a new curve object
  let myCurve = new Curve(r, pointRadius, vPoints);
  //let mySecondCurve = new Curve(r, pointRadius, vPoints);

  //Calling the render from the class Curve to draw the objects
  myCurve.render();
  //mySecondCurve.render();
}

//function keyPressed to take images of canvas.
function keyPressed() {
    if (key == 's' || key == 'S') {
        saveCanvas(gd.timestamp(), 'png');
    }
}
