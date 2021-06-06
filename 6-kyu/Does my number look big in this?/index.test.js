const narcissistic = require('.')

describe("Narcissistic Function", function () {
  it("should find small numbers are all narcissistic", function () {
    expect(narcissistic(7)).toEqual(true);
  });

  it("should find these numbers are narcissistic", function () {
    expect(narcissistic(371)).toEqual(true);
  });
});
