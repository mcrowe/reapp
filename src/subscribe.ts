import * as React from 'react'
import { ISubscribable, ICallable } from './types'


export default function subscribe(...subscriptions: ISubscribable[]) {
  return function wrap<T>(WrappedComponent: React.ComponentType<T>) {
    return class SubscribedComponent extends React.Component<T> {

      unsubscribes: ICallable[] = []

      componentWillMount() {
        // Subscribe to all subscriptions and store unsubscribe functions.
        this.unsubscribes = subscriptions.map(sub => sub.subscribe(this.reload))
      }

      componentWillUnmount() {
        // Unsubscribe to all subscriptions
        for (const unsubscribe of this.unsubscribes) {
          unsubscribe()
        }
      }

      reload = () => {
        this.forceUpdate()
      }

      render() {
        return React.createElement(WrappedComponent, this.props)
      }

    }
  }

}