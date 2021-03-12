function setup(){
  createCanvas(800,800);
  noStroke();
  colorMode(HSB, width, height, 100);
}

function draw(){
  let stepX = 20;
  let stepY = 20;

for(let gridY=0; gridY<height; gridY=gridY+stepY){
  for(let gridX=0; gridX<width; gridX=gridX+stepX){
    fill(mouseX, mouseY, 100);
    rect(gridX, mouseY, 25, 25);
    }
  }
}

function keyPressed(){
  if(key == 's' || key == 'S'){
    saveCanvas(gd.timestamp(),'png');
  }
}
