import user from '../user'

import { isFunction } from '../../../lib/is.js'

describe('#Query', () => {
  it('should have getUser metodo', async () => {
    expect(isFunction(user.Query.getUsers)).toBe(true)
  })
})
