let cWidth = 800;
let cHeight = 800;
let numOfShapes=10;
let shapeSize = cWidth / numOfShapes;
let rotVal = 90;
let pg;
let pg2;
let secondColor;
let firstColor;

function setup() {
    createCanvas(cWidth, cHeight);
    colorMode(RGB, numOfShapes, numOfShapes, numOfShapes);
    angleMode(DEGREES);
    noLoop();
}

function draw() {
    background(0);
    for (let j = 0; j < numOfShapes; j++) {
        for (let i = 0; i < numOfShapes; i++) {
            let transX = i * shapeSize+shapeSize;
            let transY = j * shapeSize-shapeSize/2;
            push();
            translate(transX, transY);
            //rand for color selection
            let randColor = random(0,1);
            //randDraw for shape
            let randShape = round(random(0,1));
            //Nested if/else statements for each shape and color
            //If the resulting modulo is 0, draw one shape, else draw the second
            if (randShape == 0){
              //FIRST SHAPE
              //If the random value for the FIRST shape is less than/equal to 0.3, make a red shape
                if(randColor <= 0.3){
                rotate(rotVal);
                firstColor = color(numOfShapes,0,0);
                makeGraphic(firstColor);
                image(pg, 0, 0);
              } //If the random value for the FIRST shape is higher than 0.3, make a white shape
              else{
                rotate(rotVal);
                firstColor = color(numOfShapes,numOfShapes,numOfShapes);
                makeGraphic(firstColor);
                image(pg, 0, 0);
              }
            } else {
                if(randColor <= 0.3){
                //SECOND SHAPE
                //If the random value for the SECOND shape is less than/equal to 0.3, make a red shape
                rotate(rotVal);
                secondColor = color(numOfShapes,0,0);
                makeGraphic2(secondColor);
                image(pg2, 0, 0);
              } else{
                //If the random value for the SECOND shape is higher than 0.3, make a white shape
                rotate(rotVal);
                secondColor = color(numOfShapes,numOfShapes,numOfShapes);
                makeGraphic2(secondColor);
                image(pg2, 0, 0);
              }
            }
            pop();
        }
    }
}

//MAKE FIRST GRAPHIC FUNCTION
function makeGraphic(_firstColor) {
    //Create First Graphic (RED)
    pg = createGraphics(shapeSize * 3, shapeSize * 3);
    pg.background(0, 0);
    pg.noStroke();

    //SHADOW
    pg.fill(0, 0, 0, 100);
    pg.quad(0,0, shapeSize, 0, shapeSize * 2, shapeSize, shapeSize, shapeSize);
    pg.filter(BLUR, 5);

    //SHAPE
    pg.fill(_firstColor);
    pg.quad(10, 0, shapeSize+10, 0, shapeSize * 2+10, shapeSize, shapeSize+10, shapeSize);
    return (pg);
}

//MAKE SECOND GRAPHIC FUNCTION
function makeGraphic2(_secondColor) {
    //CREATE SECOND GRAPHIC (WHITE)
    pg2 = createGraphics(shapeSize * 3, shapeSize * 3);
    pg2.background(0, 0);
    pg2.noStroke();

    //SHADOW
    pg2.fill(0, 0, 0, 100);
    pg2.quad(shapeSize, 0, shapeSize * 2, 0, shapeSize, shapeSize, 0, shapeSize);
    pg2.filter(BLUR, 5);

    //SHAPE
    pg2.fill(_secondColor);
    pg2.quad(shapeSize+10, 0, shapeSize * 2+10, 0, shapeSize+10, shapeSize, 10, shapeSize);
    return (pg2);
}

//function keyPressed to take images of canvas.
function keyPressed() {
    if (key == 's' || key == 'S') {
        saveCanvas(gd.timestamp(), 'png');
    }
}
