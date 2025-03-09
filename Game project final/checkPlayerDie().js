
function checkPlayerDie(gameChar)
{
	if(lives >= 1 && gameChar.y == height)
	{
		lives -= 1;
		gamestart();
	}
	else if (lives < 1 )
	{
		lives -= 1;
		noLoop();
		textFont(myFont);
		fill(169,169,169, 200);
		textAlign(CENTER);
		rect(width, height, width, height)
		stroke(0);
		strokeWeight(7);
		fill(0, 0, 0);
		textSize(68);
		textAlign(CENTER);
		text("GAME OVER", width/2, height/2);
		fill(255, 0, 0);
		textSize(65);
		textAlign(CENTER);
		text("GAME OVER", width/2, height/2);
		fill(0);
		textSize(25);
		text("Refresh to start again", width/2, height / 1.7);
		fill(255, 0, 0);
		textSize(27)
		text("Refresh to start again", width/2, height / 1.7);
	}
}