/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { useHistory } from 'react-router-dom';

import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import DoDisturbIcon from '@mui/icons-material/DoDisturb';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import allPaths from '../../../constants/paths';
import apiCodeB from '../../../services/api';
import formatedCurrency from '../../../utils/FormatedCurrency';
import { ProductImg } from '../Orders/styles';
import { Container, EditIcon } from './styles';

function ListProducts() {
  const [products, setProducts] = useState([])
  const { push } = useHistory()

  async function getOrders() {
    const { data } = await apiCodeB.get('products')
    setProducts(data)

  }
  const { isFetching } = useQuery('Products', () => getOrders(),)

  function checked(isChecked) {
    if (!isChecked) {
      return <DoDisturbIcon />
    }
    return <CheckCircleOutlineIcon />
  }

  function editProductFunc(product) {
    push(allPaths.editProduct, { product })
  }

  return (
    <Container>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Nome </TableCell>
              <TableCell>Oferta</TableCell>
              <TableCell>Preço</TableCell>
              <TableCell>Categoria</TableCell>
              <TableCell>Imagem</TableCell>
              <TableCell>Editar</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products && products.map((pd) => (
              <TableRow
                key={pd.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {pd.name}

                </TableCell>
                <TableCell>{checked(pd.offer)}</TableCell>

                <TableCell>{formatedCurrency(pd.price)}</TableCell>
                <TableCell>{pd.category.name}</TableCell>
                <TableCell><ProductImg src={pd.url} alt='imagem-produto' /></TableCell>
                <TableCell><EditIcon onClick={() => editProductFunc(pd)} /> </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {isFetching && <p>Carregando...</p>}
    </Container>
  )
}





export default ListProducts

