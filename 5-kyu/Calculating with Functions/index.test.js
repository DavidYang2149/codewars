// const zero = require('.');
// const one = require('.');
// const two = require('.');
// const three = require('.');
// const four = require('.');
// const five = require('.');
// const six = require('.');
// const seven = require('.');
// const eight = require('.');
// const nine = require('.');
// const plus = require('.');
// const minus = require('.');
// const times = require('.');
// const dividedBy = require('.');

function zero(func) { return func ? func(0) : 0; };
function one(func) { return func ? func(1) : 1; };
function two(func) { return func ? func(2) : 2; };
function three(func) { return func ? func(3) : 3; };
function four(func) { return func ? func(4) : 4; };
function five(func) { return func ? func(5) : 5; };
function six(func) { return func ? func(6) : 6; };
function seven(func) { return func ? func(7) : 7; };
function eight(func) { return func ? func(8) : 8; };
function nine(func) { return func ? func(9) : 9; };

function plus(b) { return function (a) { return a + b; }; };
function minus(b) { return function (a) { return a - b; }; };
function times(b) { return function (a) { return a * b; }; };
function dividedBy(b) { return function (a) { return a / b; }; };

describe("Tests", () => {
  it("test", () => {
    expect(seven(times(five()))).toEqual(35);
    expect(four(plus(nine()))).toEqual(13);
    expect(eight(minus(three()))).toEqual(5);
    expect(six(dividedBy(two()))).toEqual(3);
    expect(zero(plus(one()))).toEqual(1);
  });
});
