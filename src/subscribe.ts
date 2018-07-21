import * as React from 'react'
import { ISubscribable, ICallable } from './types'


export default function subscribe(...subscriptions: ISubscribable[]) {
  return function (WrappedComponent: React.ComponentType) {
    return class SubscribedComponent extends React.Component {

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
        return React.createElement(WrappedComponent)
      }

    }
  }

}