export default function knightMoves(start, end) {
	return validMoves(start);
}

function validMoves(startPos) {
	const nextMoves = [];

	if (startPos[0] < 0 || startPos[0] > 7) {
		return nextMoves;
	}
	if (startPos[1] < 0 || startPos[1] > 7) {
		return nextMoves;
	}

	const moveSet = [
		[1, 2],
		[1, -2],
		[-1, 2],
		[-1, -2],
		[2, 1],
		[2, -1],
		[-2, 1],
		[-2, -1],
	];

	for (const move of moveSet) {
		const xPos = startPos[0] + move[0];
		const yPos = startPos[1] + move[1];
		if (xPos >= 0 && xPos <= 7 && yPos >= 0 && yPos <= 7) {
			nextMoves.push([xPos, yPos]);
		}
	}

	return nextMoves;
}

export { validMoves };
