function drawGameCharacter(gameChar, isLeft, isRight, isFalling) 
{
    strokeWeight(0);
	stroke(255);
	fill(255);
	textSize(12);
	textAlign(CENTER);
	text("Simon", gameChar.x , gameChar.y - 57); 

	if (isLeft && isFalling)// add your jumping-left code
	{
		fill(222,184,135);
		stroke(0);
		strokeWeight(2);
		ellipse(gameChar.x, gameChar.y - 45, 12, 15);
		
		//eyes
		fill(0);
		stroke(0);
		strokeWeight(2);
		ellipse(gameChar.x - 2, gameChar.y -45, 2, 2);

		// body of the character
		fill(210,105,30);
		stroke(0);
		strokeWeight(2);
		rect(gameChar.x - 7, gameChar.y - 37, 14, 16);

		fill(0);
		strokeWeight(3);
		line(gameChar.x , gameChar.y  - 19, gameChar.x + 6, gameChar.y - 9);
		line(gameChar.x - 3 , gameChar.y  - 19, gameChar.x - 3, gameChar.y - 9);
		strokeWeight(1);
		rect(gameChar.x + 2, gameChar.y - 10, 5, 3);
		rect(gameChar.x - 7, gameChar.y - 10, 5, 3);

		// arms of the character
		strokeWeight(2)
		line(gameChar.x, gameChar.y - 31, gameChar.x - 12, gameChar.y - 41);
		line(gameChar.x + 7, gameChar.y - 28, gameChar.x + 12, gameChar.y - 22);
		stroke(0);

		// hands
		fill(0);
		ellipse(gameChar.x - 12, gameChar.y - 41, 3, 3);
		ellipse(gameChar.x + 12, gameChar.y - 22, 3, 3);

	}
	else if(isRight && isFalling)// add your jumping-right code
	{
		
		fill(222,184,135);
		stroke(0);
		strokeWeight(2);
		ellipse(gameChar.x, gameChar.y - 45, 12, 15);
		
		//eyes
		fill(0);
		stroke(0);
		strokeWeight(2);
		ellipse(gameChar.x + 2, gameChar.y -45, 2, 2);

		// body of the character
		fill(210,105,30);
		stroke(0);
		strokeWeight(2);
		rect(gameChar.x - 7, gameChar.y - 37, 14, 16);

		// legs of the character
		fill(0);
		strokeWeight(3);
		line(gameChar.x + 3, gameChar.y  - 19, gameChar.x + 3, gameChar.y - 9);
		line(gameChar.x  , gameChar.y  - 19, gameChar.x - 5, gameChar.y - 9 );
		strokeWeight(1);
		rect(gameChar.x + 3, gameChar.y - 10, 5, 3);
		rect(gameChar.x - 5, gameChar.y - 10, 5, 3);

		// arms of the character
		strokeWeight(2)
		line(gameChar.x - 1, gameChar.y  - 31, gameChar.x + 11, gameChar.y  - 41);
		line(gameChar.x - 7, gameChar.y  - 28, gameChar.x - 12, gameChar.y - 22);
		stroke(0);
		// hands
		fill(0);
		ellipse(gameChar.x + 11, gameChar.y  - 41, 3, 3);
		ellipse( gameChar.x - 12, gameChar.y - 22, 3, 3);

	}
	else if(isLeft) // add your walking left code
	{
		
		fill(222,184,135);
		stroke(0);
		strokeWeight(2);
		ellipse(gameChar.x, gameChar.y - 45, 12, 15);
		
		//eyes
		fill(0);
		stroke(0);
		strokeWeight(2);
		ellipse(gameChar.x - 2, gameChar.y -45, 2, 2);

		// body of the character
		fill(210,105,30);
		stroke(0);
		strokeWeight(2);
		rect(gameChar.x - 7, gameChar.y - 37, 14, 25);

		// legs of the character
		fill(0);
		strokeWeight(3);
		line(gameChar.x , gameChar.y  - 10, gameChar.x + 6, gameChar.y);
		line(gameChar.x - 3 , gameChar.y  - 10, gameChar.x - 3, gameChar.y);
		strokeWeight(1);
		rect(gameChar.x + 1, gameChar.y - 1, 5, 3);
		rect(gameChar.x - 7, gameChar.y - 1, 5, 3);

		// arms of the character
		strokeWeight(2)
		line(gameChar.x - 1, gameChar.y  - 31, gameChar.x - 12, gameChar.y  - 22);
		line(gameChar.x + 7, gameChar.y  - 31, gameChar.x + 12, gameChar.y  - 22);
		stroke(0);
		// hands
		fill(0);
		ellipse(gameChar.x + 12, gameChar.y  - 22, 3, 3);
		ellipse(gameChar.x - 12, gameChar.y  - 22, 3, 3);

	}
	else if(isRight)// add your walking right code
	{
		
		fill(222,184,135);
		stroke(0);
		strokeWeight(2);
		ellipse(gameChar.x, gameChar.y - 45, 12, 15);
		
		//eyes
		fill(0);
		stroke(0);
		strokeWeight(2);
		ellipse(gameChar.x + 2, gameChar.y -45, 2, 2);

		// body of the character
		fill(210,105,30);
		stroke(0);
		strokeWeight(2);
		rect(gameChar.x - 7, gameChar.y - 37, 14, 25);

		// legs of the character
		fill(0);
		strokeWeight(3);
		line(gameChar.x + 3, gameChar.y  - 10, gameChar.x + 3, gameChar.y);
		line(gameChar.x  , gameChar.y  - 10, gameChar.x - 5, gameChar.y);
		strokeWeight(1);
		rect(gameChar.x + 3, gameChar.y - 1, 5, 3);
		rect(gameChar.x - 5, gameChar.y - 1, 5, 3);

		// arms of the character
		strokeWeight(2)
		line(gameChar.x - 1, gameChar.y  - 31, gameChar.x + 11, gameChar.y - 22);
		line(gameChar.x - 8, gameChar.y  - 31, gameChar.x - 12, gameChar.y - 22);
		stroke(0);
		
		// hands.
		fill(0);
		ellipse(gameChar.x + 11, gameChar.y - 22, 3, 3);
		ellipse(gameChar.x - 12, gameChar.y - 22, 3, 3);

	}
	else if (isFalling || isPlummeting)// add your jumping facing forwards code 
	{
		fill(222,184,135);
		stroke(0);
		strokeWeight(2);
		ellipse(gameChar.x, gameChar.y - 45, 15, 15);
		
		// eyes
		fill(0);
		stroke(0);
		ellipse(gameChar.x - 3, gameChar.y -45, 2, 2);
		ellipse(gameChar.x + 3, gameChar.y -45, 2, 2);

		// body of the character
		fill(210,105,30);
		stroke(0);
		strokeWeight(2);
		rect(gameChar.x - 9, gameChar.y - 37, 18, 16);

		//legs of the character
		fill(0);
		strokeWeight(3);
		line(gameChar.x + 5, gameChar.y  - 19, gameChar.x + 5, gameChar.y - 9);
		line(gameChar.x - 5, gameChar.y  - 19, gameChar.x - 5, gameChar.y - 9);
		strokeWeight(1);
		rect(gameChar.x + 5, gameChar.y - 10, 5, 3);
		rect(gameChar.x - 10, gameChar.y - 10, 5, 3);

		// arms of the character
		strokeWeight(2)
		line(gameChar.x + 10, gameChar.y - 33, gameChar.x + 20, gameChar.y - 47);
		line(gameChar.x - 10, gameChar.y - 33, gameChar.x - 19, gameChar.y - 47);
		stroke(0);
		
		// hands
		fill(0);
		ellipse(gameChar.x + 20, gameChar.y - 47, 3, 3);
		ellipse(gameChar.x - 19, gameChar.y - 47, 3, 3);
	}
	else // add your standing front facing code
	{
		fill(222,184,135);
		stroke(0);
		strokeWeight(2);
		ellipse(gameChar.x, gameChar.y - 45, 15, 15);
		// eyes
		fill(0);
		stroke(0);
		ellipse(gameChar.x - 3, gameChar.y - 45, 2, 2);
		ellipse(gameChar.x + 3, gameChar.y - 45, 2, 2);
		// body of the character
		fill(210,105,30);
		stroke(0);
		strokeWeight(2);
		rect(gameChar.x - 9, gameChar.y - 37, 18, 25);
		// legs of the character
		fill(0);
		strokeWeight(3);
		line(gameChar.x + 5, gameChar.y  - 10, gameChar.x + 5, gameChar.y);
		line(gameChar.x - 5, gameChar.y  - 10, gameChar.x - 5, gameChar.y);
		strokeWeight(1);
		rect(gameChar.x + 5, gameChar.y - 1, 5, 3);
		rect(gameChar.x - 10, gameChar.y - 1, 5, 3);
		// arms of the character
		strokeWeight(2)
		line(gameChar.x + 9, gameChar.y - 33, gameChar.x + 18, gameChar.y - 26);
		line(gameChar.x - 9, gameChar.y - 33, gameChar.x - 18, gameChar.y - 26);
		stroke(0);
		fill(0);
		// hands
		ellipse(gameChar.x + 18, gameChar.y - 26, 3, 3);
		ellipse(gameChar.x - 18, gameChar.y - 26, 3, 3);
	}
}