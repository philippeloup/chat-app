const expect = require('expect');
const {isRealString} = require('./validation')

describe('validate that strings are real', () =>{
  it('should reject non-string values', () => {
    expect(isRealString(98)).toBeFalsy();
  });

  it('should reject string with only spaces', () => {
    expect(isRealString('    ')).toBeFalsy()
  });

  it('should allow with non-space characters', () => {
    expect(isRealString(' gag   jjj    ')).toBeTruthy()
  });
});
