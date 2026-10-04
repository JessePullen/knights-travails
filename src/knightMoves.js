export default function knightMoves(start, end) {
	return validMove(start, end);
}

function validMove(start, end) {
	if (start[0] < 0 || start[0] > 7) {
		return false;
	}
	if (start[1] < 0 || start[1] > 7) {
		return false;
	}
	if (end[0] < 0 || end[0] > 7) {
		return false;
	}
	if (end[1] < 0 || end[1] > 7) {
		return false;
	}

	const moves = [
		[1, 2],
		[1, -2],
		[-1, 2],
		[-1, -2],
		[2, 1],
		[2, -1],
		[-2, 1],
		[-2, -1],
	];

	for (const move of moves) {
		if (start[0] + move[0] === end[0] && start[1] + move[1] === end[1]) {
			return true;
		}
	}
	return false;
}

export { validMove };
