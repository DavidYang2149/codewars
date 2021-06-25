const groupAnagrams = require('.');

describe("Tests", () => {
  it("test", () => {
    expect(groupAnagrams(["rat", "tar", "star"])).toStrictEqual([["rat", "tar"], ["star"]]);
  });
});
