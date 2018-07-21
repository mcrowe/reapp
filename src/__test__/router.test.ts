import { test } from 'ava'
import Router from '../router'


test('router', t => {
  const router = new Router({path: 'home', params: {}})

  router.push('page', {})

  t.deepEqual(router.getCurrentRoute(), {path: 'page', params: {}})

  router.pop()

  t.deepEqual(router.getCurrentRoute(), {path: 'home', params: {}})
})