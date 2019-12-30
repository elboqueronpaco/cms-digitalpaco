import createToken from '../createToken'

describe('#createToken', () => {
  it('should create a token', async () => {
    const user = {
      id: 'adad1a2da',
      username: 'username',
      password: 'password',
      email: 'username@email.com',
      avatar: 'https://gavatar.com/avatar/6e7896f1663a39bb709ab558085478fc',
      privilege: 'user',
      active: true
    }
    const [token] = await createToken(user)
    expect(token.length).toBe(584)
  });
})
