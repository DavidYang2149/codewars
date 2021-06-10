function persistence(num) {
  let count = 0;
  let target = num;

  while (true) {
    if (target.toString().length === 1) {
      break;
    }
    target = eval(target.toString().split('').join('*'));
    count += 1;
  }
  return count;
  // return (num.toString().length === 1 ? num : persistence(eval(num.toString().split('').join('*'))));
}

module.exports = persistence;

/*
Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

For example:

 persistence(39) === 3 // because 3*9 = 27, 2*7 = 14, 1*4=4
                       // and 4 has only one digit

 persistence(999) === 4 // because 9*9*9 = 729, 7*2*9 = 126,
                        // 1*2*6 = 12, and finally 1*2 = 2

 persistence(4) === 0 // because 4 is already a one-digit number
*/
