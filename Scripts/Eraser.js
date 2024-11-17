function Eraser() {
  this.name = "Eraser";
  this.icon = "assets/Eraser.png";
  this.size = 10;
 // Tool with a white stroke, can be used both as an eraser on a coloured background or as a pen/"chalk" on a black/green backround.
  this.draw = function() {
    if (mouseIsPressed) {
      // Set stroke and fill to white
      stroke(255);
      fill(255);
  
      if (previousMouseX !== -1 && previousMouseY !== -1) { // check to ensure that the values being stored are not placeholder values.
        var distance = dist(previousMouseX, previousMouseY, mouseX, mouseY); //dist() fuction is used here to calculate the distance between the previous and current mouse position.
        var stepX = (mouseX - previousMouseX) / distance; // stepX and stepY are calculated to determine the increment values along the straight line from before.
        var stepY = (mouseY - previousMouseY) / distance;
  
        for (var i = 0; i <= distance; i++) { // iterates from 0 to the distance between the two points, incrementing by 1 each time
          var x = previousMouseX + stepX * i; // vital for drawing the ellipses at equidistant points from one another.
          var y = previousMouseY + stepY * i;
          ellipse(x, y, this.size);
        }
      }
  
      previousMouseX = mouseX;
      previousMouseY = mouseY;
    } else {
      previousMouseX = -1; // if the user releases the mouse, we put in placeholder values again until the function is called again.
      previousMouseY = -1;
    }
  };
  
  this.unselectTool = function() {
    // to clear the sliders from the UI once the tool has been switched.
    select(".options").html(""); 
    stroke(colourP.selectedColour);
    fill(colourP.selectedColour);
  };  

  this.populateOptions = function() { // create a slider to control the radius of the ellipse used to "erase" the canvas.
    select(".options").html(
      "<label for='eraserSizeSlider'>Eraser Size:</label>" +
      "<input id='eraserSizeSlider' class= 'slider' type='range' min='10' max='100' value='10'>"
    );
  
    select("#eraserSizeSlider").input(() => {
      this.size = select("#eraserSizeSlider").value();
    });
  };
  
  // Call loadPixels to ensure the most recent changes are saved to the pixel array
  loadPixels();
}