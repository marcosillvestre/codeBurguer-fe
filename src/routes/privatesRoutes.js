/* eslint-disable prettier/prettier */
import React from 'react'
import { Route, Redirect } from 'react-router-dom'

import PropTypes from 'prop-types'

function PrivateRoutes({ component, ...rest }) {

    const user = localStorage.getItem('codeBurguer:userData')

    if (!user) {
        return <Redirect to="/login" />
    } else {
        return <Route {...rest} component={component} />
    }



}

export default PrivateRoutes

PrivateRoutes.propTypes = {
    component: PropTypes.oneOfType([PropTypes.func, PropTypes.element])
}