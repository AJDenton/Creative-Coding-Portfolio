### Aileen's Creative Coding Exercises

## Introduction

---
## Excercise 01 - Color Modes and Loops
### *Color and Shapes*
This task involved creating a grid using a set of for loops, each of which continuously creates a rect according to the positions of 'gridX' and 'gridY'. These rect's positions are also defined according to the stepX and stepY values. This sketch involves using the colorMode function, in which the HSB (Hue, Saturation, Brightness) colormode is applied. This is done in order to continously adjust the fill of the rects as they are created within the canvas.

---
## Exercise 02 - Mouse Interactivity and keyPressed Function
### *Mouse Interactivity*
In this task, we used the mouseX and mouseY functions to allow the computer to read the location of the mouse on the canvas. This position is found by reading the X and Y axis.

This program is interactive, but is not working correctly

### *Key Pressed Function*
This function allows the user to interact with the canvas by pressing a button. The keyPressed() function is an event listener, which means that is continuously listens for an event to take place while the program is running. In this task, we used the keyPressed function to listen for the 's'/'S' key to be initialized on the keyboard. When this happens, the 'saveCanvas' function is initiated, which will save a capture of the canvas and download it to the PC.

In this case, the saveCanvas function featured the 'gd.timestamp()' as the first parameter. This will export the image with a timestamp of the keyPressed function happening.

---
## Exercise 03 - Color Wheel Triangle Fan
### *Color Wheel*
This exercise involved creating a color wheel using the 'beginShape' and 'endShape' functions. These allow for creating more complex shapes, such as polygons. In doing so, these functions include the use of vertex placement (vertex(x,y)) to pin point each joining point of the shape. the beginShape() starts the shape at a specified position according to the vertex x and y. The endShape() will allow the final vertex to join the beginning vertex, thus completing the shape and closing it.

### *beginShape and endShape functions*
In this task, we used the beginShape(TRIANGLE_FAN) parameter, which can allow for several triangular shapes to be created in a circular shape. The origin point is set to half the width and height of the canvas, 250,250. From then, we created a loop which calculates the rest of the vertices and adds them according to the stepAngle (*using vx = radius*cos(a) and vy = radius*sin(a)*) until the degrees of the triangle_fan have are less than/equal to 360.

The color is changed by setting the fill's parameters to (a,100,100). As the 'a' values continuously count upwards, this equates to the color constantly changing until the triangle_fan is complete.

---
## Exercise 04 - Translations

### *Mapping*
Mapping is a p5 function that re-maps the range of numbers to a specified range.

In this exercise we used the mapping function to adjust the number of segments in the TRIANGLE_FAN. In doing so, the program is interactive, as the number of segments value increases and decreases according to the position of mouseX(*numOfseg = map(mouseX,0,width,10,40);*).

### *Push and Pop*
The push() and pop() functions allow for specified transformations that will not effect any other transformations outside the section of code.

In this task, we used push and pop to adjust the co-ordinate system using the translate() function. This means that we can make the origin point for the triangle_fan shape 0,0 (*using beginShape(), vertex() and endShape()*) and be able to rotate the shape around itself. This will not effect the co-ordinate systems of objects created outside the push and pop functions.

### *Translate Function*
The translate() function allows for displacement of the co-ordinate system for a specific set of code. This can be done in order to fix a shape's rotations, so that they are not rotating around a separate origin point.

---
## Exercise 05 - Color Theory Wheel

This exercise involved creating an interactive color wheel that uses beginShape and endShape, push and pop and translation.

I chose to make this a color wheel that could allow people to mix and match colors. I created two triangle fan shapes to do this.

This was interactive by using rotations, as well as a series of sliders that can manipulate the hue, saturation, brightness and alpha of the inner triangle fan.

The alpha was made as a slider so that the user could blender colors together onscreen, adjust them to a tone that they could use.

---
## Exercise 06 - Interpolation with lerpColor

This exercise was about learning to use and understand the p5 function 'lerpColor'.

In this example, we drew a series of rectangles that could progressively change color from the start to the end.

The lerpColor function takes 3 parameters, the beginning color, the ending color, and a number between 0 and 1.

In this exercise, I used several different shapes and ranges to experiment with the lerpColor function.

---
##Exercise 07 - Interpolated Spiral - FINAL

This task was set in order to compose a piece using lerpColor. Interactivity was also required.

I chose to create a spiral that could have interactive colors, rotations and a stroke. The aim was so produce something that could showcase a vortex of growing colors. The end result became an interesting and fun composition that could be used to create mosaics and spirals.

Again, I used sliders in doing this task. I used these as an Interactivity option due to the ease of use that came with it. The sliders were applied to the start color and the end color, so that the user could play with different color spectrums. The sliders were also applied to the rotations of the shapes, stemming from the center of the canvas. Finally, the last slider controlled the stroke weight of the drawn shapes. This offered some interesting mosaic styled manipulations.

I used mapping in this task for the number of shapes on the canvas. These shapes were mapped to mouseY, so that as the cursor moves down the canvas, the number of shapes increase.

<!--SECOND EXERCISE SET-->

---
## Excercise 02 - Rotating Rectangle
### *Description*
In this exercise, we learned about atan2, using it to rotate rect objects towards the mouse position.

### *atan2 and translation*
'atan2()' is a function in p5 that calculates the angle from a specified position to an origin. This can be used to program mouse interactivity.

The atan2 function takes 2 parameters, y and x. In this piece, the parameter for y is 'mouseY - transY' while the parameter for x is 'mouseX - transX'. In this case, we use translations to replace a shape's origin point so that the shapes may all rotate separately from one another.

In doing so, we used atan2 to calculate the angle between a rect shape drawn on the canvas, to the mouse position.

In this example, there appears to be an error where the first rect should be drawn.

---
## Exercise 03 - Understanding atan
### *Mouse Interactivity*
Like the last task, we used atan2 to create an interactive piece in which an object's rotations will be determined by the position of the cursor.

This exercise used ellipses, with smaller ones inside them to create a mesh-like movement.

---
## Exercise 03 - Understanding atan and size
### *Description*
This exercise taskes the same theory of using atan2 to rotate objects on the canvas, however there is size manipulation applied using the dist() function and the map() function.

### *Dist()*
The dist function calculates the distance between two points on a canvas. In this example, it takes the parameters of the mouse position (mouseX and mouseY) as well as the transformation positions (transX and transY).

This will allow the distance between the mouse position and a specific shape to be measured, so that change can take place when the distance changes.

### *Mapping*
The mapping function is used to re-map a number from one range to another. In this piece, mapping is used alongside dist() in order to manipulate the size of shapes as the dist() value reduces. In simple terms, as the mouse gets closer to an object, the object size will increase. As the mouse moves away from an object, the size decreases.

This was applied to each shape drawn in the canvas, each of wish has it's own transformation so that each origin point is different.

---
## Exercise 05 - Random Lines

### *Description*
This exercise introduces random generation each timestamp the canvas is refreshed. This uses the random() function and the round() function with line shapes.

### *random()*
The random() function takes two parameters. These two parameters determine the range of random numbers the function can output. For example;
'let rand = random(0,1);'

This line of code, when run, will output a number between 0 and 5, however this is not limited to rounded numbers. The random function will output float values. This is why the round() function is used in this piece.

### *round()*
The round function is simply used to round a value up or down to a whole number. For example;
'let rand = round(random(0,5));'

This line of code, when run, will output a whole number between 0 and 5, rather than a float value.

In this exercise, this code was used to determine which line shape should be drawn on as the loop draws shapes. However, in this case, it simply uses the range of 0 to 1. This means that if the value returned is 0, a line will be drawn from one corner to the other, and if the value is 1, the shape is reversed.

Each line is the same size, so the resulting image shows a randomly generated map-like visual.

---
## Exercise 06 - atan2 Random() Composition
### *Description*
This exercise was done in order for the class to create individual pieces using random generation.

### *Composition*
My piece involved the same theory of random generation, however instead of lines, I chose to use arcs and ellipses. I also chose to adjust the radians of the arcs depending on the random number output.

### *Random*
This piece uses an if else statement that determines a number between 0 and 3. In each output, an arc is drawn and set to a specific rotation and arc size. The arc uses the RADIANS angleMode, so this was used to calculate the degrees in which an arc is drawn.

There are 4 possible outcomes to this random statement, the arc can face up, left, right or down. The arc can also be sized between QUARTER_PI and QUARTER_PI+PI.

This made for an interesting output that illustrates a circular-based visual that intends to flow seamlessly across the canvas.

---
## Exercise 07 - Random Pattern
### *Description*
This exercise uses the theory of random generation between lines and triangles. In doing so, there is experimentation on color theory and shading.

---
## Exercise 08 - Wrapping Paper
### *Description*
For this assignment, we needed to produce a design using the methods previously taught to create wrapping paper.

In doing so, references were required, as well as knowledge used previously applied to the code.

### *Progress*
This assignment needed to be recorded using incremental images of progress. This was done by using the previously implemented keyPressed() function. This then saves the canvas with a timestamp to record steady progress. The images folder is within the exercise 08 folder.

### *Random Generation*
The same theory applies to this piece as previously used compositions. This piece uses random generation (randShape) for color and shape selection. There are two shapes in total, which are technically identical, however they go in opposite directions. The random function applied to them to made to output a random value that will determine the shape to be drawn.

When a random number is outputted (randColor), another random function takes place, in which any value that is equal to or less than 0.3 will make the fill of the shape red. If the output does not coincide with this statement, the outputted fill will be white.

### *drawingContext*
The main aim for this assignment was to create an image with depth using shadows. In p5, there are not many options to do this outside of creating more shapes directly.

drawingContext is one option that allows for shadow creation and manipulation. It can use shadow offsets and blur amounts that can be set and drawn by calling the function within the draw function.

I felt this function was easy to use, but did to output the visuals I was hoping for, so instead 'createGraphics' was used.

### *createGraphics*
createGraphics() is a method in p5 that allows for new graphics to be rendered onto the canvas. It is like creating a second canvas on top of the original canvas.

I used this method to create a function called 'makeGraphic', in which each shape is drawn, then the shadow is drawn using almost identical parameters. This creates 2 of the same shape, however each can be manipulated to differ. In this piece, the shadow shape is simply set to black, with a lowered opacity and a filter of BLUR applied.

P5 filters simply apply an image filter to an image created. There is a multitude to utilize, including THRESHOLD, GRAY, OPAQUE, INVERT and BLUR.

This piece uses the BLUR filter, which takes in a  parameter so that the blur can be adjusted to a bigger or smaller degree. This filter can cause slow loading issues when the index page is ran.

Once the createGraphic function and shapes were created, they were simply applied to the loop previously created to draw objects across the canvas.

The createGraphics function created in this piece also takes in a parameter for the shapes color, so that when the function is called in the draw function, a color can be set.
