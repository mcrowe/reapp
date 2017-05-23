import React = require('react')
import { IRoute } from './types'
import Store from './store'
import Router from './router'


export interface IProps<T> {
  router: Router<T>
  store: Store<T>
}


export interface IState<T> {
  session: T,
  routes: IRoute[]
}


export default class App<T> extends React.Component<IProps<T>, IState<T>> {

  constructor(props: IProps<T>) {
    super(props)
    this.state = {
      session: props.store.get(),
      routes: props.router.routes
    }
    props.store.subscribe(session => this.setState({ session }))
    props.router.subscribe(routes => this.setState({ routes }))
  }

  render() {
    const session = this.props.store.get()
    return this.props.router.renderScene(session)
  }

}
