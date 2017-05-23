import React = require('react')
import Store from './store'
import Router from './router'


export interface IProps<T> {
  router: Router<T>
  store: Store<T>
}


export default class App<T> extends React.Component<IProps<T>, T> {

  constructor(props) {
    super(props)
    this.state = props.store.get()
    props.store.subscribe(v => this.setState(v))
  }

  render() {
    const session = this.props.store.get()
    return this.props.router.renderScene(session)
  }

}
