import React = require('react')


export type IGetProps<T> = (params: object, session: T) => object

export type IComponent = React.ComponentClass<any>


export interface IHandler<T> {
  component: IComponent,
  getProps?: IGetProps<T>
}


export interface IHandlerMap<T> {
  [path: string]: IHandler<T>
}


export interface IRoute {
  path: string
  params: object
}


export default class Router<T> {

  handlers: IHandlerMap<T>
  routes: IRoute[]

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
  }

  replace(path: string, params: object) {
    const route = this.makeRoute(path, params)
    this.routes[this.routes.length - 1] = route
  }

  pop() {
    if (this.routes.length > 1) {
      this.routes.pop()
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

  private resolve(route: IRoute): IHandler<T> {
    const handler = this.handlers[route.path]

    if (!handler) {
      throw new Error(`Missing handler for route ${JSON.stringify(route)}`)
    }

    return handler
  }

}