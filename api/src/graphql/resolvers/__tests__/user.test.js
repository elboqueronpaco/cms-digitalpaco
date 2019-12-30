import user from '../user'

import { isFunction } from '../../../lib/is.js'

describe('#Query', () => {
  it('should have getUser metodo', async () => {
    expect(isFunction(user.Query.getUsers)).toBe(true)
  })
})

// Mutation
describe('#Mutation', () => {
  it('should have signup metodo', async () => {
    expect(isFunction(user.Mutation.singup)).toBe(true)
  })
  it('should have signin metodo', async () => {
    expect(isFunction(user.Mutation.singup)).toBe(true)
  });
})
