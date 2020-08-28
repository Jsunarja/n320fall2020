class Raindrop {
	constructor(cx, cy, radius, color) {
		this.x = cx;
		this.y = cy;
		this.radius = radius;
		this.color = color;
		this.speed = 1 + Math.random() * 2;
	}

	update() {
		this.y += this.speed;
		if (this.y >= 500) {
			this.y = 0;
			this.speed = 1 + Math.random() * 2;
			groundUpdate += 1;
		}
		this.speed += 0.1;
		fill(this.color);
		circle(this.x, this.y, this.radius);
	}
}

var myRaindrop = [];

for (i = 0; i < 10; i++) {
	let xSpawn = Math.random() * 500;
	let ySpawn = Math.random() * 300;
	myRaindrop[i] = new Raindrop(xSpawn, ySpawn, 10, [110, 130, 245]);
}

class Rectangle {
	constructor(rx, ry, rwidth, rheight, rcolor) {
		this.rx = rx;
		this.ry = ry;
		this.rwidth = rwidth;
		this.rheight = rheight;
		this.rcolor = rcolor;
	}

	update() {
		if (groundUpdate % 10 && groundUpdate != (0, 1, 2, 3, 4, 5, 6, 7, 8, 9)) {
			groundUpdate = 0;
			rblue = rblue + 2.55;
			this.rcolor = [0, 0, rblue];
		}
		fill(this.rcolor);
		rect(this.rx, this.ry, this.rwidth, this.rheight);
	}
}

var groundUpdate = 0;
var rblue = 12.75;
var myRectangle = new Rectangle(0, 480, 500, 50, [0, 0, rblue]);

function setup() {
	createCanvas(500, 500);
}

function draw() {
	background(18, 20, 138);
	for (i = 0; i < 10; i++) {
		myRaindrop[i].update();
	}
	myRectangle.update();
}
