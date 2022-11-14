/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query';

import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import apiCodeB from '../../../services/api';
import Row from './row';
import status from './status'
import { Container, Menu, LinkMenu } from './styles'

function Orders() {
    const [orders, setOrders] = useState([])
    const [rows, setRows] = useState([])
    const [filteredStatus, setFilteredStatus] = useState([])
    const [activeStatus, setActiveStatus] = useState(1)



    async function getOrders() {
        const { data } = await apiCodeB.get('orders')
        setOrders(data)
        setFilteredStatus(data)
    }

    const { isFetching } = useQuery('Orders', () => getOrders(),
        {
            staleTime: 60000,
        })


    function createData(orders) {
        return {
            name: orders.user.name,
            orderId: orders._id,
            date: orders.createdAt,
            status: orders.status,
            products: orders.products,
        }
    }

    useEffect(() => {
        const newRow = filteredStatus.map(ord => createData(ord))
        setRows(newRow)
    }, [filteredStatus])


    function handleStatus(status) {
        if (status.id === 1) {
            setFilteredStatus(orders)
        } else {
            const newOrder = orders.filter(order => order.status === status.value)
            setFilteredStatus(newOrder)
        }
        setActiveStatus(status.id)
    }


    return (

        <Container>

            <Menu>
                {status &&
                    status.map(status => (
                        <LinkMenu
                            key={status.id}
                            onClick={() => handleStatus(status)}
                            isActive={activeStatus === status.id}
                        >{status.label}</LinkMenu>
                    ))
                }


            </Menu>
            <TableContainer component={Paper}>

                <Table aria-label="collapsible table">
                    <TableHead  >
                        <TableRow>
                            <TableCell></TableCell>

                            <TableCell>Pedidos</TableCell>
                            <TableCell> Cliente </TableCell>
                            <TableCell>Data de pedido</TableCell>
                            <TableCell> Status</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {rows.map((row) => (
                            <Row key={row.orderId} row={row} />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            {isFetching && <p>Carregando...</p>}

        </Container>

    )
}

export default Orders