import crypto from 'crypto'

import { $security } from '../../config'

const encrypt = str => {
  return crypto
    .createHash('sha1')
    .update(`${$security().secretKey}${str.toString()}`)
    .digest('hex')
}

export default encrypt
