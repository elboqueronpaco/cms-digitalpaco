import jwt from 'jsonwebtoken'
import encrypt from './encrypt'
import setBase64 from './setBase64'
import { $security } from '../../config'

const createToken = async user => {
  const { id, username, password, email, avatar, privilege, active } = user
  const token = setBase64(`${encrypt($security().secretKey)}${password}`)
  const userData = {
    id,
    username,
    email,
    avatar,
    privilege,
    active,
    token
  }
  const createTk = jwt.sign(
    { data: setBase64(userData) },
    $security().secretKey,
    { expiresIn: $security().expiresIn }
  )
  return Promise.all([createTk])
}
export default createToken
