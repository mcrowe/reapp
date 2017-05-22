import Channel from './channel'


class Store<T> {

  value: T
  channel: Channel

  constructor(initialValue: T) {
    this.value = initialValue
    this.channel = new Channel()
  }

  get(): T {
    return this.value
  }

  set() {
    this.channel.broadcast(this.value)
  }

  update(fn: (value: T) => void) {
    fn(this.value)
    this.set()
  }

  subscribe(fn: Function) {
    return this.channel.subscribe(fn)
  }

}


export default Store