import * as React from 'react'
import Channel from './channel'
import { IRoute, ISubscribable } from './types'


type IComponent = React.ComponentType<any>


export interface IComponentMap {
  [path: string]: IComponent
}



function makeNotFound(route: IRoute) {
  return class NotFound extends React.Component {

    render() {
      return React.createElement('h1', null, `Route not found ${JSON.stringify(route)}`)
    }

  }
}


export default class Router implements ISubscribable {

  private routes: IRoute[]
  private map: IComponentMap = {}
  private channel: Channel = new Channel()

  constructor(initialRoute: IRoute) {
    this.routes = [initialRoute]
  }

  route(path: string, component: IComponent) {
    this.map[path] = component
    return this
  }

  renderScene() {
    const route = this.getCurrentRoute()
    const comp = this.resolve(route)
    return React.createElement(comp, route.params)
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

  private resolve(route: IRoute): IComponent {
    const comp = this.map[route.path]

    if (comp) {
      return comp
    } else {
      console.error(`Missing handler for route ${JSON.stringify(route)}`)
      return makeNotFound(route)
    }
  }

  private makeRoute(path: string, params: object) {
    return { path, params }
  }

  private broadcast() {
    this.channel.broadcast()
  }

}