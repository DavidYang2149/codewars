const DNAStrand = require('.');

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    expect(DNAStrand("AAAA")).toEqual("TTTT");
    expect(DNAStrand("ATTGC")).toEqual("TAACG");
    expect(DNAStrand("GTAT")).toEqual("CATA");
  });
});
