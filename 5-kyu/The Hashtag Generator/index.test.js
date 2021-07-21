const generateHashtag = require('.');

describe("Tests", () => {
  it("test", () => {
    expect(generateHashtag("")).toEqual(false);
    expect(generateHashtag(" ".repeat(200))).toEqual(false);
    expect(generateHashtag("Do We have A Hashtag")).toEqual("#DoWeHaveAHashtag");
    expect(generateHashtag("Codewars")).toEqual("#Codewars");
    expect(generateHashtag("Codewars Is Nice")).toEqual("#CodewarsIsNice");
    expect(generateHashtag("Codewars is nice")).toEqual("#CodewarsIsNice");
    expect(generateHashtag("code" + " ".repeat(140) + "wars")).toEqual("#CodeWars");
    expect(generateHashtag("Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat")).toEqual(false);
    expect(generateHashtag("a".repeat(139)), "#A" + "a".repeat(138)).toEqual("Should work");
    expect(generateHashtag("a".repeat(140))).toEqual(false);
  });
});
