import crypto from 'crypto'

const createAvatar = str => crypto
  .createHash('md5')
  .update(`${str.toString()}`)
  .digest('hex')

export default createAvatar
