const high = require('.');

describe("Example tests", () => {
  it('test', () => {
    expect(high('man i need a taxi up to ubud')).toEqual('taxi');
    expect(high('what time are we climbing up the volcano')).toEqual('volcano');
    expect(high('take me to semynak')).toEqual('semynak');
    expect(high('aa b')).toEqual('aa');
    expect(high('b aa')).toEqual('b');
    expect(high('bb d')).toEqual('bb');
    expect(high('d bb')).toEqual('d');
    expect(high('aaa b')).toEqual('aaa');
  });
});
