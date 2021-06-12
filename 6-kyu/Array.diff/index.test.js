const arrayDiff = require('.');

describe("Sample tests", function () {
  it("Should pass Sample tests", function () {
    expect(arrayDiff([], [4, 5])).toEqual([]);  // "a was [], b was [4,5]"
    expect(arrayDiff([3, 4], [3])).toEqual([4]);  // "a was [3,4], b was [3]"
    expect(arrayDiff([1, 8, 2], [])).toEqual([1, 8, 2]);  // "a was [1,8,2], b was []"
    expect(arrayDiff([1, 2, 3], [1, 2])).toEqual([3]);  // "a was [1,2,3], b was [1,2]"
    // error case Test
    expect(arrayDiff([1, 2, 2], [1])).toEqual([2]);  // "a was [1,2,3], b was [1,2]"
  });
});
