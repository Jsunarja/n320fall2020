class Board {
	constructor(row1, row2, row3) {
		this.row1 = row1;
		this.row2 = row2;
		this.row3 = row3;
	}
}

class RedPlayer extends Board {
	constructor(red) {
		super(red);
		this.red = red;
	}
}

class BluePlayer extends Board {
	constructor(blue) {
		super(blue);
		this.blue = blue;
	}
}

//create elements for board and players
let board = new Board(["", "", ""], ["", "", ""], ["", "", ""]);
let playerOne = new RedPlayer("X");
let playerTwo = new RedPlayer("O");

//get board and apply event listener to click
var boardStruc = document.getElementsByClassName("board");
var playerOneX = document.getElementsByClassName("exes");
for (var i = 0; i < boardStruc.length; i++) {
	boardStruc[i].addEventListener("click", boxClicked, { once: true });
}

function boxClicked() {
	alert("click ");
	//place mark for player
}
