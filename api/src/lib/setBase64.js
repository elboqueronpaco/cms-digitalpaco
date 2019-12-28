import { isString, isObject } from './is'

const setBase64 = value => {
  if (isObject(value)) {
    return Buffer.from(JSON.stringify(value)).toString('base64')
  } else if (isString(value)) {
    return Buffer.from(value).toString('base64')
  }
  return false
}

export default setBase64
