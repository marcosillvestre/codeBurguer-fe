/* eslint-disable prettier/prettier */
import React, { } from 'react'

import CartPage from '../../assets/cartBg.svg'
import { ContainerCart, ResumeCart } from '../../components'
import { Container, CartLogo, Wrapper } from './styles'


export function Cart() {


    return (
        <Container>
            <CartLogo src={CartPage} />
            <Wrapper>
                <ContainerCart />
                <ResumeCart />
            </Wrapper>
        </Container>
    )
}
