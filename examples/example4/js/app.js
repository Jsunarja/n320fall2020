//Template
var item = {
	name: "Nissan 370z",
	graphic: "img/nissan-370z.jpg",
};
var temp = document.getElementById("iitem");
var clone = temp.content.cloneNode(true);
clone.querySelector(".name").innerHTML = item.name;
clone.querySelector(".igraphic").setAttribute("src", item.graphic);
document.body.appendChild(clone);
console.log(clone);

//JS Template String
let car = {
	make: "Nissan",
	model: "370z",
	year: "2020",
	trans: "6-speed manual",
	msrp: "29,990",
};
let templateStr = `
<h2>Car</h2>
<ul>
    <li>Make: ${car.make}</li>
    <li>Model: ${car.model}</li>
    <li>Year: ${car.year}</li>
    <li>Transmission: ${car.trans}</li>
    <li>MSRP: $${car.msrp}</li>
</ul>`;
let newContainer = document.createElement("div");
newContainer.innerHTML = templateStr;
document.body.appendChild(newContainer);

//Virtual Pet
class VirtualPet {
	constructor(name) {
		this.name = name;
		this.hunger = 50;
		this.energy = 60;
	}
	render() {
		return `
        <div>${this.name}</div>
        <div>Hunger: ${this.hunger}</div>
        <div>Energy: ${this.energy}</div>
        `;
	}
	feed() {
		this.hunger--;
		this.energy++;
	}
}
let myPet = new VirtualPet("Max");
let petDiv = document.getElementById("petDiv");
petDiv.innerHTML = myPet.render();

function feedPet() {
	myPet.feed();
	petDiv.innerHTML = myPet.render();
}
