/* eslint-disable prettier/prettier */
import React from 'react'

import PropTypes from 'prop-types'

import Sidebar from '../../components/adminSideBar'
import allPaths from '../../constants/paths'
import EditProducts from './EditProducts'
import ListProducts from './ListProducts'
import NewProducts from './NewProducts'
import Orders from './Orders'
import { Container, ContainerItens } from './styles'

export function Admin({ match: { path } }) {


    return (

        <Container>
            <Sidebar path={path} />
            <ContainerItens>
                {path === allPaths.admin && <Orders />}
                {path === allPaths.listProducts && <ListProducts />}
                {path === allPaths.newProduct && <NewProducts />}

                {path === allPaths.editProduct && <EditProducts />}
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