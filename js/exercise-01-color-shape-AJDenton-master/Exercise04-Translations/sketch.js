//declared lets
let numOfSeg;
let stepAngle;
let r;

function setup(){
  createCanvas(800,800);
  //set angle mode to degrees
  angleMode(DEGREES);
  //set color mode to hue, saturation and brightness
  colorMode(HSB, 360, 100, 100);
  noStroke();
  background(0);
}

function draw(){
  //map the number of segments according to the mouseX position, from the width of the canvas.
  numOfSeg = map(mouseX,0,width,10,40);
  //stepAngle is equal to the full degrees of a circle divided by the number of segments.
  stepAngle = 360/numOfSeg;
  //radius, set to 150.
  r = 250;
//push. Anything inside the push and pop is like it's own instance.
  push();

  translate(width/2,width/2);
  rotate(45);
  //background(0);
  //begin shape of triangle fan with starting point(vertex)
  beginShape(TRIANGLE_FAN);
  vertex(0,0);

      for(let a=0; a<=360; a+=stepAngle){
        let vx = (r * cos(a)); //vx is radius multiplied by cos of alpha
        let vy = (r * sin(a)); //vy is radius multiplied by sin of alpha
        fill(a,100,100);
        vertex(vx,vy); // Vertex points changing according to the rCos(a) and rSin(a)
      }
      endShape();
      pop(); //Pop. Ending the 'instance', nothing outside push and pop will be changed. It's like a layer.
    }

    //function keyPressed to take images of canvas.
    function keyPressed(){
        if(key == 's' || key == 'S'){
          saveCanvas(gd.timestamp(),'png');
      }
    }
