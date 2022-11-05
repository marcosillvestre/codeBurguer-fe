/* eslint-disable prettier/prettier */
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { Home, Login, Register, Products, Cart, Admin } from '../containers'
import PrivateRoutes from './privatesRoutes'

function Routes() {
  return (
    <Router>
      <Switch>
        <Route component={Login} path="/login" />
        <Route component={Register} path="/cadastro" />
        <PrivateRoutes component={Products} path={"/produtos"} />
        <PrivateRoutes component={Cart} path={'/carrinho'} />
        <PrivateRoutes exact component={Home} path={'/'} />
        <PrivateRoutes component={Admin} path={'/admin'} />



      </Switch>
    </Router>
  )
}

export default Routes
