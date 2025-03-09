function drawTrees()
{
	for (var i = 0; i < tree.x.length; i++) 
	{
		////////////// trunk.
		fill(110, 38, 14);
		rect(tree.x[i] , tree.y, 60, 114); 
		////////////// leaves.
		fill(0,100,0);
		triangle(tree.x[i] - 80, tree.y, tree.x[i]  + 140, tree.y, tree.x[i]  + 30, tree.y - 100);
		fill(0,128,0);
		triangle(tree.x[i]  - 60, tree.y - 50, tree.x[i]  + 120, tree.y - 50, tree.x[i]  + 30, tree.y - 140);
		fill(0,100,0);
		triangle(tree.x[i]  - 40, tree.y - 90, tree.x[i]  + 100, tree.y - 90, tree.x[i]  + 30, tree.y - 180);
	}	
}