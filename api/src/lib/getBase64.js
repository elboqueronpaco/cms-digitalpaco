import { isString, isJson } from './is'

const getBase64 = value => {
  let buffer = false
  if (isString(value)) {
    buffer = buffer.from(value, 'base64').toString('ascii')
  }
  if (isJson(value)) {
    buffer = JSON.parse(value, 'base64').toString('ascii')
  }
  return buffer
}

export default getBase64
