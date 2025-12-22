import { describe, it, type TestContext } from 'node:test'
import { greet } from './greet.js'

describe('greet', () => {
  it('returns greeting', (t: TestContext) => {
    const actual = greet('World')
    t.assert.strictEqual(actual, 'Hello World')
  })
})
