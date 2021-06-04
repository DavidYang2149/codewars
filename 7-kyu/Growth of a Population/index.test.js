const nbYear = require('.')

describe("nbYear", function () {
  it("Basic tests", function () {
    expect(nbYear(1500, 5, 100, 5000)).toEqual(15);
    expect(nbYear(1500000, 2.5, 10000, 2000000)).toEqual(10);
    expect(nbYear(1500000, 0.25, 1000, 2000000)).toEqual(94);
  });
});
