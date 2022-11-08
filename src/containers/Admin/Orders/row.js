/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react'

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import PropType from 'prop-types'

import { Container } from './styles'

function Row({ row }) {

 const [open, setOpen] = React.useState(false);


 return (

  <Container>
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
     <TableCell>{row.date}</TableCell>
     <TableCell>{row.status}</TableCell>
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
             <img src={productsRow.url} alt="imagem do produto" />
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

  </Container>

 )
}



Row.propTypes = {

 row: PropType.shape({
  name: PropType.string.isRequired,
  orderId: PropType.string.isRequired,
  date: PropType.string.isRequired,
  status: PropType.string.isRequired,

  products: PropType.arrayOf({
   quantity: PropType.number.isRequired,
   name: PropType.string.isRequired,
   category: PropType.string.isRequired,
   url: PropType.string.isRequired,


  }).isRequired
 }).isRequired
}








export default Row

