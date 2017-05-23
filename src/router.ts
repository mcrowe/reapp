import React = require('react')
import Channel from './channel'
import { IRoute } from './types'


export type IGetProps<T> = (params: any, session: T) => object

export type IComponent = React.ComponentClass<any>


export interface IHandler<T> {
  component: IComponent,
  getProps?: IGetProps<T>
}


export interface IHandlerMap<T> {
  [path: string]: IHandler<T>
}


export default class Router<T> {

  handlers: IHandlerMap<T>
  routes: IRoute[]
  private channel: Channel

  constructor(initialRoute: IRoute) {
    this.handlers = {}
    this.routes = [initialRoute]
  }

  route(path: string, component: IComponent, getProps?: IGetProps<T>) {
    this.handlers[path] = { component, getProps }
    return this
  }

  renderScene(session: T) {
    const route = this.getCurrentRoute()
    const handler = this.resolve(route)

    let props = {}

    if (typeof handler.getProps == 'function') {
      props = handler.getProps(route.params, session)
    }

    return React.createElement(handler.component, props)
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

  private resolve(route: IRoute): IHandler<T> {
    const handler = this.handlers[route.path]

    if (!handler) {
      throw new Error(`Missing handler for route ${JSON.stringify(route)}`)
    }

    return handler
  }

  private broadcast() {
    this.channel.broadcast(this.routes)
  }

}