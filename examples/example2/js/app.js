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
class Engine {}
