class cloud_blocks {
	constructor(x, y, w, h) {
		this.position = { x: x, y: y };
		this.width = w;
		this.height = h;
		this.color = color(255, 255, 255, random(50, 255)); // random alpha value between 50 and 255

		this.draw = function () {
			fill(this.color);
			rect(this.position.x, this.position.y, this.width, this.height);
		};
	}
}
