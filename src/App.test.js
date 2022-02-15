import TicTacToe, { checkLine, checkLines, hasMovesLeft } from './components/TicTacToe';

test('test checkLine', () => {
  expect(checkLine([1, 1, 1], 1)).toBe(true);
  expect(checkLine([2, 2, 2], 2)).toBe(true);
  expect(checkLine([1, 1, 1], 2)).toBe(false);
  expect(checkLine([2, 2, 2], 1)).toBe(false);
  expect(checkLine([0, 1, 2], 1)).toBe(false);
  expect(checkLine([2, 0, 1], 2)).toBe(false);
});

test('test checkLines', () => {
  let lines = [
    [2, 2, 0],
    [0, 1, 2],
    [1, 1, 1],
    [2, 0, 1],
    [2, 1, 1],
    [0, 2, 1],
    [2, 1, 1],
    [0, 1, 1]
  ];
  expect(checkLines(lines, 1)).toBe(true);
  expect(checkLines(lines, 2)).toBe(false);
});

test('test hasMovesLeft', () => {
  expect(hasMovesLeft([0, 0, 0, 0, 0, 0, 0, 0, 0])).toBe(true);
  expect(hasMovesLeft([1, 2, 1, 2, 1, 2, 1, 2, 1])).toBe(false);
  expect(hasMovesLeft([0, 1, 2, 1, 2, 1, 2, 1, 2])).toBe(true);
  expect(hasMovesLeft([0, 0, 0, 0, 1, 0, 0, 0, 0])).toBe(true);
});