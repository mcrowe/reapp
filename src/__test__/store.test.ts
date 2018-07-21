import { test } from 'ava'
import Store from '../store'


test('store', t => {
  const store = new Store({counter: 5})

  t.is(store.get().counter, 5)

  store.update(v =>
    v.counter = v.counter * 2
  )

  t.is(store.get().counter, 10)
})