import knightMoves from '../src/knightMoves.js';
import { validMoves } from '../src/knightMoves.js';

describe('validMoves', () => {
	test('should return all eight valid moves from the centre of the board', () => {
		const result = validMoves([3, 3]);

		expect(result).toHaveLength(8);
		expect(result).toEqual(
			expect.arrayContaining([
				[4, 5],
				[4, 1],
				[2, 5],
				[2, 1],
				[5, 4],
				[5, 2],
				[1, 4],
				[1, 2],
			]),
		);
	});

	test('should return only two valid moves from a corner', () => {
		const result = validMoves([0, 0]);

		expect(result).toHaveLength(2);
		expect(result).toEqual(
			expect.arrayContaining([
				[1, 2],
				[2, 1],
			]),
		);
	});

	test('should exclude moves that go outside the board', () => {
		const result = validMoves([0, 1]);

		expect(result).toHaveLength(3);
		expect(result).toEqual(
			expect.arrayContaining([
				[1, 3],
				[2, 2],
				[2, 0],
			]),
		);
	});

	test('should return all valid moves from the opposite corner', () => {
		const result = validMoves([7, 7]);

		expect(result).toHaveLength(2);
		expect(result).toEqual(
			expect.arrayContaining([
				[5, 6],
				[6, 5],
			]),
		);
	});

	test('should return an empty array when the starting position is outside the board', () => {
		expect(validMoves([-1, 0])).toEqual([]);
	});

	test('should return an empty array when the starting position is outside the board on the upper boundary', () => {
		expect(validMoves([8, 3])).toEqual([]);
	});
});
