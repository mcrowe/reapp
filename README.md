# Reapp

Reapp is a simple state-management and routing library for React. It intentionally defies "best-practices" in order to make apps easy to build without losing the ability to architect large apps well.

- State is stored in stores which are *mutated* (shutter!)
- Routing is done without update the url, or handling back gracefully (oh no!)
- The entire app is refreshed every time a store is updated (gasp!)

## Usage

> npm install @mcrowe/reapp --save

```js
import { Store, Router, subscribe } from '@mcrowe/reapp'
import App from './app'
import Home from './scenes'
import Page from './scenes'


// Use "Store" for a subscribable data store
const store = new Store({counter: 5})

store.get().counter // 5

// Update the store and broadcast changes
store.update(v =>
  v.counter += 1
)

store.get().counter = 7
store.set() // broadcast changes outside of a broadcast


// Use "Router" to handle navigation
const router = new Router({path: 'home', params: {}})

router.route('home', App)
router.route('page', Page)

router.push('page', {id: 5})
router.pop()

router.getCurrentRoute() // {path: 'home', params: {}}


// Use "subscribe" to subscribe any component to changes
// in one or more "ISubscribable" (router, store, ...)
const SubscribedApp = subscribe(router, store)(App)
```

## Development

Install npm modules:

> npm install

Run tests:

> npm test

## Release

Release a new version:

> bin/release.sh

This will publish a new version to npm, as well as push a new tag up to github.
