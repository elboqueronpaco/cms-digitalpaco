import getBase64 from '../getBase64'

describe('#getBase64', () => {
  it('should get a value from base64 string', () => {
    expect(getBase64('Zm9v')).toBe('foo')
  });
})
