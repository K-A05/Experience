function drawCollectable(t_collectable)
{
	if (t_collectable.isFound == false)
	{
		strokeWeight(3);
		stroke(250, 196, 11);
		fill(255, 255, 0);
		ellipse(t_collectable.x_pos, t_collectable.y_pos - 20, t_collectable.size, t_collectable.size);
		fill(225, 193, 110);
		stroke('rgb(255,165,0)');
		strokeWeight(2);
		rect(t_collectable.x_pos - 1, t_collectable.y_pos - 27 , t_collectable.width, t_collectable.height);
	}
}

function checkCollectable(t_collectable)
{
	if(dist(gameChar.x, gameChar.y, t_collectable.x_pos, t_collectable.y_pos) < 20) // interaction code for collectable.
	{
		t_collectable.isFound = true;
		game_socre += 1; // variable for the score count
	}	
}