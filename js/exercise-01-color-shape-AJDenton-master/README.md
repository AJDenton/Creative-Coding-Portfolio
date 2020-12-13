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
