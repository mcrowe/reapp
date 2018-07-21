import * as React from 'react'
import Navigator from './navigator'
import {
  IRoute,
  ISubscribable,
  IComponentMap,
  IComponent
} from './types'


function makeNotFound(route: IRoute) {
  return class NotFound extends React.Component {

    render() {
      return React.createElement('h1', null, `Route not found ${JSON.stringify(route)}`)
    }

  }
}


export default class Router implements ISubscribable {

  private map: IComponentMap = {}
  private navigator: Navigator

  constructor(initialRoute: IRoute) {
    this.navigator = new Navigator(initialRoute)
  }

  getNavigator() {
    return this.navigator
  }

  register(map: IComponentMap) {
    this.map = map
  }

  renderScene() {
    const route = this.navigator.getCurrentRoute()
    const comp = this.resolve(route)
    return React.createElement(comp, route.params)
  }

  subscribe = this.navigator.subscribe

  private resolve(route: IRoute): IComponent {
    const comp = this.map[route.path]

    if (comp) {
      return comp
    } else {
      console.error(`Missing handler for route ${JSON.stringify(route)}`)
      return makeNotFound(route)
    }
  }

}