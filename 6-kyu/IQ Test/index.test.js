const iqTest = require('.');

describe("Tests", () => {
  it("test", () => {
    expect(iqTest("2 4 7 8 10")).toEqual(3);
    expect(iqTest("1 2 2")).toEqual(1)
    expect(iqTest("2 3 7")).toEqual(1)
  });
});
