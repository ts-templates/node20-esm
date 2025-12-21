import assert from 'node:assert'
import {
  describe,
  it
} from 'node:test'
import { greet } from './greet.js'

describe('greet', async () => {
  it('returns greeting', () => {
    const actual = greet('World')
    assert.strictEqual(actual, 'Hello World')
  })
})
