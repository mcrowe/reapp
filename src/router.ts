import React = require('react')


export type IGetProps<T> = (session: T) => object

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

  constructor() {
    this.handlers = {}
    this.routes = []
  }

  route(path: string, component: IComponent, getProps?: IGetProps<T>) {
    this.handlers[path] = { component, getProps }
  }

  renderScene(session: T) {
    const route = this.getCurrentRoute()
    const handler = this.resolve(route)
    const props = handler.getProps(session)
    return React.createElement(handler.component, props)
  }

  push(route: IRoute) {
    this.routes.push(route)
  }

  replace(route: IRoute) {
    this.routes[this.routes.length - 1] = route
  }

  pop() {
    if (this.routes.length > 1) {
      this.routes.pop()
    }
  }

  getCurrentRoute(): IRoute {
    return this.routes[this.routes.length - 1]
  }

  private resolve(route: IRoute): IHandler<T> {
    const handler = this.handlers[route.path]

    if (!handler) {
      throw new Error(`Missing handler for route ${JSON.stringify(route)}`)
    }

    return handler
  }

}