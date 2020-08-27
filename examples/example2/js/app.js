let cx = 10;

class Circle {
	constructor(x, y, radius, color) {
		this.x = x;
		this.y = y;
		this.radius = radius;
		this.color = color;
	}
}

function setup() {
	createCanvas(500, 500);
}

function draw() {
	cx++;
	background(42, 32, 125);
	circle(10, cx, 100);
}
