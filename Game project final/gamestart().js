function gamestart()
	{
	isLeft = false;
	isRight = false;
	isFalling = false;
	isPlummeting = false;

	gameChar = 
	{
		x : width/2,
		y : floorPos_y,
	}

	tree =
	{
		x : [-300, 0, 300, 600, 900],
		y : floorPos_y - 114,
	}

	
	mountains =
	{
		x :  [0, 256, 512, 768, 1024],
		y : floorPos_y,
	}

	canyons = 
	[
	{
		pos_x : -200, 
		pos_y: floorPos_y, 
		width: 150 - 2, 
		height: 350 
	},
	{
		pos_x : 370, 
		pos_y: floorPos_y, 
		width: 110 - 2, 
		height: 350
	},
	{
		pos_x : 1000, 
		pos_y: floorPos_y, 
		width: 150 - 2 , 
		height: 350
	},
	]

	collectables = [
	{
		x_pos : 0,
		y_pos : floorPos_y,
		size : 30, 
		width : 1.5, 
		height : 15,
		isFound : false
		
	}, 
	{	
		x_pos : 256,
		y_pos : floorPos_y,
		size : 30, 
		width : 1.5, 
		height : 15,
		isFound : false
	},
	{
		x_pos : 512,
		y_pos : floorPos_y,
		size : 30, 
		width : 1.5, 
		height : 15,
		isFound : false
	}, 
	{
		x_pos : 768,
		y_pos : floorPos_y,
		size : 30, 
		width : 1.5, 
		height : 15,
		isFound : false
	}, 
	{
		x_pos : 1200,
		y_pos : floorPos_y,
		size : 30, 
		width : 1.5, 
		height : 15,
		isFound : false
	}]

	cameraPosX = 0;
	game_socre = 0;

	flagpole = {
		isReached: false,
		x_pos: 1750,
	}

	clouds = new Set();
  
	for (let i = 0; i < 65; i++) 
	{
		let c = new cloud_blocks(
			random(0 , 1110), 
			random(0, floorPos_y - 200), 
			random(55, 85), 
			random(55, 60));
		c.color = color(255, 255, 255, random(50, 255));
		clouds.add(c);
	}	
	
	platforms = [];
	onPlatform = false;
	onCurrentPlatform = null; // new variable to store current platform
	
	for (var i = 0; i < 1; i++) {
		platforms.push(create_platforms(width + 300,floorPos_y - 100, 200));
	}
}