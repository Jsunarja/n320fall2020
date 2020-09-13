//Inheritance
class Band {
	constructor(instrument, note, duration) {
		this.instrument = instrument;
		this.note = note;
		this.duration = duration;
	}
	play() {
		console.log(
			this.instrument +
				" plays " +
				this.note +
				" for " +
				this.duration +
				" note."
		);
	}
}
class Guitar extends Band {
	constructor(instrument, note) {
		super(instrument, note, 1);
	}
}
class Piano extends Band {
	constructor(instrument, note) {
		super(instrument, note, 0.5);
	}
}
let myGuitar = new Guitar("Guitar", "A");
let myPiano = new Piano("Piano", "G");
myPiano.play(); //Piano plays G for 0.5 note.

//Abstraction
class Vehicle {
	constructor(make, model) {
		this.make = make;
		this.model = model;
	}
	vehicleType() {
		return "Vehicle is a " + this.make + " " + this.model;
	}
}
let newVehicle = new Vehicle("Honda", "Civic");
let myVehicle = newVehicle.vehicleType();
console.log(myVehicle); //Vehicle is a Honda Civic

//Encapsulation
class Employee {
	setEmpDet(name, id) {
		this.name = name;
		this.id = id;
	}
	getEmpName() {
		return this.name;
	}
	getEmpId() {
		return this.id;
	}
}
let emp1 = new Employee();
emp1.setEmpDet("Adam", 24358);
console.log("Employee Name: " + emp1.getEmpName());
console.log("Employee Id: " + emp1.getEmpId());

//Polymorphism
class Animal {
	constructor(name, animal) {
		this.name = name;
		this.animal = animal;
	}
	makeSound() {
		console.log("Animal Sounds");
	}
}
class Dog extends Animal {
	constructor(name) {
		super(name, "dog");
	}
	makeSound() {
		console.log("My " + this.animal + " " + this.name + " says, 'Woof Woof'");
	}
}
class Cat extends Animal {
	constructor(name) {
		super(name, "cat");
	}
	makeSound() {
		console.log("My " + this.animal + " " + this.name + " says, 'Meow'");
	}
}
var animal = [];
animal[0] = new Dog("Brownie");
animal[1] = new Cat("Kit Kat");
animal.forEach(function (animal) {
	animal.makeSound();
});
