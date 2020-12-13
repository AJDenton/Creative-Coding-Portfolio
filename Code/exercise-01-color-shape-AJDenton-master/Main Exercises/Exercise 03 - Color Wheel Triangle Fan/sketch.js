let numOfSeg = 50;
let stepAngle = 360/numOfSeg;
let r = 200;

function setup(){
  createCanvas(500,500);
  angleMode(DEGREES);
  colorMode(HSB, 360, 100, 100);
  noStroke();
  background(0);
}

function draw(){
  background(255,0,0);
  fill(255,0,0);

  beginShape(TRIANGLE_FAN);
  vertex(250,250);
      for(let a=0; a<=360; a+=stepAngle){
        let vx = (r * cos(a)) + 250;
        let vy = (r * sin(a)) + 250;
        fill(a,100,100);
        vertex(vx,vy);
      }
      endShape();

    }

  function keyPressed(){
      if(key == 's' || key == 'S'){
        saveCanvas(gd.timestamp(),'png');
    }
  }