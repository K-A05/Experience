/**
 * Stamp Tool: Allows the user to draw various shapes (circle, square, rectangle, triangle) 
 * on the canvas by dragging the mouse.
 */
function Stamp() {
    this.icon = "assets/stamp.png"; 
    this.name = "stamp";

    var startMouseX = -1; // place holder values for the X and Y coordinate of then mouse when there is no drawing.
    var startMouseY = -1;
    var drawing = false; // bool flag to track if drawing is taking place.
    
    var shapes = ["circle", "square", "rectangle", "triangle"]; // range of shapes in the tool.
    var currentShapeIndex = 0; // index to keep track of the current shape.
    var currentShape = shapes[currentShapeIndex]; // Default shape = first shape in array.

    var isFilled = true; // Default to filled shapes.

    this.draw = function() {

        stroke(colourP.selectedColour);
        strokeWeight(3);
        
        // Check if the shape should be filled or not.
        if (isFilled) {
            fill(colourP.selectedColour);
        } else {
            noFill();
        }
        
        if (mouseIsPressed) { // check to see if the mouse is being pressed to start drawing.
            if (startMouseX == -1) { // if this is the start of drawing a new shape
                startMouseX = mouseX;
                startMouseY = mouseY;
                drawing = true; // set the drawing flag to true.
                loadPixels(); // save the current pixel data.
            } else {
                updatePixels(); // update the with the saved pixels to remove any previous shape.
                switch (currentShape) { // switch statement is evaluated once, used to perform different actions based on different conditions.
                    case "circle":
                        ellipse(startMouseX, startMouseY, mouseX - startMouseX, mouseY - startMouseY);
                        break;
                    case "rectangle":
                        rect(startMouseX, startMouseY, mouseX - startMouseX, mouseY - startMouseY);
                        break;
                    case "square":
                        let sideLength = Math.max(mouseX - startMouseX, mouseY - startMouseY);
                        rect(startMouseX, startMouseY, sideLength, sideLength);
                        break;
                    case "triangle":
                        triangle(startMouseX, startMouseY, mouseX, mouseY, startMouseX + (mouseX - startMouseX) / 2, mouseY - (mouseY - startMouseY));
                        break;
                }
            }
        } else if (drawing) { // if the mouse has been released then reset all the parameters.
            loadPixels();
            drawing = false;
            startMouseX = -1;
            startMouseY = -1;
        }
    };

    this.populateOptions = function() { // populate options function to render the button that allows users tow switch shapes.
        let optionsDiv = select(".options");
        optionsDiv.html(""); // Clear out any previous options
    
        let shapeButton = createButton(currentShape.charAt(0).toUpperCase() + currentShape.slice(1)); // Capitalize the first letter
        shapeButton.class('button'); // Add the class to the button
        shapeButton.id('shapeSelect')
        shapeButton.parent(optionsDiv);
        shapeButton.mousePressed(() => {
            currentShapeIndex = (currentShapeIndex + 1) % shapes.length; // Cycle through the shapes
            currentShape = shapes[currentShapeIndex];
            shapeButton.html(currentShape.charAt(0).toUpperCase() + currentShape.slice(1)); // Update button label
        });

        // Button to toggle fill.
        let fillButton = createButton(isFilled ? "Filled" : "Unfilled");
        fillButton.class('button');
        fillButton.id('fill');
        fillButton.parent(optionsDiv);
        fillButton.mousePressed(() => {
            isFilled = !isFilled; // Toggle the fill flag.
            fillButton.html(isFilled ? "Filled" : "Unfilled"); // Update button label.
        });
    };


    this.unselectTool = function() {
        updatePixels();
        strokeWeight(1);
    };
}
