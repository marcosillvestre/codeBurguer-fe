/* eslint-disable prettier/prettier */
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { Admin, Cart, Home, Login, Products, Register } from '../containers'
import EditOrders from '../containers/Admin/EditOrders'
import PrivateRoutes from './privatesRoutes'

function Routes() {
  return (
    <Router>
      <Switch>

        <Route component={Login} path="/login" />
        <Route component={Register} path="/cadastro" />
        <PrivateRoutes component={Products} path={"/produtos"} />
        <PrivateRoutes component={Cart} path={'/carrinho'} />

        <PrivateRoutes component={Admin} path={'/admin'} isAdmin />
        <PrivateRoutes component={EditOrders} path={'/listagem-produtos'} isAdmin />

        <PrivateRoutes exact component={Home} path={'/'} />

      </Switch>
    </Router>
  )
}

export default Routes
