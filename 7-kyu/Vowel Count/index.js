function getCount(str) {
  var vowelsCount = 0;

  str.split('').map(x => x.match(/a|e|i|o|u/i) ? vowelsCount += 1 : vowelsCount);

  return vowelsCount;
}

module.exports = getCount;

/*
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.
*/
