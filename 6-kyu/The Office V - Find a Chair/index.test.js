const meeting = require('.');

describe("Example tests", () => {
  expect(meeting([['XXX', 3], ['XXXXX', 6], ['XXXXXX', 9]], 4)).toBe([0, 1, 3]);
  expect(meeting([['XXX', 1], ['XXXXXX', 6], ['X', 2], ['XXXXXX', 8], ['X', 3], ['XXX', 1]], 5)).toBe([0, 0, 1, 2, 2]);
  expect(meeting([['XX', 2], ['XXXX', 6], ['XXXXX', 4]], 0)).toBe('Game On');
});
