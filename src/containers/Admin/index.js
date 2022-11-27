/* eslint-disable prettier/prettier */
import React from 'react'

import PropTypes from 'prop-types'

import Sidebar from '../../components/adminSideBar'
import allPaths from '../../constants/paths'
import EditOrders from './EditOrders'
import NewProducts from './NewProducts'
import Orders from './Orders'
import { Container, ContainerItens } from './styles'

export function Admin({ match: { path } }) {

    console.log(path)

    return (

        <Container>
            <Sidebar path={path} />
            <ContainerItens>
                {path === allPaths.admin && <Orders />}
                {path === allPaths.edit && <EditOrders />}
                {path === allPaths.newProduct && <NewProducts />}
            </ContainerItens>
        </Container>

    )
}

Admin.propTypes = {
    match: PropTypes.shape({
        path: PropTypes.string,
        url: PropTypes.string
    })
}