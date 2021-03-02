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

        //If the xpos position is less than or greater than width OR the ypos is less than of greater than height of canvas
        if (xPos < 0 || xPos > width || yPos < 0 || yPos > height) {
            //Call the getRandomAngle function with xPos and yPos as passed parameters
            angle = getRandomAngle(xPos, yPos)
        }
    }

}

function getRandomAngle(_x, _y) {

    let randomAngle = (floor(random(-angleCount, angleCount)) + 0.5) * 90 / angleCount;

    //console.log(randomAngle);

    //Bounce off top of canvas
    if (_y < 0) {
        return randomAngle
    }

    //Bounce off bottom of canvas
    if (_y > height) {
        return randomAngle + 180;
    }

    //Bounce off right side of canvas
    if (_x > width) {
        return randomAngle + 90;
    }

    //Bounce off left side of canvas
    if (_x < 0) {
        return randomAngle + 270;
    }
}
