let myFont;
let bubbles = [];
let textPosW;
let textPosH;
let bubbleCount = 0.1;
let fontSize = 400;
let myWord = 'ROXIE';
let bubbleCol;



//Preloading the chosen font
function preload(){
    myFont = loadFont('Limelight.ttf');
}

function setup(){
    //Bubble color
    bubbleCol = color(255);
    //Creating canvas with WEBGL for 3D
    createCanvas(windowWidth,windowHeight, WEBGL);

    background(0);
    //Assigning font
    textFont(myFont);
    //Position for the text on the canvas
    textPosX = 0-fontSize*1.6;
    textPosY = 0+fontSize/3;

    //Assigning the textToPoints to an array
    let textArray = myFont.textToPoints(myWord, textPosX, textPosY, fontSize,{sampleFactor: bubbleCount});

    //For each item in the textArray, draw a shape
    for(let i = 0; i < textArray.length; i++){
        //the textPoint position will be assigned to each index's x and y position in the textArray
        let textPoint = textArray[i];
        //Drawing a new bubble from the Bubble class, at the textPoint's x and y positions
        let bubble = new Bubble(textPoint.x,textPoint.y);
        //Push the bubble object into the bubbles array
        bubbles.push(bubble);
    }   
}

function draw(){
    //setting ambient lighting for shape colors

    orbitControl();
    background(0);
    
    //for each of the bubble objects in the bubbles array, call the Bubble class functions
    for(let i = 0; i < bubbles.length; i++){
        let b = bubbles[i];
        b.behaviour();
        b.update();
        b.show();
        
    }
}


//function keyPressed to take images of canvas.
function keyPressed() {
    if (key == 's' || key == 'S') {
        saveCanvas(gd.timestamp(), 'png');
    }
}