let cWidth = 1000;
let xPos = 500;
let yPos = 500;
let stepSize = 1;
let angle = 90;
let angleCount = 5;

function setup() {
    createCanvas(cWidth, cWidth);
    background(0)
}

function draw() {

    let speed = map(mouseX, 0, width, 2, 10);

    for (let x = 0; x < speed; x++) {

        stroke(255);
        //let randomStroke = floor(random(2, 18));
        strokeWeight(2);
        point(xPos, yPos);

        xPos += cos(radians(angle)) * stepSize;
        yPos += sin(radians(angle)) * stepSize;

        if (xPos < 0 || xPos > width || yPos < 0 || yPos > height) {
            angle = getRandomAngle(xPos, yPos)
        }
    }

}

function getRandomAngle(_x, _y) {
    let randomAngle = (floor(random(-angleCount, angleCount)) + 0.5) * 90 / angleCount;

    //console.log(randomAngle);

    if (_y < 0) {
        return randomAngle
    }
    if (_y > height) {
        return randomAngle + 180;
    }
    if (_x > width) {
        return randomAngle + 90;
    }
    if (_x < 0) {
        return randomAngle + 270;
    }
}

//function keyPressed to take images of canvas.
function keyPressed() {
    if (key == 's' || key == 'S') {
        saveCanvas(gd.timestamp(), 'png');
    }
}
