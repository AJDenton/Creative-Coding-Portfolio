//declared lets
let numOfSeg;
let stepAngle;
let r;

//Slider declarations
let sliderHue;
let sliderSat;
let sliderBri;
let sliderAlpha;

function setup(){
  createCanvas(600,500);
  angleMode(DEGREES);
  colorMode(HSB, 360, 100, 100, 100);
  stroke(255);
  strokeWeight(3);
  background(0);

  //Sliders for HSBA
  sliderHue = createSlider(0,360,360);
  sliderSat = createSlider(0,100,100);
  sliderBri = createSlider(0,100,100);
  sliderAlpha = createSlider(0,100,100);
}

function draw(){
  numOfSeg = 12;
  stepAngle = 360/numOfSeg;
  r = 200;
  background(0);

  //Creating Sliders and assigning them to HSB
  let hue = sliderHue.value();
  let sat = sliderSat.value();
  let bri = sliderBri.value();
  let alp = sliderAlpha.value();

  //Placement of sliders with text
  //HUE
  text('Hue', 480, 50);
  text(hue, 550, 50);
  sliderHue.position(480, 60);

  //SATURATION
  text('Saturation', 480, 90);
  text(sat, 550, 90);
  sliderSat.position(480, 100);

  //BRIGHTNESS
  text('Brightness', 480, 130);
  text(bri, 550, 130);
  sliderBri.position(480, 140);
  //ALPHA
  text('Alpha', 480, 170);
  text(alp, 550, 170);
  sliderAlpha.position(480, 180);

  //First TRIANGLE_FAN
  push();
  translate(250,250);
  beginShape(TRIANGLE_FAN);
  vertex(0,0);
  rotate(mouseX);
  noStroke();
      for(let a=0; a<=360; a+=stepAngle){
        let vx = (r * cos(a)); //vx is radius multiplied by cos of alpha
        let vy = (r * sin(a)); //vy is radius multiplied by sin of alpha
        fill(a,100,100,100);
        vertex(vx,vy); // Vertex points changing according to the rCos(a) and rSin(a)
      }
    endShape();
    pop();


    //Second TRIANGLE_FAN
    push();
    r=150;
    translate(250,250);
    beginShape(TRIANGLE_FAN);
    vertex(0,0);
    rotate(mouseY);
    noStroke();
        for(let a=0; a<=360; a+=stepAngle){
          let vx = (r * cos(a)); //vx is radius multiplied by cos of alpha
          let vy = (r * sin(a)); //vy is radius multiplied by sin of alpha
          fill(hue,sat,bri,alp);
          vertex(vx,vy); // Vertex points changing according to the rCos(a) and rSin(a)
        }
      endShape();
      pop();
    }


    //function keyPressed to take images of canvas.
    function keyPressed(){
        if(key == 's' || key == 'S'){
          saveCanvas(gd.timestamp(),'png');
      }
    }
