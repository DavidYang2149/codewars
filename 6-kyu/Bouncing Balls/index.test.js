const bouncingBall = require('.');

describe("Tests", function () {
  it("test1", function () {
    expect(bouncingBall(3.0, 0.66, 1.5)).toEqual(3);
  });

  it("test2", function () {
    expect(bouncingBall(30.0, 0.66, 1.5)).toEqual(15);
  });

  it("test3", function () {
    expect(bouncingBall(-1, 0.66, 1.5)).toEqual(-1);
  });

  it("test4", function () {
    expect(bouncingBall(30.0, 1, 1.5)).toEqual(-1);
    expect(bouncingBall(30.0, -1, 1.5)).toEqual(-1);
  });

  it("test5", function () {
    expect(bouncingBall(3.0, 0.66, 3.0)).toEqual(-1);
  });
});
