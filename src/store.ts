import Channel from './channel'
import { ISubscribable } from './types'


export default class Store<T> implements ISubscribable {

  private value: T
  private channel = new Channel()

  constructor(initialValue: T) {
    this.value = initialValue
  }

  get(): T {
    return this.value
  }

  set() {
    this.channel.broadcast()
  }

  update(fn: (value: T) => void) {
    fn(this.value)
    this.set()
  }

  subscribe = this.channel.subscribe

}