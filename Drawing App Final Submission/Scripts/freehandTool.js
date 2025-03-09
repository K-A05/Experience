function FreehandTool(){
	// Set an icon and a name for the object
	this.icon = "assets/freehand.png";
	this.name = "freehand";
  /** 
	* Stroke algorithm: to achieve a smooth storke, a line will be drawn from the previous location of the mouse to the current location.
	* The following values store the locations from the last frame. 
	* They are -1 to start with because we haven't started drawing yet.
	*/
	var previousMouseX = -1;
	var previousMouseY = -1;
	this.strokeWeight = 5;
  
	this.draw = function(){
	  // Set stroke weight
	  strokeWeight(this.strokeWeight);
  
	  // If the mouse is pressed
	  if(mouseIsPressed){
		// Check if the previousX and Y are -1. Set them to the current mouse X and Y if they are.
		if (previousMouseX == -1){
		  previousMouseX = mouseX;
		  previousMouseY = mouseY;
		}
		else {
		// If there are values stored from a previous frame, we can use those to draw a line to the current position of the mouse.
		  line(previousMouseX, previousMouseY, mouseX, mouseY);
		  previousMouseX = mouseX;
		  previousMouseY = mouseY;
		}
	  }
	  // resetting the values to the place holder values when the mouse is released.
	  else {
		previousMouseX = -1;
		previousMouseY = -1;
	  }
	};
	// unselect function to revert to the original conditions of the app.
	this.unselectTool = function() {
		// Clear options, removes the sliders visible when this tool is selected.
		select(".options").html("");
		strokeWeight(0);
	};
	
	this.populateOptions = function() { // function to create a slider to control the thickness of the line.
	  select(".options").html(
		"<label for='strokeWeightSlider'>Stroke Weight:</label>" +
		"<input id='strokeWeightSlider' class='slider' type='range' min='1' max='20' value='" + this.strokeWeight + "'>"
	  );
		// Update the strokeWeight based on slider value.
	  select("#strokeWeightSlider").input(() => {
		this.strokeWeight = select("#strokeWeightSlider").value();
	  });
	};
  }
  