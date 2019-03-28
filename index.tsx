import { h, render, Component } from 'preact'
import { createStore, Provider, connect } from 'unistore/full/preact'

import './style.less'

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

interface Props {
  count?: number,
  increment?: any,
  decrement?: any
}

@connect('count', actions)
class App extends Component<Props, any> {
  render () {
    return (
      <div>
        <header>App Header</header>
        <section>
          <p>Count: {this.props.count}</p>
          <button onClick={this.props.increment}>Increment</button>
          <button onClick={this.props.decrement}>Decrement</button>
        </section>
      </div>
    )
  }
}

render((
  <Provider store={store}>
    <App />
  </Provider>
), document.body)
