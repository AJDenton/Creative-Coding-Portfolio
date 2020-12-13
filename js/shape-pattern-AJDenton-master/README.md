### Aileen's Creative Coding Exercises

## Introduction


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
This exercise was done in order for the class to create individual pieces using random generation. My piece involved the same theory of random generation, however instead of lines, I chose to use arcs and ellipses. I also chose to adjust the radians of the arcs depending on the random number output.

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
