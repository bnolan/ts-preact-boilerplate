import { h, render } from 'preact'
import { createStore, Provider, connect } from 'unistore/full/preact'

/* @jsx h */

interface State {
  count: number
}

let store = createStore<State>({ count: 0 })

let actions = (store) => ({
  increment (state: State): State {
    return { count: state.count + 1 }
  },

  decrement (state: State): State {
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
