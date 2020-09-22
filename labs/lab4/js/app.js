class Checkers {
	constructor(board, pieces, player) {
		this.board = board;
		this.pieces = pieces;
		this.player = player;
	}

	createBoard() {
        var
    }
}

class Board extends Checkers {
	constructor(board) {
		super(board);
	}
}

class Pieces extends Checkers {
	constructor(pieces) {
		super(pieces);
	}
}

class Player extends Checkers {
	constructor(player) {
		super(player);
	}
}

document.addEventListener("DOMContentLoaded", createBoard());
