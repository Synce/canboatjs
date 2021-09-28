const { byteString } = require('./utilities')
import { Buffer } from "buffer"
describe('byteString', () => {
  test('Buffer to string', () => {
    const data = Buffer.from('00ff7f520021feff', 'hex')
    expect(byteString(data)).toEqual('00,ff,7f,52,00,21,fe,ff')
  })
})
