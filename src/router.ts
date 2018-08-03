import * as React from 'react'
import { INavigator, IRoute, IRouteMap } from './types'

interface IProps<T extends IRouteMap> {
  initialRoute: IRoute
  routes: T
  getSceneProps: (nav: any) => object
}

interface IState {
  currentRoute: IRoute
}

export default class Router<T extends IRouteMap> extends React.Component<
  IProps<T>,
  IState
> {
  constructor(props: IProps<T>) {
    super(props)

    this.state = {
      currentRoute: props.initialRoute
    }
  }

  go = (path: string, params: object = {}) => {
    const route = this.makeRoute(path, params)
    this.setState({ currentRoute: route })
  }

  makeRoute(path: string, params: object): IRoute {
    return { path, params }
  }

  getNavigator(): INavigator {
    return {
      go: this.go
    }
  }

  render() {
    const { routes, getSceneProps } = this.props
    const { currentRoute } = this.state

    const component = routes[currentRoute.path]

    if (!component) {
      throw new Error(`Route not found ${currentRoute.path}.`)
    }

    const props = {
      ...getSceneProps(this.getNavigator()),
      params: { ...currentRoute.params }
    } as any

    return React.createElement(component, props)
  }
}
