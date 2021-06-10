const persistence = require('.');

describe('Initial Tests', function () {
  it('Test', () => {
    expect(persistence(39)).toEqual(3);
    expect(persistence(4)).toEqual(0);
    expect(persistence(25)).toEqual(2);
    expect(persistence(999)).toEqual(4);
  });
});
