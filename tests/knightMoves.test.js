import knightMoves from '../src/knightMoves.js';
import { validMove } from '../src/knightMoves.js';

describe('validMove', () => {
	test('should return true for a valid knight move', () => {
		expect(validMove([0, 0], [1, 2])).toBe(true);
	});

	test('should return false for an invalid knight move', () => {
		expect(validMove([0, 0], [1, 1])).toBe(false);
	});

	test('should return false when the start and end positions are the same', () => {
		expect(validMove([3, 3], [3, 3])).toBe(false);
	});

	test('should return an error when the start position is outside the board', () => {
		expect(validMove([-1, 0], [1, 2])).toBe(false);
	});

	test('should return an error when the end position is outside the board', () => {
		expect(validMove([0, 0], [8, 2])).toBe(false);
	});

	test('should return true for a valid move from the edge of the board', () => {
		expect(validMove([7, 7], [5, 6])).toBe(true);
	});
});
