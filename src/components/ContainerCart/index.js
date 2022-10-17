/* eslint-disable prettier/prettier */
import React, { } from 'react'

import PropTypes from 'prop-types'

import { useCart } from '../../hooks/CartContext'
import formatCurrency from '../../utils/FormatedCurrency'
import { Container, Header, CartContainer, Img, EmptyCart } from './styles'

export function ContainerCart() {

    const { cartData, increaseCart, decreaseCart } = useCart()


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

            {cartData && cartData.length > 0 ?
                cartData.map(product => (
                    <CartContainer key={product.id}>
                        <Img src={product.url} alt='imagem do produto' />
                        <p>{product.name}</p>
                        <p>{product.formatedValue}</p>
                        <div className='quantity'>
                            <button onClick={() => decreaseCart(product.id)}>-</button>
                            <p>{product.quantity}</p>
                            <button onClick={() => increaseCart(product.id)}>+</button>

                        </div>
                        <p>{formatCurrency(product.price * product.quantity)} </p>
                    </CartContainer>
                ))
                : <EmptyCart>
                    Carrinho vazio
                </EmptyCart>
            }


        </Container>
    )


}


ContainerCart.propTypes = {
    product: PropTypes.object
}
