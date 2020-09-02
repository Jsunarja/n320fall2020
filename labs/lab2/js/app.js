class Instrument {
	constructor(family, play, loudness) {
		this.family = family;
		this.play = play;
		this.loudness = loudness;
	}

	playing() {
		console.log(
			this.family + " is " + this.play + " at " + this.loudness + " decibels."
		);
	}
}

class Woodwind extends Instrument {
	constructor(family, play) {
		super(family, play, 105);
	}
}

class Percussion extends Instrument {
	constructor(family, play) {
		super(family, play, 120);
	}
}

class Stringed extends Instrument {
	constructor(family, play) {
		super(family, play, 95);
	}
}

let instruments = [];

instruments[0] = new Woodwind("clarinet", "honking");
instruments[1] = new Percussion("drum", "banging");
instruments[2] = new Stringed("violin", "winding");

instruments.forEach((instruments) => {
	instruments.playing();
});
