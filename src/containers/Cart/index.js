/* eslint-disable prettier/prettier */
import React, { } from 'react'
import { } from 'react-router-dom'

import CartPage from '../../assets/cartBg.svg'
import { ContainerCart } from '../../components'
import { Container, CartLogo } from './styles'


export function Cart() {


    return (
        <Container>
            <CartLogo src={CartPage} />
            <ContainerCart />
        </Container>
    )
}
