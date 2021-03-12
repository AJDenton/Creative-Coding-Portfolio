//declared lets
let r;
let numOfShapes;
let shape;

//Slider declarations
let sliderRot;
let sliderStartHue;
let sliderEndHue;
let sliderStroke;

function setup(){
  createCanvas(800,800);
  angleMode(DEGREES);
  colorMode(HSB, 360, 100, 100, 100);
  background(0);

  //Assigning sliders
  sliderRot = createSlider(0,360,360);
  sliderStartHue = createSlider(0,360,45);
  sliderEndHue = createSlider(0,360,360);
  sliderStroke = createSlider(0,10,0);
}

function draw(){
  //Set values for rotation, start hue, end hue and stroke for shapes
  let rot = sliderRot.value();
  let startHue = sliderStartHue.value();
  let endHue = sliderEndHue.value();
  let strokeVal = sliderStroke.value();
  stroke(360);
  strokeWeight(strokeVal);

  //radius
  r = 30;
  //NumOfShapes mapped to mouseY
  numOfShapes = map(mouseX, 0, height, 10, 200);
  background(0);

  //INTERPOLATION COLORS
  let startColor = color(startHue, 100, 100);
  let endColor = color(endHue, 100, 100);


  push();
  let x = 0;
  let y = 0;

  //Translating so that the beginning shape is drawn in the middle of the canvas
  translate(width/2,height/2);

  //For loop that continously draws a shape
      for(let i = 0; i < numOfShapes; i++){
          fill(lerpColor(startColor,endColor,i/numOfShapes));
          rotate(rot);
          shape = ellipse(x,y,r+=1,r+=1);
          x += width/numOfShapes;
          y += height/numOfShapes;
      }
  pop();

  //No fill or stroke for text
  fill(360);
  noStroke();

  //Adjust the hue of the starting color for lerp
  text('Start Hue', 20, 30);
  text(startHue, 100, 30);
  sliderStartHue.position(30, 40);

  //Adjust the hue of the ending color for lerp
  text('End Hue', 20, 70);
  text(endHue, 100, 70);
  sliderEndHue.position(30, 80);

  //Adjust the rotation
  text('Rotation', 20, 110);
  text(rot, 100, 110);
  sliderRot.position(30, 120);

  //Adjust the stroke of the shapes
  text('Stroke', 20, 150);
  text(strokeVal, 100, 150);
  sliderStroke.position(30, 160);
}


    //function keyPressed to take images of canvas.
    function keyPressed(){
        if(key == 's' || key == 'S'){
          saveCanvas(gd.timestamp(),'png');
      }
    }
