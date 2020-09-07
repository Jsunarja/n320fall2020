//ASSOCIATION
//create class Ukulele
class Ukulele {
	constructor(make, strings, acoustic) {
		this.make = make;
		this.strings = strings;
		this.acoustic = acoustic;
	}
	//method to play ukulele
	strumOpen() {
		this.strings.forEach((string) => {
			console.log(string.note + " Plays");
		});
	}
}
//create class for Ukulele
class String {
	constructor(note, octave) {
		this.note = note;
		this.octave = octave;
	}
}
//create variables for strings and new ukulele
var strings = [];
strings[0] = new String("G", 4);
strings[1] = new String("C", 4);
strings[2] = new String("E", 4);
strings[3] = new String("A", 4);
var myUkulele = new Ukulele("Fender", strings, true);
//call function to play ukulele
myUkulele.strumOpen();

//INVOKING OTHER OBJECT'S METHOD
//create class Water
class Water {
	constructor() {
		this.amount = 100;
	}
	//method to decrease water
	drain() {
		this.amount -= 5;
		console.log("Water drained, new amount: " + this.amount);
	}
}
//create class Cloud to take an instance of water class to drain from
class Cloud {
	constructor(water) {
		//remember instance of water class
		this.water = water;
		this.size = 10;
	}
	//method to increase water
	grow() {
		this.water.drain();
		this.size++;
		console.log("Cloud grew to: " + this.size);
	}
}
//new variables for water
let someWater = new Water();
//new variable for cloud that has someWater constraints
let someCloud = new Cloud(someWater);
someCloud.grow();

//EXPOSING A CALLBACK METHOD
//create class Firework
class Firework {
	constructor() {
		this.fuse = 12;
	}
	//method to subtract to burn fuse
	burnFuse() {
		this.fuse--;
		if (this.fuse <= 0) {
			//callback method create event before method is created
			this.activatedCallback();
		}
	}
}
//create class Crowd
class Crowd {
	constructor(fireworkInstance) {
		//create method for callback and invoke another method
		fireworkInstance.activatedCallback = this.marvel;
	}
	//method for crowd reaction
	marvel() {
		console.log("Oooh, and, aaahh");
	}
}
//new variable for firework
let myFirework = new Firework();
//new crowd with firework constraint
let myCrowd = new Crowd(myFirework);
//call function for firework
for (i = 0; i < 15; i++) {
	myFirework.burnFuse();
}

//PASSING THROUGH A HIGHER OBJECT
//create class employee
class Employee {
	constructor(name, emManager) {
		this.name = name;
		//add manager as constraint
		this.manager = emManager;
	}
	quit() {
		//call function for employee quiting
		this.manager.employeeQuit();
	}
	//employee leaves function
	moveOut() {
		console.log(this.name + " says, 'Never liked this job anyways.'");
	}
	//employee hired function
	hire() {
		console.log(this.name + "says, 'My dream Job!'");
	}
}
//create class manager
class Manager {
	constructor() {
		//employees placed in array
		this.employees = [];
	}
	//push each employee through
	addEmployee(em) {
		this.employees.push(em);
	}
	employeeQuit() {
		//call function for each employee
		this.employees[0].moveOut();
		this.employees[1].hire();
	}
}
//new variable for manager and employees with manager constraints
let manager = new Manager();
let employee1 = new Employee("Jack", manager);
let employee2 = new Employee("Adam", manager);
//manager adds new employees
manager.addEmployee(employee1);
manager.addEmployee(employee2);
//call function for employee quiting and hiring
employee1.quit();
