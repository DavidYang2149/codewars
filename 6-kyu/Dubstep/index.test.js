const songDecoder = require('.');

describe("Fixed tests", function () {
  it("It should pass fixed tests", function () {
    expect(songDecoder("AWUBBWUBC")).toEqual("A B C");
    expect(songDecoder("AWUBWUBWUBBWUBWUBWUBC")).toEqual("A B C");
    expect(songDecoder("WUBAWUBBWUBCWUB")).toEqual("A B C");
  });
});
