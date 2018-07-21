import { ISubscribable, ICallable } from './types'
import { pull } from './util'


export default class Channel implements ISubscribable {

  listeners: ICallable[] = []

  subscribe = (fn: () => void) => {
    this.listeners.push(fn)

    // Return an unsubscribe function.
    return () => {
      pull(this.listeners, fn)
    }
  }

  broadcast = () => {
    for (const listener of this.listeners) {
      listener()
    }
  }

}