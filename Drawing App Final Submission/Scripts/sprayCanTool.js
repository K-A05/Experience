function SprayCanTool(){
	this.name = "sprayCanTool";
	this.icon = "assets/sprayCan.png";
  
	var density = 50; // Draws 50 points at once
	var sprayRadius = 20; // Radius of the circular spray area
  
	this.draw = function() {
		strokeWeight(1)
		if (mouseIsPressed) {
		  for (var i = 0; i < density; i++) {
			var posX = randomGaussian(mouseX, sprayRadius); //randomGaussian: a function that generates values in a normal distribution around the position of the mouse.
			var posY = randomGaussian(mouseY, sprayRadius); // this function takes two parameters: the centre around which the values should be spread, and the actual spread or distace from the centre.
			point(posX, posY);
		  }
		}
		loadPixels();
	  };

	this.unselectTool = function() {
		//clear options
		select(".options").html("");
	};
	  
	this.populateOptions = function() { // Similar to other functions, creates two sliders, to control the spread of the spray and density of the spray.
	  select(".options").html(
		"<label for='densitySlider'>Density:</label>" +
		"<input id='densitySlider' class='slider' type='range' min='1' max='100' value='50'>" +
		"<label for='sprayRadiusSlider'>Spray Radius:</label>" +
		"<input id='sprayRadiusSlider' class='slider' type='range' min='1' max='50' value='20'>");
  
	  select("#densitySlider").input(() => {density = select("#densitySlider").value(); });// get the value from the density slider to adjust the number of points drawn.
  
	  select("#sprayRadiusSlider").input(() => {sprayRadius = select("#sprayRadiusSlider").value();}); // get the value from the spread slider to adjust the radius of the spray.
	};
}