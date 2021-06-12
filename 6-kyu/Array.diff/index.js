// Case 1-1.
// function arrayDiff(a, b) {
//   const setA = new Set(a);
//   const arrayA = [...setA];
//   return arrayA.filter(x => !b.some(y => y === x));
// }

// Case 1-2.
// function arrayDiff(a, b) {
//   const setA = new Set(a);
//   const arrayA = [...setA];
//   return arrayA.filter(x => !b.includes(x));
// }

// Case 2.
// function arrayDiff(a, b) {
//   const filterA = a.filter(x => !b.includes(x));
//   const setA = new Set(filterA);
//   const arrayA = [...setA];
//   return arrayA;
// }

// Case 3.
function arrayDiff(a, b) {
  const filterA = a.filter(x => !b.includes(x));
  const result = filterA.reduce((acc, value) => { return !acc.includes(value) ? [...acc, value] : acc }, []);
  return result;
}

module.exports = arrayDiff;

/*
Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b keeping their order.

arrayDiff([1,2],[1]) == [2]
If a value is present in b, all of its occurrences must be removed from the other:

arrayDiff([1,2,2,2,3],[2]) == [1,3]
*/
