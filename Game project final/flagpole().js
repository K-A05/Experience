function render_flagpole()
	{
		// pole
		push();
		stroke(220,220,220);
		strokeWeight(4);
		line(flagpole.x_pos, floorPos_y, flagpole.x_pos, floorPos_y - 200);
		
		// golden sphere
		fill(255,215,0);
		noStroke();
		circle(flagpole.x_pos, floorPos_y - 210, 20);
		
		// flag
		fill(0);
		noStroke();

		if (flagpole.isReached)
		{
			triangle(flagpole.x_pos - 2, floorPos_y - 170, flagpole.x_pos - 50, floorPos_y - 190, flagpole.x_pos - 2, floorPos_y - 200);
			textFont(myFont);
			stroke(0);
			fill(0);
			strokeWeight(5);
			textSize(48);
			text("LEVEL COMPLETE", flagpole.x_pos, height/3);
			fill(255,215,0);
			textFont(myFont);
			textSize(47);
			text("LEVEL COMPLETE", flagpole.x_pos, height/3);
			noLoop();
		}
		else 
		{
			triangle(flagpole.x_pos - 2, floorPos_y, flagpole.x_pos - 50, floorPos_y - 20, flagpole.x_pos - 2, floorPos_y - 30)
		}
		 

		pop();
	}

	function checkFlagpole()
	{
		var d = abs(gameChar.x- flagpole.x_pos);
		if (d < 10)
		{
			flagpole.isReached = true;
		}
	}