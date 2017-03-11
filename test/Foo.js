import assert from 'assert'
import skeleton from '../build/rndmem-npm-skeleton'

describe('Foo', () => {
  describe('bar()', () => {
    const bar = skeleton.Foo.bar

    it('return val', () => {
      assert.deepEqual(bar(), 1)
    })
  })
})