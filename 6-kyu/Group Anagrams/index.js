function groupAnagrams(words) {
  var groups = {};
  words.forEach(function (w) {
    var s = w.split('').sort().join('');
    groups[s] = (groups[s] || []).concat([w]);
  });
  return Object.keys(groups).map(function (k) { return groups[k]; });
}

module.exports = groupAnagrams;
