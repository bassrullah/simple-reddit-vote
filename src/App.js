import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './store'
import LandingPage from '../src/pages/LandingPage'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Route exact path="/" component={LandingPage} />
        </Router>
      </Provider>
    )
  }
}

export default App;