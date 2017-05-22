function pull<T>(xs: T[], x: T) {
  const idx = xs.indexOf(x)
  if (idx > -1) {
    xs.splice(idx, 1)
  }
}


class Channel {

  listeners: Function[]

  constructor() {
    this.listeners = []
  }

  subscribe(fn: Function) {
    this.listeners.push(fn)

    // Return an unsubscribe function.
    return () => {
      pull(this.listeners, fn)
    }
  }

  broadcast(val?) {
    this.listeners.forEach(fn => {
      fn(val)
    })
  }

}


export default Channel