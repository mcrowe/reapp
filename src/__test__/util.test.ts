import { test } from 'ava'
import * as Util from '../util'


test('pull', t => {
  const xs = [1, 2, 3, 4]

  Util.pull(xs, 3)

  t.deepEqual([1, 2, 4], xs)

  Util.pull(xs, 5)

  t.deepEqual([1, 2, 4], xs)
})