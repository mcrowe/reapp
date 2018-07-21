import {
  ISubscribable,
  IRoute
} from './types'
import Channel from './channel'


export default class Navigator implements ISubscribable {
  private routes: IRoute[]
  private channel: Channel = new Channel()

  constructor(initialRoute: IRoute) {
    this.routes = [initialRoute]
  }

  push(path: string, params: object = {}) {
    const route = this.makeRoute(path, params)
    this.routes.push(route)
    this.broadcast()
  }

  replace(path: string, params: object = {}) {
    const route = this.makeRoute(path, params)
    this.routes[this.routes.length - 1] = route
    this.broadcast()
  }

  // Alias for go
  go = this.replace

  pop() {
    if (this.routes.length > 1) {
      this.routes.pop()
      this.broadcast()
    }
  }

  getCurrentRoute(): IRoute {
    return this.routes[this.routes.length - 1]
  }

  subscribe = this.channel.subscribe

  private makeRoute(path: string, params: object) {
    return { path, params }
  }

  private broadcast() {
    this.channel.broadcast()
  }

}