import React, { Component } from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Match } from 'react-router'
import { Provider } from 'react-redux'
import store from './redux/store'
import Landing from './Landing'
import ShoppingCart from './ShoppingCart'

export default class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <Provider store={store}>
          <div className='app'>
            <Match exactly pattern='/' component={Landing} />
            <Match exactly pattern='/shopping-cart' component={ShoppingCart} />
            {/* <Match exactly pattern='/checkout'  */}
          </div>
        </Provider>
      </BrowserRouter>
    )
  }
}

render(<App />, document.getElementById('app'))
