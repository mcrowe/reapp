import React = require('react')
import Channel from './channel'
import { IRoute } from './types'


export type IGetProps<T> = (params: any, session: T) => object

export type IComponent = React.ComponentClass<any>



export interface IComponentMap<T> {
  [path: string]: IComponent
}


export default class Router<T> {

  map: IComponentMap<T>
  routes: IRoute[]
  private channel: Channel

  constructor(initialRoute: IRoute) {
    this.map = {}
    this.routes = [initialRoute]
    this.channel = new Channel()
  }

  route(path: string, component: IComponent) {
    this.map[path] = component
    return this
  }

  renderScene(session: T) {
    const route = this.getCurrentRoute()
    const comp = this.resolve(route)
    return React.createElement(comp, route.params)
  }

  push(path: string, params: object) {
    const route = this.makeRoute(path, params)
    this.routes.push(route)
    this.broadcast()
  }

  replace(path: string, params: object) {
    const route = this.makeRoute(path, params)
    this.routes[this.routes.length - 1] = route
    this.broadcast()
  }

  pop() {
    if (this.routes.length > 1) {
      this.routes.pop()
      this.broadcast()
    }
  }

  pusher(path: string, params: object) {
    return () => this.push(path, params)
  }

  popper() {
    return () => this.pop()
  }

  getCurrentRoute(): IRoute {
    return this.routes[this.routes.length - 1]
  }

  makeRoute(path: string, params: object) {
    return { path, params }
  }

  subscribe(fn: Function) {
    return this.channel.subscribe(fn)
  }

  private resolve(route: IRoute): IComponent {
    const comp = this.map[route.path]

    if (!comp) {
      throw new Error(`Missing handler for route ${JSON.stringify(route)}`)
    }

    return comp
  }

  private broadcast() {
    this.channel.broadcast(this.routes)
  }

}