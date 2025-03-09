function drawCanyon(t_canyon)
{
	stroke(0);
	strokeWeight(2);
	fill(255,140,0);
	noStroke();
	rect(t_canyon.pos_x, t_canyon.pos_y, t_canyon.width, t_canyon.height);
	fill(255,215,0);
	noStroke();
	rect(t_canyon.pos_x, t_canyon.pos_y + 10, t_canyon.width, t_canyon.height);
	fill(220,20,60);
	noStroke();
	rect(t_canyon.pos_x, t_canyon.pos_y + 20, t_canyon.width, t_canyon.height);
	fill(139,0,0);
	noStroke();
	rect(t_canyon.pos_x, t_canyon.pos_y + 30, t_canyon.width, t_canyon.height);
}

function checkCanyon(t_canyon)
{
	if (
		(Math.sign(t_canyon.pos_x) == 1) &&
		(gameChar.x <= t_canyon.pos_x) && 
		(gameChar.x >= t_canyon.pos_x + t_canyon.width) && 
		(gameChar.y == floorPos_y)) // if the value of i is positive.
		{
			isPlummeting = false;
		}
	else if (
		(Math.sign(t_canyon.pos_x) == 1) &&
		(gameChar.x > t_canyon.pos_x) &&
		(gameChar.x < t_canyon.pos_x + t_canyon.width) &&
		(gameChar.y >= floorPos_y))
		{
			isPlummeting = true;
		}
	else if (
		(Math.sign(t_canyon.pos_x) == -1) &&
		(gameChar.x <= t_canyon.pos_x || gameChar.x >= t_canyon.pos_x + t_canyon.width) &&
		(gameChar.y == floorPos_y))// if the value of pos_x[i] is negative
		{
			isPlummeting = false;
		}
	else if (
		(Math.sign(t_canyon.pos_x) == -1) &&
		(gameChar.x > t_canyon.pos_x) && 
		(gameChar.x < t_canyon.pos_x + width) &&
		(gameChar.y >= floorPos_y))
		{
			isPlummeting = true;
		} 
	}