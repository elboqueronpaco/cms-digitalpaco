import { AuthenticationError } from 'apollo-server'
import { isPasswordMatch } from './is'
import encrypt from './encrypt'
import createToken from './createToken'
const auth = async (email, password, models) => {
  const user = await models.User.findOne({
    where: { email },
    raw: true
  })
  if (!user) {
    throw new AuthenticationError('Login invalido')
  }
  const isActive = user.active
  const passwordMatch = isPasswordMatch(encrypt(password), user.password)
  if (!passwordMatch) {
    throw new AuthenticationError('Login invalido')
  }
  if (!isActive) {
    throw new AuthenticationError('Tú cuenta no esta activa')
  }
  const [token] = await createToken(user)
  return {
    token
  }
}

export default auth
