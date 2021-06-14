const getMissingIngredients = require('.');

describe('example tests', function() {
  // some helpers to make hashes comparable
  // var sortHash = function(hash) {
  //   return Object.keys(hash).sort().reduce(function(p, c) { p[c] = hash[c]; return p; }, {});
  // };
  
  // var assertSimilarHash = function(expected, actual, message) {
  //   Test.assertSimilar(sortHash(expected), sortHash(actual), message);
  // };

  it('should pass examples from description', function() {
    var recipe = {flour: 200, eggs: 1, sugar: 100};

    expect(getMissingIngredients(recipe, {flour: 50, eggs: 1})).toEqual({flour: 150, sugar: 100});
    expect(getMissingIngredients(recipe, {})).toEqual({flour: 200, eggs: 1, sugar: 100});
    expect(getMissingIngredients(recipe, {flour: 500, sugar: 200})).toEqual({flour: 100, eggs: 3, sugar: 100});
  });
});
