/* eslint-disable prettier/prettier */
import React from 'react'
import { Redirect, Route } from 'react-router-dom'

import PropTypes from 'prop-types'

import { Header } from '../components/Header'
import allPaths from '../constants/paths'

function PrivateRoutes({ component, isAdmin, ...rest }) {
    const user = localStorage.getItem('codeBurguer:userData')

    console.log(JSON.parse(user).data.admins)

    if (!user) {
        return <Redirect to={allPaths.login} />
    }

    if (isAdmin && !JSON.parse(user).data.admins) {
        return <Redirect to={allPaths.home} />
    }

    return (
        <>
            {!isAdmin && <Header />}
            <Route {...rest} component={component} />
        </>
    )

}





export default PrivateRoutes

PrivateRoutes.propTypes = {
    component: PropTypes.oneOfType([PropTypes.func, PropTypes.element]),
    isAdmin: PropTypes.bool
}