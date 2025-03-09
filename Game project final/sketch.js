function preload()
{
	//preload all the fints.
	myFont = loadFont('SuperMario256.ttf');
	myFont2 = loadFont('Minecraft.ttf')
}

function setup()
{
	createCanvas(1110, 576);
	floorPos_y = height * 3/4;
	lives = 3;
	//intiallise the environment.
	gamestart();

}

function draw()
{
	///////////DRAWING CODE//////////
	if ((isLeft == true) && (isPlummeting == false))
	{
		cameraPosX -= 5;
	}
	else if(isRight == true  && (isPlummeting == false))
	{
		cameraPosX += 5;
	}

	background(0, 150, 240); 
	noStroke();
	fill(0,155,0);
	rect(0, floorPos_y, width, height - floorPos_y); 
	
	push();
	translate(-cameraPosX ,0)
	///////////////////////// code to animte the clouds.
	
	for (let c of clouds)
	{
		c.position.x += c.width * 0.012;
		if(isLeft == true)
		{
			if (c.position.x > gameChar.x + width/2) 
			{
				c.position.x = gameChar.x - 695;
			}
		}
		else if (isRight == true)
		{
			if (c.position.x < gameChar.x - 745) 
			{
				c.position.x = gameChar.x + 695;
			}
		}
		else 
		{

			{
				if (c.position.x >= gameChar.x + width/2)
				{
					c.position.x = gameChar.x - width/2;
				}
			}
		}
		fill(c.color);
		c.draw();
	}
	///////////////////////// end of code to animate clouds.

	drawTrees(); 
	
	for (var i = 0; i < canyons.length; i++) // canyon
	{
		drawCanyon(canyons[i]);
		checkCanyon(canyons[i]);
	}
	
	for (var i = 0; i < collectables.length; i++) // collectable
	{
		if(!collectables[i].isFound)
		{
			drawCollectable(collectables[i]);
			checkCollectable(collectables[i]);
		}
	}

	for (var i = 0; i < platforms.length; i++) {
		platforms[i].draw();
		if (platforms[i].checkContact(gameChar) == true) {
			onPlatform = true;
			gameChar.y = platforms[i].getY(); 
			break; // Exit the loop once a platform has been found
		}
	}

	fill(255,215,0);
	noStroke();
	strokeWeight(2);
	textSize(25);
	textFont(myFont2);
	text("score: " + game_socre, cameraPosX + 7, 30);
	
	drawGameCharacter(gameChar, isLeft, isRight, isFalling, onPlatform); // the game character
	
	render_flagpole();
	if(flagpole.isReached == false)
	{
		checkFlagpole();
	}
	
	pop();
	
	// ///////////INTERACTION CODE//////////////
	if(isPlummeting == false)
	{
	if (isLeft == true) 
	{
		gameChar.x -= 5; 
	}
	if (isRight == true)
	{
		gameChar.x += 5; 
	}
	if ((isFalling == true) && (gameChar.y <= floorPos_y)) 
	{
		onPlatform = false; // Reset the onPlatform flag

		for(var i = 0; i < platforms.length; i++)
		{
			if(platforms[i].checkContact(gameChar) == true)
			{
				gameChar.y = platforms[i].getY(); // Set gameChar's Y position to top of the platform
				onPlatform = true;
				break; // Exit the loop once a platform has been found
			}
		}
		if(!onPlatform)
		{
			gameChar.y += 4.5; // falling down mechanic.
		}
	}
		if ((gameChar.y >= floorPos_y) && (isPlummeting == false)) // collission detection with the ground.
		{
			isFalling = false;
			gameChar.y = floorPos_y 
		}
	}
	if(isPlummeting == true) // canyon mechanic 
	{
		gameChar.y += 5
		keyReleased(); // stop all input.
		isLeft = false;
		isRight =  false;
		if (gameChar.y >= height)
		{
			gameChar.y = height; // stop the character at the bottom of the canyon.
		}
	}

	for (let i = 0; i < lives; i++) // draw the hearts 
	{
		noStroke();
		fill(255, 0, 0);
		heart(1000 + i * 30, 20, 30);
	}
	checkPlayerDie(gameChar);
	
} // end of draw function

function keyPressed()
{
	if(lives != 0)
	{
		if(gameChar.y == floorPos_y || onPlatform == true)
		{ 
			if(keyCode == 65 && isRight == false) 
			{ 
				//(a)
				isLeft = true;
			}
			else if(keyCode == 68 && isLeft == false)
			{ 
				//(d)
				isRight = true; 
			}
			else if(keyCode == 87)
			{
				if (isFalling != true)
				{
					gameChar.y -= 150;
					keyReleased();
				}
			}
		}
	}
}

function keyReleased()
{
	if(keyCode == 65)
	{
		isLeft = false;
	}
	else if(keyCode == 68)
	{
		isRight = false; 
	}
	else if(keyCode == 87)
	{
		isFalling = true;
	}
}