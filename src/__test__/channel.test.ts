import { test } from 'ava'
import Channel from '../channel'


test('channel', t => {
  const channel = new Channel()

  let calls = 0

  const unsubscribe = channel.subscribe(() => {
    calls += 1
  })

  channel.broadcast()
  channel.broadcast()

  unsubscribe()

  channel.broadcast()

  t.is(calls, 2)
})