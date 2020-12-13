function setup(){
  createCanvas(800,500);
  noStroke();
  colorMode(HSB, width, height, 100);
}

function draw(){
  let stepX = 25;
  let stepY = 25;

for(let gridY=0; gridY<height; gridY=gridY+stepY){
  for(let gridX=0; gridX<width; gridX=gridX+stepX){
    fill(gridX, gridY, 100);
    rect(gridX, gridY, 25, 25);
    }
  }
}
