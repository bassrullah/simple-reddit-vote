import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import LandingPage from '../src/pages/LandingPage'

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={LandingPage} />
      </Router>
    )
  }
}

export default App;