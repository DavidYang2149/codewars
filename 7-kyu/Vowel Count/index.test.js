const getCount = require('.')

describe("Case 1", function () {
  it("should be defined", function () {
    expect(getCount("abracadabra")).toEqual(5);
  });
});
