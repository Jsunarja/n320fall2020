/*var student = {
	fname: "Jerremiah",
	lname: "Sunarja",
	year: "Senior",
	degree: "MAS",
	about: function () {
		console.log(
			"My name is " +
				this.fname +
				" " +
				this.lname +
				". I am a " +
				this.year +
				" studying " +
				this.degree +
				"."
		);
	},
};
student.about(); // My name is Jerremiah Sunarja. I am a Senor studying MAS*/

/*class Student {
	constructor(fname, lname, year, degree) {
		this.fname = fname;
		this.lname = lname;
		this.year = year;
		this.degree = degree;
	}

	about() {
		console.log(
			"My name is " +
				this.fname +
				" " +
				this.lname +
				". I am a " +
				this.year +
				" studying " +
				this.degree +
				"."
		);
	}
}
var studentOne = new Student("Jerremiah", "Sunarja", "Senior", "MAS");
studentOne.about(); // My name is Jerremiah Sunarja. I am a Senor studying MAS

var studentTwo = new Student("Adam", "Johnson", "Junior", "Informatics");
studentTwo.about(); // My name is Adam Smith. I am a Junior studying Informatics

var studentThree = new Student("Justin", "Brown", "Senior", "Music Tech");
studentThree.about(); // My name is Justin Brown. I am a Senor studying MAS*/

class Student {
	constructor(fname, lname, degree) {
		this.fname = fname;
		this.lname = lname;
		this.degree = degree;
	}
}

class Senior extends Student {
	constructor(fname, lname, degree) {
		super(fname, lname, degree);
		this.year = "Senior";
	}
	about() {
		console.log(
			"My name is " +
				this.fname +
				" " +
				this.lname +
				". I am a " +
				this.year +
				"."
		);
	}
}

let studentOne = new Senior("Jerremiah", "Sunarja", "MAS");

studentOne.about();
