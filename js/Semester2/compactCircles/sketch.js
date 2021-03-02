let points = [];
let maxR = 100;
let minR = 10;

function setup() {
createCanvas(1000, 1000);
background(0);

//Pushing the root vector value into the array
// points.push(createVector(width/2, height/2));
// ellipse(points[0].x, points[0].y, shapeSize, shapeSize);

}

function draw() {
    if(points.length < 50){
      let tempObj = new Circle (random(0,width), random(0,height), random(minR, maxR));
      let temp = checkDistance(tempObj);
      //console.log(temp);
      if(temp){
        noFill();
        stroke(255);
        strokeWeight(5);
        ellipse(tempObj.position.x, tempObj.position.y, tempObj.radius, tempObj.radius);
        points.push(tempObj);
      }
   }
}

//Check the distance between the object being drawn and previous objects to determine intersection
function checkDistance(_tempObj) {
  let check;
  for (let i = 0; i < points.length; i++) {
    check = dist(_tempObj.x, _tempObj.y, points[i].x, points[i].y) - _tempObj.radius;
    console.log(check);
      if(check < 0){
        return null;
      }
   }
   return true;
}

class Circle {
  constructor(_x,_y,_r) {
    this.position = createVector(_x,_y);
    this.radius = _r;
  }
}

//function keyPressed to take images of canvas.
function keyPressed() {
    if (key == 's' || key == 'S') {
        saveCanvas(gd.timestamp(), 'png');
    }
}
