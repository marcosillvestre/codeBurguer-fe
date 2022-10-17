/* eslint-disable prettier/prettier */
import React, { } from 'react'
import { } from 'react-router-dom'

import homePage from '../../assets/homePage.png'
import { CategoryCarrousel, OfferCarrousel } from '../../components'
import { Container, HomeLogo } from './styles'


export function Home() {


    return (
        <Container>

            <HomeLogo src={homePage} />
            <CategoryCarrousel />
            <OfferCarrousel />

        </Container>
    )
}
