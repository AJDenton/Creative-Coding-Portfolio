let angle;
function setup(){
    createCanvas(windowWidth, windowHeight, WEBGL)
}

function draw(){
    fill(255,0,0);
    rotateZ(angle);
    rect(0,0,100,100);
    
}