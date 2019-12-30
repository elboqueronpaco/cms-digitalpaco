import encrypt from '../encrypt'

describe('#encrypt', () => {
  it('should  return a encrypted salted string', () => {
    expect(encrypt('password')).toBe('abd8cbc54c0f91dcdf6494767723b2e9fcf29d89')
  });
})
