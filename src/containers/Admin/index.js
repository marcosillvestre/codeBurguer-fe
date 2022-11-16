/* eslint-disable prettier/prettier */
import React from 'react'

import Sidebar from '../../components/adminSideBar'
import Orders from './Orders'
import { Container, ContainerItens } from './styles'

export function Admin() {


    return (

        <Container>
            <Sidebar />
            <ContainerItens>
                <Orders />
            </ContainerItens>
        </Container>

    )
}
