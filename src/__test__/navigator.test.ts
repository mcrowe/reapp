import { test } from 'ava'
import Navigator from '../navigator'


test('router', t => {
  const router = new Navigator({path: 'home', params: {}})

  router.push('page', {})

  t.deepEqual(router.getCurrentRoute(), {path: 'page', params: {}})

  router.pop()

  t.deepEqual(router.getCurrentRoute(), {path: 'home', params: {}})
})