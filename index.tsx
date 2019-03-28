import { h, render } from 'preact'
import { createStore, Provider, connect } from 'unistore/full/preact'

/* @jsx h */

let store = createStore({ count: 0 })

let actions = (store) => ({
  increment (state) {
    return { count: state.count + 1 }
  },

  decrement (state) {
    return { count: state.count - 1 }
  }
})

const App = connect('count', actions)(
  ({ count, increment, decrement }) => (
    <div>
      <header>App Header</header>
      <section>
        <p>Count: {count}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </section>
    </div>
  )
)

render((
  <Provider store={store}>
    <App />
  </Provider>
), document.body)
