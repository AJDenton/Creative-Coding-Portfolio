//Position values and steps
let xPos = 400;
let yPos = 400;
let xPos2 = 400;
let yPos2 = 400;
let stepSize = 1;

//Movement option arrays
let optionsX = [-1, -1, 0, 1, 1];
let optionsY = [-1, 1, 1, 1, 1];
let optionsX2 = [-1, -1, 0, 1, 1];
let optionsY2 = [-1, -1, -1, -1, 1];

//Color and offset
let col1;
let col2;
let offset = 5;

function setup() {
    createCanvas(800, 800);
    background(15);
}

function draw() {
  // col1 = color(35, 61, 77);
  // col2 = color(254, 127, 45);

  // col1 = color(100,0,0);
  // col2 = color(255,0,0);

  col1 = color(50);
  col2 = color(255);
  //keyPressed();
  //Speed mapped by mouse
  let speed = map(mouseX, 0, width, 2, 20);
  let diam = map(mouseY, 0, height, 1, 10);

  for (let x = 0; x < speed; x++) {
    //Movement for line1
    let moveX = optionsX[floor(random(0, optionsX.length))] * stepSize;
    let moveY = optionsY[floor(random(0, optionsY.length))] * stepSize;


    //Line1 movement
    xPos += moveX;
    yPos += moveY;

    //movement for line2
    let moveX2 = optionsX2[floor(random(0, optionsX2.length))] * stepSize;
    let moveY2 = optionsY2[floor(random(0, optionsY2.length))] * stepSize;

    //Line2 movement
    // xPos2 += moveX2;
    // yPos2 += moveY2;

    //Line 2 stationary
    xPos2 = width/2;
    yPos2 = height/2;

    //Statements to detect and reposition object position at esge of canvas
    if (xPos > width) {
        xPos = 0;
    } else if (xPos < 0) {
        xPos = width;
    }

    if (yPos > height) {
        yPos = 0;
    } else if (yPos < 0) {
        yPos = height;
    }

    if (xPos2 > width) {
        xPos2 = 0;
    } else if (xPos2 < 0) {
        xPos2 = width;
    }

    if (yPos2 > height) {
        yPos2 = 0;
    } else if (yPos2 < 0) {
        yPos2 = height;
    }

    strokeCap(SQUARE);
    strokeWeight(diam);
    //Line 1 draw
    noFill();
    stroke(col1);
    line(xPos2+offset, yPos2,xPos, yPos+offset, diam, diam);
    //Line 2 draw
    noFill();
    stroke(col2);
    line(xPos, yPos,xPos2+offset, yPos2+offset, diam, diam);

    }
}

function keyPressed() {
    if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');

    //refresh the canvas, reset starting positions of the walkers
    if(keyCode == DELETE){
      clear();
      xPos = width/2;
      yPos = height/2;
      xPos2  = width/2;
      yPos2 = height/2;
      background(0);
    }

    //option 1, smallest step size
    if (key == '1') {
      stepSize = 1;
      // col1 = color(0)
      // col2 = color(100,0,0);
    }
    if (key == '2') {
      stepSize = 5;
      // col1 = color(255,0,0)
      // col2 = color(255);
    }
    if (key == '3') {
    stepSize = 10;
    }
    if(keyIsDown(SHIFT)){
      frameRate(0);
    } else{
      frameRate(60);
    }
}
