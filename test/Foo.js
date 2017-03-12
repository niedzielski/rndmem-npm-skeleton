import assert from 'assert'

import skeleton from '../build/rndmem-npm-skeleton'

describe('Foo', function() {
  describe('bar()', function() {
    const bar = skeleton.Foo.bar

    it('return val', function(done) {
      assert.deepEqual(bar(), 1)
      done()
    })
  })
})