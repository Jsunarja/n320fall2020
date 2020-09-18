class VendingMachine {
	constructor(firstCandyName, secondCandyName, firstChipsName) {
		this.firstCandyName = firstCandyName;
		this.secondCandyName = secondCandyName;
		this.firstChipsName = firstChipsName;
		this.firstCandy = 10;
		this.secondCandy = 13;
		this.firstChips = 8;
	}
	render() {
		return `
        <div>Vending Machine Has</div>
        <div>${this.firstCandyName}: ${this.firstCandy}</div>
        <div>${this.secondCandyName}: ${this.secondCandy}</div>
        <div>${this.firstChipsName}: ${this.firstChips}</div>
        <button id="fCandyBtn" onclick="buyFCandy()">Buy ${this.firstCandyName}</button>
		<button id="sCandyBtn" onclick="buySCandy()">Buy ${this.secondCandyName}</button>
		<button id="fchipsBtn" onclick="buyFChips()">Buy ${this.firstChipsName}</button>
        `;
	}
	buyFCandy() {
		if (this.firstCandy > 0) {
			this.firstCandy--;
		} else {
			alert(`${this.firstCandyName} is sold out`);
		}
	}
	buySCandy() {
		if (this.secondCandy > 0) {
			this.secondCandy--;
		} else {
			alert(`${this.secondCandyName} is sold out`);
		}
	}
	buyFChips() {
		if (this.firstChips > 0) {
			this.firstChips--;
		} else {
			alert(`${this.firstChipsName} is sold out`);
		}
	}
}

let myVendingMachine = new VendingMachine("Skittles", "Snickers", "Cheetos");
let vendingMachineDiv = document.createElement("div");
vendingMachineDiv.innerHTML = myVendingMachine.render();
document.body.appendChild(vendingMachineDiv);

function buyFCandy() {
	myVendingMachine.buyFCandy();
	vendingMachineDiv.innerHTML = myVendingMachine.render();
}
function buySCandy() {
	myVendingMachine.buySCandy();
	vendingMachineDiv.innerHTML = myVendingMachine.render();
}
function buyFChips() {
	myVendingMachine.buyFChips();
	vendingMachineDiv.innerHTML = myVendingMachine.render();
}
