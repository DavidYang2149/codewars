function high(x) {
  return x.split(' ').reduce((a, b) => {
    const left = a.split('').reduce((i, j) => { return i + j.charCodeAt(0) - 96 }, 0);
    const right = b.split('').reduce((i, j) => { return i + j.charCodeAt(0) - 96 }, 0);
    return left < right ? b : a;
  }, '');
}

module.exports = high;

/*
Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.
*/
