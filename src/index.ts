import React = require('react')
import ReactDOM = require('react-dom')
import StyleSheet from '@mcrowe/tss'
import App from './app'
import Router from './router'
import Store from './store'


function createApp<T>(router: Router<T>, store: Store<T>) {
  const el = createElement()
  const comp = React.createElement(App, { router, store })
  ReactDOM.render(comp, el)
}


export default {
  StyleSheet,
  Router,
  Store,
  createApp
}


function createElement() {
  const el = document.createElement('div')
  el.id = 'reapp'
  document.body.appendChild(el)
  return el
}