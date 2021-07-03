const sortSequence = require('.');

describe("Basic Tests", () => {
  it("It should works for basic tests", () => {
    expect(sortSequence([3, 2, 1, 0, 5, 6, 4, 0, 1, 5, 3, 0, 4, 2, 8, 0])).toStrictEqual(
      [1, 2, 3, 0, 1, 3, 5, 0, 2, 4, 8, 0, 4, 5, 6, 0]);
    expect(sortSequence([3, 2, 1, 0, 5, 6, 4, 0, 1, 5, 3, 0, 2, 2, 2, 0])).toStrictEqual(
      [1, 2, 3, 0, 2, 2, 2, 0, 1, 3, 5, 0, 4, 5, 6, 0]);
    expect(sortSequence([2, 2, 2, 0, 5, 6, 4, 0, 1, 5, 3, 0, 3, 2, 1, 0])).toStrictEqual(
      [2, 2, 2, 0, 1, 2, 3, 0, 1, 3, 5, 0, 4, 5, 6, 0]);
  });
});
