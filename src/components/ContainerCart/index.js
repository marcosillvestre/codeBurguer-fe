/* eslint-disable prettier/prettier */
import React, { } from 'react'

import PropTypes from 'prop-types'

import { useCart } from '../../hooks/CartContext'
import formatCurrency from '../../utils/FormatedCurrency'
import { Container, Header, CartContainer, Img } from './styles'

export function ContainerCart() {

    const { cartData } = useCart()


    console.log(cartData)



    return (

        <Container>

            <Header>
                <p></p>
                <p>Itens</p>
                <p>Preço</p>
                <p>Quantidade</p>
                <p>Total</p>
            </Header>

            {cartData && cartData.map(product => (
                <CartContainer key={product.id}>
                    <Img src={product.url} alt='imagem do produto' />
                    <p>{product.name}</p>
                    <p>{product.formatedValue}</p>
                    <p>{product.quantity}</p>
                    <p>{formatCurrency(product.price * product.quantity)} </p>
                </CartContainer>
            ))}


        </Container>
    )


}


ContainerCart.propTypes = {
    product: PropTypes.object
}
