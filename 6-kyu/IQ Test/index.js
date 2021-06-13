function iqTest(numbers) {
  const odd = numbers.split(' ').filter(x => parseInt(x) % 2 === 1);
  const even = numbers.split(' ').filter(x => parseInt(x) % 2 === 0);

  let result = 0;
  if (odd.length === 1) {
    result = numbers.split(' ').indexOf(odd[0]) + 1;
  }

  if (even.length === 1) {
    result = numbers.split(' ').indexOf(even[0]) + 1;
  }

  return result;
  // return odd.length === 1 ? numbers.split(' ').indexOf(odd[0]) + 1 : numbers.split(' ').indexOf(even[0]) + 1;
}

module.exports = iqTest;

/*
Bob is preparing to pass IQ test. The most frequent task in this test is to find out which one of the given numbers differs from the others. Bob observed that one number usually differs from the others in evenness. Help Bob — to check his answers, he needs a program that among the given numbers finds one that is different in evenness, and return a position of this number.

! Keep in mind that your task is to help Bob solve a real IQ test, which means indexes of the elements start from 1 (not 0)

Examples:
iqTest("2 4 7 8 10") => 3 // Third number is odd, while the rest of the numbers are even

iqTest("1 2 1 1") => 2 // Second number is even, while the rest of the numbers are odd
*/
