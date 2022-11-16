/* eslint-disable prettier/prettier */
import React from 'react'

import Sidebar from '../../components/adminSideBar'
import EditOrders from './EditOrders'
import { Container } from './styles'

export function Admin() {


    return (

        <Container>
            <Sidebar />
            {/* <Orders /> */}
            <EditOrders />
        </Container>

    )
}
