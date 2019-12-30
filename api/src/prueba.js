import createToken from './lib/createToken'

const user = {
  id: 'adad1a2da',
  username: 'username',
  password: 'password',
  email: 'username@email.com',
  avatar: 'https://gavatar.com/avatar/6e7896f1663a39bb709ab558085478fc',
  privilege: 'user',
  active: true
}
const prueba = async user => {
  const [token] = await createToken(user)
  return {
    token
  }
}
console.log(prueba(user).length)
