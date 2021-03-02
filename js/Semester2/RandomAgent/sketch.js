let circleXPos = 400;
let circleYPos = 400;
let stepSize = 5;

function setup(){
createCanvas(800,800);
background(0);
}

function draw(){

let speed = map(mouseX,0,width,2,40);
let diam = map(mouseY,0,height,1,10);

for(let x = 0; x < speed; x++){
let directionX = round(random(-1,1));
let directionY = round(random(-1,1));

let moveX = directionX * stepSize;
let moveY = directionY * stepSize;

circleXPos += moveX;
circleYPos += moveY;

noStroke();
fill(255, 40);
ellipse(circleXPos,circleYPos,2,2);
//console.log(direction);
}
}

//function keyPressed to take images of canvas.
function keyPressed() {
    if (key == 's' || key == 'S') {
        saveCanvas(gd.timestamp(), 'png');
    }
}
