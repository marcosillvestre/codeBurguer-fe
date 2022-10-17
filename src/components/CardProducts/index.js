/* eslint-disable prettier/prettier */
import React from 'react'

import PropTypes from 'prop-types'

import { useCart } from '../../hooks/CartContext'
import { Container, Img, ProductName, ProductPrice, Button } from './styles'

export function CardProduct({ product }) {

    const { putInfoInCart } = useCart()

    return (

        <Container>
            <Img src={product.url} alt='imagem do produto' />
            <div>
                <ProductName>{product.name}</ProductName>
                <ProductPrice>{product.formatedValue}</ProductPrice>
                <Button onClick={() => putInfoInCart(product)}>Adicionar</Button>
            </div>
        </Container>
    )


}


CardProduct.propTypes = {
    product: PropTypes.object
}
