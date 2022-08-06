/* eslint-disable prettier/prettier */
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import LoginPage from '../containers/Login'
import RegisterPage from '../containers/Register'

function Routes() {
  return (
    <Router>
      <Switch>
        <Route component={LoginPage} exact path="/login" />
        <Route component={RegisterPage} path="/cadastro" />
      </Switch>
    </Router>
  )
}

export default Routes
