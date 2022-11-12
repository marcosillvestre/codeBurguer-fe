/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react'

import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import apiCodeB from '../../../services/api';
import Row from './row';
import { Container } from './styles'

function Orders() {
    const [orders, setOrders] = useState([])
    const [rows, setRows] = useState([])


    useEffect(() => {
        async function loadCategory() {
            const { data } = await apiCodeB.get('orders')
            setOrders(data)
        }

        loadCategory()
    }, [])


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

        const newRow = orders.map(ord => createData(ord))
        setRows(newRow)

    }, [orders])


    return (

        <Container>
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
        </Container>

    )
}

export default Orders