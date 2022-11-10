/* eslint-disable prettier/prettier */
import React, { useState } from 'react'

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import PropType from 'prop-types'

import apiCodeB from '../../../services/api';
import formatDate from '../../../utils/FormatDate'
import status from './status';
import { ProductImg, SelectStatus } from './styles'


function Row({ row }) {
    const [statuss, setStatus] = useState()
    const [open, setOpen] = React.useState(false);

    const setNewStatus = async (id, status) => {
        setStatus(status)
        apiCodeB.put(`orders/${id}`, { status })
    }


    return (

        <React.Fragment>
            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row">
                    {row.orderId}
                </TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell> {formatDate(row.date)}   </TableCell>
                <TableCell>
                    <SelectStatus
                        options={status}
                        menuPortalTarget={document.body}
                        placeholder={row.status}
                        onChange={newStatus => { setNewStatus(row.orderId, newStatus.value) }} />
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }}>
                            <Typography variant="h6" gutterBottom component="div">
                                Pedido
                            </Typography>
                            <Table size="small" aria-label="purchases">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Quantidade</TableCell>
                                        <TableCell>Produto</TableCell>
                                        <TableCell>Categoria</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {row.products.map((productsRow) => (
                                        <TableRow key={productsRow.id}>
                                            <TableCell component="th" scope="row">
                                                {productsRow.quantity}
                                            </TableCell>
                                            <TableCell>{productsRow.name}</TableCell>
                                            <TableCell>{productsRow.category}</TableCell>
                                            <TableCell>
                                                <ProductImg src={productsRow.url} alt="imagem do produto" />
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>


    )
}



Row.propTypes = {

    row: PropType.shape({
        name: PropType.string.isRequired,
        orderId: PropType.string.isRequired,
        date: PropType.string.isRequired,
        status: PropType.string.isRequired,

        products: PropType.arrayOf(
            PropType.shape({
                quantity: PropType.number.isRequired,
                name: PropType.string.isRequired,
                category: PropType.string.isRequired,
                url: PropType.string.isRequired,

            })
        ).isRequired
    }).isRequired
}








export default Row

