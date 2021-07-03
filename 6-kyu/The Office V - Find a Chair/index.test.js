const meeting = require('.');

describe("Example tests", () => {
  it('Tests', () => {
    expect(meeting([['XXX', 1], ['XXXXXX', 6], ['X', 2], ['XXXXXX', 8], ['X', 3], ['XXX', 1]], 5)).toEqual([0, 0, 1, 2, 2]);
    expect(meeting([['XXX', 3], ['XXXXX', 6], ['XXXXXX', 9]], 4)).toEqual([0, 1, 3]);
    expect(meeting([['XX', 2], ['XXXX', 6], ['XXXXX', 4]], 0)).toEqual('Game On');
    expect(meeting([['XX', 2], ['XXXX', 6], ['XXXXX', 4]], 3)).toEqual('Not enough!');
  });
});
