const groupAnagrams = require('.');

describe("Tests", () => {
  it("test", () => {
    expect(groupAnagrams(["rat", "tar", "star"])).toBe([["rat", "tar"], ["star"]]);
  });
});
