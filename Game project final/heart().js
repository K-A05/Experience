function heart(x, y, size)
	{
		beginShape();
		vertex(x, y - size / 4);
		bezierVertex(x + size / 2, y - size / 2, x + size / 2, y + size / 4, x, y + size / 2);
		bezierVertex(x - size / 2, y + size / 4, x - size / 2, y - size / 2, x, y - size / 4);
		endShape();
	}