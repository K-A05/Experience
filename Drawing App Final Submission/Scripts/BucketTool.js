function BucketTool() {
    this.name = "Bucket";
    this.icon = "assets/bucketTool.png";
  
    this.draw = function() {
      if (mouseIsPressed) {
        // Check if the mouse is within the canvas bounds
        if (mouseX >= 0 && mouseX <= width && mouseY >= 0 && mouseY <= height) {
          // Set all pixels in the canvas to the selected color
          var paint = color(colourP.selectedColour);

          for (var i = 0; i < pixels.length; i += 4) { // the pixels array stores the data for the pixels in the canvas, to change the color of the canvas, we need to do so for each pixel.
            pixels[i] = red(paint); 
            pixels[i + 1] = green(paint);
            pixels[i + 2] = blue(paint);
            pixels[i + 3] = alpha(paint);
          }
          // Update the canvas with the new pixel values
          updatePixels();
        }
      }
    };
  }
  