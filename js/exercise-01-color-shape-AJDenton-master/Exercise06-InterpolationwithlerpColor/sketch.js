function setup(){
  createCanvas(500,500);
  angleMode(DEGREES);
  colorMode(HSB, 360, 100, 100);
  noStroke();
  background(0);
}

function draw(){
//INTERPOLATION
let startColor = color(360,50,100);
let endColor = color(200,50,100);

// fill(startColor);
// rect(100,100,50,50);

//lerpColor obtains and outputs the colors between a starting color and an ending color
  for(let i = 0; i < 10; i++){
      fill(lerpColor(startColor,endColor,i/10));
      rect(50 * i,100,50,50);
  }

  for(let i = 0; i < 20; i++){
      fill(lerpColor(startColor,endColor,i/20));
      rect(25 * i,200,25,25);
  }

push();
translate(5,0);
  for(let i = 0; i < 50; i++){
      fill(lerpColor(startColor,endColor,i/50));
      ellipse(10 * i,300,10,10);
  }
pop();

push();
//translating so that the ellipse is drawn at the edge of the canvas
translate(50,0);
  for(let i = 0; i < 5; i++){
      fill(lerpColor(startColor,endColor,i/5));
      ellipse(100 * i,400,100,100);
  }
pop();
// fill(endColor);
// rect(500,100,50,50);
}



  function keyPressed(){
      if(key == 's' || key == 'S'){
        saveCanvas(gd.timestamp(),'png');
    }
  }
