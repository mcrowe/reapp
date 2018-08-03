import { test } from 'ava'
import Router from '../router'

test('basics', t => {
  const router = new Router({
    initialRoute: { path: '/', params: {} },
    routes: {},
    getSceneProps: () => ({})
  })

  t.truthy(router.render())
})
