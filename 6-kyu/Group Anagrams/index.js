function stringSort(targetString) {
  return targetString.split('').sort();
}

function groupAnagrams(words) {
  const result = [];
  let index = 0;
  while (true) {
    if (words.length === 0) break;

    let array = [...words];



    for (let i = 0; i < array.length; i++) {
      if (i === 0) {
        result[index].push(array[0]);
        continue;
      }
    }
  }

  return result;
}

module.exports = groupAnagrams;
