let points = [];
let shapeToMove;
let amount = 0;
let shapeSize = 10;
let destination;
let start;
let end;
let col;


function setup() {
createCanvas(1000, 1000);
//Pushing the root vector value into the array
points.push(createVector(width/2, height/2));
//Setting the destination to the first array value
destination = points[0];
//Creating a shape that will attach to the root shape. This is assigned to a random position on the canvas
shapeToMove = createVector(random(0,width), random(0,height));
//lerp colors
start = color(255,0,255);
end = color(0,255,255);
}

function draw() {
    background(0);

    let distance = shapeToMove.dist(destination);

    //if the distance between the root shape and the moving shape is less than the radius
    if(distance > shapeSize/2 + shapeSize/2){
        //Call moveShape function
        moveShape();
    } else{
        //push the moving shape position into the array
        points.push(shapeToMove);
        //Create a new shape to move randomly on the canvas
        shapeToMove = createVector(random(0,width), random(0,height));
        //Assign destination to the checkDist() function
        destination = checkDist();
        //Reset amount to 0
        amount = 0;
    }

//run loop as many times as there are array values
for (let i = 0; i < points.length; i++) {
    col = lerpColor(start, end, i/points.length);

    noFill();
    strokeWeight(shapeSize);
    stroke(col);
    //Draw a shape with the x and y position of the object in the array (depending on which loop the for loop is on (i value))
    point(points[i].x, points[i].y);
    }
}


//This function will spawn the shape in the canvas and move it according to which array vector is the closest distance.
function moveShape(){
    //draw a shape using the random canvas position and the shapeSizes, this shape will be moved towards the closest shape
    //point(shapeToMove.x, shapeToMove.y);
    //Use p5.Vector.lerp, which will move the shapeToMove towards the destination (the closest/lowest value in the array)
    shapeToMove = p5.Vector.lerp(shapeToMove, destination, amount);
    //Add to the amount each time
    amount += 0.1;
}

//This function will check the distance of each array value and establish which value has the shortest distance in the canvas from the mobing shape.
function checkDist(){
    let closestDist;
    let maxDist = 1000;

    //for each value in the points array, check to define which value is the lowest.
    points.forEach(element => {
        if(shapeToMove.dist(element) < maxDist){
            //assign the maxDist to the lowest value in the array
            maxDist = shapeToMove.dist(element);
            //closest distance will be the lowest distance value in the array when compared to the shapeMove
            closestDist = element;
        }
    });
    //Return the closestDist value
    return closestDist;
}

//function keyPressed to take images of canvas.
function keyPressed() {
    if (key == 's' || key == 'S') {
        saveCanvas(gd.timestamp(), 'png');
    }
}
