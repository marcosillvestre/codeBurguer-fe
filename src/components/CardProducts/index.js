/* eslint-disable prettier/prettier */
import React from 'react'
import { useHistory } from 'react-router-dom'

import PropTypes from 'prop-types'

import { useCart } from '../../hooks/CartContext'
import { Container, Img, ProductName, ProductPrice, Button } from './styles'

export function CardProduct({ product }) {

    const { putInfoInCart } = useCart()
    const { push } = useHistory()
    return (

        <Container>
            <Img src={product.url} alt='imagem do produto' />
            <div>
                <ProductName>{product.name}</ProductName>
                <ProductPrice>{product.formatedValue}</ProductPrice>
                <Button onClick={() => {
                    putInfoInCart(product)
                    push('/carrinho')
                }}>Adicionar</Button>
            </div>
        </Container>
    )
}


CardProduct.propTypes = {
    product: PropTypes.object
}
