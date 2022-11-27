/* eslint-disable prettier/prettier */
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import allPaths from '../constants/paths'
import { Admin, Cart, Home, Login, Products, Register } from '../containers'
import PrivateRoutes from './privatesRoutes'

function Routes() {
  return (
    <Router>
      <Switch>

        <Route component={Register} path={allPaths.register} />
        <Route component={Login} path={allPaths.login} />
        <PrivateRoutes exact component={Home} path={allPaths.home} />

        <PrivateRoutes component={Products} path={allPaths.products} />
        <PrivateRoutes component={Cart} path={allPaths.cart} />


        <PrivateRoutes component={Admin} path={allPaths.admin} isAdmin />
        <PrivateRoutes component={Admin} path={allPaths.edit} isAdmin />
        <PrivateRoutes component={Admin} path={allPaths.newProduct} isAdmin />



      </Switch>
    </Router>
  )
}

export default Routes
