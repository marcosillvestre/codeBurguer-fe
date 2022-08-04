import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import LoginPage from './containers/Login'
import RegisterPage from './containers/Register'

const Routes = () => {
  <Router>
    <Route exact path="/" component={LoginPage} />
    <Route path="/Register" component={RegisterPage} />
  </Router>
}

export default Routes
