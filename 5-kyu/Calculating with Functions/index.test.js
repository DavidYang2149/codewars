const zero = require('.');
const one = require('.');
const two = require('.');
const three = require('.');
const four = require('.');
const five = require('.');
const six = require('.');
const seven = require('.');
const eight = require('.');
const nine = require('.');
const plus = require('.');
const minus = require('.');
const times = require('.');
const dividedBy = require('.');

describe("Tests", () => {
  it("test", () => {
    expect(seven(times(five()))).toEqual(35);
    expect(four(plus(nine()))).toEqual(13);
    expect(eight(minus(three()))).toEqual(5);
    expect(six(dividedBy(two()))).toEqual(3);
    expect(zero(plus(one()))).toEqual(1);
  });
});
